/**
 * Centralized predicate evaluator
 * Single source of truth for all predicate evaluation logic
 */
import { Predicate } from './predicate-types';
import { Value, RuntimeContext } from '../interfaces';
import { ExpressionEvaluator } from '../evaluators/expression-evaluator';
export declare class PredicateEvaluator {
    private expressionEvaluator;
    constructor(expressionEvaluator: ExpressionEvaluator);
    /**
     * Main entry point for predicate evaluation
     * Evaluates a predicate against a value in a given context
     */
    evaluate(predicate: Predicate, value: Value, context: RuntimeContext): boolean;
    /**
     * Evaluates simple predicates
     */
    private evaluateSimple;
    /**
     * Evaluates compound predicates with quantifiers
     */
    private evaluateCompound;
    /**
     * Evaluates attribute predicates (for subselectie)
     */
    private evaluateAttribute;
    /**
     * Helper: Evaluate comparison predicates
     */
    private evaluateComparison;
    /**
     * Helper: Compare two values
     */
    private compareValues;
    /**
     * Helper: Evaluate kenmerk predicate.
     * Uses RuntimeContext.getKenmerk() which handles equivalence.
     */
    private evaluateKenmerk;
    /**
     * Helper: Evaluate dagsoort predicate
     */
    private evaluateDagsoort;
    /**
     * Helper: Evaluate elfproef (Dutch bank account validation)
     */
    private evaluateElfproef;
    /**
     * Helper: Evaluate uniqueness
     */
    private evaluateUniek;
    /**
     * Helper: Evaluate numeric exact digits
     */
    private evaluateNumeriekExact;
    /**
     * Helper: Check if rule has been executed
     */
    private evaluateRegelGevuurd;
    /**
     * Helper: Check if rule is inconsistent
     */
    private evaluateRegelInconsistent;
}
//# sourceMappingURL=predicate-evaluator.d.ts.map