# MVP Plan v2: Bedrag Ineens Decision Tool met Regelspraak-TS

## Wijzigingen t.o.v. v1

- **Rules as Code engine**: Regelspraak-TS i.p.v. custom TypeScript
- **Duidelijke interfaces** tussen componenten gedefinieerd
- **Concrete regelspraak code** voor alle berekeningen
- **Mapping bronnen** naar gegevensspraak en regelspraak concepten

---

## Architectuur Overzicht

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ARCHITECTUUR                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                         UI LAAG (React)                              │  │
│   │   ProfileSelector │ InputForm │ ScenarioComparison │ ExplanationPanel│  │
│   └──────────────────────────────┬──────────────────────────────────────┘  │
│                                  │ ScenarioInput / ComparisonResult        │
│                                  ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                      ADAPTER LAAG (TypeScript)                       │  │
│   │                    BedragIneensCalculator                            │  │
│   │   - Converteer UI input → Context objecten                          │  │
│   │   - Execute regels via Engine                                        │  │
│   │   - Extraheer resultaten met uitleg-stappen                         │  │
│   │   - Map naar UI-friendly output format                               │  │
│   └──────────────────────────────┬──────────────────────────────────────┘  │
│                                  │ Engine.execute(model, context)          │
│                                  ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐  │
│   │                    RULES LAAG (Regelspraak-TS)                       │  │
│   │                                                                      │  │
│   │   ┌───────────────┐  ┌───────────────┐  ┌───────────────┐          │  │
│   │   │ objecttypes.rs │  │ parameters.rs │  │ berekeningen.rs│          │  │
│   │   │  - Persoon     │  │  - AOW 2025   │  │  - Belasting   │          │  │
│   │   │  - Scenario    │  │  - Tarieven   │  │  - Toeslagen   │          │  │
│   │   │  - Toeslag     │  │  - Grenzen    │  │  - Netto       │          │  │
│   │   └───────────────┘  └───────────────┘  └───────────────┘          │  │
│   │                              ↓                                       │  │
│   │   ┌─────────────────────────────────────────────────────────────┐   │  │
│   │   │            regelspraak-ts Engine + Context                   │   │  │
│   │   │  Engine.parseModel() → Engine.execute() → Context.getObjects()│   │  │
│   │   └─────────────────────────────────────────────────────────────┘   │  │
│   └─────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Regelspraak-TS API (Publieke Interface)

### 1.1 Core Exports

```typescript
// regelspraak-ts index.ts exports:
export { Engine } from './engine';
export { Context } from './context';
export { AntlrParser } from './parser';
export * from './interfaces';  // Value, RuntimeContext, ExecutionResult
export * from './ast';         // All AST node types
```

### 1.2 Value Interface

Alle runtime waarden gebruiken een unified `Value` interface:

```typescript
interface Value {
  type: 'number' | 'string' | 'boolean' | 'date' | 'object' | 'list' | 'timeline' | 'null';
  value: any;
  unit?: { name: string; symbol?: string };
}

// Voorbeelden:
{ type: 'number', value: 13300, unit: { name: 'euro', symbol: '€' } }
{ type: 'boolean', value: true }
{ type: 'string', value: 'alleenstaand' }
```

### 1.3 Engine Methods

```typescript
class Engine {
  // Parse regelspraak broncode naar AST
  parseModel(source: string): { success: boolean; model?: DomainModel; errors?: string[] };

  // Voer regels uit op een context
  execute(model: DomainModel, context: Context): ExecutionResult;

  // Combinatie: parse + execute
  run(source: string, context?: Context): ExecutionResult;
}
```

### 1.4 Context Methods

```typescript
class Context {
  constructor(model?: DomainModel);

  // Object management
  createObject(type: string, id: string, attributes: Record<string, Value>): void;
  getObject(type: string, id: string): any | undefined;
  getObjectsByType(type: string): Value[];

  // Kenmerken (boolean characteristics)
  setKenmerk(type: string, id: string, kenmerkName: string, value: boolean): void;
  getKenmerk(type: string, id: string, kenmerkName: string): boolean | undefined;

  // Variables (parameters)
  setVariable(name: string, value: Value): void;
  getVariable(name: string): Value | undefined;

  // Current instance (for rule evaluation context)
  current_instance?: Value;
  evaluation_date: Date;
}
```

---

## 2. Mapping Bronnen naar Regelspraak Concepten

### 2.1 Concepten Mapping Tabel

| Bron Concept | Regelspraak Concept | Voorbeeld |
|--------------|---------------------|-----------|
| **Entiteit/Object** (burger, pensioen) | `Objecttype` | `Objecttype de Persoon (bezield)` |
| **Eigenschap** (leeftijd, inkomen) | `attribute` | `de leeftijd Numeriek met eenheid jr;` |
| **Boolean kenmerk** (is minderjarig) | `kenmerk` | `is minderjarig kenmerk (bijvoeglijk);` |
| **Constante** (AOW-bedrag, tariefgrens) | `Parameter` | `Parameter het AOW bruto: Bedrag met eenheid €` |
| **Berekenregel** (belasting = tarief × inkomen) | `Regel` met `Gelijkstelling` | `De belasting moet berekend worden als ...` |
| **Voorwaarde** (indien inkomen > grens) | `indien` clausule | `indien zijn inkomen groter is dan de grens` |
| **Lookup tabel** (tarief per schijf) | `Beslistabel` | `Beslistabel Belastingtarief` |
| **Relatie** (persoon ↔ scenario) | `Feittype` | `Feittype scenario van persoon` |
| **Domeinwaarde** (enum) | `Domein` | `Domein Huishoudtype is van het type Enumeratie` |
| **Eenheid** (euro, jaar) | `Eenheidsysteem` | `Eenheidsysteem Valuta` |

### 2.2 Wetgeving → Regelspraak Mapping

| Wetgeving | Regelspraak Implementatie |
|-----------|---------------------------|
| **Pensioenwet art. 69a** (bedrag ineens) | `Regel Bereken bruto bedrag ineens` |
| **Wet IB 2001 art. 2.10** (Box 1 tarief) | `Beslistabel Belastingtarief AOW` |
| **Wet IB 2001 art. 8.10** (Alg. heffingskorting) | `Regel Bereken algemene heffingskorting` |
| **Wet IB 2001 art. 8.17** (Ouderenkorting) | `Regel Bereken ouderenkorting` |
| **AWIR art. 7 & 8** (Toetsingsinkomen) | `Regel Bereken toetsingsinkomen` |
| **Wet zorgtoeslag art. 1** | `Regel Bereken zorgtoeslag` |
| **Wet huurtoeslag art. 7** | `Beslistabel Huurtoeslag berekening` |
| **Zvw art. 45** | `Regel Bereken Zvw bijdrage` |

---

## 3. Regelspraak Domeinmodel

### 3.1 Eenheidsystemen

