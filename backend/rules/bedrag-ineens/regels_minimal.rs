// Testing Phase 1 + Phase 2 with mixed references

Regel Bereken pensioen per jaar
    geldig altijd
        Het pensioen per jaar van een Scenario moet berekend worden als
            het aanvullend pensioen per maand van zijn persoon maal 12.

Regel Bereken bruto bedrag ineens
    geldig altijd
        Het bruto bedrag ineens van een Scenario moet berekend worden als
            het pensioenvermogen van zijn persoon maal
            het opname percentage van het scenario gedeeld door 100.

Regel Bereken resterend pensioen
    geldig altijd
        Het resterend pensioen per jaar van een Scenario moet berekend worden als
            het pensioen per jaar van het scenario maal
            (100 min het opname percentage van het scenario) gedeeld door 100.

// Phase 2 - step by step
// Test: zijn persoon + het scenario (computed value)
Regel Bereken bruto inkomen
    geldig altijd
        Het bruto inkomen van een Scenario moet berekend worden als
            het AOW inkomen van zijn persoon plus
            het resterend pensioen per jaar van het scenario.
