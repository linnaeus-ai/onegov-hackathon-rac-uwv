// Shared TypeScript interfaces for ImpactModal sub-components

export interface ThresholdVisualizationProps {
  userValue: number;
  thresholds: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  max: number;
  title: string;
  unit?: string;
}

export interface TaxBracket {
  name: string;
  min: number;
  max: number;
  rate: number;
  amountInBracket: number;
  taxPaid: number;
}

export interface BracketBreakdownProps {
  inkomen: number;
  brackets: TaxBracket[];
}

export interface AfbouwExplanationProps {
  name: string;
  maxAmount: number;
  actualAmount: number;
  threshold: number;
  userIncome: number;
  afbouwRate: number;
  type: 'korting' | 'toeslag';
}

export interface ConditionalLogicBoxProps {
  condition: string;
  result: string;
  isMet: boolean;
  icon?: React.ElementType;
}

export interface Parameters {
  eersteSchijfgrens: number;
  tweedeSchijfgrens: number;
  tariefEersteSchijfAOW: number;
  tariefTweedeSchijf: number;
  tariefDerdeSchijf: number;
  zvwPercentage: number;
  zvwMaximum: number;
  ahkMaximumAOW: number;
  ahkAfbouwgrens: number;
  ahkAfbouwPercentageAOW: number;
  okMaximum: number;
  okAfbouwgrens: number;
  okAfbouwPercentage: number;
  aokBedrag: number;
  ztGrensAlleenstaand: number;
  ztMaximumAlleenstaand: number;
  ztDrempel: number;
  ztAfbouwPercentage: number;
  htGrensEerste: number;
  htGrensTweede: number;
  htGrensDerde: number;
  htMaximum: number;
}
