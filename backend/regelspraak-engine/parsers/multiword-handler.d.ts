/**
 * Handles multi-word keyword suggestions for RegelSpraak
 *
 * Data is extracted directly from the lexer grammar at build time.
 * When the parser expects 'groter', we expand to include 'groter dan' etc.
 *
 * This is the right way - driven by the grammar, not hardcoded.
 */
export declare class MultiWordHandler {
    private readonly multiWordMap;
    constructor();
    /**
     * Expand single tokens to include multi-word suggestions
     */
    expandToMultiWord(tokens: string[]): string[];
    /**
     * Complete a partial multi-word phrase
     */
    completeMultiWord(partial: string): string[];
    /**
     * Check if text could be start of a multi-word keyword
     */
    couldBePartialMultiWord(text: string): boolean;
}
//# sourceMappingURL=multiword-handler.d.ts.map