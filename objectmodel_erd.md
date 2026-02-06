# Objectmodel ERD: Bedrag Ineens Regelset

## Implementation Status

> **Dit document beschrijft het volledige conceptuele domeinmodel.** De daadwerkelijke Regelspraak implementatie in `rules/bedrag-ineens/gegevens.rs` is een **vereenvoudigde subset** gericht op de kernberekeningen.

| Aspect | ERD (dit document) | gegevens.rs (implementatie) |
|--------|--------------------|-----------------------------|
| Doel | Volledig NORA/MIM-conform domeinmodel | MVP berekeningsengine |
| Entiteiten | 25+ | 2 (Persoon, Scenario) |
| Naamgeving | CamelCase (`NatuurlijkPersoon`) | Nederlands met spaties (`de Persoon`) |
| Scope | Eligibility, partners, risico's, meerdere uitvoerders | Alleen kernberekeningen voor alleenstaande AOW'ers |

### Implementatiestatus per Entiteitsgroep

| Groep | Status | Toelichting |
|-------|--------|-------------|
| 🟢 Real-world | **Gedeeltelijk** | `NatuurlijkPersoon` → `Persoon` (vereenvoudigd) |
| 🔵 Juridisch | **Minimaal** | Alleen kenmerk `is alleenstaand`, geen aparte entiteiten |
| 🟣 Berekend | **Volledig** | Alle berekeningen in `Scenario` object |
| 🟤 Parameters | **Volledig** | Alle parameters als losse `Parameter` declaraties |
| 🔴 Validatie | **Niet geïmplementeerd** | Geen eligibility checks |
| ⚪ Meta-analyse | **Niet geïmplementeerd** | Geen risicoprofielen of signaleringen |

---

## NORA/MIM Conforme Naamgeving

Gebaseerd op de volgende standaarden:
- **MIM** - Metamodel Informatiemodellering (Geonovum)
- **BRP** - Basisregistratie Personen
- **BRI** - Basisregistratie Inkomen
- **BAG** - Basisregistraties Adressen en Gebouwen
- **RSGB/RGBZ** - Gemeentelijk Gegevensmodel

## Ontologische Classificatie: Zes Entiteitsgroepen

Zie ook: [`objectmodel_groepen.mmd`](objectmodel_groepen.mmd) voor een visueel diagram met kleuren.

| Groep | Kleur | Naam | Beschrijving | Entiteiten |
|-------|-------|------|--------------|------------|
| 🟢 1 | Groen | **Real-world** | Fysieke/juridische entiteiten die onafhankelijk bestaan | NatuurlijkPersoon, Partner, Pensioenuitvoerder, Verblijfsobject |
| 🔵 2 | Blauw | **Juridisch** | Bestaan bij gratie van wet/overeenkomst | Huishouden, Pensioenaanspraak, Pensioenverevening, BedragIneensKeuze, UitgesteldeBetaling |
| 🟣 3 | Paars | **Berekend** | **KERN van Rules as Code** - output van regels | BedragIneensResultaat, Inkomensjaar, Belastingaanslag, Heffingskorting, Toeslag |
| 🟤 4 | Bruin | **Parameters** | Externe feiten die jaarlijks wijzigen | Parameterset, Belastingtarief, Toeslaggrens, AOWBedrag |
| 🔴 5 | Rood | **Validatie** | Ja/nee antwoorden van regeltoepassing | Geschiktheidsbeoordeling, Risicoprofiel |
| ⚪ 6 | Grijs | **Meta-analyse** | Hulpmiddelen voor besluitvorming | Berekeningsscenario, Scenariovergelijking, Signalering |

## SBVR Kleurconventie (oorspronkelijk)

| Kleur | Concept | Beschrijving |
|-------|---------|--------------|
| **Groen** | Noun concepts | Objecttypes / Entiteiten |
| **Blauw** | Verb concepts | Feittypes / Relaties |

## Entiteiten Overzicht per Domein

