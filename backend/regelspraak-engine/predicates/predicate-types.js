"use strict";
/**
 * Unified predicate types for centralized predicate representation
 * Consolidates predicates used in subselectie, conditions, and compound conditions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantifierType = void 0;
exports.isSimplePredicate = isSimplePredicate;
exports.isCompoundPredicate = isCompoundPredicate;
exports.isNotPredicate = isNotPredicate;
exports.isAttributePredicate = isAttributePredicate;
exports.fromLegacyKenmerkPredicaat = fromLegacyKenmerkPredicaat;
exports.fromLegacyAttributeComparison = fromLegacyAttributeComparison;
// Re-export for convenience - canonical definition is in ast/expressions
var expressions_1 = require("../ast/expressions");
Object.defineProperty(exports, "QuantifierType", { enumerable: true, get: function () { return expressions_1.QuantifierType; } });
// Type guards for runtime type checking
function isSimplePredicate(pred) {
    return pred.type === 'SimplePredicate';
}
function isCompoundPredicate(pred) {
    return pred.type === 'CompoundPredicate';
}
function isNotPredicate(pred) {
    return pred.type === 'NotPredicate';
}
function isAttributePredicate(pred) {
    return pred.type === 'AttributePredicate';
}
function fromLegacyKenmerkPredicaat(legacy) {
    return {
        type: 'SimplePredicate',
        operator: 'kenmerk',
        kenmerk: legacy.kenmerk
    };
}
function fromLegacyAttributeComparison(legacy) {
    return {
        type: 'AttributePredicate',
        attribute: legacy.attribute,
        operator: legacy.operator,
        value: legacy.value
    };
}
//# sourceMappingURL=predicate-types.js.map