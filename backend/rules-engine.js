/**
 * Regelspraak Engine Wrapper
 * Uses the actual .rs rule files via the regelspraak-ts engine
 */

const { readFileSync, existsSync } = require('fs');
const { resolve, join } = require('path');

// Import from regelspraak-ts engine - try local copy first, then fall back to original location
const localRegelspraakPath = join(__dirname, 'regelspraak-engine');
const originalRegelspraakPath = resolve(__dirname, '../regelspraak-ts/dist');
const regelspraakPath = existsSync(localRegelspraakPath) ? localRegelspraakPath : originalRegelspraakPath;

let Engine, Context;

try {
  const regelspraak = require(regelspraakPath + '/index.js');
  Engine = regelspraak.Engine;
  Context = regelspraak.Context;
} catch (e) {
  console.error('Failed to load regelspraak-ts engine:', e.message);
  console.error('Make sure to run: cd regelspraak-ts && npm install && npm run build');
  process.exit(1);
}

// Paths to rule files - try local copy first, then fall back to original location
const localRulesDir = join(__dirname, 'rules/bedrag-ineens');
const originalRulesDir = resolve(__dirname, '../rules/bedrag-ineens');
const rulesDir = existsSync(localRulesDir) ? localRulesDir : originalRulesDir;
const gegevensPath = resolve(rulesDir, 'gegevens.rs');
const regelsPath = resolve(rulesDir, 'regels.rs');

// Parameters (2024 values from EK Nota)
const PARAMETERS = {
  'AOW bruto alleenstaand': 19600,
  'eerste schijfgrens': 40021,
  'tweede schijfgrens': 75518,
  'tarief eerste schijf AOW': 0.1907,
  'tarief tweede schijf': 0.3693,
  'tarief derde schijf': 0.4950,
  'Zvw percentage': 0.0545,
  'Zvw maximum': 73031,
  'AHK maximum AOW': 1735,
  'AHK afbouwgrens': 24813,
  'AHK afbouw percentage AOW': 0.03421,
  'OK maximum': 1835,
  'OK afbouwgrens': 44770,
  'OK afbouw percentage': 0.15,
  'AOK bedrag': 532,
  'ZT grens alleenstaand': 37496,
  'ZT maximum alleenstaand': 1800,
  'ZT drempel': 25437,
  'ZT afbouw percentage': 0.1322,
  'HT grens eerste': 26000,
  'HT grens tweede': 32000,
  'HT grens derde': 38000,
  'HT maximum': 2900,
  'jaarlijkse zorgkosten': 2100
};

// Global engine and model (parsed once at startup)
let engine = null;
let model = null;
let rulesLastModified = null;

/**
 * Load and parse the rules from .rs files
 * Reloads if files have been modified
 */
function loadRules() {
  const gegevensStats = readFileSync(gegevensPath);
  const regelsStats = readFileSync(regelsPath);

  // Check if we need to reload
  const currentMtime = `${gegevensStats.length}-${regelsStats.length}`;
  if (model && rulesLastModified === currentMtime) {
    return { engine, model };
  }

  console.log('Loading Regelspraak rules from .rs files...');

  const gegevens = readFileSync(gegevensPath, 'utf-8');
  const regels = readFileSync(regelsPath, 'utf-8');
  const rulesText = `${gegevens}\n\n${regels}`;

  engine = new Engine();
  const parseResult = engine.parseModel(rulesText);

  if (!parseResult.success) {
    console.error('Failed to parse rules:', parseResult.errors);
    throw new Error('Failed to parse Regelspraak rules');
  }

  model = parseResult.model;
  rulesLastModified = currentMtime;
  console.log('✅ Regelspraak rules loaded successfully');

  return { engine, model };
}

/**
 * Parse a value into the format expected by the engine
 */
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

/**
 * Extract a numeric value from engine result
 */
function getValue(val) {
  if (val === null || val === undefined) return 0;
  if (typeof val === 'number') return val;
  if (typeof val === 'object' && 'value' in val) return val.value ?? 0;
  return 0;
}

/**
 * Calculate scenario using the Regelspraak engine
 * @param {Object} persoon - Person data
 * @param {number} opnamePercentage - Withdrawal percentage (0-10)
 * @param {boolean} isJaarMetOpname - Whether this is the year of withdrawal
 * @returns {Object} All calculated values
 */
