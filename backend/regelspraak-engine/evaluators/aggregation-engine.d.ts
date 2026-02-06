import { Value, RuntimeContext } from '../interfaces';
import { AggregationExpression } from '../ast/expressions';
/**
 * Engine for evaluating aggregation expressions in RegelSpraak
 */
export declare class AggregationEngine {
    private expressionEvaluator;
    constructor(expressionEvaluator: any);
    evaluate(expr: AggregationExpression, context: RuntimeContext): Value;
    private collectValues;
    private filterByDimensionRange;
    private aggregate;
    private sum;
    private count;
    private maximum;
    private minimum;
    private first;
    private last;
}
//# sourceMappingURL=aggregation-engine.d.ts.map