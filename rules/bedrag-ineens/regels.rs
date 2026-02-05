// Bedrag Ineens - Regelspraak Regels
// Berekeningen in dependency order

// ============================================================================
// PHASE 1: BEDRAG INEENS BASISBEREKENINGEN
// ============================================================================

Regel Bereken pensioen per jaar
    geldig altijd
        Het pensioen per jaar van een Scenario moet berekend worden als
            het aanvullend pensioen per maand van zijn persoon maal 12.

Regel Bereken bedrag ineens
    geldig altijd
        Het bedrag ineens van een Scenario moet berekend worden als
            het pensioenvermogen van zijn persoon maal
            het opname percentage van het scenario gedeeld door 100.

Regel Bereken resterend pensioen
    geldig altijd
        Het resterend pensioen per jaar van een Scenario moet berekend worden als
            het pensioen per jaar van het scenario maal
            (100 min het opname percentage van het scenario) gedeeld door 100.

Regel Bereken permanent verlies
    geldig altijd
        Het permanent verlies per jaar van een Scenario moet berekend worden als
            het pensioen per jaar van het scenario min
            het resterend pensioen per jaar van het scenario.

// ============================================================================
// PHASE 2: BRUTO INKOMEN
// ============================================================================

Regel Bereken inkomen
    geldig altijd
        Het inkomen van een Scenario moet berekend worden als
            het AOW inkomen van zijn persoon plus
            het resterend pensioen per jaar van het scenario plus
            het bedrag ineens van het scenario.

// ============================================================================
// PHASE 3: BELASTING
// ============================================================================

Regel Bereken Zvw
    geldig altijd
        De Zvw bijdrage van een Scenario moet berekend worden als
            de minimale waarde van het inkomen van het scenario en de Zvw maximum
            maal het Zvw percentage.

Regel Bereken belasting eerste schijf
    geldig altijd
        De belasting eerste schijf van een Scenario moet berekend worden als
            de minimale waarde van het inkomen van het scenario en de eerste schijfgrens
            maal het tarief eerste schijf AOW.

Regel Bereken belasting tweede schijf
    geldig altijd
        De belasting tweede schijf van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de minimale waarde van het inkomen van het scenario en de tweede schijfgrens
             min de eerste schijfgrens)
            maal het tarief tweede schijf.

Regel Bereken belasting derde schijf
    geldig altijd
        De belasting derde schijf van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (het inkomen van het scenario min de tweede schijfgrens)
            maal het tarief derde schijf.

Regel Bereken belasting box1
    geldig altijd
        De belasting box1 van een Scenario moet berekend worden als
            de belasting eerste schijf van het scenario plus
            de belasting tweede schijf van het scenario plus
            de belasting derde schijf van het scenario.

// ============================================================================
// PHASE 4: HEFFINGSKORTINGEN
// ============================================================================

Regel Bereken algemene heffingskorting
    geldig altijd
        De algemene heffingskorting van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de AHK maximum AOW min
             (de maximale waarde van 0 € en
              (het inkomen van het scenario min de AHK afbouwgrens))
             maal het AHK afbouw percentage AOW).

Regel Bereken ouderenkorting onder grens
    geldig altijd
        De ouderenkorting van een Scenario moet gesteld worden op de OK maximum
        indien het inkomen van het scenario is kleiner of gelijk aan de OK afbouwgrens.

Regel Bereken ouderenkorting met afbouw
    geldig altijd
        De ouderenkorting van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de OK maximum min
             (het inkomen van het scenario min de OK afbouwgrens)
             maal het OK afbouw percentage)
        indien het inkomen van het scenario is groter dan de OK afbouwgrens.

Regel Initialiseer ouderenkorting
    geldig altijd
        De ouderenkorting van een Scenario moet geïnitialiseerd worden op 0 €.

Regel Bereken alleenstaande ouderenkorting voor alleenstaanden
    geldig altijd
        De alleenstaande ouderenkorting van een Scenario moet gesteld worden op de AOK bedrag
        indien zijn persoon is alleenstaand.

Regel Initialiseer alleenstaande ouderenkorting
    geldig altijd
        De alleenstaande ouderenkorting van een Scenario moet geïnitialiseerd worden op 0 €.

Regel Bereken totale heffingskortingen
    geldig altijd
        De totale heffingskortingen van een Scenario moet berekend worden als
            de algemene heffingskorting van het scenario plus
            de ouderenkorting van het scenario plus
            de alleenstaande ouderenkorting van het scenario.

Regel Bereken belasting na heffingskortingen
    geldig altijd
        De belasting na heffingskortingen van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de belasting box1 van het scenario min
             de totale heffingskortingen van het scenario).

// ============================================================================
// PHASE 5: TOESLAGEN
// ============================================================================

Regel Bereken zorgtoeslag boven grens
    geldig altijd
        De zorgtoeslag van een Scenario moet gesteld worden op 0 €
        indien het inkomen van het scenario is groter of gelijk aan de ZT grens alleenstaand.

Regel Bereken zorgtoeslag onder grens
    geldig altijd
        De zorgtoeslag van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de ZT maximum alleenstaand min
             (de maximale waarde van 0 € en
              (het inkomen van het scenario min de ZT drempel))
             maal het ZT afbouw percentage)
        indien het inkomen van het scenario is kleiner dan de ZT grens alleenstaand.

Regel Bereken huurtoeslag boven grens
    geldig altijd
        De huurtoeslag van een Scenario moet gesteld worden op 0 €
        indien het inkomen van het scenario is groter dan de HT grens derde.

Regel Bereken huurtoeslag onder grens
    geldig altijd
        De huurtoeslag van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de HT maximum maal
             (de HT grens derde min het inkomen van het scenario) gedeeld door
             (de HT grens derde min de HT grens eerste))
        indien het inkomen van het scenario is kleiner of gelijk aan de HT grens derde.

// ============================================================================
// PHASE 6: BESCHIKBAAR INKOMEN
// ============================================================================

Regel Bereken beschikbaar inkomen
    geldig altijd
        Het beschikbaar inkomen van een Scenario moet berekend worden als
            het inkomen van het scenario min
            de Zvw bijdrage van het scenario min
            de belasting na heffingskortingen van het scenario.

Regel Bereken besteedbaar inkomen
    geldig altijd
        Het besteedbaar inkomen van een Scenario moet berekend worden als
            het beschikbaar inkomen van het scenario min
            de jaarlijkse zorgkosten plus
            de zorgtoeslag van het scenario.

Regel Bereken besteedbaar inkomen incl huurtoeslag
    geldig altijd
        Het besteedbaar inkomen incl huurtoeslag van een Scenario moet berekend worden als
            het besteedbaar inkomen van het scenario plus
            de huurtoeslag van het scenario.
