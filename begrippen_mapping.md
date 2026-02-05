# Begrippen Mapping: NORA/MIM ↔ Regels ↔ Wetgeving ↔ Regelspraak

Dit document biedt een **Rosetta Stone** voor het vertalen tussen:
- **NORA/MIM**: Gestandaardiseerde informatiemodel-termen
- **Rules JSON**: Termen in `bedrag_ineens_rules.json`
- **Wetgeving**: Officiële wettelijke terminologie
- **Regelspraak**: Gegevensspraak objecttype-namen

---

## Kern Entiteiten

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|----------|------------|----------------|-------------|-----------|
| `NatuurlijkPersoon` | `profiel` | BRP: "Ingeschreven natuurlijk persoon" | `de Persoon (bezield)` | Een mens die rechtssubject kan zijn |
| `Huishouden` | `huishouden` | AWIR: "huishouden" | `het Huishouden` | Personen die samen een woning bewonen |
| `Verblijfsobject` | `huurwoning` | BAG: "Verblijfsobject" | `de Woonsituatie` | De kleinste eenheid waaraan een adres wordt toegekend |
| `Partner` | `toeslagpartner` | AWIR art. 3: "partner" | `de Partner (bezield)` | Degene met wie men samenwoont en gezamenlijk huishouden voert |

---

## Pensioen Entiteiten

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|----------|------------|----------------|-------------|-----------|
| `Pensioenuitvoerder` | - | Pensioenwet art. 1: "pensioenuitvoerder" | `de Pensioenuitvoerder` | Pensioenfonds, verzekeraar of PPI |
| `Pensioenaanspraak` | `maandelijks_aanvullend_pensioen`, `pensioenvermogen` | Pensioenwet: "pensioenaanspraak" | `de Pensioenaanspraak` | Het recht op een nog niet ingegaan pensioen |
| `Pensioenverevening` | `bijzondere_situaties.scheiding_verevening` | WVPS: "verevening" | `de Pensioenverevening` | Verdeling van pensioenrechten bij scheiding |

---

## Bedrag Ineens Entiteiten

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|----------|------------|----------------|-------------|-----------|
| `BedragIneensKeuze` | `bedrag_ineens_percentage` | Pensioenwet art. 69a: "bedrag ineens" | `de BedragIneensKeuze` | Keuze om max 10% van pensioenwaarde als eenmalig bedrag op te nemen |
| `UitgesteldeBetaling` | `geschiktheid.uitgestelde_betaling` | Wet herziening bedrag ineens: "uitgestelde uitbetaling" | `de UitgesteldeBetaling` | Optie om betaling uit te stellen naar januari volgend op AOW-jaar |
| `Geschiktheidsbeoordeling` | `geschiktheid.bedrag_ineens.voorwaarden` | Pensioenwet art. 69a lid 2 | `de Geschiktheidsbeoordeling` | Toets of aan alle voorwaarden is voldaan |

---

## Inkomen & Belasting Entiteiten

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|----------|------------|----------------|-------------|-----------|
| `Inkomensjaar` | `bruto_inkomen`, `toetsingsinkomen` | BRI: "geregistreerd inkomen", AWIR art. 8: "toetsingsinkomen" | `het Inkomensjaar` | Het inkomen over een kalenderjaar |
| `Belastingaanslag` | `berekeningen.belasting` | Wet IB 2001: "aanslag inkomstenbelasting" | `de Belastingaanslag` | De vastgestelde belasting over een jaar |
| `Heffingskorting` | `heffingskortingen` | Wet IB 2001 art. 8.1: "heffingskorting" | `de Heffingskorting` | Korting op de verschuldigde belasting |

### Heffingskorting Subtypen

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak |
|----------|------------|----------------|-------------|
| `AlgemeneHeffingskorting` | `algemene_heffingskorting` | Wet IB 2001 art. 8.10 | `de algemene heffingskorting` |
| `Ouderenkorting` | `ouderenkorting` | Wet IB 2001 art. 8.17 | `de ouderenkorting` |
| `AlleenstaandeOuderenkorting` | - | Wet IB 2001 art. 8.18 | `de alleenstaande ouderenkorting` |

---

