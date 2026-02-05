#!/usr/bin/env node
/**
 * Bedrag Ineens Runner - Execute bedrag ineens scenarios
 * Following TOKA run_toka.ts pattern
 */

const fs = require('fs');
const path = require('path');

// Import from regelspraak-ts dist
const regelspraakPath = path.resolve(__dirname, '../../regelspraak-ts/dist');
const { Engine, Context } = require(regelspraakPath);

const rulesDir = __dirname;

function loadRules(regelsFile = 'regels.rs') {
  const gegevens = fs.readFileSync(path.join(rulesDir, 'gegevens.rs'), 'utf-8');
  const regels = fs.readFileSync(path.join(rulesDir, regelsFile), 'utf-8');
  return `${gegevens}\n\n${regels}`;
}

function loadScenario(file) {
  return JSON.parse(fs.readFileSync(path.join(rulesDir, file), 'utf-8'));
}

function parseValue(data) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return { type: 'number', value: data.value, unit: data.unit ? { name: data.unit } : undefined };
  }
  if (typeof data === 'number') return { type: 'number', value: data };
  if (typeof data === 'boolean') return { type: 'boolean', value: data };
  if (typeof data === 'string') {
    if (/^\d{4}-\d{2}-\d{2}/.test(data)) return { type: 'date', value: new Date(data) };
    return { type: 'string', value: data };
  }
  return { type: 'null', value: null };
}

async function main() {
  const scenarioFile = process.argv[2] || 'test_table1.json';
  const regelsFile = process.argv[3] || 'regels.rs';

  console.log(`Loading bedrag ineens rules (${regelsFile})...`);
  const rulesText = loadRules(regelsFile);

  const engine = new Engine();
  const parseResult = engine.parseModel(rulesText);

  if (!parseResult.success) {
    console.error('Parse error:', parseResult.errors);
    process.exit(1);
  }
  console.log('✅ Rules parsed successfully');

  const model = parseResult.model;
  const scenario = loadScenario(scenarioFile);
  console.log(`✅ Loaded scenario: ${scenario.name}`);

  const context = new Context(model);

  // Set rekendatum
  if (scenario.rekendatum) {
    context.setEvaluationDate(new Date(scenario.rekendatum));
  }

  // Set parameters
  for (const [name, value] of Object.entries(scenario.parameters)) {
    context.setVariable(name, parseValue(value));
  }
  console.log(`✅ Set ${Object.keys(scenario.parameters).length} parameters`);

  // Create Persoon objects (from "personen" key)
  for (const p of scenario.objects.personen || []) {
    const attrs = {};
    for (const [k, v] of Object.entries(p)) {
      if (k !== 'id') attrs[k] = parseValue(v);
    }
    context.createObject('Persoon', p.id, attrs);
  }

  // Create Scenario objects (from "scenarios" key)
  for (const s of scenario.objects.scenarios || []) {
    const attrs = {};
    for (const [k, v] of Object.entries(s)) {
      if (k !== 'id') attrs[k] = parseValue(v);
    }
    context.createObject('Scenario', s.id, attrs);
  }
  console.log('✅ Created objects');

  // Set kenmerken
  if (scenario.kenmerken) {
    for (const [type, objects] of Object.entries(scenario.kenmerken)) {
      for (const [id, kenmerken] of Object.entries(objects)) {
        for (const [name, value] of Object.entries(kenmerken)) {
          context.setKenmerk(type, id, name, value);
        }
      }
    }
    console.log('✅ Set kenmerken');
  }

  // Create relationships (using "scenario" and "persoon" fields like TOKA uses "flight_id" and "passenger_id")
  for (const rel of scenario.relationships || []) {
    if (rel.type === 'scenario van persoon') {
      const scenarioObj = context.getObjectsByType('Scenario').find(o => o.objectId === rel.scenario);
      const persoonObj = context.getObjectsByType('Persoon').find(o => o.objectId === rel.persoon);

      if (scenarioObj && persoonObj) {
        context.addRelationship('scenario van persoon', scenarioObj, persoonObj);
        // Store reference for navigation "de persoon van het scenario"
        // Following TOKA pattern: passengerData['reis'] = flight;
        scenarioObj.value['persoon'] = persoonObj;
      }
    }
  }
  console.log('✅ Created relationships');

  // Debug: Print objects before execution
  console.log('\n--- DEBUG: Objects before execution ---');
  const debugPersonen = context.getObjectsByType('Persoon');
  console.log('Persoon objects:', debugPersonen.length);
  for (const p of debugPersonen) {
    console.log(`  ${p.objectId}:`, Object.keys(p.value || {}));
  }
  const debugScenarios = context.getObjectsByType('Scenario');
  console.log('Scenario objects:', debugScenarios.length);
  for (const s of debugScenarios) {
    console.log(`  ${s.objectId}:`, Object.keys(s.value || {}));
    if (s.value?.persoon) {
      console.log(`    persoon ref type:`, typeof s.value.persoon);
      console.log(`    persoon ref keys:`, Object.keys(s.value.persoon));
      console.log(`    persoon ref objectId:`, s.value.persoon.objectId);
      console.log(`    persoon ref.type:`, s.value.persoon.type);
    }
  }
  console.log('--- END DEBUG ---\n');

  // Execute rules
  console.log('Executing rules...');
  const result = engine.execute(model, context);

  if (!result.success) {
    console.error('Execution error:', result.error);
    process.exit(1);
  }
  console.log('✅ Execution complete');

  // Print results
  console.log('\n' + '='.repeat(60));
  console.log('RESULTS');
  console.log('='.repeat(60));

  const scenarios = context.getObjectsByType('Scenario');
  for (const s of scenarios) {
    console.log(`\nScenario: ${s.objectId}`);
    const attrs = s.value || {};
    for (const [key, val] of Object.entries(attrs)) {
      if (key === 'persoon') continue; // Skip relationship reference
      const value = val?.value ?? val;
      if (typeof value === 'number') {
        console.log(`  ${key}: ${value.toFixed(2)}`);
      } else if (value !== null && value !== undefined) {
        console.log(`  ${key}: ${value}`);
      }
    }
  }

  // Validate
  if (scenario.expected) {
    console.log('\n' + '='.repeat(60));
    console.log('VALIDATION');
    console.log('='.repeat(60));

    for (const [objId, expected] of Object.entries(scenario.expected)) {
      const obj = scenarios.find(s => s.objectId === objId);
      if (!obj) {
        console.log(`❌ ${objId}: not found`);
        continue;
      }

      for (const [attr, expectedVal] of Object.entries(expected)) {
        const actual = obj.value?.[attr];
        const actualVal = actual?.value ?? actual;

        if (actualVal === undefined) {
          console.log(`❌ ${objId}.${attr}: not computed`);
        } else if (typeof expectedVal === 'number' && typeof actualVal === 'number') {
          const diff = Math.abs(actualVal - expectedVal);
          if (diff <= 200) {
            console.log(`✅ ${objId}.${attr}: ${actualVal.toFixed(0)} (expected ${expectedVal})`);
          } else {
            console.log(`❌ ${objId}.${attr}: ${actualVal.toFixed(0)} (expected ${expectedVal}, diff: ${diff.toFixed(0)})`);
          }
        } else {
          console.log(`${actualVal === expectedVal ? '✅' : '❌'} ${objId}.${attr}: ${actualVal} (expected ${expectedVal})`);
        }
      }
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
