import { AggregationExpression } from '../ast/expressions';
/**
 * Parser for RegelSpraak aggregation expressions
 */
export declare class AggregationParser {
    private input;
    private position;
    constructor(input: string);
    /**
     * Parse aggregation expressions like:
     * - "de som van X, Y en Z"
     * - "het aantal personen"
     * - "de maximale waarde van alle bedragen"
     */
    parseAggregation(): AggregationExpression | null;
    private parseAggregationType;
    private parseTarget;
    private parseSimpleExpression;
    private match;
    private matchWord;
    private matchChar;
    private skipWhitespace;
    private isLetter;
}
//# sourceMappingURL=aggregation-parser.d.ts.map