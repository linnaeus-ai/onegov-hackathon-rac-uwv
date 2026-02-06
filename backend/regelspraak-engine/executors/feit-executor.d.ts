import { RuntimeContext, RuleExecutionResult } from '../interfaces';
import { FeitCreatie } from '../ast/rules';
/**
 * Executor for FeitCreatie (relationship creation)
 * Creates relationships between objects according to FeitType definitions
 */
export declare class FeitExecutor {
    private expressionEvaluator;
    constructor();
    /**
     * Execute a FeitCreatie rule result
     * Pattern: "Een [role1] van een [subject1] is een [role2] van een [subject2]"
     * - Right side (subject2/role2): Navigate to find existing objects
     * - Left side (subject1/role1): Create new relationships with those objects
     */
    executeFeitCreatie(feit: FeitCreatie, context: RuntimeContext): RuleExecutionResult;
    /**
     * Navigate a FeitCreatie subject pattern to find objects
     * Handles complex navigation like "de passagier van de reis met treinmiles van het vastgestelde contingent treinmiles"
     * Pattern: splits on "van" and navigates backwards through relationships
     */
    private navigateFeitCreatieSubject;
    /**
     * Resolve a subject reference to an object
     */
    private resolveSubject;
    /**
     * Get text representation of a subject for logging
     */
    private getSubjectText;
    /**
     * Find a FeitType that has the given role
     */
    private findMatchingFeittype;
    /**
     * Clean articles from a segment (de, het, een)
     */
    private cleanArticles;
    /**
     * Check if an object matches a description
     */
    private matchesDescription;
}
//# sourceMappingURL=feit-executor.d.ts.map