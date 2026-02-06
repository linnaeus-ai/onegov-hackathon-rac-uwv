import express from 'express';
import cors from 'cors';
import { readFileSync } from 'fs';
import { parse } from 'yaml';
import { calculateScenario, PARAMETERS } from './rules-engine.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Load profiles from YAML
const profilesPath = '../rules-as-code-pension-starter/data/Hackathon_profiles.yaml';
let profiles = {};

try {
  const yamlContent = readFileSync(profilesPath, 'utf8');
  const data = parse(yamlContent);
  profiles = data.profiles || {};
} catch (error) {
  console.error('Error loading profiles:', error.message);
}

// Transform profile data into our calculation format
function transformProfile(profileId, profile) {
  const sources = profile.sources || {};

  // Get pension data from PFZW and ABP
  const pfzw = sources.PFZW || {};
  const abp = sources.ABP || {};

  // Pension values are in cents, convert to euros
  const pensioenvermogenOP = (pfzw['Pensioenvermogen OP'] || 0) + (abp['Pensioenvermogen OP'] || 0);
  const opVerwachtMaand = (pfzw['OP_verwacht_maand'] || 0) + (abp['OP_verwacht_maand'] || 0);

  // Get personal data
  const rvig = sources.RvIG || {};
  const personen = rvig.personen || [];
  const persoon = personen[0] || {};
  const relaties = rvig.relaties || [];
  const relatie = relaties[0] || {};

  // Get SVB data for AOW
  const svb = sources.SVB || {};
  const aowGegevens = svb.algemene_ouderdomswet_gegevens || [];
  const aowData = aowGegevens[0] || {};
  const aowPercentage = aowData.aow_percentage || 100;

  // Calculate AOW based on age and percentage
  const age = persoon.age || 0;
  const isAOWGerechtigd = age >= 67;

  // AOW bruto alleenstaand 2024 is ~19600 EUR/year
  const aowBrutoAlleenstaand = PARAMETERS['AOW bruto alleenstaand'];
  const hasPartner = persoon.has_partner || relatie.has_partner || false;

  // Calculate AOW income based on partnership status and percentage
  let aowInkomen = 0;
  if (isAOWGerechtigd) {
    if (hasPartner) {
      aowInkomen = (aowBrutoAlleenstaand * 0.50) * (aowPercentage / 100); // 50% for partners
    } else {
      aowInkomen = (aowBrutoAlleenstaand * 0.70) * (aowPercentage / 100); // 70% for single
    }
  }

  return {
    id: profileId,
    name: profile.name,
    description: profile.description,
    age: persoon.age || 0,
    hasPartner: hasPartner,
    isAOWGerechtigd: isAOWGerechtigd,
    isAlleenstaand: !hasPartner,
    // Pension data (convert from cents to euros)
    pensioenvermogen: pensioenvermogenOP / 100,
    aanvullendPensioenPerMaand: opVerwachtMaand / 100,
    aowInkomen: aowInkomen,
    overigInkomen: 0,
    huurPerMaand: 576, // Default value
    // Raw data for debugging
    _raw: {
      pfzw,
      abp,
      persoon,
      aowPercentage
    }
  };
}

// Get all profiles (limited to 10, only those with pension data)
app.get('/api/profiles', (req, res) => {
  const profileList = Object.entries(profiles)
    .map(([id, profile]) => {
      const transformed = transformProfile(id, profile);
      return {
        id,
        name: profile.name,
        description: profile.description,
        hasPensionData: transformed.pensioenvermogen > 0 || transformed.aanvullendPensioenPerMaand > 0
      };
    })
    // Prioritize profiles with pension data
    .sort((a, b) => {
      if (a.hasPensionData && !b.hasPensionData) return -1;
      if (!a.hasPensionData && b.hasPensionData) return 1;
      return 0;
    })
    .slice(0, 10)
    .map(({ id, name, description }) => ({ id, name, description }));

  res.json(profileList);
});

// Get a specific profile with transformed data
app.get('/api/profiles/:id', (req, res) => {
  const profile = profiles[req.params.id];
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }

  const transformed = transformProfile(req.params.id, profile);
  res.json(transformed);
});

// Calculate scenario for a profile
app.post('/api/calculate', (req, res) => {
  const { profileId, opnamePercentage } = req.body;

  let profileData;

  if (profileId && profiles[profileId]) {
    profileData = transformProfile(profileId, profiles[profileId]);
  } else if (req.body.profile) {
    // Allow custom profile data
    profileData = req.body.profile;
  } else {
    return res.status(400).json({ error: 'Profile ID or profile data required' });
  }

  // Create persoon object for calculation
  const persoon = {
    aowInkomen: profileData.aowInkomen || 0,
    aanvullendPensioenPerMaand: profileData.aanvullendPensioenPerMaand || 0,
    pensioenvermogen: profileData.pensioenvermogen || 0,
    overigInkomen: profileData.overigInkomen || 0,
    huurPerMaand: profileData.huurPerMaand || 576,
    isAOWGerechtigd: profileData.isAOWGerechtigd !== false,
    isAlleenstaand: profileData.isAlleenstaand !== false
  };

  // Calculate for the requested percentage (0 is valid, so check for undefined/null)
  const percentage = opnamePercentage !== undefined && opnamePercentage !== null ? opnamePercentage : 10;
  const result = calculateScenario(persoon, percentage);

  // Also calculate baseline (0% opname) for comparison
  const baseline = calculateScenario(persoon, 0);

  res.json({
    profile: profileData,
    percentage,
    result,
    baseline,
    comparison: {
      inkomenVerschil: result.beschikbaarInkomen - baseline.beschikbaarInkomen,
      belastingVerschil: result.belastingNaHeffingskortingen - baseline.belastingNaHeffingskortingen,
      maandelijksVerlies: result.permanentVerliesPerJaar / 12,
      nettoUitkering: result.bedragIneens - (result.belastingNaHeffingskortingen - baseline.belastingNaHeffingskortingen)
    }
  });
});

