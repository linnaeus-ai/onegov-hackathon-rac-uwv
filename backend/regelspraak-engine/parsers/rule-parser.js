"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleParser = void 0;
/**
 * Parser for RegelSpraak rules
 */
class RuleParser {
    input;
    position = 0;
    lines;
    currentLine = 0;
    constructor(input) {
        this.input = input;
        this.lines = input.split('\n');
    }
    parseRule() {
        // Parse "Regel <name>"
        const firstLine = this.lines[this.currentLine]?.trim();
        if (!firstLine || !firstLine.startsWith('Regel ')) {
            throw new Error('Expected "Regel" keyword');
        }
        const name = firstLine.substring(6).trim();
        if (!name) {
            throw new Error('Rule name missing');
        }
        this.currentLine++;
        // Check if we have more lines
        if (this.currentLine >= this.lines.length) {
            throw new Error('Expected "geldig" keyword');
        }
        // Parse version "geldig altijd"
        const versionLine = this.lines[this.currentLine].trim();
        if (!versionLine.startsWith('geldig ')) {
            throw new Error('Expected "geldig" keyword');
        }
        const validity = versionLine.substring(7).trim();
        if (validity !== 'altijd') {
            throw new Error('Only "geldig altijd" supported for now');
        }
        const version = {
            type: 'RuleVersion',
            validity: 'altijd'
        };
        this.currentLine++;
        // Check if we have more lines for the result part
        if (this.currentLine >= this.lines.length) {
            throw new Error('Expected rule content after version');
        }
        // Parse the result part (gelijkstelling)
        const resultLine = this.lines[this.currentLine].trim();
        const gelijkstelling = this.parseGelijkstelling(resultLine);
        return {
            type: 'Rule',
            name,
            version,
            result: gelijkstelling
        };
    }
    parseGelijkstelling(line) {
        // Pattern: "X moet berekend worden als Y"
        const match = line.match(/^(.+?)\s+moet\s+berekend\s+worden\s+als\s+(.+)\.?$/);
        if (!match) {
            throw new Error('Expected gelijkstelling pattern: "X moet berekend worden als Y"');
        }
        const targetName = this.parseTarget(match[1].trim());
        const expressionSource = match[2].trim().replace(/\.$/, ''); // Remove trailing period
        // Parse the expression using the expression parser
        const exprParser = new ExpressionParser(expressionSource);
        const expression = exprParser.parseExpression();
        // Create AttributeReference for the target
        const target = {
            type: 'AttributeReference',
            path: [targetName]
        };
        return {
            type: 'Gelijkstelling',
            target,
            expression
        };
    }
    parseTarget(targetText) {
        // For now, we'll extract a simple variable name from patterns like:
        // "Het resultaat van een berekening" → "resultaat"
        // "De leeftijd van een persoon" → "leeftijd"
        // Remove articles
        let cleaned = targetText.replace(/^(Het|De|Een)\s+/i, '');
        // Extract first word as the target
        const words = cleaned.split(/\s+/);
        return words[0].toLowerCase();
    }
}
exports.RuleParser = RuleParser;
/**
 * Expression parser (copied from engine.ts for now)
 * TODO: Move to shared module
 */
