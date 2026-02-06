import { RuntimeContext } from './runtime';
import { ExecutionResult } from './result';
/**
 * Main engine interface
 */
export interface IEngine {
    parse(source: string): ParseResult;
    execute(program: any, context?: RuntimeContext): ExecutionResult;
    run(source: string, context?: RuntimeContext): ExecutionResult;
}
export interface ParseResult {
    success: boolean;
    ast?: any;
    errors?: ParseError[];
}
export interface ParseError {
    line: number;
    column: number;
    message: string;
}
//# sourceMappingURL=engine.d.ts.map