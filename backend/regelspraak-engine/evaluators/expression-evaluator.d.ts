import { IEvaluator, Value, RuntimeContext } from '../interfaces';
import { Expression } from '../ast/expressions';
/**
 * Evaluator for expression nodes
 */
export declare class ExpressionEvaluator implements IEvaluator {
    private builtInFunctions;
    private aggregationEngine;
    private timelineEvaluator;
    private unitRegistry;
    private predicateEvaluator;
    constructor();
    evaluate(expr: Expression, context: RuntimeContext): Value;
    private evaluateNumberLiteral;
    private evaluateStringLiteral;
    private evaluateLiteral;
    private evaluateBooleanLiteral;
    private evaluateDateLiteral;
    private evaluateBinaryExpression;
    private evaluateComparisonExpression;
    private evaluateLogicalExpression;
    private evaluateUnaryExpression;
    private evaluateTimelineBinaryExpression;
    private evaluateVariableReference;
    private evaluateParameterReference;
    private evaluateFunctionCall;
    private sqrt;
    private abs;
    private aantal;
    /**
     * Special handling for aantal function - resolves collections from AttributeReference
     * Pattern: "het aantal passagiers van de reis" -> FunctionCall("aantal", AttributeReference)
     */
    private aantal_special;
    /**
     * Resolve a collection reference for aantal function
     * Handles object type lookups, FeitType navigation, variable lookups, and attribute references
     */
    private resolveCollectionForAantal;
    private som;
    /**
     * Special handling for som_van with 2 arguments:
     * Pattern: "som van de <attribute> van alle <collection>"
     * arg[0] = attribute path to extract from each item
     * arg[1] = collection path to iterate
     */
    private som_van_special;
    /**
     * Generic aggregation handling for min/max patterns with 2 arguments:
     * arg[0] = attribute path to extract from each item
     * arg[1] = collection path to iterate
     */
    private aggregation_special;
    /**
     * Convert Dutch plural noun to singular.
     * Handles common Dutch plural endings:
     * - "-en" suffix (leeftijden → leeftijd)
     * - "-s" suffix (items → item)
     */
    private singularize;
    private som_van;
    private maximum_van;
    private minimum_van;
    private maximum_van_values;
    private minimum_van_values;
    private tijdsduur_van;
    /**
     * Add or subtract a time unit from a date.
     * Ports Python's _add_time_to_date (engine.py:5316-5398)
     */
    private addTimeToDate;
    private abs_tijdsduur_van;
    private aantal_dagen_in;
    private aantal_dagen_in_special;
    private findRelatedObjectsThroughFeittype;
    private evaluateAttributeReference;
    private evaluateSubselectieExpression;
    private evaluatePredicaat;
    private evaluateKenmerkPredicaat;
    private evaluateAttributeComparisonPredicaat;
    private checkElfproef;
    private evaluateDagsoortExpression;
    private evaluateNumericExactExpression;
    private maand_uit;
    private dag_uit;
    private jaar_uit;
    private datum_met;
    /**
     * Evaluate a TekstreeksExpression (string interpolation).
     * Concatenates text parts with evaluated expression parts.
     */
    private evaluateTekstreeksExpression;
    /**
     * Format a value for string interpolation.
     * Handles type-specific formatting (Dutch conventions).
     */
    private formatValueForInterpolation;
    private evaluateUniekExpression;
    private getValueKey;
    private evaluateNot;
    private isTruthy;
    private evaluateAllAttributesExpression;
    private evaluateRegelStatusExpression;
    private evaluateSamengesteldeVoorwaarde;
    private evaluateDimensionedAttributeReference;
    /**
     * Evaluate built-in dagsoort types
     */
    private evaluateBuiltInDagsoort;
    /**
     * Check if a date is a Dutch public holiday
     */
    private isDutchPublicHoliday;
    /**
     * Calculate Easter Sunday date for a given year.
     * Uses Anonymous Gregorian algorithm (Meeus/Jones/Butcher).
     */
    private calculateEasterSunday;
    /**
     * Return the first non-null value from the arguments.
     * Mirrors Python's eerste_van function.
     */
    private eerste_van;
    /**
     * Return the last non-null value from the arguments.
     * Mirrors Python's laatste_van function.
     */
    private laatste_van;
    /**
     * Calculate Easter date for a given year.
     * Uses the shared calculateEasterSunday helper.
     */
    private eerste_paasdag_van;
    /**
     * Evaluate rounding expression (afronding).
     * Handles patterns like "naar beneden afgerond op 0 decimalen"
     */
    private evaluateAfrondingExpression;
    /**
     * Evaluate bounding expression (begrenzing).
     * Handles patterns like "met een minimum van 0 €"
     */
    private evaluateBegrenzingExpression;
    /**
     * Evaluate combined bounding and rounding expression.
     * Handles patterns like "met een minimum van 0 € naar beneden afgerond op 0 decimalen"
     */
    private evaluateBegrenzingAfrondingExpression;
    /**
     * Helper to convert Value to number, or return null if not numeric.
     */
    private toNumber;
    /**
     * Evaluate a DisjunctionExpression (values connected by "of").
     * Returns an array of the evaluated values, or extracts string values from location if values array is empty.
     */
    private evaluateDisjunctionExpression;
    /**
     * Evaluate a ConjunctionExpression (values connected by "en").
     * Returns an array of the evaluated values.
     */
    private evaluateConjunctionExpression;
    /**
     * Evaluate a VergelijkingInPredicaat expression.
     * Handles kenmerk_check, attribuut_vergelijking, and object_check.
     */
    private evaluateVergelijkingInPredicaat;
}
//# sourceMappingURL=expression-evaluator.d.ts.map