# OneGov Hackathon Inzending: Bedrag Ineens Calculator

**Team:** UWV
**Challenge:** DigiCampus / Rules as Code
**Challenge Owners:** Belastingdienst & PGGM

**Live Demo:** https://onegov-hackathon-rac-uwv.onrender.com
**Repository:** https://github.com/[repo-url]

---

## Samenvatting

Wij hebben een **werkende Rules-as-Code implementatie** gebouwd die Nederlandse burgers helpt de complexe financiële gevolgen van de "bedrag ineens" pensioenopname te begrijpen. Onze oplossing bevat:

- Een **eigen Regelspraak parser en executie-engine** in TypeScript
- **21 uitvoerbare regels** geschreven in leesbaar Nederlands
- Een **realtime interactieve calculator** met scenariovergelijking
- **Volledige uitlegbaarheid** die toont welke regels tot welke uitkomsten leiden
- Een **optimalisatie-algoritme** gebaseerd op levensverwachting

Dit is geen mock-up of spreadsheet-simulatie—het is een volledig functionerend Rules-as-Code systeem waarbij de daadwerkelijke belasting- en toeslagberekeningen zijn uitgedrukt in de Nederlandse natuurlijke taal DSL "Regelspraak" en uitgevoerd worden door onze engine.

---

## Challenge Criteria: Hoe Wij Leveren

### 1. Uitlegbaarheid by Design

**Implementatie:** Elke berekening in ons systeem is direct herleidbaar naar een benoemde Regelspraak-regel. Gebruikers kunnen op elke impactkaart (Inkomen, Belasting, Toeslagen) klikken om een gedetailleerde uitleg te zien met:

- De **exacte regelnaam** die elke waarde berekende
- De **invoerwaarden** die in de berekening gingen
- De **tussenberekeningen** (bijv. welke belastingschijf van toepassing is)
- Het **eindresultaat** met vergelijking ten opzichte van de basissituatie

**Technische aanpak:** Onze regels zijn geschreven in leesbaar Nederlands:

```
Regel Bereken bedrag ineens
    geldig altijd
        Het bedrag ineens van een Scenario moet berekend worden als
            het pensioenvermogen van zijn persoon maal
            het opname percentage van het scenario gedeeld door 100.
```

Deze regel is **zowel de documentatie ALS de uitvoerbare code**. Er is geen verborgen logica in Java-klassen of database-procedures—de regeltekst IS de implementatie.

**Kernpunt:** Traditionele overheids-IT scheidt "documentatie van bedrijfsregels" van "code." Onze aanpak verenigt ze: verander de regeltekst, en het gedrag verandert. Auditors kunnen de daadwerkelijk uitgevoerde regels in het Nederlands lezen.

---

### 2. Scenariovergelijking (0% vs 5% vs 10%)

**Implementatie:** De UI biedt:

1. **Interactieve slider** (0-10% in stappen van 0,5%) met realtime herberekening
2. **Vergelijkingstabel met drie kolommen** die huidige vs. nieuwe situatie toont met verschillen
3. **"Geef advies" knop** die het optimale percentage berekent op basis van levensverwachting

**Weergegeven vergelijkingsmetrieken:**
- Maandelijks netto inkomen (huidig vs. permanente verlaging)
- Jaarlijkse belastingdruk (basissituatie vs. jaar van opname)
- Impact op zorgtoeslag
- Impact op huurtoeslag
- Netto ontvangen bedrag na belasting

**Optimalisatie-algoritme:**
```
Voor elk percentage (0%, 5%, 10%):
  - Bereken direct netto voordeel (bedrag ineens - extra belasting - verloren toeslagen)
  - Bereken jaarlijks doorlopend verlies (permanente pensioenverlaging)
  - Bepaal break-even punt in jaren
  - Factor in levensverwachting
  - Geef aanbeveling met uitleg
```

---

### 3. Gestandaardiseerde Input

**Datamodel:** Wij hanteren een duidelijke scheiding tussen:

**Invoergegevens (Persoon):**
```
- AOW inkomen (staatspensioen inkomen)
- aanvullend pensioen per maand
- pensioenvermogen
- is AOW gerechtigd
- is alleenstaand
```

**Berekeningsscenario (Scenario):**
```
- opname percentage (0-10)
- is jaar met opname (of dit het opnamejaar is)
```

**Parameters (geëxternaliseerd voor eenvoudige updates):**
```
- Belastingschijven en tarieven (3 progressieve schijven)
- Heffingskortingen (AHK, ouderenkorting, AOK)
- Zvw-bijdrage percentage en maximum
- Zorgtoeslag drempels en afbouw
- Huurtoeslag drempels en afbouw
```

