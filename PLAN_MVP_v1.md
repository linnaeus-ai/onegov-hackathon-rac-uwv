# MVP Plan: Bedrag Ineens Decision Tool

## Focus & Prioriteiten (per user input)

1. **Explainability by design** - Elke berekening moet uitlegbaar zijn
2. **Scenariovergelijking** - 0% vs 5% vs 10% naast elkaar
3. **Visualisaties** - Begrijpelijk voor verschillende profielen
4. **Bonus features:**
   - "Wat-als" sliders voor gevoeligheidsanalyse
   - Rules as Code engine **los van UI**
   - Duidelijke waarschuwingen over onzekerheid en aannames

---

## 1. Beschikbare Profieldata (uit starter repo)

### Voorbeeldprofiel: Merijn van der Meer (BSN 100000001)

| Veld | Waarde | Bron |
|------|--------|------|
| Naam | Merijn van der Meer | RvIG |
| Leeftijd | 67 jaar | RvIG |
| Geboortedatum | 1958-03-01 | RvIG |
| AOW-leeftijd | 68 | SVB |
| AOW-percentage | 100% | SVB |
| Huishoudgrootte | 3 (alleenstaand + 2 kinderen) | RvIG |
| Partner | Nee | RvIG |
| Pensioenvermogen PFZW | €60.000 | PFZW |
| Verwacht maandpensioen PFZW | €3.000/maand | PFZW |
| Pensioenvermogen ABP | €60.000 | ABP |
| Verwacht maandpensioen ABP | €300/maand | ABP |
| Spaargeld | €5.000 | Belastingdienst |
| Bedrijfsinkomen (ZZP) | €6.000/jaar | Belastingdienst |
| Ontvangt kinderbijslag | Ja (2 kinderen) | SVB |