```regelspraak
// File: /rules/eenheidsystemen.rs

Eenheidsysteem Valuta
    de euro (mv: euros) EUR €
    de cent (mv: centen) ct = /100 EUR

Eenheidsysteem Tijd
    de dag dg
    de maand mnd
    het jaar jr = 12 mnd

Eenheidsysteem Percentage
    het procent % = /100
```

### 3.2 Domeinen

```regelspraak
// File: /rules/domeinen.rs

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

Domein Huishoudtype is van het type Enumeratie
    'alleenstaand'
    'alleenstaand_ouder'
    'partners'

Domein Woonsituatie is van het type Enumeratie
    'huur'
    'koop'
```

### 3.3 Objecttypes

```regelspraak
// File: /rules/objecttypes.rs

// =============================================================================
// PERSOON - De burger waarvoor we berekenen
// Bron: RvIG, Belastingdienst, SVB profieldata
// =============================================================================

Objecttype de Persoon (mv: Personen) (bezield)
    // Kenmerken (boolean characteristics)
    is AOW-gerechtigd kenmerk (bijvoeglijk);
    heeft recht op zorgtoeslag kenmerk (bezittelijk);
    heeft recht op huurtoeslag kenmerk (bezittelijk);
    is alleenstaand kenmerk (bijvoeglijk);

    // Demografische gegevens
    de leeftijd Numeriek (niet-negatief geheel getal) met eenheid jr;
    de geboortedatum Datum in dagen;
    het huishoudtype Huishoudtype;
    de woonsituatie Woonsituatie;

    // Inkomensgegevens (jaarlijks)
    het AOW-inkomen Bedrag met eenheid €;
    het aanvullend pensioen per maand Bedrag met eenheid €;
    het aanvullend pensioen per jaar Bedrag met eenheid €;
    het pensioenvermogen Bedrag met eenheid €;
    het overig inkomen Bedrag met eenheid €;
    het partner inkomen Bedrag met eenheid €;

    // Huurgegevens
    de huur per maand Bedrag met eenheid €;

    // AOW opbouw
    het AOW opbouwpercentage Numeriek met eenheid %;


// =============================================================================
// SCENARIO - Een specifieke berekening voor een percentage
// =============================================================================

Objecttype het Scenario (mv: Scenarios)
    // === INPUT ===
    het opname percentage Numeriek met eenheid %;

    // === BEREKENDE WAARDEN: BEDRAG INEENS ===
    // Wetgeving: Pensioenwet art. 69a
    het bruto bedrag ineens Bedrag met eenheid €;
    het resterend pensioen per maand Bedrag met eenheid €;
    het resterend pensioen per jaar Bedrag met eenheid €;
    het permanent verlies per jaar Bedrag met eenheid €;

    // === BEREKENDE WAARDEN: INKOMEN ===
    // Wetgeving: AWIR art. 7 & 8
    het bruto inkomen jaar opname Bedrag met eenheid €;
    het toetsingsinkomen jaar opname Bedrag met eenheid €;

    // === BEREKENDE WAARDEN: BELASTING ===
    // Wetgeving: Wet IB 2001, Zvw
    de inkomensafhankelijke bijdrage Zvw Bedrag met eenheid €;
    de belasting box 1 bruto Bedrag met eenheid €;
    de algemene heffingskorting Bedrag met eenheid €;
    de ouderenkorting Bedrag met eenheid €;
    de alleenstaande ouderenkorting Bedrag met eenheid €;
    de totale heffingskortingen Bedrag met eenheid €;
    de belasting na heffingskortingen Bedrag met eenheid €;
    het netto inkomen Bedrag met eenheid €;

    // === BEREKENDE WAARDEN: TOESLAGEN ===
    // Wetgeving: Wet zorgtoeslag, Wet huurtoeslag
    de zorgtoeslag zonder opname Bedrag met eenheid €;
    de zorgtoeslag met opname Bedrag met eenheid €;
    het zorgtoeslag verlies Bedrag met eenheid €;
    de huurtoeslag zonder opname Bedrag met eenheid €;
    de huurtoeslag met opname Bedrag met eenheid €;
    het huurtoeslag verlies Bedrag met eenheid €;

    // === TOTAALRESULTATEN ===
    het totaal toeslagenverlies Bedrag met eenheid €;
    het netto voordeel jaar opname Bedrag met eenheid €;
    de break even jaren Numeriek met eenheid jr;


// =============================================================================
// FEITTYPE - Relatie tussen Persoon en Scenario
// =============================================================================

Feittype scenario van persoon
    het scenario    Scenario
    de persoon      Persoon
    één scenario betreft de berekening voor één persoon
```

### 3.4 Parameters (2025 waarden)

```regelspraak
// File: /rules/parameters-2025.rs

// =============================================================================
// AOW PARAMETERS
// Bron: SVB - https://www.svb.nl/nl/aow/bedragen-aow/aow-bedragen
// =============================================================================

Parameter het AOW bruto alleenstaand per jaar: Bedrag met eenheid € = 19600 €
Parameter het AOW bruto partners per jaar: Bedrag met eenheid € = 13500 €

// =============================================================================
// BELASTING BOX 1 PARAMETERS
// Bron: Belastingdienst - tarieven 2025
// Wetgeving: Wet IB 2001 art. 2.10
// =============================================================================

Parameter de eerste schijf bovengrens: Bedrag met eenheid € = 38441 €
Parameter de tweede schijf bovengrens: Bedrag met eenheid € = 76817 €

// Tarieven voor AOW-gerechtigden (GEEN AOW-premie)
Parameter het tarief eerste schijf AOW: Numeriek met eenheid % = 17,92 %
Parameter het tarief tweede schijf: Numeriek met eenheid % = 37,48 %
Parameter het tarief derde schijf: Numeriek met eenheid % = 49,50 %

// Tarieven voor niet-AOW-gerechtigden
Parameter het tarief eerste schijf niet-AOW: Numeriek met eenheid % = 35,82 %

// =============================================================================
// HEFFINGSKORTINGEN PARAMETERS
// Bron: Belastingdienst
// Wetgeving: Wet IB 2001 art. 8.10, 8.17
// =============================================================================

// Algemene heffingskorting (AOW)
Parameter de maximale algemene heffingskorting AOW: Bedrag met eenheid € = 1536 €
Parameter de algemene heffingskorting afbouwgrens: Bedrag met eenheid € = 28406 €
Parameter het algemene heffingskorting afbouwpercentage AOW: Numeriek met eenheid % = 3,17 %

// Ouderenkorting
Parameter de maximale ouderenkorting: Bedrag met eenheid € = 2035 €
Parameter de ouderenkorting afbouwgrens: Bedrag met eenheid € = 45308 €
Parameter de ouderenkorting afbouweindgrens: Bedrag met eenheid € = 58875 €
Parameter het ouderenkorting afbouwpercentage: Numeriek met eenheid % = 15 %

// Alleenstaande ouderenkorting
Parameter de alleenstaande ouderenkorting bedrag: Bedrag met eenheid € = 531 €

// =============================================================================
// ZVW PARAMETERS
// Bron: Belastingdienst
// Wetgeving: Zvw art. 45
// =============================================================================

Parameter het Zvw bijdragepercentage: Numeriek met eenheid % = 5,32 %
Parameter de Zvw maximale grondslag: Bedrag met eenheid € = 71628 €

// =============================================================================
// ZORGTOESLAG PARAMETERS
// Bron: Dienst Toeslagen
// Wetgeving: Wet zorgtoeslag art. 1 lid 2
// =============================================================================

Parameter de zorgtoeslag inkomensgrens alleenstaand: Bedrag met eenheid € = 39719 €
Parameter de zorgtoeslag inkomensgrens partners: Bedrag met eenheid € = 50000 €
Parameter de maximale zorgtoeslag alleenstaand: Bedrag met eenheid € = 1572 €
Parameter de maximale zorgtoeslag partners: Bedrag met eenheid € = 3024 €
Parameter de zorgtoeslag drempelverzamelinkomen: Bedrag met eenheid € = 26700 €
Parameter het zorgtoeslag afbouwpercentage: Numeriek met eenheid % = 13,22 %

// =============================================================================
// HUURTOESLAG PARAMETERS
// Bron: Dienst Toeslagen
// Wetgeving: Wet huurtoeslag art. 1, 7, 10
// =============================================================================

Parameter de huurtoeslag maximale huurprijs: Bedrag met eenheid € = 1184,82 €
Parameter de huurtoeslag basishuur alleenstaand: Bedrag met eenheid € = 293,73 €
Parameter de huurtoeslag kwaliteitskortingsgrens: Bedrag met eenheid € = 473,31 €
Parameter de huurtoeslag aftoppingsgrens: Bedrag met eenheid € = 681,02 €
```

