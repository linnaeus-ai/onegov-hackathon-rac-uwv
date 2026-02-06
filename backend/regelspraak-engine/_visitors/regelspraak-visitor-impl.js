"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegelSpraakVisitorImpl = void 0;
const antlr4_1 = require("antlr4");
const RegelSpraakParser_1 = __importDefault(require("../_generated/antlr/RegelSpraakParser"));
const RegelSpraakLexer_1 = __importDefault(require("../_generated/antlr/RegelSpraakLexer"));
const expressions_1 = require("../ast/expressions");
const location_1 = require("../ast/location");
/**
 * Implementation of ANTLR4 visitor that builds our AST
 */
class RegelSpraakVisitorImpl extends antlr4_1.ParseTreeVisitor {
    // Track object types and their attributes for compound attribute resolution
    objectTypeAttributes = new Map();
    feitTypes = new Map();
    parameterNames = new Set();
    // Track registered dimension labels for model-driven stripping (label -> dimension name)
    registeredDimensionLabels = new Map();
    /**
     * Set location directly on the node.
     * No more WeakMap. Location is part of the node.
     */
    setLocation(node, ctx) {
        if (node && typeof node === 'object' && ctx) {
            node.location = (0, location_1.createSourceLocation)(ctx);
        }
    }
    visitRegelSpraakDocument(ctx) {
        // Create a proper DomainModel
        const model = {
            objectTypes: [],
            parameters: [],
            regels: [],
            regelGroepen: [],
            beslistabels: [],
            dimensions: [],
            dagsoortDefinities: [],
            domains: [],
            feitTypes: [],
            unitSystems: []
        };
        // Get all top-level elements
        const definitions = ctx.definitie_list() || [];
        const rules = ctx.regel_list() || [];
        const regelGroups = ctx.regelGroep_list() || [];
        const beslistabels = ctx.beslistabel_list() || [];
        const consistentieregels = ctx.consistentieregel_list() || [];
        const eenheidsystems = ctx.eenheidsysteemDefinition_list() || [];
        // Visit definitions and categorize them
        for (const def of definitions) {
            const result = this.visit(def);
            if (result) {
                // Categorize based on type
                if (result.type === 'ObjectTypeDefinition') {
                    model.objectTypes.push(result);
                }
                else if (result.type === 'ParameterDefinition') {
                    model.parameters.push(result);
                    // Track parameter name for ParameterReference creation
                    this.parameterNames.add(result.name);
                }
                else if (result.type === 'Dimension') {
                    model.dimensions.push(result);
                }
                else if (result.type === 'Dagsoort' || result.type === 'DagsoortDefinitie') {
                    model.dagsoortDefinities.push(result);
                }
                else if (result.type === 'DomainDefinition') {
                    model.domains.push(result);
                }
                else if (result.type === 'FeitType') {
                    model.feitTypes.push(result);
                }
            }
        }
        // Visit rules and add to regels
        for (const rule of rules) {
            const result = this.visit(rule);
            if (result) {
                model.regels.push(result);
            }
        }
        // Visit consistency rules and add to regels
        for (const consistentieregel of consistentieregels) {
            const result = this.visit(consistentieregel);
            if (result) {
                model.regels.push(result);
            }
        }
        // Visit beslistabels
        for (const beslistabel of beslistabels) {
            const result = this.visit(beslistabel);
            if (result) {
                model.beslistabels.push(result);
            }
        }
        // Visit regel groups
        for (const regelGroup of regelGroups) {
            const result = this.visit(regelGroup);
            if (result) {
                model.regelGroepen.push(result);
            }
        }
        // Visit unit systems
        for (const unitSystem of eenheidsystems) {
            const result = this.visit(unitSystem);
            if (result) {
                model.unitSystems.push(result);
            }
        }
        return model;
    }
    visitExpressie(ctx) {
        // Handle different expression alternatives based on context type
        const contextName = ctx.constructor.name;
        // Check for specific labeled alternatives
        if (contextName === 'ExprAfrondingContext') {
            return this.visitExprAfronding(ctx);
        }
        else if (contextName === 'ExprBegrenzingContext') {
            return this.visitExprBegrenzing(ctx);
        }
        else if (contextName === 'ExprBegrenzingAfrondingContext') {
            return this.visitExprBegrenzingAfronding(ctx);
        }
        // Default case: just delegate to logicalExpression
        const logicalExpr = ctx.logicalExpression ? ctx.logicalExpression() : null;
        if (logicalExpr) {
            return this.visit(logicalExpr);
        }
        // Fallback to visiting children
        return this.visitChildren(ctx);
    }
    visitExprAfronding(ctx) {
        // Expression with afronding (rounding)
        const expr = this.visit(ctx.logicalExpression());
        if (!expr) {
            return this.visitChildren(ctx);
        }
        const afrondingCtx = ctx.afronding ? ctx.afronding() : null;
        if (!afrondingCtx) {
            return expr;
        }
        // Extract rounding direction
        let direction = undefined;
        if (afrondingCtx.NAAR_BENEDEN && afrondingCtx.NAAR_BENEDEN()) {
            direction = 'naar_beneden';
        }
        else if (afrondingCtx.NAAR_BOVEN && afrondingCtx.NAAR_BOVEN()) {
            direction = 'naar_boven';
        }
        else if (afrondingCtx.REKENKUNDIG && afrondingCtx.REKENKUNDIG()) {
            direction = 'rekenkundig';
        }
        else if (afrondingCtx.RICHTING_NUL && afrondingCtx.RICHTING_NUL()) {
            direction = 'richting_nul';
        }
        else if (afrondingCtx.WEG_VAN_NUL && afrondingCtx.WEG_VAN_NUL()) {
            direction = 'weg_van_nul';
        }
        // Extract decimals
        const decimals = afrondingCtx.NUMBER && afrondingCtx.NUMBER() ?
            parseInt(afrondingCtx.NUMBER().getText(), 10) : 0;
        const result = {
            type: 'AfrondingExpression',
            expression: expr,
            direction,
            decimals
        };
        this.setLocation(result, ctx);
        return result;
    }
    visitExprBegrenzing(ctx) {
        // Expression with begrenzing (limiting)
        const expr = this.visit(ctx.logicalExpression());
        if (!expr) {
            return this.visitChildren(ctx);
        }
        const begrenzingCtx = ctx.begrenzing ? ctx.begrenzing() : null;
        if (!begrenzingCtx) {
            return expr;
        }
        let minimum;
        let maximum;
        // Check for minimum
        if (begrenzingCtx.begrenzingMinimum && begrenzingCtx.begrenzingMinimum()) {
            const minCtx = begrenzingCtx.begrenzingMinimum();
            if (minCtx.expressie && minCtx.expressie()) {
                minimum = this.visit(minCtx.expressie());
            }
        }
        // Check for maximum
        else if (begrenzingCtx.begrenzingMaximum && begrenzingCtx.begrenzingMaximum()) {
            const maxCtx = begrenzingCtx.begrenzingMaximum();
            if (maxCtx.expressie && maxCtx.expressie()) {
                maximum = this.visit(maxCtx.expressie());
            }
        }
        const result = {
            type: 'BegrenzingExpression',
            expression: expr,
            minimum,
            maximum
        };
        this.setLocation(result, ctx);
        return result;
    }
    visitExprBegrenzingAfronding(ctx) {
        // Expression with both begrenzing and afronding
        const expr = this.visit(ctx.logicalExpression());
        if (!expr) {
            return this.visitChildren(ctx);
        }
        // Handle begrenzing
        let minimum;
        let maximum;
        const begrenzingCtx = ctx.begrenzing ? ctx.begrenzing() : null;
        if (begrenzingCtx) {
            // Check for minimum
            if (begrenzingCtx.begrenzingMinimum && begrenzingCtx.begrenzingMinimum()) {
                const minCtx = begrenzingCtx.begrenzingMinimum();
                if (minCtx.expressie && minCtx.expressie()) {
                    minimum = this.visit(minCtx.expressie());
                }
            }
            // Check for maximum
            else if (begrenzingCtx.begrenzingMaximum && begrenzingCtx.begrenzingMaximum()) {
                const maxCtx = begrenzingCtx.begrenzingMaximum();
                if (maxCtx.expressie && maxCtx.expressie()) {
                    maximum = this.visit(maxCtx.expressie());
                }
            }
        }
        // Handle afronding
        let direction = undefined;
        let decimals = 0;
        const afrondingCtx = ctx.afronding ? ctx.afronding() : null;
        if (afrondingCtx) {
            // Extract rounding direction
            if (afrondingCtx.NAAR_BENEDEN && afrondingCtx.NAAR_BENEDEN()) {
                direction = 'naar_beneden';
            }
            else if (afrondingCtx.NAAR_BOVEN && afrondingCtx.NAAR_BOVEN()) {
                direction = 'naar_boven';
            }
            else if (afrondingCtx.REKENKUNDIG && afrondingCtx.REKENKUNDIG()) {
                direction = 'rekenkundig';
            }
            else if (afrondingCtx.RICHTING_NUL && afrondingCtx.RICHTING_NUL()) {
                direction = 'richting_nul';
            }
            else if (afrondingCtx.WEG_VAN_NUL && afrondingCtx.WEG_VAN_NUL()) {
                direction = 'weg_van_nul';
            }
            // Extract decimals
            decimals = afrondingCtx.NUMBER && afrondingCtx.NUMBER() ?
                parseInt(afrondingCtx.NUMBER().getText(), 10) : 0;
        }
        const result = {
            type: 'BegrenzingAfrondingExpression',
            expression: expr,
            minimum,
            maximum,
            direction,
            decimals
        };
        this.setLocation(result, ctx);
        return result;
    }
    visitLogicalExpr(ctx) {
        // Get the left comparison expression
        const left = this.visitComparisonExpression(ctx.comparisonExpression());
        // Check if there's a logical operator
        const logicalExpr = ctx.logicalExpression();
        if (!logicalExpr) {
            // No logical operator, just return the comparison expression
            return left;
        }
        // Get the right logical expression
        const right = this.visit(logicalExpr);
        // Get the logical operator (EN or OF)
        const opToken = ctx.EN() || ctx.OF();
        if (!opToken) {
            throw new Error('Expected logical operator EN or OF');
        }
        // Map Dutch operators to standard operators
        const opText = opToken.getText();
        const operator = opText.toLowerCase() === 'en' ? '&&' : '||';
        const node = {
            type: 'BinaryExpression',
            operator: operator,
            left,
            right
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitComparisonExpression(ctx) {
        // Check which type of comparison expression this is
        const contextName = ctx.constructor.name;
        if (contextName === 'BinaryComparisonExprContext') {
            return this.visitBinaryComparisonExpr(ctx);
        }
        else if (contextName === 'UnaryConditionExprContext') {
            return this.visitUnaryConditionExpr(ctx);
        }
        else if (contextName === 'RegelStatusConditionExprContext') {
            return this.visitRegelStatusConditionExpr(ctx);
        }
        else if (contextName === 'IsKenmerkExprContext') {
            return this.visitIsKenmerkExpr(ctx);
        }
        else if (contextName === 'HeeftKenmerkExprContext') {
            return this.visitHeeftKenmerkExpr(ctx);
        }
        else if (contextName === 'SubordinateClauseExprContext') {
            return this.visitSubordinateClauseExpr(ctx);
        }
        else {
            // Fallback - try to visit it generically
            return this.visit(ctx);
        }
    }
    visitBinaryComparisonExpr(ctx) {
        // Get the additive expressions
        const additiveExprs = ctx.additiveExpression_list();
        if (additiveExprs.length === 1) {
            // No comparison operator, just return the single expression
            return this.visit(additiveExprs[0]);
        }
        // Get the left and right expressions
        const left = this.visit(additiveExprs[0]);
        const right = this.visit(additiveExprs[1]);
        // Get the comparison operator
        const compOp = ctx.comparisonOperator();
        // Map Dutch operators to standard operators
        const opText = compOp.getText();
        let operator;
        switch (opText) {
            case 'gelijk aan':
            case 'gelijk is aan':
            case 'is gelijk aan':
            case 'zijn gelijk aan':
                operator = '==';
                break;
            case 'ongelijk aan':
            case 'is ongelijk aan':
            case 'zijn ongelijk aan':
                operator = '!=';
                break;
            case 'groter dan':
            case 'groter is dan':
            case 'is groter dan':
            case 'zijn groter dan':
                operator = '>';
                break;
            case 'groter of gelijk aan':
            case 'groter of gelijk is aan':
            case 'is groter of gelijk aan':
            case 'zijn groter of gelijk aan':
                operator = '>=';
                break;
            case 'kleiner dan':
            case 'kleiner is dan':
            case 'is kleiner dan':
            case 'zijn kleiner dan':
                operator = '<';
                break;
            case 'kleiner of gelijk aan':
            case 'kleiner of gelijk is aan':
            case 'is kleiner of gelijk aan':
            case 'zijn kleiner of gelijk aan':
                operator = '<=';
                break;
            default:
                throw new Error(`Unknown comparison operator: ${opText}`);
        }
        const node = {
            type: 'BinaryExpression',
            operator: operator,
            left,
            right
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitUnaryConditionExpr(ctx) {
        // UnaryConditionExpr wraps unaryCondition in comparisonExpression
        const unaryConditionCtx = ctx.unaryCondition();
        return this.visitUnaryCondition(unaryConditionCtx);
    }
    visitRegelStatusConditionExpr(ctx) {
        // RegelStatusConditionExpr wraps regelStatusCondition in comparisonExpression
        const regelStatusConditionCtx = ctx.regelStatusCondition();
        return this.visitRegelStatusCondition(regelStatusConditionCtx);
    }
    visitRegelStatusCondition(ctx) {
        // Extract rule name from naamwoord
        // ANTLR generates both _name property and naamwoord() method for labeled grammar elements
        const naamwoordCtx = ctx._name || (ctx.naamwoord && ctx.naamwoord());
        if (!naamwoordCtx) {
            throw new Error('Missing naamwoord context in regelStatusCondition');
        }
        const rawName = this.extractTextWithSpaces(naamwoordCtx);
        const regelNaam = this.extractParameterName(rawName);
        // Determine check type from context class name (labeled alternatives)
        // Grammar: regelStatusGevuurdCheck | regelStatusInconsistentCheck
        const contextName = ctx.constructor.name;
        let check;
        let predicateOperator;
        if (contextName === 'RegelStatusGevuurdCheckContext') {
            check = 'gevuurd';
            predicateOperator = 'gevuurd';
        }
        else if (contextName === 'RegelStatusInconsistentCheckContext') {
            check = 'inconsistent';
            predicateOperator = 'inconsistent';
        }
        else {
            throw new Error(`Unhandled regel status context: ${contextName}`);
        }
        // Create regel status expression with unified predicate
        const node = {
            type: 'RegelStatusExpression',
            regelNaam,
            check,
            // Add unified predicate representation
            predicate: {
                type: 'SimplePredicate',
                operator: predicateOperator,
                // Store regel name as a string literal expression
                left: {
                    type: 'StringLiteral',
                    value: regelNaam
                }
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitUnaryCondition(ctx) {
        // Check which type of unary condition this is
        const contextName = ctx.constructor.name;
        if (contextName === 'UnaryCheckConditionContext') {
            return this.visitUnaryCheckCondition(ctx);
        }
        else if (contextName === 'UnaryDagsoortConditionContext') {
            return this.visitUnaryDagsoortCondition(ctx);
        }
        else if (contextName === 'UnaryUniekConditionContext') {
            return this.visitUnaryUniekCondition(ctx);
        }
        else if (contextName === 'UnaryNumeriekExactConditionContext') {
            return this.visitUnaryNumeriekExactCondition(ctx);
        }
        else {
            throw new Error(`Unsupported unary condition type: ${contextName}`);
        }
    }
    visitUnaryDagsoortCondition(ctx) {
        // expr=primaryExpression op=(IS_EEN_DAGSOORT | ...) dagsoort=identifier
        const expr = this.visit(ctx.primaryExpression());
        // Get the dagsoort identifier
        const dagsoortCtx = ctx.identifier();
        if (!dagsoortCtx) {
            throw new Error('Expected dagsoort identifier');
        }
        const dagsoortName = dagsoortCtx.getText();
        // Get the operator - use the private _op property
        const opToken = ctx._op;
        if (!opToken) {
            throw new Error('Expected operator token in dagsoort condition');
        }
        let binaryOp;
        if (opToken.type === RegelSpraakLexer_1.default.IS_EEN_DAGSOORT) {
            binaryOp = 'is een dagsoort';
        }
        else if (opToken.type === RegelSpraakLexer_1.default.ZIJN_EEN_DAGSOORT) {
            binaryOp = 'zijn een dagsoort';
        }
        else if (opToken.type === RegelSpraakLexer_1.default.IS_GEEN_DAGSOORT) {
            binaryOp = 'is geen dagsoort';
        }
        else if (opToken.type === RegelSpraakLexer_1.default.ZIJN_GEEN_DAGSOORT) {
            binaryOp = 'zijn geen dagsoort';
        }
        else {
            throw new Error(`Unknown dagsoort operator token type: ${opToken.type}`);
        }
        // Determine if negated
        const negated = binaryOp.includes('geen');
        // Create a binary expression with unified predicate
        const node = {
            type: 'BinaryExpression',
            operator: binaryOp,
            left: expr,
            right: {
                type: 'StringLiteral',
                value: dagsoortName
            },
            // Add unified predicate representation
            predicate: {
                type: 'SimplePredicate',
                operator: 'dagsoort',
                left: expr,
                dagsoort: dagsoortName,
                negated: negated
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitUnaryUniekCondition(ctx) {
        // ref=onderwerpReferentie MOETEN_UNIEK_ZIJN
        const ref = this.visit(ctx.onderwerpReferentie());
        // Create unary expression with unified predicate
        const node = {
            type: 'UnaryExpression',
            operator: 'moeten uniek zijn',
            operand: ref,
            // Add unified predicate representation
            predicate: {
                type: 'SimplePredicate',
                operator: 'uniek',
                left: ref
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitUnaryNumeriekExactCondition(ctx) {
        // expr=primaryExpression op=(IS_NUMERIEK_MET_EXACT | ...) NUMBER CIJFERS
        const expr = this.visit(ctx.primaryExpression());
        // Get the digit count from NUMBER token
        const digitCountToken = ctx.NUMBER();
        if (!digitCountToken) {
            throw new Error('Expected digit count in numeric exact condition');
        }
        const digitCount = parseInt(digitCountToken.getText());
        // Map operator token to string and determine negation
        let operator;
        let negated = false;
        if (ctx.IS_NUMERIEK_MET_EXACT()) {
            operator = 'is numeriek met exact';
        }
        else if (ctx.IS_NIET_NUMERIEK_MET_EXACT()) {
            operator = 'is niet numeriek met exact';
            negated = true;
        }
        else if (ctx.ZIJN_NUMERIEK_MET_EXACT()) {
            operator = 'zijn numeriek met exact';
        }
        else if (ctx.ZIJN_NIET_NUMERIEK_MET_EXACT()) {
            operator = 'zijn niet numeriek met exact';
            negated = true;
        }
        else {
            throw new Error('Unknown numeric exact operator');
        }
        // Create binary expression with unified predicate
        const node = {
            type: 'BinaryExpression',
            left: expr,
            operator: operator,
            right: {
                type: 'NumberLiteral',
                value: digitCount
            },
            // Add unified predicate representation
            predicate: {
                type: 'SimplePredicate',
                operator: 'numeriek_exact',
                left: expr,
                digits: digitCount,
                negated: negated
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitAdditiveExpression(ctx) {
        // Get all multiplicative expressions
        const multiplicativeExprs = ctx.multiplicativeExpression_list();
        if (multiplicativeExprs.length === 1) {
            return this.visit(multiplicativeExprs[0]);
        }
        // Build left-associative tree
        let result = this.visit(multiplicativeExprs[0]);
        // Get operators between expressions
        const operators = ctx.additiveOperator_list();
        for (let i = 0; i < operators.length; i++) {
            const opText = operators[i].getText();
            const operator = opText === 'plus' ? '+' : '-';
            const right = this.visit(multiplicativeExprs[i + 1]);
            result = {
                type: 'BinaryExpression',
                operator: operator,
                left: result,
                right
            };
        }
        return result;
    }
    visitMultiplicativeExpression(ctx) {
        // Get all power expressions
        const powerExprs = ctx.powerExpression_list();
        if (powerExprs.length === 1) {
            return this.visit(powerExprs[0]);
        }
        // Build left-associative tree
        let result = this.visit(powerExprs[0]);
        // Get operators between expressions
        const operators = ctx.multiplicativeOperator_list();
        for (let i = 0; i < operators.length; i++) {
            const opText = operators[i].getText();
            const operator = opText === 'maal' ? '*' : '/';
            const right = this.visit(powerExprs[i + 1]);
            result = {
                type: 'BinaryExpression',
                operator: operator,
                left: result,
                right
            };
        }
        return result;
    }
    visitPowerExpression(ctx) {
        // For now, just pass through to primary
        const primaryExprs = ctx.primaryExpression_list();
        if (primaryExprs.length > 1) {
            throw new Error('Power operator not yet supported');
        }
        return this.visit(primaryExprs[0]);
    }
    visitPrimaryExpression(ctx) {
        // Dispatch to specific visitor methods based on context type
        const contextName = ctx.constructor.name;
        // Handle specific labeled alternatives
        switch (contextName) {
            // Literals
            case 'NumberLiteralExprContext':
                return this.visitNumberLiteralExpr(ctx);
            case 'StringLiteralExprContext':
                return this.visitStringLiteralExpr(ctx);
            case 'BooleanTrueLiteralExprContext':
                return this.visitBooleanTrueLiteralExpr(ctx);
            case 'BooleanFalseLiteralExprContext':
                return this.visitBooleanFalseLiteralExpr(ctx);
            case 'DatumLiteralExprContext':
                return this.visitDatumLiteralExpr(ctx);
            case 'PercentageLiteralExprContext':
                return this.visitPercentageLiteralExpr(ctx);
            case 'EnumLiteralExprContext':
                return this.visitEnumLiteralExpr(ctx);
            case 'TekstreeksLiteralExprContext':
                // Handle text sequence literal - needs implementation
                return this.visitStringLiteralExpr(ctx); // Temporary fallback
            // References
            case 'OnderwerpRefExprContext':
                return this.visitOnderwerpRefExpr(ctx);
            case 'AttrRefExprContext':
                return this.visitAttrRefExpr(ctx);
            case 'BezieldeRefExprContext':
                return this.visitBezieldeRefExpr(ctx);
            case 'ParamRefExprContext':
                return this.visitParamRefExpr(ctx);
            case 'IdentifierExprContext':
                return this.visitIdentifierExpr(ctx);
            case 'NaamwoordExprContext':
                return this.visitNaamwoordExpr(ctx);
            case 'PronounExprContext':
                // Handle pronoun expression - needs implementation
                return this.visitIdentifierExpr(ctx); // Temporary fallback
            // Function calls and special expressions
            case 'PasenFuncExprContext':
                return this.visitPasenFuncExpr(ctx);
            case 'SimpleConcatenatieExprContext':
                return this.visitSimpleConcatenatieExpr(ctx);
            case 'AantalFuncExprContext':
                return this.visitAantalFuncExpr(ctx);
            case 'AantalAttribuutExprContext':
                return this.visitAantalAttribuutExpr(ctx);
            case 'EersteDatumFuncExprContext':
                return this.visitEersteDatumFuncExpr(ctx);
            case 'LaatsteDatumFuncExprContext':
                return this.visitLaatsteDatumFuncExpr(ctx);
            case 'SomFuncExprContext':
                return this.visitSomFuncExpr(ctx);
            case 'SomAlleExprContext':
                return this.visitSomAlleExpr(ctx);
            case 'SomAlleAttribuutExprContext':
                return this.visitSomAlleAttribuutExpr(ctx);
            case 'MinAlleAttribuutExprContext':
                return this.visitMinAlleAttribuutExpr(ctx);
            case 'MaxAlleAttribuutExprContext':
                return this.visitMaxAlleAttribuutExpr(ctx);
            case 'TijdsevenredigDeelExprContext':
                return this.visitTijdsevenredigDeelExpr(ctx);
            case 'CapitalizedTijdsevenredigDeelExprContext':
                // Needs implementation - delegate to regular version
                return this.visitTijdsevenredigDeelExpr(ctx);
            case 'TijdsduurFuncExprContext':
                return this.visitTijdsduurFuncExpr(ctx);
            case 'AbsTijdsduurFuncExprContext':
                return this.visitAbsTijdsduurFuncExpr(ctx);
            case 'AbsValFuncExprContext':
                return this.visitAbsValFuncExpr(ctx);
            case 'PercentageFuncExprContext':
                return this.visitPercentageFuncExpr(ctx);
            case 'PercentageOfExprContext':
                return this.visitPercentageOfExpr(ctx);
            case 'WortelFuncExprContext':
                return this.visitWortelFuncExpr(ctx);
            case 'MinValFuncExprContext':
                return this.visitMinValFuncExpr(ctx);
            case 'MaxValFuncExprContext':
                return this.visitMaxValFuncExpr(ctx);
            case 'JaarUitFuncExprContext':
                return this.visitJaarUitFuncExpr(ctx);
            case 'MaandUitFuncExprContext':
                return this.visitMaandUitFuncExpr(ctx);
            case 'DagUitFuncExprContext':
                return this.visitDagUitFuncExpr(ctx);
            case 'DatumMetFuncExprContext':
                return this.visitDatumMetFuncExpr(ctx);
            case 'TotaalVanExprContext':
                return this.visitTotaalVanExpr(ctx);
            case 'CapitalizedTotaalVanExprContext':
                // Needs implementation - delegate to regular version
                return this.visitTotaalVanExpr(ctx);
            case 'HetAantalDagenInExprContext':
                return this.visitHetAantalDagenInExpr(ctx);
            case 'DimensieAggExprContext':
                return this.visitDimensieAggExpr(ctx);
            case 'DimensieRangeAggExprContext':
                return this.visitDimensieRangeAggExpr(ctx);
            case 'TekstreeksExprContext':
                // Needs implementation
                return this.visitStringLiteralExpr(ctx); // Temporary fallback
            case 'ConcatenatieExprContext':
                return this.visitConcatenatieExpr(ctx);
            case 'RekendatumKeywordExprContext': {
                const node = {
                    type: 'ParameterReference',
                    parameterName: 'rekendatum'
                };
                this.setLocation(node, ctx);
                return node;
            }
            // Unary expressions
            case 'UnaryMinusExprContext':
                return this.visitUnaryMinusExpr(ctx);
            case 'UnaryNietExprContext':
                return this.visitUnaryNietExpr(ctx);
            // Parenthesized expression
            case 'ParenExprContext':
                return this.visitParenExpr(ctx);
            // Date calculations
            case 'DateCalcExprContext':
                return this.visitDateCalcExpr(ctx);
            // Conditional and comparison expressions
            case 'IsKenmerkExprContext':
                return this.visitIsKenmerkExpr(ctx);
            case 'HeeftKenmerkExprContext':
                return this.visitHeeftKenmerkExpr(ctx);
            case 'RegelStatusConditionExprContext':
                return this.visitRegelStatusConditionExpr(ctx);
            // Special expressions that need to go through expressie
            case 'ExprAfrondingContext':
                return this.visitExprAfronding(ctx);
            case 'ExprBegrenzingContext':
                return this.visitExprBegrenzing(ctx);
            case 'ExprBegrenzingAfrondingContext':
                return this.visitExprBegrenzingAfronding(ctx);
            default:
                // If we have a specific visitor method for this context, try to call it
                const methodName = `visit${contextName.replace('Context', '')}`;
                if (typeof this[methodName] === 'function') {
                    return this[methodName](ctx);
                }
                // Last resort: try generic visit
                const result = this.visit(ctx);
                if (result) {
                    return result;
                }
                throw new Error(`Unhandled primaryExpression context type: ${contextName}`);
        }
    }
    visitNumberLiteralExpr(ctx) {
        const text = ctx.NUMBER().getText();
        // Convert Dutch decimal notation (comma) to JavaScript notation (dot)
        const normalizedText = text.replace(',', '.');
        const value = parseFloat(normalizedText);
        // Check for optional unit
        const unitCtx = ctx.unitIdentifier();
        if (unitCtx) {
            const unit = unitCtx.getText();
            const node = {
                type: 'NumberLiteral',
                value,
                unit
            };
            this.setLocation(node, ctx);
            return node;
        }
        const node = {
            type: 'NumberLiteral',
            value
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitPercentageLiteralExpr(ctx) {
        // PERCENTAGE_LITERAL format: NUMBER PERCENT_SIGN (e.g., "50%", "10,5%")
        const text = ctx.PERCENTAGE_LITERAL().getText();
        // Remove the % sign and convert Dutch decimal notation
        const numericPart = text.replace('%', '').trim().replace(',', '.');
        const value = parseFloat(numericPart);
        const node = {
            type: 'NumberLiteral',
            value
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDatumLiteralExpr(ctx) {
        // Get the date literal text
        const datumCtx = ctx.datumLiteral();
        const dateText = datumCtx.getText();
        // Parse the date - format is DD-MM-YYYY
        const parts = dateText.split('-');
        if (parts.length === 3) {
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1; // JavaScript months are 0-indexed
            const year = parseInt(parts[2], 10);
            // Create UTC date to avoid timezone issues
            const date = new Date(Date.UTC(year, month, day));
            const node = {
                type: 'DateLiteral',
                value: date
            };
            this.setLocation(node, ctx);
            return node;
        }
        throw new Error(`Invalid date format: ${dateText}`);
    }
    visitIdentifierExpr(ctx) {
        const ref = {
            type: 'VariableReference',
            variableName: ctx.identifier().getText()
        };
        // Store location for this variable reference
        this.setLocation(ref, ctx);
        return ref;
    }
    visitParenExpr(ctx) {
        return this.visit(ctx.expressie());
    }
    visitDatumExpressie(ctx) {
        // Handle datumExpressie rule for date arithmetic per spec section 6.11.
        // Grammar:
        // datumExpressie
        //   : datumLiteral                                              // e.g., 1 januari 2024
        //   | REKENDATUM                                                // keyword
        //   | REKENJAAR                                                 // keyword
        //   | DE_DATUM_MET LPAREN primaryExpression COMMA primaryExpression COMMA primaryExpression RPAREN
        //   | DE_EERSTE_PAASDAG_VAN LPAREN primaryExpression RPAREN
        //   | attribuutReferentie                                       // de geboortedatum van de persoon
        //   | bezieldeReferentie                                        // zijn geboortedatum
        //   | parameterMetLidwoord                                      // de parameter datum
        //   | LPAREN expressie RPAREN                                   // (datum expressie)
        if (ctx.datumLiteral()) {
            const dateText = ctx.datumLiteral().getText();
            const node = {
                type: 'DateLiteral',
                value: dateText
            };
            this.setLocation(node, ctx);
            return node;
        }
        if (ctx.REKENDATUM()) {
            const node = {
                type: 'ParameterReference',
                parameterName: 'rekendatum'
            };
            this.setLocation(node, ctx);
            return node;
        }
        if (ctx.REKENJAAR()) {
            const node = {
                type: 'ParameterReference',
                parameterName: 'rekenjaar'
            };
            this.setLocation(node, ctx);
            return node;
        }
        if (ctx.DE_DATUM_MET && ctx.DE_DATUM_MET()) {
            // de datum met (jaar, maand, dag)
            const yearExpr = this.visit(ctx.primaryExpression(0));
            const monthExpr = this.visit(ctx.primaryExpression(1));
            const dayExpr = this.visit(ctx.primaryExpression(2));
            const node = {
                type: 'FunctionCall',
                name: 'datum_met',
                arguments: [yearExpr, monthExpr, dayExpr]
            };
            this.setLocation(node, ctx);
            return node;
        }
        if (ctx.DE_EERSTE_PAASDAG_VAN && ctx.DE_EERSTE_PAASDAG_VAN()) {
            const yearExpr = this.visit(ctx.primaryExpression(0));
            const node = {
                type: 'FunctionCall',
                name: 'eerste_paasdag_van',
                arguments: [yearExpr]
            };
            this.setLocation(node, ctx);
            return node;
        }
        if (ctx.attribuutReferentie()) {
            return this.visit(ctx.attribuutReferentie());
        }
        if (ctx.bezieldeReferentie()) {
            return this.visit(ctx.bezieldeReferentie());
        }
        if (ctx.parameterMetLidwoord()) {
            return this.visit(ctx.parameterMetLidwoord());
        }
        if (ctx.expressie()) {
            // Parenthesized expression
            return this.visit(ctx.expressie());
        }
        console.warn(`Unknown datumExpressie type: ${ctx.getText()}`);
        return { type: 'Unknown', text: ctx.getText() };
    }
    visitDateCalcExpr(ctx) {
        // Handle DateCalcExpr - date arithmetic: datumExpressie (PLUS | MIN) primaryExpression timeUnit
        const left = this.visitDatumExpressie(ctx.datumExpressie());
        const right = this.visit(ctx.primaryExpression());
        const timeUnitCtx = ctx.timeUnit();
        const identifier = timeUnitCtx?.getText() || '';
        // Attach the timeUnit to the right operand so date arithmetic works correctly.
        if (right.type === 'NumberLiteral' && identifier) {
            right.unit = identifier;
        }
        // Create binary expression
        const operator = ctx.PLUS() ? '+' : '-';
        const node = {
            type: 'BinaryExpression',
            operator: operator,
            left: left,
            right: right
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitEersteDatumFuncExpr(ctx) {
        // Parse "de eerste van" function: EERSTE_VAN primaryExpression (COMMA primaryExpression)* EN primaryExpression
        const args = [];
        // Use the generated parser's method - primaryExpression_list() returns an array
        const primaryExpressions = ctx.primaryExpression_list ? ctx.primaryExpression_list() :
            (ctx.primaryExpression ? ctx.primaryExpression() : []);
        const expressions = Array.isArray(primaryExpressions) ? primaryExpressions : [primaryExpressions];
        for (const expr of expressions) {
            if (expr) {
                const result = this.visit(expr);
                if (result) {
                    args.push(result);
                }
            }
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'eerste_van',
            arguments: args
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitLaatsteDatumFuncExpr(ctx) {
        // Parse "de laatste van" function: LAATSTE_VAN primaryExpression (COMMA primaryExpression)* EN primaryExpression
        const args = [];
        // Use the generated parser's method - primaryExpression_list() returns an array
        const primaryExpressions = ctx.primaryExpression_list ? ctx.primaryExpression_list() :
            (ctx.primaryExpression ? ctx.primaryExpression() : []);
        const expressions = Array.isArray(primaryExpressions) ? primaryExpressions : [primaryExpressions];
        for (const expr of expressions) {
            if (expr) {
                const result = this.visit(expr);
                if (result) {
                    args.push(result);
                }
            }
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'laatste_van',
            arguments: args
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitPasenFuncExpr(ctx) {
        // Parse "de eerste paasdag van" function: DE EERSTE_PAASDAG VAN primaryExpression
        const primaryExpr = ctx.primaryExpression ? ctx.primaryExpression() : null;
        const args = [];
        if (primaryExpr) {
            const expr = this.visit(primaryExpr);
            if (expr) {
                args.push(expr);
            }
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'eerste_paasdag_van',
            arguments: args
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitSimpleConcatenatieExpr(ctx) {
        // Pattern: primaryExpression (COMMA primaryExpression)+ (EN | OF) primaryExpression
        const args = [];
        let hasOf = false;
        let hasEn = false;
        // Get all primary expressions
        const primaryExprs = ctx.primaryExpression ? ctx.primaryExpression() : [];
        const expressions = Array.isArray(primaryExprs) ? primaryExprs : [primaryExprs];
        // Visit each primary expression
        for (const expr of expressions) {
            if (expr) {
                const result = this.visit(expr);
                if (result) {
                    args.push(result);
                }
            }
        }
        // Check for OF or EN tokens
        if (ctx.OF && ctx.OF()) {
            hasOf = true;
        }
        if (ctx.EN && ctx.EN()) {
            hasEn = true;
        }
        // Create appropriate expression type based on connector
        if (hasOf) {
            const node = {
                type: 'DisjunctionExpression',
                values: args
            };
            this.setLocation(node, ctx);
            return node;
        }
        else if (hasEn) {
            // Check if we're in a function context
            const parentCtx = ctx.parentCtx;
            let functionName;
            // Try to determine if this is part of a function call
            if (parentCtx) {
                const parentText = parentCtx.getText ? parentCtx.getText() : '';
                if (parentText.includes('gemiddelde van')) {
                    functionName = 'gemiddelde_van';
                }
                else if (parentText.includes('som van')) {
                    functionName = 'som_van';
                }
                else if (parentText.includes('eerste van')) {
                    functionName = 'eerste_van';
                }
                else if (parentText.includes('laatste van')) {
                    functionName = 'laatste_van';
                }
                else if (parentText.includes('totaal van')) {
                    functionName = 'totaal_van';
                }
            }
            // If we have a function context, return a FunctionCall
            if (functionName && args.length > 0) {
                const node = {
                    type: 'FunctionCall',
                    functionName,
                    arguments: args
                };
                this.setLocation(node, ctx);
                return node;
            }
            // Otherwise return a ConjunctionExpression
            const node = {
                type: 'ConjunctionExpression',
                values: args
            };
            this.setLocation(node, ctx);
            return node;
        }
        // Fallback: return first argument or throw error
        if (args.length > 0) {
            return args[0];
        }
        throw new Error(`Concatenation expression without valid connector: ${ctx.getText()}`);
    }
    visitConcatenatieExpr(ctx) {
        // Pattern: CONCATENATIE_VAN primaryExpression (COMMA primaryExpression)* (EN | OF) primaryExpression
        // This is almost identical to SimpleConcatenatieExpr but with CONCATENATIE_VAN keyword
        const args = [];
        let hasOf = false;
        let hasEn = false;
        // Get all primary expressions
        const primaryExprs = ctx.primaryExpression ? ctx.primaryExpression() : [];
        const expressions = Array.isArray(primaryExprs) ? primaryExprs : [primaryExprs];
        // Visit each primary expression
        for (const expr of expressions) {
            if (expr) {
                const result = this.visit(expr);
                if (result) {
                    args.push(result);
                }
            }
        }
        // Check for OF or EN tokens
        if (ctx.OF && ctx.OF()) {
            hasOf = true;
        }
        if (ctx.EN && ctx.EN()) {
            hasEn = true;
        }
        // Create appropriate expression type based on connector
        if (hasOf) {
            const node = {
                type: 'DisjunctionExpression',
                values: args
            };
            this.setLocation(node, ctx);
            return node;
        }
        else if (hasEn) {
            const node = {
                type: 'ConjunctionExpression',
                values: args
            };
            this.setLocation(node, ctx);
            return node;
        }
        // Fallback: return first argument or throw error
        if (args.length > 0) {
            return args[0];
        }
        throw new Error(`Concatenation expression without valid connector: ${ctx.getText()}`);
    }
    visitOnderwerpRefExpr(ctx) {
        // Get the onderwerpReferentie context from the OnderwerpRefExpr wrapper
        const onderwerpRef = ctx.onderwerpReferentie ? ctx.onderwerpReferentie() : ctx;
        // Handle pronoun "hij" -> map to "self" for consistency with Python
        const ctxText = ctx.getText ? ctx.getText() : '';
        if (ctxText === 'hij') {
            const ref = {
                type: 'VariableReference',
                variableName: 'self'
            };
            this.setLocation(ref, ctx);
            return ref;
        }
        // FIX 1: Detect aggregation patterns that grammar didn't catch
        // Pattern: "(het) aantal <collection> [die ...]" without ALLE or "van"
        // The grammar's HET AANTAL onderwerpReferentie requires an article after AANTAL,
        // so bare nouns like "het aantal personen" fall through to OnderwerpRefExpr.
        // NOTE: ctx.getText() returns concatenated tokens WITHOUT spaces (e.g., "hetaantalpersonen")
        const textLower = ctxText.toLowerCase();
        const aantalMatch = textLower.match(/^(?:het)?aantal(.+)$/);
        const hasAlle = textLower.includes('alle');
        const hasVan = textLower.includes('van');
        if (aantalMatch && !hasAlle && !hasVan) {
            // This is an aggregation expression
            // Extract collection name by getting identifiers from basisOnderwerp, excluding "aantal"
            const onderwerpBasis = onderwerpRef?.onderwerpBasis ? onderwerpRef.onderwerpBasis() : null;
            let collectionPath = [];
            if (onderwerpBasis) {
                // Get all basisOnderwerp elements (handle single and multiple)
                const basisList = onderwerpBasis.basisOnderwerp_list
                    ? onderwerpBasis.basisOnderwerp_list()
                    : (onderwerpBasis.basisOnderwerp ? [onderwerpBasis.basisOnderwerp()] : []);
                // If no list but we have a single basisOnderwerp through other access
                const allBasis = basisList.length > 0 ? basisList : [];
                // Extract identifiers from each basisOnderwerp, filtering out "aantal"
                const pathParts = [];
                for (const basis of allBasis) {
                    if (!basis)
                        continue;
                    // Use _list() for multiple identifiers (ANTLR-generated pattern)
                    const identifiers = basis.identifierOrKeyword_list
                        ? basis.identifierOrKeyword_list()
                        : (basis.identifierOrKeyword ? basis.identifierOrKeyword() : []);
                    const idList = Array.isArray(identifiers) ? identifiers : (identifiers ? [identifiers] : []);
                    // Filter out 'aantal' and join remaining identifiers
                    const filtered = idList
                        .map((id) => id.getText())
                        .filter((text) => text.toLowerCase() !== 'aantal');
                    if (filtered.length > 0) {
                        pathParts.push(filtered.join(' '));
                    }
                }
                // Reverse path parts for Dutch right-to-left navigation
                // "Y van de Z" -> ['Z', 'Y'] (pathParts already has ['Y', 'Z'])
                collectionPath = pathParts.length > 0 ? pathParts.reverse() : [];
            }
            // Fallback: use regex extraction if path extraction failed
            if (collectionPath.length === 0) {
                let fallbackName = aantalMatch[1].trim();
                // Remove "die..." suffix
                const dieIdx = fallbackName.indexOf('die');
                const datIdx = fallbackName.indexOf('dat');
                if (dieIdx > 0)
                    fallbackName = fallbackName.substring(0, dieIdx).trim();
                else if (datIdx > 0)
                    fallbackName = fallbackName.substring(0, datIdx).trim();
                collectionPath = [fallbackName];
            }
            // Build the base expression
            let baseExpression;
            if (onderwerpRef && onderwerpRef.predicaat && onderwerpRef.predicaat()) {
                // Has subselectie - create collection reference and wrap with predicate
                const collectionRef = {
                    type: 'AttributeReference',
                    path: collectionPath
                };
                this.setLocation(collectionRef, onderwerpBasis || ctx);
                const predicaatCtx = onderwerpRef.predicaat();
                const predicaat = this.visitPredicaat(predicaatCtx);
                baseExpression = {
                    type: 'SubselectieExpression',
                    collection: collectionRef,
                    predicaat
                };
                this.setLocation(baseExpression, onderwerpRef);
            }
            else {
                // No subselectie - just AttributeReference
                baseExpression = {
                    type: 'AttributeReference',
                    path: collectionPath
                };
                this.setLocation(baseExpression, ctx);
            }
            const node = {
                type: 'FunctionCall',
                functionName: 'aantal',
                arguments: [baseExpression]
            };
            this.setLocation(node, ctx);
            return node;
        }
        // FIX 2: For cases with DIE/DAT subselectie, delegate to visitOnderwerpReferentie
        // which properly handles subselectie filtering. Only do this when subselectie is present.
        // See Python builder.py:1533, 1572-1583
        if (onderwerpRef && onderwerpRef.predicaat && onderwerpRef.predicaat()) {
            // Has DIE/DAT - delegate for proper subselectie handling
            return this.visitOnderwerpReferentie(onderwerpRef);
        }
        // For simple references without aggregation or subselectie, return VariableReference
        // This preserves existing behavior for cases like "de isVIP", "het bedrag", etc.
        const onderwerpBasis = onderwerpRef?.onderwerpBasis ? onderwerpRef.onderwerpBasis() : null;
        let variableName = '';
        if (onderwerpBasis) {
            // Get all basisOnderwerp elements
            const basisList = onderwerpBasis.basisOnderwerp_list
                ? onderwerpBasis.basisOnderwerp_list()
                : (onderwerpBasis.basisOnderwerp ? [onderwerpBasis.basisOnderwerp()] : []);
            const pathParts = [];
            for (const basis of basisList) {
                if (!basis)
                    continue;
                // Use _list() for multiple identifiers (ANTLR-generated pattern)
                const identifiers = basis.identifierOrKeyword_list
                    ? basis.identifierOrKeyword_list()
                    : (basis.identifierOrKeyword ? basis.identifierOrKeyword() : []);
                const idList = Array.isArray(identifiers) ? identifiers : (identifiers ? [identifiers] : []);
                const namePart = idList.map((id) => id.getText()).join(' ');
                if (namePart) {
                    pathParts.push(namePart);
                }
            }
            variableName = pathParts.length > 0 ? pathParts.join(' ') : '';
        }
        // Fallback: extract text without article
        if (!variableName) {
            const text = ctxText;
            const match = text.match(/^(?:de|het|een|zijn|alle)?\s*(.+)$/i);
            variableName = match ? match[1] : text;
        }
        const ref = {
            type: 'VariableReference',
            variableName
        };
        this.setLocation(ref, ctx);
        return ref;
    }
    visitStringLiteralExpr(ctx) {
        // Get the string literal token
        const text = ctx.STRING_LITERAL().getText();
        // Remove surrounding quotes
        const value = text.slice(1, -1);
        // Check for interpolation markers «»
        if (!value.includes('«')) {
            // Plain string - no interpolation
            const node = {
                type: 'StringLiteral',
                value
            };
            this.setLocation(node, ctx);
            return node;
        }
        // Parse interpolated string (Tekstreeks)
        const parts = [];
        let i = 0;
        let textStart = 0;
        while (i < value.length) {
            if (value[i] === '«') {
                // Emit text before marker
                if (i > textStart) {
                    parts.push({ type: 'TekstreeksText', text: value.slice(textStart, i) });
                }
                // Find closing marker
                const closeIdx = value.indexOf('»', i + 1);
                if (closeIdx === -1) {
                    throw new Error('Unclosed « in string interpolation');
                }
                // Extract and parse embedded expression
                const exprText = value.slice(i + 1, closeIdx);
                const exprNode = this.parseEmbeddedExpression(exprText);
                parts.push({ type: 'TekstreeksInterpolation', expression: exprNode });
                i = closeIdx + 1;
                textStart = i;
            }
            else {
                i++;
            }
        }
        // Emit trailing text
        if (textStart < value.length) {
            parts.push({ type: 'TekstreeksText', text: value.slice(textStart) });
        }
        const node = { type: 'TekstreeksExpression', parts };
        this.setLocation(node, ctx);
        return node;
    }
    /**
     * Parse an embedded expression from within a string interpolation.
     * Creates a mini-parser to parse the expression text.
     */
    parseEmbeddedExpression(exprText) {
        const chars = new antlr4_1.CharStream(exprText);
        const lexer = new RegelSpraakLexer_1.default(chars);
        const tokens = new antlr4_1.CommonTokenStream(lexer);
        const parser = new RegelSpraakParser_1.default(tokens);
        // Parse as expression
        const exprCtx = parser.expressie();
        return this.visit(exprCtx);
    }
    visitEnumLiteralExpr(ctx) {
        // Get the enum literal token
        const text = ctx.ENUM_LITERAL().getText();
        // Remove surrounding quotes
        const value = text.slice(1, -1);
        const node = {
            type: 'StringLiteral', // Treat enum literals as string literals for now
            value
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitUnaryNietExpr(ctx) {
        // Get the operand expression
        const operand = this.visit(ctx.primaryExpression());
        const node = {
            type: 'UnaryExpression',
            operator: '!',
            operand
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitUnaryMinusExpr(ctx) {
        // Get the operand expression
        const operand = this.visit(ctx.primaryExpression());
        const node = {
            type: 'UnaryExpression',
            operator: '-',
            operand
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitWortelFuncExpr(ctx) {
        // Get the argument expression 
        const argCtx = ctx.primaryExpression();
        if (!argCtx) {
            throw new Error('Missing argument for "de wortel van"');
        }
        const arg = this.visit(argCtx);
        if (!arg) {
            throw new Error('Invalid argument for "de wortel van"');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'sqrt',
            arguments: [arg]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitAbsValFuncExpr(ctx) {
        // Get the argument expression (inside parentheses)
        const argCtx = ctx.expressie();
        if (!argCtx) {
            throw new Error('Missing argument for "de absolute waarde van"');
        }
        const arg = this.visit(argCtx);
        if (!arg) {
            throw new Error('Invalid argument for "de absolute waarde van"');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'abs',
            arguments: [arg]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitPercentageFuncExpr(ctx) {
        // (NUMBER (PERCENT_SIGN | p=IDENTIFIER) | PERCENTAGE_LITERAL) VAN primaryExpression
        // e.g., "50% van de waarde" or "50 procent van de waarde"
        let percentage;
        // Check if we have a PERCENTAGE_LITERAL
        const percentLiteral = ctx.PERCENTAGE_LITERAL ? ctx.PERCENTAGE_LITERAL() : null;
        if (percentLiteral) {
            const text = percentLiteral.getText().replace('%', '').replace(',', '.');
            percentage = parseFloat(text);
        }
        else {
            // NUMBER followed by PERCENT_SIGN or IDENTIFIER (e.g., "procent")
            const numberToken = ctx.NUMBER ? ctx.NUMBER() : null;
            if (!numberToken) {
                throw new Error('Expected number in percentage expression');
            }
            const numText = numberToken.getText().replace(',', '.');
            percentage = parseFloat(numText);
        }
        const baseExpr = this.visit(ctx.primaryExpression());
        if (!baseExpr) {
            throw new Error('Missing base expression in percentage function');
        }
        // Create a binary expression: (percentage / 100) * baseExpr
        const percentageAsDecimal = {
            type: 'NumberLiteral',
            value: percentage / 100
        };
        const node = {
            type: 'BinaryExpression',
            operator: '*',
            left: percentageAsDecimal,
            right: baseExpr
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitPercentageOfExpr(ctx) {
        // PERCENTAGE_LITERAL VAN primaryExpression
        // e.g., "50% van de waarde"
        const percentLiteral = ctx.PERCENTAGE_LITERAL();
        if (!percentLiteral) {
            throw new Error('Expected percentage literal in percentage-of expression');
        }
        const text = percentLiteral.getText().replace('%', '').replace(',', '.');
        const percentage = parseFloat(text);
        const baseExpr = this.visit(ctx.primaryExpression());
        if (!baseExpr) {
            throw new Error('Missing base expression in percentage-of function');
        }
        // Create a binary expression: (percentage / 100) * baseExpr
        const percentageAsDecimal = {
            type: 'NumberLiteral',
            value: percentage / 100
        };
        const node = {
            type: 'BinaryExpression',
            operator: '*',
            left: percentageAsDecimal,
            right: baseExpr
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitMinValFuncExpr(ctx) {
        // DE_MINIMALE_WAARDE_VAN primaryExpression (COMMA primaryExpression)* EN primaryExpression
        // e.g., "de minimale waarde van a, b en c"
        const args = [];
        // In ANTLR4 TypeScript, use primaryExpression_list() to get all matching children
        const exprList = ctx.primaryExpression_list ? ctx.primaryExpression_list() : [];
        if (exprList.length < 2) {
            throw new Error(`de minimale waarde van requires at least 2 arguments, got ${exprList.length}`);
        }
        for (const exprCtx of exprList) {
            const arg = this.visit(exprCtx);
            if (arg) {
                args.push(arg);
            }
        }
        if (args.length < 2) {
            throw new Error(`de minimale waarde van requires at least 2 valid arguments, got ${args.length}`);
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'minimum_van_values',
            arguments: args
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitMaxValFuncExpr(ctx) {
        // DE_MAXIMALE_WAARDE_VAN primaryExpression (COMMA primaryExpression)* EN primaryExpression
        // e.g., "de maximale waarde van a, b en c"
        const args = [];
        // In ANTLR4 TypeScript, use primaryExpression_list() to get all matching children
        const exprList = ctx.primaryExpression_list ? ctx.primaryExpression_list() : [];
        if (exprList.length < 2) {
            throw new Error(`de maximale waarde van requires at least 2 arguments, got ${exprList.length}`);
        }
        for (const exprCtx of exprList) {
            const arg = this.visit(exprCtx);
            if (arg) {
                args.push(arg);
            }
        }
        if (args.length < 2) {
            throw new Error(`de maximale waarde van requires at least 2 valid arguments, got ${args.length}`);
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'maximum_van_values',
            arguments: args
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitTijdsduurFuncExpr(ctx) {
        // TIJDSDUUR_VAN primaryExpression TOT primaryExpression (IN_HELE unitName=IDENTIFIER)?
        const fromExpr = this.visit(ctx.primaryExpression(0));
        const toExpr = this.visit(ctx.primaryExpression(1));
        // Check for unit specification and normalize to lowercase
        const unitIdCtx = ctx.unitIdentifier ? ctx.unitIdentifier() : null;
        const unit = unitIdCtx ? unitIdCtx.getText().toLowerCase() : undefined;
        const funcCall = {
            type: 'FunctionCall',
            functionName: 'tijdsduur_van',
            arguments: [fromExpr, toExpr],
            unitConversion: unit
        };
        return funcCall;
    }
    visitAbsTijdsduurFuncExpr(ctx) {
        // DE_ABSOLUTE_TIJDSDUUR_VAN primaryExpression TOT primaryExpression (IN_HELE unitName=IDENTIFIER)?
        const fromExpr = this.visit(ctx.primaryExpression(0));
        const toExpr = this.visit(ctx.primaryExpression(1));
        // Check for unit specification and normalize to lowercase
        const unitIdCtx = ctx.unitIdentifier ? ctx.unitIdentifier() : null;
        const unit = unitIdCtx ? unitIdCtx.getText().toLowerCase() : undefined;
        const funcCall = {
            type: 'FunctionCall',
            functionName: 'abs_tijdsduur_van',
            arguments: [fromExpr, toExpr],
            unitConversion: unit
        };
        return funcCall;
    }
    visitSomFuncExpr(ctx) {
        // SOM_VAN primaryExpression (COMMA primaryExpression)* EN primaryExpression
        // This handles "de som van X, Y en Z" pattern
        const args = [];
        // Get all primary expressions
        const primaryExprs = ctx.primaryExpression_list();
        if (primaryExprs && primaryExprs.length > 0) {
            for (const expr of primaryExprs) {
                args.push(this.visit(expr));
            }
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'som',
            arguments: args
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitSomAlleAttribuutExpr(ctx) {
        // SOM_VAN ALLE attribuutReferentie
        // This handles patterns like "de som van alle belasting van passagiers die minderjarig zijn"
        const attrRef = this.visitAttribuutReferentie(ctx.attribuutReferentie());
        if (!attrRef) {
            throw new Error('No attribute reference found in som_van function');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'som_van',
            arguments: [attrRef]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitMinAlleAttribuutExpr(ctx) {
        // DE_MINIMALE_WAARDE_VAN ALLE attribuutReferentie
        // e.g., "de minimale waarde van alle leeftijd van passagiers"
        const attrRef = this.visitAttribuutReferentie(ctx.attribuutReferentie());
        if (!attrRef) {
            throw new Error('No attribute reference found in minimum_van function');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'minimum_van',
            arguments: [attrRef]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitMaxAlleAttribuutExpr(ctx) {
        // DE_MAXIMALE_WAARDE_VAN ALLE attribuutReferentie
        // e.g., "de maximale waarde van alle leeftijd van passagiers"
        const attrRef = this.visitAttribuutReferentie(ctx.attribuutReferentie());
        if (!attrRef) {
            throw new Error('No attribute reference found in maximum_van function');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'maximum_van',
            arguments: [attrRef]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitSomAlleExpr(ctx) {
        // SOM_VAN ALLE naamwoord
        // This handles patterns like "de som van alle belasting op basis van afstand"
        // and navigation patterns like "de som van alle passagiers van de reis"
        if (!ctx.naamwoord || !ctx.naamwoord()) {
            throw new Error('Expected naamwoord in som_van alle expression');
        }
        // Parse the naamwoord into a navigation path
        // "passagiers van de reis" -> ["reis", "passagiers"]
        const collectionPath = this._parseNaamwoordToNavigationPath(ctx.naamwoord());
        // Create an AttributeReference for the collection with proper path
        const collectionRef = {
            type: 'AttributeReference',
            path: collectionPath
        };
        this.setLocation(collectionRef, ctx.naamwoord());
        // Create the FunctionCall for som_van
        const node = {
            type: 'FunctionCall',
            functionName: 'som_van',
            arguments: [collectionRef]
        };
        this.setLocation(node, ctx);
        return node;
    }
    _stripArticle(text) {
        // Strip leading articles like Python does
        const articles = ['de ', 'het ', 'een '];
        const lowerText = text.toLowerCase();
        for (const article of articles) {
            if (lowerText.startsWith(article)) {
                return text.substring(article.length);
            }
        }
        return text;
    }
    visitDimensieAggExpr(ctx) {
        // This handles aggregation patterns like:
        // "de som van het salaris van alle personen"
        // "het maximum van de leeftijd van alle personen"
        // Pattern: <aggregation_function> <attribute_reference> <optional: van alle objecttype>
        if (ctx.getChildCount() < 2) {
            throw new Error(`DimensieAggExpr must have at least 2 children, got ${ctx.getChildCount()}`);
        }
        // Extract the aggregation function name by looking at the first child
        let functionName = '';
        const firstChild = ctx.getChild(0);
        if (firstChild) {
            const text = firstChild.getText().toLowerCase();
            if (text.includes('som')) {
                functionName = 'som_van';
            }
            else if (text.includes('gemiddelde')) {
                functionName = 'gemiddelde_van';
            }
            else if (text.includes('maximale')) {
                functionName = 'maximum_van';
            }
            else if (text.includes('minimale')) {
                functionName = 'minimum_van';
            }
            // Note: 'totaal' removed - grammar doesn't allow it in dimensieAggExpr
        }
        if (!functionName) {
            throw new Error('Unknown aggregation function in DimensieAggExpr');
        }
        // Get the attribute reference using attribuutMetLidwoord
        const attrMetLidwoordCtx = ctx.attribuutMetLidwoord ? ctx.attribuutMetLidwoord() : null;
        if (!attrMetLidwoordCtx) {
            throw new Error('Expected attribuutMetLidwoord in DimensieAggExpr');
        }
        // Get attribute name and strip article
        const attrName = this.extractTextWithSpaces(attrMetLidwoordCtx);
        const strippedAttrName = this._stripArticle(attrName);
        // Create AttributeReference for the attribute
        const attrRef = {
            type: 'AttributeReference',
            path: [strippedAttrName]
        };
        // Look for dimensieSelectie context which contains the collection reference
        const dimensieSelectieCtx = ctx.dimensieSelectie ? ctx.dimensieSelectie() : null;
        if (dimensieSelectieCtx && dimensieSelectieCtx.aggregerenOverAlleDimensies &&
            dimensieSelectieCtx.aggregerenOverAlleDimensies()) {
            // Has "alle" pattern - get the collection name
            const aggCtx = dimensieSelectieCtx.aggregerenOverAlleDimensies();
            const naamwoordCtx = aggCtx.naamwoord ? aggCtx.naamwoord() : null;
            if (naamwoordCtx) {
                // Parse the naamwoord into a navigation path
                // "passagiers van de reis" -> ["reis", "passagiers"]
                const collectionPath = this._parseNaamwoordToNavigationPath(naamwoordCtx);
                // Create AttributeReference for the collection with proper path
                const collectionRef = {
                    type: 'AttributeReference',
                    path: collectionPath
                };
                // Return FunctionCall with both arguments
                const node = {
                    type: 'FunctionCall',
                    functionName,
                    arguments: [attrRef, collectionRef]
                };
                this.setLocation(node, ctx);
                return node;
            }
        }
        // No collection specified, just return function with attribute
        const node = {
            type: 'FunctionCall',
            functionName,
            arguments: [attrRef]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDimensieRangeAggExpr(ctx) {
        // This handles dimension range aggregation patterns like:
        // "de som van zijn betaalde belasting in jaar vanaf vier jaar geleden t/m een jaar geleden"
        // Extract the aggregation function name
        let functionName = '';
        const funcCtx = ctx.getalAggregatieFunctie ? ctx.getalAggregatieFunctie() : ctx.datumAggregatieFunctie();
        if (funcCtx) {
            const text = funcCtx.getText().toLowerCase();
            if (text.includes('som')) {
                functionName = 'som_van';
            }
            else if (text.includes('gemiddelde')) {
                functionName = 'gemiddelde_van';
            }
            else if (text.includes('maximum') || text.includes('maximale')) {
                functionName = 'maximum_van';
            }
            else if (text.includes('minimum') || text.includes('minimale')) {
                functionName = 'minimum_van';
            }
            else if (text.includes('eerste')) {
                functionName = 'eerste_van';
            }
            else if (text.includes('laatste')) {
                functionName = 'laatste_van';
            }
        }
        if (!functionName) {
            throw new Error('Unknown aggregation function in DimensieRangeAggExpr');
        }
        // Get the attribute or bezielde reference
        // Grammar: (bezieldeReferentie | attribuutReferentie) VANAF ...
        // The grammar also allows attribuutMetLidwoord for backward compat
        const attrRefCtx = ctx.attribuutReferentie ? ctx.attribuutReferentie() : null;
        const attrMetLidwoordCtx = ctx.attribuutMetLidwoord ? ctx.attribuutMetLidwoord() : null;
        const bezieldeCtx = ctx.bezieldeReferentie ? ctx.bezieldeReferentie() : null;
        let attrRef;
        if (attrRefCtx) {
            // Full attribuutReferentie: "de belasting van de persoon"
            // Delegate to visitAttribuutReferentie to build proper navigation path
            const visited = this.visitAttribuutReferentie(attrRefCtx);
            if (visited.type === 'DimensionedAttributeReference') {
                attrRef = visited.baseAttribute;
            }
            else if (visited.type === 'AttributeReference') {
                attrRef = visited;
            }
            else if (visited.type === 'SubselectieExpression') {
                // Extract base from subselectie
                const subsel = visited;
                attrRef = subsel.collection?.type === 'AttributeReference'
                    ? subsel.collection
                    : { type: 'AttributeReference', path: ['self'] };
            }
            else {
                attrRef = { type: 'AttributeReference', path: ['self'] };
            }
        }
        else if (bezieldeCtx) {
            // Direct bezielde reference parsed: ZIJN naamwoord
            const naamwoordCtx = bezieldeCtx.naamwoord();
            const fullAttrText = naamwoordCtx ? this.extractTextWithSpaces(naamwoordCtx) : '';
            const cleanAttr = fullAttrText.replace(/^zijn\s+/i, '').trim();
            attrRef = { type: 'AttributeReference', path: ['self', cleanAttr] };
        }
        else if (attrMetLidwoordCtx) {
            const attrName = this.extractTextWithSpaces(attrMetLidwoordCtx);
            // If starts with pronoun, treat as self-bound
            if (/^zijn\s+/i.test(attrName)) {
                const clean = attrName.replace(/^zijn\s+/i, '').trim();
                attrRef = { type: 'AttributeReference', path: ['self', clean] };
            }
            else {
                const strippedAttrName = this._stripArticle(attrName);
                attrRef = { type: 'AttributeReference', path: [strippedAttrName] };
            }
        }
        else {
            throw new Error('Expected attribute reference in DimensieRangeAggExpr');
        }
        // Get the range labels
        const fromLabelCtx = ctx.naamwoord(0);
        const toLabelCtx = ctx.naamwoord(1);
        if (!fromLabelCtx || !toLabelCtx) {
            throw new Error('Expected from and to labels in DimensieRangeAggExpr');
        }
        const fromLabel = this.extractTextWithSpaces(fromLabelCtx);
        const toLabel = this.extractTextWithSpaces(toLabelCtx);
        // Infer the dimension axis from labels using the dimension registry at runtime
        // We store labels now; axis will also be included by inference helper in engine, but
        // we can pre-fill a likely axis if available on this.parserContext
        // Default to empty; AggregationEngine will infer if needed
        let inferredAxis = '';
        try {
            const runtime = this.runtimeContext || this.context;
            const registry = runtime?.dimensionRegistry;
            if (registry && typeof registry.findAxisForLabel === 'function') {
                inferredAxis = registry.findAxisForLabel(fromLabel) || registry.findAxisForLabel(toLabel) || '';
            }
        }
        catch {
            // Ignore; engine will infer later
        }
        // Create the aggregation with dimension range
        const node = {
            type: 'AggregationExpression',
            aggregationType: functionName.replace('_van', ''),
            target: attrRef,
            dimensionRange: {
                dimension: inferredAxis || '',
                from: fromLabel,
                to: toLabel
            }
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitAantalFuncExpr(ctx) {
        // Handles the pattern: (HET AANTAL | AANTAL) aggregationSubject
        // Where aggregationSubject is:
        //   - ALLE naamwoord (e.g., "alle passagiers")
        //   - naamwoord ( (DIE | DAT) predicaat )? (e.g., "personen die minderjarig zijn")
        let subjectExpr = null;
        // Get the aggregationSubject context
        const aggSubjectCtx = ctx.aggregationSubject ? ctx.aggregationSubject() : null;
        if (aggSubjectCtx) {
            const naamwoordCtx = aggSubjectCtx.naamwoord ? aggSubjectCtx.naamwoord() : null;
            const predicaatCtx = aggSubjectCtx.predicaat ? aggSubjectCtx.predicaat() : null;
            if (naamwoordCtx) {
                // Use navigation path parsing to handle "passagiers van de reis" -> ["reis", "passagiers"]
                const path = this._parseNaamwoordToNavigationPath(naamwoordCtx);
                // Check for DIE/DAT predicate (subselectie)
                if (predicaatCtx) {
                    // Has filtering predicate - create SubselectieExpression
                    const baseRef = {
                        type: 'AttributeReference',
                        path: path
                    };
                    this.setLocation(baseRef, naamwoordCtx);
                    const predicate = this.visitPredicaat(predicaatCtx);
                    subjectExpr = {
                        type: 'SubselectieExpression',
                        collection: baseRef,
                        predicaat: predicate
                    };
                    this.setLocation(subjectExpr, aggSubjectCtx);
                }
                else {
                    // No filtering - simple AttributeReference
                    subjectExpr = {
                        type: 'AttributeReference',
                        path: path
                    };
                    this.setLocation(subjectExpr, naamwoordCtx);
                }
            }
        }
        if (!subjectExpr) {
            throw new Error('Failed to determine aggregationSubject in aantal expression');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'aantal',
            arguments: [subjectExpr]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitAantalAttribuutExpr(ctx) {
        // HET? AANTAL attribuutReferentie
        // This handles patterns like "het aantal passagiers van de reis"
        // CRITICAL: First check if the entire phrase is a canonical parameter name
        // For example: "het aantal treinmiles per passagier voor contingent" might be a parameter
        const fullText = ctx.getText();
        // Check if we have access to parameter names via parser context
        // This matches Python's behavior in builder.py:2723-2764
        if (this.parameterNames && this.parameterNames.size > 0) {
            // Try various normalizations of the text to match parameter names
            const normalizations = [
                fullText,
                fullText.replace(/^het\s+/i, '').trim(),
                fullText.replace(/^de\s+/i, '').trim(),
                fullText.replace(/^een\s+/i, '').trim(),
            ];
            for (const normalized of normalizations) {
                if (this.parameterNames.has(normalized)) {
                    // This entire phrase is a parameter name - return ParameterReference
                    const node = {
                        type: 'ParameterReference',
                        parameterName: normalized
                    };
                    this.setLocation(node, ctx);
                    return node;
                }
            }
        }
        // Not a parameter name - proceed with normal aantal function processing
        const attrRef = this.visitAttribuutReferentie(ctx.attribuutReferentie());
        if (!attrRef) {
            throw new Error('No attribute reference found in aantal function');
        }
        // Build FunctionCall for aantal with attribute reference
        const node = {
            type: 'FunctionCall',
            functionName: 'aantal',
            arguments: [attrRef]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitMaandUitFuncExpr(ctx) {
        // Pattern: DE MAAND UIT primaryExpression
        const arg = ctx.primaryExpression() ? this.visit(ctx.primaryExpression()) : null;
        if (!arg) {
            throw new Error('Missing argument for maand uit function');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'maand_uit',
            arguments: [arg]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDagUitFuncExpr(ctx) {
        // Pattern: DE DAG UIT primaryExpression
        const arg = ctx.primaryExpression() ? this.visit(ctx.primaryExpression()) : null;
        if (!arg) {
            throw new Error('Missing argument for dag uit function');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'dag_uit',
            arguments: [arg]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDatumMetFuncExpr(ctx) {
        // Pattern: DE_DATUM_MET LPAREN primaryExpression COMMA primaryExpression COMMA primaryExpression RPAREN
        // Constructs a date from year, month, day components
        const expressions = ctx.primaryExpression_list ? ctx.primaryExpression_list() : [];
        if (expressions.length !== 3) {
            throw new Error(`de datum met requires exactly 3 arguments (jaar, maand, dag), got ${expressions.length}`);
        }
        const yearExpr = this.visit(expressions[0]);
        const monthExpr = this.visit(expressions[1]);
        const dayExpr = this.visit(expressions[2]);
        const node = {
            type: 'FunctionCall',
            functionName: 'datum_met',
            arguments: [yearExpr, monthExpr, dayExpr]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitJaarUitFuncExpr(ctx) {
        // Pattern: HET JAAR UIT primaryExpression
        const arg = ctx.primaryExpression() ? this.visit(ctx.primaryExpression()) : null;
        if (!arg) {
            throw new Error('Missing argument for jaar uit function');
        }
        const node = {
            type: 'FunctionCall',
            functionName: 'jaar_uit',
            arguments: [arg]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitHetAantalDagenInExpr(ctx) {
        // HET AANTAL DAGEN IN (DE? MAAND | HET? JAAR) DAT expressie
        let periodType;
        // Check if MAAND or JAAR token is present
        if (ctx.MAAND && ctx.MAAND()) {
            periodType = 'maand';
        }
        else if (ctx.JAAR && ctx.JAAR()) {
            periodType = 'jaar';
        }
        else {
            throw new Error('Expected MAAND or JAAR in aantal dagen expression');
        }
        // Get the condition expression after DAT
        const conditionCtx = ctx.expressie();
        if (!conditionCtx) {
            throw new Error('Expected condition expression after DAT');
        }
        const conditionExpr = this.visit(conditionCtx);
        // Create literal for period type
        const periodLiteral = {
            type: 'StringLiteral',
            value: periodType
        };
        // Return as TimelineExpression for proper timeline handling
        const node = {
            type: 'TimelineExpression',
            operation: 'aantal_dagen',
            target: periodLiteral,
            condition: conditionExpr
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitSubordinateIsWithExpr(ctx) {
        // Handle "hij actief is" pattern 
        // This is parsed as: subject=onderwerpReferentie prepPhrase=naamwoordWithNumbers verb=IS
        // But for "hij actief is", actief is a kenmerk, not a prepositional phrase
        // Get the subject and prepPhrase from the context
        const subjectCtx = ctx.onderwerpReferentie ? ctx.onderwerpReferentie() : null;
        // Check for naamwoordWithNumbers first, then fall back to naamwoord
        const prepPhraseCtx = (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) ?
            ctx.naamwoordWithNumbers() :
            (ctx.naamwoord ? ctx.naamwoord() : null);
        if (!subjectCtx || !prepPhraseCtx) {
            throw new Error('Invalid SubordinateIsWithExpr context');
        }
        const subject = this.visit(subjectCtx);
        const prepPhrase = this.extractTextWithSpaces(prepPhraseCtx);
        // Check if this is actually a kenmerk pattern
        // For now, assume it's a boolean kenmerk check
        const kenmerkKey = `is ${prepPhrase}`;
        // Create an attribute reference for the kenmerk
        const kenmerkRef = {
            type: 'AttributeReference',
            path: ['self', kenmerkKey]
        };
        // Return a boolean expression that's always true if the kenmerk exists
        // This is a simplification - in reality we'd check the actual value
        return kenmerkRef;
    }
    visitSubordinateHasExpr(ctx) {
        // Handle "hij een recht op belastingvermindering heeft" pattern
        // This is parsed as: subject=onderwerpReferentie object=naamwoordWithNumbers verb=HEEFT
        // Get the subject and object from the context
        const subjectCtx = ctx.onderwerpReferentie ? ctx.onderwerpReferentie() : null;
        // Check for naamwoordWithNumbers first, then fall back to naamwoord
        const objectCtx = (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) ?
            ctx.naamwoordWithNumbers() :
            (ctx.naamwoord ? ctx.naamwoord() : null);
        if (!subjectCtx || !objectCtx) {
            throw new Error('Invalid SubordinateHasExpr context');
        }
        const subject = this.visit(subjectCtx);
        let objectText = this.extractTextWithSpaces(objectCtx);
        // Strip leading articles from the attribute name
        // "een recht op belastingvermindering" -> "recht op belastingvermindering"
        const articles = ['de ', 'het ', 'een '];
        for (const article of articles) {
            if (objectText.startsWith(article)) {
                objectText = objectText.substring(article.length);
                break;
            }
        }
        // If subject is "hij", it refers to the current instance (pronoun resolution)
        // The object becomes the attribute name we want to check
        // Create an attribute reference for the attribute
        const attributeRef = {
            type: 'AttributeReference',
            path: ['self', objectText]
        };
        // Return the attribute reference - it will be evaluated as truthy/falsy
        return attributeRef;
    }
    // Rule parsing visitor methods
    visitRegel(ctx) {
        try {
            // Extract rule name - regelName returns a naamwoord
            const nameCtx = ctx.regelName();
            if (!nameCtx) {
                throw new Error('Expected rule name');
            }
            // Get the text with spaces preserved
            const name = this.extractTextWithSpaces(nameCtx).trim();
            // Get version info
            const versionCtx = ctx.regelVersie();
            if (!versionCtx) {
                throw new Error('Expected "geldig" keyword');
            }
            const version = this.visit(versionCtx);
            // Get result part
            const resultCtx = ctx.resultaatDeel();
            if (!resultCtx) {
                throw new Error('Expected result part');
            }
            const result = this.visit(resultCtx);
            // Check for optional condition (voorwaardeDeel)
            let condition;
            if (ctx.voorwaardeDeel && ctx.voorwaardeDeel()) {
                condition = this.visitVoorwaardeDeel(ctx.voorwaardeDeel());
            }
            // Check for optional variable assignments (variabeleDeel)
            let variables;
            if (ctx.variabeleDeel && ctx.variabeleDeel()) {
                variables = this.visitVariabeleDeel(ctx.variabeleDeel());
            }
            const rule = {
                type: 'Rule',
                name,
                version,
                result,
                condition,
                variables
            };
            // Store location separately
            this.setLocation(rule, ctx);
            return rule;
        }
        catch (e) {
            if (e instanceof Error) {
                throw e;
            }
            throw new Error('Failed to parse rule');
        }
    }
    visitRegelGroep(ctx) {
        // Extract group name
        const nameCtx = ctx.naamwoord();
        if (!nameCtx) {
            throw new Error('Expected regel group name');
        }
        const name = this.extractTextWithSpaces(nameCtx).trim();
        // Check if it's marked as recursive
        const isRecursive = ctx.IS_RECURSIEF() !== null;
        // Visit all rules in the group
        const rules = [];
        const regelContexts = ctx.regel_list() || [];
        const consistentieCtxs = ctx.consistentieregel_list() || [];
        // Visit regular rules
        for (const regelCtx of regelContexts) {
            const rule = this.visit(regelCtx);
            if (rule) {
                rules.push(rule);
            }
        }
        // Visit consistency rules
        for (const consistentieCtx of consistentieCtxs) {
            const rule = this.visit(consistentieCtx);
            if (rule) {
                rules.push(rule);
            }
        }
        const group = {
            type: 'RegelGroep',
            name,
            isRecursive,
            rules
        };
        // Store location separately
        this.setLocation(group, ctx);
        return group;
    }
    visitAttribuutReferentie(ctx) {
        // attribuutReferentie : attribuutMetLidwoord VAN onderwerpReferentie
        const attrCtx = ctx.attribuutMetLidwoord();
        const attrText = this.extractTextWithSpaces(attrCtx);
        // PERCENTAGE-OF PATTERN DETECTION:
        // "het percentage X van Y" should be parsed as (X / 100) * Y
        // E.g., "het percentage reisduur eerste schijf van zijn belasting op basis van afstand"
        // → (percentage reisduur eerste schijf / 100) * belasting op basis van afstand
        const percentageMatch = attrText.toLowerCase().match(/^(?:het\s+)?percentage\s+(.+)$/);
        if (percentageMatch) {
            const parameterName = percentageMatch[1].trim();
            // Create parameter reference for the percentage value
            // Use ParameterReference not AttributeReference since percentages are typically parameters
            const percentageRef = {
                type: 'ParameterReference',
                parameterName: parameterName
            };
            this.setLocation(percentageRef, attrCtx);
            // Get the base value expression from onderwerpReferentie
            const onderwerpCtx = ctx.onderwerpReferentie();
            const baseExpr = this.visitOnderwerpReferentie(onderwerpCtx);
            // Create: (percentageRef / 100) * baseExpr
            const divBy100 = {
                type: 'BinaryExpression',
                operator: '/',
                left: percentageRef,
                right: {
                    type: 'NumberLiteral',
                    value: 100
                }
            };
            this.setLocation(divBy100, ctx);
            const multiplyExpr = {
                type: 'BinaryExpression',
                operator: '*',
                left: divBy100,
                right: baseExpr
            };
            this.setLocation(multiplyExpr, ctx);
            return multiplyExpr;
        }
        // Check for dimensional patterns like "het bruto inkomen" or "het inkomen van huidig jaar"
        // Only strip keywords that are actually registered as dimension labels (model-driven)
        const dimensionLabels = [];
        // Check if attribute contains dimension keywords (adjectival style)
        let cleanAttrText = attrText;
        for (const [label, dimensionName] of this.registeredDimensionLabels) {
            if (attrText.includes(label)) {
                dimensionLabels.push(label);
                // Remove the dimension keyword from the attribute text
                cleanAttrText = cleanAttrText.replace(label, '').trim();
            }
        }
        // Handle prepositional dimensions: "het inkomen van huidig jaar van de persoon"
        // Need to detect if the first part of onderwerpReferentie is a dimension label
        const onderwerpCtx = ctx.onderwerpReferentie();
        const onderwerpBasisCtx = onderwerpCtx.onderwerpBasis ? onderwerpCtx.onderwerpBasis() : null;
        if (onderwerpBasisCtx) {
            const onderwerpText = this.extractTextWithSpaces(onderwerpBasisCtx);
            // Check if this is a registered dimension label (model-driven)
            let isDimensionKeyword = false;
            let matchedKeyword = '';
            for (const [label, dimensionName] of this.registeredDimensionLabels) {
                if (onderwerpText.includes(label)) {
                    isDimensionKeyword = true;
                    matchedKeyword = label;
                    break;
                }
            }
            if (isDimensionKeyword && !dimensionLabels.includes(matchedKeyword)) {
                dimensionLabels.push(matchedKeyword);
                // Get the actual object path after the dimension
                // For "het inkomen van huidig jaar van de persoon", we need "de persoon"
                // This requires looking at the rest of the onderwerp chain
                const objectPath = this.visitOnderwerpReferentieToPath(onderwerpCtx);
                // Build the full path for AttributeReference
                const fullPath = objectPath.length > 0 ? [...objectPath, this.extractParameterName(cleanAttrText)] : [this.extractParameterName(cleanAttrText)];
                const baseAttrRef = {
                    type: 'AttributeReference',
                    path: fullPath
                };
                const node = {
                    type: 'DimensionedAttributeReference',
                    baseAttribute: baseAttrRef,
                    dimensionLabels
                };
                this.setLocation(node, ctx);
                return node;
            }
        }
        // Check if this is actually a nested navigation that was parsed incorrectly
        // Due to grammar ambiguity, "de straat van het adres" might be parsed as a single naamwoord
        if (attrText.includes(' van ') || attrText.includes(' op ') || attrText.includes(' bij ')) {
            // First check if this is a known compound attribute name
            let isCompoundAttribute = false;
            // Normalize by removing articles for comparison (matches Python builder.py:1136)
            const normalizedAttrText = this.extractParameterName(attrText);
            // Check against all known object types
            for (const [objectType, attributes] of this.objectTypeAttributes) {
                if (attributes.has(normalizedAttrText)) {
                    isCompoundAttribute = true;
                    break;
                }
            }
            // If it's a known compound attribute, don't split it
            if (!isCompoundAttribute && attrText.includes(' van ')) {
                // This is a nested navigation expression
                // Split it and build the path properly
                const parts = attrText.split(' van ');
                const actualAttr = this.extractParameterName(parts[0]);
                // Get the object path
                const objectPath = this.visitOnderwerpReferentieToPath(onderwerpCtx);
                // Build the complete path including the nested attributes
                // For "de straat van het adres", parts = ["de straat", "het adres"]
                // Process from right to left (Dutch navigation order)
                const pathElements = [...objectPath];
                // Add the middle parts in reverse order
                for (let i = parts.length - 1; i >= 1; i--) {
                    pathElements.push(this.extractParameterName(parts[i]));
                }
                // Add the outermost attribute
                pathElements.push(actualAttr);
                const attrRef = {
                    type: 'AttributeReference',
                    path: pathElements
                };
                // If we have dimension labels, wrap in DimensionedAttributeReference
                if (dimensionLabels.length > 0) {
                    const node = {
                        type: 'DimensionedAttributeReference',
                        baseAttribute: attrRef,
                        dimensionLabels
                    };
                    this.setLocation(node, ctx);
                    return node;
                }
                this.setLocation(attrRef, ctx);
                return attrRef;
            }
        }
        // Simple case: no nested navigation in attribute
        const attrName = this.extractParameterName(cleanAttrText);
        // Get the object path
        const objectPath = this.visitOnderwerpReferentieToPath(onderwerpCtx);
        // Build the full path for AttributeReference
        // Dutch right-to-left navigation per specification
        // For "de naam van de Manager", this becomes ["Manager", "naam"]
        const fullPath = [...objectPath, attrName];
        // Create AttributeReference with the full path
        const baseAttrRef = {
            type: 'AttributeReference',
            path: fullPath
        };
        // Check if the onderwerp has filtering (predicates)
        const predicaatCtx = onderwerpCtx.predicaat ? onderwerpCtx.predicaat() : null;
        if (predicaatCtx && (onderwerpCtx.DIE && onderwerpCtx.DIE() || onderwerpCtx.DAT && onderwerpCtx.DAT())) {
            // We have a subselectie - wrap the AttributeReference in SubselectieExpression
            const predicaat = this.visitPredicaat(predicaatCtx);
            const subselectie = {
                type: 'SubselectieExpression',
                collection: baseAttrRef,
                predicaat: predicaat
            };
            // If we have dimension labels, wrap in DimensionedAttributeReference
            if (dimensionLabels.length > 0) {
                const node = {
                    type: 'DimensionedAttributeReference',
                    baseAttribute: subselectie,
                    dimensionLabels
                };
                this.setLocation(node, ctx);
                return node;
            }
            this.setLocation(subselectie, ctx);
            return subselectie;
        }
        // No filtering - already created baseAttrRef above
        // If we have dimension labels, wrap in DimensionedAttributeReference
        if (dimensionLabels.length > 0) {
            const node = {
                type: 'DimensionedAttributeReference',
                baseAttribute: baseAttrRef,
                dimensionLabels
            };
            this.setLocation(node, ctx);
            return node;
        }
        this.setLocation(baseAttrRef, ctx);
        return baseAttrRef;
    }
    visitAttrRefExpr(ctx) {
        // AttrRefExpr wraps attribuutReferentie in primaryExpression
        const attrRefCtx = ctx.attribuutReferentie();
        return this.visit(attrRefCtx);
    }
    visitOnderwerpReferentie(ctx) {
        // onderwerpReferentie : onderwerpBasis ( (DIE | DAT) predicaat )?
        // Check if there's a subselectie (DIE/DAT predicaat)
        const predicaatCtx = ctx.predicaat ? ctx.predicaat() : null;
        if (predicaatCtx && (ctx.DIE && ctx.DIE() || ctx.DAT && ctx.DAT())) {
            // We have a subselectie!
            const baseExpression = this.visitOnderwerpBasis(ctx.onderwerpBasis());
            const predicaat = this.visitPredicaat(predicaatCtx);
            // Convert predicaat to unified predicate
            let unifiedPredicate;
            if (predicaat.predicate) {
                // Already has unified predicate
                unifiedPredicate = predicaat.predicate;
            }
            else if (predicaat.type === 'KenmerkPredicaat') {
                unifiedPredicate = {
                    type: 'SimplePredicate',
                    operator: 'kenmerk',
                    kenmerk: predicaat.kenmerk
                };
            }
            else if (predicaat.type === 'AttributeComparisonPredicaat') {
                const attrPred = predicaat;
                unifiedPredicate = {
                    type: 'AttributePredicate',
                    attribute: attrPred.attribute,
                    operator: attrPred.operator,
                    value: attrPred.value
                };
            }
            const node = {
                type: 'SubselectieExpression',
                collection: baseExpression,
                predicaat,
                // Add unified predicate representation
                predicate: unifiedPredicate
            };
            this.setLocation(node, ctx);
            if (unifiedPredicate) {
                this.setLocation(unifiedPredicate, ctx);
            }
            return node;
        }
        // No subselectie, just process the onderwerpBasis
        return this.visitOnderwerpBasis(ctx.onderwerpBasis());
    }
    visitOnderwerpBasis(ctx) {
        if (!ctx) {
            throw new Error('Expected onderwerpBasis context');
        }
        // PERCENTAGE-OF PATTERN DETECTION:
        // "het percentage X van Y" should be parsed as (X / 100) * Y
        // E.g., "het percentage reisduur eerste schijf van zijn belasting op basis van afstand"
        // → (percentage reisduur eerste schijf / 100) * belasting op basis van afstand
        const fullText = this.extractTextWithSpaces(ctx);
        const percentageMatch = fullText.toLowerCase().match(/^(?:het\s+)?percentage\s+(.+?)\s+van\s+(.+)$/);
        if (percentageMatch) {
            const parameterName = percentageMatch[1].trim();
            const baseText = percentageMatch[2].trim();
            // Create parameter reference for the percentage value
            const percentageRef = {
                type: 'ParameterReference',
                parameterName: parameterName
            };
            this.setLocation(percentageRef, ctx);
            // Create the base value as an AttributeReference 
            // Need to properly parse the base text (e.g., "zijn belasting op basis van afstand")
            // Remove possessive pronouns and build the path
            const cleanBaseText = baseText.replace(/^(?:zijn|haar|hun)\s+/i, '').trim();
            const baseRef = {
                type: 'AttributeReference',
                path: ['self', cleanBaseText]
            };
            this.setLocation(baseRef, ctx);
            // Create: (percentageRef / 100) * baseExpr
            const divBy100 = {
                type: 'BinaryExpression',
                operator: '/',
                left: percentageRef,
                right: {
                    type: 'NumberLiteral',
                    value: 100
                }
            };
            this.setLocation(divBy100, ctx);
            const multiplyExpr = {
                type: 'BinaryExpression',
                operator: '*',
                left: divBy100,
                right: baseRef
            };
            this.setLocation(multiplyExpr, ctx);
            return multiplyExpr;
        }
        // onderwerpBasis : basisOnderwerp ( voorzetsel basisOnderwerp )*
        // Process ALL basisOnderwerp elements to build complete navigation chain
        const path = this.onderwerpBasisToPath(ctx);
        if (path.length === 0) {
            // Fallback: extract text without articles
            const fallback = ctx.getText().replace(/^(de|het|een|alle)\s*/i, '').trim();
            // Even for fallback, use AttributeReference to maintain consistency
            const ref = {
                type: 'AttributeReference',
                path: [fallback]
            };
            this.setLocation(ref, ctx);
            return ref;
        }
        // Always return AttributeReference for onderwerp contexts
        // This matches Python implementation which only uses VariableReference
        // for truly standalone identifiers in primaryExpression
        const ref = {
            type: 'AttributeReference',
            path
        };
        this.setLocation(ref, ctx);
        return ref;
    }
    // Helper: Extract full path from onderwerpBasis context
    onderwerpBasisToPath(ctx) {
        if (!ctx) {
            return [];
        }
        // Grammar: onderwerpBasis : basisOnderwerp ( voorzetsel basisOnderwerp )*
        // In TypeScript ANTLR4, repeated elements use _list suffix
        const path = [];
        // Get all basisOnderwerp contexts using the _list method
        const allBasisOnderwerp = ctx.basisOnderwerp_list ? ctx.basisOnderwerp_list() : [];
        // Process each basisOnderwerp to build the navigation path
        for (let i = 0; i < allBasisOnderwerp.length; i++) {
            const part = this.visitBasisOnderwerpToString(allBasisOnderwerp[i]);
            if (part) {
                path.push(part);
            }
        }
        // CRITICAL: Reverse the path for Dutch right-to-left navigation
        // "passagiers van de reis" -> ["reis", "passagiers"] not ["passagiers", "reis"]
        // This matches Python's builder.py behavior
        return path.reverse();
    }
    // Helper: Convert single basisOnderwerp to string, preserving possessives
    visitBasisOnderwerpToString(ctx) {
        if (!ctx) {
            return null;
        }
        // basisOnderwerp : (DE | HET | EEN | ZIJN | ALLE | HIJ)? identifierOrKeyword+
        // Handle pronoun "hij" -> map to "self" for consistency with Python
        if (ctx.HIJ && ctx.HIJ()) {
            return 'self';
        }
        // Get identifiers
        // Use _list() for multiple identifiers (ANTLR-generated pattern)
        const identifiers = ctx.identifierOrKeyword_list
            ? ctx.identifierOrKeyword_list()
            : (ctx.identifierOrKeyword ? ctx.identifierOrKeyword() : []);
        const identifierList = Array.isArray(identifiers) ? identifiers : (identifiers ? [identifiers] : []);
        if (identifierList.length === 0) {
            // No identifiers, try fallback with text extraction
            const text = this.extractTextWithSpaces(ctx);
            // Remove common articles but preserve possessives
            return text.replace(/^(de|het|een|alle)\s+/i, '').trim();
        }
        // Build identifier text with proper spacing
        let text = identifierList.map((id) => id.getText()).join(' ');
        // Handle possessive pronoun "zijn" - must be preserved for FeitType navigation
        if (ctx.ZIJN && ctx.ZIJN()) {
            text = `zijn ${text}`.trim();
        }
        // Split on "van" if present to avoid duplicate navigation segments
        // e.g., "burgemeester van de hoofdstad" -> "burgemeester"
        if (text.includes(' van ')) {
            text = text.split(' van ')[0].trim();
        }
        return text;
    }
    // Helper method to convert onderwerpReferentie to a path list
    visitOnderwerpReferentieToPath(ctx) {
        if (!ctx) {
            return [];
        }
        // onderwerpReferentie : onderwerpBasis ( (DIE | DAT) predicaat )?
        // Use the new helper to get the full path
        const onderwerpBasisCtx = ctx.onderwerpBasis();
        if (!onderwerpBasisCtx) {
            return [];
        }
        // Directly use the path helper to get the navigation chain
        return this.onderwerpBasisToPath(onderwerpBasisCtx);
    }
    visitPredicaat(ctx) {
        // predicaat : elementairPredicaat | samengesteldPredicaat
        // First check if we have elementairPredicaat
        const elementairPredicaatCtx = ctx.elementairPredicaat ? ctx.elementairPredicaat() : null;
        if (elementairPredicaatCtx) {
            return this.visitElementairPredicaat(elementairPredicaatCtx);
        }
        // Check for samengesteldPredicaat
        const samengesteldPredicaatCtx = ctx.samengesteldPredicaat ? ctx.samengesteldPredicaat() : null;
        if (samengesteldPredicaatCtx) {
            return this.visitSamengesteldPredicaat(samengesteldPredicaatCtx);
        }
        // Try to get text and check if it's a simple kenmerk
        const text = this.extractTextWithSpaces(ctx);
        // Simple kenmerk pattern like "minderjarig zijn"
        if (text.endsWith(' zijn')) {
            const kenmerk = text.replace(/ zijn$/, '').trim();
            // Create old type for backward compatibility
            const node = {
                type: 'KenmerkPredicaat',
                kenmerk,
                // Add unified predicate representation
                predicate: {
                    type: 'SimplePredicate',
                    operator: 'kenmerk',
                    kenmerk
                }
            };
            this.setLocation(node, ctx);
            if (node.predicate) {
                this.setLocation(node.predicate, ctx);
            }
            return node;
        }
        throw new Error(`Unsupported predicate type: ${text}`);
    }
    visitElementairPredicaat(ctx) {
        // elementairPredicaat : objectPredicaat | attribuutVergelijkingsPredicaat
        // Check for attribuutVergelijkingsPredicaat first
        const attrVergelijkingCtx = ctx.attribuutVergelijkingsPredicaat ? ctx.attribuutVergelijkingsPredicaat() : null;
        if (attrVergelijkingCtx) {
            return this.visitAttribuutVergelijkingsPredicaat(attrVergelijkingCtx);
        }
        // Check for objectPredicaat
        const objectPredicaatCtx = ctx.objectPredicaat ? ctx.objectPredicaat() : null;
        if (objectPredicaatCtx) {
            return this.visitObjectPredicaat(objectPredicaatCtx);
        }
        throw new Error('Expected objectPredicaat or attribuutVergelijkingsPredicaat in elementairPredicaat');
    }
    visitAttribuutVergelijkingsPredicaat(ctx) {
        // attribuutVergelijkingsPredicaat : EEN? attribuutNaam=naamwoord HEBBEN comparisonOperator expressie
        // Get attribute name
        const attrNaamCtx = ctx.naamwoord ? ctx.naamwoord() : ctx._attribuutNaam;
        const attrName = this.extractTextWithSpaces(attrNaamCtx).trim();
        // Get comparison operator
        const compOpCtx = ctx.comparisonOperator();
        const opText = compOpCtx.getText();
        // Map operator text to standard operator
        let operator;
        switch (opText) {
            case 'kleiner dan':
            case 'kleiner is dan':
                operator = '<';
                break;
            case 'groter dan':
            case 'groter is dan':
                operator = '>';
                break;
            case 'gelijk aan':
            case 'is gelijk aan':
                operator = '==';
                break;
            default:
                throw new Error(`Unsupported comparison operator in predicaat: ${opText}`);
        }
        // Get the expression
        const exprCtx = ctx.expressie();
        const expr = this.visit(exprCtx);
        // Create old type with unified predicate
        const node = {
            type: 'AttributeComparisonPredicaat',
            attribute: attrName,
            operator,
            value: expr,
            // Add unified predicate representation
            predicate: {
                type: 'AttributePredicate',
                attribute: attrName,
                operator: operator,
                value: expr
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitObjectPredicaat(ctx) {
        // For now, treat object predicates as kenmerk predicates
        const text = this.extractTextWithSpaces(ctx);
        // Remove trailing "zijn" if present
        const kenmerk = text.replace(/ zijn$/, '').trim();
        // Create old type with unified predicate
        const node = {
            type: 'KenmerkPredicaat',
            kenmerk,
            // Add unified predicate representation
            predicate: {
                type: 'SimplePredicate',
                operator: 'kenmerk',
                kenmerk
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitSamengesteldPredicaat(ctx) {
        // samengesteldPredicaat : AAN voorwaardeKwantificatie VOLGENDE (VOORWAARDE | VOORWAARDEN) (VOLDOET | VOLDOEN) COLON
        //   samengesteldeVoorwaardeOnderdeelInPredicaat+
        // Extract quantifier (reuse existing visitVoorwaardeKwantificatie)
        const kwantificatie = this.visitVoorwaardeKwantificatie(ctx.voorwaardeKwantificatie());
        // Get all nested conditions
        const voorwaarden = [];
        // Get the list of condition parts
        const onderdeelContexts = ctx.samengesteldeVoorwaardeOnderdeelInPredicaat_list
            ? ctx.samengesteldeVoorwaardeOnderdeelInPredicaat_list()
            : (ctx.samengesteldeVoorwaardeOnderdeelInPredicaat ? ctx.samengesteldeVoorwaardeOnderdeelInPredicaat() : []);
        const contexts = Array.isArray(onderdeelContexts) ? onderdeelContexts : [onderdeelContexts];
        for (const onderdeelCtx of contexts) {
            if (onderdeelCtx) {
                const geneste = this.visitSamengesteldeVoorwaardeOnderdeelInPredicaat(onderdeelCtx);
                if (geneste) {
                    voorwaarden.push(geneste);
                }
            }
        }
        if (voorwaarden.length === 0) {
            throw new Error('Samengesteld predicaat has no valid conditions');
        }
        // Map to unified CompoundPredicate for evaluation
        const predicates = voorwaarden.map(v => this.convertGenesteVoorwaardeToPredicate(v));
        const node = {
            type: 'SamengesteldPredicaat',
            kwantificatie,
            voorwaarden,
            predicate: {
                type: 'CompoundPredicate',
                quantifier: kwantificatie.type,
                count: kwantificatie.aantal,
                predicates
            }
        };
        this.setLocation(node, ctx);
        this.setLocation(node.predicate, ctx);
        return node;
    }
    visitSamengesteldeVoorwaardeOnderdeelInPredicaat(ctx) {
        // samengesteldeVoorwaardeOnderdeelInPredicaat
        //   : bulletPrefix elementaireVoorwaardeInPredicaat
        //   | bulletPrefix genesteSamengesteldeVoorwaardeInPredicaat
        // Get bullet level
        const bulletPrefixCtx = ctx.bulletPrefix ? ctx.bulletPrefix() : null;
        const niveau = bulletPrefixCtx ? bulletPrefixCtx.getText().length : 1;
        let voorwaarde = null;
        const elementaireCtx = ctx.elementaireVoorwaardeInPredicaat ? ctx.elementaireVoorwaardeInPredicaat() : null;
        if (elementaireCtx) {
            voorwaarde = this.visitElementaireVoorwaardeInPredicaat(elementaireCtx);
        }
        else {
            const genesteCtx = ctx.genesteSamengesteldeVoorwaardeInPredicaat ? ctx.genesteSamengesteldeVoorwaardeInPredicaat() : null;
            if (genesteCtx) {
                voorwaarde = this.visitGenesteSamengesteldeVoorwaardeInPredicaat(genesteCtx);
            }
        }
        if (!voorwaarde)
            return null;
        const node = {
            type: 'GenesteVoorwaardeInPredicaat',
            niveau,
            voorwaarde
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitElementaireVoorwaardeInPredicaat(ctx) {
        // elementaireVoorwaardeInPredicaat : vergelijkingInPredicaat
        const vergelijkingCtx = ctx.vergelijkingInPredicaat ? ctx.vergelijkingInPredicaat() : null;
        if (vergelijkingCtx) {
            return this.visitVergelijkingInPredicaat(vergelijkingCtx);
        }
        return null;
    }
    visitVergelijkingInPredicaat(ctx) {
        // vergelijkingInPredicaat
        //   : attribuutReferentie comparisonOperator expressie  // "zijn leeftijd is groter dan 65"
        //   | onderwerpReferentie eenzijdigeObjectVergelijking  // "hij is een passagier"
        //   | attribuutReferentie (IS | ZIJN) kenmerkNaam       // "zijn reis is duurzaam"
        const attrRefCtx = ctx.attribuutReferentie ? ctx.attribuutReferentie() : null;
        const compOpCtx = ctx.comparisonOperator ? ctx.comparisonOperator() : null;
        const exprCtx = ctx.expressie ? ctx.expressie() : null;
        // Pattern 1: attribuutReferentie comparisonOperator expressie
        if (attrRefCtx && compOpCtx && exprCtx) {
            const attribuut = this.visitAttribuutReferentie(attrRefCtx);
            const opText = this.extractTextWithSpaces(compOpCtx).trim();
            const operator = this.mapOperator(opText);
            const waarde = this.visit(exprCtx);
            const node = {
                type: 'VergelijkingInPredicaat',
                vergelijkingType: 'attribuut_vergelijking',
                attribuut,
                operator,
                waarde
            };
            this.setLocation(node, ctx);
            return node;
        }
        // Pattern 2: onderwerpReferentie eenzijdigeObjectVergelijking (object/role check)
        const onderwerpRefCtx = ctx.onderwerpReferentie ? ctx.onderwerpReferentie() : null;
        const eenzijdigeCtx = ctx.eenzijdigeObjectVergelijking ? ctx.eenzijdigeObjectVergelijking() : null;
        if (onderwerpRefCtx && eenzijdigeCtx) {
            const onderwerp = this.visitOnderwerpReferentie(onderwerpRefCtx);
            // Extract the kenmerk or rol name from eenzijdigeObjectVergelijking
            let kenmerkNaam = '';
            const kenmerkNaamCtx = eenzijdigeCtx.kenmerkNaam ? eenzijdigeCtx.kenmerkNaam() : null;
            const rolNaamCtx = eenzijdigeCtx.rolNaam ? eenzijdigeCtx.rolNaam() : null;
            if (kenmerkNaamCtx) {
                kenmerkNaam = this.extractTextWithSpaces(kenmerkNaamCtx).trim();
            }
            else if (rolNaamCtx) {
                kenmerkNaam = this.extractTextWithSpaces(rolNaamCtx).trim();
            }
            const node = {
                type: 'VergelijkingInPredicaat',
                vergelijkingType: 'object_check',
                onderwerp,
                kenmerkNaam
            };
            this.setLocation(node, ctx);
            return node;
        }
        // Pattern 3: attribuutReferentie IS/ZIJN kenmerkNaam (kenmerk check)
        const kenmerkNaamCtx = ctx.kenmerkNaam ? ctx.kenmerkNaam() : null;
        if (attrRefCtx && kenmerkNaamCtx) {
            const attribuut = this.visitAttribuutReferentie(attrRefCtx);
            const kenmerkNaam = this.extractTextWithSpaces(kenmerkNaamCtx).trim();
            const node = {
                type: 'VergelijkingInPredicaat',
                vergelijkingType: 'kenmerk_check',
                attribuut,
                kenmerkNaam
            };
            this.setLocation(node, ctx);
            return node;
        }
        throw new Error(`Unknown vergelijkingInPredicaat pattern: ${this.extractTextWithSpaces(ctx)}`);
    }
    visitGenesteSamengesteldeVoorwaardeInPredicaat(ctx) {
        // genesteSamengesteldeVoorwaardeInPredicaat
        //   : (VOLDOET | VOLDOEN | WORDT VOLDAAN) AAN voorwaardeKwantificatie VOLGENDE (VOORWAARDE | VOORWAARDEN) COLON
        //     samengesteldeVoorwaardeOnderdeelInPredicaat+
        // Extract quantifier
        const kwantificatie = this.visitVoorwaardeKwantificatie(ctx.voorwaardeKwantificatie());
        // Get all nested conditions
        const voorwaarden = [];
        const onderdeelContexts = ctx.samengesteldeVoorwaardeOnderdeelInPredicaat_list
            ? ctx.samengesteldeVoorwaardeOnderdeelInPredicaat_list()
            : (ctx.samengesteldeVoorwaardeOnderdeelInPredicaat ? ctx.samengesteldeVoorwaardeOnderdeelInPredicaat() : []);
        const contexts = Array.isArray(onderdeelContexts) ? onderdeelContexts : [onderdeelContexts];
        for (const onderdeelCtx of contexts) {
            if (onderdeelCtx) {
                const geneste = this.visitSamengesteldeVoorwaardeOnderdeelInPredicaat(onderdeelCtx);
                if (geneste) {
                    voorwaarden.push(geneste);
                }
            }
        }
        if (voorwaarden.length === 0) {
            throw new Error('Nested samengesteld predicaat has no valid conditions');
        }
        // Map to unified CompoundPredicate
        const predicates = voorwaarden.map(v => this.convertGenesteVoorwaardeToPredicate(v));
        const node = {
            type: 'SamengesteldPredicaat',
            kwantificatie,
            voorwaarden,
            predicate: {
                type: 'CompoundPredicate',
                quantifier: kwantificatie.type,
                count: kwantificatie.aantal,
                predicates
            }
        };
        this.setLocation(node, ctx);
        this.setLocation(node.predicate, ctx);
        return node;
    }
    convertGenesteVoorwaardeToPredicate(geneste) {
        const voorwaarde = geneste.voorwaarde;
        if (voorwaarde.type === 'SamengesteldPredicaat') {
            return voorwaarde.predicate; // Already a CompoundPredicate
        }
        if (voorwaarde.type === 'VergelijkingInPredicaat') {
            return this.convertVergelijkingToPredicate(voorwaarde);
        }
        throw new Error(`Unknown voorwaarde type: ${voorwaarde.type}`);
    }
    convertVergelijkingToPredicate(v) {
        if (v.vergelijkingType === 'attribuut_vergelijking') {
            // Create an AttributePredicate for attribute comparisons
            // Extract attribute path - v.attribuut is an Expression, usually AttributeReference
            let attributePath = '';
            if (v.attribuut && v.attribuut.type === 'AttributeReference') {
                attributePath = v.attribuut.path?.join('.') || '';
            }
            return {
                type: 'AttributePredicate',
                attribute: attributePath,
                operator: this.mapOperator(v.operator || '=='),
                value: v.waarde
            };
        }
        // kenmerk_check or object_check - use SimplePredicate
        return {
            type: 'SimplePredicate',
            operator: 'kenmerk',
            kenmerk: v.kenmerkNaam
        };
    }
    mapOperator(op) {
        // Map Dutch operators to standard operators if not already standard
        const operatorMap = {
            'gelijk aan': '==',
            'is gelijk aan': '==',
            'ongelijk aan': '!=',
            'is ongelijk aan': '!=',
            'is niet gelijk aan': '!=',
            'kleiner dan': '<',
            'kleiner is dan': '<',
            'is kleiner dan': '<',
            'groter dan': '>',
            'groter is dan': '>',
            'is groter dan': '>',
            'kleiner of gelijk aan': '<=',
            'kleiner dan of gelijk aan': '<=',
            'groter of gelijk aan': '>=',
            'groter dan of gelijk aan': '>='
        };
        return operatorMap[op] || op;
    }
    visitRegelVersie(ctx) {
        const geldigheid = this.visit(ctx.versieGeldigheid());
        const node = {
            type: 'RuleVersion',
            validity: geldigheid
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVersieGeldigheid(ctx) {
        if (ctx.ALTIJD()) {
            return 'altijd';
        }
        else if (ctx.VANAF()) {
            return 'vanaf';
        }
        else if (ctx.TOT()) {
            return 'tot';
        }
        return 'altijd'; // default
    }
    visitResultaatDeel(ctx) {
        // The grammar has labeled alternatives, so we check the context type
        console.log('visitResultaatDeel context type:', ctx.constructor.name);
        if (ctx.constructor.name === 'GelijkstellingResultaatContext') {
            return this.visitGelijkstellingResultaat(ctx);
        }
        else if (ctx.constructor.name === 'DagsoortdefinitieResultaatContext') {
            return this.visitDagsoortdefinitieResultaat(ctx);
        }
        else if (ctx.constructor.name === 'FeitCreatieResultaatContext') {
            return this.visitFeitCreatieResultaat(ctx);
        }
        else if (ctx.constructor.name === 'KenmerkFeitResultaatContext') {
            return this.visitKenmerkFeitResultaat(ctx);
        }
        else if (ctx.constructor.name === 'ObjectCreatieResultaatContext') {
            return this.visitObjectCreatieResultaat(ctx);
        }
        else if (ctx.constructor.name === 'VerdelingContext') {
            // The generated context is named after the label
            return this.visitVerdelingResultaat(ctx);
        }
        else if (ctx.constructor.name === 'ConsistencyCheckResultaatContext') {
            return this.visitConsistencyCheckResultaat(ctx);
        }
        else if (ctx.constructor.name === 'RelationshipWithAttributeResultaatContext') {
            return this.visitRelationshipWithAttributeResultaat(ctx);
        }
        // Fallback to visitChildren
        return this.visitChildren(ctx);
    }
    visitGelijkstellingResultaat(ctx) {
        // Get the target attribute reference
        const targetCtx = ctx.attribuutReferentie();
        // Visit the attribute reference to get the full AttributeReference
        const target = this.visitAttribuutReferentie(targetCtx);
        if (!target) {
            throw new Error('Failed to parse gelijkstelling target');
        }
        // Get the expression - check which operator is used
        let expression;
        if (ctx.WORDT_BEREKEND_ALS()) {
            expression = this.visit(ctx.expressie());
        }
        else if (ctx.WORDT_GESTELD_OP()) {
            expression = this.visit(ctx.expressie());
        }
        else if (ctx.WORDT_GEINITIALISEERD_OP()) {
            expression = this.visit(ctx.expressie());
        }
        else {
            throw new Error('Expected gelijkstelling operator');
        }
        const result = {
            type: 'Gelijkstelling',
            target,
            expression
        };
        // Store location for this gelijkstelling
        this.setLocation(result, ctx);
        return result;
    }
    visitFeitCreatieResultaat(ctx) {
        // Get the feitCreatiePattern context
        const patternCtx = ctx.feitCreatiePattern();
        if (!patternCtx) {
            throw new Error('FeitCreatieResultaat missing feitCreatiePattern');
        }
        // Get the role and subject phrases using the proper methods
        const rolePhrases = patternCtx.feitCreatieRolPhrase_list() || [];
        const subjectPhrases = patternCtx.feitCreatieSubjectPhrase_list() || [];
        // Extract role1 (first role phrase)
        let role1 = '';
        if (rolePhrases.length > 0) {
            const role1Ctx = rolePhrases[0];
            const role1Words = [];
            // Get all words in the role phrase
            const wordList = role1Ctx.feitCreatieWord_list?.() || [];
            for (const wordCtx of wordList) {
                role1Words.push(wordCtx.getText());
            }
            role1 = role1Words.join(' ');
        }
        // Extract subject1 (first subject phrase)
        let subject1Text = '';
        if (subjectPhrases.length > 0) {
            const subject1Ctx = subjectPhrases[0];
            const subject1Words = [];
            // Get all words in the subject phrase
            const wordList = subject1Ctx.feitCreatieSubjectWord_list?.() || [];
            for (const wordCtx of wordList) {
                subject1Words.push(wordCtx.getText());
            }
            subject1Text = subject1Words.join(' ');
            // Left side always has "van een" per spec, so prepend "een"
            if (subject1Text) {
                subject1Text = `een ${subject1Text}`;
            }
        }
        // Create subject1 as an AttributeReference
        const subject1 = {
            type: 'AttributeReference',
            path: [subject1Text]
        };
        // Extract role2 (second role phrase)
        let role2 = '';
        if (rolePhrases.length > 1) {
            const role2Ctx = rolePhrases[1];
            const role2Words = [];
            // Get all words in the role phrase
            const wordList = role2Ctx.feitCreatieWord_list?.() || [];
            for (const wordCtx of wordList) {
                role2Words.push(wordCtx.getText());
            }
            role2 = role2Words.join(' ');
        }
        // Extract subject2 (second subject phrase)
        let subject2Text = '';
        if (subjectPhrases.length > 1) {
            const subject2Ctx = subjectPhrases[1];
            const subject2Words = [];
            // Get all words in the subject phrase
            const wordList = subject2Ctx.feitCreatieSubjectWord_list?.() || [];
            for (const wordCtx of wordList) {
                subject2Words.push(wordCtx.getText());
            }
            subject2Text = subject2Words.join(' ');
            // Include article if present
            const article3 = patternCtx.article3;
            if (article3) {
                subject2Text = `${article3.getText()} ${subject2Text}`;
            }
        }
        // Create subject2 as an AttributeReference (often a navigation pattern)
        const subject2 = {
            type: 'AttributeReference',
            path: [subject2Text]
        };
        // Create the FeitCreatie node
        const result = {
            type: 'FeitCreatie',
            role1,
            subject1,
            role2,
            subject2
        };
        // Store location
        this.setLocation(result, ctx);
        return result;
    }
    visitObjectCreatieResultaat(ctx) {
        // Get the objectCreatie context
        const objectCreatieCtx = ctx.objectCreatie();
        // Get the object type name
        const objectTypeCtx = objectCreatieCtx.objectType ? objectCreatieCtx.objectType() : objectCreatieCtx._objectType;
        if (!objectTypeCtx) {
            throw new Error('Expected object type in object creation');
        }
        let objectType = this.extractObjectTypeName(objectTypeCtx.getText());
        // Resolve role name to actual object type if needed
        // e.g., "vastgestelde contingent treinmiles" -> "Contingent treinmiles"
        for (const [feitTypeName, feitType] of this.feitTypes) {
            for (const rol of feitType.rollen || []) {
                // Clean role name by removing articles
                let roleNameClean = (rol.naam || '').toLowerCase();
                for (const article of ['de ', 'het ', 'een ']) {
                    if (roleNameClean.startsWith(article)) {
                        roleNameClean = roleNameClean.substring(article.length);
                        break;
                    }
                }
                // Clean object type by removing articles
                let objectTypeClean = objectType.toLowerCase();
                for (const article of ['de ', 'het ', 'een ']) {
                    if (objectTypeClean.startsWith(article)) {
                        objectTypeClean = objectTypeClean.substring(article.length);
                        break;
                    }
                }
                // Check if object type matches or contains the role name
                if (roleNameClean === objectTypeClean ||
                    roleNameClean.includes(objectTypeClean) ||
                    objectTypeClean.includes(roleNameClean)) {
                    // Found matching role - use the actual object type
                    objectType = rol.objectType || rol.object_type || objectType;
                    break;
                }
            }
        }
        // Parse attribute initializations if present
        const attributeInits = [];
        const objectAttrInitCtx = objectCreatieCtx.objectAttributeInit();
        if (objectAttrInitCtx) {
            // Get the first attribute
            const firstAttrCtx = objectAttrInitCtx.attribuut ? objectAttrInitCtx.attribuut() : objectAttrInitCtx._attribuut;
            const firstValueCtx = objectAttrInitCtx.waarde ? objectAttrInitCtx.waarde() : objectAttrInitCtx._waarde;
            if (firstAttrCtx && firstValueCtx) {
                const firstAttr = this.extractAttributeName(firstAttrCtx.getText());
                const firstValue = this.visit(firstValueCtx);
                attributeInits.push({ attribute: firstAttr, value: firstValue });
            }
            // Get additional attributes (EN syntax)
            const vervolgList = objectAttrInitCtx.attributeInitVervolg_list();
            for (const vervolg of vervolgList) {
                const attrCtx = vervolg.attribuut ? vervolg.attribuut() : vervolg._attribuut;
                const valueCtx = vervolg.waarde ? vervolg.waarde() : vervolg._waarde;
                if (attrCtx && valueCtx) {
                    const attr = this.extractAttributeName(attrCtx.getText());
                    const value = this.visit(valueCtx);
                    attributeInits.push({ attribute: attr, value });
                }
            }
        }
        const node = {
            type: 'ObjectCreation',
            objectType,
            attributeInits
        };
        this.setLocation(node, ctx);
        return node;
    }
    extractObjectTypeName(text) {
        // Remove any articles and clean up the text
        const words = text.split(/\s+/);
        const cleaned = words.filter(w => !['de', 'het', 'een'].includes(w.toLowerCase()));
        return cleaned.join(' ');
    }
    extractAttributeName(text) {
        // Clean up attribute name, removing articles if present
        const words = text.split(/\s+/);
        const cleaned = words.filter(w => !['de', 'het', 'een'].includes(w.toLowerCase()));
        return cleaned.join(' ');
    }
    // Helper to extract target attribute name from full reference
    extractTargetName(fullReference) {
        const trimmed = fullReference.trim();
        // First try to split by spaces
        const words = trimmed.split(/\s+/);
        // If multiple words and first is an article, remove it
        if (words.length > 1 && /^(de|het|een)$/i.test(words[0])) {
            // Join remaining words with space, preserving multi-word attributes
            return words.slice(1).join(' ').toLowerCase();
        }
        // Check if article is concatenated with the name (no space)
        const concatenatedMatch = trimmed.match(/^(de|het|een)(.+)$/i);
        if (concatenatedMatch && concatenatedMatch[2]) {
            // Extract the part after the article
            return concatenatedMatch[2].toLowerCase();
        }
        return trimmed.toLowerCase();
    }
    // Helper to extract text from a context
    extractText(ctx) {
        if (!ctx)
            return '';
        // Use getText() method if available
        if (ctx.getText) {
            return ctx.getText();
        }
        // Fallback for contexts without getText
        const start = ctx.start?.start ?? 0;
        const stop = ctx.stop?.stop ?? 0;
        const inputStream = ctx.parser?.inputStream;
        if (inputStream && start <= stop) {
            return inputStream.getText(start, stop);
        }
        return '';
    }
    // Helper to extract text with spaces preserved between tokens
    extractTextWithSpaces(ctx) {
        if (!ctx)
            return '';
        // If it's a terminal node, just return its text
        if (ctx.symbol) {
            return ctx.getText();
        }
        // For parser rule contexts, reconstruct with spaces
        const parts = [];
        const childCount = ctx.getChildCount ? ctx.getChildCount() : 0;
        // console.log('extractTextWithSpaces childCount:', childCount);
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i);
            // console.log('Child', i, ':', child ? child.constructor.name : 'null');
            if (!child) {
                // console.log('Child is null!');
                continue;
            }
            if (child.symbol) {
                // Terminal node
                try {
                    const text = child.getText();
                    // console.log('Terminal node text:', text);
                    parts.push(text);
                }
                catch (e) {
                    // console.log('Error getting terminal node text:', e);
                    throw e;
                }
            }
            else {
                // Recursively get text from child contexts
                const childText = this.extractTextWithSpaces(child);
                if (childText) {
                    parts.push(childText);
                }
            }
        }
        return parts.join(' ');
    }
    // Object type definition visitor methods
    visitObjectTypeDefinition(ctx) {
        // Get the name (naamwoordNoIs)
        const nameCtx = ctx.naamwoordNoIs();
        // Use extractTextWithSpaces to preserve multi-word names like "Natuurlijk persoon"
        const rawName = this.extractTextWithSpaces(nameCtx).trim();
        const name = this.extractParameterName(rawName);
        // Check for plural form (in parentheses)
        const plural = [];
        if (ctx.MV_START()) {
            // The grammar uses plural+=IDENTIFIER+ which creates a list
            // In ANTLR4 TypeScript, this is accessed via ctx._plural
            const pluralList = ctx._plural || [];
            for (const identifier of pluralList) {
                // In ANTLR4 TypeScript, tokens are TerminalNode objects
                plural.push(identifier.text || identifier.getText());
            }
        }
        // Check if animated (bezield)
        const animated = !!ctx.BEZIELD();
        // Get all members using the _list() method
        const members = [];
        const memberCtxs = ctx.objectTypeMember_list();
        // Collect attribute names for compound attribute resolution
        const attributeNames = new Set();
        for (const memberCtx of memberCtxs) {
            const member = this.visit(memberCtx);
            members.push(member);
            // Track attribute names for this object type
            if (member.type === 'AttributeSpecification' || member.type === 'KenmerkSpecification') {
                attributeNames.add(member.name);
            }
        }
        // Store attributes for this object type
        this.objectTypeAttributes.set(name, attributeNames);
        // Generate default plural if not explicitly provided
        const pluralForms = plural.length > 0 ? plural : this.generateDefaultPlural(name);
        const objType = {
            type: 'ObjectTypeDefinition',
            name,
            plural: pluralForms,
            animated,
            members
        };
        // Store location separately
        this.setLocation(objType, ctx);
        return objType;
    }
    visitObjectTypeMember(ctx) {
        // Check if it has kenmerkSpecificatie or attribuutSpecificatie
        const kenmerkCtx = ctx.kenmerkSpecificatie();
        if (kenmerkCtx) {
            return this.visit(kenmerkCtx);
        }
        const attribuutCtx = ctx.attribuutSpecificatie();
        if (attribuutCtx) {
            return this.visit(attribuutCtx);
        }
        throw new Error('Expected kenmerk or attribuut specification');
    }
    visitKenmerkSpecificatie(ctx) {
        // Get the name - can be identifier, naamwoord, or naamwoordWithNumbers
        let name;
        if (ctx.identifier()) {
            name = ctx.identifier().getText();
        }
        else if (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) {
            const naamwoordCtx = ctx.naamwoordWithNumbers();
            name = this.extractTextWithSpaces(naamwoordCtx);
        }
        else {
            const naamwoordCtx = ctx.naamwoord();
            name = this.extractTextWithSpaces(naamwoordCtx);
        }
        // Check for type (bijvoeglijk or bezittelijk)
        let kenmerkType;
        if (ctx.BIJVOEGLIJK && ctx.BIJVOEGLIJK()) {
            kenmerkType = 'bijvoeglijk';
        }
        else if (ctx.BEZITTELIJK && ctx.BEZITTELIJK()) {
            kenmerkType = 'bezittelijk';
        }
        const result = {
            type: 'KenmerkSpecification',
            name
        };
        if (kenmerkType) {
            result.kenmerkType = kenmerkType;
        }
        return result;
    }
    visitAttribuutSpecificatie(ctx) {
        // Get the name - can be naamwoord or naamwoordWithNumbers
        let nameCtx;
        if (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) {
            nameCtx = ctx.naamwoordWithNumbers();
        }
        else {
            nameCtx = ctx.naamwoord();
        }
        // Use extractTextWithSpaces to preserve multi-word parameter names
        const rawName = this.extractTextWithSpaces(nameCtx);
        const name = this.extractParameterName(rawName);
        // Get data type or domain reference
        let dataType;
        const datatypeCtx = ctx.datatype();
        if (datatypeCtx) {
            dataType = this.visitDatatype(datatypeCtx);
        }
        else {
            const domainRefCtx = ctx.domeinRef();
            dataType = this.visitDomeinRef(domainRefCtx);
        }
        // Get unit if specified
        let unit;
        if (ctx.MET_EENHEID && ctx.MET_EENHEID()) {
            // Check for named unit using unitIdentifier() accessor
            const unitIdCtx = ctx.unitIdentifier ? ctx.unitIdentifier() : null;
            if (unitIdCtx) {
                unit = unitIdCtx.getText();
            }
            else if (ctx.PERCENT_SIGN && ctx.PERCENT_SIGN()) {
                unit = '%';
            }
            else if (ctx.EURO_SYMBOL && ctx.EURO_SYMBOL()) {
                unit = '€';
            }
            else if (ctx.DOLLAR_SYMBOL && ctx.DOLLAR_SYMBOL()) {
                unit = '$';
            }
        }
        // Get dimensions if specified
        const dimensions = [];
        if (ctx.GEDIMENSIONEERD_MET && ctx.GEDIMENSIONEERD_MET()) {
            const dimensionRefs = ctx.dimensieRef_list ? ctx.dimensieRef_list() : [];
            for (const dimRef of dimensionRefs) {
                dimensions.push(this.extractText(dimRef));
            }
        }
        // Check for timeline
        const timeline = ctx.tijdlijn && ctx.tijdlijn() ? true : undefined;
        // Build node with only defined properties
        const node = {
            type: 'AttributeSpecification',
            name,
            dataType
        };
        // Only add optional properties when they have values
        if (unit !== undefined) {
            node.unit = unit;
        }
        if (dimensions.length > 0) {
            node.dimensions = dimensions;
        }
        if (timeline) {
            node.timeline = timeline;
        }
        this.setLocation(node, ctx);
        return node;
    }
    visitDatatype(ctx) {
        // Check which specific datatype it is
        if (ctx.tekstDatatype && ctx.tekstDatatype()) {
            const node = { type: 'Tekst' };
            this.setLocation(node, ctx);
            return node;
        }
        else if (ctx.numeriekDatatype && ctx.numeriekDatatype()) {
            return this.visitNumeriekDatatype(ctx.numeriekDatatype());
        }
        else if (ctx.booleanDatatype && ctx.booleanDatatype()) {
            const node = { type: 'Boolean' };
            this.setLocation(node, ctx);
            return node;
        }
        else if (ctx.datumTijdDatatype && ctx.datumTijdDatatype()) {
            return this.visitDatumTijdDatatype(ctx.datumTijdDatatype());
        }
        else if (ctx.percentageDatatype && ctx.percentageDatatype()) {
            return this.visitPercentageDatatype(ctx.percentageDatatype());
        }
        else if (ctx.lijstDatatype && ctx.lijstDatatype()) {
            // Handle list datatype - parse as text for now
            const node = { type: 'Lijst', specification: this.extractText(ctx.lijstDatatype()) };
            this.setLocation(node, ctx);
            return node;
        }
        // Try to determine from text as fallback
        const text = this.extractText(ctx);
        throw new Error(`Unknown data type: ${text}`);
    }
    visitNumeriekDatatype(ctx) {
        // numeriekDatatype : NUMERIEK ( LPAREN getalSpecificatie RPAREN )?
        const result = { type: 'Numeriek' };
        if (ctx.getalSpecificatie && ctx.getalSpecificatie()) {
            const spec = this.extractText(ctx.getalSpecificatie());
            result.specification = spec;
        }
        this.setLocation(result, ctx);
        return result;
    }
    visitDatumTijdDatatype(ctx) {
        // Check which grammar token was matched: DATUM_IN_DAGEN | DATUM_TIJD_MILLIS
        const node = (ctx.DATUM_TIJD_MILLIS && ctx.DATUM_TIJD_MILLIS())
            ? { type: 'DatumTijd' }
            : { type: 'Datum' };
        this.setLocation(node, ctx);
        return node;
    }
    visitPercentageDatatype(ctx) {
        // percentageDatatype : PERCENTAGE ( LPAREN getalSpecificatie RPAREN )?
        const result = { type: 'Percentage' };
        if (ctx.getalSpecificatie && ctx.getalSpecificatie()) {
            const spec = this.extractText(ctx.getalSpecificatie());
            result.specification = spec;
        }
        this.setLocation(result, ctx);
        return result;
    }
    visitDomeinRef(ctx) {
        const domain = this.extractText(ctx);
        const node = {
            type: 'DomainReference',
            domain
        };
        this.setLocation(node, ctx);
        return node;
    }
    // Parameter parsing visitor methods
    visitParameterDefinition(ctx) {
        // Get parameter name phrase (with article)
        const namePhrase = ctx.parameterNamePhrase();
        // Extract the full text with spaces preserved
        let nameText = '';
        if (namePhrase) {
            // Get the text with spaces from the original input stream
            const startToken = namePhrase.start;
            const stopToken = namePhrase.stop;
            if (startToken && stopToken && startToken.source) {
                // Access the input stream through the token's source
                const inputStream = startToken.source[1]; // TokenSource tuple: [lexer, inputStream]
                if (inputStream) {
                    const startIndex = startToken.start;
                    const stopIndex = stopToken.stop;
                    nameText = inputStream.getText(startIndex, stopIndex);
                }
            }
            if (!nameText) {
                // Fallback - use extractTextWithSpaces to preserve multi-word attributes
                nameText = this.extractTextWithSpaces(namePhrase);
            }
        }
        // Extract name without article
        const name = this.extractParameterName(nameText);
        // Get data type or domain reference
        let dataType;
        const datatypeCtx = ctx.datatype();
        if (datatypeCtx) {
            dataType = this.visitDatatype(datatypeCtx);
        }
        else {
            const domainRefCtx = ctx.domeinRef();
            dataType = this.visitDomeinRef(domainRefCtx);
        }
        // Get unit if specified
        let unit;
        if (ctx.MET_EENHEID && ctx.MET_EENHEID()) {
            // Use eenheidExpressie which supports complex units
            const unitExpr = ctx.eenheidExpressie();
            if (unitExpr) {
                unit = this.extractText(unitExpr);
            }
        }
        // Check for timeline
        const timeline = ctx.tijdlijn && ctx.tijdlijn() ? true : undefined;
        const result = {
            type: 'ParameterDefinition',
            name,
            dataType
        };
        // Store location separately
        this.setLocation(result, ctx);
        if (unit) {
            result.unit = unit;
        }
        if (timeline) {
            result.timeline = timeline;
        }
        return result;
    }
    visitDagsoortDefinition(ctx) {
        // Grammar: DAGSOORT naamwoord ( MV_START plural+=IDENTIFIER+ RPAREN )? SEMICOLON?
        const nameCtx = ctx.naamwoord();
        if (!nameCtx) {
            throw new Error('Expected naamwoord in dagsoort definition');
        }
        const name = this.extractTextWithSpaces(nameCtx);
        // Check for plural form
        let plural = undefined;
        if (ctx.MV_START && ctx.MV_START()) {
            // Get plural identifiers - they are labeled as plural
            const pluralCtxArray = ctx.plural || [];
            if (pluralCtxArray.length > 0) {
                plural = pluralCtxArray.map((t) => t.getText()).join(' ');
            }
        }
        const node = {
            type: 'Dagsoort',
            name,
            plural
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDimensieDefinition(ctx) {
        // Get dimension name
        const nameCtx = ctx.naamwoord(0); // First naamwoord is the dimension name
        const nameText = this.extractTextWithSpaces(nameCtx);
        const name = this.extractParameterName(nameText);
        // Get plural form - it's labeled as dimensieNaamMeervoud
        const pluralCtx = ctx._dimensieNaamMeervoud;
        let plural = '';
        if (pluralCtx) {
            const pluralText = this.extractTextWithSpaces(pluralCtx);
            plural = this.extractParameterName(pluralText);
        }
        // Determine usage style and preposition
        let usageStyle;
        let preposition;
        const voorzetselSpec = ctx.voorzetselSpecificatie();
        if (voorzetselSpec && voorzetselSpec.NA_HET_ATTRIBUUT_MET_VOORZETSEL && voorzetselSpec.NA_HET_ATTRIBUUT_MET_VOORZETSEL()) {
            usageStyle = 'prepositional';
            // Get the preposition (voorzetsel) - it's labeled as vz
            const vzCtx = voorzetselSpec._vz;
            if (vzCtx) {
                preposition = this.extractText(vzCtx);
            }
        }
        else if (voorzetselSpec && voorzetselSpec.VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL && voorzetselSpec.VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL()) {
            usageStyle = 'adjectival';
        }
        else {
            // Default to prepositional with 'van' if not specified
            usageStyle = 'prepositional';
            preposition = 'van';
        }
        // Get labels
        const labels = [];
        const labelSpecs = ctx.labelWaardeSpecificatie_list() || [];
        for (const labelSpec of labelSpecs) {
            const position = parseInt(labelSpec.NUMBER().getText());
            const labelCtx = labelSpec.naamwoord();
            const label = this.extractTextWithSpaces(labelCtx);
            labels.push({
                position,
                label
            });
        }
        const dimension = {
            type: 'Dimension',
            name,
            plural,
            usageStyle,
            preposition,
            labels
        };
        // Register dimension labels for model-driven stripping
        for (const labelObj of labels) {
            this.registeredDimensionLabels.set(labelObj.label, name);
        }
        // Store location separately
        this.setLocation(dimension, ctx);
        return dimension;
    }
    visitFeitTypeDefinition(ctx) {
        // Check if it's wederkerig (reciprocal)
        const wederkerig = Boolean(ctx.WEDERKERIG_FEITTYPE && ctx.WEDERKERIG_FEITTYPE());
        // Extract the feittype name - _feittypenaam is a naamwoord context
        const naamCtx = ctx._feittypenaam;
        let naam = '';
        if (naamCtx) {
            naam = this.extractTextWithSpaces(naamCtx);
        }
        // Extract roles from rolDefinition elements
        const rollen = [];
        const rolDefs = ctx.rolDefinition_list() || [];
        for (const rolDef of rolDefs) {
            const rol = this.visitRolDefinition(rolDef);
            if (rol) {
                rollen.push(rol);
            }
        }
        // Extract cardinality description from cardinalityLine
        let cardinalityDescription;
        const cardinalityLineCtx = ctx.cardinalityLine();
        if (cardinalityLineCtx) {
            cardinalityDescription = this.extractCardinalityLine(cardinalityLineCtx);
        }
        // Store FeitType for role resolution during object creation
        const feitType = {
            naam,
            rollen,
            wederkerig,
            cardinalityDescription
        };
        this.feitTypes.set(naam, feitType);
        const node = {
            type: 'FeitType',
            naam,
            wederkerig,
            rollen,
            cardinalityDescription
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDomeinDefinition(ctx) {
        // Extract domain name from the name token (IDENTIFIER)
        const name = ctx.IDENTIFIER().getText();
        // Get the domain type context
        const domeinType = ctx.domeinType();
        // Base types are extracted from the grammar tokens to match lexer definitions
        let baseType;
        let decimals;
        let enumerationValues;
        if (domeinType.numeriekDatatype()) {
            // NUMERIEK token text from lexer
            baseType = domeinType.numeriekDatatype().NUMERIEK().getText();
            // Extract decimals if present: "getal met 2 decimalen"
            const numCtx = domeinType.numeriekDatatype();
            const getalSpec = numCtx.getalSpecificatie();
            if (getalSpec && getalSpec.NUMBER()) {
                decimals = parseInt(getalSpec.NUMBER().getText());
            }
        }
        else if (domeinType.enumeratieSpecificatie()) {
            // ENUMERATIE token text from lexer
            baseType = domeinType.enumeratieSpecificatie().ENUMERATIE().getText();
            const enumCtx = domeinType.enumeratieSpecificatie();
            enumerationValues = enumCtx.ENUM_LITERAL_list()
                .map((lit) => {
                // Remove surrounding quotes from enum literals
                const text = lit.getText();
                return text.replace(/^'|'$/g, '');
            });
        }
        else if (domeinType.tekstDatatype()) {
            // TEKST token text from lexer
            baseType = domeinType.tekstDatatype().TEKST().getText();
        }
        else if (domeinType.booleanDatatype()) {
            // BOOLEAN token text from lexer
            baseType = domeinType.booleanDatatype().BOOLEAN().getText();
        }
        else if (domeinType.datumTijdDatatype()) {
            // datumTijdDatatype is either DATUM_IN_DAGEN or DATUM_TIJD_MILLIS
            // Extract the actual token text to match lexer definition
            const datumCtx = domeinType.datumTijdDatatype();
            if (datumCtx.DATUM_TIJD_MILLIS && datumCtx.DATUM_TIJD_MILLIS()) {
                baseType = datumCtx.DATUM_TIJD_MILLIS().getText();
            }
            else {
                baseType = datumCtx.DATUM_IN_DAGEN().getText();
            }
        }
        else {
            // Fallback - should not happen with valid grammar input
            baseType = 'Tekst';
        }
        // Extract unit if present: "met eenheid m"
        let unit;
        if (ctx.MET_EENHEID() && ctx.eenheidExpressie()) {
            unit = this.extractTextWithSpaces(ctx.eenheidExpressie());
        }
        const node = {
            type: 'DomainDefinition',
            name,
            baseType,
            unit,
            decimals,
            enumerationValues
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitRolDefinition(ctx) {
        // The format is: article roleName\tObjectType
        // or: article roleName (mv: plural)\tObjectType
        // Tabs are on HIDDEN channel, so we need to access raw input stream
        // Access the raw input stream to get the full text including tabs
        let fullText = '';
        try {
            const startToken = ctx.start;
            const stopToken = ctx.stop || startToken;
            if (startToken && startToken.getInputStream) {
                const inputStream = startToken.getInputStream();
                const startIdx = startToken.start;
                const fullInput = inputStream.getText(0, inputStream.size);
                // Find end of line from start position
                let endIdx = fullInput.indexOf('\n', startIdx);
                if (endIdx === -1)
                    endIdx = fullInput.length;
                fullText = fullInput.substring(startIdx, endIdx).trim();
            }
        }
        catch {
            // Fall back to getText if input stream access fails
            fullText = ctx.getText();
        }
        // Remove leading article (de/het)
        let textWithoutArticle = fullText;
        if (fullText.toLowerCase().startsWith('de ')) {
            textWithoutArticle = fullText.substring(3).trim();
        }
        else if (fullText.toLowerCase().startsWith('het ')) {
            textWithoutArticle = fullText.substring(4).trim();
        }
        // Check for tab separator - this is the reliable way to split role from objectType
        let roleName = '';
        let objectType = '';
        let meervoud;
        if (textWithoutArticle.includes('\t')) {
            // Tab-separated format: "role name\tObject Type"
            const tabParts = textWithoutArticle.split('\t');
            let roleNamePart = tabParts[0].trim();
            objectType = tabParts.slice(1).join(' ').trim();
            // Handle cardinality text that might be in object type
            for (const indicator of ['één', 'meerdere', 'Eén', 'Een', 'Één', 'Meerdere']) {
                const idx = objectType.toLowerCase().indexOf(indicator.toLowerCase());
                if (idx !== -1) {
                    objectType = objectType.substring(0, idx).trim();
                    break;
                }
            }
            // Check for plural form in role name: "name (mv: plural)"
            const pluralMatch = roleNamePart.match(/^(.+?)\s*\(mv:\s*([^)]+)\)$/);
            if (pluralMatch) {
                roleNamePart = pluralMatch[1].trim();
                meervoud = pluralMatch[2].trim();
            }
            roleName = roleNamePart;
        }
        else {
            // No tab - fall back to heuristic parsing
            // Extract role name from _content field
            const contentCtx = ctx._content;
            if (!contentCtx) {
                return null;
            }
            // Parse the content more carefully - it contains multiple words
            const words = [];
            if (contentCtx.children) {
                for (const child of contentCtx.children) {
                    if (child.getText) {
                        words.push(child.getText());
                    }
                }
            }
            // Get object type - it's labeled as _objecttype
            if (ctx._objecttype) {
                // rolObjectType is defined as identifierOrKeyword+ so we need to extract all words
                const objectTypeWords = [];
                if (ctx._objecttype.children) {
                    for (const child of ctx._objecttype.children) {
                        if (child.getText) {
                            const text = child.getText();
                            objectTypeWords.push(text);
                        }
                    }
                }
                objectType = objectTypeWords.join(' ');
                // Fallback to extractTextWithSpaces if no children found
                if (!objectType) {
                    objectType = this.extractTextWithSpaces(ctx._objecttype);
                }
            }
            // Determine role name based on the words
            if (!objectType && words.length > 0) {
                // No explicit object type - use heuristics
                if (words[words.length - 1] === 'Natuurlijk') {
                    objectType = 'Natuurlijk persoon';
                    roleName = words.slice(0, -1).join(' ');
                }
                else if (words[words.length - 1] === 'Bedrijf' ||
                    words[words.length - 1] === 'Persoon' ||
                    words[words.length - 1] === 'Vlucht' ||
                    words[words.length - 1] === 'Gebouw') {
                    objectType = words[words.length - 1];
                    roleName = words.slice(0, -1).join(' ');
                }
                else if (words.length >= 2 && words[words.length - 2] === 'Natuurlijk') {
                    objectType = 'Natuurlijk persoon';
                    roleName = words.slice(0, -2).join(' ');
                }
                else {
                    // Default: last word is the object type
                    objectType = words[words.length - 1];
                    roleName = words.slice(0, -1).join(' ');
                }
            }
            else {
                // Object type is explicit, so all words are the role name
                roleName = words.join(' ');
            }
            // Check for plural form - it's labeled as _meervoud
            if (ctx._meervoud) {
                meervoud = this.extractTextWithSpaces(ctx._meervoud);
            }
        }
        const node = {
            type: 'Rol',
            naam: roleName,
            meervoud,
            objectType
        };
        this.setLocation(node, ctx);
        return node;
    }
    extractCardinalityLine(ctx) {
        // Extract the full text of the cardinality line
        const tokens = [];
        // Traverse all children to get text
        if (ctx.children) {
            for (const child of ctx.children) {
                if (child.getText) {
                    const text = child.getText();
                    if (text && text.trim()) {
                        tokens.push(text);
                    }
                }
            }
        }
        return tokens.join(' ');
    }
    // Helper to extract parameter name from full reference with article
    extractParameterName(fullReference) {
        const trimmed = fullReference.trim();
        // First try to split by spaces
        const words = trimmed.split(/\s+/);
        // If multiple words and first is an article, remove it (de, het, een)
        if (words.length > 1 && /^(de|het|een)$/i.test(words[0])) {
            // Join remaining words with space, preserving multi-word attributes
            return words.slice(1).join(' ');
        }
        // Check if article is concatenated with the name (no space)
        const concatenatedMatch = trimmed.match(/^(de|het|een)(.+)$/i);
        if (concatenatedMatch && concatenatedMatch[2]) {
            // Extract the part after the article
            return concatenatedMatch[2].trim();
        }
        return trimmed;
    }
    // Conditional rule support
    visitVoorwaardeDeel(ctx) {
        // voorwaardeDeel : INDIEN ( expressie | toplevelSamengesteldeVoorwaarde )
        if (ctx.expressie && ctx.expressie()) {
            const expression = this.visit(ctx.expressie());
            const node = {
                type: 'Voorwaarde',
                expression
            };
            this.setLocation(node, ctx);
            return node;
        }
        if (ctx.toplevelSamengesteldeVoorwaarde && ctx.toplevelSamengesteldeVoorwaarde()) {
            const expression = this.visitToplevelSamengesteldeVoorwaarde(ctx.toplevelSamengesteldeVoorwaarde());
            const node = {
                type: 'Voorwaarde',
                expression
            };
            this.setLocation(node, ctx);
            return node;
        }
        throw new Error('Expected expression or compound condition in voorwaardeDeel');
    }
    // Variable block support (§11 spec)
    visitVariabeleDeel(ctx) {
        // variabeleDeel : DAARBIJ_GELDT variabeleToekenning* DOT
        const assignments = [];
        // Find variabeleToekenning nodes in children
        if (ctx.children) {
            const toekenningen = ctx.children.filter((child) => child.constructor && child.constructor.name &&
                child.constructor.name.includes('VariabeleToekenning'));
            if (toekenningen.length > 0) {
                for (const toekenning of toekenningen) {
                    try {
                        const assignment = this.visitVariabeleToekenning(toekenning);
                        if (assignment) {
                            assignments.push(assignment);
                        }
                    }
                    catch (error) {
                        console.log('[VISITOR] Error parsing variable assignment:', error);
                    }
                }
            }
        }
        return assignments;
    }
    visitVariabeleToekenning(ctx) {
        // variabeleToekenning : article=(DE | HET)? varName=IDENTIFIER IS varExpr=variabeleExpressie
        const nameToken = ctx.varName || ctx.IDENTIFIER();
        if (!nameToken) {
            throw new Error('Expected variable name in variabeleToekenning');
        }
        const name = nameToken.getText();
        const exprCtx = ctx.varExpr || ctx.variabeleExpressie();
        if (!exprCtx) {
            throw new Error('Expected expression in variabeleToekenning');
        }
        // Parse the variabeleExpressie which is a limited expression
        const expression = this.visitVariabeleExpressie(exprCtx);
        const assignment = {
            type: 'VariableAssignment',
            name,
            expression
        };
        this.setLocation(assignment, ctx);
        return assignment;
    }
    visitVariabeleExpressie(ctx) {
        // variabeleExpressie : primaryExpression ( (additiveOperator | multiplicativeOperator) primaryExpression )*
        // NOTE: The grammar creates direct expression contexts (OnderwerpRefExpr, AttrRefExpr, etc.),
        // not PrimaryExpression wrappers, so we work with the actual children.
        if (!ctx.children || ctx.children.length === 0) {
            throw new Error('Expected children in variabeleExpressie');
        }
        // Filter out operator nodes to get expression nodes
        const expressionNodes = ctx.children.filter((child) => {
            const name = child.constructor?.name || '';
            // Operators are AdditiveOperatorContext or MultiplicativeOperatorContext
            return !name.includes('Operator');
        });
        const operatorNodes = ctx.children.filter((child) => {
            const name = child.constructor?.name || '';
            return name.includes('Operator');
        });
        if (expressionNodes.length === 0) {
            throw new Error('Expected at least one expression in variabeleExpressie');
        }
        // Visit the first expression
        let result = this.visit(expressionNodes[0]);
        // If there are multiple expressions, combine them with operators
        for (let i = 1; i < expressionNodes.length; i++) {
            const rightExpr = this.visit(expressionNodes[i]);
            // Get the corresponding operator (i-1 because first expression has no preceding operator)
            const operatorCtx = operatorNodes[i - 1];
            if (!operatorCtx) {
                throw new Error(`Missing operator for expression ${i} in variabeleExpressie`);
            }
            const operatorText = operatorCtx.getText();
            // Map Dutch operators to standard operators
            const operatorMap = {
                'plus': '+',
                'min': '-',
                'maal': '*',
                'gedeeld door': '/'
            };
            const normalizedOp = operatorMap[operatorText] || operatorText;
            result = {
                type: 'BinaryExpression',
                operator: normalizedOp,
                left: result,
                right: rightExpr
            };
            this.setLocation(result, ctx);
        }
        return result;
    }
    visitToplevelSamengesteldeVoorwaarde(ctx) {
        // Extract the quantifier
        const kwantificatie = this.visitVoorwaardeKwantificatie(ctx.voorwaardeKwantificatie());
        // Extract all condition parts
        const voorwaarden = [];
        // In ANTLR4 TypeScript, use the _list method to get all items
        const onderdeelContexts = ctx.samengesteldeVoorwaardeOnderdeel_list();
        if (onderdeelContexts) {
            for (const onderdeelCtx of onderdeelContexts) {
                const condition = this.visitSamengesteldeVoorwaardeOnderdeel(onderdeelCtx);
                if (condition) {
                    voorwaarden.push(condition);
                }
            }
        }
        if (voorwaarden.length === 0) {
            throw new Error('No conditions found in compound condition');
        }
        // Map old quantifier to unified type
        let unifiedQuantifier = expressions_1.QuantifierType.ALLE;
        let count;
        switch (kwantificatie.type) {
            case expressions_1.QuantifierType.ALLE:
                unifiedQuantifier = expressions_1.QuantifierType.ALLE;
                break;
            case expressions_1.QuantifierType.GEEN:
                unifiedQuantifier = expressions_1.QuantifierType.GEEN;
                break;
            case expressions_1.QuantifierType.TEN_MINSTE:
                unifiedQuantifier = expressions_1.QuantifierType.TEN_MINSTE;
                count = kwantificatie.aantal;
                break;
            case expressions_1.QuantifierType.TEN_HOOGSTE:
                unifiedQuantifier = expressions_1.QuantifierType.TEN_HOOGSTE;
                count = kwantificatie.aantal;
                break;
            case expressions_1.QuantifierType.PRECIES:
                unifiedQuantifier = expressions_1.QuantifierType.PRECIES;
                count = kwantificatie.aantal;
                break;
        }
        // Convert expressions to predicates
        const unifiedPredicates = voorwaarden.map(expr => this.convertExpressionToPredicate(expr));
        const node = {
            type: 'SamengesteldeVoorwaarde',
            kwantificatie,
            voorwaarden,
            // Add unified predicate representation
            predicate: {
                type: 'CompoundPredicate',
                quantifier: unifiedQuantifier,
                count,
                predicates: unifiedPredicates
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    // Helper method to convert expressions to unified predicates
    convertExpressionToPredicate(expr) {
        // Handle compound conditions
        if (expr.type === 'SamengesteldeVoorwaarde') {
            const compound = expr;
            if (compound.predicate) {
                return compound.predicate;
            }
            // Fallback: create compound predicate from old structure
            let quantifier = expressions_1.QuantifierType.ALLE;
            let count;
            switch (compound.kwantificatie.type) {
                case expressions_1.QuantifierType.ALLE:
                    quantifier = expressions_1.QuantifierType.ALLE;
                    break;
                case expressions_1.QuantifierType.GEEN:
                    quantifier = expressions_1.QuantifierType.GEEN;
                    break;
                case expressions_1.QuantifierType.TEN_MINSTE:
                    quantifier = expressions_1.QuantifierType.TEN_MINSTE;
                    count = compound.kwantificatie.aantal;
                    break;
                case expressions_1.QuantifierType.TEN_HOOGSTE:
                    quantifier = expressions_1.QuantifierType.TEN_HOOGSTE;
                    count = compound.kwantificatie.aantal;
                    break;
                case expressions_1.QuantifierType.PRECIES:
                    quantifier = expressions_1.QuantifierType.PRECIES;
                    count = compound.kwantificatie.aantal;
                    break;
            }
            return {
                type: 'CompoundPredicate',
                quantifier,
                count,
                predicates: compound.voorwaarden.map(v => this.convertExpressionToPredicate(v))
            };
        }
        // Handle binary expressions (comparisons)
        if (expr.type === 'BinaryExpression') {
            const binary = expr;
            return {
                type: 'SimplePredicate',
                operator: binary.operator,
                left: binary.left,
                right: binary.right
            };
        }
        // Handle unary expressions (special predicates)
        if (expr.type === 'UnaryExpression') {
            const unary = expr;
            // Map operators to predicate operators
            if (unary.operator === 'voldoet aan de elfproef') {
                return {
                    type: 'SimplePredicate',
                    operator: 'elfproef',
                    left: unary.operand
                };
            }
            if (unary.operator === 'voldoet niet aan de elfproef') {
                return {
                    type: 'SimplePredicate',
                    operator: 'elfproef',
                    left: unary.operand,
                    negated: true
                };
            }
            // Add more mappings as needed
        }
        // Handle VergelijkingInPredicaat (kenmerk checks, attribute comparisons)
        if (expr.type === 'VergelijkingInPredicaat') {
            const vergelijking = expr;
            switch (vergelijking.vergelijkingType) {
                case 'kenmerk_check':
                    return {
                        type: 'SimplePredicate',
                        operator: 'kenmerk',
                        left: vergelijking.onderwerp,
                        kenmerk: vergelijking.kenmerkNaam
                    };
                case 'attribuut_vergelijking':
                    return {
                        type: 'SimplePredicate',
                        operator: vergelijking.operator,
                        left: vergelijking.attribuut,
                        right: vergelijking.waarde
                    };
                case 'object_check':
                    // Don't convert to predicate - expression evaluator handles this directly
                    // Return original expression; compound predicate eval will use expression path
                    return vergelijking;
                default:
                    throw new Error(`Unsupported vergelijkingType: ${vergelijking.vergelijkingType}`);
            }
        }
        // For other expressions, don't convert to predicate
        // This preserves the original behavior where non-boolean expressions
        // in compound conditions will cause a type error
        // Return the expression as-is (it's not a valid Predicate type)
        return expr;
    }
    extractNumber(ctx) {
        // Extract number from quantifier context
        if (ctx.NUMBER && ctx.NUMBER()) {
            return parseInt(ctx.NUMBER().getText(), 10);
        }
        else if (ctx.EEN && ctx.EEN()) {
            return 1;
        }
        else if (ctx.EEN_TELWOORD && ctx.EEN_TELWOORD()) {
            return 1;
        }
        else if (ctx.TWEE_TELWOORD && ctx.TWEE_TELWOORD()) {
            return 2;
        }
        else if (ctx.DRIE_TELWOORD && ctx.DRIE_TELWOORD()) {
            return 3;
        }
        else if (ctx.VIER_TELWOORD && ctx.VIER_TELWOORD()) {
            return 4;
        }
        throw new Error('Could not extract number from quantifier');
    }
    visitVoorwaardeKwantificatie(ctx) {
        // Check more specific patterns first (they contain DE at the end)
        if (ctx.TEN_MINSTE && ctx.TEN_MINSTE()) {
            const number = this.extractNumber(ctx);
            return {
                type: expressions_1.QuantifierType.TEN_MINSTE,
                aantal: number
            };
        }
        else if (ctx.TEN_HOOGSTE && ctx.TEN_HOOGSTE()) {
            const number = this.extractNumber(ctx);
            return {
                type: expressions_1.QuantifierType.TEN_HOOGSTE,
                aantal: number
            };
        }
        else if (ctx.PRECIES && ctx.PRECIES()) {
            const number = this.extractNumber(ctx);
            return {
                type: expressions_1.QuantifierType.PRECIES,
                aantal: number
            };
        }
        else if (ctx.ALLE && ctx.ALLE()) {
            return {
                type: expressions_1.QuantifierType.ALLE
            };
        }
        else if (ctx.GEEN_VAN_DE && ctx.GEEN_VAN_DE()) {
            return {
                type: expressions_1.QuantifierType.GEEN
            };
        }
        else if (ctx.DE && ctx.DE()) {
            // Check DE last - it's the singular "aan de volgende voorwaarde"
            return {
                type: expressions_1.QuantifierType.DE
            };
        }
        throw new Error('Unknown quantifier in compound condition');
    }
    visitSamengesteldeVoorwaardeOnderdeel(ctx) {
        // Skip the bullet prefix and visit the actual condition
        if (ctx.elementaireVoorwaarde && ctx.elementaireVoorwaarde()) {
            return this.visitElementaireVoorwaarde(ctx.elementaireVoorwaarde());
        }
        else if (ctx.genesteSamengesteldeVoorwaarde && ctx.genesteSamengesteldeVoorwaarde()) {
            return this.visitGenesteSamengesteldeVoorwaarde(ctx.genesteSamengesteldeVoorwaarde());
        }
        return null;
    }
    visitElementaireVoorwaarde(ctx) {
        // Elementary condition is just an expression
        return this.visit(ctx.expressie());
    }
    visitGenesteSamengesteldeVoorwaardeOnderdeel(ctx) {
        // Skip the nested bullet prefix (..) and visit the actual condition
        if (ctx.elementaireVoorwaarde && ctx.elementaireVoorwaarde()) {
            return this.visitElementaireVoorwaarde(ctx.elementaireVoorwaarde());
        }
        else if (ctx.genesteSamengesteldeVoorwaarde && ctx.genesteSamengesteldeVoorwaarde()) {
            return this.visitGenesteSamengesteldeVoorwaarde(ctx.genesteSamengesteldeVoorwaarde());
        }
        return null;
    }
    visitGenesteSamengesteldeVoorwaarde(ctx) {
        // Extract the quantifier
        const kwantificatie = this.visitVoorwaardeKwantificatie(ctx.voorwaardeKwantificatie());
        // Extract all condition parts
        const voorwaarden = [];
        // Use genesteSamengesteldeVoorwaardeOnderdeel_list for nested compounds (uses .. bullets)
        const onderdeelContexts = ctx.genesteSamengesteldeVoorwaardeOnderdeel_list();
        if (onderdeelContexts) {
            for (const onderdeelCtx of onderdeelContexts) {
                const condition = this.visitGenesteSamengesteldeVoorwaardeOnderdeel(onderdeelCtx);
                if (condition) {
                    voorwaarden.push(condition);
                }
            }
        }
        if (voorwaarden.length === 0) {
            throw new Error('No conditions found in nested compound condition');
        }
        // Map old quantifier to unified type
        let unifiedQuantifier = expressions_1.QuantifierType.ALLE;
        let count;
        switch (kwantificatie.type) {
            case expressions_1.QuantifierType.ALLE:
                unifiedQuantifier = expressions_1.QuantifierType.ALLE;
                break;
            case expressions_1.QuantifierType.GEEN:
                unifiedQuantifier = expressions_1.QuantifierType.GEEN;
                break;
            case expressions_1.QuantifierType.TEN_MINSTE:
                unifiedQuantifier = expressions_1.QuantifierType.TEN_MINSTE;
                count = kwantificatie.aantal;
                break;
            case expressions_1.QuantifierType.TEN_HOOGSTE:
                unifiedQuantifier = expressions_1.QuantifierType.TEN_HOOGSTE;
                count = kwantificatie.aantal;
                break;
            case expressions_1.QuantifierType.PRECIES:
                unifiedQuantifier = expressions_1.QuantifierType.PRECIES;
                count = kwantificatie.aantal;
                break;
        }
        // Convert expressions to predicates
        const unifiedPredicates = voorwaarden.map(expr => this.convertExpressionToPredicate(expr));
        const node = {
            type: 'SamengesteldeVoorwaarde',
            kwantificatie,
            voorwaarden,
            // Add unified predicate representation
            predicate: {
                type: 'CompoundPredicate',
                quantifier: unifiedQuantifier,
                count,
                predicates: unifiedPredicates
            }
        };
        this.setLocation(node, ctx);
        if (node.predicate) {
            this.setLocation(node.predicate, ctx);
        }
        return node;
    }
    visitIsKenmerkExpr(ctx) {
        // Handle "is kenmerk" expressions (e.g., "hij is minderjarig")
        const left = this.visit(ctx._left || ctx.additiveExpression());
        // Extract kenmerk name - always use extractTextWithSpaces to preserve spacing
        let kenmerk = '';
        if (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) {
            kenmerk = this.extractTextWithSpaces(ctx.naamwoordWithNumbers());
        }
        else if (ctx.naamwoord && ctx.naamwoord()) {
            kenmerk = this.extractTextWithSpaces(ctx.naamwoord());
        }
        const node = {
            type: 'VergelijkingInPredicaat',
            vergelijkingType: 'kenmerk_check',
            onderwerp: left,
            kenmerkNaam: kenmerk
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitHeeftKenmerkExpr(ctx) {
        // Handle "heeft kenmerk" expressions (e.g., "hij heeft ervaring")
        const left = this.visit(ctx._left || ctx.additiveExpression());
        // Extract kenmerk name - always use extractTextWithSpaces to preserve spacing
        let kenmerk = '';
        if (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) {
            kenmerk = this.extractTextWithSpaces(ctx.naamwoordWithNumbers());
        }
        else if (ctx.naamwoord && ctx.naamwoord()) {
            kenmerk = this.extractTextWithSpaces(ctx.naamwoord());
        }
        const node = {
            type: 'VergelijkingInPredicaat',
            vergelijkingType: 'kenmerk_check',
            onderwerp: left,
            kenmerkNaam: kenmerk
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitSubordinateClauseExpr(ctx) {
        // Delegate to the specific subordinate clause expression
        if (ctx.subordinateClauseExpression) {
            return this.visit(ctx.subordinateClauseExpression());
        }
        // Fallback
        return this.visit(ctx);
    }
    visitSubordinateIsKenmerkExpr(ctx) {
        // Handle "is kenmerk" expressions in subordinate clauses (e.g., "hij is een passagier jonger dan 18 jaar")
        const subject = this.visitOnderwerpReferentie(ctx._subject || ctx.onderwerpReferentie());
        // Extract kenmerk name - always use extractTextWithSpaces to preserve spacing
        let kenmerk = '';
        if (ctx._kenmerk) {
            kenmerk = this.extractTextWithSpaces(ctx._kenmerk);
        }
        else if (ctx.naamwoordWithNumbers && ctx.naamwoordWithNumbers()) {
            kenmerk = this.extractTextWithSpaces(ctx.naamwoordWithNumbers());
        }
        else if (ctx.naamwoord && ctx.naamwoord()) {
            kenmerk = this.extractTextWithSpaces(ctx.naamwoord());
        }
        const node = {
            type: 'VergelijkingInPredicaat',
            vergelijkingType: 'kenmerk_check',
            onderwerp: subject,
            kenmerkNaam: kenmerk
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitUnaryCheckCondition(ctx) {
        // Visit the expression - it should be a primaryExpression
        const exprCtx = ctx.primaryExpression();
        if (!exprCtx) {
            throw new Error('No expression found in unaryCheckCondition');
        }
        const operand = this.visit(exprCtx);
        // Get the operator text - check which token is present
        let operator;
        let isElfproef = false;
        let negated = false;
        if (ctx.IS_LEEG && ctx.IS_LEEG()) {
            operator = 'is leeg';
        }
        else if (ctx.IS_GEVULD && ctx.IS_GEVULD()) {
            operator = 'is gevuld';
        }
        else if (ctx.VOLDOET_AAN_DE_ELFPROEF && ctx.VOLDOET_AAN_DE_ELFPROEF()) {
            operator = 'voldoet aan de elfproef';
            isElfproef = true;
        }
        else if (ctx.VOLDOET_NIET_AAN_DE_ELFPROEF && ctx.VOLDOET_NIET_AAN_DE_ELFPROEF()) {
            operator = 'voldoet niet aan de elfproef';
            isElfproef = true;
            negated = true;
        }
        else if (ctx.ZIJN_LEEG && ctx.ZIJN_LEEG()) {
            operator = 'zijn leeg';
        }
        else if (ctx.ZIJN_GEVULD && ctx.ZIJN_GEVULD()) {
            operator = 'zijn gevuld';
        }
        else if (ctx.VOLDOEN_AAN_DE_ELFPROEF && ctx.VOLDOEN_AAN_DE_ELFPROEF()) {
            operator = 'voldoen aan de elfproef';
            isElfproef = true;
        }
        else if (ctx.VOLDOEN_NIET_AAN_DE_ELFPROEF && ctx.VOLDOEN_NIET_AAN_DE_ELFPROEF()) {
            operator = 'voldoen niet aan de elfproef';
            isElfproef = true;
            negated = true;
        }
        else {
            throw new Error('Unknown unary check operator');
        }
        // For elfproef checks, create SimplePredicate with unified representation
        if (isElfproef) {
            // Create wrapper that looks like UnaryExpression but contains unified predicate
            const node = {
                type: 'UnaryExpression',
                operator: operator,
                operand: operand,
                // Add unified predicate representation
                predicate: {
                    type: 'SimplePredicate',
                    operator: 'elfproef',
                    left: operand,
                    negated: negated
                }
            };
            this.setLocation(node, ctx);
            if (node.predicate) {
                this.setLocation(node.predicate, ctx);
            }
            return node;
        }
        // For other checks, keep as UnaryExpression for now
        const node = {
            type: 'UnaryExpression',
            operator: operator,
            operand: operand
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitBezieldeRefExpr(ctx) {
        // This handles patterns like "zijn burgerservicenummer", "haar leeftijd", "hun naam"
        const bezieldeRef = ctx.bezieldeReferentie();
        // The grammar is: bezieldeReferentie : (ZIJN | HAAR | HUN) naamwoord
        // Get the naamwoord (noun)
        const naamwoordCtx = bezieldeRef.naamwoord();
        const attribute = naamwoordCtx ? naamwoordCtx.getText() : 'unknown';
        // Return an AttributeReference with 'self' path, matching Python implementation
        const node = {
            type: 'AttributeReference',
            path: ['self', attribute]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitBooleanTrueLiteralExpr(ctx) {
        const node = {
            type: 'BooleanLiteral',
            value: true
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitBooleanFalseLiteralExpr(ctx) {
        const node = {
            type: 'BooleanLiteral',
            value: false
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitKenmerkFeitResultaat(ctx) {
        // Extract subject (onderwerpReferentie)
        const onderwerpCtx = ctx.onderwerpReferentie();
        const subject = this.visit(onderwerpCtx);
        // Extract characteristic name (kenmerkNaam)
        const kenmerkCtx = ctx.kenmerkNaam();
        let characteristic;
        if (kenmerkCtx) {
            characteristic = this.extractTextWithSpaces(kenmerkCtx);
            // Normalize characteristic by stripping leading articles to match domain model
            // Rule says "is een passagier" but domain model defines "is passagier"
            const articles = ['een ', 'de ', 'het '];
            const charLower = characteristic.toLowerCase();
            for (const article of articles) {
                if (charLower.startsWith(article)) {
                    characteristic = characteristic.substring(article.length);
                    break;
                }
            }
        }
        else {
            throw new Error('Could not extract characteristic from kenmerktoekenning');
        }
        const node = {
            type: 'Kenmerktoekenning',
            subject,
            characteristic
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitDagsoortdefinitieResultaat(ctx) {
        // Grammar: EEN DAG IS EEN naamwoord
        // Extract the dagsoort name from naamwoord
        const naamwoordCtx = ctx.naamwoord();
        if (!naamwoordCtx) {
            throw new Error('Expected naamwoord in dagsoortdefinitie');
        }
        const dagsoortName = this.extractTextWithSpaces(naamwoordCtx);
        const node = {
            type: 'DagsoortDefinitie',
            dagsoortName
        };
        this.setLocation(node, ctx);
        return node;
    }
    // ========== Noun Visitor Methods ==========
    // Critical for TOKA support - handles compound nouns with articles and prepositions
    visitNaamwoord(ctx) {
        // Process all parts of the naamwoord according to grammar:
        // naamwoord : naamPhrase ( voorzetsel naamPhrase )*
        const allParts = [];
        // Process the complete structure
        const childCount = ctx.getChildCount ? ctx.getChildCount() : 0;
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i);
            if (child.constructor.name === 'NaamPhraseContext') {
                // Process naam phrase - extract text without articles
                const phraseParts = [];
                const phraseChildCount = child.getChildCount ? child.getChildCount() : 0;
                for (let j = 0; j < phraseChildCount; j++) {
                    const subchild = child.getChild(j);
                    if (subchild.getText) {
                        const text = subchild.getText();
                        // Skip articles (both lowercase and capitalized)
                        if (!['de', 'het', 'een', 'De', 'Het', 'Een'].includes(text)) {
                            phraseParts.push(text);
                        }
                    }
                    else if (subchild.constructor.name === 'IdentifierOrKeywordContext') {
                        const text = this.extractText(subchild);
                        // Skip capitalized articles that were parsed as identifiers
                        if (!['de', 'het', 'een'].includes(text.toLowerCase())) {
                            phraseParts.push(text);
                        }
                    }
                }
                if (phraseParts.length > 0) {
                    allParts.push(phraseParts.join(' '));
                }
            }
            else if (child.constructor.name === 'VoorzetselContext') {
                // Add the preposition
                allParts.push(this.extractText(child));
            }
        }
        // Join all parts with spaces
        return allParts.length > 0 ? allParts.join(' ') : this.extractTextWithSpaces(ctx);
    }
    /**
     * Parse a naamwoord context into a navigation path array.
     * Handles patterns like "passagiers van de reis" and returns ["reis", "passagiers"]
     * for proper navigation through relationships.
     *
     * Key distinction:
     * - "passagiers van de reis" = navigation (only "van") → split to ["reis", "passagiers"]
     * - "belasting op basis van afstand" = compound attr (has "op" + "van") → keep as single element
     *
     * Port of Python builder.py:935-986 (_parse_naamwoord_to_navigation_path)
     */
    _parseNaamwoordToNavigationPath(ctx) {
        if (!ctx) {
            return [];
        }
        // Collect all parts from the naamwoord structure
        // Grammar: naamwoord : naamPhrase ( voorzetsel naamPhrase )*
        const parts = [];
        const prepositions = [];
        const prepositionIndices = []; // Track which parts are preceded by specific prepositions
        const childCount = ctx.getChildCount ? ctx.getChildCount() : 0;
        let lastPreposition = '';
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i);
            if (child.constructor.name === 'NaamPhraseContext') {
                // Extract text from naamPhrase
                const phraseText = [];
                const phraseChildCount = child.getChildCount ? child.getChildCount() : 0;
                let startsWithArticle = false;
                for (let j = 0; j < phraseChildCount; j++) {
                    const subchild = child.getChild(j);
                    if (subchild.getText) {
                        const text = subchild.getText();
                        // Track if phrase starts with article (navigation indicator)
                        if (j === 0 && ['de', 'het', 'een', 'De', 'Het', 'Een', 'alle'].includes(text)) {
                            startsWithArticle = true;
                        }
                        // Skip articles in output
                        if (!['de', 'het', 'een', 'De', 'Het', 'Een'].includes(text)) {
                            phraseText.push(text);
                        }
                    }
                }
                if (phraseText.length > 0) {
                    parts.push(phraseText.join(' '));
                    // Track if this part is preceded by "van" + article (navigation pattern)
                    if (lastPreposition === 'van' && startsWithArticle) {
                        prepositionIndices.push(parts.length - 1);
                    }
                }
                lastPreposition = '';
            }
            else if (child.constructor.name === 'VoorzetselContext') {
                const text = this.extractText(child);
                prepositions.push(text);
                lastPreposition = text;
            }
        }
        // Find navigation split point: rightmost "van" followed by article+noun
        // Pattern: compound attributes with "op" or internal "van" stay together,
        // but "van de/het/alle X" at the end is navigation
        if (parts.length >= 2 && prepositionIndices.length > 0) {
            // Split at the first navigation indicator
            const navIdx = prepositionIndices[0];
            // Everything before navIdx is the compound attribute
            const compoundAttribute = this.visitNaamwoord({
                getChildCount: () => {
                    // Reconstruct partial context - just return full text for parts before nav
                    return 0;
                },
                getText: () => parts.slice(0, navIdx).join(' ')
            });
            // Parts from navIdx onward are navigation elements
            const navParts = parts.slice(navIdx);
            // Reverse navigation parts (Dutch right-to-left)
            // and prepend compound attribute
            return [...navParts.reverse(), parts.slice(0, navIdx).join(' ')];
        }
        // Simple case: only "van" preposition(s) without article pattern
        // This handles "passagiers van de reis" → ["reis", "passagiers"]
        const isSimpleNavigation = parts.length >= 2 &&
            prepositions.length >= 1 &&
            prepositions.every(p => p === 'van');
        if (isSimpleNavigation) {
            // Reverse for Dutch navigation: "passagiers van de reis" -> ["reis", "passagiers"]
            return parts.reverse();
        }
        // Not navigation - return as single compound element
        // Preserves compound attribute names like "belasting op basis van afstand"
        return parts.length > 0 ? [this.visitNaamwoord(ctx)] : [this.extractTextWithSpaces(ctx)];
    }
    visitNaamwoordWithNumbers(ctx) {
        // Process all parts of the naamwoordWithNumbers according to grammar:
        // naamwoordWithNumbers : naamPhraseWithNumbers ( voorzetsel naamPhraseWithNumbers )*
        const allParts = [];
        // Process the complete structure
        const childCount = ctx.getChildCount ? ctx.getChildCount() : 0;
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i);
            if (child.constructor.name === 'NaamPhraseWithNumbersContext') {
                // Process naam phrase - extract text without articles
                const phraseParts = [];
                const phraseChildCount = child.getChildCount ? child.getChildCount() : 0;
                for (let j = 0; j < phraseChildCount; j++) {
                    const subchild = child.getChild(j);
                    if (subchild.getText) {
                        const text = subchild.getText();
                        // Skip articles (both lowercase and capitalized)
                        if (!['de', 'het', 'een', 'De', 'Het', 'Een'].includes(text)) {
                            phraseParts.push(text);
                        }
                    }
                    else if (subchild.constructor.name === 'IdentifierOrKeywordWithNumbersContext' ||
                        subchild.constructor.name === 'IdentifierOrKeywordContext') {
                        const text = this.extractText(subchild);
                        // Skip capitalized articles that were parsed as identifiers
                        if (!['de', 'het', 'een'].includes(text.toLowerCase())) {
                            phraseParts.push(text);
                        }
                    }
                }
                if (phraseParts.length > 0) {
                    allParts.push(phraseParts.join(' '));
                }
            }
            else if (child.constructor.name === 'VoorzetselContext') {
                // Add the preposition
                allParts.push(this.extractText(child));
            }
        }
        // Join all parts with spaces
        return allParts.length > 0 ? allParts.join(' ') : this.extractTextWithSpaces(ctx);
    }
    visitNaamwoordNoIs(ctx) {
        // First, get the complete text without articles to check if it's a known attribute
        const completeTextParts = [];
        const childCount = ctx.getChildCount ? ctx.getChildCount() : 0;
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i);
            if (child.constructor.name === 'NaamPhraseNoIsContext') {
                const phraseChildCount = child.getChildCount ? child.getChildCount() : 0;
                for (let j = 0; j < phraseChildCount; j++) {
                    const subchild = child.getChild(j);
                    if (subchild.getText) {
                        const text = subchild.getText();
                        // Skip articles
                        if (!['de', 'het', 'een', 'De', 'Het', 'Een'].includes(text)) {
                            completeTextParts.push(text);
                        }
                    }
                    else if (subchild.constructor.name === 'IdentifierOrKeywordNoIsContext') {
                        const text = this.extractText(subchild);
                        if (!['de', 'het', 'een'].includes(text.toLowerCase())) {
                            completeTextParts.push(text);
                        }
                    }
                }
            }
            else if (child.constructor.name === 'VoorzetselContext') {
                completeTextParts.push(this.extractText(child));
            }
        }
        const completeText = completeTextParts.join(' ');
        // For now, skip the domain model check and proceed with truncation logic
        // This can be enhanced later when domain model is properly integrated
        // Process with truncation logic for navigation
        const allParts = [];
        const navigationIndicators = ['de', 'het', 'alle', 'een', 'zijn', 'haar', 'hun'];
        let stopAtNavigation = false;
        // Process the complete structure
        for (let i = 0; i < childCount; i++) {
            const child = ctx.getChild(i);
            if (child.constructor.name === 'NaamPhraseNoIsContext') {
                // Check if this phrase starts with a navigation indicator
                let hasNavIndicator = false;
                let firstToken = null;
                const phraseChildCount = child.getChildCount ? child.getChildCount() : 0;
                for (let j = 0; j < phraseChildCount; j++) {
                    const subchild = child.getChild(j);
                    if (subchild.getText) {
                        const tokenText = subchild.getText().toLowerCase();
                        if (firstToken === null) {
                            firstToken = tokenText;
                        }
                        if (navigationIndicators.includes(tokenText)) {
                            hasNavIndicator = true;
                            break;
                        }
                    }
                    else if (subchild.constructor.name === 'IdentifierOrKeywordNoIsContext' && firstToken === null) {
                        firstToken = this.extractText(subchild).toLowerCase();
                    }
                }
                // If we've seen a voorzetsel and this phrase starts with navigation indicator, stop
                if (i > 0 && hasNavIndicator) {
                    stopAtNavigation = true;
                    break;
                }
                // Process naam phrase - extract text without articles
                const phraseParts = [];
                for (let j = 0; j < phraseChildCount; j++) {
                    const subchild = child.getChild(j);
                    if (subchild.getText) {
                        const text = subchild.getText();
                        // Skip articles
                        if (!['de', 'het', 'een', 'De', 'Het', 'Een'].includes(text)) {
                            phraseParts.push(text);
                        }
                    }
                    else if (subchild.constructor.name === 'IdentifierOrKeywordNoIsContext') {
                        const text = this.extractText(subchild);
                        // Skip capitalized articles that were parsed as identifiers
                        if (!['de', 'het', 'een'].includes(text.toLowerCase())) {
                            phraseParts.push(text);
                        }
                    }
                }
                if (phraseParts.length > 0) {
                    allParts.push(phraseParts.join(' '));
                }
            }
            else if (child.constructor.name === 'VoorzetselContext') {
                // Check if the next naamPhrase starts with navigation indicator
                if (i + 1 < childCount) {
                    const nextChild = ctx.getChild(i + 1);
                    if (nextChild.constructor.name === 'NaamPhraseNoIsContext') {
                        // Check if it starts with navigation indicator
                        const nextChildCount = nextChild.getChildCount ? nextChild.getChildCount() : 0;
                        for (let j = 0; j < nextChildCount; j++) {
                            const subchild = nextChild.getChild(j);
                            if (subchild.getText) {
                                const tokenText = subchild.getText().toLowerCase();
                                if (navigationIndicators.includes(tokenText)) {
                                    stopAtNavigation = true;
                                    break;
                                }
                            }
                            break; // Only check first token
                        }
                    }
                }
                if (stopAtNavigation) {
                    break;
                }
                // Add the preposition
                allParts.push(this.extractText(child));
            }
        }
        // Join all parts with spaces
        return allParts.length > 0 ? allParts.join(' ') : this.extractTextWithSpaces(ctx);
    }
    visitSimpleNaamwoord(ctx) {
        // simpleNaamwoord : naamPhrase
        const naamPhraseCtx = ctx.naamPhrase ? ctx.naamPhrase() : null;
        if (naamPhraseCtx) {
            // Process naam phrase - extract text without articles
            const phraseParts = [];
            const childCount = naamPhraseCtx.getChildCount ? naamPhraseCtx.getChildCount() : 0;
            for (let i = 0; i < childCount; i++) {
                const child = naamPhraseCtx.getChild(i);
                if (child.getText) {
                    const tokenText = child.getText();
                    // Skip articles at the beginning of phrases
                    if (!['de', 'het', 'een', 'De', 'Het', 'Een', 'zijn', 'Zijn'].includes(tokenText)) {
                        phraseParts.push(tokenText);
                    }
                }
                else {
                    // Non-terminal nodes (like identifierOrKeyword)
                    phraseParts.push(this.extractText(child));
                }
            }
            return phraseParts.length > 0 ? phraseParts.join(' ') : this.extractTextWithSpaces(ctx);
        }
        return this.extractTextWithSpaces(ctx);
    }
    // ========== Expression Wrapper Methods ==========
    visitNaamwoordExpr(ctx) {
        const naamwoordCtx = ctx.naamwoord ? ctx.naamwoord() : null;
        if (naamwoordCtx) {
            const text = this.visitNaamwoord(naamwoordCtx);
            // PARAMETER NAME LOOKUP:
            // Check if this is a known parameter name before any other pattern detection.
            // This matches the pattern in visitAantalAttribuutExpr (lines 1885-1904).
            // Fixes: multi-word parameters like "lage basistarief eerste schijf" were
            // being parsed as StringLiteral and coerced to 0 in arithmetic.
            if (this.parameterNames && this.parameterNames.size > 0) {
                const normalizations = [
                    text,
                    text.replace(/^het\s+/i, '').trim(),
                    text.replace(/^de\s+/i, '').trim(),
                    text.replace(/^een\s+/i, '').trim(),
                ];
                for (const normalized of normalizations) {
                    if (this.parameterNames.has(normalized)) {
                        const node = {
                            type: 'ParameterReference',
                            parameterName: normalized
                        };
                        this.setLocation(node, ctx);
                        return node;
                    }
                }
            }
            // PERCENTAGE-OF PATTERN DETECTION:
            // "het percentage X van Y" should be parsed as (X / 100) * Y
            // E.g., "het percentage reisduur eerste schijf van zijn belasting op basis van afstand"
            // → (percentage reisduur eerste schijf / 100) * belasting op basis van afstand
            const percentageMatch = text.toLowerCase().match(/^(?:het\s+)?percentage\s+(.+?)\s+van\s+(.+)$/);
            if (percentageMatch) {
                // The full parameter name includes "percentage" prefix
                // E.g., "percentage reisduur eerste schijf" not just "reisduur eerste schijf"
                const parameterName = 'percentage ' + percentageMatch[1].trim();
                const baseText = percentageMatch[2].trim();
                // Create parameter reference for the percentage value
                const percentageRef = {
                    type: 'ParameterReference',
                    parameterName: parameterName
                };
                this.setLocation(percentageRef, ctx);
                // Create the base value as an AttributeReference 
                // Remove possessive pronouns and build the path
                const cleanBaseText = baseText.replace(/^(?:zijn|haar|hun)\s+/i, '').trim();
                const baseRef = {
                    type: 'AttributeReference',
                    path: ['self', cleanBaseText]
                };
                this.setLocation(baseRef, ctx);
                // Create: (percentageRef / 100) * baseExpr
                const divBy100 = {
                    type: 'BinaryExpression',
                    operator: '/',
                    left: percentageRef,
                    right: {
                        type: 'NumberLiteral',
                        value: 100
                    }
                };
                this.setLocation(divBy100, ctx);
                const multiplyExpr = {
                    type: 'BinaryExpression',
                    operator: '*',
                    left: divBy100,
                    right: baseRef
                };
                this.setLocation(multiplyExpr, ctx);
                return multiplyExpr;
            }
            // Check for navigation patterns (similar to Python builder.py:1107-1128)
            if (text.includes(' van ') || text.includes(' op ')) {
                // This looks like a navigation expression, build an AttributeReference
                const parts = text.split(/\s+(van|op)\s+/);
                if (parts.length >= 3) {
                    // Extract the attribute (first part) and navigation path
                    const attrName = this.extractParameterName(parts[0]);
                    const navigationParts = [];
                    // Process remaining parts, skipping 'van'/'op' separators
                    for (let i = 2; i < parts.length; i += 2) {
                        if (parts[i]) {
                            // Remove articles and clean up the navigation element
                            const cleanPart = this.extractParameterName(parts[i]);
                            if (cleanPart) {
                                navigationParts.push(cleanPart);
                            }
                        }
                    }
                    // Build path in Dutch right-to-left order:
                    // "de naam van persoon" → ["persoon", "naam"]
                    if (navigationParts.length > 0) {
                        const path = [...navigationParts.reverse(), attrName];
                        const node = {
                            type: 'AttributeReference',
                            path: path
                        };
                        this.setLocation(node, ctx);
                        return node;
                    }
                }
            }
            // Not a navigation pattern, return as string literal
            const node = {
                type: 'StringLiteral',
                value: text
            };
            this.setLocation(node, ctx);
            return node;
        }
        // Fallback to text extraction
        const fullText = this.extractTextWithSpaces(ctx);
        // Check for navigation patterns in the full text
        if (fullText.includes(' van ') || fullText.includes(' op ')) {
            const parts = fullText.split(/\s+(van|op)\s+/);
            if (parts.length >= 3) {
                const attrName = this.extractParameterName(parts[0]);
                const navigationParts = [];
                for (let i = 2; i < parts.length; i += 2) {
                    if (parts[i]) {
                        const cleanPart = this.extractParameterName(parts[i]);
                        if (cleanPart) {
                            navigationParts.push(cleanPart);
                        }
                    }
                }
                if (navigationParts.length > 0) {
                    const path = [...navigationParts.reverse(), attrName];
                    const node = {
                        type: 'AttributeReference',
                        path: path
                    };
                    this.setLocation(node, ctx);
                    return node;
                }
            }
        }
        const node = {
            type: 'StringLiteral',
            value: fullText
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitParamRefExpr(ctx) {
        const paramCtx = ctx.parameterMetLidwoord ? ctx.parameterMetLidwoord() : null;
        if (!paramCtx) {
            throw new Error('Expected parameterMetLidwoord in ParamRefExpr');
        }
        let paramName;
        if (paramCtx.naamwoord && paramCtx.naamwoord()) {
            // Simple case: just a naamwoord
            paramName = this.visitNaamwoord(paramCtx.naamwoord());
        }
        else {
            // Complex case: parameter with prepositions
            const fullText = this.extractTextWithSpaces(paramCtx);
            // Remove leading articles
            paramName = this._stripArticle(fullText);
        }
        const node = {
            type: 'ParameterReference',
            parameterName: paramName
        };
        this.setLocation(node, ctx);
        return node;
    }
    // Default visitor - fall back to visitChildren
    visitChildren(node) {
        if (!node.children || node.children.length === 0) {
            return null;
        }
        // Special case for ResultaatDeelContext - provide helpful error
        if (node.constructor.name === 'ResultaatDeelContext') {
            // Try to provide a more helpful error message
            const text = this.extractTextWithSpaces(node).trim();
            console.log('ResultaatDeelContext text:', text);
            console.log('ResultaatDeelContext children:', node.children?.length);
            console.log('ResultaatDeelContext child types:', node.children?.map((c) => c.constructor.name));
            if (text.includes(' is ')) {
                throw new Error('Expected gelijkstelling pattern (moet berekend worden als)');
            }
            if (text.includes('wordt verdeeld over')) {
                // This is a verdeling pattern, but we shouldn't be in visitChildren
                throw new Error('Verdeling pattern not being handled correctly in visitResultaatDeel');
            }
            throw new Error('Invalid result pattern in ResultaatDeelContext: ' + text);
        }
        // Debug when we hit visitChildren for ExpressieContext  
        if (node.constructor.name === 'ExpressieContext') {
            // ExpressieContext should be handled by visitExpressie
            // If we're here, the visitor dispatch is not working correctly
            // Try to handle it directly
            const logicalExpr = node.logicalExpression ? node.logicalExpression() : null;
            if (logicalExpr) {
                return this.visit(logicalExpr);
            }
        }
        // If only one child, visit it
        if (node.children.length === 1) {
            return this.visit(node.children[0]);
        }
        // Multiple children - try text extraction as fallback before giving up
        const text = this.extractTextWithSpaces(node);
        console.warn(`Unhandled ${node.constructor.name} with ${node.children.length} children - using text fallback: "${text}"`);
        // Return as string literal for now - better than crashing
        return { type: 'StringLiteral', value: text };
    }
    visitConsistentieregel(ctx) {
        // Get the rule name
        const naam = ctx.naamwoord() ? this.extractText(ctx.naamwoord()) : '<unknown_consistentieregel>';
        // Determine which type of consistency result we have
        let resultaat = null;
        let voorwaarde = undefined;
        if (ctx.uniekzijnResultaat()) {
            // Handle uniqueness check
            resultaat = this.visitUniekzijnResultaat(ctx.uniekzijnResultaat());
        }
        else if (ctx.inconsistentResultaat()) {
            // Handle inconsistency check
            resultaat = this.visitInconsistentResultaat(ctx.inconsistentResultaat());
            // Check if there's a condition
            if (ctx.voorwaardeDeel()) {
                voorwaarde = this.visit(ctx.voorwaardeDeel());
            }
        }
        if (!resultaat) {
            throw new Error(`Could not parse consistency rule result for '${naam}'`);
        }
        // Return as a Rule with Consistentieregel as the result
        const node = {
            type: 'Rule',
            name: naam,
            version: { type: 'RuleVersion', validity: 'altijd' },
            result: resultaat,
            condition: voorwaarde
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitUniekzijnResultaat(ctx) {
        // Get the target expression (what must be unique)
        const alleAttrCtx = ctx.alleAttributenVanObjecttype();
        if (!alleAttrCtx) {
            throw new Error('Failed to parse uniqueness target');
        }
        const target = this.visitAlleAttributenVanObjecttype(alleAttrCtx);
        if (!target) {
            throw new Error('Failed to parse uniqueness target');
        }
        const node = {
            type: 'Consistentieregel',
            criteriumType: 'uniek',
            target: target
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitAlleAttributenVanObjecttype(ctx) {
        // Pattern: DE naamwoord VAN ALLE naamwoord
        // Extract the attribute name (plural form)
        const attrPlural = ctx.naamwoord(0) ? this.extractText(ctx.naamwoord(0)) : null;
        // Extract the object type name
        const objType = ctx.naamwoord(1) ? this.extractText(ctx.naamwoord(1)) : null;
        if (!attrPlural || !objType) {
            throw new Error('Failed to parse alle attributen pattern');
        }
        // Extract canonical names (remove articles)
        const attrName = this.extractParameterName(attrPlural);
        const objTypeName = this.extractParameterName(objType);
        // Create an AttributeReference that represents "attribute of all ObjectType"
        // The path structure represents the navigation: [attribute, "alle", object_type]
        const node = {
            type: 'AttributeReference',
            path: [attrName, 'alle', objTypeName]
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitInconsistentResultaat(ctx) {
        // Handle inconsistency check
        const node = {
            type: 'Consistentieregel',
            criteriumType: 'inconsistent'
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVerdelingResultaat(ctx) {
        // Parse source amount expression
        const sourceAmount = this.visit(ctx._sourceAmount);
        // Parse target collection expression
        const targetCollection = this.visit(ctx._targetCollection);
        // Parse distribution methods
        const distributionMethods = [];
        // Check for simple single-line format
        if (ctx.verdelingMethodeSimple && ctx.verdelingMethodeSimple()) {
            const simpleCtx = ctx.verdelingMethodeSimple();
            if (simpleCtx.verdelingMethode && simpleCtx.verdelingMethode()) {
                const method = this.visit(simpleCtx.verdelingMethode());
                if (method) {
                    distributionMethods.push(method);
                }
            }
        }
        // Check for multi-line format with bullet points
        else if (ctx.verdelingMethodeMultiLine && ctx.verdelingMethodeMultiLine()) {
            const multiCtx = ctx.verdelingMethodeMultiLine();
            if (multiCtx.verdelingMethodeBulletList && multiCtx.verdelingMethodeBulletList()) {
                const bulletListCtx = multiCtx.verdelingMethodeBulletList();
                const bulletContexts = bulletListCtx.verdelingMethodeBullet_list ? bulletListCtx.verdelingMethodeBullet_list() : [];
                for (const bulletCtx of bulletContexts) {
                    if (bulletCtx.verdelingMethode && bulletCtx.verdelingMethode()) {
                        const method = this.visit(bulletCtx.verdelingMethode());
                        if (method) {
                            distributionMethods.push(method);
                        }
                    }
                }
            }
        }
        // Parse remainder target if present
        let remainderTarget = undefined;
        if (ctx.verdelingRest && ctx.verdelingRest()) {
            const restCtx = ctx.verdelingRest();
            if (restCtx._remainderTarget) {
                remainderTarget = this.visit(restCtx._remainderTarget);
            }
        }
        const node = {
            type: 'Verdeling',
            sourceAmount,
            targetCollection,
            distributionMethods,
            remainderTarget
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVerdelingGelijkeDelen(ctx) {
        return { type: 'VerdelingGelijkeDelen' };
    }
    visitVerdelingNaarRato(ctx) {
        const ratioExpression = this.visit(ctx._ratioExpression);
        const node = {
            type: 'VerdelingNaarRato',
            ratioExpression
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVerdelingOpVolgorde(ctx) {
        const orderDirection = ctx._orderDirection?.text || 'toenemende';
        const orderExpression = this.visit(ctx._orderExpression);
        const node = {
            type: 'VerdelingOpVolgorde',
            orderDirection: orderDirection,
            orderExpression
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVerdelingTieBreak(ctx) {
        const tieBreakMethod = this.visit(ctx._tieBreakMethod);
        const node = {
            type: 'VerdelingTieBreak',
            tieBreakMethod
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVerdelingMaximum(ctx) {
        const maxExpression = this.visit(ctx._maxExpression);
        const node = {
            type: 'VerdelingMaximum',
            maxExpression
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitVerdelingAfronding(ctx) {
        const decimals = ctx._decimals ? parseInt(ctx._decimals.text) : 0;
        const roundDirection = ctx._roundDirection?.text || 'naar beneden';
        const node = {
            type: 'VerdelingAfronding',
            decimals,
            roundDirection: roundDirection
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitConsistencyCheckResultaat(ctx) {
        // Handle consistency checks like "moet ongelijk zijn aan"
        // Grammar: attribuutReferentie consistencyOperator expressie
        const targetRef = this.visitAttribuutReferentie(ctx.attribuutReferentie());
        const expr = this.visit(ctx.expressie());
        if (!targetRef || !expr) {
            throw new Error('Failed to parse consistency check target or expression');
        }
        // Map consistency operators to comparison operators
        const operatorCtx = ctx.consistencyOperator ? ctx.consistencyOperator() : null;
        let operator = '!='; // default to not equal
        if (operatorCtx) {
            const operatorText = operatorCtx.getText().toLowerCase();
            if (operatorText.includes('ongelijk')) {
                operator = '!=';
            }
            else if (operatorText.includes('kleiner')) {
                operator = '<';
            }
            else if (operatorText.includes('groter')) {
                operator = '>';
            }
            else if (operatorText.includes('gelijk')) {
                operator = '==';
            }
        }
        // Create a Consistentieregel node
        const node = {
            type: 'Consistentieregel',
            criteriumType: 'inconsistent', // This is a consistency check
            target: targetRef,
            condition: {
                type: 'BinaryExpression',
                operator: operator,
                left: targetRef,
                right: expr
            }
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitRelationshipWithAttributeResultaat(ctx) {
        // Handle "Een X heeft het Y met attribuut gelijk aan expressie" pattern
        // Get the onderwerp reference (the subject)
        const onderwerpCtx = ctx.onderwerpReferentie ? ctx.onderwerpReferentie() : null;
        let onderwerpPath = [];
        if (onderwerpCtx) {
            onderwerpPath = this.visitOnderwerpReferentieToPath(onderwerpCtx);
        }
        // Get the relationship target (het/de naamwoord after HEEFT)
        const naamwoordCtx = ctx.naamwoord ? ctx.naamwoord() : null;
        const relTarget = naamwoordCtx ? this.extractText(naamwoordCtx) : '';
        // Get the attribute to set
        const attrCtx = ctx.attribuutMetLidwoord ? ctx.attribuutMetLidwoord() : null;
        let attrName = '';
        if (attrCtx) {
            attrName = this.extractText(attrCtx);
            // Clean up Dutch articles from the beginning if present
            if (attrName.startsWith('het ')) {
                attrName = attrName.substring(4);
            }
            else if (attrName.startsWith('de ')) {
                attrName = attrName.substring(3);
            }
            else if (attrName.startsWith('een ')) {
                attrName = attrName.substring(4);
            }
        }
        // Get the value expression
        const valueExpr = ctx.expressie ? this.visit(ctx.expressie()) : null;
        if (!valueExpr) {
            throw new Error('Failed to parse value expression in relationship creation');
        }
        // Create an ObjectCreation node with the attribute initialization
        const node = {
            type: 'ObjectCreation',
            objectType: relTarget, // The relationship target becomes the object type
            attributeInits: [{
                    attribute: attrName,
                    value: valueExpr
                }]
        };
        this.setLocation(node, ctx);
        return node;
    }
    // --- Decision Table (Beslistabel) Visitor Methods ---
    visitBeslistabel(ctx) {
        const name = this.extractText(ctx.naamwoord()).trim();
        // Check if there's a regelVersie (validity rule)
        let validity = 'altijd'; // default
        if (ctx.regelVersie && ctx.regelVersie()) {
            const versie = this.visit(ctx.regelVersie());
            validity = versie.validity || 'altijd';
        }
        // Visit the table structure
        const table = this.visit(ctx.beslistabelTable());
        // Import header parser for parsing columns
        const { DecisionTableHeaderParser } = require('../parsers/decision-table-header-parser');
        const headerParser = new DecisionTableHeaderParser();
        // Parse the result and condition columns
        const parsedResult = headerParser.parseResultColumn(table.resultColumn);
        const parsedConditions = table.conditionColumns.map((col) => headerParser.parseConditionColumn(col));
        const decisionTable = {
            type: 'DecisionTable',
            name,
            validity,
            ...table, // Contains resultColumn, conditionColumns, and rows
            parsedResult,
            parsedConditions
        };
        // Store location separately
        this.setLocation(decisionTable, ctx);
        return decisionTable;
    }
    visitBeslistabelTable(ctx) {
        // Visit header to get column information
        const header = this.visit(ctx.beslistabelHeader());
        // Visit all rows
        const rows = ctx.beslistabelRow_list().map((row) => this.visit(row));
        const node = {
            ...header,
            rows
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitBeslistabelHeader(ctx) {
        // Extract result column text including hidden whitespace
        const resultColumn = this.getFullText(ctx._resultColumn);
        // Extract condition column texts - they are stored in _conditionColumns array
        const conditionColumns = ctx._conditionColumns ?
            ctx._conditionColumns.map((col) => this.getFullText(col)) :
            [];
        const node = {
            resultColumn,
            conditionColumns
        };
        this.setLocation(node, ctx);
        return node;
    }
    // Helper to get full text including hidden whitespace
    getFullText(ctx) {
        if (!ctx)
            return '';
        // Access the input stream directly to get original text with spaces
        if (ctx.start && ctx.stop && ctx.parser) {
            const inputStream = ctx.parser.getInputStream();
            if (inputStream) {
                // Get the text directly from input stream
                const startIndex = ctx.start.startIndex;
                const stopIndex = ctx.stop.stopIndex;
                if (startIndex >= 0 && stopIndex >= startIndex) {
                    return inputStream.getText(startIndex, stopIndex);
                }
            }
        }
        // Fallback to extractTextWithSpaces
        return this.extractTextWithSpaces(ctx);
    }
    visitBeslistabelRow(ctx) {
        const rowNumber = parseInt(ctx._rowNumber.text);
        const resultExpression = this.visit(ctx._resultExpression);
        // Visit all condition values - they are stored in _conditionValues array
        const conditionValues = ctx._conditionValues ?
            ctx._conditionValues.map((value) => this.visit(value)) :
            [];
        const node = {
            type: 'DecisionTableRow',
            rowNumber,
            resultExpression,
            conditionValues
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitBeslistabelCellValue(ctx) {
        // Check if this is n.v.t. or an expression
        if (ctx.NVT && ctx.NVT()) {
            return 'n.v.t.';
        }
        // Otherwise it should be an expression
        const exprCtx = ctx.expressie();
        if (exprCtx) {
            // Direct call to visitExpressie to avoid dispatch issues
            return this.visitExpressie(exprCtx);
        }
        // Shouldn't happen with proper grammar
        throw new Error('Invalid decision table cell value');
    }
    // --- Unit System (Eenheidsysteem) Visitor Methods ---
    visitEenheidsysteemDefinition(ctx) {
        // Get the name from the identifier (ctx._name holds the labeled identifier context)
        const name = this.extractText(ctx._name);
        // Visit all unit entries
        const units = ctx.eenheidEntry_list().map((entry) => this.visit(entry));
        const node = {
            type: 'UnitSystemDefinition',
            name,
            units
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitEenheidEntry(ctx) {
        // Extract unit name (e.g., "meter") - labeled as _unitName
        const unitName = this.extractText(ctx._unitName);
        // Extract abbreviation (e.g., "m") - labeled as _abbrev
        const abbrev = this.extractText(ctx._abbrev);
        // Check for symbol (optional, fourth position) - labeled as _symbol
        let symbol;
        if (ctx._symbol) {
            symbol = this.extractText(ctx._symbol);
        }
        // Check for plural form - labeled as _pluralName
        let plural;
        if (ctx._pluralName) {
            plural = this.extractText(ctx._pluralName);
        }
        // Check for conversion specification - labeled as _value and _targetUnit
        let conversion;
        if (ctx._value && ctx._targetUnit) {
            const isFraction = ctx.SLASH && ctx.SLASH();
            // _value is a token, so use getText() or text property
            const valueText = ctx._value.getText ? ctx._value.getText() : ctx._value.text;
            const numberValue = parseFloat(valueText.replace(',', '.'));
            const factor = isFraction ? 1 / numberValue : numberValue;
            // _targetUnit might already be extracted
            const toUnit = ctx._targetUnit.getText ? ctx._targetUnit.getText() : this.extractText(ctx._targetUnit);
            conversion = {
                factor,
                toUnit
            };
        }
        const node = {
            name: unitName,
            plural,
            abbreviation: abbrev,
            symbol,
            conversion
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitTijdsevenredigDeelExpr(ctx) {
        // HET TIJDSEVENREDIG DEEL PER (MAAND|JAAR) VAN expressie [GEDURENDE DE TIJD DAT condition]
        let periodType;
        if (ctx.MAAND && ctx.MAAND()) {
            periodType = 'tijdsevenredig_deel_per_maand';
        }
        else if (ctx.JAAR && ctx.JAAR()) {
            periodType = 'tijdsevenredig_deel_per_jaar';
        }
        else {
            throw new Error('Expected MAAND or JAAR in tijdsevenredig deel expression');
        }
        // Get the target expression after VAN
        const targetExpr = this.visit(ctx.expressie(0));
        // Check for optional temporal condition
        let conditionExpr;
        if (ctx.conditieBijExpressie && ctx.conditieBijExpressie()) {
            conditionExpr = this.visitConditieBijExpressie(ctx.conditieBijExpressie());
        }
        // Return as TimelineExpression
        const node = {
            type: 'TimelineExpression',
            operation: periodType,
            target: targetExpr,
            condition: conditionExpr
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitConditieBijExpressie(ctx) {
        // GEDURENDE DE TIJD DAT expressie
        // The actual condition is the expression after DAT
        const exprCtx = ctx.expressie();
        if (!exprCtx) {
            throw new Error('Expected expression in conditieBijExpressie');
        }
        return this.visit(exprCtx);
    }
    visitTotaalVanExpr(ctx) {
        // HET? TOTAAL VAN expressie [GEDURENDE DE TIJD DAT condition]
        const targetExpr = this.visit(ctx.expressie(0));
        // Check for optional temporal condition
        let conditionExpr;
        if (ctx.conditieBijExpressie && ctx.conditieBijExpressie()) {
            conditionExpr = this.visitConditieBijExpressie(ctx.conditieBijExpressie());
        }
        // Return as TimelineExpression for timeline-aware aggregation
        const node = {
            type: 'TimelineExpression',
            operation: 'totaal',
            target: targetExpr,
            condition: conditionExpr
        };
        this.setLocation(node, ctx);
        return node;
    }
    visitCapitalizedTotaalVanExpr(ctx) {
        // identifier+ HET_TOTAAL_VAN expressie [GEDURENDE DE TIJD DAT condition]
        // This handles cases where "Het totaal van" starts with capital H
        // The identifiers before HET_TOTAAL_VAN are just capitalized text that we ignore
        const targetExpr = this.visit(ctx.expressie(0));
        // Check for optional temporal condition
        let conditionExpr;
        if (ctx.conditieBijExpressie && ctx.conditieBijExpressie()) {
            conditionExpr = this.visitConditieBijExpressie(ctx.conditieBijExpressie());
        }
        // Return as TimelineExpression for timeline-aware aggregation
        const node = {
            type: 'TimelineExpression',
            operation: 'totaal',
            target: targetExpr,
            condition: conditionExpr
        };
        this.setLocation(node, ctx);
        return node;
    }
    generateDefaultPlural(singular) {
        // Handle multi-word names
        const words = singular.split(' ');
        const lastWord = words[words.length - 1];
        let pluralLastWord;
        // Dutch pluralization rules
        // 1. Words ending in digits get 's' (e.g., Persoon1 -> Persoon1s)
        if (lastWord.match(/\d$/)) {
            pluralLastWord = lastWord + 's';
        }
        // 2. Words ending in 's' often change s→z (e.g., reis -> reizen)
        else if (lastWord.endsWith('eis') || lastWord.endsWith('uis') || lastWord.endsWith('oos')) {
            // Common Dutch words where s→z before adding 'en'
            pluralLastWord = lastWord.slice(0, -1) + 'zen';
        }
        // 3. Other 's' endings add 'en'
        else if (lastWord.endsWith('s') || lastWord.endsWith('x') || lastWord.endsWith('z')) {
            pluralLastWord = lastWord + 'en';
        }
        // 4. -heid → -heden
        else if (lastWord.endsWith('heid')) {
            pluralLastWord = lastWord.replace(/heid$/, 'heden');
        }
        // 5. -oon → -onen  
        else if (lastWord.endsWith('oon')) {
            pluralLastWord = lastWord.replace(/oon$/, 'onen');
        }
        // 6. Words ending in vowel get 's'
        else if (lastWord.match(/[aeiou]$/)) {
            pluralLastWord = lastWord + 's';
        }
        // 7. Default: add 'en'
        else {
            pluralLastWord = lastWord + 'en';
        }
        // Reconstruct multi-word plural
        words[words.length - 1] = pluralLastWord;
        return [words.join(' ')];
    }
}
exports.RegelSpraakVisitorImpl = RegelSpraakVisitorImpl;
//# sourceMappingURL=regelspraak-visitor-impl.js.map