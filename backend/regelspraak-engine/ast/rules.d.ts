/**
 * AST nodes for RegelSpraak rules
 */
import { Expression, AttributeReference } from './expressions';
import { SourceLocation } from './location';
import { DagsoortDefinitie } from './dagsoort';
export interface Rule {
    type: 'Rule';
    name?: string;
    version?: RuleVersion;
    resultaat?: ResultPart;
    result?: ResultPart;
    voorwaarde?: Voorwaarde;
    condition?: Voorwaarde;
    variables?: VariableAssignment[];
    naam?: string;
    location?: SourceLocation;
}
export interface VariableAssignment {
    type: 'VariableAssignment';
    name: string;
    expression: Expression;
    location?: SourceLocation;
}
export interface RuleVersion {
    type: 'RuleVersion';
    validity: 'altijd' | 'vanaf' | 'tot';
}
export type ResultPart = Gelijkstelling | ObjectCreation | MultipleResults | Kenmerktoekenning | Consistentieregel | Verdeling | FeitCreatie | DagsoortDefinitie;
export interface Gelijkstelling {
    type: 'Gelijkstelling';
    target: AttributeReference;
    expression: Expression;
}
export interface ObjectCreation {
    type: 'ObjectCreation';
    objectType: string;
    attributeInits: Array<{
        attribute: string;
        value: Expression;
    }>;
}
export interface MultipleResults {
    type: 'MultipleResults';
    results: ResultPart[];
}
export interface Kenmerktoekenning {
    type: 'Kenmerktoekenning';
    subject: Expression;
    characteristic: string;
}
export interface Voorwaarde {
    type: 'Voorwaarde';
    expression: Expression;
}
export interface Consistentieregel {
    type: 'Consistentieregel';
    criteriumType: 'uniek' | 'inconsistent';
    target?: Expression;
    condition?: Expression;
}
export interface VerdelingMethode {
    type: string;
}
export interface VerdelingGelijkeDelen extends VerdelingMethode {
    type: 'VerdelingGelijkeDelen';
}
export interface VerdelingNaarRato extends VerdelingMethode {
    type: 'VerdelingNaarRato';
    ratioExpression: Expression;
}
export interface VerdelingOpVolgorde extends VerdelingMethode {
    type: 'VerdelingOpVolgorde';
    orderDirection: 'toenemende' | 'afnemende';
    orderExpression: Expression;
}
export interface VerdelingTieBreak extends VerdelingMethode {
    type: 'VerdelingTieBreak';
    tieBreakMethod: VerdelingMethode;
}
export interface VerdelingMaximum extends VerdelingMethode {
    type: 'VerdelingMaximum';
    maxExpression: Expression;
}
export interface VerdelingAfronding extends VerdelingMethode {
    type: 'VerdelingAfronding';
    decimals: number;
    roundDirection: 'naar beneden' | 'naar boven';
}
export interface Verdeling {
    type: 'Verdeling';
    sourceAmount: Expression;
    targetCollection: Expression;
    distributionMethods: VerdelingMethode[];
    remainderTarget?: Expression;
}
export interface FeitCreatie {
    type: 'FeitCreatie';
    role1: string;
    subject1: Expression;
    role2: string;
    subject2: Expression;
}
export interface RegelGroep {
    type: 'RegelGroep';
    name: string;
    isRecursive: boolean;
    rules: Rule[];
}
//# sourceMappingURL=rules.d.ts.map