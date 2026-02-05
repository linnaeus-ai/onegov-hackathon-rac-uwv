# Gevolgen Bedrag Ineens voor Gepensioneerden

> Bronnen: PFZW, Salaris Vanmorgen, NN, Pensioenfonds PGB, diverse pensioenfondsen

## Wat is het Bedrag Ineens?

Bij pensionering kun je kiezen om maximaal **10% van je opgebouwde pensioen** in één keer te laten uitbetalen. Dit bedrag is vrij besteedbaar, maar heeft belangrijke gevolgen.

## Belangrijkste Gevolgen

### 1. Permanent Lager Maandelijks Pensioen

- Je maandelijkse pensioenuitkering wordt **levenslang lager**
- De resterende 90% wordt maandelijks uitgekeerd

### 2. Belastinggevolgen

| Aspect | Gevolg |
|--------|--------|
| **Hoger jaarinkomen** | Bedrag ineens telt mee als inkomen in dat jaar |
| **Hogere belastingschijf** | Mogelijk val je (deels) in een hogere schijf |
| **Heffingskortingen** | Kunnen lager uitvallen door hoger inkomen |
| **Netto voordeel** | Kan aanzienlijk lager zijn dan het bruto bedrag |

**Rekenvoorbeeld** (uit Salaris Vanmorgen):
- Jaarlijks pensioen: €10.000
- Kapitaalwaarde: ~€230.000
- Nabestaandenpensioen waarde: ~€30.000
- Maximale opname: 10% van €200.000 = **€20.000 bruto**
- Netto (na belasting): aanzienlijk minder

### 3. Gevolgen voor Toeslagen (KRITIEK!)

Dit is het **grootste risico** voor gepensioneerden met een laag inkomen:

| Toeslag | Risico |
|---------|--------|
| **Zorgtoeslag** | Kan lager worden of volledig vervallen |
| **Huurtoeslag** | Kan lager worden of volledig vervallen |
| **Kindgebonden budget** | Kan worden aangepast |
| **AIO** (Aanvullende Inkomensvoorziening Ouderen) | Kan worden gekort |

**Let op:** Je moet mogelijk ontvangen toeslagen **terugbetalen**!

#### Bijzondere regel huurtoeslag
Alleen voor huurtoeslag kun je vragen om een bijzondere nabetaling niet mee te tellen. Voor andere toeslagen (zorgtoeslag, kindgebonden budget) telt het inkomen **altijd** mee.

### 4. Gevolgen voor Uitkeringen

| Uitkering/Regeling | Risico |
|--------------------|--------|
| Bijstandsuitkering | Kan worden gekort |
| Anw-uitkering | Kan worden aangepast |
| AOW-toeslag | Kan worden verlaagd |
| Lokale regelingen | Per gemeente verschillend |

### 5. Combinatie met Hoog-Laag Pensioen

**Niet mogelijk!** Als je kiest voor bedrag ineens, kun je **niet** ook kiezen voor een hoog-laag constructie.

## Wie loopt het meeste risico?

Volgens Nibud zijn dit de **kwetsbare groepen**:

1. **Mensen met toeslagen** - risico op terugvordering
2. **Mensen met schulden** - geld kan naar schuldeisers gaan
3. **Laaggeletterden** - complexiteit moeilijk te overzien
4. **Lage inkomens** - toeslagenverlies kan opname tenietdoen

## Mogelijke Belastingvoordeel: Uitgestelde Uitbetaling

Er is één scenario waarin uitstellen gunstig kan zijn:

**Voorwaarden:**
- Je gaat met pensioen in de maand waarin je AOW ingaat
- OF op de eerste dag van de maand direct daarna

**Voordeel:**
- Uitbetaling in januari van het **volgende** jaar
- In dat jaar betaal je geen premies volksverzekeringen meer
- Daardoor lagere belastingdruk

## Vereisten voor Opname

| Vereiste | Details |
|----------|---------|
| **Minimum resterend pensioen** | €632,63 per jaar (2026) |
| **Toestemming partner** | Verplicht als nabestaandenpensioen daalt |
| **Timing** | Alleen op pensioendatum |

## Verworpen Amendement

Het CDA stelde voor om bedrag ineens **niet** mee te tellen voor toeslagenberekening. Dit amendement is **verworpen** in de Tweede Kamer vanwege:
- Uitvoeringsrisico's
- Precedentwerking
- Kosten

## Samenvatting voor de Challenge

Voor de hackathon tool moet rekening worden gehouden met:

1. **Belastingberekening**
   - Box 1 inkomen verhoogd met bedrag ineens
   - Progressieve tarieven toepassen
   - Heffingskortingen herberekenen

2. **Toeslagenberekening**
   - Toetsingsinkomen bepalen
   - Per toeslag drempelwaarden checken
   - Terugvorderingsrisico berekenen

3. **Scenario's vergelijken**
   - 0% opname
   - 5% opname
   - 10% opname
   - Hoog-laag alternatief
   - Uitgestelde uitbetaling (januari volgend jaar)

4. **Waarschuwingen tonen**
   - Bij overschrijding toeslaggrenzen
   - Bij combinatie met andere regelingen
   - Bij lage resterende pensioen

## Relevante Links

- [PFZW uitleg](https://www.pfzw.nl/over-pfzw/nieuwe-regels/bedragineens.html)
- [Salaris Vanmorgen analyse](https://www.salarisvanmorgen.nl/2025/01/17/bedrag-ineens-contouren-en-knelpunten/)
- [NN uitleg](https://www.nn.nl/Particulier/Pensioen/Bedrag-ineens.htm)
- [Pensioenfonds PGB](https://www.pensioenfondspgb.nl/deelnemers/mijn-situatie-verandert/bedrag-ineens/)