Alle 2024-waarden zijn afkomstig uit de EK Nota (Eerste Kamer wetgevingsdocument).

---

### 4. Visualisatie

**Drie Impactkaarten:**
- **Inkomensimpact** - Toont permanente maandelijkse pensioenvermindering met trendindicator
- **Belastingimpact** - Toont extra belasting in het opnamejaar
- **Toeslagenimpact** - Toont wijzigingen in zorgtoeslag en huurtoeslag

**Detail Modals:** Door op een kaart te klikken opent een uitleg met:
- Stapsgewijze berekeningsroute
- Vergelijkingsbalken (basissituatie vs. nieuw)
- Regelreferenties

**Overzichtstabel:** Compleet overzicht met vier kolommen:
| Onderdeel | Huidige situatie | Na opname | Verschil |
|-----------|------------------|-----------|----------|

**Visuele Ontwerpprincipes:**
- Blauw (#3B82F6) voor informatieve elementen
- Rood voor negatieve impacts (verliezen, extra belasting)
- Kaartgebaseerde layout met micro-interacties
- Responsive grid voor desktop en mobiel

---

### 5. Robuustheid voor Verschillende Profielen

**Testdekking:** Ons systeem is gevalideerd tegen:
- **10 verschillende burgerprofielen** uit de hackathon dataset
- **EK Nota referentietabellen** (Tabellen 1 en 4 uit het wetgevingsdocument)
- **Randgevallen:** €0 pensioen, maximale toeslagen, geen toeslagen

**Profielvariatie:**
- Leeftijden 67+
- Alleenstaand en met partner (beïnvloedt AOK-aanspraak)
- Diverse pensioenbedragen (€200-1000/maand)
- Verschillende pensioenvermogens (€40.000-200.000)

**Foutafhandeling:**
- Graceful degradation bij ontbrekende gegevens
- Duidelijke waarschuwingsbanner: "Indicatieve berekening—er kunnen geen rechten aan worden ontleend"
- Invoervalidatie op slidergrenzen

---

## Behaalde Bonuspunten

### Wat-als Sliders en Gevoeligheidsanalyse

**Geïmplementeerd:**
1. **Opnamepercentage slider** (0-10%, stappen van 0,5%) - realtime herberekening
2. **Levensverwachting slider** (67+5 tot 67+40 jaar) - gebruikt voor optimale berekening

Gebruikers kunnen aan beide sliders slepen en direct bijgewerkte impacts zien over alle metrieken.

---

### Rules-as-Code Los van UI en Engine

**Strikte scheiding gerealiseerd:**

```
├── regelspraak-ts/         # Standalone parser + executie-engine
│   └── Kan worden gebruikt via CLI, API, of embedded
│
├── rules/bedrag-ineens/    # Pure regeldefinities
│   ├── gegevens.rs         # Datamodel (Objecttypes, Parameters)
│   └── regels.rs           # Berekeningsregels (21 regels)
│
├── backend/                # API-laag
│   └── rules-engine.js     # Dunne wrapper die regelspraak-ts aanroept
│
└── frontend/               # UI-laag
    └── Pure React, geen bedrijfslogica
```

Dezelfde regelbestanden kunnen worden:
- Uitgevoerd via CLI: `regelspraak run regels.rs --data input.json`
- Geserveerd als API: `regelspraak serve regels.rs --port 3000`
- Geëmbed in applicaties: `Engine.parseModel(source)`

---

### Duidelijke Waarschuwingen over Onzekerheid en Aannames

**Prominent weergegeven:**
- Sticky banner onderaan: "Let op: De getoonde berekeningen zijn indicatief..."
- Calculator footer: "Er kunnen geen rechten aan worden ontleend"
- Aannames gedocumenteerd in `/doc/` map

**Kernargumenten expliciet vermeld:**
- 2024 belastingparameters (specifieke waarden geciteerd)
- Vereenvoudigde huurtoeslag berekening (lineaire interpolatie)
- Focus op eenpersoonshuishouden
- AOW-gerechtigd profiel (67+)

---

## Technische Implementatie in Detail

### Regelspraak-ts Engine

Wij bouwden een **complete ANTLR4-gebaseerde parser en interpreter** voor RegelSpraak v2.1.0:

**Parser pipeline:**
```
Bron (.rs) → ANTLR Lexer/Parser → Visitor → AST →
Domain Model → Semantische Analyse → Runtime Context →
Executie Engine → Resultaten
```

**Ondersteunde taalfeatures:**
- Objecttype definities met attributen en kenmerken (boolean flags)
- Parameters (geëxternaliseerde constanten)
- Feittypes (relaties tussen objecten)
- Regel statements met voorwaarden
- Ingebouwde functies: `de minimale waarde van`, `de maximale waarde van`
- Rekenen met eenheden (€, percentages)
- Conditionele uitvoering: `indien ... is groter dan ...`

**Regel dependency resolution:**
De engine bepaalt automatisch de uitvoeringsvolgorde op basis van attribuut-afhankelijkheden. Geen handmatige ordening nodig.

---

### De 21 Regels (6 Fases)

**Fase 1 - Bedrag Ineens Basis:**
- `Bereken pensioen per jaar` - Jaarpensioen uit maandbedrag
- `Bereken bedrag ineens` - Eenmalig bedrag uit vermogen × percentage
- `Bereken resterend pensioen` - Resterend pensioen na opname
- `Bereken permanent verlies` - Permanent jaarlijks verlies

**Fase 2 - Bruto Inkomen:**
- `Initialiseer bruto inkomen` - Basisinkomen (AOW + resterend pensioen)
- `Bereken bruto inkomen jaar met opname` - Inkomen met bedrag ineens erbij

**Fase 3 - Belasting:**
- `Bereken Zvw` - Zorgverzekeringsbijdrage (5,45% tot €73.031)
- `Bereken belasting eerste/tweede/derde schijf` - Progressieve belastingschijven
- `Bereken belasting box1` - Totale Box 1 belasting

**Fase 4 - Heffingskortingen:**
- `Bereken algemene heffingskorting` - Algemene heffingskorting met afbouw
- `Bereken ouderenkorting` - Ouderenkorting met afbouw
- `Bereken alleenstaande ouderenkorting` - Alleenstaande ouderenkorting
- `Bereken belasting na heffingskortingen` - Belasting na kortingen

**Fase 5 - Toeslagen:**
- `Bereken zorgtoeslag` - Zorgtoeslag met inkomensdrempel
- `Bereken huurtoeslag` - Huurtoeslag met lineaire interpolatie

**Fase 6 - Netto Inkomen:**
- `Bereken netto inkomen` - Netto inkomen na belasting
- `Bereken besteedbaar inkomen` - Besteedbaar inkomen met toeslagen

---

### Validatie Tegen EK Nota

Onze berekeningen komen overeen met de officiële wetgevingsvoorbeelden:

**Tabel 1 (10% opname, €600/maand pensioen):**
| Metriek | EK Nota | Onze Berekening |
|---------|---------|-----------------|
| Bedrag ineens | €13.354 | €13.354 |
| Extra belasting | ~€5.200 | €5.180 |

**Tabel 4 (5% opname, lager inkomen met toeslagen):**
| Metriek | EK Nota | Onze Berekening |
|---------|---------|-----------------|
| Zorgtoeslag verlies | -€1.800 | -€1.800 |
| Netto impact | Negatief | Waarschuwt correct |

---

## Productpotentieel

### Voor Burgers (Gepensioneerden)
- **Zelfbedieningstool** om een complexe beslissing te begrijpen
- **Geen financieel adviseur nodig** voor basis scenario-verkenning
- **Vertrouwen** in het maken van een geïnformeerde keuze

### Voor Overheid (Belastingdienst, SVB)
- **Transparante beslislogica** auditeerbaar door beleidsmakers
- **Versiebeheerde regels** die wetswijzigingen volgen
- **Single source of truth** tussen beleid en uitvoering

### Voor Pensioenuitvoerders (PGGM, PFZW, ABP)
- **Inbedbare calculator** voor ledenportalen
- **Gestandaardiseerde API** voor integratie
- **Conform** Rules-as-Code best practices

### Schaalbaarheidspad
1. **Hoog-laag pensioen** optie toevoegen
2. **Partnerinkomen meenemen** voor huishoudberekeningen
3. **Koppelen aan Mijn Pensioenoverzicht** voor echte data
4. **Meerjarenprojectie** met inflatiecorrecties
5. **AI-ondersteunde uitleg** voor gepersonaliseerde begeleiding

---

## Meegeleverde Documentatie

| Document | Doel |
|----------|------|
| `doc/00_Bronnen_Overzicht.md` | Index van alle bronnen |
| `doc/01-06_*.md` | Onderzoek naar wetgeving en impacts |
| `doc/07_EK_Nota_Rekenvoorbeelden.md` | Referentieberekeningen uit parlement |
| `rules/bedrag-ineens/gegevens.rs` | Datamodel definitie |
| `rules/bedrag-ineens/regels.rs` | Alle 21 berekeningsregels |
| `README.md` | Setup en draai-instructies |

---

## Wow Factor

### 1. We Bouwden een Echte Rules Engine
Geen spreadsheet. Geen hardcoded berekeningen. Een **volledige parser-interpreter** voor Nederlandse wetgevingstaal die herbruikbaar is voor andere regelgeving.

### 2. Regels ZIJN Documentatie
De regeltekst `"Het bedrag ineens van een Scenario moet berekend worden als het pensioenvermogen maal het opname percentage"` is **tegelijkertijd**:
- Menselijk leesbare documentatie
- Machine-uitvoerbare code
- Auditspoor voor compliance

### 3. Scheiding Die Ertoe Doet
Verander een regel → gedrag verandert. Verander een parameter → resultaten updaten. Geen hercompilatie, geen verborgen logica.

### 4. Gevalideerd Tegen Parlement
Onze berekeningen komen overeen met de EK Nota voorbeelden—we verzinnen geen getallen, we implementeren officiële methodologie.

### 5. Productie-klaar
Gedeployed op Render, werkt op mobiel, handelt randgevallen netjes af. Dit is geen hackathon-wegwerpproduct—het is een fundament voor echte civic tech.

---

## Conclusie

We benaderden deze challenge met de overtuiging dat **Rules-as-Code niet alleen een technisch patroon is maar een governance-innovatie**. Wanneer burgers de regels kunnen lezen die hun uitkomsten bepalen, en wanneer die regels de daadwerkelijk uitgevoerde code zijn, creëren we een nieuw niveau van transparantie en vertrouwen.

Onze bedrag ineens calculator demonstreert:
1. **Het is mogelijk** om complexe belasting/toeslagenlogica uit te drukken in natuurlijk Nederlands
2. **Het is praktisch** om daarbovenop een realtime interactieve tool te bouwen
3. **Het is waardevol** voor burgers die voor een ingrijpende financiële beslissing staan

We hopen dat deze bijdrage de Rules-as-Code reis van de Nederlandse overheid vooruit helpt en een sjabloon biedt voor toekomstige implementaties.

---

## Snelle Referentie: Beoordelingscriteria Checklist

| Criterium | Status | Bewijs |
|-----------|--------|--------|
| **Concept (40%)** | | |
| Duidelijk probleembegrip | ✅ | Behandelt alle 5 burgeruitdagingen uit brief |
| Innovatieve aanpak | ✅ | Volledige Rules-as-Code implementatie |
| Beantwoordt echte behoefte | ✅ | 6 EK Nota risicoscenario's gedekt |
| **Prototype (20%)** | | |
| Werkende demo | ✅ | Live op render.com |
| Meerdere profielen | ✅ | 10 profielen selecteerbaar |
| Interactieve features | ✅ | Realtime sliders, modals |
| **Technische Haalbaarheid (15%)** | | |
| Realistische tech stack | ✅ | Node.js + React + ANTLR4 |
| Schaalbare architectuur | ✅ | Gescheiden regels/engine/UI |
| Herbruikbare componenten | ✅ | Engine werkt standalone |
| **Productpotentieel (15%)** | | |
| Duidelijke use cases | ✅ | Burgers, overheid, pensioenuitvoerders |
| Groeipad | ✅ | Gedocumenteerde uitbreidingsmogelijkheden |
| Integratie-klaar | ✅ | API endpoints gedefinieerd |
| **Wow Factor (10%)** | | |
| Onverwachte diepgang | ✅ | Parser from scratch gebouwd |
| Elegante oplossing | ✅ | Regels = docs = code |
| Memorabele demo | ✅ | Toont echte impact in euro's |

**Challenge-Specifieke Criteria:**

| Criterium | Status | Bewijs |
|-----------|--------|--------|
| Uitlegbaarheid by design | ✅ | Regelnamen getoond, detail modals |
| Scenariovergelijking | ✅ | 0-10% slider, optimalisatieknop |
| Gestandaardiseerde input | ✅ | Schone Persoon/Scenario/Parameters scheiding |
| Visualisatie | ✅ | Impactkaarten, tabellen, modals |
| Robuustheid | ✅ | 10 profielen, randgevallen afgehandeld |
| **Bonus:** Wat-als sliders | ✅ | Twee sliders met realtime updates |
| **Bonus:** Regels los van UI | ✅ | regelspraak-ts is standalone |
| **Bonus:** Onzekerheidswaarschuwingen | ✅ | Prominente disclaimers overal |