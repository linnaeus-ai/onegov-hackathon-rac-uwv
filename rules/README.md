# Bedrag Ineens Regels

Deze map bevat de regels geextraheerd uit de officiele Nederlandse wetgeving en documentatie voor de keuze "bedrag ineens" bij pensioen.

## Overzicht

Het bestand `bedrag_ineens_rules.json` bevat een complete, gestructureerde weergave van alle regels die nodig zijn om een keuzeondersteunings-tool te implementeren voor de hackathon-challenge.

## Brondocumenten

De regels zijn geextraheerd uit:
- **Wet herziening bedrag ineens** (Kamerstukken 36154)
- **EK Nota naar aanleiding van verslag Wet herziening bedrag ineens.pdf**
- Challenge brief van DigiCampus / Rules as Code
- **Pensioenwet** (artikelen 48 en 48a)
- **Besluit uitvoering Pensioenwet en Wet verplichte beroepspensioenregeling**

## Regelstructuur

Het JSON-bestand is georganiseerd in de volgende secties:

### 1. **Metadata en Constanten**
- Belastingjaar parameters (2024)
- AOW-leeftijd (67)
- Maximaal percentage bedrag ineens (10%)
- Uitkeringspatroon (90-10-90)

### 2. **Geschiktheidsregels**
- Wie kan kiezen voor bedrag ineens
- Timing-vereisten
- Voorwaarden voor uitgestelde betaling
- Uitsluiting hoog-laag pensioen
- **Minimum resterend pensioen** (€632,63/jaar in 2026)
- **Partner toestemming** indien nabestaandenpensioen daalt

### 3. **Berekeningsregels**

#### Hoogte Bedrag Ineens
- Formule: `gekapitaliseerde_pensioenwaarde * (bedrag_ineens_percentage / 100)`
- Maximum: 10% van totale pensioenwaarde

#### Verlaagd Maandelijks Pensioen
- Directe betaling: pensioen direct verlaagd naar 90% bij aanvang
- Uitgestelde betaling: pensioen OOK direct verlaagd naar 90% bij aanvang (niet op betalingsdatum)

#### Belastingberekeningen
- Progressieve inkomstenbelasting (schijven voor AOW-gerechtigden: 19.07%, 36.93% en 49.50%)
- Heffingskortingen (algemene heffingskorting, ouderenkorting)
- Inkomensafhankelijke bijdrage Zvw: 5.45% tot max €73.031

#### Toeslagberekeningen
- **Zorgtoeslag**: inkomensgrenzen €37.496 (alleenstaand) / €47.368 (met partner)
- **Huurtoeslag**: inkomensgrenzen €28.550 (alleenstaand AOW) / €38.800 (meerpersoonshuishouden AOW)
- **Huurtoeslag bijzondere uitzondering**: bedrag ineens kan op verzoek worden uitgezonderd als bijzondere nabetaling
- **AIO** (Aanvullende Inkomensvoorziening Ouderen): voor ouderen met onvolledige AOW-opbouw
- **Toetsingsinkomen**: bedrag ineens telt alleen mee in jaar van ontvangst

### 4. **Bijzondere Situaties**

#### Pensioenverevening bij Scheiding
- Keuze voor bedrag ineens leidt ook tot afkoop van verevend pensioen voor ex-partner
- Ex-partner ontvangt dan ook een bedrag ineens
- Bijzonder partnerpensioen wordt NIET geraakt

#### Meerdere Pensioenuitvoerders
- Bij meerdere uitvoerders kan bij elk apart gekozen worden voor bedrag ineens
- Optie tot waardeoverdracht om pensioenen samen te voegen

#### Overlijden voor Uitgestelde Betaling
- Pensioenuitvoerders moeten hierover informeren
- Bedrag ineens valt in nalatenschap

#### Samenloop met Wet Toekomst Pensioenen (Invaren)
- Na invaren kan pensioenhoogte gewijzigd zijn
- Bedrag ineens voor en na invaren kan verschillen

