import { Rule } from '../ast/rules';
/**
 * Parser for RegelSpraak rules
 */
export declare class RuleParser {
    private input;
    private position;
    private lines;
    private currentLine;
    constructor(input: string);
    parseRule(): Rule;
    private parseGelijkstelling;
    private parseTarget;
}
//# sourceMappingURL=rule-parser.d.ts.map