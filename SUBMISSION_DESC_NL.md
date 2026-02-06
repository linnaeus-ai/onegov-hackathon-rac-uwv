# Bedrag Ineens Calculator - UWV Team

**Demo:** https://onegov-hackathon-rac-uwv.onrender.com

## Wat we bouwden

Een werkende Rules-as-Code calculator die burgers helpt de financiële gevolgen van pensioenopname (0-10%) te begrijpen. Geen spreadsheet—echte executable regels in Nederlands.

## Kernfeatures

**✅ Uitlegbaarheid:** 21 regels in leesbaar Nederlands. Klik op impactkaarten voor regeluitleg.

**✅ Scenariovergelijking:** Realtime slider 0-10%, vergelijkingstabel huidig vs nieuw, optimalisatieknop met levensverwachting.

**✅ Gestandaardiseerde input:** Clean scheiding Persoon/Scenario/Parameters. 2024 EK Nota waarden.

**✅ Visualisatie:** 3 impactkaarten (inkomen, belasting, toeslagen), detail modals, overzichtstabel.

**✅ Robuustheid:** 10 profielen, gevalideerd tegen EK Nota tabellen.

## Bonus

- **Wat-als sliders:** Opname% + levensverwachting, realtime updates
- **Regels los van UI:** regelspraak-ts engine werkt standalone (CLI/API/embedded)
- **Waarschuwingen:** Prominente disclaimers over indicatieve berekeningen

## Techniek

- **Engine:** Eigen ANTLR4 parser voor Regelspraak v2.1.0
- **Stack:** Node.js + React + TypeScript
- **Architectuur:** Regels (.rs) → Engine → API → UI (strict gescheiden)

## Wow Factor

De regeltekst IS de code. Geen verborgen logica. Auditors lezen Nederlands, computer voert uit. Gevalideerd tegen parlementaire rekenvoorbeelden.

## Productpotentieel

Burgers: zelfbediening zonder adviseur. Overheid: auditeerbare beslislogica. Pensioenuitvoerders: inbedbare API.
