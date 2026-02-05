// Bedrag Ineens - Rules Implementation
// Based on rules/bedrag-ineens/regels.rs

// Parameters (2024 values from EK Nota)
export const PARAMETERS = {
  // AOW
  'AOW bruto alleenstaand': 19600,

  // Box 1 Tax brackets (AOW recipients)
  'eerste schijfgrens': 40021,
  'tweede schijfgrens': 75518,
  'tarief eerste schijf AOW': 0.1907,
  'tarief tweede schijf': 0.3693,
  'tarief derde schijf': 0.4950,

  // Zvw (Healthcare contribution)
  'Zvw percentage': 0.0545,
  'Zvw maximum': 73031,

  // Algemene Heffingskorting (General tax credit for AOW)
  'AHK maximum AOW': 1735,
  'AHK afbouwgrens': 24813,
  'AHK afbouw percentage AOW': 0.03421,

  // Ouderenkorting (Elderly credit)
  'OK maximum': 1835,
  'OK afbouwgrens': 44770,
  'OK afbouw percentage': 0.15,

  // Alleenstaande Ouderenkorting (Single elderly credit)
  'AOK bedrag': 532,

  // Zorgtoeslag (Healthcare benefit)
  'ZT grens alleenstaand': 37496,
  'ZT maximum alleenstaand': 1800,
  'ZT drempel': 25437,
  'ZT afbouw percentage': 0.1322,

  // Huurtoeslag (Housing benefit - simplified)
  'HT grens eerste': 26000,
  'HT grens tweede': 32000,
  'HT grens derde': 38000,
  'HT maximum': 2900
};

/**
 * Calculate all scenario values based on the Regelspraak rules
 * @param {Object} persoon - Person data
 * @param {number} opnamePercentage - Withdrawal percentage (0-10)
 * @returns {Object} All calculated values
 */