### 3.5 Berekeningen (Regels)

```regelspraak
// File: /rules/berekeningen.rs

// =============================================================================
// BEDRAG INEENS BEREKENING
// Wetgeving: Pensioenwet art. 69a
// "Max 10% van pensioenwaarde als eenmalige uitkering"
// =============================================================================

Regel Bereken bruto bedrag ineens
    geldig altijd
        Het bruto bedrag ineens van een Scenario moet berekend worden als
            het pensioenvermogen van de persoon van het scenario maal
            het opname percentage van het scenario.

Regel Bereken resterend pensioen per maand
    geldig altijd
        Het resterend pensioen per maand van een Scenario moet berekend worden als
            het aanvullend pensioen per maand van de persoon van het scenario maal
            (1 min het opname percentage van het scenario).

Regel Bereken resterend pensioen per jaar
    geldig altijd
        Het resterend pensioen per jaar van een Scenario moet berekend worden als
            het resterend pensioen per maand van het scenario maal 12.

Regel Bereken permanent verlies per jaar
    geldig altijd
        Het permanent verlies per jaar van een Scenario moet berekend worden als
            het aanvullend pensioen per jaar van de persoon van het scenario min
            het resterend pensioen per jaar van het scenario.


// =============================================================================
// INKOMEN BEREKENING
// Wetgeving: AWIR art. 7 & 8 (toetsingsinkomen)
// "Bedrag ineens telt mee voor draagkracht"
// =============================================================================

Regel Bereken bruto inkomen jaar opname
    geldig altijd
        Het bruto inkomen jaar opname van een Scenario moet berekend worden als
            het AOW-inkomen van de persoon van het scenario plus
            het resterend pensioen per jaar van het scenario plus
            het bruto bedrag ineens van het scenario plus
            het overig inkomen van de persoon van het scenario.

Regel Bereken toetsingsinkomen
    geldig altijd
        Het toetsingsinkomen jaar opname van een Scenario moet berekend worden als
            het bruto inkomen jaar opname van het scenario.


// =============================================================================
// ZVW BIJDRAGE BEREKENING
// Wetgeving: Zvw art. 45
// "~5,32% van inkomen tot maximum grondslag"
// =============================================================================

Regel Bereken Zvw bijdrage
    geldig altijd
        De inkomensafhankelijke bijdrage Zvw van een Scenario moet berekend worden als
            de kleinste waarde van X en Y maal het Zvw bijdragepercentage
            naar beneden afgerond op 0 decimalen.
        Daarbij geldt:
            X is het bruto inkomen jaar opname van het scenario
            Y is de Zvw maximale grondslag.


// =============================================================================
// BELASTING BOX 1 BEREKENING
// Wetgeving: Wet IB 2001 art. 2.10
// "Progressief tarief: 17,92% (AOW) / 37,48% / 49,5%"
// =============================================================================

Regel Bereken belasting box 1 AOW-gerechtigde
    geldig altijd
        De belasting box 1 bruto van een Scenario moet berekend worden als
            de som van SchijfEen en SchijfTwee en SchijfDrie.
        Daarbij geldt:
            SchijfEen is de kleinste waarde van
                (het bruto inkomen jaar opname van het scenario) en
                (de eerste schijf bovengrens)
                maal het tarief eerste schijf AOW
            SchijfTwee is de kleinste waarde van
                (de grootste waarde van 0 € en
                    (het bruto inkomen jaar opname van het scenario min de eerste schijf bovengrens)) en
                (de tweede schijf bovengrens min de eerste schijf bovengrens)
                maal het tarief tweede schijf
            SchijfDrie is de grootste waarde van 0 € en
                (het bruto inkomen jaar opname van het scenario min de tweede schijf bovengrens)
                maal het tarief derde schijf.


// =============================================================================
// HEFFINGSKORTINGEN BEREKENING
// Wetgeving: Wet IB 2001 art. 8.10 (algemene heffingskorting), 8.17 (ouderenkorting)
// =============================================================================

Regel Bereken algemene heffingskorting AOW
    geldig altijd
        De algemene heffingskorting van een Scenario moet berekend worden als
            de grootste waarde van 0 € en
            (de maximale algemene heffingskorting AOW min
                ((het bruto inkomen jaar opname van het scenario min de algemene heffingskorting afbouwgrens)
                maal het algemene heffingskorting afbouwpercentage AOW)).

Regel Bereken ouderenkorting onder afbouwgrens
    geldig altijd
        De ouderenkorting van een Scenario moet gesteld worden op de maximale ouderenkorting
        indien het bruto inkomen jaar opname van het scenario kleiner of gelijk is aan
            de ouderenkorting afbouwgrens.

Regel Bereken ouderenkorting met afbouw
    geldig altijd
        De ouderenkorting van een Scenario moet berekend worden als
            de grootste waarde van 0 € en
            (de maximale ouderenkorting min
                ((het bruto inkomen jaar opname van het scenario min de ouderenkorting afbouwgrens)
                maal het ouderenkorting afbouwpercentage))
        indien hij aan alle volgende voorwaarden voldoet:
            - het bruto inkomen jaar opname van het scenario is groter dan de ouderenkorting afbouwgrens
            - het bruto inkomen jaar opname van het scenario is kleiner of gelijk aan de ouderenkorting afbouweindgrens.

Regel Bereken ouderenkorting nul
    geldig altijd
        De ouderenkorting van een Scenario moet gesteld worden op 0 €
        indien het bruto inkomen jaar opname van het scenario groter is dan
            de ouderenkorting afbouweindgrens.

Regel Bereken alleenstaande ouderenkorting
    geldig altijd
        De alleenstaande ouderenkorting van een Scenario moet gesteld worden op
            de alleenstaande ouderenkorting bedrag
        indien de persoon van het scenario alleenstaand is.

Regel Bereken alleenstaande ouderenkorting nul
    geldig altijd
        De alleenstaande ouderenkorting van een Scenario moet gesteld worden op 0 €
        indien de persoon van het scenario niet alleenstaand is.

Regel Bereken totale heffingskortingen
    geldig altijd
        De totale heffingskortingen van een Scenario moet berekend worden als
            de algemene heffingskorting van het scenario plus
            de ouderenkorting van het scenario plus
            de alleenstaande ouderenkorting van het scenario.

Regel Bereken belasting na heffingskortingen
    geldig altijd
        De belasting na heffingskortingen van een Scenario moet berekend worden als
            de grootste waarde van 0 € en
            (de belasting box 1 bruto van het scenario min
            de totale heffingskortingen van het scenario).

Regel Bereken netto inkomen
    geldig altijd
        Het netto inkomen van een Scenario moet berekend worden als
            het bruto inkomen jaar opname van het scenario min
            de inkomensafhankelijke bijdrage Zvw van het scenario min
            de belasting na heffingskortingen van het scenario.
```