### 🟢🔵 Kern (BRP/RSGB aligned)
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `NatuurlijkPersoon` | 🟢 1 | De burger/gepensioneerde (BRP: Ingeschreven natuurlijk persoon) | ✅ `Persoon` |
| `Huishouden` | 🔵 2 | Samenstelling van het huishouden | ⚡ `is alleenstaand` kenmerk |
| `Verblijfsobject` | 🟢 1 | Woning/adres (BAG-term) | ⚡ `huur per maand` attribuut |
| `Partner` | 🟢 1 | Toeslagpartner | ❌ Niet geïmplementeerd |

### 🟢🔵 Pensioen (Pensioenregister aligned)
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `Pensioenuitvoerder` | 🟢 1 | Pensioenfonds of verzekeraar | ❌ Niet geïmplementeerd |
| `Pensioenaanspraak` | 🔵 2 | Recht op pensioen | ⚡ `aanvullend pensioen per maand`, `pensioenvermogen` |
| `Pensioenverevening` | 🔵 2 | Verdeling bij scheiding (WVPS) | ❌ Niet geïmplementeerd |

### 🔵🔴 Bedrag Ineens (Pensioenwet art. 69a)
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `BedragIneensKeuze` | 🔵 2 | De keuze voor 0-10% opname | ⚡ `opname percentage` in Scenario |
| `UitgesteldeBetaling` | 🔵 2 | Optie voor betaling in januari volgend jaar | ❌ Niet geïmplementeerd |
| `Geschiktheidsbeoordeling` | 🔴 5 | Validatie van voorwaarden | ❌ Niet geïmplementeerd |

### 🟣⚪ Scenario Berekeningen
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `Berekeningsscenario` | ⚪ 6 | Een specifiek opnamepercentage scenario | ✅ `Scenario` |
| `BedragIneensResultaat` | 🟣 3 | Bruto bedrag en pensioeneffecten | ✅ Attributen in `Scenario` |
| `Inkomensjaar` | 🟣 3 | Inkomen per jaar (opnamejaar vs volgende jaren) | ⚡ `is jaar met opname` kenmerk |

### 🟣 Belasting (Wet IB 2001)
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `Belastingaanslag` | 🟣 3 | Box 1 belasting berekening | ✅ Attributen in `Scenario` |
| `Heffingskorting` | 🟣 3 | Algemene/ouderen/alleenstaande ouderenkorting | ✅ Attributen in `Scenario` |

### 🟣 Toeslagen (AWIR / Wet zorgtoeslag / Wet huurtoeslag)
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `Toeslag` | 🟣 3 | Zorgtoeslag, huurtoeslag, etc. | ✅ Attributen in `Scenario` |
| `BijzondereNabetaling` | 🟣 3 | Uitzondering art. 2b Besluit huurtoeslag | ❌ Niet geïmplementeerd |

### 🟤 Parameters (jaarlijks)
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `Parameterset` | 🟤 4 | Container voor jaarparameters | ⚡ Losse `Parameter` declaraties |
| `Belastingtarief` | 🟤 4 | Schijfgrenzen en tarieven | ✅ Parameters |
| `HeffingskortingBedrag` | 🟤 4 | Bedragen en afbouwgrenzen | ✅ Parameters |
| `ZvwTarief` | 🟤 4 | Zvw bijdrage parameters | ✅ Parameters |
| `Toeslaggrens` | 🟤 4 | Inkomensgrenzen per toeslag | ✅ Parameters |
| `AOWBedrag` | 🟤 4 | AOW bedragen per huishoudtype | ✅ Parameter (alleen alleenstaand) |

### 🔴⚪ Advies & Risico
| Entiteit | Groep | Beschrijving | Implementatie |
|----------|-------|--------------|---------------|
| `Risicoprofiel` | 🔴 5 | Classificatie financiële kwetsbaarheid | ❌ Niet geïmplementeerd |
| `Signalering` | ⚪ 6 | Waarschuwingen en adviezen | ❌ Niet geïmplementeerd |
| `Scenariovergelijking` | ⚪ 6 | Vergelijking 0%/5%/10% | ⚡ Via meerdere Scenario runs |

