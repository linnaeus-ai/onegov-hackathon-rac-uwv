# Begrippen Mapping: NORA/MIM ↔ Regels ↔ Wetgeving ↔ Regelspraak

Dit document biedt een **Rosetta Stone** voor het vertalen tussen:
- **NORA/MIM**: Gestandaardiseerde informatiemodel-termen
- **Rules JSON**: Termen in `bedrag_ineens_rules.json`
- **Wetgeving**: Officiële wettelijke terminologie
- **Regelspraak**: Gegevensspraak objecttype-namen
- **Groep**: Ontologische classificatie (zie legenda)

## Implementatiestatus

> **Let op:** De daadwerkelijke Regelspraak implementatie in `rules/bedrag-ineens/gegevens.rs` gebruikt **vereenvoudigde namen** en een **subset van entiteiten**. De mapping hieronder toont zowel de conceptuele NORA-termen als de werkelijke implementatie.

| Legenda | Betekenis |
|---------|-----------|
| ✅ | Volledig geïmplementeerd in gegevens.rs |
| ⚡ | Vereenvoudigd geïmplementeerd (als attribuut of kenmerk) |
| ❌ | Niet geïmplementeerd in MVP |

---

## Groepen Legenda (Entiteitsniveau)

| Groep | Kleur | Naam | Beschrijving |
|-------|-------|------|--------------|
| 🟢 1 | Groen | **Real-world entiteiten** | Fysieke of juridische entiteiten die onafhankelijk van het systeem bestaan |
| 🔵 2 | Blauw | **Juridische constructen** | Abstracte entiteiten die bestaan bij gratie van wetgeving of overeenkomsten |
| 🟣 3 | Paars | **Berekende informatie** | Output van regels - de KERN van Rules as Code |
| 🟤 4 | Bruin | **Parameters** | Externe feiten die jaarlijks/periodiek wijzigen |
| 🔴 5 | Rood | **Validatie-output** | Resultaat van regeltoepassing (ja/nee, classificaties) |
| ⚪ 6 | Grijs | **Meta-analyse** | Hulpmiddelen voor besluitvorming (scenario's, vergelijkingen, advies) |


---

## Kern Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak (conceptueel) | **gegevens.rs** | Status |
|-------|----------|------------|----------------|---------------------------|-----------------|--------|
| 🟢 1 | `NatuurlijkPersoon` | `profiel` | BRP: "Ingeschreven natuurlijk persoon" | `de Natuurlijk persoon (bezield)` | `de Persoon (bezield)` | ✅ |
| 🔵 2 | `Huishouden` | `huishouden` | AWIR: "huishouden" | `het Huishouden` | `is alleenstaand` kenmerk | ⚡ |
| 🟢 1 | `Verblijfsobject` | `huurwoning` | BAG: "Verblijfsobject" | `het Verblijfsobject` | `huur per maand` attribuut | ⚡ |
| 🟢 1 | `Partner` | `toeslagpartner` | AWIR art. 3: "partner" | `de Partner (bezield)` | — | ❌ |

---

## Pensioen Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak (conceptueel) | **gegevens.rs** | Status |
|-------|----------|------------|----------------|---------------------------|-----------------|--------|
| 🟢 1 | `Pensioenuitvoerder` | - | Pensioenwet art. 1: "pensioenuitvoerder" | `de Pensioenuitvoerder` | — | ❌ |
| 🔵 2 | `Pensioenaanspraak` | `maandelijks_aanvullend_pensioen`, `pensioenvermogen` | Pensioenwet: "pensioenaanspraak" | `de Pensioenaanspraak` | `aanvullend pensioen per maand`, `pensioenvermogen` | ⚡ |
| 🔵 2 | `Pensioenverevening` | `bijzondere_situaties.scheiding_verevening` | WVPS: "verevening" | `de Pensioenverevening` | — | ❌ |

---

## Bedrag Ineens Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak (conceptueel) | **gegevens.rs** | Status |
|-------|----------|------------|----------------|---------------------------|-----------------|--------|
| 🔵 2 | `BedragIneensKeuze` | `bedrag_ineens_percentage` | Pensioenwet art. 69a: "bedrag ineens" | `de Bedrag ineens keuze` | `opname percentage` in Scenario | ⚡ |
| 🔵 2 | `UitgesteldeBetaling` | `geschiktheid.uitgestelde_betaling` | Wet herziening bedrag ineens: "uitgestelde uitbetaling" | `de Uitgestelde betaling` | — | ❌ |
| 🔴 5 | `Geschiktheidsbeoordeling` | `geschiktheid.bedrag_ineens.voorwaarden` | Pensioenwet art. 69a lid 2 | `de Geschiktheidsbeoordeling` | — | ❌ |
| 🟣 3 | `BedragIneensResultaat` | `berekeningen.bedrag_ineens_hoogte` | Pensioenwet art. 69a | `het Bedrag ineens resultaat` | `bedrag ineens`, `resterend pensioen per jaar`, `permanent verlies per jaar` | ✅ |

---

## Inkomen & Belasting Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak (conceptueel) | **gegevens.rs** | Status |
|-------|----------|------------|----------------|---------------------------|-----------------|--------|
| 🟣 3 | `Inkomensjaar` | `bruto_inkomen`, `toetsingsinkomen` | BRI: "geregistreerd inkomen", AWIR art. 8: "toetsingsinkomen" | `het Inkomensjaar` | `bruto inkomen`, `is jaar met opname` | ⚡ |
| 🟣 3 | `Belastingaanslag` | `berekeningen.belasting` | Wet IB 2001: "aanslag inkomstenbelasting" | `de Belastingaanslag` | `belasting box1`, `belasting na heffingskortingen` | ✅ |
| 🟣 3 | `Heffingskorting` | `heffingskortingen` | Wet IB 2001 art. 8.1: "heffingskorting" | `de Heffingskorting` | `algemene heffingskorting`, `ouderenkorting`, `alleenstaande ouderenkorting` | ✅ |
| 🟣 3 | `ZvwBijdrage` | `zvw_bijdrage` | Zvw art. 45 | `de Zvw-bijdrage` | `Zvw bijdrage` | ✅ |

### Heffingskorting Subtypen

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak |
|-------|----------|------------|----------------|-------------|
| 🟣 3 | `AlgemeneHeffingskorting` | `algemene_heffingskorting` | Wet IB 2001 art. 8.10 | `de algemene heffingskorting` |
| 🟣 3 | `Ouderenkorting` | `ouderenkorting` | Wet IB 2001 art. 8.17 | `de ouderenkorting` |
| 🟣 3 | `AlleenstaandeOuderenkorting` | - | Wet IB 2001 art. 8.18 | `de alleenstaande ouderenkorting` |

---

## Toeslag Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak (conceptueel) | **gegevens.rs** | Status |
|-------|----------|------------|----------------|---------------------------|-----------------|--------|
| 🟣 3 | `Toeslag` | `toeslagen` | AWIR: "tegemoetkoming" | `de Toeslag` | — | ⚡ |
| 🟣 3 | `Zorgtoeslag` | `toeslagen.zorgtoeslag` | Wet zorgtoeslag art. 1 | `de Zorgtoeslag` | `zorgtoeslag` in Scenario | ✅ |
| 🟣 3 | `Huurtoeslag` | `toeslagen.huurtoeslag` | Wet huurtoeslag art. 1 | `de Huurtoeslag` | `huurtoeslag` in Scenario | ✅ |
| 🟣 3 | `KindgebondenBudget` | `toeslagen.kindgebonden_budget` | Wet kindgebonden budget | `het Kindgebonden budget` | — | ❌ |
| 🟣 3 | `AIO` | `toeslagen.aio` | Participatiewet: "AIO-aanvulling" | `de AIO` | — | ❌ |
| 🟣 3 | `BijzondereNabetaling` | `huurtoeslag.bijzondere_uitzondering` | Besluit huurtoeslag art. 2b | `de Bijzondere nabetaling` | — | ❌ |

---

## Parameter Entiteiten

| Groep | NORA/MIM | Rules JSON path | Wetgeving/Bron | Regelspraak | Definitie |
|-------|----------|-----------------|----------------|-------------|-----------|
| 🟤 4 | `Parameterset` | `constanten.belastingjaar` | - | `de Parameterset` | Verzameling jaarparameters |
| 🟤 4 | `Belastingtarief` | `berekeningen.belasting.belastingschijven_*` | Wet IB 2001 art. 2.10 | `het Belastingtarief` | Progressief tarief per schijf |
| 🟤 4 | `HeffingskortingBedrag` | `berekeningen.belasting.heffingskortingen.*` | Wet IB 2001 Hfdst 8 | `het Heffingskorting bedrag` | Bedrag en afbouwgrenzen per korting |
| 🟤 4 | `ZvwTarief` | `berekeningen.belasting.inkomensafhankelijke_bijdrage_zvw` | Zvw art. 45 | `het Zvw-tarief` | Bijdragepercentage en max grondslag |
| 🟤 4 | `Toeslaggrens` | `toeslagen.*.geschiktheid.inkomensgrenzen_*` | Per wet (zorgtoeslag, huurtoeslag) | `de Toeslaggrens` | Inkomensgrenzen per toeslag |
| 🟤 4 | `AOWBedrag` | - | SVB normen | `het AOWBedrag` | Bruto AOW per huishoudtype |

---

## Scenario & Advies Entiteiten

| Groep | NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak (conceptueel) | **gegevens.rs** | Status |
|-------|----------|------------|----------------|---------------------------|-----------------|--------|
| ⚪ 6 | `Berekeningsscenario` | `scenarios` | - | `het Berekeningsscenario` | `het Scenario` | ✅ |
| ⚪ 6 | `Scenariovergelijking` | `scenarios` | - | `de Scenariovergelijking` | Via meerdere Scenario runs | ⚡ |
| ⚪ 6 | `Signalering` | `risicofactoren.*.risicos` | - | `de Signalering` | — | ❌ |
| 🔴 5 | `Risicoprofiel` | `risicofactoren.financieel_kwetsbare_groepen` | - | `het Risicoprofiel` | — | ❌ |

---

## Attribuut Mapping

### NatuurlijkPersoon (🟢 Groep 1)

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `burgerservicenummer` | - | BRP: "BSN" | `het burgerservicenummer` | - |
| `geboortedatum` | - | BRP: "geboortedatum" | `de geboortedatum` | - |
| `leeftijd` | - | - | `de leeftijd` | - |
| `isAOWGerechtigd` | `isAowGerechtigd` | Algemene Ouderdomswet | `is AOW-gerechtigd (kenmerk)` | - |
| `isAlleenstaand` | `huishouden: 'alleenstaand'` | AWIR | `is alleenstaand (kenmerk)` | - |
| `aowOpbouwpercentage` | - | AOW art. 7 | `het AOW-opbouwpercentage` | - |

### Pensioenaanspraak (🔵 Groep 2)

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `maandelijksBedrag` | `maandelijks_aanvullend_pensioen` | Pensioenwet | `het aanvullend pensioen per maand` | "Aanvullend pensioen" |
| `jaarlijksBedrag` | `jaarlijks_aanvullend_pensioen` | - | `het aanvullend pensioen per jaar` | - |
| `gekapitaliseerdeWaarde` | `pensioenvermogen` (implicit) | Pensioenwet | `het pensioenvermogen` | - |
| `ingangsdatum` | - | Pensioenwet | `de pensioeningangsdatum` | - |
| `isVerevend` | `bijzondere_situaties.scheiding_verevening` | WVPS | `is verevend pensioen (kenmerk)` | - |

### Inkomensjaar (🟣 Groep 3)

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `aowUitkering` | `aow_jaarlijks` | AOW | `het AOW-inkomen` | "AOW" |
| `aanvullendPensioen` | `jaarlijks_aanvullend_pensioen` | - | `het aanvullend pensioen per jaar` | "Aanvullend pensioen" |
| `bedragIneens` | `bedrag_ineens` | Pensioenwet art. 69a | `het bedrag ineens` | "Bedrag ineens" |
| `brutoInkomen` | `bruto_inkomen` | - | `het bruto inkomen jaar opname` | "Bruto-inkomen" |
| `toetsingsinkomen` | `toetsingsinkomen` | AWIR art. 8 | `het toetsingsinkomen jaar opname` | - |

### Belastingaanslag (🟣 Groep 3)

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `belastingBox1Bruto` | `belasting` | Wet IB 2001 | `de belasting box 1 bruto` | - |
| `zvwBijdrage` | `zvw_bijdrage` | Zvw art. 45 | `de inkomensafhankelijke bijdrage Zvw` | "Inkomensafhankelijke bijdrage Zvw" |
| `totaleHeffingskortingen` | - | Wet IB 2001 Hfdst 8 | `de totale heffingskortingen` | - |
| `belastingNaKortingen` | - | - | `de belasting na heffingskortingen` | "Totaal te betalen belasting na heffingskortingen" |
| `nettoInkomen` | `netto_inkomen` | - | `het netto inkomen` | "Netto-inkomen" |

### Toeslag (🟣 Groep 3)

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `bedragZonderOpname` | `zorgtoeslag` (baseline) | - | `de zorgtoeslag zonder opname` | "Zorgtoeslag" (kolom geen bedrag ineens) |
| `bedragMetOpname` | - | - | `de zorgtoeslag met opname` | "Zorgtoeslag" (kolom met bedrag ineens) |
| `verlies` | - | - | `het zorgtoeslag verlies` | Verschil tussen kolommen |
| `vervaltVolledig` | - | - | `vervalt volledig (kenmerk)` | Waarde = 0 vs > 0 |

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
| Pensioenwet | art. 48a | `Geschiktheidsbeoordeling` | 🔴 5 | Keuzebegeleiding |
| Wet IB 2001 | art. 2.10 | `Belastingtarief` | 🟤 4 | Tarieven box 1 |
| Wet IB 2001 | art. 8.10 | `Heffingskorting` | 🟣 3 | Algemene heffingskorting |
| Wet IB 2001 | art. 8.17 | `Heffingskorting` | 🟣 3 | Ouderenkorting |
| Zvw | art. 45 | `ZvwTarief` | 🟤 4 | Inkomensafhankelijke bijdrage |
| AWIR | art. 7, 8 | `Inkomensjaar` | 🟣 3 | Draagkracht en toetsingsinkomen |
| Wet zorgtoeslag | art. 1 | `Zorgtoeslag` | 🟣 3 | Tegemoetkoming zorgverzekering |
| Wet huurtoeslag | art. 1, 7, 10 | `Huurtoeslag` | 🟣 3 | Tegemoetkoming huurkosten |
| Besluit huurtoeslag | art. 2b | `BijzondereNabetaling` | 🟣 3 | Bijzondere nabetaling uitzondering |
| WVPS | - | `Pensioenverevening` | 🔵 2 | Wet verevening pensioenrechten bij scheiding |

---

## Overzicht Entiteiten per Groep

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

### 🟣 Groep 3: Berekende Informatie (KERN van Rules as Code)
```
BedragIneensResultaat, Inkomensjaar, Belastingaanslag, Heffingskorting, ZvwBijdrage,
Toeslag, Zorgtoeslag, Huurtoeslag, KindgebondenBudget, AIO, BijzondereNabetaling
```
**Kenmerken**: Deterministisch. Traceerbaar naar bronregel. Dit is wat we in Regelspraak uitdrukken.

### 🟤 Groep 4: Parameters
```
Parameterset, Belastingtarief, HeffingskortingBedrag, ZvwTarief, Toeslaggrens, AOWBedrag
```
**Kenmerken**: Externe feiten. Jaarlijks bijwerken. Systeem gebruikt ze, bepaalt ze niet.

### 🔴 Groep 5: Validatie-output
```
Geschiktheidsbeoordeling, Risicoprofiel
```
**Kenmerken**: Ja/nee antwoorden. Classificaties. Resultaat van regeltoepassing.

### ⚪ Groep 6: Meta-analyse
```
Berekeningsscenario, Scenariovergelijking, Signalering
```
**Kenmerken**: Hulpmiddelen voor besluitvorming. "Wat als" en advies.


---

## Gebruik

### Bij implementatie in Regelspraak

**Conceptueel (NORA-conform):**
```regelspraak
Objecttype de Natuurlijk persoon (mv: Natuurlijke personen) (bezield)
    de geboortedatum Datum;
    is AOW-gerechtigd kenmerk (bijvoeglijk);
    het burgerservicenummer Tekst;
    de leeftijd Numeriek (niet-negatief geheel getal) met eenheid jr;
    het AOW-opbouwpercentage Numeriek (getal met 2 decimalen);
```

**Werkelijke implementatie (gegevens.rs):**
```regelspraak
Objecttype de Persoon (mv: Personen) (bezield)
    is AOW gerechtigd kenmerk (bijvoeglijk);
    is alleenstaand kenmerk (bijvoeglijk);
    het AOW inkomen Bedrag;
    het aanvullend pensioen per maand Bedrag;
    het pensioenvermogen Bedrag;
    de huur per maand Bedrag;
```

### Bij mapping van Rules JSON input

```typescript
// Rules JSON → NORA/MIM → Context
const persoon: NatuurlijkPersoon = {
  leeftijd: input.profiel.leeftijd,
  isAlleenstaand: input.huishouden === 'alleenstaand',
};
```

### Bij validatie tegen EK Nota

```typescript
// Berekende informatie - vergelijken met EK Nota tabellen
expect(result.inkomensjaar.brutoInkomen).toBeCloseTo(39400, -2);
```

---

## Gerelateerde Documenten

- [`objectmodel_erd.mmd`](objectmodel_erd.mmd) - ERD diagram met alle relaties
- [`objectmodel_groepen.mmd`](objectmodel_groepen.mmd) - Flowchart met gekleurde groepen
- [`objectmodel_erd.md`](objectmodel_erd.md) - Volledige documentatie
- [`rules/bedrag_ineens_rules.json`](rules/bedrag_ineens_rules.json) - Bronregels
