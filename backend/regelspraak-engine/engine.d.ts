import { IEngine, ParseResult, RuntimeContext, ExecutionResult } from './interfaces';
/**
 * Main RegelSpraak engine
 */
export declare class Engine implements IEngine {
    private expressionEvaluator;
    private ruleExecutor;
    private decisionTableExecutor;
    private antlrParser;
    private unitRegistry;
    parse(source: string): ParseResult;
    /**
     * Parse a complete RegelSpraak model (may contain multiple definitions).
     * This is a convenience method that wraps the ANTLR parser's parseModel.
     * @param source The RegelSpraak source code
     * @returns Parse result with model AST
     */
    parseModel(source: string): {
        success: boolean;
        model?: any;
        errors?: string[];
    };
    execute(ast: any, context: RuntimeContext): ExecutionResult;
    run(source: string, context?: RuntimeContext): ExecutionResult;
    evaluate(source: string, data?: Record<string, any>): ExecutionResult;
    private convertToValue;
    private registerUnitSystem;
    /**
     * Deduce the target object type from a decision table's result column header.
     * Parses patterns like "de woonregio factor van een Natuurlijk persoon" → "Natuurlijk persoon"
     * Also maps Feittype role names (e.g., "passagier") to their object types ("Natuurlijk persoon").
     */
    private deduceBeslistabelTargetType;
    /**
     * Deduce the source object type for an ObjectCreation rule by scanning
     * its expressions for capitalized object type references (e.g., "de Vlucht").
     * This mirrors Python's _deduce_rule_target_type behavior.
     *
     * @deprecated Use deduceRuleTargetType() instead. This method is kept for backward compatibility.
     */
    private deduceObjectCreationSourceType;
    /**
     * Strip Dutch articles from the beginning of a string
     */
    private stripArticles;
    /**
     * Recursively extract all AttributeReference nodes from an expression.
     * Ports Python engine.py lines 490-510.
     */
    private extractAttributeReferences;
    /**
     * Deduce object type from a rule's condition expression.
     * Ports Python engine.py lines 463-488.
     */
    private deduceTypeFromCondition;
    /**
     * Map a role alias to its object type via FeitType definitions.
     * Ports Python engine.py lines 8896-8918.
     */
    private roleAliasToObjectType;
    /**
     * Deduce which object type this rule applies to.
     * Mirrors Python's _deduce_rule_target_type() for architectural parity.
     *
     * @param rule - The rule to analyze
     * @param context - Runtime context for accessing domain model
     * @returns Object type name to iterate over, or null if rule doesn't target objects
     */
    private deduceRuleTargetType;
    /**
     * Deduce type from attribute target (Gelijkstelling/KenmerkToekenning/Initialisatie).
     * Ports Python engine.py lines 517-849.
     */
    private deduceTypeFromAttributeTarget;
    /**
     * Deduce type for ObjectCreation rules.
     * Ports Python engine.py lines 523-560.
     */
    private deduceTypeForObjectCreation;
    /**
     * Deduce type for Consistentieregel rules.
     * Ports Python engine.py lines 564-625.
     */
    private deduceTypeForConsistentieregel;
    /**
     * Deduce type for Verdeling rules.
     * Ports Python engine.py lines 670-694 (more comprehensive version).
     */
    private deduceTypeForVerdeling;
    /**
     * Deduce type for FeitCreatie rules.
     * Ports Python engine.py lines 661-669.
     */
    private deduceTypeForFeitCreatie;
    /**
     * Deduce object type from a FeitCreatie subject reference.
     * Ports Python engine.py lines 410-461.
     */
    private deduceTypeFromSubjectRef;
}
//# sourceMappingURL=engine.d.ts.map