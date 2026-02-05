// Bedrag Ineens - Gegevensspraak Definities
// Phase 1: Minimale objecttypes voor bedrag ineens berekening

// ============================================================================
// EENHEIDSYSTEMEN
// ============================================================================

Eenheidsysteem Valuta
    de euro (mv: euros) EUR €

Eenheidsysteem Tijd
    de dag dg
    de maand mnd
    het jaar jr = 12 mnd

// ============================================================================
// DOMEINEN
// ============================================================================

Domein Bedrag is van het type Numeriek (getal met 2 decimalen)

// ============================================================================
// OBJECTTYPES
// ============================================================================

// Persoon: input data van de burger
Objecttype de Persoon (mv: Personen) (bezield)
    // Kenmerken (boolean flags)
    is AOW gerechtigd kenmerk (bijvoeglijk);
    is alleenstaand kenmerk (bijvoeglijk);

    // Inkomen inputs
    het AOW inkomen Bedrag;
    het aanvullend pensioen per maand Bedrag;
    het pensioenvermogen Bedrag;
    het overig inkomen Bedrag;

    // Wonen
    de huur per maand Bedrag;

// Scenario: berekening voor een specifiek opname percentage
Objecttype het Scenario (mv: Scenarios)
    // INPUT
    het opname percentage Numeriek;

    // PHASE 1: Bedrag ineens basisberekeningen
    het pensioen per jaar Bedrag;
    het bedrag ineens Bedrag;
    het resterend pensioen per jaar Bedrag;
    het permanent verlies per jaar Bedrag;

    // PHASE 2: Inkomen
    het inkomen Bedrag;

    // PHASE 3: Belasting
    de Zvw bijdrage Bedrag;
    de belasting eerste schijf Bedrag;
    de belasting tweede schijf Bedrag;
    de belasting derde schijf Bedrag;
    de belasting box1 bruto Bedrag;

    // PHASE 4: Heffingskortingen
    de algemene heffingskorting Bedrag;
    de ouderenkorting Bedrag;
    de alleenstaande ouderenkorting Bedrag;
    de totale heffingskortingen Bedrag;
    de belasting na heffingskortingen Bedrag;

    // PHASE 5: Toeslagen
    de zorgtoeslag Bedrag;
    de huurtoeslag Bedrag;

    // PHASE 6: Resultaat
    het netto inkomen Bedrag;

// ============================================================================
// FEITTYPES (Relaties)
// ============================================================================

Feittype scenario van persoon
    het scenario Scenario
    de persoon Persoon
    een scenario betreft de berekening voor een persoon

// ============================================================================
// PARAMETERS (2024 waarden - EK Nota)
// Waarden worden via JSON input geleverd
// ============================================================================

// AOW
Parameter het AOW bruto alleenstaand: Bedrag

// Box 1 Tarieven (AOW-gerechtigden)
Parameter de eerste schijfgrens: Bedrag
Parameter de tweede schijfgrens: Bedrag
Parameter het tarief eerste schijf AOW: Numeriek
Parameter het tarief tweede schijf: Numeriek
Parameter het tarief derde schijf: Numeriek

// Zvw
Parameter het Zvw percentage: Numeriek
Parameter de Zvw maximum: Bedrag

// Algemene Heffingskorting (AOW)
Parameter de AHK maximum AOW: Bedrag
Parameter de AHK afbouwgrens: Bedrag
Parameter het AHK afbouw percentage AOW: Numeriek

// Ouderenkorting
Parameter de OK maximum: Bedrag
Parameter de OK afbouwgrens: Bedrag
Parameter het OK afbouw percentage: Numeriek

// Alleenstaande Ouderenkorting
Parameter de AOK bedrag: Bedrag

// Zorgtoeslag
Parameter de ZT grens alleenstaand: Bedrag
Parameter de ZT maximum alleenstaand: Bedrag
Parameter de ZT drempel: Bedrag
Parameter het ZT afbouw percentage: Numeriek

// Huurtoeslag (vereenvoudigd)
Parameter de HT grens eerste: Bedrag
Parameter de HT grens tweede: Bedrag
Parameter de HT grens derde: Bedrag