### 3.6 Toeslagen Berekeningen

```regelspraak
// File: /rules/toeslagen.rs

// =============================================================================
// ZORGTOESLAG BEREKENING
// Wetgeving: Wet zorgtoeslag art. 1 lid 2
// "Hoogte afhankelijk van draagkracht (toetsingsinkomen)"
//
// BELANGRIJK: Er is GEEN uitzonderingsregel voor bedrag ineens bij zorgtoeslag
// (CDA-amendement verworpen)
// =============================================================================

Regel Zorgtoeslag eligibility
    geldig altijd
        Een Persoon heeft recht op zorgtoeslag
        indien hij aan alle volgende voorwaarden voldoet:
            - hij is AOW-gerechtigd
            - zijn toetsingsinkomen is kleiner dan de zorgtoeslag inkomensgrens alleenstaand.

Regel Bereken zorgtoeslag alleenstaand
    geldig altijd
        De zorgtoeslag met opname van een Scenario moet berekend worden als
            de grootste waarde van 0 € en
            (de maximale zorgtoeslag alleenstaand min
                ((het toetsingsinkomen jaar opname van het scenario min de zorgtoeslag drempelverzamelinkomen)
                maal het zorgtoeslag afbouwpercentage))
        indien hij aan alle volgende voorwaarden voldoet:
            - de persoon van het scenario alleenstaand is
            - het toetsingsinkomen jaar opname van het scenario kleiner is dan
                de zorgtoeslag inkomensgrens alleenstaand.

Regel Zorgtoeslag nul boven grens
    geldig altijd
        De zorgtoeslag met opname van een Scenario moet gesteld worden op 0 €
        indien het toetsingsinkomen jaar opname van het scenario groter of gelijk is aan
            de zorgtoeslag inkomensgrens alleenstaand.

Regel Bereken zorgtoeslag verlies
    geldig altijd
        Het zorgtoeslag verlies van een Scenario moet berekend worden als
            de zorgtoeslag zonder opname van het scenario min
            de zorgtoeslag met opname van het scenario.


// =============================================================================
// HUURTOESLAG BEREKENING
// Wetgeving: Wet huurtoeslag art. 1, 7, 10
// "Eigen bijdrage stijgt met inkomen"
//
// ⚠️ BIJZONDERE REGEL (art. 10): Je kunt verzoeken bedrag ineens
// NIET mee te tellen voor huurtoeslag
// =============================================================================

Beslistabel Huurtoeslag berekening
    geldig altijd

| | de huurtoeslag met opname van een Scenario moet gesteld worden op | indien het toetsingsinkomen jaar opname van het scenario kleiner of gelijk is aan | indien de huur per maand van de persoon van het scenario groter is dan |
|---|---|---|---|
| 1 | de huur per maand van de persoon van het scenario maal 12 min 3516 € | 26000 € | 0 € |
| 2 | de huur per maand van de persoon van het scenario maal 12 min 4500 € | 32000 € | 0 € |
| 3 | de huur per maand van de persoon van het scenario maal 12 min 5500 € | 38000 € | 0 € |
| 4 | 500 € | 45000 € | 0 € |
| 5 | 0 € | n.v.t. | n.v.t. |

Regel Bereken huurtoeslag verlies
    geldig altijd
        Het huurtoeslag verlies van een Scenario moet berekend worden als
            de huurtoeslag zonder opname van het scenario min
            de huurtoeslag met opname van het scenario.


// =============================================================================
// TOTAAL RESULTATEN
// =============================================================================

Regel Bereken totaal toeslagenverlies
    geldig altijd
        Het totaal toeslagenverlies van een Scenario moet berekend worden als
            het zorgtoeslag verlies van het scenario plus
            het huurtoeslag verlies van het scenario.

Regel Bereken netto voordeel
    geldig altijd
        Het netto voordeel jaar opname van een Scenario moet berekend worden als
            het bruto bedrag ineens van het scenario min
            de belasting na heffingskortingen van het scenario min
            het totaal toeslagenverlies van het scenario.

Regel Bereken break even jaren
    geldig altijd
        De break even jaren van een Scenario moet berekend worden als
            het netto voordeel jaar opname van het scenario gedeeld door
            het permanent verlies per jaar van het scenario
        indien het permanent verlies per jaar van het scenario groter is dan 0 €.
```

---

## 4. Interface Specificaties

### 4.1 UI → Adapter: Input Interface

```typescript
// File: /packages/rules-engine/src/types/input.ts

export interface PersonProfile {
  // Identificatie
  id: string;
  name?: string;

  // Demografische gegevens
  leeftijd: number;                    // Leeftijd in jaren
  geboortedatum: string;               // ISO date YYYY-MM-DD
  huishoudtype: 'alleenstaand' | 'alleenstaand_ouder' | 'partners';
  isAowGerechtigd: boolean;

  // Inkomen (jaarbedragen in euro's)
  aowInkomen: number;                  // AOW bruto per jaar
  aanvullendPensioenPerMaand: number;  // Pensioen per maand
  pensioenvermogen: number;            // Totaal pensioenkapitaal
  overigInkomen?: number;              // Overig inkomen
  partnerInkomen?: number;             // Partner inkomen (indien van toepassing)

  // Wonen
  woonsituatie: 'huur' | 'koop';
  huurPerMaand?: number;               // Maandelijkse huur (indien huur)

  // AOW
  aowOpbouwpercentage?: number;        // Default 100%
}

export interface ScenarioInput {
  person: PersonProfile;
  opnamePercentage: number;            // 0-10%
}

export interface ComparisonInput {
  person: PersonProfile;
  percentages?: number[];              // Default [0, 5, 10]
}
```

