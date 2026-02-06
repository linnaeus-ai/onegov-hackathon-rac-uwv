import { Expression } from './expressions';
/**
 * Decision table AST nodes for RegelSpraak Beslistabel
 */
export interface DecisionTableCondition {
    type: 'DecisionTableCondition';
    headerText: string;
    subjectExpression?: Expression;
    operator?: string;
    isKenmerkCheck?: boolean;
    kenmerkName?: string;
}
export interface DecisionTableResult {
    type: 'DecisionTableResult';
    headerText: string;
    targetType: 'attribute' | 'kenmerk';
    targetExpression?: Expression;
    kenmerkName?: string;
}
export interface DecisionTableRow {
    type: 'DecisionTableRow';
    rowNumber: number;
    resultExpression: Expression;
    conditionValues: (Expression | 'n.v.t.')[];
}
export interface DecisionTable {
    type: 'DecisionTable';
    name: string;
    validity: string;
    resultColumn: string;
    conditionColumns: string[];
    rows: DecisionTableRow[];
    parsedResult?: DecisionTableResult;
    parsedConditions?: DecisionTableCondition[];
}
//# sourceMappingURL=decision-tables.d.ts.map