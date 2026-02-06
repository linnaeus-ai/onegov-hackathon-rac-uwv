"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiWordHandler = void 0;
const multiword_keywords_1 = require("../_generated/multiword-keywords");
/**
 * Handles multi-word keyword suggestions for RegelSpraak
 *
 * Data is extracted directly from the lexer grammar at build time.
 * When the parser expects 'groter', we expand to include 'groter dan' etc.
 *
 * This is the right way - driven by the grammar, not hardcoded.
 */
class MultiWordHandler {
    // Map from first word to complete multi-word phrases
    multiWordMap;
    constructor() {
        // Load from generated data
        this.multiWordMap = new Map(Object.entries(multiword_keywords_1.multiWordKeywords.byFirstWord));
    }
    /**
     * Expand single tokens to include multi-word suggestions
     */
    expandToMultiWord(tokens) {
        const results = new Set();
        for (const token of tokens) {
            // Always include the original token
            results.add(token);
            // Add multi-word expansions if they exist
            const expansions = this.multiWordMap.get(token.toLowerCase());
            if (expansions) {
                expansions.forEach(e => results.add(e));
            }
        }
        return Array.from(results).sort();
    }
    /**
     * Complete a partial multi-word phrase
     */
    completeMultiWord(partial) {
        const results = [];
        const partialLower = partial.toLowerCase();
        // Check all multi-word phrases from generated data
        for (const phrase of multiword_keywords_1.multiWordKeywords.allMultiWords) {
            if (phrase.startsWith(partialLower)) {
                results.push(phrase);
            }
        }
        return results;
    }
    /**
     * Check if text could be start of a multi-word keyword
     */
    couldBePartialMultiWord(text) {
        const textLower = text.toLowerCase();
        return multiword_keywords_1.multiWordKeywords.allMultiWords.some(phrase => phrase.startsWith(textLower) && phrase !== textLower);
    }
}
exports.MultiWordHandler = MultiWordHandler;
//# sourceMappingURL=multiword-handler.js.map