## Toeslag Entiteiten

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|----------|------------|----------------|-------------|-----------|
| `Toeslag` | `toeslagen` | AWIR: "tegemoetkoming" | `de Toeslag` | Inkomensafhankelijke overheidsbijdrage |
| `Zorgtoeslag` | `toeslagen.zorgtoeslag` | Wet zorgtoeslag art. 1 | `de Zorgtoeslag` | Tegemoetkoming in de kosten van zorgverzekering |
| `Huurtoeslag` | `toeslagen.huurtoeslag` | Wet huurtoeslag art. 1 | `de Huurtoeslag` | Tegemoetkoming in de huurkosten |
| `KindgebondenBudget` | `toeslagen.kindgebonden_budget` | Wet kindgebonden budget | `het KindgebondenBudget` | Bijdrage voor ouders met kinderen |
| `AIO` | `toeslagen.aio` | Participatiewet: "AIO-aanvulling" | `de AIO` | Aanvullende inkomensvoorziening ouderen |
| `BijzondereNabetaling` | `huurtoeslag.bijzondere_uitzondering` | Besluit huurtoeslag art. 2b | `de BijzondereNabetaling` | Uitzondering waardoor bedrag ineens niet meetelt voor huurtoeslag |

---

## Parameter Entiteiten

| NORA/MIM | Rules JSON path | Wetgeving/Bron | Regelspraak | Definitie |
|----------|-----------------|----------------|-------------|-----------|
| `Parameterset` | `constanten.belastingjaar` | - | `de Parameterset` | Verzameling jaarparameters |
| `Belastingtarief` | `berekeningen.belasting.belastingschijven_*` | Wet IB 2001 art. 2.10 | `het Belastingtarief` | Progressief tarief per schijf |
| `HeffingskortingBedrag` | `berekeningen.belasting.heffingskortingen.*` | Wet IB 2001 Hfdst 8 | `het HeffingskortingBedrag` | Bedrag en afbouwgrenzen per korting |
| `ZvwTarief` | `berekeningen.belasting.inkomensafhankelijke_bijdrage_zvw` | Zvw art. 45 | `het ZvwTarief` | Bijdragepercentage en max grondslag |
| `Toeslaggrens` | `toeslagen.*.geschiktheid.inkomensgrenzen_*` | Per wet (zorgtoeslag, huurtoeslag) | `de Toeslaggrens` | Inkomensgrenzen per toeslag |
| `AOWBedrag` | - | SVB normen | `het AOWBedrag` | Bruto AOW per huishoudtype |

---

## Risico & Advies Entiteiten

| NORA/MIM | Rules JSON | Wetgeving/Bron | Regelspraak | Definitie |
|----------|------------|----------------|-------------|-----------|
| `Risicoprofiel` | `risicofactoren.financieel_kwetsbare_groepen` | - | `het Risicoprofiel` | Classificatie van financiële kwetsbaarheid |
| `Signalering` | `risicofactoren.*.risicos` | - | `de Signalering` | Waarschuwing of advies voor de gebruiker |
| `Scenariovergelijking` | `scenarios` | - | `de Scenariovergelijking` | Vergelijking van 0%/5%/10% scenario's |

---

## Attribuut Mapping

### NatuurlijkPersoon / Persoon

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `burgerservicenummer` | - | BRP: "BSN" | `het burgerservicenummer` | - |
| `geboortedatum` | - | BRP: "geboortedatum" | `de geboortedatum` | - |
| `leeftijd` | - | - | `de leeftijd` | - |
| `isAOWGerechtigd` | `isAowGerechtigd` | Algemene Ouderdomswet | `is AOW-gerechtigd (kenmerk)` | - |
| `isAlleenstaand` | `huishouden: 'alleenstaand'` | AWIR | `is alleenstaand (kenmerk)` | - |
| `aowOpbouwpercentage` | - | AOW art. 7 | `het AOW-opbouwpercentage` | - |

### Pensioenaanspraak

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `maandelijksBedrag` | `maandelijks_aanvullend_pensioen` | Pensioenwet | `het aanvullend pensioen per maand` | "Aanvullend pensioen" |
| `jaarlijksBedrag` | `jaarlijks_aanvullend_pensioen` | - | `het aanvullend pensioen per jaar` | - |
| `gekapitaliseerdeWaarde` | `pensioenvermogen` (implicit) | Pensioenwet | `het pensioenvermogen` | - |
| `ingangsdatum` | - | Pensioenwet | `de pensioeningangsdatum` | - |
| `isVerevend` | `bijzondere_situaties.scheiding_verevening` | WVPS | `is verevend pensioen (kenmerk)` | - |

