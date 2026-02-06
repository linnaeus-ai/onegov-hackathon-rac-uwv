# Bedrag Ineens - Regelspraak Implementatie

Rules-as-Code implementatie voor het berekenen van de financiële impact van "bedrag ineens" (eenmalige pensioenopname) voor Nederlandse AOW-gerechtigden.

## Overzicht

Deze module berekent hoe het opnemen van een bedrag ineens uit je pensioen invloed heeft op:
- Bruto/netto inkomen
- Belastingplicht (Box 1)
- Heffingskortingen
- Toeslagen (zorgtoeslag, huurtoeslag)
- Beschikbaar inkomen

## Bestandsstructuur

```
rules/bedrag-ineens/
├── gegevens.rs          # Datamodel definities (PRODUCTIE)
├── regels.rs            # Bedrijfsregels (PRODUCTIE)
├── regels_test.rs       # Dezelfde regels, voor incrementeel testen
├── run.js               # Test runner script (ONTWIKKELING)
├── test_table1.json     # Testcase: 10% opname (ONTWIKKELING)
├── test_table4.json     # Testcase: 5% opname (ONTWIKKELING)
└── README.md            # Dit bestand
```

### Productiebestanden

| Bestand | Doel |
|---------|------|
| `gegevens.rs` | Gegevensspraak definities: objecttypes, parameters, relaties |
| `regels.rs` | Regelspraak regels: 21 berekeningsregels in afhankelijkheidsvolgorde |

### Ontwikkel-/Testbestanden

| Bestand | Doel |
|---------|------|
| `run.js` | Node.js test runner met regelspraak-ts engine |
| `test_table*.json` | Testscenario's gebaseerd op EK Nota voorbeelden |
| `regels_test.rs` | Kopie van regels.rs voor incrementele ontwikkeling |

## Integratiegids

### Vereisten

```bash
# Bouw de regelspraak-ts engine
cd regelspraak-ts
npm install
npm run build
```

### Backend Integratie

```javascript
const { Engine, Context } = require('./regelspraak-ts/dist');
const fs = require('fs');

// 1. Laad en parse regels (eenmalig bij opstarten)
const gegevens = fs.readFileSync('rules/bedrag-ineens/gegevens.rs', 'utf-8');
const regels = fs.readFileSync('rules/bedrag-ineens/regels.rs', 'utf-8');
const rulesText = `${gegevens}\n\n${regels}`;

const engine = new Engine();
const parseResult = engine.parseModel(rulesText);

if (!parseResult.success) {
  throw new Error(`Parse error: ${parseResult.errors}`);
}
const model = parseResult.model;

// 2. Maak voor elke berekeningsaanvraag een nieuwe Context
function berekenBedragIneens(input) {
  const context = new Context(model);

  // Stel parameters in (belastingwaarden 2024)
  for (const [name, value] of Object.entries(input.parameters)) {
    context.setVariable(name, { type: 'number', value });
  }

  // Maak Persoon object aan
  const persoonAttrs = {
    'AOW inkomen': { type: 'number', value: input.aowInkomen },
    'aanvullend pensioen per maand': { type: 'number', value: input.pensioenPerMaand },
    'pensioenvermogen': { type: 'number', value: input.pensioenvermogen },
    'huur per maand': { type: 'number', value: input.huurPerMaand || 0 }
  };
  context.createObject('Persoon', 'persoon1', persoonAttrs);

  // Stel kenmerken in (boolean eigenschappen)
  context.setKenmerk('Persoon', 'persoon1', 'is AOW gerechtigd', true);
  context.setKenmerk('Persoon', 'persoon1', 'is alleenstaand', input.isAlleenstaand);

  // Maak Scenario object aan
  context.createObject('Scenario', 'scenario1', {
    'opname percentage': { type: 'number', value: input.opnamePercentage }
  });

  // Koppel scenario aan persoon
  const scenarioObj = context.getObjectsByType('Scenario')[0];
  const persoonObj = context.getObjectsByType('Persoon')[0];
  context.addRelationship('scenario van persoon', scenarioObj, persoonObj);
  scenarioObj.value['persoon'] = persoonObj;

  // Voer regels uit
  const result = engine.execute(model, context);

  if (!result.success) {
    throw new Error(`Execution error: ${result.error}`);
  }

  // Haal resultaten op
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

### Gebruikersinvoer (vanuit frontend)

```typescript
interface GebruikersInvoer {
  // Verplicht
  pensioenPerMaand: number;      // Maandelijks pensioenbedrag (bijv. 600)
  pensioenvermogen: number;      // Totaal pensioenkapitaal (bijv. 133000)
  opnamePercentage: number;      // Opnamepercentage (0, 5, of 10)
  isAlleenstaand: boolean;       // Alleenstaand huishouden?

