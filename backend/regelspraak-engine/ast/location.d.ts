/**
 * Source location information for AST nodes
 */
export interface SourceLocation {
    startLine: number;
    startColumn: number;
    endLine: number;
    endColumn: number;
}
/**
 * Map from AST nodes to their source locations
 */
export type LocationMap = WeakMap<object, SourceLocation>;
/**
 * Helper to create a SourceLocation from ANTLR context
 */
export declare function createSourceLocation(ctx: {
    start: any;
    stop: any;
}): SourceLocation;
//# sourceMappingURL=location.d.ts.map