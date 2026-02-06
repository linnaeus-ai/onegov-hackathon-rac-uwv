/**
 * Parser for Beslistabel (decision table) column headers.
 *
 * This module handles parsing natural language patterns in decision table
 * column headers into proper AST expressions that can be evaluated.
 */
import { Expression } from '../ast/expressions';
export interface ParsedCondition {
    /** The expression to evaluate for the condition subject */
    subjectExpression: Expression;
    /** The comparison operator */
    operator: string;
    /** Whether this is a kenmerk (characteristic) check */
    isKenmerkCheck: boolean;
    /** Name of the kenmerk for kenmerk checks */
    kenmerkName?: string;
}
export interface ParsedResult {
    /** Type of assignment */
    targetType: 'attribute' | 'kenmerk';
    /** The target expression to assign to */
    targetExpression: Expression;
    /** Name of kenmerk for kenmerk assignments */
    kenmerkName?: string;
}
export declare class DecisionTableHeaderParser {
    private static readonly CONDITION_PATTERNS;
    private static readonly RESULT_PATTERNS;
    private static readonly OPERATOR_MAP;
    /**
     * Parse a condition column header into a structured form
     */
    parseConditionColumn(headerText: string): ParsedCondition | null;
    /**
     * Parse a result column header into a structured form
     */
    parseResultColumn(headerText: string): ParsedResult | null;
    private createAttributeReference;
    private createNavigationReference;
    private createVariableReference;
    private createKenmerkReference;
}
//# sourceMappingURL=decision-table-header-parser.d.ts.map