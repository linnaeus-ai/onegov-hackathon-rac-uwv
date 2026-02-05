# Bedrag Ineens - Regelspraak Implementation

Rules-as-Code implementation for calculating the financial impact of "bedrag ineens" (lump sum pension withdrawal) for Dutch AOW recipients.

## Overview

This module calculates how withdrawing a lump sum from your pension affects:
- Gross/net income
- Tax liability (Box 1)
- Tax credits (heffingskortingen)
- Benefits (zorgtoeslag, huurtoeslag)
- Available income

## File Structure

```
rules/bedrag-ineens/
├── gegevens.rs          # Data model definitions (PRODUCTION)
├── regels.rs            # Business rules (PRODUCTION)
├── regels_test.rs       # Same rules, used for incremental testing
├── run.js               # Test runner script (DEVELOPMENT)
├── test_table1.json     # Test case: 10% withdrawal (DEVELOPMENT)
├── test_table4.json     # Test case: 5% withdrawal (DEVELOPMENT)
└── README.md            # This file
```

### Production Files

| File | Purpose |
|------|---------|
| `gegevens.rs` | Gegevensspraak definitions: object types, parameters, relationships |
| `regels.rs` | Regelspraak rules: 21 calculation rules in dependency order |

### Development/Test Files

| File | Purpose |
|------|---------|
| `run.js` | Node.js test runner using regelspraak-ts engine |
| `test_table*.json` | Test scenarios based on EK Nota examples |
| `regels_test.rs` | Copy of regels.rs for incremental development |

## Integration Guide

### Prerequisites

```bash
# Build the regelspraak-ts engine
cd regelspraak-ts
npm install
npm run build
```

### Backend Integration

```javascript
const { Engine, Context } = require('./regelspraak-ts/dist');
const fs = require('fs');

// 1. Load and parse rules (do once at startup)
const gegevens = fs.readFileSync('rules/bedrag-ineens/gegevens.rs', 'utf-8');
const regels = fs.readFileSync('rules/bedrag-ineens/regels.rs', 'utf-8');
const rulesText = `${gegevens}\n\n${regels}`;

const engine = new Engine();
const parseResult = engine.parseModel(rulesText);

if (!parseResult.success) {
  throw new Error(`Parse error: ${parseResult.errors}`);
}
const model = parseResult.model;

// 2. For each calculation request, create a new Context
function calculateBedragIneens(input) {
  const context = new Context(model);

  // Set parameters (2024 tax values)
  for (const [name, value] of Object.entries(input.parameters)) {
    context.setVariable(name, { type: 'number', value });
  }

  // Create Persoon object
  const persoonAttrs = {
    'AOW inkomen': { type: 'number', value: input.aowInkomen },
    'aanvullend pensioen per maand': { type: 'number', value: input.pensioenPerMaand },
    'pensioenvermogen': { type: 'number', value: input.pensioenvermogen },
    'huur per maand': { type: 'number', value: input.huurPerMaand || 0 }
  };
  context.createObject('Persoon', 'persoon1', persoonAttrs);

  // Set kenmerken (boolean characteristics)
  context.setKenmerk('Persoon', 'persoon1', 'is AOW gerechtigd', true);
  context.setKenmerk('Persoon', 'persoon1', 'is alleenstaand', input.isAlleenstaand);

  // Create Scenario object
  context.createObject('Scenario', 'scenario1', {
    'opname percentage': { type: 'number', value: input.opnamePercentage }
  });

  // Link scenario to persoon
  const scenarioObj = context.getObjectsByType('Scenario')[0];
  const persoonObj = context.getObjectsByType('Persoon')[0];
  context.addRelationship('scenario van persoon', scenarioObj, persoonObj);
  scenarioObj.value['persoon'] = persoonObj;

  // Execute rules
  const result = engine.execute(model, context);

  if (!result.success) {
    throw new Error(`Execution error: ${result.error}`);
  }

  // Extract results
  const scenario = context.getObjectsByType('Scenario')[0];
  return {
    bedragIneens: scenario.value['bedrag ineens']?.value,
    inkomen: scenario.value['inkomen']?.value,
    belastingNaHeffingskortingen: scenario.value['belasting na heffingskortingen']?.value,
    zorgtoeslag: scenario.value['zorgtoeslag']?.value,
    huurtoeslag: scenario.value['huurtoeslag']?.value,
    beschikbaarInkomen: scenario.value['beschikbaar inkomen']?.value
  };
}
```

## Input Interface

### User Input (from frontend)

```typescript
interface UserInput {
  // Required
  pensioenPerMaand: number;      // Monthly pension amount (e.g., 600)
  pensioenvermogen: number;      // Total pension capital (e.g., 133000)
  opnamePercentage: number;      // Withdrawal % (0, 5, or 10)
  isAlleenstaand: boolean;       // Single household?

  // Optional (defaults available)
  aowInkomen?: number;           // AOW income (default: 19600 for 2024)
  overigInkomen?: number;        // Other income (default: 0)
  huurPerMaand?: number;         // Monthly rent (default: 0)
}
```

### Parameters (2024 tax values)

These are fixed for a given tax year. Store in config or database:

```json
{
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
  "HT maximum": 2900
}
```

## Output Interface

### Calculation Results