### 4.2 Adapter → UI: Output Interface

```typescript
// File: /packages/rules-engine/src/types/output.ts

// ============================================================================
// WETGEVING REFERENTIES (Explainability)
// ============================================================================

export interface LegislationReference {
  artikel: string;           // "Pensioenwet art. 69a"
  titel: string;             // "Afkoop deel aanspraak ouderdomspensioen"
  url: string;               // Link naar wetten.overheid.nl
  samenvatting: string;      // Korte uitleg
}

export interface CalculationStep {
  label: string;             // "Berekening bruto bedrag ineens"
  regelNaam: string;         // "Bereken bruto bedrag ineens" (uit regelspraak)
  formula: string;           // "€133.000 × 10%"
  inputs: Record<string, number | string>;
  result: number;
  unit: '€' | '%' | 'jr';
  legislation: LegislationReference;
}

// ============================================================================
// WAARSCHUWINGEN
// ============================================================================

export interface Warning {
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  legislation?: LegislationReference;
}

// ============================================================================
// TOESLAG RESULTAAT
// ============================================================================

export interface ToeslagResult {
  zonderOpname: number;
  metOpname: number;
  verlies: number;
  vervaltVolledig: boolean;
  steps: CalculationStep[];
}

// ============================================================================
// SCENARIO RESULTAAT
// ============================================================================

export interface ScenarioResult {
  // Input echo
  input: {
    opnamePercentage: number;
    pensioenvermogen: number;
    pensioenPerMaand: number;
  };

  // Kernresultaten
  brutoBedragIneens: number;
  resterendPensioenPerMaand: number;
  permanentVerliesPerJaar: number;

  // Inkomen jaar van opname
  brutoInkomenJaarOpname: number;
  toetsingsinkomen: number;

  // Belasting breakdown
  belasting: {
    zvwBijdrage: number;
    belastingBox1Bruto: number;
    algemeeneheffingskorting: number;
    ouderenkorting: number;
    alleenstaandeOuderenkorting: number;
    totaleHeffingskortingen: number;
    belastingNaHeffingskortingen: number;
    steps: CalculationStep[];
  };

  // Toeslagen
  zorgtoeslag: ToeslagResult;
  huurtoeslag: ToeslagResult;

  // Samenvatting
  nettoInkomen: number;
  totaalToeslagenverlies: number;
  nettoVoordeelJaarOpname: number;
  breakEvenJaren: number | null;

  // Metadata
  warnings: Warning[];
  assumptions: string[];
  firedRules: string[];      // Welke regels zijn uitgevoerd
}

// ============================================================================
// VERGELIJKING RESULTAAT
// ============================================================================

export interface ComparisonResult {
  scenarios: ScenarioResult[];   // Eén per percentage (0%, 5%, 10%)
  recommendation: {
    preferredPercentage: number;
    reason: string;
  };
  warnings: Warning[];           // Globale waarschuwingen
}
```

### 4.3 Adapter Implementatie