// Calculate optimal lump sum percentage based on lifetime equity
app.post('/api/calculate-optimal', (req, res) => {
  const { profileId, lifeExpectancy } = req.body;

  let profileData;

  if (profileId && profiles[profileId]) {
    profileData = transformProfile(profileId, profiles[profileId]);
  } else if (req.body.profile) {
    profileData = req.body.profile;
  } else {
    return res.status(400).json({ error: 'Profile ID or profile data required' });
  }

  // Create persoon object for calculation
  const persoon = {
    aowInkomen: profileData.aowInkomen || 0,
    aanvullendPensioenPerMaand: profileData.aanvullendPensioenPerMaand || 0,
    pensioenvermogen: profileData.pensioenvermogen || 0,
    overigInkomen: profileData.overigInkomen || 0,
    huurPerMaand: profileData.huurPerMaand || 576,
    isAOWGerechtigd: profileData.isAOWGerechtigd !== false,
    isAlleenstaand: profileData.isAlleenstaand !== false
  };

  // Calculate remaining life years
  // lifeExpectancy is the total expected age (e.g., 92 if person expects to live to 92)
  const currentAge = profileData.age || 67;
  const expectedAge = lifeExpectancy || 85; // Default to age 85
  const remainingYears = Math.max(1, expectedAge - currentAge);

  // Calculate lifetime equity for each percentage (0%, 1%, 2%, ..., 10%)
  const results = [];

  for (let pct = 0; pct <= 10; pct++) {
    const result = calculateScenario(persoon, pct);
    const baseline = calculateScenario(persoon, 0);

    // Lifetime equity calculation:
    // 1. Immediate lump sum (net of extra tax)
    const extraTax = result.belastingNaHeffingskortingen - baseline.belastingNaHeffingskortingen;
    const netLumpSum = result.bedragIneens - extraTax;

    // 2. Annual pension income for remaining years (after lump sum year)
    // In year 1: we get the reduced pension + lumpsum
    // In years 2+: we get only the reduced pension
    const yearOneIncome = result.beschikbaarInkomen + result.zorgtoeslag + result.huurtoeslag;

    // For subsequent years, calculate with 0% because lump sum is one-time
    const subsequentYearResult = calculateScenario({
      ...persoon,
      // Adjust for permanent pension reduction
      aanvullendPensioenPerMaand: persoon.aanvullendPensioenPerMaand * (100 - pct) / 100
    }, 0);

    const subsequentYearIncome = subsequentYearResult.beschikbaarInkomen +
                                  subsequentYearResult.zorgtoeslag +
                                  subsequentYearResult.huurtoeslag;

    // Total lifetime equity:
    // Year 1: beschikbaar inkomen (includes lump sum)
    // Years 2 to N: reduced annual income
    const lifetimeEquity = yearOneIncome + (subsequentYearIncome * (remainingYears - 1));

    results.push({
      percentage: pct,
      netLumpSum: Math.round(netLumpSum),
      yearOneIncome: Math.round(yearOneIncome),
      subsequentYearIncome: Math.round(subsequentYearIncome),
      lifetimeEquity: Math.round(lifetimeEquity),
      permanentMonthlyLoss: Math.round(result.permanentVerliesPerJaar / 12),
      extraTax: Math.round(extraTax),
      zorgtoeslagLoss: Math.round(baseline.zorgtoeslag - result.zorgtoeslag),
      huurtoeslagLoss: Math.round(baseline.huurtoeslag - result.huurtoeslag)
    });
  }

  // Find optimal percentage (maximum lifetime equity)
  const optimal = results.reduce((best, current) =>
    current.lifetimeEquity > best.lifetimeEquity ? current : best
  );

  res.json({
    profile: profileData,
    currentAge,
    lifeExpectancy: currentAge + remainingYears,
    remainingYears,
    optimal: optimal.percentage,
    results,
    recommendation: {
      percentage: optimal.percentage,
      reason: optimal.percentage === 0
        ? 'Geen opname geeft het hoogste levenslange inkomen gezien uw levensverwachting.'
        : optimal.percentage === 10
          ? 'Maximale opname (10%) is optimaal, mogelijk door korte verwachte levensduur of lage toeslageffecten.'
          : `Een opname van ${optimal.percentage}% balanceert het directe voordeel met behoud van maandelijks inkomen.`
    }
  });
});

// Get parameters
app.get('/api/parameters', (req, res) => {
  res.json(PARAMETERS);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', profiles: Object.keys(profiles).length });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Loaded ${Object.keys(profiles).length} profiles`);
});
