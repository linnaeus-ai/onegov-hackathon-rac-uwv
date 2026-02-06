# OneGov Hackathon - Rules as Code: Bedrag Ineens

Dit is de repository voor de OneGov DigiCampus Hackathon challenge over "Rules as Code" voor het pensioenkeuzerecht "bedrag ineens".

## Live Demo

De applicatie is live te bekijken op: [Render](https://onegov-hackathon-rac-uwv.onrender.com)

## Challenge

> Hoe kunnen we burgers (en adviseurs/uitvoerders) helpen begrijpen of het verstandig is om met bedrag ineens (0–10%) op te nemen, door wet- en regelgeving te modelleren als Rules as Code met gestandaardiseerde input én een uitlegbare visualisatie van de effecten?

**Challenge Owners:** Belastingdienst & PGGM

## Features

- **Regelspraak Engine**: Berekeningen worden uitgevoerd door de echte Regelspraak engine die `.rs` regelbestanden parseert
- **10 Profielen**: Kies uit 10 verschillende burgerprofielen met realistische pensioengegevens
- **Interactieve Slider**: Pas het opnamepercentage (0-10%) aan en zie direct de impact
- **Stap-voor-stap Uitleg**: Bekijk per onderwerp (inkomen, belasting, toeslagen) hoe de berekening tot stand komt
- **Optimale Keuze Berekening**: Bereken de beste opnamekeuze gebaseerd op levensverwachting
- **Regelspraak Referenties**: Elke berekening toont de onderliggende Regelspraak regel

## Running the Application

### Prerequisites
- Node.js 18+ installed

### Quick Start (Development)

1. **Start the backend** (Terminal 1):
```bash
cd backend
npm install
npm start
```
The backend runs on http://localhost:3001

2. **Start the frontend** (Terminal 2):
```bash
cd frontend
npm install
npm run dev
```
The frontend runs on http://localhost:5173

### Production Build

```bash
# Build frontend
cd frontend
npm install
npm run build

# Copy to backend
cp -r dist/* ../backend/public/

# Run backend (serves both API and frontend)
cd ../backend
npm start
```

## Project Structure

```
├── backend/                    # Express.js API server
│   ├── server.js               # API endpoints
│   ├── rules-engine.js         # Regelspraak engine wrapper
│   ├── profiles.yaml           # Citizen profiles data
│   ├── public/                 # Built frontend (production)
│   ├── rules/bedrag-ineens/    # Regelspraak rule files
│   │   ├── gegevens.rs         # Data definitions
│   │   └── regels.rs           # Calculation rules
│   └── regelspraak-engine/     # Compiled Regelspraak engine
├── frontend/                   # React + Vite frontend
│   └── src/app/                # React components
├── regelspraak-ts/             # Regelspraak TypeScript engine (source)
├── rules/                      # Original Regelspraak rules
│   └── bedrag-ineens/          # Bedrag ineens rules
└── doc/                        # Documentation
```

## Regelspraak Rules

De berekeningen zijn gebaseerd op Regelspraak regels in `rules/bedrag-ineens/`:

- **gegevens.rs**: Definieert objecttypes (Persoon, Scenario), parameters en feittypes
- **regels.rs**: Bevat de berekningsregels voor:
  - Pensioen en bedrag ineens
  - Bruto inkomen
  - Belasting (3 schijven)
  - Heffingskortingen (AHK, ouderenkorting, AOK)
  - Toeslagen (zorgtoeslag, huurtoeslag)
  - Netto inkomen

Voorbeeld regel:
```
Het bedrag ineens van een Scenario moet berekend worden als
het pensioenvermogen van zijn persoon
maal het opname percentage van het scenario
gedeeld door 100.
```

## Documentatie

### Challenge Brief

- [Challenge Brief (PDF)](doc/Challenge%20brief%20for%20%5BDigiCampus%20_%20Rules%20as%20Code%5D%20-%20OneGov%20%231%20%7BNL%7D.pdf)
- [Challenge Brief (Markdown)](doc/Challenge%20brief%20for%20%5BDigiCampus%20_%20Rules%20as%20Code%5D%20-%20OneGov%20%231%20%7BNL%7D.md)

### Bronnen & Research

| # | Document | Beschrijving |
|---|----------|--------------|
| 00 | [Bronnen Overzicht](doc/00_Bronnen_Overzicht.md) | Index van alle bronnen en links |
| 01 | [Rijksoverheid Bedrag Ineens](doc/01_Rijksoverheid_Bedrag_Ineens.md) | Officiële uitleg van rijksoverheid.nl |
| 02 | [Eerste Kamer Dossier 36154](doc/02_Eerste_Kamer_Dossier_36154.md) | Wetgevingsdossier met timeline en status |
| 03 | [Tweede Kamer Debat](doc/03_Tweede_Kamer_Debat_25sept2024.md) | Debatverslag met zorgen over toeslagen |
| 04 | [Nibud Analyse](doc/04_Nibud_Analyse.md) | Nibud analyse en waarschuwingen |
| 05 | [Rules as Code NL](doc/05_Regels_Overheid_Rules_as_Code.md) | regels.overheid.nl initiatief |
| 06 | [Gevolgen Gepensioneerden](doc/06_Gevolgen_Bedrag_Ineens_Gepensioneerden.md) | Overzicht alle risico's en gevolgen |
| **07** | [**Rekenvoorbeelden EK Nota**](doc/07_EK_Nota_Rekenvoorbeelden.md) | **6 tabellen met concrete effecten** |

### Eerste Kamer Nota (met rekenvoorbeelden)

- [EK Nota (PDF)](doc/EK%20Nota%20naar%20aanleiding%20van%20verslag%20Wet%20herziening%20bedrag%20ineens.pdf)
- [EK Nota Rekenvoorbeelden (Markdown)](doc/07_EK_Nota_Rekenvoorbeelden.md)

## Het Probleem

Bij opname van een "bedrag ineens" (tot 10% van het pensioen) kunnen gepensioneerden te maken krijgen met:

1. **Hogere belasting** - Door progressieve tarieven in het jaar van opname
2. **Verlies toeslagen** - Zorgtoeslag en huurtoeslag kunnen vervallen
3. **Terugvordering** - Reeds ontvangen toeslagen moeten mogelijk worden terugbetaald
4. **Permanent lager pensioen** - De maandelijkse uitkering blijft levenslang lager

## De Oplossing

Deze tool:
1. **Doorrekent scenario's** - Vergelijk verschillende opnamepercentages (0-10%)
2. **Legt impact uit** - Toont welke regels leiden tot welk effect
3. **Geeft inzicht** - Visuele weergave van de gevolgen op inkomen, belasting en toeslagen
4. **Berekent optimum** - Adviseert het beste percentage gebaseerd op levensverwachting

## Deployment (Render)

De applicatie is geconfigureerd voor deployment op Render via `render.yaml`:

```yaml
services:
  - type: web
    name: onegov-hackathon-rac-uwv
    runtime: node
    rootDir: backend
    buildCommand: npm install
    startCommand: node server.js
```

## Links

- [Rijksoverheid - Bedrag Ineens](https://www.rijksoverheid.nl/onderwerpen/pensioen/bedrag-ineens)
- [Eerste Kamer Dossier 36.154](https://www.eerstekamer.nl/wetsvoorstel/36154_wet_herziening_bedrag_ineens)
- [regels.overheid.nl](https://regels.overheid.nl)
- [GitHub MinBZK/regels.overheid.nl](https://github.com/MinBZK/regels.overheid.nl)