```typescript
// File: /packages/rules-engine/src/adapter.ts

import { Engine, Context, Value } from 'regelspraak-ts';
import { PersonProfile, ScenarioInput, ComparisonInput } from './types/input';
import { ScenarioResult, ComparisonResult, CalculationStep, Warning } from './types/output';
import { LEGISLATION_DATABASE } from './data/legislation';

// Import regelspraak broncode als raw string
import eenheidsystemenSource from './rules/eenheidsystemen.rs?raw';
import domeinenSource from './rules/domeinen.rs?raw';
import objecttypesSource from './rules/objecttypes.rs?raw';
import parametersSource from './rules/parameters-2025.rs?raw';
import berekeningenSource from './rules/berekeningen.rs?raw';
import toeslagenSource from './rules/toeslagen.rs?raw';

// Combineer alle bronbestanden
const RULES_SOURCE = [
  eenheidsystemenSource,
  domeinenSource,
  objecttypesSource,
  parametersSource,
  berekeningenSource,
  toeslagenSource
].join('\n\n');

export class BedragIneensCalculator {
  private engine: Engine;
  private model: any;

  constructor() {
    this.engine = new Engine();
    const parseResult = this.engine.parseModel(RULES_SOURCE);

    if (!parseResult.success) {
      throw new Error(`Failed to parse rules: ${parseResult.errors?.join(', ')}`);
    }

    this.model = parseResult.model;
  }

  /**
   * Bereken enkel scenario
   */
  calculateScenario(input: ScenarioInput): ScenarioResult {
    const context = this.createContext(input);
    this.engine.execute(this.model, context);
    return this.extractResult(context, input);
  }

  /**
   * Vergelijk meerdere scenario's (standaard: 0%, 5%, 10%)
   */
  compareScenarios(input: ComparisonInput): ComparisonResult {
    const percentages = input.percentages ?? [0, 5, 10];

    const scenarios = percentages.map(pct =>
      this.calculateScenario({
        person: input.person,
        opnamePercentage: pct
      })
    );

    return {
      scenarios,
      recommendation: this.generateRecommendation(scenarios),
      warnings: this.generateGlobalWarnings(input.person, scenarios)
    };
  }

  /**
   * Converteer UI input naar regelspraak Context
   */
  private createContext(input: ScenarioInput): Context {
    const context = new Context(this.model);

    // Creëer Persoon object
    const personId = input.person.id;
    context.createObject('Persoon', personId, {
      leeftijd: { type: 'number', value: input.person.leeftijd, unit: { name: 'jr' } },
      'AOW-inkomen': { type: 'number', value: input.person.aowInkomen, unit: { name: 'euro' } },
      'aanvullend pensioen per maand': {
        type: 'number',
        value: input.person.aanvullendPensioenPerMaand,
        unit: { name: 'euro' }
      },
      'aanvullend pensioen per jaar': {
        type: 'number',
        value: input.person.aanvullendPensioenPerMaand * 12,
        unit: { name: 'euro' }
      },
      pensioenvermogen: { type: 'number', value: input.person.pensioenvermogen, unit: { name: 'euro' } },
      'overig inkomen': { type: 'number', value: input.person.overigInkomen ?? 0, unit: { name: 'euro' } },
      huishoudtype: { type: 'string', value: input.person.huishoudtype },
      woonsituatie: { type: 'string', value: input.person.woonsituatie },
      'huur per maand': { type: 'number', value: input.person.huurPerMaand ?? 0, unit: { name: 'euro' } }
    });

    // Zet kenmerken
    if (input.person.huishoudtype === 'alleenstaand' || input.person.huishoudtype === 'alleenstaand_ouder') {
      context.setKenmerk('Persoon', personId, 'alleenstaand', true);
    }
    if (input.person.isAowGerechtigd) {
      context.setKenmerk('Persoon', personId, 'AOW-gerechtigd', true);
    }

    // Creëer Scenario object
    const scenarioId = `scenario-${input.opnamePercentage}`;
    context.createObject('Scenario', scenarioId, {
      'opname percentage': { type: 'number', value: input.opnamePercentage / 100 }
    });

    // Creëer relatie tussen Scenario en Persoon
    // (via feittype of direct reference - afhankelijk van implementatie)

    return context;
  }

  /**
   * Extraheer gestructureerd resultaat uit Context na executie
   */
  private extractResult(context: Context, input: ScenarioInput): ScenarioResult {
    const scenarios = context.getObjectsByType('Scenario');
    const scenario = scenarios[0] as any;
    const attrs = scenario?.value ?? {};

    return {
      input: {
        opnamePercentage: input.opnamePercentage,
        pensioenvermogen: input.person.pensioenvermogen,
        pensioenPerMaand: input.person.aanvullendPensioenPerMaand
      },

      brutoBedragIneens: this.getValue(attrs, 'bruto bedrag ineens'),
      resterendPensioenPerMaand: this.getValue(attrs, 'resterend pensioen per maand'),
      permanentVerliesPerJaar: this.getValue(attrs, 'permanent verlies per jaar'),

      brutoInkomenJaarOpname: this.getValue(attrs, 'bruto inkomen jaar opname'),
      toetsingsinkomen: this.getValue(attrs, 'toetsingsinkomen jaar opname'),

      belasting: {
        zvwBijdrage: this.getValue(attrs, 'inkomensafhankelijke bijdrage Zvw'),
        belastingBox1Bruto: this.getValue(attrs, 'belasting box 1 bruto'),
        algemeneheffingskorting: this.getValue(attrs, 'algemene heffingskorting'),
        ouderenkorting: this.getValue(attrs, 'ouderenkorting'),
        alleenstaandeOuderenkorting: this.getValue(attrs, 'alleenstaande ouderenkorting'),
        totaleHeffingskortingen: this.getValue(attrs, 'totale heffingskortingen'),
        belastingNaHeffingskortingen: this.getValue(attrs, 'belasting na heffingskortingen'),
        steps: this.buildBelastingSteps(attrs)
      },

      zorgtoeslag: {
        zonderOpname: this.getValue(attrs, 'zorgtoeslag zonder opname'),
        metOpname: this.getValue(attrs, 'zorgtoeslag met opname'),
        verlies: this.getValue(attrs, 'zorgtoeslag verlies'),
        vervaltVolledig: this.getValue(attrs, 'zorgtoeslag met opname') === 0 &&
                         this.getValue(attrs, 'zorgtoeslag zonder opname') > 0,
        steps: []
      },

      huurtoeslag: {
        zonderOpname: this.getValue(attrs, 'huurtoeslag zonder opname'),
        metOpname: this.getValue(attrs, 'huurtoeslag met opname'),
        verlies: this.getValue(attrs, 'huurtoeslag verlies'),
        vervaltVolledig: this.getValue(attrs, 'huurtoeslag met opname') === 0 &&
                         this.getValue(attrs, 'huurtoeslag zonder opname') > 0,
        steps: []
      },

      nettoInkomen: this.getValue(attrs, 'netto inkomen'),
      totaalToeslagenverlies: this.getValue(attrs, 'totaal toeslagenverlies'),
      nettoVoordeelJaarOpname: this.getValue(attrs, 'netto voordeel jaar opname'),
      breakEvenJaren: this.getValue(attrs, 'break even jaren') || null,

      warnings: this.generateWarnings(attrs, input),
      assumptions: this.getAssumptions(),
      firedRules: []
    };
  }

  private getValue(attrs: any, name: string): number {
    const attr = attrs[name];
    return attr?.value ?? 0;
  }

  private buildBelastingSteps(attrs: any): CalculationStep[] {
    // Implementatie om berekeningen te traceren
    return [];
  }

  private generateWarnings(attrs: any, input: ScenarioInput): Warning[] {
    const warnings: Warning[] = [];

    // Waarschuwing: Zorgtoeslag vervalt volledig
    const zorgtoeslagZonder = this.getValue(attrs, 'zorgtoeslag zonder opname');
    const zorgtoeslagMet = this.getValue(attrs, 'zorgtoeslag met opname');
    if (zorgtoeslagMet === 0 && zorgtoeslagZonder > 0) {
      warnings.push({
        severity: 'critical',
        title: 'Zorgtoeslag vervalt volledig',
        message: `Door de opname van ${input.opnamePercentage}% verliest u uw volledige zorgtoeslag van €${zorgtoeslagZonder.toFixed(0)} per jaar.`,
        legislation: LEGISLATION_DATABASE.zorgtoeslag
      });
    }

    // Waarschuwing: Huurtoeslag vervalt volledig
    const huurtoeslagZonder = this.getValue(attrs, 'huurtoeslag zonder opname');
    const huurtoeslagMet = this.getValue(attrs, 'huurtoeslag met opname');
    if (huurtoeslagMet === 0 && huurtoeslagZonder > 0) {
      warnings.push({
        severity: 'critical',
        title: 'Huurtoeslag vervalt volledig',
        message: `Door de opname van ${input.opnamePercentage}% verliest u uw volledige huurtoeslag van €${huurtoeslagZonder.toFixed(0)} per jaar.`,
        legislation: LEGISLATION_DATABASE.huurtoeslag
      });
    }

    // Waarschuwing: Toeslagenverlies groter dan netto voordeel
    const totaalToeslagenverlies = this.getValue(attrs, 'totaal toeslagenverlies');
    const nettoVoordeel = this.getValue(attrs, 'netto voordeel jaar opname');
    if (totaalToeslagenverlies > nettoVoordeel && input.opnamePercentage > 0) {
      warnings.push({
        severity: 'critical',
        title: 'Toeslagenverlies groter dan netto voordeel',
        message: `U verliest €${totaalToeslagenverlies.toFixed(0)} aan toeslagen, maar houdt netto slechts €${nettoVoordeel.toFixed(0)} over. De opname is ongunstig.`
      });
    }

    return warnings;
  }

  private getAssumptions(): string[] {
    return [
      'Alleenstaande AOW-gerechtigde',
      'Volledige AOW-opbouw (100%)',
      'Tarieven en grenzen 2025',
      'AOW-leeftijd blijft 67 jaar',
      'Pensioendatum = AOW-ingangsdatum',
      'Geen overig inkomen naast pensioen'
    ];
  }

  private generateRecommendation(scenarios: ScenarioResult[]): { preferredPercentage: number; reason: string } {
    // Vind scenario met beste netto resultaat, rekening houdend met lange termijn
    let best = scenarios[0];
    let bestScore = this.calculateScore(scenarios[0]);

    for (const scenario of scenarios.slice(1)) {
      const score = this.calculateScore(scenario);
      if (score > bestScore) {
        best = scenario;
        bestScore = score;
      }
    }

    const pct = best.input.opnamePercentage;
    let reason: string;

    if (pct === 0) {
      reason = 'Geen opname is het gunstigst: u behoudt uw volledige pensioen en toeslagen.';
    } else if (best.totaalToeslagenverlies === 0) {
      reason = `${pct}% opname is gunstig: u ontvangt geen toeslagen om te verliezen.`;
    } else {
      reason = `${pct}% biedt de beste balans tussen direct voordeel en behoud van toeslagen.`;
    }

    return { preferredPercentage: pct, reason };
  }

  private calculateScore(scenario: ScenarioResult): number {
    const immediateNetBenefit = scenario.nettoVoordeelJaarOpname;
    const permanentLoss = scenario.permanentVerliesPerJaar;
    const yearsToConsider = 20;  // Verwachte jaren in pensioen

    return immediateNetBenefit - (permanentLoss * yearsToConsider);
  }

  private generateGlobalWarnings(person: PersonProfile, scenarios: ScenarioResult[]): Warning[] {
    const warnings: Warning[] = [];

    if (person.aanvullendPensioenPerMaand < 800 &&
        scenarios.some(s => s.zorgtoeslag.zonderOpname > 0)) {
      warnings.push({
        severity: 'warning',
        title: 'Laag inkomen met toeslagen',
        message: 'Bij een laag pensioen met toeslagen kan bedrag ineens ongunstig zijn. Vergelijk de scenario\'s zorgvuldig.',
        legislation: LEGISLATION_DATABASE.toetsingsinkomen
      });
    }

    return warnings;
  }
}

// Singleton export voor eenvoudig gebruik
export const calculator = new BedragIneensCalculator();
```

