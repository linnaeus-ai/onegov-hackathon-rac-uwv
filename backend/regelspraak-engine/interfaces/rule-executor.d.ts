import { Rule } from '../ast/rules';
import { RuntimeContext, Value } from './';
export interface RuleExecutionResult {
    success: boolean;
    target?: string;
    value?: Value;
    error?: Error;
    skipped?: boolean;
    reason?: string;
    objectType?: string;
    objectId?: string;
    attributes?: Record<string, Value>;
    multipleResults?: RuleExecutionResult[];
    createdCount?: number;
}
export interface IRuleExecutor {
    execute(rule: Rule, context: RuntimeContext): RuleExecutionResult;
}
//# sourceMappingURL=rule-executor.d.ts.map