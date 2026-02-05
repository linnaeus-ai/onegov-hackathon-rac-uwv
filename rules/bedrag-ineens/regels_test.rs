// Testing incrementally - Phase 1+2+3

// === PHASE 1: Bedrag Ineens ===
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

// === PHASE 2: Inkomen ===
Regel Bereken inkomen
    geldig altijd
        Het inkomen van een Scenario moet berekend worden als
            het AOW inkomen van zijn persoon plus
            het resterend pensioen per jaar van het scenario plus
            het bedrag ineens van het scenario plus
            het overig inkomen van zijn persoon.

// === PHASE 3: Belasting ===
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

Regel Bereken belasting box1 bruto
    geldig altijd
        De belasting box1 bruto van een Scenario moet berekend worden als
            de belasting eerste schijf van het scenario plus
            de belasting tweede schijf van het scenario plus
            de belasting derde schijf van het scenario.