```typescript
interface CalculationResult {
  // Phase 1: Bedrag Ineens
  pensioenPerJaar: number;           // Annual pension (pensioenPerMaand × 12)
  bedragIneens: number;              // Lump sum (pensioenvermogen × opname%)
  resterendPensioenPerJaar: number;  // Remaining annual pension
  permanentVerliesPerJaar: number;   // Permanent yearly loss

  // Phase 2: Income
  inkomen: number;                   // Gross income (AOW + pension + lump sum)

  // Phase 3: Tax
  zvwBijdrage: number;               // Healthcare contribution
  belastingBox1: number;             // Box 1 tax before credits

  // Phase 4: Tax Credits
  algemeneHeffingskorting: number;
  ouderenkorting: number;
  alleenstaandeOuderenkorting: number;
  totaleHeffingskortingen: number;
  belastingNaHeffingskortingen: number;  // Final tax

  // Phase 5: Benefits
  zorgtoeslag: number;               // Healthcare benefit
  huurtoeslag: number;               // Housing benefit

  // Phase 6: Result
  beschikbaarInkomen: number;        // Net available income
}
```

## Call Flow

```
┌─────────────────┐
│    Frontend     │
│  (User Input)   │
└────────┬────────┘
         │ POST /calculate
         ▼
┌─────────────────┐
│    Backend      │
│   (Node.js)     │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│                  Regelspraak Engine                      │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐ │
│  │ gegevens.rs │ +  │  regels.rs  │ -> │    Model    │ │
│  │ (data model)│    │   (rules)   │    │  (parsed)   │ │
│  └─────────────┘    └─────────────┘    └──────┬──────┘ │
│                                               │        │
│  ┌─────────────┐    ┌─────────────┐          │        │
│  │   Context   │ <- │ User Input  │          │        │
│  │  (runtime)  │    │ + Params    │          │        │
│  └──────┬──────┘    └─────────────┘          │        │
│         │                                     │        │
│         ▼                                     │        │
│  ┌─────────────────────────────────────────┐ │        │
│  │         engine.execute(model, context)   │◄┘        │
│  │                                          │         │
│  │  Phase 1: Bedrag Ineens berekeningen    │         │
│  │  Phase 2: Bruto inkomen                 │         │
│  │  Phase 3: Belasting (Box 1)             │         │
│  │  Phase 4: Heffingskortingen             │         │
│  │  Phase 5: Toeslagen                     │         │
│  │  Phase 6: Beschikbaar inkomen           │         │
│  └──────┬──────────────────────────────────┘         │
│         │                                             │
└─────────┼─────────────────────────────────────────────┘
          │
          ▼
┌─────────────────┐
│   JSON Result   │
│  (all computed  │
│   attributes)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Frontend     │
│  (Display)      │
└─────────────────┘
```

## Running Tests

```bash
# From rules/bedrag-ineens directory
cd rules/bedrag-ineens

# Run Table 1 test (10% withdrawal, high income scenario)
node run.js test_table1.json regels.rs

# Run Table 4 test (5% withdrawal, lower income with toeslagen)
node run.js test_table4.json regels.rs
```

### Expected Results

**Table 1 (10% opname, €600/maand pensioen):**
- bedrag ineens: €13,300 ✓
- inkomen: €39,380 ✓
- belasting na heffingskortingen: €3,906 ✓
- zorgtoeslag: €0 ✓
- huurtoeslag: €0 ✓

**Table 4 (5% opname, €600/maand pensioen):**
- bedrag ineens: €6,700 ✓
- inkomen: €33,140 ✓
- belasting: €2,503 (expected €2,300 - simplified formula)
- zorgtoeslag: €782 (expected €600 - simplified formula)
- huurtoeslag: €1,175 (expected €500 - simplified formula)

## Rules Summary (21 rules)

| # | Rule | Computes |
|---|------|----------|
| 1 | Bereken pensioen per jaar | pensioenPerMaand × 12 |
| 2 | Bereken bedrag ineens | pensioenvermogen × opname% |
| 3 | Bereken resterend pensioen | pensioenPerJaar × (100 - opname%) |
| 4 | Bereken permanent verlies | pensioenPerJaar - resterend |
| 5 | Bereken inkomen | AOW + resterend + bedragIneens + overig |
| 6 | Bereken Zvw | min(inkomen, Zvw max) × Zvw% |
| 7-9 | Bereken belasting schijf 1/2/3 | Progressive tax brackets |
| 10 | Bereken belasting box1 | Sum of brackets |
| 11 | Bereken algemene heffingskorting | max(0, AHK max - afbouw) |
| 12-13 | Bereken ouderenkorting | OK with income-based reduction |
| 14 | Bereken alleenstaande ouderenkorting | AOK if alleenstaand |
| 15 | Bereken totale heffingskortingen | Sum of credits |
| 16 | Bereken belasting na heffingskortingen | max(0, box1 - credits) |
| 17-18 | Bereken zorgtoeslag | Income-based with threshold |
| 19-20 | Bereken huurtoeslag | Income-based (simplified) |
| 21 | Bereken beschikbaar inkomen | inkomen - Zvw - belasting |

## Known Limitations

1. **Zorgtoeslag**: Uses simplified afbouw formula, not official normpercentage/standaardpremie model
2. **Huurtoeslag**: Uses linear interpolation, not official basishuur/rekenhuur model
3. **Household types**: Only supports alleenstaand (single), not partners
4. **Non-AOW**: Only supports AOW-gerechtigden (retirees with AOW)

## References

- [EK Nota Rekenvoorbeelden](../doc/07_EK_Nota_Rekenvoorbeelden.md) - Source for test cases
- [Berekening zorgtoeslag 2024](https://download.belastingdienst.nl/toeslagen/docs/berekening_zorgtoeslag_tg0821z41fd.pdf)
- [Berekening huurtoeslag 2024](https://download.belastingdienst.nl/toeslagen/docs/berekening_huurtoeslag_tg0831z42fd.pdf)