#### Schulden en Beslaglegging
- Bedrag ineens kan vatbaar zijn voor beslaglegging
- Gespaard bedrag telt mee voor vermogenstoetsen

### 5. **Scenariodefinities**
Drie standaard scenario's:
- **0% (Geen bedrag ineens)**: Volledig maandelijks pensioen behouden
- **5% (Gedeeltelijk)**: Gematigde eenmalige uitkering, kleine pensioenverlaging
- **10% (Maximaal)**: Maximale eenmalige uitkering, 10% pensioenverlaging

### 6. **Risicofactoren**
Identificeert financieel kwetsbare groepen en bijbehorende risico's:
- Toeslagverlies (hoge ernst)
- Hogere belastingdruk (gemiddelde ernst)
- Permanente inkomensverlaging (gemiddeld tot hoog)
- Beslag bij schulden (hoge ernst)
- Verlies kwijtschelding lokale belastingen (gemiddelde ernst)

### 7. **Keuzeondersteuning Framework**
- Gunstige situaties (geen toeslagafhankelijkheid, concrete behoefte aan geld, etc.)
- Ongunstige situaties (toeslagafhankelijk, weinig spaargeld, schulden)
- Kernvragen om gebruikers te stellen

### 8. **Informatieverplichtingen**
Wat pensioenuitvoerders moeten communiceren:
- Financiele gevolgen
- Fiscale gevolgen
- Gevolgen voor toeslagen
- Verwijzing naar informatiebronnen
- Optie uitgestelde betaling
- Onherroepelijkheid van de keuze

### 9. **Rekenvoorbeelden**
Drie gedetailleerde uitgewerkte voorbeelden uit de officiele documentatie:
1. **Laag inkomen** (€600/maand aanvullend pensioen)
2. **Midden inkomen** (€1.200/maand aanvullend pensioen)
3. **Hoger inkomen** (€2.100/maand aanvullend pensioen)

Elk voorbeeld toont:
- Scenario zonder bedrag ineens
- Scenario met 5% bedrag ineens
- Scenario met 10% bedrag ineens
- Impact op inkomen, belasting, toeslagen
- Vergelijking jaar van uitkering vs. volgende jaren

### 10. **Aannames**
Documenteert alle aannames en vereenvoudigingen:
- 2024 belasting-/toeslagparameters
- Geen inflatiemodellering
- Standaard CBS levensverwachtingstabellen
- Alleenstaand huishouden als default
- Volledige AOW-opbouw

### 11. **Wettelijke Beperkingen**
- Onherroepelijke keuze
- Timing-beperkingen
- Percentage maximum
- AFM-toezicht

### 12. **Beschikbare Tools**
Overheids- en externe tools die burgers kunnen gebruiken:
- Belastingdienst proefberekening
- Bedrag ineens tool (in ontwikkeling)
- Pensioenduidelijkheid.nl
- Mijnpensioenoverzicht.nl
- Nibud

## Gebruik

Dit JSON-bestand kan worden:
1. **Programmatisch geparseerd** om een rules engine te bouwen
2. **Gebruikt als referentie** voor het implementeren van berekeningen
3. **Gevalideerd** tegen testcases in de data-map
4. **Uitgebreid** met aanvullende regels of parameters

## Belangrijke Inzichten voor Implementatie

### Kritieke Regels om te Implementeren

1. **Minimum Resterend Pensioen**
   - Na opname moet minimaal €632,63/jaar (2026) aan pensioen resteren
   - Dit is een harde wettelijke eis - controleer EERST of dit mogelijk is
   - Formule: `(jaarlijks_pensioen * (1 - percentage/100)) >= 632.63`

2. **Het X-(100-X) Patroon**
   - Bij keuze voor X% bedrag ineens wordt het pensioen DIRECT verlaagd naar (100-X)%
   - Dit gebeurt op de pensioeningangsdatum, ook als betaling wordt uitgesteld
   - Voorbeeld: 10% opname → 90% van oorspronkelijk pensioen levenslang

