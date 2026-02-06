import { DecisionTable } from '../ast/decision-tables';
/**
 * Parser for RegelSpraak decision tables (Beslistabel)
 */
export declare class DecisionTableParser {
    private lines;
    private currentLine;
    constructor(input: string);
    parseDecisionTable(): DecisionTable;
    private findNextTableLine;
    private parseHeader;
    private parseRow;
    private parseExpression;
}
//# sourceMappingURL=decision-table-parser.d.ts.map