function calculateScenario(persoon, opnamePercentage, isJaarMetOpname = true) {
  const { engine, model } = loadRules();
  const context = new Context(model);

  // Set parameters
  for (const [name, value] of Object.entries(PARAMETERS)) {
    context.setVariable(name, parseValue(value));
  }

  // Create Persoon object
  const persoonId = 'persoon1';
  const persoonAttrs = {
    'AOW inkomen': parseValue(persoon.aowInkomen || 0),
    'aanvullend pensioen per maand': parseValue(persoon.aanvullendPensioenPerMaand || 0),
    'pensioenvermogen': parseValue(persoon.pensioenvermogen || 0),
    'overig inkomen': parseValue(persoon.overigInkomen || 0),
    'huur per maand': parseValue(persoon.huurPerMaand || 576)
  };
  context.createObject('Persoon', persoonId, persoonAttrs);

  // Set kenmerken for Persoon
  if (persoon.isAOWGerechtigd !== false) {
    context.setKenmerk('Persoon', persoonId, 'is AOW gerechtigd', true);
  }
  if (persoon.isAlleenstaand !== false) {
    context.setKenmerk('Persoon', persoonId, 'is alleenstaand', true);
  }

  // Create Scenario object
  const scenarioId = 'scenario1';
  const scenarioAttrs = {
    'opname percentage': parseValue(opnamePercentage)
  };
  context.createObject('Scenario', scenarioId, scenarioAttrs);

  // Set kenmerk for year with withdrawal (if applicable)
  if (isJaarMetOpname && opnamePercentage > 0) {
    context.setKenmerk('Scenario', scenarioId, 'is jaar met opname', true);
  }

  // Create relationship
  const scenarioObj = context.getObjectsByType('Scenario').find(o => o.objectId === scenarioId);
  const persoonObj = context.getObjectsByType('Persoon').find(o => o.objectId === persoonId);
  if (scenarioObj && persoonObj) {
    context.addRelationship('scenario van persoon', scenarioObj, persoonObj);
    scenarioObj.value['persoon'] = persoonObj;
  }

  // Execute rules
  const result = engine.execute(model, context);
  if (!result.success) {
    console.error('Execution error:', result.error);
    throw new Error('Failed to execute Regelspraak rules');
  }

  // Extract results from scenario
  const scenario = context.getObjectsByType('Scenario').find(o => o.objectId === scenarioId);
  const attrs = scenario?.value || {};

  const pensioenPerJaar = getValue(attrs['pensioen per jaar']);
  const bedragIneens = getValue(attrs['bedrag ineens']);
  const resterendPensioenPerJaar = getValue(attrs['resterend pensioen per jaar']);
  const permanentVerliesPerJaar = getValue(attrs['permanent verlies per jaar']);
  const inkomen = getValue(attrs['inkomen']);
  const zvwBijdrage = getValue(attrs['Zvw bijdrage']);
  const belastingEersteSchijf = getValue(attrs['belasting eerste schijf']);
  const belastingTweedeSchijf = getValue(attrs['belasting tweede schijf']);
  const belastingDerdeSchijf = getValue(attrs['belasting derde schijf']);
  const belastingBox1 = getValue(attrs['belasting box1']);
  const algemeneHeffingskorting = getValue(attrs['algemene heffingskorting']);
  const ouderenkorting = getValue(attrs['ouderenkorting']);
  const alleenstaandeOuderenkorting = getValue(attrs['alleenstaande ouderenkorting']);
  const totaleHeffingskortingen = getValue(attrs['totale heffingskortingen']);
  const belastingNaHeffingskortingen = getValue(attrs['belasting na heffingskortingen']);
  const zorgtoeslag = getValue(attrs['zorgtoeslag']);
  const huurtoeslag = getValue(attrs['huurtoeslag']);
  const beschikbaarInkomen = getValue(attrs['beschikbaar inkomen']);

  return {
    // Phase 1
    pensioenPerJaar: round(pensioenPerJaar),
    bedragIneens: round(bedragIneens),
    resterendPensioenPerJaar: round(resterendPensioenPerJaar),
    permanentVerliesPerJaar: round(permanentVerliesPerJaar),

    // Phase 2
    inkomen: round(inkomen),

    // Phase 3
    zvwBijdrage: round(zvwBijdrage),
    belastingEersteSchijf: round(belastingEersteSchijf),
    belastingTweedeSchijf: round(belastingTweedeSchijf),
    belastingDerdeSchijf: round(belastingDerdeSchijf),
    belastingBox1: round(belastingBox1),

    // Phase 4
    algemeneHeffingskorting: round(algemeneHeffingskorting),
    ouderenkorting: round(ouderenkorting),
    alleenstaandeOuderenkorting: round(alleenstaandeOuderenkorting),
    totaleHeffingskortingen: round(totaleHeffingskortingen),
    belastingNaHeffingskortingen: round(belastingNaHeffingskortingen),

    // Phase 5
    zorgtoeslag: round(zorgtoeslag),
    huurtoeslag: round(huurtoeslag),

    // Phase 6
    beschikbaarInkomen: round(beschikbaarInkomen),

    // Additional useful values
    maandelijksInkomen: round(inkomen / 12),
    maandelijksBeschikbaarInkomen: round(beschikbaarInkomen / 12),
    maandelijksVerlies: round(permanentVerliesPerJaar / 12),
    nettoUitkeringSchatting: round(bedragIneens - (belastingNaHeffingskortingen * (bedragIneens / (inkomen || 1))))
  };
}

function round(value) {
  return Math.round(value * 100) / 100;
}

// Initialize rules on module load
try {
  loadRules();
} catch (e) {
  console.error('Warning: Could not load rules on startup:', e.message);
}

module.exports = { calculateScenario, PARAMETERS };
