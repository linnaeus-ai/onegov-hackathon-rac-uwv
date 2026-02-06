import { KenmerkSpecification } from './ast/object-types';
/**
 * Union-Find (DSU) for kenmerk equivalence classes.
 * Supports morphological variants: "is X", "de X", etc.
 *
 * NOTE: "heeft" is only equivalent to base name for bezittelijk kenmerken.
 * This is enforced via explicit variant registration, NOT via normalization.
 */
export declare class KenmerkEquivalenceRegistry {
    private parent;
    private rank;
    private canonicalLabel;
    /**
     * Find with path compression.
     */
    find(name: string): string;
    /**
     * Union by rank. Preserves canonical label from winning root.
     * INVARIANT: Only call union() for variants of the SAME declared kenmerk.
     */
    union(name1: string, name2: string): void;
    /**
     * Register a kenmerk from model definition.
     * Sets the declared name as the stable canonical label.
     */
    registerKenmerk(spec: KenmerkSpecification): void;
    /**
     * Get stable canonical label (for storage key).
     * Always returns the explicitly set declared name.
     */
    getCanonicalLabel(name: string): string;
    /**
     * Check if two names are equivalent.
     */
    areEquivalent(name1: string, name2: string): boolean;
    /**
     * Register morphological variants as equivalent.
     * Only called for variants of the SAME declared kenmerk.
     */
    private registerMorphologicalVariants;
    /**
     * Normalize for lookup: lowercase, strip "is " prefix, strip articles.
     *
     * IMPORTANT: Does NOT strip "heeft " prefix.
     * "heeft X" is only equivalent to "X" for bezittelijk kenmerken,
     * and that equivalence is established via explicit variant registration,
     * not via normalization.
     */
    private normalizeForLookup;
}
//# sourceMappingURL=kenmerk-equivalence-registry.d.ts.map