3. **Toetsingsinkomen Impact**
   - Bedrag ineens telt als inkomen ALLEEN in het jaar van ontvangst
   - Dit kan tijdelijk diskwalificeren voor toeslagen
   - Het jaar erna kunnen toeslagen terugkeren (mogelijk hoger door lager pensioen)

4. **Huurtoeslag Bijzondere Uitzondering**
   - ALLEEN voor huurtoeslag kan het bedrag ineens op verzoek worden uitgezonderd
   - Aanvraag bij Belastingdienst/Toeslagen als "bijzondere nabetaling"
   - Dit geldt NIET voor zorgtoeslag, kindgebonden budget of AIO

5. **AIO Impact**
   - AIO-ontvangers zijn de meest kwetsbare groep
   - Bedrag ineens telt als inkomen EN als vermogen (indien gespaard)
   - Kan leiden tot volledige stopzetting AIO én terugvordering

6. **Progressieve Belasting Impact**
   - Bedrag ineens wordt belast tegen het marginale tarief
   - Kan inkomen in hogere belastingschijf duwen
   - Vooral impactvol voor middeninkomens

7. **Beperkingen Uitgestelde Betaling**
   - Alleen beschikbaar als pensioen start in zelfde maand als AOW of eerste dag maand erna
   - Betaling in januari volgend op AOW-jaar
   - Pensioen toch direct verlaagd bij aanvang

8. **Scheiding en Verevening**
   - Ex-partner ontvangt ook bedrag ineens uit verevend deel
   - Bijzonder partnerpensioen wordt niet geraakt
   - Deelnemer kent vaak niet de totale inkomenspositie van ex-partner

9. **Partner Toestemming**
   - Indien nabestaandenpensioen daalt door keuze voor bedrag ineens
   - Partner moet expliciet toestemming geven
   - Controleer dit in de intake-procedure

### Belangrijk voor Uitlegbaarheid

Om te voldoen aan de challenge-eis "explainability by design":

1. **Toon welke regels van toepassing zijn** op elke berekening
2. **Traceer berekeningen** stap voor stap (bruto -> belasting -> netto -> toeslagen -> besteedbaar)
3. **Benadruk afwegingen** (direct geld vs. permanente pensioenverlaging)
4. **Waarschuw voor risico's** voor kwetsbare groepen
5. **Vergelijk scenario's** naast elkaar met duidelijke visualisaties

### Benodigde Gegevens van Gebruikers

Om scenario's te berekenen, heb je nodig:
- Geboortedatum / AOW-leeftijd
- Pensioeningangsdatum
- Maandelijks pensioenbedrag (aanvullend)
- AOW-bedrag
- Huidig inkomen
- Huishoudsamenstelling
- Huursituatie (indien van toepassing)
- Huidige toeslagontvangst
- Eventuele ex-partner met verevend pensioen
- Pensioen bij meerdere uitvoerders

## Validatie

De rekenvoorbeelden in het JSON-bestand komen overeen met de officiele voorbeelden uit de Nota naar aanleiding van verslag (tabellen 1-6, pagina 6-9 van de PDF).

## Licentie

Deze regels zijn geextraheerd uit publieke Nederlandse wetgeving en overheidsdocumenten. De JSON-representatie wordt beschikbaar gesteld voor de hackathon onder de MIT-licentie.

## Vragen of Verbeteringen?

Dit is een werkende representatie voor de hackathon. Echte implementatie zou vereisen:
- Validatie door juridische experts
- Regelmatige updates bij wetswijzigingen
- Meer gedetailleerde gemeente-specifieke regels
- Afhandeling van randgevallen
- Integratie met officiele databronnen

---

*Gegenereerd voor de DigiCampus Rules as Code Hackathon, februari 2025*
*Versie 1.1.0 - Bijgewerkt met kritieke geschiktheidsregels en AIO*
