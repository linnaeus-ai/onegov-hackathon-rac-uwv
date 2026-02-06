import { Expression } from './ast/expressions';
import { Rule } from './ast/rules';
import { DecisionTable } from './ast/decision-tables';
import { ObjectTypeDefinition } from './ast/object-types';
import { ParameterDefinition } from './ast/parameters';
import { DomainModel } from './ast/domain-model';
/**
 * Parser service using ANTLR4-generated parser
 */
export interface ParseResult {
    model: DomainModel;
    locationMap?: WeakMap<any, any>;
}
export declare class AntlrParser {
    /**
     * Parse RegelSpraak source code and return array of definitions (backward compatibility)
     */
    parse(source: string): any;
    /**
     * Parse RegelSpraak source code and return both model and location map
     */
    parseWithLocations(source: string): ParseResult;
    /**
     * Parse RegelSpraak source code and return a DomainModel
     */
    parseModel(source: string): DomainModel;
    /**
     * Parse just an expression
     */
    parseExpression(source: string): Expression;
    /**
     * Parse a rule definition
     */
    parseRule(source: string): Rule;
    /**
     * Parse an object type definition
     */
    parseObjectType(source: string): ObjectTypeDefinition;
    /**
     * Parse a parameter definition
     */
    parseParameter(source: string): ParameterDefinition;
    /**
     * Parse a decision table (beslistabel)
     */
    parseDecisionTable(source: string): DecisionTable;
}
//# sourceMappingURL=parser.d.ts.map