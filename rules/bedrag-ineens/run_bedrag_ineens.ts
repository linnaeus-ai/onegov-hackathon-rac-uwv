#!/usr/bin/env npx ts-node
/**
 * Bedrag Ineens Runner - Execute bedrag ineens scenarios
 * Based on TOKA run_toka.ts pattern
 */

import * as fs from 'fs';
import * as path from 'path';

// Import from regelspraak-ts
const regelspraakPath = path.resolve(__dirname, '../../regelspraak-ts/src');
const { Engine, Context } = require(regelspraakPath);

interface Value {
  type: string;
  value: any;
  unit?: { name: string };
}

interface ScenarioData {
  name: string;
  description: string;
  rekendatum?: string;
  parameters: Record<string, any>;
  objects: {
    Persoon?: any[];
    Scenario?: any[];
  };
  relationships?: Array<{
    type: string;
    from: string;
    to: string;
    fromType?: string;
    toType?: string;
  }>;
  kenmerken?: Record<string, Record<string, Record<string, boolean>>>;
  expected?: Record<string, Record<string, any>>;
}

class BedragIneensRunner {
  private rulesDir: string;
  private engine: any;
  private context: any = null;
  private model: any = null;

  constructor() {
    this.rulesDir = path.resolve(__dirname);
    this.engine = new Engine();
  }

  loadRules(): string {
    const gegevensPath = path.join(this.rulesDir, 'gegevens.rs');
    const regelsPath = path.join(this.rulesDir, 'regels.rs');

    const gegevens = fs.readFileSync(gegevensPath, 'utf-8');
    const regels = fs.readFileSync(regelsPath, 'utf-8');

    return `${gegevens}\n\n${regels}`;
  }

  loadScenario(scenarioFile: string): ScenarioData {
    const scenarioPath = path.join(this.rulesDir, scenarioFile);
    const content = fs.readFileSync(scenarioPath, 'utf-8');
    return JSON.parse(content);
  }

  private parseValue(data: any): Value {
    if (typeof data === 'object' && data !== null && 'value' in data) {
      return {
        type: 'number',
        value: data.value,
        unit: data.unit ? { name: data.unit } : undefined
      };
    }
    if (typeof data === 'number') {
      return { type: 'number', value: data };
    }
    if (typeof data === 'boolean') {
      return { type: 'boolean', value: data };
    }
    if (typeof data === 'string') {
      if (/^\d{4}-\d{2}-\d{2}/.test(data)) {
        return { type: 'date', value: new Date(data) };
      }
      return { type: 'string', value: data };
    }
    return { type: 'null', value: null };
  }

  private addParameters(parameters: Record<string, any>): void {
    for (const [paramName, paramData] of Object.entries(parameters)) {
      const value = this.parseValue(paramData);
      this.context.setVariable(paramName, value);
    }
    console.log(`✅ Added ${Object.keys(parameters).length} parameters`);
  }

  private createObjects(objects: ScenarioData['objects']): void {
    let objectCount = 0;

    // Create Persoon objects
    for (const personData of objects.Persoon || []) {
      const attributes: Record<string, Value> = {};

      for (const [key, value] of Object.entries(personData)) {
        if (key === 'id') continue;
        attributes[key] = this.parseValue(value);
      }

      this.context.createObject('Persoon', personData.id, attributes);
      objectCount++;
    }

    // Create Scenario objects
    for (const scenarioData of objects.Scenario || []) {
      const attributes: Record<string, Value> = {};

      for (const [key, value] of Object.entries(scenarioData)) {
        if (key === 'id') continue;
        attributes[key] = this.parseValue(value);
      }

      this.context.createObject('Scenario', scenarioData.id, attributes);
      objectCount++;
    }

    console.log(`✅ Created ${objectCount} objects`);
  }

  private setKenmerken(kenmerken: ScenarioData['kenmerken']): void {
    if (!kenmerken) return;

    for (const [typeName, objectsKenmerken] of Object.entries(kenmerken)) {
      for (const [objectId, objectKenmerken] of Object.entries(objectsKenmerken)) {
        for (const [kenmerkName, value] of Object.entries(objectKenmerken)) {
          this.context.setKenmerk(typeName, objectId, kenmerkName, value);
        }
      }
    }
    console.log(`✅ Set kenmerken`);
  }

  private findObjectById(type: string, id: string): Value | null {
    const objects = this.context.getObjectsByType(type);
    for (const obj of objects) {
      if ((obj as any).objectId === id) {
        return obj;
      }
    }
    return null;
  }

