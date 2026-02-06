import { RuntimeContext, Value } from '../interfaces';
import { DecisionTable } from '../ast/decision-tables';
export interface DecisionTableExecutionResult {
    success: boolean;
    matchedRow?: number;
    target?: string;
    value?: Value;
    error?: Error;
}
/**
 * Executes RegelSpraak decision tables
 */
export declare class DecisionTableExecutor {
    private expressionEvaluator;
    private headerParser;
    private unitRegistry;
    execute(table: DecisionTable, context: RuntimeContext): DecisionTableExecutionResult;
    private extractTargetName;
    private evaluateRow;
    private compareValues;
    private extractNumericValue;
    private compareNumericValues;
    private convertUnits;
}
//# sourceMappingURL=decision-table-executor.d.ts.map