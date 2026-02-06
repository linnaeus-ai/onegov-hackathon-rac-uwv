import { IRuleExecutor, RuleExecutionResult, RuntimeContext } from '../interfaces';
import { Rule, RegelGroep } from '../ast/rules';
/**
 * Executes RegelSpraak rules
 */
export declare class RuleExecutor implements IRuleExecutor {
    private expressionEvaluator;
    private feitExecutor;
    private recordRuleFired;
    /**
     * Normalize a string for comparison by:
     * 1. Inserting space before capital letters (e.g., "Natuurlijkpersoon" → "Natuurlijk persoon")
     * 2. Converting to lowercase
     * 3. Stripping leading articles (de/het/een)
     * 4. Collapsing multiple spaces
     */
    private normalize;
    /**
     * Check if the engine's current_instance matches the rule's target path.
     * Handles name normalization and role-to-type resolution.
     */
    private instanceMatchesTarget;
    /**
     * Navigate through an object graph and set an attribute value.
     * Handles both Feittype role navigation and direct attribute access.
     */
    private navigateAndSetAttribute;
    /**
     * Resolves a role name (e.g., "passagier") to its FeitType objectType (e.g., "Natuurlijk persoon").
     * This enables object-scoped rule detection for role-based targets.
     */
    private resolveRoleToObjectType;
    execute(rule: Rule, context: RuntimeContext): RuleExecutionResult;
    private executeResultPart;
    private executeGelijkstelling;
    private executeObjectCreation;
    private executeMultipleResults;
    private executeKenmerktoekenning;
    private executeKenmerktoekenningWithCondition;
    private isTruthy;
    private stripArticles;
    /**
     * Deduce the object type referenced in a condition.
     * Used for ObjectCreation and FeitCreatie rules to determine what objects to iterate over
     * when the rule has a condition like "indien het salaris groter is dan X".
     */
    private deduceTypeFromCondition;
    private typeHasAttribute;
    /**
     * Extract all attribute and variable references from an expression.
     * Recursively traverses the expression tree.
     */
    private extractReferences;
    /**
     * Execute ObjectCreation with a condition by iterating over relevant objects
     */
    private executeObjectCreationWithCondition;
    /**
     * Execute FeitCreatie with a condition by iterating over relevant objects
     */
    private executeFeitCreatieWithCondition;
    private executeConsistentieregel;
    private executeVerdeling;
    /**
     * Execute Verdeling for a single instance context.
     * Extracted from original executeVerdeling to support object-scoped iteration.
     */
    private executeVerdelingForInstance;
    /**
     * Resolve navigation path to collection of target objects for Verdeling.
     * Handles patterns like "de X van alle Y van Z" where:
     * - Y is a collection reference (role name, object type, or variable)
     * - Z may be a navigation context
     *
     * Ported from Python's _resolve_collection_for_verdeling.
     */
    private resolveCollectionForVerdeling;
    /**
     * Find object type that matches the given text (singular or plural form)
     */
    private findObjectTypeMatch;
    private setRemainderValue;
    private calculateDistribution;
    private distributeByRatio;
    private distributeOrdered;
    private applyMaximumConstraint;
    private applyRounding;
    executeRegelGroep(regelGroep: RegelGroep, context: RuntimeContext): RuleExecutionResult;
}
//# sourceMappingURL=rule-executor.d.ts.map