  private createRelationships(relationships: ScenarioData['relationships']): void {
    if (!relationships) return;

    for (const rel of relationships) {
      if (rel.type === 'scenario van persoon') {
        const scenario = this.findObjectById('Scenario', rel.from);
        const persoon = this.findObjectById('Persoon', rel.to);

        if (scenario && persoon) {
          this.context.addRelationship('scenario van persoon', scenario, persoon);

          // Store the persoon reference on the scenario for navigation
          const scenarioData = (scenario as any).value as Record<string, Value>;
          scenarioData['persoon'] = persoon;
        }
      }
    }
    console.log(`✅ Created ${relationships.length} relationships`);
  }

  async execute(scenarioFile: string): Promise<void> {
    try {
      // Load and parse rules
      console.log('Loading bedrag ineens rules...');
      const rulesText = this.loadRules();
      const parseResult = this.engine.parseModel(rulesText);

      if (!parseResult.success) {
        throw new Error(`Parse error: ${parseResult.errors?.join(', ')}`);
      }

      this.model = parseResult.model;
      console.log(`✅ Successfully parsed rules`);

      // Load scenario
      console.log(`Loading scenario: ${scenarioFile}`);
      const scenario = this.loadScenario(scenarioFile);
      console.log(`✅ Loaded scenario: ${scenario.name}`);

      // Create runtime context
      this.context = new Context(this.model);

      // Set rekendatum
      if (scenario.rekendatum) {
        this.context.setEvaluationDate(new Date(scenario.rekendatum));
      }

      // Add parameters
      this.addParameters(scenario.parameters);

      // Create objects
      this.createObjects(scenario.objects);

      // Set kenmerken
      this.setKenmerken(scenario.kenmerken);

      // Create relationships
      this.createRelationships(scenario.relationships);

      // Execute rules
      console.log('Executing rules...');
      const result = this.engine.execute(this.model, this.context);

      if (!result.success) {
        throw new Error(`Execution error: ${result.error?.message}`);
      }
      console.log('✅ Rule execution completed');

      // Print results
      this.printResults();

      // Validate against expected
      if (scenario.expected) {
        this.validateResults(scenario.expected);
      }

    } catch (error) {
      console.error(`❌ Error: ${error}`);
      process.exit(1);
    }
  }

  private printResults(): void {
    console.log('\n' + '='.repeat(60));
    console.log('RESULTS');
    console.log('='.repeat(60));

    const scenarios = this.context.getObjectsByType('Scenario');
    for (const s of scenarios) {
      console.log(`\nScenario: ${(s as any).objectId}`);
      const attrs = (s as any).value || {};
      for (const [key, val] of Object.entries(attrs)) {
        const value = (val as Value)?.value ?? val;
        const unit = (val as Value)?.unit?.name || '';
        if (typeof value === 'number') {
          console.log(`  ${key}: ${value.toFixed(2)}${unit ? ' ' + unit : ''}`);
        } else if (value !== null && value !== undefined) {
          console.log(`  ${key}: ${value}${unit ? ' ' + unit : ''}`);
        }
      }
    }
  }

  private validateResults(expected: Record<string, Record<string, any>>): void {
    console.log('\n' + '='.repeat(60));
    console.log('VALIDATION');
    console.log('='.repeat(60));

    for (const [objectId, expectedValues] of Object.entries(expected)) {
      const obj = this.findObjectById('Scenario', objectId);
      if (!obj) {
        console.log(`❌ Object ${objectId} not found`);
        continue;
      }

      const attrs = (obj as any).value || {};
      for (const [attrName, expectedValue] of Object.entries(expectedValues)) {
        const actual = attrs[attrName];
        const actualValue = (actual as Value)?.value ?? actual;

        if (actualValue === undefined) {
          console.log(`❌ ${objectId}.${attrName}: not computed`);
        } else if (typeof expectedValue === 'number' && typeof actualValue === 'number') {
          const diff = Math.abs(actualValue - expectedValue);
          if (diff <= 200) {  // Allow ±200 tolerance
            console.log(`✅ ${objectId}.${attrName}: ${actualValue.toFixed(0)} (expected ${expectedValue})`);
          } else {
            console.log(`❌ ${objectId}.${attrName}: ${actualValue.toFixed(0)} (expected ${expectedValue}, diff: ${diff.toFixed(0)})`);
          }
        } else if (actualValue === expectedValue) {
          console.log(`✅ ${objectId}.${attrName}: ${actualValue}`);
        } else {
          console.log(`❌ ${objectId}.${attrName}: ${actualValue} (expected ${expectedValue})`);
        }
      }
    }
  }
}

// Main
const runner = new BedragIneensRunner();
const scenarioFile = process.argv[2] || 'test_table1.json';
runner.execute(scenarioFile);
