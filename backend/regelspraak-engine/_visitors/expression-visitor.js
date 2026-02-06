"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionVisitor = void 0;
/**
 * Visitor for building expression AST nodes from parse tree
 */
class ExpressionVisitor {
    visit(node) {
        // Route to specific visit methods based on node type
        const methodName = `visit${node.constructor.name}`;
        if (typeof this[methodName] === 'function') {
            return this[methodName](node);
        }
        return this.visitChildren(node);
    }
    visitChildren(node) {
        throw new Error(`Unhandled node type: ${node.constructor.name}`);
    }
    visitNumberLiteral(node) {
        return {
            type: 'NumberLiteral',
            value: parseFloat(node.getText())
        };
    }
}
exports.ExpressionVisitor = ExpressionVisitor;
//# sourceMappingURL=expression-visitor.js.map