"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregationEngine = void 0;
/**
 * Engine for evaluating aggregation expressions in RegelSpraak
 */
class AggregationEngine {
    expressionEvaluator;
    constructor(expressionEvaluator) {
        this.expressionEvaluator = expressionEvaluator;
    }
    evaluate(expr, context) {
        // Collect values to aggregate
        const values = this.collectValues(expr.target, context);
        // Apply dimension range filtering if specified
        const filteredValues = expr.dimensionRange
            ? this.filterByDimensionRange(values, expr.dimensionRange, context)
            : values;
        // Perform aggregation
        return this.aggregate(filteredValues, expr.aggregationType);
    }
    collectValues(target, context) {
        if (Array.isArray(target)) {
            // Multiple expressions (e.g., "de som van X, Y en Z")
            return target.map(expr => this.expressionEvaluator.evaluate(expr, context));
        }
        else {
            // Single expression - might return a collection
            const result = this.expressionEvaluator.evaluate(target, context);
            // If it's a list, extract all values
            if (result.type === 'list' && Array.isArray(result.value)) {
                return result.value;
            }
            else {
                // Single value - for dimensional objects, return it as-is
                return [result];
            }
        }
    }
    filterByDimensionRange(values, range, context) {
        // Get the dimension registry to validate and get label positions
        const registry = context.dimensionRegistry;
        // Infer axis if not provided
        let axis = range.dimension;
        if (!axis) {
            axis = registry.findAxisForLabel(range.from) || registry.findAxisForLabel(range.to) || '';
        }
        // Get the labels that fall within the specified range
        const labelsInRange = axis ? registry.getLabelsInRange(axis, range.from, range.to) : [];
        if (labelsInRange.length === 0) {
            // Invalid range or dimension - return empty array
            return [];
        }
        // Filter values based on whether they correspond to labels in the range
        // This assumes values are structured with dimension coordinates
        const filteredValues = [];
        for (const value of values) {
            // Check if this value has dimension coordinates that match our range
            // For now, we'll handle the simple case where values are directly keyed by dimension labels
            // In a more complete implementation, we'd need to handle complex dimensional structures
            if (value.type === 'object' && value.value) {
                // Check if the object has values for the dimension labels in range
                const objValue = value.value;
                for (const label of labelsInRange) {
                    if (label in objValue) {
                        // Found a value for this label - include it
                        const labelValue = objValue[label];
                        if (typeof labelValue === 'number') {
                            filteredValues.push({ type: 'number', value: labelValue });
                        }
                        else if (labelValue && typeof labelValue === 'object' && 'type' in labelValue) {
                            filteredValues.push(labelValue);
                        }
                        else if (labelValue && typeof labelValue === 'object') {
                            // Plain object leaf value (e.g., could wrap numbers) -> try to coerce numeric
                            const maybeNumber = labelValue.value ?? labelValue;
                            if (typeof maybeNumber === 'number') {
                                filteredValues.push({ type: 'number', value: maybeNumber });
                            }
                        }
                    }
                }
            }
            else {
                // For non-dimensional values, include them as-is if no filtering is needed
                // This handles cases where the aggregation target isn't actually dimensional
                filteredValues.push(value);
            }
        }
        return filteredValues;
    }
    aggregate(values, type) {
        if (values.length === 0) {
            throw new Error('Cannot aggregate empty collection');
        }
        switch (type) {
            case 'som':
                return this.sum(values);
            case 'aantal':
                return this.count(values);
            case 'maximum':
                return this.maximum(values);
            case 'minimum':
                return this.minimum(values);
            case 'eerste':
                return this.first(values);
            case 'laatste':
                return this.last(values);
            default:
                throw new Error(`Unknown aggregation type: ${type}`);
        }
    }
    sum(values) {
        // Filter out null/undefined values first (Python parity - see engine.py:6954)
        const validValues = values.filter(v => v.type !== 'null' && v.value !== null && v.value !== undefined);
        if (validValues.length === 0) {
            // Python returns 0 for all-null (engine.py:6976)
            return { type: 'number', value: 0 };
        }
        // Ensure remaining values are numbers
        const numbers = validValues.map(v => {
            if (v.type !== 'number') {
                throw new Error(`Cannot sum ${v.type} values`);
            }
            return v.value;
        });
        return {
            type: 'number',
            value: numbers.reduce((acc, n) => acc + n, 0)
        };
    }
    count(values) {
        return {
            type: 'number',
            value: values.length
        };
    }
    maximum(values) {
        // Filter out null/undefined values (Python parity)
        const validValues = values.filter(v => v.type !== 'null' && v.value !== null && v.value !== undefined);
        if (validValues.length === 0) {
            return { type: 'null', value: null };
        }
        const numbers = validValues.map(v => {
            if (v.type !== 'number') {
                throw new Error(`Cannot find maximum of ${v.type} values`);
            }
            return v.value;
        });
        return {
            type: 'number',
            value: Math.max(...numbers)
        };
    }
    minimum(values) {
        // Filter out null/undefined values (Python parity)
        const validValues = values.filter(v => v.type !== 'null' && v.value !== null && v.value !== undefined);
        if (validValues.length === 0) {
            return { type: 'null', value: null };
        }
        const numbers = validValues.map(v => {
            if (v.type !== 'number') {
                throw new Error(`Cannot find minimum of ${v.type} values`);
            }
            return v.value;
        });
        return {
            type: 'number',
            value: Math.min(...numbers)
        };
    }
    first(values) {
        return values[0];
    }
    last(values) {
        return values[values.length - 1];
    }
}
exports.AggregationEngine = AggregationEngine;
//# sourceMappingURL=aggregation-engine.js.map