export function calculateScenario(persoon, opnamePercentage) {
  const p = PARAMETERS;

  // ===========================================================================
  // PHASE 1: BEDRAG INEENS BASISBEREKENINGEN
  // ===========================================================================

  // Regel: Bereken pensioen per jaar
  // het pensioen per jaar = aanvullend pensioen per maand * 12
  const pensioenPerJaar = persoon.aanvullendPensioenPerMaand * 12;

  // Regel: Bereken bedrag ineens
  // het bedrag ineens = pensioenvermogen * opname percentage / 100
  const bedragIneens = persoon.pensioenvermogen * (opnamePercentage / 100);

  // Regel: Bereken resterend pensioen
  // het resterend pensioen per jaar = pensioen per jaar * (100 - opname percentage) / 100
  const resterendPensioenPerJaar = pensioenPerJaar * (100 - opnamePercentage) / 100;

  // Regel: Bereken permanent verlies
  // het permanent verlies per jaar = pensioen per jaar - resterend pensioen per jaar
  const permanentVerliesPerJaar = pensioenPerJaar - resterendPensioenPerJaar;

  // ===========================================================================
  // PHASE 2: BRUTO INKOMEN
  // ===========================================================================

  // Regel: Bereken inkomen
  // het inkomen = AOW inkomen + resterend pensioen per jaar + bedrag ineens + overig inkomen
  const inkomen = persoon.aowInkomen + resterendPensioenPerJaar + bedragIneens + persoon.overigInkomen;

  // ===========================================================================
  // PHASE 3: BELASTING
  // ===========================================================================

  // Regel: Bereken Zvw
  // de Zvw bijdrage = min(inkomen, Zvw maximum) * Zvw percentage
  const zvwBijdrage = Math.min(inkomen, p['Zvw maximum']) * p['Zvw percentage'];

  // Regel: Bereken belasting eerste schijf
  // de belasting eerste schijf = min(inkomen, eerste schijfgrens) * tarief eerste schijf AOW
  const belastingEersteSchijf = Math.min(inkomen, p['eerste schijfgrens']) * p['tarief eerste schijf AOW'];

  // Regel: Bereken belasting tweede schijf
  // de belasting tweede schijf = max(0, min(inkomen, tweede schijfgrens) - eerste schijfgrens) * tarief tweede schijf
  const belastingTweedeSchijf = Math.max(0,
    (Math.min(inkomen, p['tweede schijfgrens']) - p['eerste schijfgrens'])
  ) * p['tarief tweede schijf'];

  // Regel: Bereken belasting derde schijf
  // de belasting derde schijf = max(0, inkomen - tweede schijfgrens) * tarief derde schijf
  const belastingDerdeSchijf = Math.max(0, inkomen - p['tweede schijfgrens']) * p['tarief derde schijf'];

  // Regel: Bereken belasting box1
  // de belasting box1 = belasting eerste schijf + belasting tweede schijf + belasting derde schijf
  const belastingBox1 = belastingEersteSchijf + belastingTweedeSchijf + belastingDerdeSchijf;

  // ===========================================================================
  // PHASE 4: HEFFINGSKORTINGEN
  // ===========================================================================

  // Regel: Bereken algemene heffingskorting
  // de algemene heffingskorting = max(0, AHK maximum AOW - max(0, inkomen - AHK afbouwgrens) * AHK afbouw percentage AOW)
  const algemeneHeffingskorting = Math.max(0,
    p['AHK maximum AOW'] -
    (Math.max(0, inkomen - p['AHK afbouwgrens']) * p['AHK afbouw percentage AOW'])
  );

  // Regel: Bereken ouderenkorting
  // onder grens: ouderenkorting = OK maximum indien inkomen <= OK afbouwgrens
  // met afbouw: ouderenkorting = max(0, OK maximum - (inkomen - OK afbouwgrens) * OK afbouw percentage)
  let ouderenkorting = 0;
  if (persoon.isAOWGerechtigd) {
    if (inkomen <= p['OK afbouwgrens']) {
      ouderenkorting = p['OK maximum'];
    } else {
      ouderenkorting = Math.max(0,
        p['OK maximum'] - (inkomen - p['OK afbouwgrens']) * p['OK afbouw percentage']
      );
    }
  }

  // Regel: Bereken alleenstaande ouderenkorting
  // de alleenstaande ouderenkorting = AOK bedrag indien is alleenstaand
  const alleenstaandeOuderenkorting = (persoon.isAlleenstaand && persoon.isAOWGerechtigd) ? p['AOK bedrag'] : 0;

  // Regel: Bereken totale heffingskortingen
  // de totale heffingskortingen = algemene heffingskorting + ouderenkorting + alleenstaande ouderenkorting
  const totaleHeffingskortingen = algemeneHeffingskorting + ouderenkorting + alleenstaandeOuderenkorting;

  // Regel: Bereken belasting na heffingskortingen
  // de belasting na heffingskortingen = max(0, belasting box1 - totale heffingskortingen)
  const belastingNaHeffingskortingen = Math.max(0, belastingBox1 - totaleHeffingskortingen);

  // ===========================================================================
  // PHASE 5: TOESLAGEN
  // ===========================================================================

  // Regel: Bereken zorgtoeslag
  // boven grens: zorgtoeslag = 0 indien inkomen >= ZT grens alleenstaand
  // onder grens: zorgtoeslag = max(0, ZT maximum alleenstaand - max(0, inkomen - ZT drempel) * ZT afbouw percentage)
  let zorgtoeslag = 0;
  if (persoon.isAlleenstaand) {
    if (inkomen >= p['ZT grens alleenstaand']) {
      zorgtoeslag = 0;
    } else {
      zorgtoeslag = Math.max(0,
        p['ZT maximum alleenstaand'] -
        (Math.max(0, inkomen - p['ZT drempel']) * p['ZT afbouw percentage'])
      );
    }
  }

  // Regel: Bereken huurtoeslag (simplified linear model)
  // boven grens: huurtoeslag = 0 indien inkomen > HT grens derde
  // onder grens: huurtoeslag = max(0, HT maximum * (HT grens derde - inkomen) / (HT grens derde - HT grens eerste))
  let huurtoeslag = 0;
  if (inkomen > p['HT grens derde']) {
    huurtoeslag = 0;
  } else {
    huurtoeslag = Math.max(0,
      p['HT maximum'] *
      (p['HT grens derde'] - inkomen) /
      (p['HT grens derde'] - p['HT grens eerste'])
    );
  }

  // ===========================================================================
  // PHASE 6: BESCHIKBAAR INKOMEN
  // ===========================================================================

  // Regel: Bereken beschikbaar inkomen
  // het beschikbaar inkomen = inkomen - Zvw bijdrage - belasting na heffingskortingen
  const beschikbaarInkomen = inkomen - zvwBijdrage - belastingNaHeffingskortingen;

  // Return all calculated values
  return {
    // Phase 1
    pensioenPerJaar: round(pensioenPerJaar),
    bedragIneens: round(bedragIneens),
    resterendPensioenPerJaar: round(resterendPensioenPerJaar),
    permanentVerliesPerJaar: round(permanentVerliesPerJaar),

    // Phase 2
    inkomen: round(inkomen),

    // Phase 3
    zvwBijdrage: round(zvwBijdrage),
    belastingEersteSchijf: round(belastingEersteSchijf),
    belastingTweedeSchijf: round(belastingTweedeSchijf),
    belastingDerdeSchijf: round(belastingDerdeSchijf),
    belastingBox1: round(belastingBox1),

    // Phase 4
    algemeneHeffingskorting: round(algemeneHeffingskorting),
    ouderenkorting: round(ouderenkorting),
    alleenstaandeOuderenkorting: round(alleenstaandeOuderenkorting),
    totaleHeffingskortingen: round(totaleHeffingskortingen),
    belastingNaHeffingskortingen: round(belastingNaHeffingskortingen),

    // Phase 5
    zorgtoeslag: round(zorgtoeslag),
    huurtoeslag: round(huurtoeslag),

    // Phase 6
    beschikbaarInkomen: round(beschikbaarInkomen),

    // Additional useful values
    maandelijksInkomen: round(inkomen / 12),
    maandelijksBeschikbaarInkomen: round(beschikbaarInkomen / 12),
    maandelijksVerlies: round(permanentVerliesPerJaar / 12),
    nettoUitkeringSchatting: round(bedragIneens - (belastingNaHeffingskortingen * (bedragIneens / inkomen)))
  };
}

function round(value) {
  return Math.round(value * 100) / 100;
}