### Inkomensjaar

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `aowUitkering` | `aow_jaarlijks` | AOW | `het AOW-inkomen` | "AOW" |
| `aanvullendPensioen` | `jaarlijks_aanvullend_pensioen` | - | `het aanvullend pensioen per jaar` | "Aanvullend pensioen" |
| `bedragIneens` | `bedrag_ineens` | Pensioenwet art. 69a | `het bedrag ineens` | "Bedrag ineens" |
| `brutoInkomen` | `bruto_inkomen` | - | `het bruto inkomen jaar opname` | "Bruto-inkomen" |
| `toetsingsinkomen` | `toetsingsinkomen` | AWIR art. 8 | `het toetsingsinkomen jaar opname` | - |

### Belastingaanslag

| NORA/MIM attribuut | Rules JSON | Wetgeving | Regelspraak | EK Nota kolom |
|--------------------|------------|-----------|-------------|---------------|
| `belastingBox1Bruto` | `belasting` | Wet IB 2001 | `de belasting box 1 bruto` | - |
| `zvwBijdrage` | `zvw_bijdrage` | Zvw art. 45 | `de inkomensafhankelijke bijdrage Zvw` | "Inkomensafhankelijke bijdrage Zvw" |
| `totaleHeffingskortingen` | - | Wet IB 2001 Hfdst 8 | `de totale heffingskortingen` | - |
| `belastingNaKortingen` | - | - | `de belasting na heffingskortingen` | "Totaal te betalen belasting na heffingskortingen" |
| `nettoInkomen` | `netto_inkomen` | - | `het netto inkomen` | "Netto-inkomen" |

### Toeslag

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

| Wet | Artikel | NORA/MIM Entiteit | Beschrijving |
|-----|---------|-------------------|--------------|
| Pensioenwet | art. 69a | `BedragIneensKeuze` | Afkoop deel aanspraak ouderdomspensioen |
| Pensioenwet | art. 48a | `Geschiktheidsbeoordeling` | Keuzebegeleiding |
| Wet IB 2001 | art. 2.10 | `Belastingtarief` | Tarieven box 1 |
| Wet IB 2001 | art. 8.10 | `Heffingskorting` | Algemene heffingskorting |
| Wet IB 2001 | art. 8.17 | `Heffingskorting` | Ouderenkorting |
| Zvw | art. 45 | `ZvwTarief` | Inkomensafhankelijke bijdrage |
| AWIR | art. 7, 8 | `Inkomensjaar` | Draagkracht en toetsingsinkomen |
| Wet zorgtoeslag | art. 1 | `Zorgtoeslag` | Tegemoetkoming zorgverzekering |
| Wet huurtoeslag | art. 1, 7, 10 | `Huurtoeslag` | Tegemoetkoming huurkosten |
| Besluit huurtoeslag | art. 2b | `BijzondereNabetaling` | Bijzondere nabetaling uitzondering |
| WVPS | - | `Pensioenverevening` | Wet verevening pensioenrechten bij scheiding |

---

## Gebruik

### Bij implementatie in Regelspraak

```regelspraak
// NORA/MIM: NatuurlijkPersoon → Regelspraak: Persoon
Objecttype de Persoon (mv: Personen) (bezield)
    // NORA/MIM: isAOWGerechtigd
    is AOW-gerechtigd kenmerk (bijvoeglijk);
    // NORA/MIM: burgerservicenummer
    het burgerservicenummer Tekst;
```

### Bij mapping van Rules JSON input

```typescript
// Rules JSON → NORA/MIM → Context
const persoon: NatuurlijkPersoon = {
  // Rules JSON: profiel.leeftijd → NORA/MIM: leeftijd
  leeftijd: input.profiel.leeftijd,
  // Rules JSON: huishouden === 'alleenstaand' → NORA/MIM: isAlleenstaand
  isAlleenstaand: input.profiel.huishouden === 'alleenstaand',
};
```

### Bij validatie tegen EK Nota

```typescript
// EK Nota kolom "Bruto-inkomen" → NORA/MIM: Inkomensjaar.brutoInkomen
expect(result.inkomensjaar.brutoInkomen).toBeCloseTo(39400, -2);
```
