"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourceLocation = createSourceLocation;
/**
 * Helper to create a SourceLocation from ANTLR context
 */
function createSourceLocation(ctx) {
    // ANTLR gives us the start column of the stop token, not the end
    // We need to add the token text length to get the actual end position
    const endColumn = ctx.stop ?
        ctx.stop.column + (ctx.stop.text ? ctx.stop.text.length - 1 : 0) :
        ctx.start.column;
    return {
        startLine: ctx.start.line,
        startColumn: ctx.start.column,
        endLine: ctx.stop ? ctx.stop.line : ctx.start.line,
        endColumn: endColumn
    };
}
//# sourceMappingURL=location.js.map