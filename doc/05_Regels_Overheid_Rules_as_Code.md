# Regels.overheid.nl: Rules as Code Project

> Bron: https://github.com/MinBZK/regels.overheid.nl

## Overzicht

Dit is een monorepo met code en assets voor **regels.overheid.nl**, een initiatief van de Nederlandse overheid voor gestandaardiseerd regelbeheer. Het project implementeert "Open Regels" - een framework om overheidsregelgeving expliciet, consistent en machineleesbaar te maken.

## Wat is het?

Het project ontstond uit de ontwikkeling van het "Virtuele Inkomensloket" in Utrecht in 2021 met Open Regels. Het doel is burgers te helpen "altijd en eenvoudig alle financiële regelingen te ontvangen waar zij recht op hebben." Het werk volgt standaarden uit de NORA-richtlijn voor regelbeheer.

## Kerndoelen

Het initiatief nastreeft vier bedrijfsdoelstellingen:

| Doel | Beschrijving |
|------|--------------|
| **Wet** | Implementatie sluit aan bij wet- en regelgeving |
| **Consistent** | Regelgeving wordt uniform toegepast via alle kanalen |
| **Uitlegbaar** | Burgers begrijpen regels, beslissingen en wettelijke intentie |
| **Wendbaar** | Organisaties kunnen snel inspelen op regelwijzigingen |

## Technische Structuur

- **Monorepo** met `pnpm` workspace en Turbo voor build orchestratie
- **Primaire taal**: TypeScript (84.1% van codebase)
- **Architectuur**: Meerdere apps in `/apps` directory
- **Licentie**: EUPL-1.2

## Belangrijke Integraties

Regels verbinden met:
- **[wetten.overheid.nl](https://wetten.overheid.nl)** - wetgevingsdatabase
- **[data.overheid.nl](https://data.overheid.nl)** - overheidsdatadefinities
- **Juriconnect standaard** voor duurzame juridische referenties

## Community & Governance

- Onderdeel van VNG-Realisatie's standaardisatieproces
- Gemeentelijke samenwerking via het GBI (Gemeentelijke Basisinkomens) programma
- 26 stars, 5 forks, 12 contributors
- 205 releases; laatste: web@3.52.0 (jan 2026)

## Documentatie

- Officiële docs: **[regels.overheid.nl/docs](http://regels.overheid.nl/docs/)**
- Roadmap: **[regels.overheid.nl/roadmap](https://regels.overheid.nl/roadmap)**

## Relevantie voor Hackathon

Dit project is een inspiratiebron voor:
1. **Regelrepresentatie** - Hoe wet- en regelgeving machineleesbaar vast te leggen
2. **Herbruikbaarheid** - Regels los van UI en implementatie
3. **Transparantie** - Uitlegbare beslissingen
4. **Standaardisatie** - Gestandaardiseerde input/output formaten

## GitHub Repository

https://github.com/MinBZK/regels.overheid.nl
