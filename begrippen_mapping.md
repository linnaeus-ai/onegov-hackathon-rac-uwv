# Begrippen Mapping: NORA/MIM ↔ Regels ↔ Wetgeving ↔ Regelspraak

Dit document biedt een **Rosetta Stone** voor het vertalen tussen:
- **NORA/MIM**: Gestandaardiseerde informatiemodel-termen
- **Rules JSON**: Termen in `bedrag_ineens_rules.json`
- **Wetgeving**: Officiële wettelijke terminologie
- **Regelspraak**: Gegevensspraak objecttype-namen
- **Groep**: Ontologische classificatie (zie legenda)

---

## Groepen Legenda

| Groep | Kleur | Naam | Beschrijving |
|-------|-------|------|--------------|
| 🟢 1 | Groen | **Real-world entiteiten** | Fysieke of juridische entiteiten die onafhankelijk van het systeem bestaan |
| 🔵 2 | Blauw | **Juridische constructen** | Abstracte entiteiten die bestaan bij gratie van wetgeving of overeenkomsten |
| 🟡 3 | Geel | **Temporele feiten** | Gebeurtenissen en tijdstippen - wanneer dingen gebeuren |
| 🟣 4 | Paars | **Berekende informatie** | Output van regels - de KERN van Rules as Code |
| 🟤 5 | Bruin | **Parameters** | Externe feiten die jaarlijks/periodiek wijzigen |
| 🔴 6 | Rood | **Validatie-output** | Resultaat van regeltoepassing (ja/nee, classificaties) |
| ⚪ 7 | Grijs | **Meta-analyse** | Hulpmiddelen voor besluitvorming (scenario's, vergelijkingen, advies) |

---

## Kern Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|------------|----------------|-------------|-----------|
| 🟢 1 | `NatuurlijkPersoon` | `profiel` | BRP: "Ingeschreven natuurlijk persoon" | `de Persoon (bezield)` | Een mens die rechtssubject kan zijn |
| 🔵 2 | `Huishouden` | `huishouden` | AWIR: "huishouden" | `het Huishouden` | Personen die samen een woning bewonen |
| 🟢 1 | `Verblijfsobject` | `huurwoning` | BAG: "Verblijfsobject" | `de Woonsituatie` | De kleinste eenheid waaraan een adres wordt toegekend |
| 🟢 1 | `Partner` | `toeslagpartner` | AWIR art. 3: "partner" | `de Partner (bezield)` | Degene met wie men samenwoont en gezamenlijk huishouden voert |

---

## Pensioen Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|------------|----------------|-------------|-----------|
| 🟢 1 | `Pensioenuitvoerder` | - | Pensioenwet art. 1: "pensioenuitvoerder" | `de Pensioenuitvoerder` | Pensioenfonds, verzekeraar of PPI |
| 🔵 2 | `Pensioenaanspraak` | `maandelijks_aanvullend_pensioen`, `pensioenvermogen` | Pensioenwet: "pensioenaanspraak" | `de Pensioenaanspraak` | Het recht op een nog niet ingegaan pensioen |
| 🔵 2 | `Pensioenverevening` | `bijzondere_situaties.scheiding_verevening` | WVPS: "verevening" | `de Pensioenverevening` | Verdeling van pensioenrechten bij scheiding |

---

## Bedrag Ineens Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|------------|----------------|-------------|-----------|
| 🔵 2 | `BedragIneensKeuze` | `bedrag_ineens_percentage` | Pensioenwet art. 69a: "bedrag ineens" | `de BedragIneensKeuze` | Keuze om max 10% van pensioenwaarde als eenmalig bedrag op te nemen |
| 🔵 2 | `UitgesteldeBetaling` | `geschiktheid.uitgestelde_betaling` | Wet herziening bedrag ineens: "uitgestelde uitbetaling" | `de UitgesteldeBetaling` | Optie om betaling uit te stellen naar januari volgend op AOW-jaar |
| 🔴 6 | `Geschiktheidsbeoordeling` | `geschiktheid.bedrag_ineens.voorwaarden` | Pensioenwet art. 69a lid 2 | `de Geschiktheidsbeoordeling` | Toets of aan alle voorwaarden is voldaan |
| 🟣 4 | `BedragIneensResultaat` | `berekeningen.bedrag_ineens_hoogte` | Pensioenwet art. 69a | `het BedragIneensResultaat` | Berekend bruto bedrag en pensioeneffecten |

---

## Inkomen & Belasting Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|------------|----------------|-------------|-----------|
| 🟣 4 | `Inkomensjaar` | `bruto_inkomen`, `toetsingsinkomen` | BRI: "geregistreerd inkomen", AWIR art. 8: "toetsingsinkomen" | `het Inkomensjaar` | Het (berekende) inkomen over een kalenderjaar |
| 🟣 4 | `Belastingaanslag` | `berekeningen.belasting` | Wet IB 2001: "aanslag inkomstenbelasting" | `de Belastingaanslag` | De berekende belasting over een jaar |
| 🟣 4 | `Heffingskorting` | `heffingskortingen` | Wet IB 2001 art. 8.1: "heffingskorting" | `de Heffingskorting` | Berekende korting op de verschuldigde belasting |
| 🟣 4 | `ZvwBijdrage` | `zvw_bijdrage` | Zvw art. 45 | `de ZvwBijdrage` | Berekende inkomensafhankelijke Zvw-bijdrage |

### Heffingskorting Subtypen

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak |
|-------|----------|------------|----------------|-------------|
| 🟣 4 | `AlgemeneHeffingskorting` | `algemene_heffingskorting` | Wet IB 2001 art. 8.10 | `de algemene heffingskorting` |
| 🟣 4 | `Ouderenkorting` | `ouderenkorting` | Wet IB 2001 art. 8.17 | `de ouderenkorting` |
| 🟣 4 | `AlleenstaandeOuderenkorting` | - | Wet IB 2001 art. 8.18 | `de alleenstaande ouderenkorting` |

---

## Toeslag Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|------------|----------------|-------------|-----------|
| 🟣 4 | `Toeslag` | `toeslagen` | AWIR: "tegemoetkoming" | `de Toeslag` | Berekende inkomensafhankelijke overheidsbijdrage |
| 🟣 4 | `Zorgtoeslag` | `toeslagen.zorgtoeslag` | Wet zorgtoeslag art. 1 | `de Zorgtoeslag` | Berekende tegemoetkoming zorgverzekering |
| 🟣 4 | `Huurtoeslag` | `toeslagen.huurtoeslag` | Wet huurtoeslag art. 1 | `de Huurtoeslag` | Berekende tegemoetkoming huurkosten |
| 🟣 4 | `KindgebondenBudget` | `toeslagen.kindgebonden_budget` | Wet kindgebonden budget | `het KindgebondenBudget` | Berekende bijdrage voor ouders met kinderen |
| 🟣 4 | `AIO` | `toeslagen.aio` | Participatiewet: "AIO-aanvulling" | `de AIO` | Berekende aanvullende inkomensvoorziening ouderen |
| 🟣 4 | `BijzondereNabetaling` | `huurtoeslag.bijzondere_uitzondering` | Besluit huurtoeslag art. 2b | `de BijzondereNabetaling` | Uitzondering waardoor bedrag ineens niet meetelt voor huurtoeslag |

---

## Parameter Entiteiten

| Groep | NORA/MIM | Rules JSON path | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|-----------------|----------------|-------------|-----------|
| 🟤 5 | `Parameterset` | `constanten.belastingjaar` | - | `de Parameterset` | Verzameling jaarparameters |
| 🟤 5 | `Belastingtarief` | `berekeningen.belasting.belastingschijven_*` | Wet IB 2001 art. 2.10 | `het Belastingtarief` | Progressief tarief per schijf |
| 🟤 5 | `HeffingskortingBedrag` | `berekeningen.belasting.heffingskortingen.*` | Wet IB 2001 Hfdst 8 | `het HeffingskortingBedrag` | Bedrag en afbouwgrenzen per korting |
| 🟤 5 | `ZvwTarief` | `berekeningen.belasting.inkomensafhankelijke_bijdrage_zvw` | Zvw art. 45 | `het ZvwTarief` | Bijdragepercentage en max grondslag |
| 🟤 5 | `Toeslaggrens` | `toeslagen.*.geschiktheid.inkomensgrenzen_*` | Per wet (zorgtoeslag, huurtoeslag) | `de Toeslaggrens` | Inkomensgrenzen per toeslag |
| 🟤 5 | `AOWBedrag` | - | SVB normen | `het AOWBedrag` | Bruto AOW per huishoudtype |

---

## Scenario & Advies Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|------------|----------------|-------------|-----------|
| ⚪ 7 | `Berekeningsscenario` | `scenarios` | - | `het Berekeningsscenario` | Hypothetische berekening voor specifiek opnamepercentage |
| ⚪ 7 | `Scenariovergelijking` | `scenarios` | - | `de Scenariovergelijking` | Vergelijking van 0%/5%/10% scenario's naast elkaar |
| ⚪ 7 | `Signalering` | `risicofactoren.*.risicos` | - | `de Signalering` | Waarschuwing of advies voor de gebruiker |
| 🔴 6 | `Risicoprofiel` | `risicofactoren.financieel_kwetsbare_groepen` | - | `het Risicoprofiel` | Classificatie van financiële kwetsbaarheid |

---

## Temporele Feiten (Attributen)

| Groep | Attribuut | Rules JSON | Wetgeving | Regelspraak | Op entiteit |
|-------|-----------|------------|-----------|-------------|-------------|
| 🟡 3 | `geboortedatum` | - | BRP | `de geboortedatum` | NatuurlijkPersoon |
| 🟡 3 | `pensioeningangsdatum` | - | Pensioenwet | `de pensioeningangsdatum` | Pensioenaanspraak |
| 🟡 3 | `keuzedatum` | - | Pensioenwet art. 69a | `de keuzedatum` | BedragIneensKeuze |
| 🟡 3 | `geplandeBetaaldatum` | - | Wet herziening bedrag ineens | `de geplande betaaldatum` | UitgesteldeBetaling |
| 🟡 3 | `geldigVanaf` / `geldigTot` | - | - | `geldig vanaf` / `geldig tot` | Parameterset |

---

## Attribuut Mapping

### NatuurlijkPersoon / Persoon (🟢 Groep 1)

| Groep | NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|-------|--------------------|------------|-----------|-------------|---------------|
| 🟢 1 | `burgerservicenummer` | - | BRP: "BSN" | `het burgerservicenummer` | - |
| 🟡 3 | `geboortedatum` | - | BRP: "geboortedatum" | `de geboortedatum` | - |
| 🟣 4 | `leeftijd` | - | - | `de leeftijd` | - |
| 🔴 6 | `isAOWGerechtigd` | `isAowGerechtigd` | Algemene Ouderdomswet | `is AOW-gerechtigd (kenmerk)` | - |
| 🔴 6 | `isAlleenstaand` | `huishouden: 'alleenstaand'` | AWIR | `is alleenstaand (kenmerk)` | - |
| 🟢 1 | `aowOpbouwpercentage` | - | AOW art. 7 | `het AOW-opbouwpercentage` | - |

### Pensioenaanspraak (🔵 Groep 2)

| Groep | NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|-------|--------------------|------------|-----------|-------------|---------------|
| 🔵 2 | `maandelijksBedrag` | `maandelijks_aanvullend_pensioen` | Pensioenwet | `het aanvullend pensioen per maand` | "Aanvullend pensioen" |
| 🟣 4 | `jaarlijksBedrag` | `jaarlijks_aanvullend_pensioen` | - | `het aanvullend pensioen per jaar` | - |
| 🔵 2 | `gekapitaliseerdeWaarde` | `pensioenvermogen` (implicit) | Pensioenwet | `het pensioenvermogen` | - |
| 🟡 3 | `ingangsdatum` | - | Pensioenwet | `de pensioeningangsdatum` | - |
| 🔴 6 | `isVerevend` | `bijzondere_situaties.scheiding_verevening` | WVPS | `is verevend pensioen (kenmerk)` | - |

### Inkomensjaar (🟣 Groep 4)

| Groep | NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|-------|--------------------|------------|-----------|-------------|---------------|
| 🟣 4 | `aowUitkering` | `aow_jaarlijks` | AOW | `het AOW-inkomen` | "AOW" |
| 🟣 4 | `aanvullendPensioen` | `jaarlijks_aanvullend_pensioen` | - | `het aanvullend pensioen per jaar` | "Aanvullend pensioen" |
| 🟣 4 | `bedragIneens` | `bedrag_ineens` | Pensioenwet art. 69a | `het bedrag ineens` | "Bedrag ineens" |
| 🟣 4 | `brutoInkomen` | `bruto_inkomen` | - | `het bruto inkomen jaar opname` | "Bruto-inkomen" |
| 🟣 4 | `toetsingsinkomen` | `toetsingsinkomen` | AWIR art. 8 | `het toetsingsinkomen jaar opname` | - |

### Belastingaanslag (🟣 Groep 4)

| Groep | NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|-------|--------------------|------------|-----------|-------------|---------------|
| 🟣 4 | `belastingBox1Bruto` | `belasting` | Wet IB 2001 | `de belasting box 1 bruto` | - |
| 🟣 4 | `zvwBijdrage` | `zvw_bijdrage` | Zvw art. 45 | `de inkomensafhankelijke bijdrage Zvw` | "Inkomensafhankelijke bijdrage Zvw" |
| 🟣 4 | `totaleHeffingskortingen` | - | Wet IB 2001 Hfdst 8 | `de totale heffingskortingen` | - |
| 🟣 4 | `belastingNaKortingen` | - | - | `de belasting na heffingskortingen` | "Totaal te betalen belasting na heffingskortingen" |
| 🟣 4 | `nettoInkomen` | `netto_inkomen` | - | `het netto inkomen` | "Netto-inkomen" |

### Toeslag (🟣 Groep 4)

| Groep | NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|-------|--------------------|------------|-----------|-------------|---------------|
| 🟣 4 | `bedragZonderOpname` | `zorgtoeslag` (baseline) | - | `de zorgtoeslag zonder opname` | "Zorgtoeslag" (kolom geen bedrag ineens) |
| 🟣 4 | `bedragMetOpname` | - | - | `de zorgtoeslag met opname` | "Zorgtoeslag" (kolom met bedrag ineens) |
| 🟣 4 | `verlies` | - | - | `het zorgtoeslag verlies` | Verschil tussen kolommen |
| 🔴 6 | `vervaltVolledig` | - | - | `vervalt volledig (kenmerk)` | Waarde = 0 vs > 0 |

---

## Enumeratie Mapping

### Huishoudtype

| NORA/MIM | Rules JSON | Wetgeving | Regelspraak |
|----------|------------|-----------|-------------|
| `ALLEENSTAAND` | `'alleenstaand'` | AWIR | `'alleenstaand'` |
| `ALLEENSTAAND_OUDER` | `'alleenstaand_ouder'` | AWIR | `'alleenstaand_ouder'` |
| `PARTNERS` | `'partners'` | AWIR | `'partners'` |

### Woningtype

| NORA/MIM | Rules JSON | Wetgeving | Regelspraak |
|----------|------------|-----------|-------------|
| `HUUR` | `huurwoning: true` | Wet huurtoeslag | `'huur'` |
| `KOOP` | `huurwoning: false` | - | `'koop'` |

### Toeslagtype

| NORA/MIM | Rules JSON | Wetgeving | Regelspraak |
|----------|------------|-----------|-------------|
| `ZORGTOESLAG` | `zorgtoeslag` | Wet zorgtoeslag | `'zorgtoeslag'` |
| `HUURTOESLAG` | `huurtoeslag` | Wet huurtoeslag | `'huurtoeslag'` |
| `KINDGEBONDEN_BUDGET` | `kindgebonden_budget` | Wet kindgebonden budget | `'kindgebonden_budget'` |
| `AIO` | `aio` | Participatiewet | `'aio'` |

### Kortingtype

| NORA/MIM | Rules JSON | Wetgeving | Regelspraak |
|----------|------------|-----------|-------------|
| `ALGEMENE_HEFFINGSKORTING` | `algemene_heffingskorting` | Wet IB 2001 art. 8.10 | `'algemene_heffingskorting'` |
| `OUDERENKORTING` | `ouderenkorting` | Wet IB 2001 art. 8.17 | `'ouderenkorting'` |
| `ALLEENSTAANDE_OUDERENKORTING` | - | Wet IB 2001 art. 8.18 | `'alleenstaande_ouderenkorting'` |

### Scenariotype

| NORA/MIM | Rules JSON | Beschrijving | Regelspraak |
|----------|------------|--------------|-------------|
| `GEEN` | `scenarios.geen_bedrag_ineens` | 0% opname | `'geen'` |
| `GEDEELTELIJK` | `scenarios.gedeeltelijk_bedrag_ineens` | 5% opname | `'gedeeltelijk'` |
| `MAXIMAAL` | `scenarios.maximaal_bedrag_ineens` | 10% opname | `'maximaal'` |

---

## Wettelijke Referenties

| Wet | Artikel | NORA/MIM Entiteit | Groep | Beschrijving |
|-----|---------|-------------------|-------|--------------|
| Pensioenwet | art. 69a | `BedragIneensKeuze` | 🔵 2 | Afkoop deel aanspraak ouderdomspensioen |
| Pensioenwet | art. 48a | `Geschiktheidsbeoordeling` | 🔴 6 | Keuzebegeleiding |
| Wet IB 2001 | art. 2.10 | `Belastingtarief` | 🟤 5 | Tarieven box 1 |
| Wet IB 2001 | art. 8.10 | `Heffingskorting` | 🟣 4 | Algemene heffingskorting |
| Wet IB 2001 | art. 8.17 | `Heffingskorting` | 🟣 4 | Ouderenkorting |
| Zvw | art. 45 | `ZvwTarief` | 🟤 5 | Inkomensafhankelijke bijdrage |
| AWIR | art. 7, 8 | `Inkomensjaar` | 🟣 4 | Draagkracht en toetsingsinkomen |
| Wet zorgtoeslag | art. 1 | `Zorgtoeslag` | 🟣 4 | Tegemoetkoming zorgverzekering |
| Wet huurtoeslag | art. 1, 7, 10 | `Huurtoeslag` | 🟣 4 | Tegemoetkoming huurkosten |
| Besluit huurtoeslag | art. 2b | `BijzondereNabetaling` | 🟣 4 | Bijzondere nabetaling uitzondering |
| WVPS | - | `Pensioenverevening` | 🔵 2 | Wet verevening pensioenrechten bij scheiding |

---

## Overzicht per Groep

### 🟢 Groep 1: Real-world Entiteiten
```
NatuurlijkPersoon, Partner, Pensioenuitvoerder, Verblijfsobject
```
**Kenmerken**: Bestaan onafhankelijk van het systeem. Input-gegevens.

### 🔵 Groep 2: Juridische Constructen
```
Huishouden, Pensioenaanspraak, Pensioenverevening, BedragIneensKeuze, UitgesteldeBetaling
```
**Kenmerken**: Bestaan bij gratie van wet. Hebben rechtsgevolgen.

### 🟡 Groep 3: Temporele Feiten
```
geboortedatum, pensioeningangsdatum, keuzedatum, geplandeBetaaldatum, geldigVanaf/geldigTot
```
**Kenmerken**: Attributen (geen entiteiten). Immutable zodra vastgesteld.

### 🟣 Groep 4: Berekende Informatie (KERN van Rules as Code)
```
BedragIneensResultaat, Inkomensjaar, Belastingaanslag, Heffingskorting, ZvwBijdrage,
Toeslag, Zorgtoeslag, Huurtoeslag, KindgebondenBudget, AIO, BijzondereNabetaling
```
**Kenmerken**: Deterministisch. Traceerbaar naar bronregel. Dit is wat we in Regelspraak uitdrukken.

### 🟤 Groep 5: Parameters
```
Parameterset, Belastingtarief, HeffingskortingBedrag, ZvwTarief, Toeslaggrens, AOWBedrag
```
**Kenmerken**: Externe feiten. Jaarlijks bijwerken. Systeem gebruikt ze, bepaalt ze niet.

### 🔴 Groep 6: Validatie-output
```
Geschiktheidsbeoordeling, Risicoprofiel
```
**Kenmerken**: Ja/nee antwoorden. Classificaties. Resultaat van regeltoepassing.

### ⚪ Groep 7: Meta-analyse
```
Berekeningsscenario, Scenariovergelijking, Signalering
```
**Kenmerken**: Hulpmiddelen voor besluitvorming. "Wat als" en advies.

---

## Gebruik

### Bij implementatie in Regelspraak

```regelspraak
// 🟢 Groep 1: Real-world → Regelspraak: Objecttype
Objecttype de Persoon (mv: Personen) (bezield)
    // 🟡 Groep 3: Temporeel feit
    de geboortedatum Datum;
    // 🔴 Groep 6: Validatie-output (kenmerk)
    is AOW-gerechtigd kenmerk (bijvoeglijk);
    // 🟢 Groep 1: Attribuut
    het burgerservicenummer Tekst;
```

### Bij mapping van Rules JSON input

```typescript
// Rules JSON → NORA/MIM → Context
const persoon: NatuurlijkPersoon = {      // 🟢 Groep 1
  leeftijd: input.profiel.leeftijd,       // 🟣 Groep 4 (afgeleid)
  isAlleenstaand: input.huishouden === 'alleenstaand', // 🔴 Groep 6
};
```

### Bij validatie tegen EK Nota

```typescript
// 🟣 Groep 4: Berekende informatie - vergelijken met EK Nota tabellen
expect(result.inkomensjaar.brutoInkomen).toBeCloseTo(39400, -2);
```

---

## Gerelateerde Documenten

- [`objectmodel_erd.mmd`](objectmodel_erd.mmd) - ERD diagram met alle relaties
- [`objectmodel_groepen.mmd`](objectmodel_groepen.mmd) - Flowchart met gekleurde groepen
- [`objectmodel_erd.md`](objectmodel_erd.md) - Volledige documentatie
- [`rules/bedrag_ineens_rules.json`](rules/bedrag_ineens_rules.json) - Bronregels