---

## Mermaid Diagram

```mermaid
erDiagram

    NatuurlijkPersoon {
        string identificatie PK
        date geboortedatum
        int leeftijd
        string burgerservicenummer
        boolean isAOWGerechtigd
        boolean isAlleenstaand
        decimal aowOpbouwpercentage
    }

    Huishouden {
        string identificatie PK
        enum huishoudtype
        int aantalMinderjarigen
    }

    Verblijfsobject {
        string identificatie PK
        enum woningtype
        decimal huurprijs
        decimal wozWaarde
    }

    Pensioenuitvoerder {
        string identificatie PK
        string naam
        string uitvoerdertype
    }

    Pensioenaanspraak {
        string identificatie PK
        decimal maandelijksBedrag
        decimal jaarlijksBedrag
        decimal gekapitaliseerdeWaarde
        date ingangsdatum
        boolean isVerevend
    }

    Partner {
        string identificatie PK
        boolean isToeslagpartner
        decimal inkomen
    }

    Pensioenverevening {
        string identificatie PK
        decimal verevendPercentage
        boolean isToestemmingVerkregen
    }

    BedragIneensKeuze {
        string identificatie PK
        int opnamepercentage
        boolean kiestUitgesteldeBetaling
        date keuzedatum
        boolean isOnherroepelijk
    }

    UitgesteldeBetaling {
        string identificatie PK
        boolean isEligible
        date geplandeBetaaldatum
        date pensioenverlagingsdatum
    }

    Geschiktheidsbeoordeling {
        string identificatie PK
        boolean isOpIngangsdatum
        boolean isNietEerderGekozen
        boolean isMinimumPensioenOk
        boolean isPartnerToestemmingOk
        boolean isGeenHoogLaag
        decimal minimumRestbedrag
    }

    Berekeningsscenario {
        string identificatie PK
        int opnamepercentage
        enum scenariotype
    }

    BedragIneensResultaat {
        string identificatie PK
        decimal brutoBedragIneens
        decimal verlaagdPensioenMaand
        decimal verlaagdPensioenJaar
        decimal permanentVerlies
    }

    Inkomensjaar {
        string identificatie PK
        enum jaartype
        decimal aowUitkering
        decimal aanvullendPensioen
        decimal bedragIneens
        decimal overigInkomen
        decimal brutoInkomen
        decimal toetsingsinkomen
    }

    Belastingaanslag {
        string identificatie PK
        decimal belastingBox1Bruto
        decimal zvwBijdrage
        decimal totaleHeffingskortingen
        decimal belastingNaKortingen
        decimal nettoInkomen
    }

    Heffingskorting {
        string identificatie PK
        enum kortingtype
        decimal maximaalBedrag
        decimal berekendBedrag
        boolean isVolledigToegepast
    }

    Toeslag {
        string identificatie PK
        enum toeslagtype
        decimal bedragZonderOpname
        decimal bedragMetOpname
        decimal verlies
        boolean vervaltVolledig
    }

    BijzondereNabetaling {
        string identificatie PK
        boolean isAangevraagd
        boolean isGoedgekeurd
    }

    Parameterset {
        string identificatie PK
        int belastingjaar
        date geldigVanaf
        date geldigTot
    }

    Belastingtarief {
        string identificatie PK
        decimal schijf1Grens
        decimal schijf2Grens
        decimal tariefSchijf1AOW
        decimal tariefSchijf1NietAOW
        decimal tariefSchijf2
        decimal tariefSchijf3
    }

    HeffingskortingBedrag {
        string identificatie PK
        enum kortingtype
        decimal maximaalBedrag
        decimal afbouwgrens
        decimal afbouwpercentage
        decimal afbouweindgrens
    }

    ZvwTarief {
        string identificatie PK
        decimal bijdragepercentage
        decimal maximaleGrondslag
    }

    Toeslaggrens {
        string identificatie PK
        enum toeslagtype
        decimal inkomensgrensAlleenstaand
        decimal inkomensgrensPartners
        decimal vermogensgrensAlleenstaand
        decimal vermogensgrensPartners
        decimal maximaalBedrag
    }

    AOWBedrag {
        string identificatie PK
        decimal brutoAlleenstaand
        decimal brutoPartners
        int aowLeeftijd
    }

    Risicoprofiel {
        string identificatie PK
        boolean isToeslagafhankelijk
        boolean heeftSchulden
        boolean heeftLaagInkomen
        enum risicocategorie
    }

    Signalering {
        string identificatie PK
        enum ernst
        string code
        string titel
        string bericht
        string wettelijkeBasis
    }

    Scenariovergelijking {
        string identificatie PK
        int aanbevolenPercentage
        string aanbevelingsreden
    }

    NatuurlijkPersoon ||--|| Huishouden : "behoort tot"
    NatuurlijkPersoon ||--o| Verblijfsobject : "heeft als verblijfsobject"
    NatuurlijkPersoon ||--o| Partner : "heeft als partner"
    NatuurlijkPersoon ||--|{ Pensioenaanspraak : "heeft aanspraak op"
    NatuurlijkPersoon ||--o{ Pensioenverevening : "heeft verevening met"
    NatuurlijkPersoon ||--o{ BedragIneensKeuze : "maakt keuze voor"
    NatuurlijkPersoon ||--|{ Berekeningsscenario : "heeft scenario"
    NatuurlijkPersoon ||--|| Risicoprofiel : "heeft profiel"

    Pensioenaanspraak }|--|| Pensioenuitvoerder : "is ondergebracht bij"
    Pensioenaanspraak ||--o| Pensioenverevening : "is verevend via"

    BedragIneensKeuze ||--o| UitgesteldeBetaling : "heeft optie voor"
    BedragIneensKeuze ||--|| Geschiktheidsbeoordeling : "is beoordeeld door"

    Berekeningsscenario ||--|| BedragIneensResultaat : "resulteert in"
    Berekeningsscenario ||--|{ Inkomensjaar : "bevat inkomen voor"
    Berekeningsscenario ||--|{ Toeslag : "bevat toeslag"
    Berekeningsscenario ||--o{ Signalering : "genereert"

    Inkomensjaar ||--|| Belastingaanslag : "leidt tot"
    Belastingaanslag ||--|{ Heffingskorting : "bevat korting"

    Toeslag ||--o| BijzondereNabetaling : "heeft uitzondering"

    Parameterset ||--|{ Belastingtarief : "definieert"
    Parameterset ||--|{ HeffingskortingBedrag : "definieert"
    Parameterset ||--|{ ZvwTarief : "definieert"
    Parameterset ||--|{ Toeslaggrens : "definieert"
    Parameterset ||--|{ AOWBedrag : "definieert"

    Scenariovergelijking ||--|| NatuurlijkPersoon : "is opgesteld voor"
    Scenariovergelijking ||--|{ Berekeningsscenario : "vergelijkt"
```

---

## Gerelateerde Documenten

- [`objectmodel_groepen.mmd`](objectmodel_groepen.mmd) - **Flowchart met gekleurde groepen** (visuele classificatie)
- [`objectmodel_erd.mmd`](objectmodel_erd.mmd) - ERD diagram (alleen entiteiten en relaties)
- [`begrippen_mapping.md`](begrippen_mapping.md) - Rosetta Stone mapping NORA ↔ Rules JSON ↔ Wetgeving ↔ Regelspraak
- [`rules/bedrag_ineens_rules.json`](rules/bedrag_ineens_rules.json) - Volledige regelset
- [`PLAN_MVP_v2.md`](PLAN_MVP_v2.md) - Implementatie plan met regelspraak
