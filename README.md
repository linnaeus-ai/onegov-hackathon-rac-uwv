# OneGov Hackathon - Rules as Code: Bedrag Ineens

Dit is de repository voor de OneGov DigiCampus Hackathon challenge over "Rules as Code" voor het pensioenkeuzerecht "bedrag ineens".

## Challenge

> Hoe kunnen we burgers (en adviseurs/uitvoerders) helpen begrijpen of het verstandig is om met bedrag ineens (0–10%) op te nemen, door wet- en regelgeving te modelleren als Rules as Code met gestandaardiseerde input én een uitlegbare visualisatie van de effecten?

**Challenge Owners:** Belastingdienst & PGGM

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

## Starter Repository

De [rules-as-code-pension-starter](rules-as-code-pension-starter/) submodule bevat:
- Fictieve pensioenprofielen in YAML-formaat
- Voorbeelddata voor scenario berekeningen

## Het Probleem

Bij opname van een "bedrag ineens" (tot 10% van het pensioen) kunnen gepensioneerden te maken krijgen met:

1. **Hogere belasting** - Door progressieve tarieven in het jaar van opname
2. **Verlies toeslagen** - Zorgtoeslag en huurtoeslag kunnen vervallen
3. **Terugvordering** - Reeds ontvangen toeslagen moeten mogelijk worden terugbetaald
4. **Permanent lager pensioen** - De maandelijkse uitkering blijft levenslang lager

## Te Bouwen Oplossing

Een tool die:
1. **Scenario's doorrekent** - 0%, 5%, 10% opname vergelijken
2. **Impact uitlegt** - Welke regels leiden tot welk effect
3. **Inzicht geeft** - "Dit lijkt gunstig/risicovol" + waarom

### Criteria

- Explainability by design
- Scenariovergelijking (incl. netto-effect)
- Gestandaardiseerde input
- Visualisatie (beslisboom, flow, impact breakdown)
- Robuustheid voor verschillende profielen

## Links

- [Rijksoverheid - Bedrag Ineens](https://www.rijksoverheid.nl/onderwerpen/pensioen/bedrag-ineens)
- [Eerste Kamer Dossier 36.154](https://www.eerstekamer.nl/wetsvoorstel/36154_wet_herziening_bedrag_ineens)
- [regels.overheid.nl](https://regels.overheid.nl)
- [GitHub MinBZK/regels.overheid.nl](https://github.com/MinBZK/regels.overheid.nl)