class ExpressionParser {
    input;
    position = 0;
    constructor(input) {
        this.input = input;
    }
    parseExpression() {
        return this.parseAdditive();
    }
    // Handle + and - (lower precedence)
    parseAdditive() {
        let left = this.parseMultiplicative();
        while (this.position < this.input.length) {
            this.skipWhitespace();
            // Check for "verminderd met" operator
            const remaining = this.input.substring(this.position);
            if (remaining.startsWith('verminderd met')) {
                this.position += 'verminderd met'.length;
                this.skipWhitespace();
                const right = this.parseMultiplicative();
                left = {
                    type: 'BinaryExpression',
                    operator: '-',
                    left,
                    right
                };
                continue;
            }
            const ch = this.input[this.position];
            if (ch === '+' || ch === '-') {
                this.position++;
                const operator = ch;
                const right = this.parseMultiplicative();
                left = {
                    type: 'BinaryExpression',
                    operator,
                    left,
                    right
                };
            }
            else {
                break;
            }
        }
        return left;
    }
    // Handle * and / (higher precedence)
    parseMultiplicative() {
        let left = this.parsePrimary();
        while (this.position < this.input.length) {
            this.skipWhitespace();
            const ch = this.input[this.position];
            if (ch === '*' || ch === '/') {
                this.position++;
                const operator = ch;
                const right = this.parsePrimary();
                left = {
                    type: 'BinaryExpression',
                    operator,
                    left,
                    right
                };
            }
            else {
                break;
            }
        }
        return left;
    }
    // Parse primary expressions (numbers, parentheses)
    parsePrimary() {
        this.skipWhitespace();
        // Handle parentheses
        if (this.input[this.position] === '(') {
            this.position++;
            const expr = this.parseExpression();
            this.skipWhitespace();
            if (this.input[this.position] !== ')') {
                throw new Error('Expected closing parenthesis');
            }
            this.position++;
            return expr;
        }
        // Try to parse identifier first
        if (this.isLetter(this.input[this.position])) {
            return this.parseIdentifier();
        }
        // Parse number
        const start = this.position;
        let hasDigit = false;
        // Optional negative sign
        if (this.input[this.position] === '-') {
            this.position++;
        }
        // Integer part
        while (this.position < this.input.length &&
            this.input[this.position] >= '0' &&
            this.input[this.position] <= '9') {
            hasDigit = true;
            this.position++;
        }
        // Decimal part
        if (this.position < this.input.length && this.input[this.position] === '.') {
            this.position++;
            while (this.position < this.input.length &&
                this.input[this.position] >= '0' &&
                this.input[this.position] <= '9') {
                hasDigit = true;
                this.position++;
            }
        }
        if (!hasDigit) {
            throw new Error(`Unexpected character: ${this.input[this.position] || 'EOF'}`);
        }
        const value = parseFloat(this.input.substring(start, this.position));
        return {
            type: 'NumberLiteral',
            value
        };
    }
    skipWhitespace() {
        while (this.position < this.input.length &&
            (this.input[this.position] === ' ' ||
                this.input[this.position] === '\t' ||
                this.input[this.position] === '\n' ||
                this.input[this.position] === '\r')) {
            this.position++;
        }
    }
    parseIdentifier() {
        const start = this.position;
        // First character must be letter
        if (!this.isLetter(this.input[this.position])) {
            throw new Error(`Expected identifier at position ${this.position}`);
        }
        // Continue with letters, digits, underscore
        while (this.position < this.input.length &&
            (this.isLetter(this.input[this.position]) ||
                this.isDigit(this.input[this.position]) ||
                this.input[this.position] === '_')) {
            this.position++;
        }
        const name = this.input.substring(start, this.position);
        // Check if this is a function call
        this.skipWhitespace();
        if (this.position < this.input.length && this.input[this.position] === '(') {
            this.position++; // consume '('
            const args = [];
            this.skipWhitespace();
            // Parse arguments
            if (this.input[this.position] !== ')') {
                args.push(this.parseExpression());
                while (this.position < this.input.length) {
                    this.skipWhitespace();
                    if (this.input[this.position] === ',') {
                        this.position++; // consume ','
                        this.skipWhitespace();
                        args.push(this.parseExpression());
                    }
                    else {
                        break;
                    }
                }
            }
            this.skipWhitespace();
            if (this.input[this.position] !== ')') {
                throw new Error('Expected closing parenthesis in function call');
            }
            this.position++; // consume ')'
            return {
                type: 'FunctionCall',
                functionName: name,
                arguments: args
            };
        }
        // Just a variable reference
        return {
            type: 'VariableReference',
            variableName: name
        };
    }
    isLetter(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    }
    isDigit(ch) {
        return ch >= '0' && ch <= '9';
    }
}
//# sourceMappingURL=rule-parser.js.map