"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AntlrParser = void 0;
const antlr4_1 = require("antlr4");
const RegelSpraakLexer_1 = __importDefault(require("./_generated/antlr/RegelSpraakLexer"));
const RegelSpraakParser_1 = __importDefault(require("./_generated/antlr/RegelSpraakParser"));
const regelspraak_visitor_impl_1 = require("./_visitors/regelspraak-visitor-impl");
/**
 * Custom error listener to capture parse errors
 */
class CustomErrorListener extends antlr4_1.ErrorListener {
    errors = [];
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`line ${line}:${column} ${msg}`);
    }
    getErrors() {
        return this.errors;
    }
}
class AntlrParser {
    /**
     * Parse RegelSpraak source code and return array of definitions (backward compatibility)
     */
    parse(source) {
        const model = this.parseModel(source);
        // Convert DomainModel back to array for backward compatibility
        const results = [];
        // Add object types
        for (const objectType of model.objectTypes) {
            results.push(objectType);
        }
        // Add parameters
        for (const param of model.parameters) {
            results.push(param);
        }
        // Add dimensions
        for (const dimension of model.dimensions) {
            results.push(dimension);
        }
        // Add rules
        for (const regel of model.regels) {
            results.push(regel);
        }
        // Add regel groups
        for (const regelGroep of model.regelGroepen) {
            results.push(regelGroep);
        }
        // Add decision tables
        for (const beslistabel of model.beslistabels) {
            results.push(beslistabel);
        }
        // Add domains
        for (const domain of model.domains) {
            results.push(domain);
        }
        // Add feit types
        for (const feitType of model.feitTypes) {
            results.push(feitType);
        }
        // Add unit systems
        for (const unitSystem of model.unitSystems) {
            results.push(unitSystem);
        }
        return results;
    }
    /**
     * Parse RegelSpraak source code and return both model and location map
     */
    parseWithLocations(source) {
        const chars = new antlr4_1.CharStream(source);
        const lexer = new RegelSpraakLexer_1.default(chars);
        const tokens = new antlr4_1.CommonTokenStream(lexer);
        const parser = new RegelSpraakParser_1.default(tokens);
        // Set up custom error listener
        const errorListener = new CustomErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        // Parse starting from the root rule
        const tree = parser.regelSpraakDocument();
        // Check for parse errors
        const errors = errorListener.getErrors();
        if (errors.length > 0) {
            const firstError = errors[0];
            throw new Error(firstError);
        }
        // Visit the tree to build our AST
        try {
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            const model = visitor.visit(tree);
            // LocationMap removed - locations are now stored directly on nodes
            return { model, locationMap: new WeakMap() }; // Empty map for compatibility
        }
        catch (error) {
            console.error('Visitor error:', error);
            console.error('Stack:', error.stack);
            throw error;
        }
    }
    /**
     * Parse RegelSpraak source code and return a DomainModel
     */
    parseModel(source) {
        const chars = new antlr4_1.CharStream(source);
        const lexer = new RegelSpraakLexer_1.default(chars);
        const tokens = new antlr4_1.CommonTokenStream(lexer);
        const parser = new RegelSpraakParser_1.default(tokens);
        // Set up custom error listener
        const errorListener = new CustomErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        // Parse starting from the root rule
        const tree = parser.regelSpraakDocument();
        // Check for parse errors
        const errors = errorListener.getErrors();
        if (errors.length > 0) {
            const firstError = errors[0];
            throw new Error(firstError);
        }
        // Visit the tree to build our AST
        try {
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            return visitor.visit(tree);
        }
        catch (error) {
            console.error('Visitor error:', error);
            console.error('Stack:', error.stack);
            throw error;
        }
    }
    /**
     * Parse just an expression
     */
    parseExpression(source) {
        try {
            const chars = new antlr4_1.CharStream(source);
            const lexer = new RegelSpraakLexer_1.default(chars);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new RegelSpraakParser_1.default(tokens);
            // Set up custom error listener
            const errorListener = new CustomErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            // Parse just an expression
            const tree = parser.expressie();
            // Check for parse errors
            const errors = errorListener.getErrors();
            if (errors.length > 0) {
                const firstError = errors[0];
                // Map ANTLR errors to user-friendly messages
                if (firstError.includes('no viable alternative') && source.includes('de wortel van')) {
                    throw new Error('Missing argument for "de wortel van"');
                }
                if (firstError.includes('no viable alternative') && source.includes('de absolute waarde van')) {
                    throw new Error('Missing argument for "de absolute waarde van"');
                }
                throw new Error(firstError);
            }
            // Check if there's unparsed input (multiple arguments)
            const currentToken = parser.getCurrentToken();
            if (currentToken && currentToken.type !== RegelSpraakParser_1.default.EOF) {
                // Check specific patterns for better error messages
                if (source.includes('de wortel van') && currentToken.text === ',') {
                    throw new Error('Multiple arguments not supported for "de wortel van"');
                }
                if (source.includes('de absolute waarde van') && currentToken.text === ',') {
                    throw new Error('Multiple arguments not supported for "de absolute waarde van"');
                }
                // Generic error for other cases
                throw new Error(`Unexpected input after expression: ${currentToken.text}`);
            }
            if (!tree) {
                throw new Error('Failed to parse expression: parser returned null');
            }
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            return visitor.visit(tree);
        }
        catch (error) {
            // Don't add "Parse error: " prefix for specific error messages
            if (error instanceof Error &&
                (error.message === 'Expected "geldig" keyword' ||
                    error.message.includes('Expected gelijkstelling pattern') ||
                    error.message.includes('Missing argument for') ||
                    error.message.includes('Multiple arguments not supported'))) {
                throw error;
            }
            throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    /**
     * Parse a rule definition
     */
    parseRule(source) {
        try {
            const chars = new antlr4_1.CharStream(source);
            const lexer = new RegelSpraakLexer_1.default(chars);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new RegelSpraakParser_1.default(tokens);
            // Set up custom error listener
            const errorListener = new CustomErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            // Parse a regel (rule definition)
            const tree = parser.regel();
            // Check for parse errors
            const errors = errorListener.getErrors();
            if (errors.length > 0) {
                const firstError = errors[0];
                // Map ANTLR errors to user-friendly messages
                if (firstError.includes("expecting 'geldig'") ||
                    (firstError.includes("no viable alternative") && !source.includes('geldig'))) {
                    throw new Error('Expected "geldig" keyword');
                }
                if (firstError.includes("mismatched input 'is'") ||
                    firstError.includes("expecting 'wordt")) {
                    throw new Error('Expected gelijkstelling pattern (moet berekend worden als)');
                }
                throw new Error(firstError);
            }
            if (!tree) {
                throw new Error('Failed to parse rule: parser returned null');
            }
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            return visitor.visit(tree);
        }
        catch (error) {
            // Don't add "Parse error: " prefix for specific error messages
            if (error instanceof Error &&
                (error.message === 'Expected "geldig" keyword' ||
                    error.message.includes('Expected gelijkstelling pattern'))) {
                throw error;
            }
            throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    /**
     * Parse an object type definition
     */
    parseObjectType(source) {
        try {
            const chars = new antlr4_1.CharStream(source);
            const lexer = new RegelSpraakLexer_1.default(chars);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new RegelSpraakParser_1.default(tokens);
            // Set up custom error listener
            const errorListener = new CustomErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            // Parse an objectTypeDefinition
            const tree = parser.objectTypeDefinition();
            // Check for parse errors
            const errors = errorListener.getErrors();
            if (errors.length > 0) {
                throw new Error(errors[0]);
            }
            if (!tree) {
                throw new Error('Failed to parse object type: parser returned null');
            }
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            return visitor.visit(tree);
        }
        catch (error) {
            throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    /**
     * Parse a parameter definition
     */
    parseParameter(source) {
        try {
            const chars = new antlr4_1.CharStream(source);
            const lexer = new RegelSpraakLexer_1.default(chars);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new RegelSpraakParser_1.default(tokens);
            // Set up custom error listener
            const errorListener = new CustomErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            // Parse a parameterDefinition
            const tree = parser.parameterDefinition();
            // Check for parse errors
            const errors = errorListener.getErrors();
            if (errors.length > 0) {
                throw new Error(errors[0]);
            }
            if (!tree) {
                throw new Error('Failed to parse parameter: parser returned null');
            }
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            return visitor.visit(tree);
        }
        catch (error) {
            throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
    /**
     * Parse a decision table (beslistabel)
     */
    parseDecisionTable(source) {
        try {
            const chars = new antlr4_1.CharStream(source);
            const lexer = new RegelSpraakLexer_1.default(chars);
            const tokens = new antlr4_1.CommonTokenStream(lexer);
            const parser = new RegelSpraakParser_1.default(tokens);
            // Set up custom error listener
            const errorListener = new CustomErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(errorListener);
            // Parse a beslistabel
            const tree = parser.beslistabel();
            // Check for parse errors
            const errors = errorListener.getErrors();
            if (errors.length > 0) {
                throw new Error(errors[0]);
            }
            if (!tree) {
                throw new Error('Failed to parse decision table: parser returned null');
            }
            const visitor = new regelspraak_visitor_impl_1.RegelSpraakVisitorImpl();
            return visitor.visit(tree);
        }
        catch (error) {
            throw new Error(`Parse error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}
exports.AntlrParser = AntlrParser;
//# sourceMappingURL=parser.js.map