**Let op**: Alle bedragen in YAML zijn in **centen** (delen door 100 voor euro's).

### Profielen beschikbaar voor MVP
- **38 profielen** met verschillende situaties
- Relevante voor bedrag ineens: Merijn (67jr), Linda (64jr), profielen met AOW-gegevens
- Variatie in: inkomen, pensioenvermogen, huishoudsamenstelling, toeslagen-situatie

---

## 2. Input: Wat kan de burger invoeren?

### Verplichte input (uit profiel of handmatig)

| Veld | Type | Beschrijving |
|------|------|--------------|
| `aanvullend_pensioen_per_maand` | €/maand | Verwacht maandelijks pensioen |
| `pensioenvermogen` | € | Totaal opgebouwd pensioenvermogen |
| `percentage_bedrag_ineens` | 0-10% | Hoeveel wil je ineens opnemen |
| `aow_percentage` | 0-100% | Percentage AOW opbouw (meestal 100%) |
| `heeft_partner` | ja/nee | Voor toeslagenberekening |
| `huursituatie` | huur/koop | Bepaalt huurtoeslag eligibility |
| `huur_per_maand` | €/maand | Alleen bij huurwoning |

### Optionele input (voor precisere berekening)

| Veld | Type | Default |
|------|------|---------|
| `partner_inkomen` | €/jaar | €0 |
| `overig_inkomen` | €/jaar | €0 |
| `kinderen_leeftijden` | array | [] |
| `spaargeld` | € | €0 (box 3) |
| `levensverwachting_jaren` | int | CBS gemiddelde (20.5 jaar bij 65) |

---

## 3. Output: Wat kunnen we voorspellen/berekenen?

### Scenario Vergelijking (0% vs 5% vs 10%)

Per scenario berekenen we:

```
┌─────────────────────────────────────────────────────────────────────┐
│ INKOMEN & BELASTING                                                  │
├─────────────────────────────────────────────────────────────────────┤
│ • Bruto-inkomen jaar van opname                                     │
│ • Bruto bedrag ineens                                               │
│ • Totaal bruto (AOW + pensioen + bedrag ineens)                    │
│ • Inkomensafhankelijke bijdrage Zvw (~5.3%)                        │
│ • Belasting na heffingskortingen                                    │
│ • Netto-inkomen jaar van opname                                     │
│ • Netto-inkomen jaren daarna (permanent lager!)                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ TOESLAGEN IMPACT (KRITIEK!)                                         │
├─────────────────────────────────────────────────────────────────────┤
│ • Zorgtoeslag: €X → €Y (verschil: €Z)                              │
│ • Huurtoeslag: €X → €Y (verschil: €Z)                              │
│ • Kindgebonden budget: €X → €Y                                     │
│ • TOTAAL toeslagenverlies jaar van opname                          │
│ • ⚠️ Terugvorderingsrisico (ja/nee + bedrag)                        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ NETTO EFFECT                                                        │
├─────────────────────────────────────────────────────────────────────┤
│ • Bruto bedrag ineens                                               │
│ • Min: extra belasting                                              │
│ • Min: verloren toeslagen                                           │
│ • = Werkelijk netto voordeel jaar 1                                │
│ • Permanent pensioenverlies per jaar                                │
│ • Break-even punt (na X jaar is voordeel weg)                       │
└─────────────────────────────────────────────────────────────────────┘
```

### Concrete Waarschuwingen

Op basis van doc/06_Gevolgen en doc/07_EK_Nota:

| Trigger | Waarschuwing |
|---------|--------------|
| Toetsingsinkomen > zorgtoeslag drempel | ⚠️ Zorgtoeslag vervalt volledig |
| Toetsingsinkomen > huurtoeslag drempel | ⚠️ Huurtoeslag vervalt volledig |
| Verlies toeslagen > netto voordeel | 🚨 **ONGUNSTIG**: Je verliest meer aan toeslagen dan je netto overhoudt |
| 5% vs 10% behoud toeslagen | 💡 Overweeg 5% - je behoudt €X aan toeslagen |
| Pensioen < €600/maand + toeslagen | 🚨 **HOOGSTE RISICO**: Toeslagenverlies kan €4.200+ zijn |

---

## 4. Effecten volgens de documentatie

### Uit doc/07_EK_Nota_Rekenvoorbeelden.md

| Pensioen/maand | Opname | Bruto ineens | Netto voordeel | Toeslagenverlies | Permanent -/jaar |
|---------------:|-------:|-------------:|---------------:|-----------------:|-----------------:|
| €600 | 10% | €13.300 | €4.700 | €4.200 | €700 |
| €600 | 5% | €6.700 | €1.500 | €3.100 | €400 |
| €1.200 | 10% | €26.700 | €11.600 | €800 | €1.400 |
| €1.200 | 5% | €13.300 | €6.500 | €800 | €700 |
| €2.100 | 10% | €46.700 | €21.600 | €0 | €2.500 |
| €2.100 | 5% | €23.300 | €10.000 | €0 | €1.300 |

### Risico Matrix

```
                    Toeslagen ontvanger?
                    JA                      NEE
                    ─────────────────────────────────
Laag pensioen      │ 🚨 HOOGSTE RISICO    │ ⚠️ MATIG   │
(< €800/mnd)       │ Toeslagenverlies >   │ Belasting │
                   │ netto voordeel       │ effect    │
                   ├─────────────────────┼───────────┤
Midden pensioen    │ ⚠️ RISICO           │ ✅ MATIG   │
(€800-€1500/mnd)   │ Deels toeslagen-    │ Zuiver    │
                   │ verlies             │ belasting │
                   ├─────────────────────┼───────────┤
Hoger pensioen     │ ✅ GEEN IMPACT       │ ✅ OK      │
(> €1500/mnd)      │ Geen toeslagen      │ Alleen    │
                   │ om te verliezen     │ belasting │
                    ─────────────────────────────────
```

---

## 5. MVP User Interface Design

### Scherm 1: Profiel Selectie / Input

```
┌──────────────────────────────────────────────────────────────────────┐
│  🏠 Bedrag Ineens Calculator                                         │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ▼ Kies een voorbeeldprofiel                                        │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ ○ Merijn (67, alleenstaand, €3.000 pensioen, 2 kinderen)       │ │
│  │ ○ Linda (64, gehuwd, €790 pensioen)                            │ │
│  │ ○ Eigen gegevens invoeren                                      │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ── Jouw situatie ──────────────────────────────────────────────    │
│                                                                      │
│  Aanvullend pensioen     [€ _______ /maand]                         │
│  Pensioenvermogen        [€ _______      ]                          │
│  AOW opbouw              [100%  ▼]                                  │
│                                                                      │
│  Partner?                ○ Ja  ● Nee                                │
│  Woonsituatie            ○ Huur  ○ Koop                             │
│  Huur per maand          [€ 576  ]  (gemiddeld)                     │
│                                                                      │
│  ── Hoeveel wil je opnemen? ─────────────────────────────────────   │
│                                                                      │
│  [────────●──────] 10%                                              │
│   0%     5%      10%                                                │
│                                                                      │
│  💡 Bruto bedrag ineens: €13.300                                    │
│                                                                      │
│                                [Bereken effecten →]                 │
└──────────────────────────────────────────────────────────────────────┘
```

### Scherm 2: Resultaten (Scenario Vergelijking)

```
┌──────────────────────────────────────────────────────────────────────┐
│  📊 Jouw Resultaten                                    [← Terug]    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ⚠️ LET OP: Bij jouw situatie kan bedrag ineens ONGUNSTIG zijn!    │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ Samenvatting bij 10% opname                                    │ │
│  ├────────────────────────────────────────────────────────────────┤ │
│  │                                                                │ │
│  │  Bruto bedrag ineens         €13.300                          │ │
│  │  Extra belasting             -€3.100                          │ │
│  │  Verlies zorgtoeslag         -€1.500   ← vervalt volledig!    │ │
│  │  Verlies huurtoeslag         -€2.700   ← vervalt volledig!    │ │
│  │  ─────────────────────────────────────                        │ │
│  │  Netto voordeel jaar 1       €6.000                           │ │
│  │                                                                │ │
│  │  Permanent minder pensioen   -€700/jaar                       │ │
│  │  Break-even na               8.5 jaar                         │ │
│  │                                                                │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ── Vergelijking 0% vs 5% vs 10% ────────────────────────────────   │
│                                                                      │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐         │
│  │             │    0%       │    5%       │   10%       │         │
│  ├─────────────┼─────────────┼─────────────┼─────────────┤         │
│  │ Opname      │    €0       │  €6.700     │ €13.300     │         │
│  │ Belasting+  │    €0       │  €1.400     │  €3.100     │         │
│  │ Zorgtoeslag │ €1.500      │   €600  ⚠️  │    €0  🚨   │         │
│  │ Huurtoeslag │ €2.700      │   €500  ⚠️  │    €0  🚨   │         │
│  │ ─────────── │ ─────────── │ ─────────── │ ─────────── │         │
│  │ Netto +/-   │    €0       │ +€1.500     │ +€4.700     │         │
│  │ Toeslagen-  │    €0       │ -€3.100     │ -€4.200     │         │
│  │ ═══════════ │ ═══════════ │ ═══════════ │ ═══════════ │         │
│  │ Werkelijk   │    €0       │ -€1.600  🚨 │  +€500      │         │
│  └─────────────┴─────────────┴─────────────┴─────────────┘         │
│                                                                      │
│  💡 ADVIES: Bij jouw inkomen is 10% gunstiger dan 5%,              │
│     maar bedenk dat je €700/jaar minder pensioen krijgt.           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Scherm 3: Uitleg (Explainability met Wetgevingsreferenties)

```
┌──────────────────────────────────────────────────────────────────────┐
│  📖 Waarom dit resultaat?                              [← Terug]    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ▼ Stap 1: Berekening bruto bedrag ineens                          │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ Pensioenvermogen: €133.000                                     │ │
│  │ Percentage opname: 10%                                         │ │
│  │ Bruto bedrag ineens: €133.000 × 10% = €13.300                 │ │
│  │                                                                │ │
│  │ 📜 REGEL: Pensioenwet art. 69a                                │ │
│  │    "Max 10% van pensioenwaarde als eenmalige uitkering"       │ │
│  │    ↳ wetten.overheid.nl/BWBR0020809#Artikel69a                │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ▼ Stap 2: Effect op belasting                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ Totaal bruto jaar 1:           €39.380                         │ │
│  │ Belasting (17,92% AOW-tarief): €7.057                         │ │
│  │ Min heffingskortingen:         -€3.500                        │ │
│  │ Netto belasting:               €3.557                         │ │
│  │                                                                │ │
│  │ 📜 REGELS TOEGEPAST:                                          │ │
│  │ • Wet IB 2001 art. 2.10 - Box 1 tarief AOW-gerechtigden      │ │
│  │   "Eerste €38.441 belast tegen 17,92%"                        │ │
│  │ • Wet IB 2001 art. 8.10 - Algemene heffingskorting           │ │
│  │   "Max €1.536, afbouwend vanaf €28.406"                       │ │
│  │ • Wet IB 2001 art. 8.17 - Ouderenkorting                     │ │
│  │   "Max €2.035, afbouwend vanaf €45.308"                       │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ▼ Stap 3: Impact op toeslagen                                     │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ Toetsingsinkomen: €39.380                                      │ │
│  │                                                                │ │
│  │ ZORGTOESLAG:                                                   │ │
│  │ Grens alleenstaande: €39.719 (2025)                           │ │
│  │ Je inkomen (€39.380) < grens → zorgtoeslag mogelijk           │ │
│  │ Maar: bedrag sterk verlaagd door afbouw                       │ │
│  │                                                                │ │
│  │ 📜 REGELS TOEGEPAST:                                          │ │
│  │ • AWIR art. 7 & 8 - Toetsingsinkomen                         │ │
│  │   "Bedrag ineens telt mee voor draagkracht"                   │ │
│  │ • Wet zorgtoeslag art. 1 lid 2                               │ │
│  │   "Hoogte afhankelijk van toetsingsinkomen"                   │ │
│  │                                                                │ │
│  │ ⚠️ BELANGRIJK: Er is GEEN uitzonderingsregel voor bedrag     │ │
│  │    ineens bij zorgtoeslag (CDA-amendement verworpen)          │ │
│  │                                                                │ │
│  │ HUURTOESLAG:                                                   │ │
│  │ Eigen bijdrage stijgt → huurtoeslag daalt                     │ │
│  │                                                                │ │
│  │ 📜 REGEL: Wet huurtoeslag art. 10                             │ │
│  │   ⚠️ Uitzonderingsmogelijkheid: Je kunt verzoeken             │ │
│  │   bedrag ineens NIET mee te tellen voor huurtoeslag           │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  ▼ Stap 4: Permanent effect                                        │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ Door 10% opname is je maandpensioen permanent 10% lager:      │ │
│  │                                                                │ │
│  │ Was: €600/maand = €7.200/jaar                                 │ │
│  │ Nu:  €540/maand = €6.480/jaar                                 │ │
│  │ Verschil: €720/jaar × levensverwachting                       │ │
│  │                                                                │ │
│  │ 📜 REGEL: Pensioenwet art. 69a lid 3                          │ │
│  │   "Resterende pensioen wordt proportioneel verlaagd"          │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│  📚 Alle toegepaste wetgeving:                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │ • Pensioenwet art. 69a          → Bedrag ineens berekening    │ │
│  │ • Wetsvoorstel 36154           → Herziening bedrag ineens     │ │
│  │ • Wet IB 2001 art. 2.10        → Box 1 belastingtarief       │ │
│  │ • Wet IB 2001 art. 8.10, 8.17  → Heffingskortingen           │ │
│  │ • AWIR art. 7 en 8             → Toetsingsinkomen            │ │
│  │ • Wet zorgtoeslag art. 1       → Zorgtoeslag berekening      │ │
│  │ • Wet huurtoeslag art. 1, 7, 10 → Huurtoeslag berekening     │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 6. Technische Architectuur MVP

### Design Principes

1. **Rules as Code LOS van UI** - Alle berekeningen in standalone TypeScript modules
2. **Explainability built-in** - Elke berekening retourneert ook uitleg-stappen
3. **Parameter-driven** - Alle tarieven/grenzen in JSON config (makkelijk update naar 2026)

### Stack

```
Frontend:        React + TypeScript (Vite)
                 Shadcn/ui of Tailwind voor componenten

Rules Engine:    Pure TypeScript (geen framework dependency!)
                 /packages/rules-engine/
                 - Kan onafhankelijk van UI gebruikt worden
                 - Volledig testbaar met unit tests

Data:            JSON/YAML profielen (uit starter repo)
                 JSON parameters (2025 tarieven)
                 Geen backend nodig voor MVP
```

### Project Structuur

```
/
├── packages/
│   └── rules-engine/              # STANDALONE - geen UI dependency
│       ├── src/
│       │   ├── index.ts           # Public API export
│       │   ├── calculator.ts      # Hoofdberekening
│       │   ├── rules/
│       │   │   ├── belasting.ts   # IB Box 1 + heffingskortingen
│       │   │   ├── zorgtoeslag.ts # Zorgtoeslag berekening
│       │   │   ├── huurtoeslag.ts # Huurtoeslag berekening
│       │   │   ├── kgb.ts         # Kindgebonden budget
│       │   │   └── aow.ts         # AOW bedragen
│       │   ├── types/
│       │   │   ├── input.ts       # ScenarioInput interface
│       │   │   ├── output.ts      # ScenarioResult + Explanation
│       │   │   └── parameters.ts  # TaxParameters 2025
│       │   └── data/
│       │       └── parameters-2025.json
│       ├── tests/
│       │   └── ek-nota-validation.test.ts  # Test tegen EK tabellen
│       └── package.json
│
├── apps/
│   └── web/                       # React frontend
│       ├── src/
│       │   ├── App.tsx
│       │   ├── components/
│       │   │   ├── ProfileSelector.tsx
│       │   │   ├── InputForm.tsx
│       │   │   ├── WatAlsSlider.tsx       # Wat-als interactie
│       │   │   ├── ScenarioComparison.tsx # 0%/5%/10% tabel
│       │   │   ├── ExplanationPanel.tsx   # Stap-voor-stap uitleg
│       │   │   ├── SensitivityChart.tsx   # Gevoeligheidsanalyse
│       │   │   └── WarningBanner.tsx
│       │   ├── hooks/
│       │   │   └── useScenario.ts         # Hook voor rules-engine
│       │   └── data/
│       │       └── profiles.json          # Geconverteerde YAML
│       └── package.json
│
└── package.json                   # Monorepo root (pnpm workspace)
```

### Wetgevingsreferenties (Explainability)

Elke berekening wordt gekoppeld aan de onderliggende wetgeving:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ REGEL → IMPACT MAPPING                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─────────────────────┐     ┌───────────────────────────────────────────┐  │
│ │ Pensioenwet         │     │ IMPACT                                    │  │
│ │ art. 69a            │ ──► │ Max 10% van pensioenwaarde als bedrag    │  │
│ │ "bedrag ineens"     │     │ ineens opneembaar                         │  │
│ └─────────────────────┘     └───────────────────────────────────────────┘  │
│                                                                             │
│ ┌─────────────────────┐     ┌───────────────────────────────────────────┐  │
│ │ Wet IB 2001         │     │ IMPACT                                    │  │
│ │ art. 2.10 box 1     │ ──► │ Bedrag ineens = box 1 inkomen            │  │
│ │ "belastbaar inkomen"│     │ Progressief tarief 17,92-49,5%           │  │
│ └─────────────────────┘     └───────────────────────────────────────────┘  │
│                                                                             │
│ ┌─────────────────────┐     ┌───────────────────────────────────────────┐  │
│ │ AWIR art. 7 & 8     │     │ IMPACT                                    │  │
│ │ "toetsingsinkomen"  │ ──► │ Bedrag ineens telt mee voor toeslagen    │  │
│ │                     │     │ (verhoogt toetsingsinkomen)               │  │
│ └─────────────────────┘     └───────────────────────────────────────────┘  │
│                                                                             │
│ ┌─────────────────────┐     ┌───────────────────────────────────────────┐  │
│ │ Wet zorgtoeslag     │     │ IMPACT                                    │  │
│ │ art. 1 lid 2        │ ──► │ Zorgtoeslag afhankelijk van draagkracht  │  │
│ │ "draagkracht"       │     │ Vervalt bij inkomen > €39.719            │  │
│ └─────────────────────┘     └───────────────────────────────────────────┘  │
│                                                                             │
│ ┌─────────────────────┐     ┌───────────────────────────────────────────┐  │
│ │ Wet huurtoeslag     │     │ IMPACT                                    │  │
│ │ art. 1, 7, 10       │ ──► │ Huurtoeslag daalt bij hoger inkomen      │  │
│ │ "eigen bijdrage"    │     │ ⚠️ Uitzondering mogelijk (art. 10)        │  │
│ └─────────────────────┘     └───────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Wetgeving Referentie Database

```typescript
// packages/rules-engine/src/data/legislation.ts

const LEGISLATION = {
  bedragIneens: {
    artikel: "Pensioenwet art. 69a",
    titel: "Afkoop deel aanspraak ouderdomspensioen",
    url: "https://wetten.overheid.nl/BWBR0020809/2024-07-01#Paragraaf10_Artikel69a",
    samenvatting: "Max 10% van pensioenwaarde als eenmalige uitkering"
  },
  wetsvoorstel36154: {
    artikel: "Wetsvoorstel 36154",
    titel: "Wet herziening bedrag ineens",
    url: "https://www.eerstekamer.nl/wetsvoorstel/36154_wet_herziening_bedrag_ineens",
    samenvatting: "Herziene regels voor bedrag ineens (inwerkingtreding 1 juli 2026)"
  },
  belastingBox1: {
    artikel: "Wet IB 2001 art. 2.10",
    titel: "Belastbaar inkomen uit werk en woning",
    url: "https://wetten.overheid.nl/BWBR0011353/2025-01-01#Hoofdstuk2_Afdeling2.4",
    samenvatting: "Progressief tarief: 17,92% (AOW) / 35,82% - 49,5%"
  },
  heffingskorting: {
    artikel: "Wet IB 2001 art. 8.10",
    titel: "Algemene heffingskorting",
    url: "https://wetten.overheid.nl/BWBR0011353/2025-01-01#Hoofdstuk8_Afdeling8.1",
    samenvatting: "Korting op belasting, afbouwend vanaf €28.406"
  },
  ouderenkorting: {
    artikel: "Wet IB 2001 art. 8.17",
    titel: "Ouderenkorting",
    url: "https://wetten.overheid.nl/BWBR0011353/2025-01-01#Hoofdstuk8_Afdeling8.3",
    samenvatting: "Extra korting AOW-gerechtigden, max €2.035"
  },
  toetsingsinkomen: {
    artikel: "AWIR art. 7 en 8",
    titel: "Draagkracht en toetsingsinkomen",
    url: "https://wetten.overheid.nl/BWBR0018472/2025-01-01#Paragraaf2",
    samenvatting: "Toetsingsinkomen = verzamelinkomen voor toeslagen"
  },
  zorgtoeslag: {
    artikel: "Wet zorgtoeslag art. 1 lid 2",
    titel: "Tegemoetkoming zorgverzekering",
    url: "https://wetten.overheid.nl/BWBR0018451/2025-01-01",
    samenvatting: "Hoogte afhankelijk van draagkracht (toetsingsinkomen)"
  },
  huurtoeslag: {
    artikel: "Wet huurtoeslag art. 1, 7, 10",
    titel: "Tegemoetkoming huurkosten",
    url: "https://wetten.overheid.nl/BWBR0008659/2025-01-01",
    samenvatting: "Eigen bijdrage stijgt met inkomen, bijzondere regeling mogelijk"
  },
  kindgebondenBudget: {
    artikel: "Wet kindgebonden budget art. 2",
    titel: "Kindgebonden budget",
    url: "https://wetten.overheid.nl/BWBR0022751/2025-01-01",
    samenvatting: "Inkomensafhankelijke tegemoetkoming voor kinderen"
  }
};
```

### Rules Engine API (Explainability by Design)

```typescript
// packages/rules-engine/src/types/output.ts

interface LegislationRef {
  artikel: string;         // "Pensioenwet art. 69a"
  titel: string;           // "Afkoop deel aanspraak ouderdomspensioen"
  url: string;             // Link naar wetten.overheid.nl
  samenvatting: string;    // Korte uitleg
}

interface ExplanationStep {
  label: string;           // "Berekening bruto bedrag ineens"
  formula: string;         // "€133.000 × 10%"
  result: number;          // 13300
  unit: string;            // "euro"
  legislation: LegislationRef;  // Welke wet/regel is toegepast
  impact: string;          // "Dit verhoogt je bruto inkomen in jaar 1"
  ruleApplied: string;     // "Pensioenwet art. 69a: max 10% opname"
}

interface RuleImpactChain {
  rule: LegislationRef;
  input: Record<string, number>;   // { pensioenvermogen: 133000, percentage: 10 }
  calculation: string;             // "133000 × 0.10"
  output: Record<string, number>;  // { bedragIneens: 13300 }
  impact: string;                  // "Verhoogt bruto inkomen met €13.300"
  leadsTo: string[];               // ["belastingBerekening", "toetsingsinkomenBerekening"]
}

interface Warning {
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  explanation: string;     // Waarom deze waarschuwing?
}

interface ScenarioResult {
  // Hoofdresultaten
  brutoIneens: number;
  nettoVoordeelJaar1: number;
  toeslagenVerlies: number;
  permanentVerliesPerJaar: number;
  breakEvenJaren: number | null;

  // Gedetailleerde breakdown
  breakdown: {
    aow: { bruto: number; steps: ExplanationStep[] };
    pensioen: { bruto: number; resterend: number; steps: ExplanationStep[] };
    belasting: { bedrag: number; steps: ExplanationStep[] };
    heffingskortingen: { bedrag: number; steps: ExplanationStep[] };
    zvw: { bedrag: number; steps: ExplanationStep[] };
    zorgtoeslag: { voor: number; na: number; steps: ExplanationStep[] };
    huurtoeslag: { voor: number; na: number; steps: ExplanationStep[] };
    kgb: { voor: number; na: number; steps: ExplanationStep[] };
  };

  // Waarschuwingen
  warnings: Warning[];

  // Onzekerheden en aannames
  assumptions: string[];   // ["AOW-leeftijd blijft 67", "Tarieven 2025", etc.]
  uncertainties: string[]; // ["Huurtoeslag exact bedrag afhankelijk van situatie"]
}

// Hoofdfunctie
function berekenScenario(input: ScenarioInput): ScenarioResult;

// Vergelijking helper
function vergelijkScenarios(
  input: ScenarioInput,
  percentages: number[]  // [0, 5, 10]
): ScenarioResult[];
```

### Rule Chain: Welke Regels Leiden tot Welke Impact

De rules engine modelleert de **causale keten** van regels:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ RULE CHAIN: Van Keuze naar Impact                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   GEBRUIKER KEUZE                                                          │
│         │                                                                   │
│         ▼                                                                   │
│   ┌─────────────────────────────────────────┐                              │
│   │ REGEL 1: Pensioenwet art. 69a           │                              │
│   │ Input:  pensioenvermogen, percentage    │                              │
│   │ Output: bedragIneens, resterendPensioen │                              │
│   └─────────────────────────────────────────┘                              │
│         │                                                                   │
│         ├──────────────────────┬──────────────────────┐                    │
│         ▼                      ▼                      ▼                    │
│   ┌───────────────┐     ┌───────────────┐     ┌───────────────┐           │
│   │ REGEL 2a:     │     │ REGEL 2b:     │     │ REGEL 2c:     │           │
│   │ Wet IB 2001   │     │ AWIR art 7&8  │     │ Pensioenwet   │           │
│   │ Box 1 tarief  │     │ Toetsings-    │     │ Permanent     │           │
│   │               │     │ inkomen       │     │ verlies       │           │
│   └───────────────┘     └───────────────┘     └───────────────┘           │
│         │                      │                                           │
│         ▼                      ├──────────────────────┐                    │
│   ┌───────────────┐           │                      │                    │
│   │ REGEL 3:      │           ▼                      ▼                    │
│   │ Heffings-     │     ┌───────────────┐     ┌───────────────┐           │
│   │ kortingen     │     │ REGEL 4a:     │     │ REGEL 4b:     │           │
│   │ art. 8.10-17  │     │ Wet zorgtoes. │     │ Wet huurtoes. │           │
│   └───────────────┘     │ art. 1 lid 2  │     │ art. 7        │           │
│         │               └───────────────┘     └───────────────┘           │
│         ▼                      │                      │                    │
│   ┌───────────────┐           │                      │                    │
│   │ IMPACT 1:     │           ▼                      ▼                    │
│   │ Netto belast. │     ┌───────────────┐     ┌───────────────┐           │
│   │ (jaar 1)      │     │ IMPACT 2:     │     │ IMPACT 3:     │           │
│   └───────────────┘     │ Zorgtoeslag   │     │ Huurtoeslag   │           │
│                         │ verlies       │     │ verlies       │           │
│                         └───────────────┘     └───────────────┘           │
│                                                                             │
│                         EINDRESULTAAT                                      │
│                               │                                            │
│                               ▼                                            │
│                    ┌──────────────────────┐                                │
│                    │ Netto voordeel =     │                                │
│                    │ BedragIneens         │                                │
│                    │ - ExtraBelasting     │                                │
│                    │ - ToeslagenVerlies   │                                │
│                    │ - PermanentVerlies×N │                                │
│                    └──────────────────────┘                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

```typescript
// Voorbeeld van een rule chain trace in de output
const ruleChainExample: RuleImpactChain[] = [
  {
    rule: LEGISLATION.bedragIneens,
    input: { pensioenvermogen: 133000, percentage: 10 },
    calculation: "133000 × 0.10",
    output: { bedragIneens: 13300, resterendPensioen: 6480 },
    impact: "Je neemt €13.300 bruto op, je pensioen wordt €540/maand",
    leadsTo: ["belastingBox1", "toetsingsinkomen", "permanentVerlies"]
  },
  {
    rule: LEGISLATION.toetsingsinkomen,
    input: { aow: 19600, pensioen: 6480, bedragIneens: 13300 },
    calculation: "19600 + 6480 + 13300",
    output: { toetsingsinkomen: 39380 },
    impact: "Je toetsingsinkomen stijgt naar €39.380",
    leadsTo: ["zorgtoeslag", "huurtoeslag"]
  },
  {
    rule: LEGISLATION.zorgtoeslag,
    input: { toetsingsinkomen: 39380, grens: 39719 },
    calculation: "39380 < 39719 → recht op zorgtoeslag, maar sterk verlaagd",
    output: { zorgtoeslag: 200 },
    impact: "Zorgtoeslag daalt van €1.572 naar €200 (verlies: €1.372)",
    leadsTo: []
  }
];
```

### Wat-Als Sliders (Gevoeligheidsanalyse)

```typescript
// In de UI kunnen gebruikers sliders gebruiken om te zien:
// - "Wat als mijn pensioen €100 hoger/lager is?"
// - "Wat als mijn huur €50 hoger is?"
// - "Wat als ik 3% opneem ipv 5%?"

interface SensitivityAnalysis {
  parameter: string;       // "aanvullend_pensioen"
  baseValue: number;
  range: [number, number]; // [400, 800]
  results: Array<{
    value: number;
    nettoVoordeel: number;
    toeslagenBehouden: boolean;
  }>;
}

function analyseSensitivity(
  input: ScenarioInput,
  parameter: keyof ScenarioInput,
  range: [number, number],
  steps: number
): SensitivityAnalysis;
```

---

## 7. Kritische Files om te lezen/gebruiken

| File | Doel |
|------|------|
| `rules-as-code-pension-starter/data/Hackathon_profiles.yaml` | 38 profielen met alle data |
| `doc/07_EK_Nota_Rekenvoorbeelden.md` | 6 referentietabellen voor validatie |
| `doc/06_Gevolgen_Bedrag_Ineens_Gepensioneerden.md` | Alle effecten en regels |
| `doc/04_Nibud_Analyse.md` | Risicogroepen en waarschuwingen |

---

## 8. Actuele Parameters 2025

### Belastingtarieven Box 1 (2025)

| Schijf | AOW-gerechtigden (67+) | Jonger dan AOW |
|--------|------------------------|----------------|
| €0 - €38.441 | **17,92%** | 35,82% |
| €38.441 - €76.817 | 37,48% | 37,48% |
| > €76.817 | 49,50% | 49,50% |

*AOW-ers betalen geen AOW-premie meer (17,9%), vandaar het lagere tarief.*

### Heffingskortingen 2025

| Korting | AOW-gerechtigden | Niet-AOW |
|---------|------------------|----------|
| **Algemene heffingskorting** | max €1.536 | max €3.068 |
| Afbouw vanaf | €28.406 | €28.406 |
| Afbouw % | 3,17% | 6,337% |
| **Ouderenkorting** | max €2.035 | n.v.t. |
| Afbouw vanaf | €45.308 | - |
| Afbouw % | 15% tot €58.875 | - |
| **Alleenstaande-ouderenkorting** | €531 | n.v.t. |

### AOW Bedragen 2025 (alleenstaande)

| Periode | Bruto/maand | Vakantiegeld | Netto (met LH-korting) |
|---------|-------------|--------------|------------------------|
| Jan-Jun 2025 | €1.580,92 | €102,46 | €1.497,77 |
| Jul-Dec 2025 | €1.612,44 | €100,39 | ~€1.530 |
| **Jaarlijks bruto** | **~€19.600** | **~€1.200** | - |

### Zorgtoeslag 2025

| Parameter | Alleenstaande | Met partner |
|-----------|---------------|-------------|
| Max inkomen | **€39.719** | ~€50.000 |
| Max bedrag | €131/maand (€1.572/jaar) | €252/maand |
| Vermogensgrens | €141.896 | €179.429 |

### Huurtoeslag 2025

- **Geen harde inkomensgrens** (sinds 2020)
- Eigen bijdrage stijgt met inkomen tot uitkering €0 wordt
- Max huurprijs: €1.184,82 (liberalisatiegrens)
- ⚠️ **Bijzondere regel**: Je kunt verzoeken bedrag ineens NIET mee te tellen voor huurtoeslag

### Kindgebonden Budget 2025

| Parameter | Alleenstaande ouder | Met partner |
|-----------|---------------------|-------------|
| Max inkomen (vol bedrag) | €28.406 | €37.545 |
| 1 kind max | €5.900/jaar | €2.511/jaar |
| 2 kinderen max | €8.411/jaar | €5.022/jaar |

### Zvw Bijdrage 2025

- **Percentage**: ~5,32% van bruto inkomen
- **Maximaal**: over inkomen tot ~€71.628

### Bronnen

- [Belastingdienst - Box 1](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/boxen_en_tarieven/box_1/box_1)
- [Belastingdienst - Algemene heffingskorting](https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/algemene_heffingskorting/tabel-algemene-heffingskorting-2025)
- [SVB - AOW bedragen](https://www.svb.nl/nl/aow/bedragen-aow/aow-bedragen)
- [Dienst Toeslagen - Zorgtoeslag inkomen](https://www.belastingdienst.nl/wps/wcm/connect/nl/zorgtoeslag/content/maximaal-inkomen-voor-zorgtoeslag)
- [Dienst Toeslagen - Huurtoeslag](https://www.belastingdienst.nl/wps/wcm/connect/nl/huurtoeslag/content/maximaal-inkomen-huurtoeslag)
- [Dienst Toeslagen - Kindgebonden budget](https://www.belastingdienst.nl/wps/wcm/connect/nl/kindgebonden-budget/content/maximaal-inkomen-kindgebonden-budget)

---

## 9. Aannames & Onzekerheden (voor UI)

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

### Onzekerheden (tonen waar relevant)

| Berekening | Onzekerheid |
|------------|-------------|
| Huurtoeslag | Exact bedrag hangt af van persoonlijke situatie - gebruik proefberekening |
| Kindgebonden budget | Bedrag per kind varieert met leeftijd |
| Break-even punt | Gebaseerd op CBS levensverwachting, individueel kan afwijken |
| Belasting | Heffingskortingen kunnen wijzigen door andere inkomsten |

### Disclaimer (onderin elke pagina)

```
ℹ️ Dit is een indicatieve berekening. De daadwerkelijke effecten kunnen
afwijken door persoonlijke omstandigheden. Raadpleeg een adviseur of
de Belastingdienst/Toeslagen voor een exacte berekening.

Bronnen: Wet herziening bedrag ineens (36154), Eerste Kamer Nota,
Belastingdienst tarieven 2025, Dienst Toeslagen parameters 2025.
```

---

## 10. Verificatie

### Test met EK Nota tabellen
De MVP moet de 6 tabellen uit doc/07 kunnen reproduceren:
- Tabel 1-3: 10% opname bij €600, €1200, €2100/maand
- Tabel 4-6: 5% opname bij €600, €1200, €2100/maand

**Validatie criteria:**
- Bruto inkomen: ±€100 afwijking acceptabel
- Belasting: ±€200 afwijking acceptabel (door heffingskorting-afronding)
- Toeslagen: exact correct (ja/nee verlies)

### Testscenarios voor profielen

| Profiel | Verwacht resultaat |
|---------|-------------------|
| Merijn (€3.000 pensioen) | Geen toeslagenrisico (te hoog inkomen) |
| Linda (€790 pensioen) | Mogelijk toeslagenrisico bij 10% |
| Laag-inkomen profiel | Maximaal toeslagenrisico, waarschuwing verplicht |

### User acceptance criteria
- [ ] Burger begrijpt waarom een keuze gunstig/ongunstig is
- [ ] Waarschuwingen zijn duidelijk en niet te technisch
- [ ] Vergelijking 0%/5%/10% is in één oogopslag te begrijpen
- [ ] "Waarom dit resultaat?" uitleg is stap-voor-stap te volgen
- [ ] Aannames en onzekerheden zijn zichtbaar

---

## 11. Implementatie Volgorde

### Fase 1: Rules Engine (dag 1)
1. Setup monorepo structuur
2. Implementeer `parameters-2025.json` met alle tarieven
3. Implementeer `belasting.ts` (box 1 + heffingskortingen)
4. Implementeer `zorgtoeslag.ts` en `huurtoeslag.ts`
5. Schrijf tests tegen EK Nota tabellen

### Fase 2: Core Berekening (dag 1-2)
1. Implementeer `calculator.ts` met ExplanationSteps
2. Implementeer waarschuwingen-logica
3. Alle 6 EK Nota tabellen moeten valideren

### Fase 3: UI Basis (dag 2)
1. React app setup met Vite
2. Profielselectie + invoerformulier
3. Scenario vergelijkingstabel (0%/5%/10%)
4. Basiswarschuwingen

### Fase 4: Explainability & Polish (dag 2-3)
1. ExplanationPanel met stap-voor-stap
2. Wat-als sliders
3. Gevoeligheidsanalyse grafiek
4. Aannames/onzekerheden sectie

### Fase 5: Demo-ready (dag 3)
1. Profiel data converteren van YAML
2. Final styling
3. Edge cases testen
4. Demo script voorbereiden
