/**
 * Unified predicate types for centralized predicate representation
 * Consolidates predicates used in subselectie, conditions, and compound conditions
 */
import { Expression, QuantifierType } from '../ast/expressions';
import { SourceLocation } from '../ast/location';
export { QuantifierType } from '../ast/expressions';
export interface Predicate {
    type: string;
    location?: SourceLocation;
}
export interface SimplePredicate extends Predicate {
    type: 'SimplePredicate';
    operator: PredicateOperator;
    left?: Expression;
    right?: Expression;
    kenmerk?: string;
    dagsoort?: string;
    digits?: number;
    negated?: boolean;
}
export type PredicateOperator = '==' | '!=' | '>' | '<' | '>=' | '<=' | 'kenmerk' | 'dagsoort' | 'elfproef' | 'uniek' | 'numeriek_exact' | 'gevuurd' | 'inconsistent';
export interface CompoundPredicate extends Predicate {
    type: 'CompoundPredicate';
    quantifier: QuantifierType;
    count?: number;
    predicates: Predicate[];
}
export interface NotPredicate extends Predicate {
    type: 'NotPredicate';
    predicate: Predicate;
}
export interface AttributePredicate extends Predicate {
    type: 'AttributePredicate';
    attribute: string;
    operator: ComparisonOperator;
    value: Expression;
}
export type ComparisonOperator = '==' | '!=' | '>' | '<' | '>=' | '<=';
export declare function isSimplePredicate(pred: Predicate): pred is SimplePredicate;
export declare function isCompoundPredicate(pred: Predicate): pred is CompoundPredicate;
export declare function isNotPredicate(pred: Predicate): pred is NotPredicate;
export declare function isAttributePredicate(pred: Predicate): pred is AttributePredicate;
export interface LegacyKenmerkPredicaat {
    type: 'KenmerkPredicaat';
    kenmerk: string;
}
export interface LegacyAttributeComparisonPredicaat {
    type: 'AttributeComparisonPredicaat';
    attribute: string;
    operator: string;
    value: Expression;
}
export declare function fromLegacyKenmerkPredicaat(legacy: LegacyKenmerkPredicaat): SimplePredicate;
export declare function fromLegacyAttributeComparison(legacy: LegacyAttributeComparisonPredicaat): AttributePredicate;
//# sourceMappingURL=predicate-types.d.ts.map