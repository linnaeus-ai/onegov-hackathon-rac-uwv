"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFiredRules = extractFiredRules;
/**
 * Extract fired rule names from execution trace.
 * Returns deduplicated list of rule names that fired during execution.
 */
function extractFiredRules(executionTrace) {
    return [...new Set(executionTrace
            .filter(t => t.includes('RULE_FIRED'))
            .map(t => {
            const match = t.match(/rule_name='([^']+)'/);
            return match ? match[1] : t;
        }))];
}
//# sourceMappingURL=fired-rules.js.map