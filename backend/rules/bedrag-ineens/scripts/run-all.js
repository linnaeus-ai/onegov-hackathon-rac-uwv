#!/usr/bin/env node
/**
 * Batch runner for all bedrag-ineens profile tests
 * Executes all profiles and produces a summary report
 */

const fs = require('fs');
const path = require('path');
const { loadRules, runProfile, extractKeyMetrics } = require('./run-lib');

function main() {
  const scriptDir = __dirname;
  const profileDir = path.resolve(scriptDir, '../profiles');
  const resultsDir = path.resolve(scriptDir, '../results');

  // Ensure results directory exists
  fs.mkdirSync(resultsDir, { recursive: true });

  // Find all profile files
  const files = fs.readdirSync(profileDir)
    .filter(f => f.endsWith('.json') && f.startsWith('profile-'))
    .sort();

  if (files.length === 0) {
    console.error('No profile files found. Run convert-profiles.js first.');
    process.exit(1);
  }

  console.log(`Found ${files.length} profile files`);
  console.log('Loading rules...');

  let engineModel;
  try {
    engineModel = loadRules('regels.rs');
    console.log('✅ Rules loaded successfully\n');
  } catch (err) {
    console.error('Failed to load rules:', err.message);
    process.exit(1);
  }

  const summary = {
    timestamp: new Date().toISOString(),
    totals: { passed: 0, failed: 0, skipped: 0 },
    profiles: []
  };

  console.log('Running profiles...\n');
  console.log('=' .repeat(70));

  for (const file of files) {
    const profilePath = path.join(profileDir, file);
    const profile = JSON.parse(fs.readFileSync(profilePath, 'utf8'));

    const persoon = profile.objects.personen[0];
    const pensioenvermogen = persoon.pensioenvermogen;

    // Skip profiles with 0 pensioenvermogen
    if (pensioenvermogen === 0) {
      summary.profiles.push({
        file,
        name: profile.name,
        status: 'skipped',
        reason: 'No pension capital'
      });
      summary.totals.skipped++;
      console.log(`○ ${file}: SKIPPED (no pension capital)`);
      continue;
    }

    try {
      const result = runProfile(engineModel, profile);

      // Extract key metrics for each scenario
      const scenarioSummaries = {};
      for (const [scenarioId, scenarioResult] of Object.entries(result.scenarios)) {
        scenarioSummaries[scenarioId] = extractKeyMetrics(scenarioResult);
      }

      summary.profiles.push({
        file,
        name: profile.name,
        bsn: profile.source_bsn,
        status: 'passed',
        input: {
          pensioenvermogen: persoon.pensioenvermogen,
          pensioenPerMaand: persoon['aanvullend pensioen per maand'],
          aowInkomen: persoon['AOW inkomen'],
          isAowGerechtigd: profile.kenmerken.Persoon[persoon.id]['is AOW gerechtigd'],
          isAlleenstaand: profile.kenmerken.Persoon[persoon.id]['is alleenstaand']
        },
        results: scenarioSummaries
      });
      summary.totals.passed++;

      // Print summary line
      const s10 = scenarioSummaries.scenario_10pct || {};
      console.log(`✓ ${file}: ${profile.name.substring(0, 40).padEnd(40)}`);
      console.log(`    PV: €${pensioenvermogen.toLocaleString().padStart(8)} | 10% bedrag: €${(s10['bedrag ineens'] || 0).toFixed(0).padStart(6)} | beschikbaar: €${(s10['beschikbaar inkomen'] || 0).toFixed(0)}`);

    } catch (err) {
      summary.profiles.push({
        file,
        name: profile.name,
        status: 'failed',
        error: err.message
      });
      summary.totals.failed++;
      console.log(`✗ ${file}: FAILED - ${err.message}`);
    }
  }

  // Write summary
  const summaryPath = path.join(resultsDir, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));

  // Print final summary
  console.log('\n' + '='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`  Passed:  ${summary.totals.passed}`);
  console.log(`  Failed:  ${summary.totals.failed}`);
  console.log(`  Skipped: ${summary.totals.skipped} (no pension capital)`);
  console.log(`  Total:   ${files.length}`);
  console.log(`\nResults written to: ${summaryPath}`);

  // Exit with error if any failed
  if (summary.totals.failed > 0) {
    process.exit(1);
  }
}

main();