---

## 5. Wetgeving Referentie Database

```typescript
// File: /packages/rules-engine/src/data/legislation.ts

import { LegislationReference } from '../types/output';

export const LEGISLATION_DATABASE: Record<string, LegislationReference> = {
  bedragIneens: {
    artikel: 'Pensioenwet art. 69a',
    titel: 'Afkoop deel aanspraak ouderdomspensioen',
    url: 'https://wetten.overheid.nl/BWBR0020809/2024-07-01#Paragraaf10_Artikel69a',
    samenvatting: 'Max 10% van pensioenwaarde als eenmalige uitkering'
  },

  wetsvoorstel36154: {
    artikel: 'Wetsvoorstel 36154',
    titel: 'Wet herziening bedrag ineens',
    url: 'https://www.eerstekamer.nl/wetsvoorstel/36154_wet_herziening_bedrag_ineens',
    samenvatting: 'Herziene regels voor bedrag ineens (inwerkingtreding 1 juli 2026)'
  },

  belastingBox1: {
    artikel: 'Wet IB 2001 art. 2.10',
    titel: 'Belastbaar inkomen uit werk en woning',
    url: 'https://wetten.overheid.nl/BWBR0011353/2025-01-01#Hoofdstuk2_Afdeling2.4',
    samenvatting: 'Progressief tarief: 17,92% (AOW) / 37,48% / 49,5%'
  },

  algemeeneheffingskorting: {
    artikel: 'Wet IB 2001 art. 8.10',
    titel: 'Algemene heffingskorting',
    url: 'https://wetten.overheid.nl/BWBR0011353/2025-01-01#Hoofdstuk8_Afdeling8.1',
    samenvatting: 'Korting op belasting, afbouwend vanaf €28.406'
  },

  ouderenkorting: {
    artikel: 'Wet IB 2001 art. 8.17',
    titel: 'Ouderenkorting',
    url: 'https://wetten.overheid.nl/BWBR0011353/2025-01-01#Hoofdstuk8_Afdeling8.3',
    samenvatting: 'Extra korting AOW-gerechtigden, max €2.035'
  },

  toetsingsinkomen: {
    artikel: 'AWIR art. 7 en 8',
    titel: 'Draagkracht en toetsingsinkomen',
    url: 'https://wetten.overheid.nl/BWBR0018472/2025-01-01#Paragraaf2',
    samenvatting: 'Toetsingsinkomen = verzamelinkomen voor toeslagen'
  },

  zorgtoeslag: {
    artikel: 'Wet zorgtoeslag art. 1 lid 2',
    titel: 'Tegemoetkoming zorgverzekering',
    url: 'https://wetten.overheid.nl/BWBR0018451/2025-01-01',
    samenvatting: 'Hoogte afhankelijk van draagkracht (toetsingsinkomen)'
  },

  huurtoeslag: {
    artikel: 'Wet huurtoeslag art. 1, 7, 10',
    titel: 'Tegemoetkoming huurkosten',
    url: 'https://wetten.overheid.nl/BWBR0008659/2025-01-01',
    samenvatting: 'Eigen bijdrage stijgt met inkomen, bijzondere regeling mogelijk (art. 10)'
  },

  zvw: {
    artikel: 'Zvw art. 45',
    titel: 'Inkomensafhankelijke bijdrage',
    url: 'https://wetten.overheid.nl/BWBR0018450/2025-01-01#Hoofdstuk5',
    samenvatting: 'Zvw bijdrage ~5,32% van inkomen'
  }
};
```

---

## 6. Project Structuur

```
/packages/rules-engine/
├── src/
│   ├── index.ts                      # Publieke API exports
│   ├── adapter.ts                    # BedragIneensCalculator class
│   ├── types/
│   │   ├── input.ts                  # Input interfaces (PersonProfile, ScenarioInput)
│   │   └── output.ts                 # Output interfaces (ScenarioResult, ComparisonResult)
│   ├── data/
│   │   └── legislation.ts            # Wetgeving referentie database
│   └── rules/                        # Regelspraak bronbestanden
│       ├── eenheidsystemen.rs        # Eenheidsystemen (Valuta, Tijd, Percentage)
│       ├── domeinen.rs               # Domein types (Bedrag, Huishoudtype)
│       ├── objecttypes.rs            # Objecttype definities (Persoon, Scenario)
│       ├── parameters-2025.rs        # Parameters met 2025 waarden
│       ├── berekeningen.rs           # Kern berekeningen (bedrag ineens, belasting)
│       └── toeslagen.rs              # Toeslagen berekeningen (zorgtoeslag, huurtoeslag)
├── tests/
│   ├── ek-nota-validation.test.ts    # Validatie tegen EK Nota tabellen
│   └── adapter.test.ts               # Adapter unit tests
└── package.json

/apps/web/
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── ProfileSelector.tsx       # Kies voorbeeldprofiel of voer eigen gegevens in
│   │   ├── InputForm.tsx             # Invoerformulier
│   │   ├── PercentageSlider.tsx      # Slider voor 0-10% selectie
│   │   ├── ScenarioComparison.tsx    # Vergelijkingstabel 0%/5%/10%
│   │   ├── ResultSummary.tsx         # Samenvatting met netto effect
│   │   ├── ExplanationPanel.tsx      # Stap-voor-stap uitleg
│   │   ├── WarningBanner.tsx         # Waarschuwingen
│   │   └── LegislationLink.tsx       # Link naar wetgeving
│   ├── hooks/
│   │   └── useScenario.ts            # React hook voor rules-engine
│   └── data/
│       └── profiles.json             # Voorbeeldprofielen (geconverteerd van YAML)
└── package.json

/package.json                          # Monorepo root (pnpm workspace)
```

