#!/usr/bin/env node
/**
 * Convert Hackathon_profiles.yaml to JSON test files for bedrag-ineens rules
 */

const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Shared parameters from test_table1.json (2024 tax year values)
const SHARED_PARAMETERS = {
  "AOW bruto alleenstaand": 19600,
  "eerste schijfgrens": 40021,
  "tweede schijfgrens": 75518,
  "tarief eerste schijf AOW": 0.1907,
  "tarief tweede schijf": 0.3693,
  "tarief derde schijf": 0.4950,
  "Zvw percentage": 0.0545,
  "Zvw maximum": 73031,
  "AHK maximum AOW": 1735,
  "AHK afbouwgrens": 24813,
  "AHK afbouw percentage AOW": 0.03421,
  "OK maximum": 1835,
  "OK afbouwgrens": 44770,
  "OK afbouw percentage": 0.15,
  "AOK bedrag": 532,
  "ZT grens alleenstaand": 37496,
  "ZT maximum alleenstaand": 1800,
  "ZT drempel": 25437,
  "ZT afbouw percentage": 0.1322,
  "HT grens eerste": 26000,
  "HT grens tweede": 32000,
  "HT grens derde": 38000,
  "HT maximum": 2900,
  "jaarlijkse zorgkosten": 2100
};

const AOW_BASE = 19600; // Base AOW for 2024

function convertProfile(bsn, profile) {
  const pfzw = profile.sources?.PFZW || {};
  const abp = profile.sources?.ABP || {};
  const rvig = profile.sources?.RvIG?.personen?.[0] || {};
  const svb = profile.sources?.SVB?.algemene_ouderdomswet_gegevens?.[0] || {};

  // Use PFZW if available, otherwise ABP (values are in cents, divide by 100)
  const pensioenvermogen = ((pfzw['Pensioenvermogen OP'] || 0) + (abp['Pensioenvermogen OP'] || 0)) / 100;
  const pensioenPerMaand = ((pfzw['OP_verwacht_maand'] || 0) + (abp['OP_verwacht_maand'] || 0)) / 100;

  // Derive kenmerken from source data
  const age = rvig.age || 0;
  const isAowGerechtigd = age >= 67;
  const isAlleenstaand = !rvig.has_partner;

  // AOW percentage (default 100%)
  const aowPercentage = svb?.aow_percentage ?? 100;
  const aowInkomen = AOW_BASE * (aowPercentage / 100);

  return {
    name: `Profile ${bsn}: ${profile.name}`,
    description: profile.description,
    source_bsn: bsn,
    source_data: {
      age,
      has_partner: rvig.has_partner,
      aow_percentage: aowPercentage,
      pfzw_pensioenvermogen: (pfzw['Pensioenvermogen OP'] || 0) / 100,
      abp_pensioenvermogen: (abp['Pensioenvermogen OP'] || 0) / 100,
      pfzw_pensioen_maand: (pfzw['OP_verwacht_maand'] || 0) / 100,
      abp_pensioen_maand: (abp['OP_verwacht_maand'] || 0) / 100
    },
    parameters: SHARED_PARAMETERS,
    objects: {
      personen: [{
        id: `persoon_${bsn}`,
        "AOW inkomen": aowInkomen,
        "aanvullend pensioen per maand": pensioenPerMaand,
        "pensioenvermogen": pensioenvermogen,
        "huur per maand": 0
      }],
      scenarios: [
        { id: "scenario_0pct", "opname percentage": 0 },
        { id: "scenario_5pct", "opname percentage": 5 },
        { id: "scenario_10pct", "opname percentage": 10 }
      ]
    },
    relationships: [
      { type: "scenario van persoon", scenario: "scenario_0pct", persoon: `persoon_${bsn}` },
      { type: "scenario van persoon", scenario: "scenario_5pct", persoon: `persoon_${bsn}` },
      { type: "scenario van persoon", scenario: "scenario_10pct", persoon: `persoon_${bsn}` }
    ],
    kenmerken: {
      Persoon: {
        [`persoon_${bsn}`]: {
          "is AOW gerechtigd": isAowGerechtigd,
          "is alleenstaand": isAlleenstaand
        }
      },
      Scenario: {
        "scenario_0pct": { "is jaar met opname": false },
        "scenario_5pct": { "is jaar met opname": true },
        "scenario_10pct": { "is jaar met opname": true }
      }
    }
  };
}

function main() {
  const scriptDir = __dirname;
  const yamlPath = path.resolve(scriptDir, '../../../rules-as-code-pension-starter/data/Hackathon_profiles.yaml');
  const outputDir = path.resolve(scriptDir, '../profiles');

  console.log(`Reading profiles from: ${yamlPath}`);

  if (!fs.existsSync(yamlPath)) {
    console.error(`YAML file not found: ${yamlPath}`);
    process.exit(1);
  }

  const data = yaml.load(fs.readFileSync(yamlPath, 'utf8'));

  if (!data.profiles) {
    console.error('No profiles found in YAML');
    process.exit(1);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const bsns = Object.keys(data.profiles).sort();
  console.log(`Found ${bsns.length} profiles`);

  let converted = 0;
  let skipped = 0;

  for (let i = 0; i < bsns.length; i++) {
    const bsn = bsns[i];
    const profile = data.profiles[bsn];

    const json = convertProfile(bsn, profile);
    const filename = `profile-${String(i + 1).padStart(3, '0')}.json`;
    const filepath = path.join(outputDir, filename);

    fs.writeFileSync(filepath, JSON.stringify(json, null, 2));

    const pv = json.objects.personen[0].pensioenvermogen;
    const status = pv > 0 ? '✓' : '○ (no pension)';
    console.log(`  ${filename}: ${json.name} ${status}`);

    if (pv > 0) {
      converted++;
    } else {
      skipped++;
    }
  }

  console.log(`\nConversion complete:`);
  console.log(`  ${converted} profiles with pension capital`);
  console.log(`  ${skipped} profiles without pension capital`);
  console.log(`  ${bsns.length} total profiles written to ${outputDir}`);
}

main();
