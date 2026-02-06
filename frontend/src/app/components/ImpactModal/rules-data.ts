// Regelspraak rules extracted from regels.rs
// This provides traceability from calculations to the actual rules

export const RULES = {
  // PHASE 1: BEDRAG INEENS BASISBEREKENINGEN
  pensioenPerJaar: {
    name: "Bereken pensioen per jaar",
    number: "regels.rs:8-11",
    text: `Regel Bereken pensioen per jaar
    geldig altijd
        Het pensioen per jaar van een Scenario moet berekend worden als
            het aanvullend pensioen per maand van zijn persoon maal 12.`,
    explanation: "Dit zet uw maandelijkse aanvullende pensioen om naar een jaarbedrag, zodat we het kunnen vergelijken met andere jaarinkomsten."
  },

  bedragIneens: {
    name: "Bereken bedrag ineens",
    number: "regels.rs:13-17",
    text: `Regel Bereken bedrag ineens
    geldig altijd
        Het bedrag ineens van een Scenario moet berekend worden als
            het pensioenvermogen van zijn persoon maal
            het opname percentage van het scenario gedeeld door 100.`,
    explanation: "Het bedrag ineens is een percentage van uw totale pensioenvermogen dat u eenmalig opneemt."
  },

  resterendPensioen: {
    name: "Bereken resterend pensioen",
    number: "regels.rs:19-23",
    text: `Regel Bereken resterend pensioen
    geldig altijd
        Het resterend pensioen per jaar van een Scenario moet berekend worden als
            het pensioen per jaar van het scenario maal
            (100 min het opname percentage van het scenario) gedeeld door 100.`,
    explanation: "Na de opname blijft er minder pensioenvermogen over, waardoor uw jaarlijkse pensioen permanent lager wordt."
  },

  permanentVerlies: {
    name: "Bereken permanent verlies",
    number: "regels.rs:25-29",
    text: `Regel Bereken permanent verlies
    geldig altijd
        Het permanent verlies per jaar van een Scenario moet berekend worden als
            het pensioen per jaar van het scenario min
            het resterend pensioen per jaar van het scenario.`,
    explanation: "Dit is het verschil tussen uw volledige pensioen en het resterende pensioen - dit bedrag verliest u permanent elk jaar."
  },

  // PHASE 2: BRUTO INKOMEN
  inkomenJaarMetOpname: {
    name: "Bereken inkomen jaar met opname",
    number: "regels.rs:43-49",
    text: `Regel Bereken inkomen jaar met opname
    geldig altijd
        Het inkomen van een Scenario moet berekend worden als
            het AOW inkomen van zijn persoon plus
            het resterend pensioen per jaar van het scenario plus
            het bedrag ineens van het scenario
        indien het scenario is jaar met opname.`,
    explanation: "In het jaar van opname wordt het bedrag ineens bij uw inkomen geteld, wat impact heeft op belasting en toeslagen."
  },

  // PHASE 3: BELASTING
  berekenZvw: {
    name: "Bereken Zvw",
    number: "regels.rs:55-59",
    text: `Regel Bereken Zvw
    geldig altijd
        De Zvw bijdrage van een Scenario moet berekend worden als
            de minimale waarde van het inkomen van het scenario en de Zvw maximum
            maal het Zvw percentage.`,
    explanation: "De Zvw (Zorgverzekeringswet) bijdrage wordt berekend over uw inkomen, maar maximaal tot €73.031."
  },

  belastingEersteSchijf: {
    name: "Bereken belasting eerste schijf",
    number: "regels.rs:61-65",
    text: `Regel Bereken belasting eerste schijf
    geldig altijd
        De belasting eerste schijf van een Scenario moet berekend worden als
            de minimale waarde van het inkomen van het scenario en de eerste schijfgrens
            maal het tarief eerste schijf AOW.`,
    explanation: "Inkomen tot €40.021 wordt belast tegen 19,07%. Dit is het laagste belastingtarief."
  },

  belastingTweedeSchijf: {
    name: "Bereken belasting tweede schijf",
    number: "regels.rs:67-73",
    text: `Regel Bereken belasting tweede schijf
    geldig altijd
        De belasting tweede schijf van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de minimale waarde van het inkomen van het scenario en de tweede schijfgrens
             min de eerste schijfgrens)
            maal het tarief tweede schijf.`,
    explanation: "Inkomen tussen €40.021 en €75.518 wordt belast tegen 36,93%. Dit is het middentarief."
  },

  belastingDerdeSchijf: {
    name: "Bereken belasting derde schijf",
    number: "regels.rs:75-80",
    text: `Regel Bereken belasting derde schijf
    geldig altijd
        De belasting derde schijf van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (het inkomen van het scenario min de tweede schijfgrens)
            maal het tarief derde schijf.`,
    explanation: "Inkomen boven €75.518 wordt belast tegen 49,50%. Dit is het hoogste belastingtarief."
  },

  belastingBox1: {
    name: "Bereken belasting box1",
    number: "regels.rs:82-87",
    text: `Regel Bereken belasting box1
    geldig altijd
        De belasting box1 van een Scenario moet berekend worden als
            de belasting eerste schijf van het scenario plus
            de belasting tweede schijf van het scenario plus
            de belasting derde schijf van het scenario.`,
    explanation: "De totale belasting is de som van belasting uit alle drie de schijven."
  },

  // PHASE 4: HEFFINGSKORTINGEN
  algemeneHeffingskorting: {
    name: "Bereken algemene heffingskorting",
    number: "regels.rs:93-100",
    text: `Regel Bereken algemene heffingskorting
    geldig altijd
        De algemene heffingskorting van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de AHK maximum AOW min
             (de maximale waarde van 0 € en
              (het inkomen van het scenario min de AHK afbouwgrens))
             maal het AHK afbouw percentage AOW).`,
    explanation: "De algemene heffingskorting (AHK) van maximaal €1.735 wordt geleidelijk verminderd als uw inkomen boven €24.813 komt (afbouw 3,421%)."
  },

  ouderenkorting: {
    name: "Bereken ouderenkorting met afbouw",
    number: "regels.rs:107-114",
    text: `Regel Bereken ouderenkorting met afbouw
    geldig altijd
        De ouderenkorting van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de OK maximum min
             (het inkomen van het scenario min de OK afbouwgrens)
             maal het OK afbouw percentage)
        indien het inkomen van het scenario is groter dan de OK afbouwgrens.`,
    explanation: "De ouderenkorting van maximaal €1.835 wordt verminderd als uw inkomen boven €44.770 komt (afbouw 15%)."
  },

  alleenstaandeOuderenkorting: {
    name: "Bereken alleenstaande ouderenkorting voor alleenstaanden",
    number: "regels.rs:120-123",
    text: `Regel Bereken alleenstaande ouderenkorting voor alleenstaanden
    geldig altijd
        De alleenstaande ouderenkorting van een Scenario moet gesteld worden op de AOK bedrag
        indien zijn persoon is alleenstaand.`,
    explanation: "Als u alleenstaand bent, ontvangt u een extra korting van €532 zonder afbouw."
  },

  // PHASE 5: TOESLAGEN
  zorgtoeslag: {
    name: "Bereken zorgtoeslag onder grens",
    number: "regels.rs:152-160",
    text: `Regel Bereken zorgtoeslag onder grens
    geldig altijd
        De zorgtoeslag van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de ZT maximum alleenstaand min
             (de maximale waarde van 0 € en
              (het inkomen van het scenario min de ZT drempel))
             maal het ZT afbouw percentage)
        indien het inkomen van het scenario is kleiner dan de ZT grens alleenstaand.`,
    explanation: "Zorgtoeslag van maximaal €1.800 wordt afgebouwd vanaf €25.437 en vervalt bij inkomen boven €37.496 (afbouw 13,22%)."
  },

  huurtoeslag: {
    name: "Bereken huurtoeslag onder grens",
    number: "regels.rs:167-174",
    text: `Regel Bereken huurtoeslag onder grens
    geldig altijd
        De huurtoeslag van een Scenario moet berekend worden als
            de maximale waarde van 0 € en
            (de HT maximum maal
             (de HT grens derde min het inkomen van het scenario) gedeeld door
             (de HT grens derde min de HT grens eerste))
        indien het inkomen van het scenario is kleiner of gelijk aan de HT grens derde.`,
    explanation: "Huurtoeslag van maximaal €2.900 wordt berekend met een sliding scale tussen €26.000 en €38.000 inkomen."
  },

  // PHASE 6: BESCHIKBAAR INKOMEN
  beschikbaarInkomen: {
    name: "Bereken beschikbaar inkomen",
    number: "regels.rs:180-185",
    text: `Regel Bereken beschikbaar inkomen
    geldig altijd
        Het beschikbaar inkomen van een Scenario moet berekend worden als
            het inkomen van het scenario min
            de Zvw bijdrage van het scenario min
            de belasting na heffingskortingen van het scenario.`,
    explanation: "Beschikbaar inkomen is wat overblijft na aftrek van Zvw bijdrage en belasting (na kortingen)."
  },

  besteedbarinInkomen: {
    name: "Bereken besteedbaar inkomen",
    number: "regels.rs:187-192",
    text: `Regel Bereken besteedbaar inkomen
    geldig altijd
        Het besteedbaar inkomen van een Scenario moet berekend worden als
            het beschikbaar inkomen van het scenario min
            de jaarlijkse zorgkosten plus
            de zorgtoeslag van het scenario.`,
    explanation: "Besteedbaar inkomen is beschikbaar inkomen minus zorgkosten (€2.100/jaar) plus zorgtoeslag."
  }
};

// Helper function to get rule by key
export function getRule(key: keyof typeof RULES) {
  return RULES[key];
}