  // Optioneel (standaardwaarden beschikbaar)
  aowInkomen?: number;           // AOW inkomen (standaard: 19600 voor 2024)
  huurPerMaand?: number;         // Maandelijkse huur (standaard: 0)
}
```

### Parameters (belastingwaarden 2024)

Deze zijn vast voor een gegeven belastingjaar. Sla op in config of database:

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

### Berekeningsresultaten

```typescript
interface BerekeningsResultaat {
  // Fase 1: Bedrag Ineens
  pensioenPerJaar: number;           // Jaarlijks pensioen (pensioenPerMaand × 12)
  bedragIneens: number;              // Eenmalig bedrag (pensioenvermogen × opname%)
  resterendPensioenPerJaar: number;  // Resterend jaarlijks pensioen
  permanentVerliesPerJaar: number;   // Permanent jaarlijks verlies

  // Fase 2: Inkomen
  inkomen: number;                   // Bruto inkomen (AOW + pensioen + bedrag ineens)

  // Fase 3: Belasting
  zvwBijdrage: number;               // Zorgverzekeringswet bijdrage
  belastingBox1: number;             // Box 1 belasting voor kortingen

  // Fase 4: Heffingskortingen
  algemeneHeffingskorting: number;
  ouderenkorting: number;
  alleenstaandeOuderenkorting: number;
  totaleHeffingskortingen: number;
  belastingNaHeffingskortingen: number;  // Eindbelasting

  // Fase 5: Toeslagen
  zorgtoeslag: number;
  huurtoeslag: number;

  // Fase 6: Resultaat
  beschikbaarInkomen: number;        // Beschikbaar inkomen (na belasting)
}
```

## Procesflow

```
┌─────────────────┐
│    Frontend     │
│ (Gebruikersinvoer) │
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
│  │ (datamodel) │    │  (regels)   │    │  (geparsed) │ │
│  └─────────────┘    └─────────────┘    └──────┬──────┘ │
│                                               │        │
│  ┌─────────────┐    ┌─────────────┐          │        │
│  │   Context   │ <- │ Gebruikers- │          │        │
│  │  (runtime)  │    │ invoer+Params│         │        │
│  └──────┬──────┘    └─────────────┘          │        │
│         │                                     │        │
│         ▼                                     │        │
│  ┌─────────────────────────────────────────┐ │        │
│  │         engine.execute(model, context)   │◄┘        │
│  │                                          │         │
│  │  Fase 1: Bedrag ineens berekeningen     │         │
│  │  Fase 2: Bruto inkomen                  │         │
│  │  Fase 3: Belasting (Box 1)              │         │
│  │  Fase 4: Heffingskortingen              │         │
│  │  Fase 5: Toeslagen                      │         │
│  │  Fase 6: Beschikbaar inkomen            │         │
│  └──────┬──────────────────────────────────┘         │
│         │                                             │
└─────────┼─────────────────────────────────────────────┘
          │
          ▼
┌─────────────────┐
│   JSON Resultaat │
│  (alle berekende │
│   attributen)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Frontend     │
│   (Weergave)    │
└─────────────────┘
```

## Tests Uitvoeren

```bash
# Vanuit rules/bedrag-ineens directory
cd rules/bedrag-ineens

# Voer Tabel 1 test uit (10% opname, hoog inkomen scenario)
node run.js test_table1.json regels.rs

