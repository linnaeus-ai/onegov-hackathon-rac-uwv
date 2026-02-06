import { IVisitor } from '../interfaces';
import { Expression, NumberLiteral } from '../ast/expressions';
/**
 * Visitor for building expression AST nodes from parse tree
 */
export declare class ExpressionVisitor implements IVisitor<Expression> {
    visit(node: any): Expression;
    visitChildren(node: any): Expression;
    visitNumberLiteral(node: any): NumberLiteral;
}
//# sourceMappingURL=expression-visitor.d.ts.map