// In development with Vite proxy, use relative URL. In production, use environment variable.
const API_BASE = import.meta.env.VITE_API_URL || '/api';

export interface Profile {
  id: string;
  name: string;
  description: string;
}

export interface ProfileDetails extends Profile {
  age: number;
  hasPartner: boolean;
  isAOWGerechtigd: boolean;
  isAlleenstaand: boolean;
  pensioenvermogen: number;
  aanvullendPensioenPerMaand: number;
  aowInkomen: number;
  overigInkomen: number;
  huurPerMaand: number;
}

export interface CalculationResult {
  // Phase 1
  pensioenPerJaar: number;
  bedragIneens: number;
  resterendPensioenPerJaar: number;
  permanentVerliesPerJaar: number;
  // Phase 2
  brutoInkomen: number;
  // Phase 3
  zvwBijdrage: number;
  belastingBox1: number;
  // Phase 4
  totaleHeffingskortingen: number;
  belastingNaHeffingskortingen: number;
  // Phase 5
  zorgtoeslag: number;
  huurtoeslag: number;
  // Phase 6
  nettoInkomen: number;
  // Additional
  maandelijksBrutoInkomen: number;
  maandelijksNettoInkomen: number;
  maandelijksVerlies: number;
}

export interface CalculationResponse {
  profile: ProfileDetails;
  percentage: number;
  result: CalculationResult;
  baseline: CalculationResult;
  comparison: {
    inkomenVerschil: number;
    belastingVerschil: number;
    maandelijksVerlies: number;
    nettoUitkering: number;
  };
}

export async function fetchProfiles(): Promise<Profile[]> {
  const response = await fetch(`${API_BASE}/profiles`);
  if (!response.ok) throw new Error('Failed to fetch profiles');
  return response.json();
}

export async function fetchProfileDetails(id: string): Promise<ProfileDetails> {
  const response = await fetch(`${API_BASE}/profiles/${id}`);
  if (!response.ok) throw new Error('Failed to fetch profile details');
  return response.json();
}

export async function calculate(profileId: string, opnamePercentage: number): Promise<CalculationResponse> {
  const response = await fetch(`${API_BASE}/calculate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ profileId, opnamePercentage })
  });
  if (!response.ok) throw new Error('Calculation failed');
  return response.json();
}

export interface OptimalResult {
  percentage: number;
  netLumpSum: number;
  yearOneIncome: number;
  subsequentYearIncome: number;
  lifetimeEquity: number;
  permanentMonthlyLoss: number;
  extraTax: number;
  zorgtoeslagLoss: number;
  huurtoeslagLoss: number;
}

export interface OptimalResponse {
  profile: ProfileDetails;
  currentAge: number;
  lifeExpectancy: number;
  remainingYears: number;
  optimal: number;
  results: OptimalResult[];
  recommendation: {
    percentage: number;
    reason: string;
  };
}

export async function calculateOptimal(profileId: string, lifeExpectancy: number): Promise<OptimalResponse> {
  const response = await fetch(`${API_BASE}/calculate-optimal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ profileId, lifeExpectancy })
  });
  if (!response.ok) throw new Error('Optimal calculation failed');
  return response.json();
}