# Voer Tabel 4 test uit (5% opname, lager inkomen met toeslagen)
node run.js test_table4.json regels.rs
```

### Verwachte Resultaten

**Tabel 1 (10% opname, €600/maand pensioen):**
- bedrag ineens: €13.300 ✓
- inkomen: €39.380 ✓
- belasting na heffingskortingen: €3.906 ✓
- zorgtoeslag: €0 ✓
- huurtoeslag: €0 ✓

**Tabel 4 (5% opname, €600/maand pensioen):**
- bedrag ineens: €6.700 ✓
- inkomen: €33.140 ✓
- belasting: €2.503 (verwacht €2.300 - vereenvoudigde formule)
- zorgtoeslag: €782 (verwacht €600 - vereenvoudigde formule)
- huurtoeslag: €1.175 (verwacht €500 - vereenvoudigde formule)

## Regeloverzicht (21 regels)

| # | Regel | Berekent |
|---|-------|----------|
| 1 | Bereken pensioen per jaar | pensioenPerMaand × 12 |
| 2 | Bereken bedrag ineens | pensioenvermogen × opname% |
| 3 | Bereken resterend pensioen | pensioenPerJaar × (100 - opname%) |
| 4 | Bereken permanent verlies | pensioenPerJaar - resterend |
| 5 | Bereken inkomen | AOW + resterend + bedragIneens |
| 6 | Bereken Zvw | min(inkomen, Zvw max) × Zvw% |
| 7-9 | Bereken belasting schijf 1/2/3 | Progressieve belastingschijven |
| 10 | Bereken belasting box1 | Som van schijven |
| 11 | Bereken algemene heffingskorting | max(0, AHK max - afbouw) |
| 12-13 | Bereken ouderenkorting | OK met inkomensafhankelijke afbouw |
| 14 | Bereken alleenstaande ouderenkorting | AOK indien alleenstaand |
| 15 | Bereken totale heffingskortingen | Som van kortingen |
| 16 | Bereken belasting na heffingskortingen | max(0, box1 - kortingen) |
| 17-18 | Bereken zorgtoeslag | Inkomensafhankelijk met drempel |
| 19-20 | Bereken huurtoeslag | Inkomensafhankelijk (vereenvoudigd) |
| 21 | Bereken beschikbaar inkomen | inkomen - Zvw - belasting |

## Bekende Beperkingen

1. **Zorgtoeslag**: Gebruikt vereenvoudigde afbouwformule, niet het officiële normpercentage/standaardpremie model
2. **Huurtoeslag**: Gebruikt lineaire interpolatie, niet het officiële basishuur/rekenhuur model
3. **Huishoudtypes**: Ondersteunt alleen alleenstaand, niet partners
4. **Niet-AOW**: Ondersteunt alleen AOW-gerechtigden (gepensioneerden met AOW)

## Ontwerpbeslissingen

### Waarom Geen Beslistabellen?

Beslistabellen zijn ideaal voor **discrete lookups** en **range-selectie met vooraf berekende waarden**. De bedrag ineens regels zijn **formule-intensief met drempelcontroles** — een ander patroon.

**Waar beslistabellen wel goed werken** (zie `regelspraak-ts/examples/toka/regels.rs`):
```
// Categorische lookup: Provincie → Factor (geen formule)
Beslistabel Woonregio factor
| | de woonregio factor... | indien woonprovincie gelijk is aan |
| 1 | 1 | 'Friesland', 'Groningen', 'Drenthe' ... |
| 2 | 2 | 'Noord-Brabant', 'Gelderland' ... |

// Range-selectie: Reisduur → Vooraf berekend percentage
Beslistabel Belasting op basis van reisduur
| | de belasting... | indien reisduur groter dan | indien reisduur kleiner of gelijk aan |
| 1 | percentage_eerste_schijf × belasting | n.v.t. | bovengrens_eerste |
```

**Waarom bedrag ineens regels gebruikt in plaats van tabellen:**
- Afbouwformules (heffingskortingen, toeslagen) gebruiken de **daadwerkelijke inkomenswaarde** in de berekening, niet alleen de range
- Progressieve belastingschijven **berekenen altijd alle drie** met min/max-guards — geen selectie nodig
- `max(0, ZT_max - (inkomen - drempel) × tarief)` in een tabelcel plaatsen is minder leesbaar dan een dedicated regel

Het init + conditioneel patroon (`Initialiseer X` + `Bereken X indien ...`) is de idiomatische aanpak voor drempel-gebaseerde formules in Regelspraak.

## Referenties

- [EK Nota Rekenvoorbeelden](../doc/07_EK_Nota_Rekenvoorbeelden.md) - Bron voor testcases
- [Berekening zorgtoeslag 2024](https://download.belastingdienst.nl/toeslagen/docs/berekening_zorgtoeslag_tg0821z41fd.pdf)
- [Berekening huurtoeslag 2024](https://download.belastingdienst.nl/toeslagen/docs/berekening_huurtoeslag_tg0831z42fd.pdf)