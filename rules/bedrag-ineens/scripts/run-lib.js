/**
 * Shared library for running bedrag-ineens rules
 * Extracted from run.js for reuse in batch testing
 */

const fs = require('fs');
const path = require('path');

// Import from regelspraak-ts dist
const regelspraakPath = path.resolve(__dirname, '../../../regelspraak-ts/dist');
const { Engine, Context } = require(regelspraakPath);

const rulesDir = path.resolve(__dirname, '..');

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

function loadRules(regelsFile = 'regels.rs') {
  const gegevens = fs.readFileSync(path.join(rulesDir, 'gegevens.rs'), 'utf-8');
  const regels = fs.readFileSync(path.join(rulesDir, regelsFile), 'utf-8');
  const rulesText = `${gegevens}\n\n${regels}`;

  const engine = new Engine();
  const parseResult = engine.parseModel(rulesText);

  if (!parseResult.success) {
    throw new Error(`Parse error: ${JSON.stringify(parseResult.errors)}`);
  }

  return { engine, model: parseResult.model };
}

function runProfile(engineModel, profileData, options = {}) {
  const { engine, model } = engineModel;
  const { verbose = false } = options;

  const context = new Context(model);

  // Set rekendatum if provided
  if (profileData.rekendatum) {
    context.setEvaluationDate(new Date(profileData.rekendatum));
  }

  // Set parameters
  for (const [name, value] of Object.entries(profileData.parameters)) {
    context.setVariable(name, parseValue(value));
  }

  // Create Persoon objects
  for (const p of profileData.objects.personen || []) {
    const attrs = {};
    for (const [k, v] of Object.entries(p)) {
      if (k !== 'id') attrs[k] = parseValue(v);
    }
    context.createObject('Persoon', p.id, attrs);
  }

  // Create Scenario objects
  for (const s of profileData.objects.scenarios || []) {
    const attrs = {};
    for (const [k, v] of Object.entries(s)) {
      if (k !== 'id') attrs[k] = parseValue(v);
    }
    context.createObject('Scenario', s.id, attrs);
  }

  // Set kenmerken
  if (profileData.kenmerken) {
    for (const [type, objects] of Object.entries(profileData.kenmerken)) {
      for (const [id, kenmerken] of Object.entries(objects)) {
        for (const [name, value] of Object.entries(kenmerken)) {
          context.setKenmerk(type, id, name, value);
        }
      }
    }
  }

  // Create relationships
  for (const rel of profileData.relationships || []) {
    if (rel.type === 'scenario van persoon') {
      const scenarioObj = context.getObjectsByType('Scenario').find(o => o.objectId === rel.scenario);
      const persoonObj = context.getObjectsByType('Persoon').find(o => o.objectId === rel.persoon);

      if (scenarioObj && persoonObj) {
        context.addRelationship('scenario van persoon', scenarioObj, persoonObj);
        scenarioObj.value['persoon'] = persoonObj;
      }
    }
  }

  // Execute rules
  const result = engine.execute(model, context);

  if (!result.success) {
    throw new Error(`Execution error: ${result.error}`);
  }

  // Extract results
  const scenarios = context.getObjectsByType('Scenario');
  const results = {};

  for (const s of scenarios) {
    const attrs = s.value || {};
    const scenarioResult = {};

    for (const [key, val] of Object.entries(attrs)) {
      if (key === 'persoon') continue; // Skip relationship reference
      const value = val?.value ?? val;
      if (value !== null && value !== undefined) {
        scenarioResult[key] = value;
      }
    }

    results[s.objectId] = scenarioResult;
  }

  return { scenarios: results };
}

function extractKeyMetrics(scenarioResult) {
  // Extract the key metrics we care about for summary
  return {
    'opname percentage': scenarioResult['opname percentage'],
    'bedrag ineens': scenarioResult['bedrag ineens'],
    'totaal inkomen': scenarioResult['totaal inkomen'],
    'belasting na heffingskortingen': scenarioResult['belasting na heffingskortingen'],
    'zorgtoeslag': scenarioResult['zorgtoeslag'],
    'huurtoeslag': scenarioResult['huurtoeslag'],
    'beschikbaar inkomen': scenarioResult['beschikbaar inkomen']
  };
}

module.exports = {
  loadRules,
  runProfile,
  extractKeyMetrics,
  parseValue
};
