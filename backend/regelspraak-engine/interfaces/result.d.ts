import { Value } from './value';
/**
 * Result of executing a statement
 */
export interface ExecutionResult {
    success: boolean;
    value?: Value;
    error?: Error;
    trace?: any[];
}
//# sourceMappingURL=result.d.ts.map