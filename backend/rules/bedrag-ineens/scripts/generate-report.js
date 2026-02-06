#!/usr/bin/env node
/**
 * Generate a human-readable report from test results
 */

const fs = require('fs');
const path = require('path');

function formatCurrency(value) {
  if (value === undefined || value === null) return '-';
  return '€' + Math.round(value).toLocaleString('nl-NL');
}

function main() {
  const scriptDir = __dirname;
  const resultsDir = path.resolve(scriptDir, '../results');
  const summaryPath = path.join(resultsDir, 'summary.json');

  if (!fs.existsSync(summaryPath)) {
    console.error('No summary.json found. Run run-all.js first.');
    process.exit(1);
  }

  const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));

  console.log('BEDRAG INEENS TEST REPORT');
  console.log('='.repeat(80));
  console.log(`Generated: ${summary.timestamp}`);
  console.log(`Profiles: ${summary.totals.passed} passed, ${summary.totals.failed} failed, ${summary.totals.skipped} skipped\n`);

  // Table header
  console.log('DETAILED RESULTS (profiles with pension capital)');
  console.log('-'.repeat(80));
  console.log('Profile'.padEnd(35) + 'PV'.padStart(12) + '0%'.padStart(10) + '5%'.padStart(10) + '10%'.padStart(10));
  console.log('-'.repeat(80));

  const passed = summary.profiles.filter(p => p.status === 'passed');

  for (const profile of passed) {
    const name = profile.name.replace(/^Profile \d+: /, '').substring(0, 33);
    const pv = formatCurrency(profile.input.pensioenvermogen);

    const s0 = profile.results?.scenario_0pct?.['beschikbaar inkomen'];
    const s5 = profile.results?.scenario_5pct?.['beschikbaar inkomen'];
    const s10 = profile.results?.scenario_10pct?.['beschikbaar inkomen'];

    console.log(
      name.padEnd(35) +
      pv.padStart(12) +
      formatCurrency(s0).padStart(10) +
      formatCurrency(s5).padStart(10) +
      formatCurrency(s10).padStart(10)
    );
  }

  console.log('-'.repeat(80));
  console.log('\nLegend: PV = Pensioenvermogen, 0%/5%/10% = Beschikbaar inkomen at each withdrawal level\n');

  // Impact analysis
  console.log('IMPACT ANALYSIS');
  console.log('-'.repeat(80));

  let positiveImpact = 0;
  let negativeImpact = 0;
  let neutralImpact = 0;

  for (const profile of passed) {
    const s0 = profile.results?.scenario_0pct?.['beschikbaar inkomen'] || 0;
    const s10 = profile.results?.scenario_10pct?.['beschikbaar inkomen'] || 0;
    const diff = s10 - s0;

    if (diff > 100) {
      positiveImpact++;
    } else if (diff < -100) {
      negativeImpact++;
    } else {
      neutralImpact++;
    }
  }

  console.log(`Profiles where 10% withdrawal INCREASES disposable income: ${positiveImpact}`);
  console.log(`Profiles where 10% withdrawal DECREASES disposable income: ${negativeImpact}`);
  console.log(`Profiles with negligible impact (±€100): ${neutralImpact}`);

  // Skipped profiles
  if (summary.totals.skipped > 0) {
    console.log('\nSKIPPED PROFILES (no pension capital)');
    console.log('-'.repeat(80));
    const skipped = summary.profiles.filter(p => p.status === 'skipped');
    for (const profile of skipped) {
      console.log(`  - ${profile.name}`);
    }
  }

  // Failed profiles
  if (summary.totals.failed > 0) {
    console.log('\nFAILED PROFILES');
    console.log('-'.repeat(80));
    const failed = summary.profiles.filter(p => p.status === 'failed');
    for (const profile of failed) {
      console.log(`  - ${profile.name}: ${profile.error}`);
    }
  }
}

main();
