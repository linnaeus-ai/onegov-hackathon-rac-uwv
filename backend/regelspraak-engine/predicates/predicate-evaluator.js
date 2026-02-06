"use strict";
/**
 * Centralized predicate evaluator
 * Single source of truth for all predicate evaluation logic
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredicateEvaluator = void 0;
const predicate_types_1 = require("./predicate-types");
const expressions_1 = require("../ast/expressions");
const decimal_js_1 = __importDefault(require("decimal.js"));
class PredicateEvaluator {
    expressionEvaluator;
    constructor(expressionEvaluator) {
        this.expressionEvaluator = expressionEvaluator;
    }
    /**
     * Main entry point for predicate evaluation
     * Evaluates a predicate against a value in a given context
     */
    evaluate(predicate, value, context) {
        if ((0, predicate_types_1.isSimplePredicate)(predicate)) {
            return this.evaluateSimple(predicate, value, context);
        }
        if ((0, predicate_types_1.isCompoundPredicate)(predicate)) {
            return this.evaluateCompound(predicate, value, context);
        }
        if ((0, predicate_types_1.isNotPredicate)(predicate)) {
            return !this.evaluate(predicate.predicate, value, context);
        }
        if ((0, predicate_types_1.isAttributePredicate)(predicate)) {
            return this.evaluateAttribute(predicate, value, context);
        }
        throw new Error(`Unknown predicate type: ${predicate.type}`);
    }
    /**
     * Evaluates simple predicates
     */
    evaluateSimple(predicate, value, context) {
        const { operator, negated } = predicate;
        let result = false;
        switch (operator) {
            // Comparison operators
            case '==':
            case '!=':
            case '>':
            case '<':
            case '>=':
            case '<=':
                result = this.evaluateComparison(predicate, context);
                break;
            // Kenmerk check (heeft/is kenmerk)
            case 'kenmerk':
                result = this.evaluateKenmerk(predicate, value, context);
                break;
            // Dagsoort check (is een dagsoort)
            case 'dagsoort':
                result = this.evaluateDagsoort(predicate, value, context);
                break;
            // Elfproef validation
            case 'elfproef':
                result = this.evaluateElfproef(value);
                break;
            // Uniqueness check
            case 'uniek':
                result = this.evaluateUniek(value);
                break;
            // Numeric exact digits check
            case 'numeriek_exact':
                result = this.evaluateNumeriekExact(predicate, value);
                break;
            // Rule status checks
            case 'gevuurd':
                result = this.evaluateRegelGevuurd(predicate, context);
                break;
            case 'inconsistent':
                result = this.evaluateRegelInconsistent(predicate, context);
                break;
            default:
                throw new Error(`Unknown simple predicate operator: ${operator}`);
        }
        // Apply negation if needed
        return negated ? !result : result;
    }
    /**
     * Evaluates compound predicates with quantifiers
     */
    evaluateCompound(predicate, value, context) {
        const { quantifier, count, predicates } = predicate;
        // Evaluate each nested predicate
        let trueCount = 0;
        for (const nestedPredicate of predicates) {
            // Check if this is actually a predicate or an expression
            if (!nestedPredicate || typeof nestedPredicate !== 'object' || !nestedPredicate.type) {
                throw new Error('Invalid predicate in compound condition');
            }
            // If it's not a recognized predicate type, it's an expression that needs evaluation
            if (!(0, predicate_types_1.isSimplePredicate)(nestedPredicate) && !(0, predicate_types_1.isCompoundPredicate)(nestedPredicate) &&
                !(0, predicate_types_1.isNotPredicate)(nestedPredicate) && !(0, predicate_types_1.isAttributePredicate)(nestedPredicate)) {
                // This is an expression, not a predicate
                // Evaluate it using the expression evaluator
                const exprResult = this.expressionEvaluator.evaluate(nestedPredicate, context);
                // Strict boolean check - each condition must evaluate to boolean
                if (exprResult.type !== 'boolean') {
                    throw new Error(`Compound condition element must evaluate to boolean, got ${exprResult.type}`);
                }
                if (exprResult.value === true) {
                    trueCount++;
                }
            }
            else {
                // It's a proper predicate, evaluate normally
                if (this.evaluate(nestedPredicate, value, context)) {
                    trueCount++;
                }
            }
        }
        // Apply quantifier logic
        switch (quantifier) {
            case expressions_1.QuantifierType.ALLE:
                return trueCount === predicates.length;
            case expressions_1.QuantifierType.GEEN:
                return trueCount === 0;
            case expressions_1.QuantifierType.TEN_MINSTE:
                if (count === undefined) {
                    throw new Error('TEN_MINSTE requires a count');
                }
                return trueCount >= count;
            case expressions_1.QuantifierType.TEN_HOOGSTE:
                if (count === undefined) {
                    throw new Error('TEN_HOOGSTE requires a count');
                }
                return trueCount <= count;
            case expressions_1.QuantifierType.PRECIES:
                if (count === undefined) {
                    throw new Error('PRECIES requires a count');
                }
                return trueCount === count;
            default:
                throw new Error(`Unknown quantifier: ${quantifier}`);
        }
    }
    /**
     * Evaluates attribute predicates (for subselectie)
     */
    evaluateAttribute(predicate, value, context) {
        // Check if value is an object
        if (value.type !== 'object') {
            return false;
        }
        // Get the attribute value
        const attrValue = value.value[predicate.attribute];
        if (!attrValue) {
            return false;
        }
        // Evaluate the comparison value
        const compValue = this.expressionEvaluator.evaluate(predicate.value, context);
        // Perform comparison
        return this.compareValues(attrValue, predicate.operator, compValue);
    }
    /**
     * Helper: Evaluate comparison predicates
     */
    evaluateComparison(predicate, context) {
        if (!predicate.left || !predicate.right) {
            throw new Error('Comparison predicate requires left and right expressions');
        }
        const leftValue = this.expressionEvaluator.evaluate(predicate.left, context);
        const rightValue = this.expressionEvaluator.evaluate(predicate.right, context);
        return this.compareValues(leftValue, predicate.operator, rightValue);
    }
    /**
     * Helper: Compare two values
     */
    compareValues(left, operator, right) {
        // Handle different value types
        if (left.type === 'number' && right.type === 'number') {
            const leftNum = new decimal_js_1.default(left.value);
            const rightNum = new decimal_js_1.default(right.value);
            switch (operator) {
                case '==': return leftNum.equals(rightNum);
                case '!=': return !leftNum.equals(rightNum);
                case '>': return leftNum.greaterThan(rightNum);
                case '<': return leftNum.lessThan(rightNum);
                case '>=': return leftNum.greaterThanOrEqualTo(rightNum);
                case '<=': return leftNum.lessThanOrEqualTo(rightNum);
                default: return false;
            }
        }
        if (left.type === 'string' && right.type === 'string') {
            switch (operator) {
                case '==': return left.value === right.value;
                case '!=': return left.value !== right.value;
                case '>': return left.value > right.value;
                case '<': return left.value < right.value;
                case '>=': return left.value >= right.value;
                case '<=': return left.value <= right.value;
                default: return false;
            }
        }
        if (left.type === 'boolean' && right.type === 'boolean') {
            switch (operator) {
                case '==': return left.value === right.value;
                case '!=': return left.value !== right.value;
                default: return false;
            }
        }
        if (left.type === 'date' && right.type === 'date') {
            const leftDate = new Date(left.value);
            const rightDate = new Date(right.value);
            switch (operator) {
                case '==': return leftDate.getTime() === rightDate.getTime();
                case '!=': return leftDate.getTime() !== rightDate.getTime();
                case '>': return leftDate > rightDate;
                case '<': return leftDate < rightDate;
                case '>=': return leftDate >= rightDate;
                case '<=': return leftDate <= rightDate;
                default: return false;
            }
        }
        // Type mismatch
        return false;
    }
    /**
     * Helper: Evaluate kenmerk predicate.
     * Uses RuntimeContext.getKenmerk() which handles equivalence.
     */
    evaluateKenmerk(predicate, value, context) {
        if (!predicate.kenmerk) {
            throw new Error('Kenmerk predicate requires kenmerk property');
        }
        if (value.type !== 'object') {
            return false;
        }
        const valueAny = value;
        const objectType = valueAny.objectType || '';
        const objectId = valueAny.objectId || '';
        // Primary path: use RuntimeContext.getKenmerk() which handles equivalence
        if (objectType && objectId) {
            const hasKenmerk = context.getKenmerk(objectType, objectId, predicate.kenmerk);
            if (hasKenmerk !== undefined) {
                return hasKenmerk;
            }
        }
        // Fallback: check value directly (for mock objects without objectType/objectId)
        const kenmerkKey = `is ${predicate.kenmerk}`;
        const kenmerkValue = value.value[kenmerkKey];
        if (kenmerkValue && kenmerkValue.type === 'boolean') {
            return kenmerkValue.value === true;
        }
        // Also check without 'is ' prefix
        const directValue = value.value[predicate.kenmerk];
        if (directValue && directValue.type === 'boolean') {
            return directValue.value === true;
        }
        return false;
    }
    /**
     * Helper: Evaluate dagsoort predicate
     */
    evaluateDagsoort(predicate, value, context) {
        if (!predicate.dagsoort) {
            throw new Error('Dagsoort predicate requires dagsoort property');
        }
        // Check if value is a date
        if (value.type !== 'date') {
            return false;
        }
        const date = new Date(value.value);
        const dayOfWeek = date.getDay();
        // Hardcoded day type checks (to be replaced with model-driven evaluation)
        switch (predicate.dagsoort.toLowerCase()) {
            case 'werkdag':
                return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday
            case 'weekend':
                return dayOfWeek === 0 || dayOfWeek === 6; // Saturday or Sunday
            case 'feestdag':
                // Check Dutch holidays - simplified for now
                const month = date.getMonth() + 1;
                const day = date.getDate();
                // King's Day (April 27), Christmas (Dec 25), New Year (Jan 1)
                return (month === 4 && day === 27) ||
                    (month === 12 && day === 25) ||
                    (month === 1 && day === 1);
            default:
                // Check custom day types from model (TODO: implement model-driven check)
                return false;
        }
    }
    /**
     * Helper: Evaluate elfproef (Dutch bank account validation)
     */
    evaluateElfproef(value) {
        if (value.type !== 'string' && value.type !== 'number') {
            return false;
        }
        const str = String(value.value).replace(/\D/g, '');
        if (str.length !== 9 && str.length !== 10) {
            return false;
        }
        const digits = str.split('').map(Number);
        let sum = 0;
        if (digits.length === 9) {
            // 9-digit account number
            for (let i = 0; i < 9; i++) {
                sum += digits[i] * (9 - i);
            }
            return sum % 11 === 0;
        }
        else {
            // 10-digit account (BSN)
            for (let i = 0; i < 9; i++) {
                sum += digits[i] * (10 - i);
            }
            sum -= digits[9];
            return sum % 11 === 0;
        }
    }
    /**
     * Helper: Evaluate uniqueness
     */
    evaluateUniek(value) {
        if (value.type !== 'array') {
            return false;
        }
        const seen = new Set();
        for (const item of value.value) {
            const key = JSON.stringify(item);
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
        }
        return true;
    }
    /**
     * Helper: Evaluate numeric exact digits
     */
    evaluateNumeriekExact(predicate, value) {
        if (!predicate.digits) {
            throw new Error('Numeriek exact predicate requires digits property');
        }
        if (value.type !== 'number' && value.type !== 'string') {
            return false;
        }
        const str = String(value.value).replace(/[^\d]/g, '');
        return str.length === predicate.digits;
    }
    /**
     * Helper: Check if rule has been executed
     */
    evaluateRegelGevuurd(predicate, context) {
        // For regel status predicates, the rule name should be in left expression
        if (predicate.left && predicate.left.type === 'Literal') {
            const literal = predicate.left;
            if (literal.literalType === 'string' || literal.valueType === 'text') {
                const regelNaam = literal.value;
                return context.isRuleExecuted?.(regelNaam) || false;
            }
        }
        return false;
    }
    /**
     * Helper: Check if rule is inconsistent
     */
    evaluateRegelInconsistent(predicate, context) {
        // For regel status predicates, the rule name should be in left expression
        if (predicate.left && predicate.left.type === 'Literal') {
            const literal = predicate.left;
            if (literal.literalType === 'string' || literal.valueType === 'text') {
                const regelNaam = literal.value;
                return context.isRuleInconsistent?.(regelNaam) || false;
            }
        }
        return false;
    }
}
exports.PredicateEvaluator = PredicateEvaluator;
//# sourceMappingURL=predicate-evaluator.js.map