---

## 7. Validatie Strategie

### 7.1 EK Nota Tabel Validatie

De 6 tabellen uit doc/07_EK_Nota_Rekenvoorbeelden.md moeten gereproduceerd worden:

| Tabel | Pensioen/maand | Opname % | Te valideren |
|-------|----------------|----------|--------------|
| 1 | €600 | 10% | Bruto €39.400, Belasting €4.000, Zorgtoeslag €0, Huurtoeslag €0 |
| 2 | €1.200 | 10% | Bruto €59.200, Belasting €14.000, Zorgtoeslag €0, Huurtoeslag €0 |
| 3 | €2.100 | 10% | Bruto €88.900, Belasting €27.200, Geen toeslagen impact |
| 4 | €600 | 5% | Bruto €33.100, Zorgtoeslag €600, Huurtoeslag €500 |
| 5 | €1.200 | 5% | Bruto €46.600, Zorgtoeslag €0, Huurtoeslag €0 |
| 6 | €2.100 | 5% | Bruto €66.900, Geen toeslagen impact |

### 7.2 Test Implementatie

```typescript
// File: /packages/rules-engine/tests/ek-nota-validation.test.ts

import { BedragIneensCalculator } from '../src/adapter';

const calculator = new BedragIneensCalculator();

describe('EK Nota Tabel 1: 10% bij €600/maand pensioen', () => {
  const person = {
    id: 'ek-1',
    leeftijd: 67,
    geboortedatum: '1957-01-01',
    huishoudtype: 'alleenstaand' as const,
    isAowGerechtigd: true,
    aowInkomen: 19600,
    aanvullendPensioenPerMaand: 600,
    pensioenvermogen: 133000,  // Afgeleid van €600/maand
    woonsituatie: 'huur' as const,
    huurPerMaand: 576
  };

  it('berekent bruto inkomen correct', () => {
    const result = calculator.calculateScenario({ person, opnamePercentage: 10 });
    expect(result.brutoInkomenJaarOpname).toBeCloseTo(39400, -2);  // ±€100
  });

  it('berekent belasting na heffingskortingen correct', () => {
    const result = calculator.calculateScenario({ person, opnamePercentage: 10 });
    expect(result.belasting.belastingNaHeffingskortingen).toBeCloseTo(4000, -2);
  });

  it('toont zorgtoeslag vervalt volledig', () => {
    const result = calculator.calculateScenario({ person, opnamePercentage: 10 });
    expect(result.zorgtoeslag.vervaltVolledig).toBe(true);
    expect(result.zorgtoeslag.verlies).toBeCloseTo(1500, -2);
  });

  it('toont huurtoeslag vervalt volledig', () => {
    const result = calculator.calculateScenario({ person, opnamePercentage: 10 });
    expect(result.huurtoeslag.vervaltVolledig).toBe(true);
    expect(result.huurtoeslag.verlies).toBeCloseTo(2700, -2);
  });
});

// Vergelijkbare tests voor tabellen 2-6...
```

---

## 8. Implementatie Volgorde

### Fase 1: Rules Engine Setup (dag 1)
1. ✅ Regelspraak-ts submodule toegevoegd
2. Creëer packages/rules-engine structuur
3. Schrijf eenheidsystemen.rs en domeinen.rs
4. Schrijf objecttypes.rs (Persoon, Scenario)
5. Schrijf parameters-2025.rs met alle tarieven

### Fase 2: Kern Berekeningen (dag 1-2)
1. Schrijf berekeningen.rs (bedrag ineens, inkomen, belasting)
2. Schrijf toeslagen.rs (zorgtoeslag, huurtoeslag)
3. Implementeer adapter.ts (input/output conversie)
4. Schrijf EK Nota validatie tests
5. Itereer tot alle 6 tabellen valideren

### Fase 3: Explainability Layer (dag 2)
1. Voeg wetgeving database toe
2. Implementeer trace parsing voor berekening stappen
3. Voeg waarschuwingen generatie toe
4. Voeg aanbeveling logica toe

### Fase 4: UI Integratie (dag 2-3)
1. Creëer React hook voor adapter
2. Bouw scenario vergelijking UI
3. Bouw uitleg panel
4. Voeg gevoeligheidsanalyse toe

### Fase 5: Demo-ready (dag 3)
1. Converteer profiel data van YAML
2. Final styling
3. Edge cases testen
4. Demo script voorbereiden

---

## 9. Kritische Bestanden

| Bestand | Doel |
|---------|------|
| `regelspraak-ts/src/engine.ts` | Core engine executie logica |
| `regelspraak-ts/src/context.ts` | Context management voor objecten en kenmerken |
| `regelspraak-ts/examples/toka/gegevens.rs` | Referentie implementatie objecttypes |
| `regelspraak-ts/examples/toka/regels.rs` | Referentie implementatie regels |
| `doc/07_EK_Nota_Rekenvoorbeelden.md` | Validatie data met 6 referentie tabellen |
| `rules-as-code-pension-starter/data/Hackathon_profiles.yaml` | 38 burgerprofielen |

---

## 10. Aannames & Disclaimers

### Aannames (altijd tonen aan gebruiker)

```
⚠️ Deze berekening gaat uit van:
• Alleenstaande AOW-gerechtigde
• Volledige AOW-opbouw (100%)
• Tarieven en grenzen 2025
• AOW-leeftijd blijft 67 jaar
• Pensioendatum = AOW-ingangsdatum
• Geen overig inkomen naast pensioen
```

### Disclaimer (onderin elke pagina)

```
ℹ️ Dit is een indicatieve berekening. De daadwerkelijke effecten kunnen
afwijken door persoonlijke omstandigheden. Raadpleeg een adviseur of
de Belastingdienst/Toeslagen voor een exacte berekening.

Bronnen: Wet herziening bedrag ineens (36154), Eerste Kamer Nota,
Belastingdienst tarieven 2025, Dienst Toeslagen parameters 2025.

🔧 Regels gedefinieerd in Regelspraak (Rules as Code)
```
