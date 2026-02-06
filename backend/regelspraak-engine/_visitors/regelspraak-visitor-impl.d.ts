import { ParseTreeVisitor } from 'antlr4';
import RegelSpraakVisitor from '../_generated/antlr/RegelSpraakVisitor';
import { RegelSpraakDocumentContext, ExpressieContext, LogicalExprContext, BinaryComparisonExprContext, AdditiveExpressionContext, MultiplicativeExpressionContext, PowerExpressionContext, PrimaryExpressionContext, NumberLiteralExprContext, PercentageLiteralExprContext, IdentifierExprContext, ParenExprContext, UnaryNietExprContext, UnaryMinusExprContext } from '../_generated/antlr/RegelSpraakParser';
import { Expression, BinaryExpression, SubselectieExpression, Predicaat, KenmerkPredicaat, AttributeComparisonPredicaat, SamengesteldeVoorwaarde, Quantifier, AttributeReference, SamengesteldPredicaatNode, GenesteVoorwaardeInPredicaat, VergelijkingInPredicaat } from '../ast/expressions';
import { Voorwaarde, Consistentieregel, FeitCreatie, VariableAssignment } from '../ast/rules';
import { ObjectTypeDefinition, KenmerkSpecification, AttributeSpecification, DataType, DomainReference, DomainDefinition } from '../ast/object-types';
import { ParameterDefinition } from '../ast/parameters';
import { UnitSystemDefinition, UnitDefinition } from '../ast/unit-systems';
import { Dimension, DimensionedAttributeReference } from '../ast/dimensions';
import { FeitType, Rol } from '../ast/feittype';
import { DomainModel } from '../ast/domain-model';
/**
 * Implementation of ANTLR4 visitor that builds our AST
 */
export declare class RegelSpraakVisitorImpl extends ParseTreeVisitor<any> implements RegelSpraakVisitor<any> {
    private objectTypeAttributes;
    private feitTypes;
    private parameterNames;
    private registeredDimensionLabels;
    /**
     * Set location directly on the node.
     * No more WeakMap. Location is part of the node.
     */
    private setLocation;
    visitRegelSpraakDocument(ctx: RegelSpraakDocumentContext): DomainModel;
    visitExpressie(ctx: ExpressieContext): Expression;
    visitExprAfronding(ctx: any): Expression;
    visitExprBegrenzing(ctx: any): Expression;
    visitExprBegrenzingAfronding(ctx: any): Expression;
    visitLogicalExpr(ctx: LogicalExprContext): Expression;
    visitComparisonExpression(ctx: any): Expression;
    visitBinaryComparisonExpr(ctx: BinaryComparisonExprContext): Expression;
    visitUnaryConditionExpr(ctx: any): Expression;
    visitRegelStatusConditionExpr(ctx: any): Expression;
    visitRegelStatusCondition(ctx: any): Expression;
    visitUnaryCondition(ctx: any): Expression;
    visitUnaryDagsoortCondition(ctx: any): Expression;
    visitUnaryUniekCondition(ctx: any): Expression;
    visitUnaryNumeriekExactCondition(ctx: any): Expression;
    visitAdditiveExpression(ctx: AdditiveExpressionContext): Expression;
    visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext): Expression;
    visitPowerExpression(ctx: PowerExpressionContext): Expression;
    visitPrimaryExpression(ctx: PrimaryExpressionContext): Expression;
    visitNumberLiteralExpr(ctx: NumberLiteralExprContext): Expression;
    visitPercentageLiteralExpr(ctx: PercentageLiteralExprContext): Expression;
    visitDatumLiteralExpr(ctx: any): Expression;
    visitIdentifierExpr(ctx: IdentifierExprContext): Expression;
    visitParenExpr(ctx: ParenExprContext): Expression;
    visitDatumExpressie(ctx: any): Expression;
    visitDateCalcExpr(ctx: any): Expression;
    visitEersteDatumFuncExpr(ctx: any): Expression;
    visitLaatsteDatumFuncExpr(ctx: any): Expression;
    visitPasenFuncExpr(ctx: any): Expression;
    visitSimpleConcatenatieExpr(ctx: any): Expression;
    visitConcatenatieExpr(ctx: any): Expression;
    visitOnderwerpRefExpr(ctx: any): Expression;
    visitStringLiteralExpr(ctx: any): Expression;
    /**
     * Parse an embedded expression from within a string interpolation.
     * Creates a mini-parser to parse the expression text.
     */
    private parseEmbeddedExpression;
    visitEnumLiteralExpr(ctx: any): Expression;
    visitUnaryNietExpr(ctx: UnaryNietExprContext): Expression;
    visitUnaryMinusExpr(ctx: UnaryMinusExprContext): Expression;
    visitWortelFuncExpr(ctx: any): Expression;
    visitAbsValFuncExpr(ctx: any): Expression;
    visitPercentageFuncExpr(ctx: any): Expression;
    visitPercentageOfExpr(ctx: any): Expression;
    visitMinValFuncExpr(ctx: any): Expression;
    visitMaxValFuncExpr(ctx: any): Expression;
    visitTijdsduurFuncExpr(ctx: any): Expression;
    visitAbsTijdsduurFuncExpr(ctx: any): Expression;
    visitSomFuncExpr(ctx: any): Expression;
    visitSomAlleAttribuutExpr(ctx: any): Expression;
    visitMinAlleAttribuutExpr(ctx: any): Expression;
    visitMaxAlleAttribuutExpr(ctx: any): Expression;
    visitSomAlleExpr(ctx: any): Expression;
    private _stripArticle;
    visitDimensieAggExpr(ctx: any): Expression;
    visitDimensieRangeAggExpr(ctx: any): Expression;
    visitAantalFuncExpr(ctx: any): Expression;
    visitAantalAttribuutExpr(ctx: any): Expression;
    visitMaandUitFuncExpr(ctx: any): Expression;
    visitDagUitFuncExpr(ctx: any): Expression;
    visitDatumMetFuncExpr(ctx: any): Expression;
    visitJaarUitFuncExpr(ctx: any): Expression;
    visitHetAantalDagenInExpr(ctx: any): Expression;
    visitSubordinateIsWithExpr(ctx: any): Expression;
    visitSubordinateHasExpr(ctx: any): Expression;
    visitRegel(ctx: any): any;
    visitRegelGroep(ctx: any): any;
    visitAttribuutReferentie(ctx: any): AttributeReference | SubselectieExpression | DimensionedAttributeReference | BinaryExpression;
    visitAttrRefExpr(ctx: any): Expression;
    visitOnderwerpReferentie(ctx: any): Expression;
    visitOnderwerpBasis(ctx: any): Expression;
    private onderwerpBasisToPath;
    private visitBasisOnderwerpToString;
    visitOnderwerpReferentieToPath(ctx: any): string[];
    visitPredicaat(ctx: any): Predicaat;
    visitElementairPredicaat(ctx: any): Predicaat;
    visitAttribuutVergelijkingsPredicaat(ctx: any): AttributeComparisonPredicaat;
    visitObjectPredicaat(ctx: any): KenmerkPredicaat;
    visitSamengesteldPredicaat(ctx: any): SamengesteldPredicaatNode;
    visitSamengesteldeVoorwaardeOnderdeelInPredicaat(ctx: any): GenesteVoorwaardeInPredicaat | null;
    visitElementaireVoorwaardeInPredicaat(ctx: any): VergelijkingInPredicaat | null;
    visitVergelijkingInPredicaat(ctx: any): VergelijkingInPredicaat;
    visitGenesteSamengesteldeVoorwaardeInPredicaat(ctx: any): SamengesteldPredicaatNode;
    private convertGenesteVoorwaardeToPredicate;
    private convertVergelijkingToPredicate;
    private mapOperator;
    visitRegelVersie(ctx: any): any;
    visitVersieGeldigheid(ctx: any): string;
    visitResultaatDeel(ctx: any): any;
    visitGelijkstellingResultaat(ctx: any): any;
    visitFeitCreatieResultaat(ctx: any): FeitCreatie;
    visitObjectCreatieResultaat(ctx: any): any;
    extractObjectTypeName(text: string): string;
    extractAttributeName(text: string): string;
    private extractTargetName;
    private extractText;
    private extractTextWithSpaces;
    visitObjectTypeDefinition(ctx: any): ObjectTypeDefinition;
    visitObjectTypeMember(ctx: any): KenmerkSpecification | AttributeSpecification;
    visitKenmerkSpecificatie(ctx: any): KenmerkSpecification;
    visitAttribuutSpecificatie(ctx: any): AttributeSpecification;
    visitDatatype(ctx: any): DataType;
    visitNumeriekDatatype(ctx: any): DataType;
    visitDatumTijdDatatype(ctx: any): DataType;
    visitPercentageDatatype(ctx: any): DataType;
    visitDomeinRef(ctx: any): DomainReference;
    visitParameterDefinition(ctx: any): ParameterDefinition;
    visitDagsoortDefinition(ctx: any): any;
    visitDimensieDefinition(ctx: any): Dimension;
    visitFeitTypeDefinition(ctx: any): FeitType;
    visitDomeinDefinition(ctx: any): DomainDefinition;
    visitRolDefinition(ctx: any): Rol | null;
    private extractCardinalityLine;
    private extractParameterName;
    visitVoorwaardeDeel(ctx: any): Voorwaarde;
    visitVariabeleDeel(ctx: any): VariableAssignment[];
    visitVariabeleToekenning(ctx: any): VariableAssignment;
    visitVariabeleExpressie(ctx: any): Expression;
    visitToplevelSamengesteldeVoorwaarde(ctx: any): SamengesteldeVoorwaarde;
    private convertExpressionToPredicate;
    extractNumber(ctx: any): number;
    visitVoorwaardeKwantificatie(ctx: any): Quantifier;
    visitSamengesteldeVoorwaardeOnderdeel(ctx: any): Expression | null;
    visitElementaireVoorwaarde(ctx: any): Expression;
    visitGenesteSamengesteldeVoorwaardeOnderdeel(ctx: any): Expression | null;
    visitGenesteSamengesteldeVoorwaarde(ctx: any): SamengesteldeVoorwaarde;
    visitIsKenmerkExpr(ctx: any): VergelijkingInPredicaat;
    visitHeeftKenmerkExpr(ctx: any): VergelijkingInPredicaat;
    visitSubordinateClauseExpr(ctx: any): Expression;
    visitSubordinateIsKenmerkExpr(ctx: any): VergelijkingInPredicaat;
    visitUnaryCheckCondition(ctx: any): any;
    visitBezieldeRefExpr(ctx: any): any;
    visitBooleanTrueLiteralExpr(ctx: any): Expression;
    visitBooleanFalseLiteralExpr(ctx: any): Expression;
    visitKenmerkFeitResultaat(ctx: any): any;
    visitDagsoortdefinitieResultaat(ctx: any): any;
    visitNaamwoord(ctx: any): string;
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
    private _parseNaamwoordToNavigationPath;
    visitNaamwoordWithNumbers(ctx: any): string;
    visitNaamwoordNoIs(ctx: any): string;
    visitSimpleNaamwoord(ctx: any): string;
    visitNaamwoordExpr(ctx: any): Expression;
    visitParamRefExpr(ctx: any): Expression;
    visitChildren(node: any): any;
    visitConsistentieregel(ctx: any): any;
    visitUniekzijnResultaat(ctx: any): Consistentieregel;
    visitAlleAttributenVanObjecttype(ctx: any): AttributeReference;
    visitInconsistentResultaat(ctx: any): Consistentieregel;
    visitVerdelingResultaat(ctx: any): any;
    visitVerdelingGelijkeDelen(ctx: any): any;
    visitVerdelingNaarRato(ctx: any): any;
    visitVerdelingOpVolgorde(ctx: any): any;
    visitVerdelingTieBreak(ctx: any): any;
    visitVerdelingMaximum(ctx: any): any;
    visitVerdelingAfronding(ctx: any): any;
    visitConsistencyCheckResultaat(ctx: any): any;
    visitRelationshipWithAttributeResultaat(ctx: any): any;
    visitBeslistabel(ctx: any): any;
    visitBeslistabelTable(ctx: any): any;
    visitBeslistabelHeader(ctx: any): any;
    private getFullText;
    visitBeslistabelRow(ctx: any): any;
    visitBeslistabelCellValue(ctx: any): any;
    visitEenheidsysteemDefinition(ctx: any): UnitSystemDefinition;
    visitEenheidEntry(ctx: any): UnitDefinition;
    visitTijdsevenredigDeelExpr(ctx: any): Expression;
    visitConditieBijExpressie(ctx: any): Expression;
    visitTotaalVanExpr(ctx: any): Expression;
    visitCapitalizedTotaalVanExpr(ctx: any): Expression;
    private generateDefaultPlural;
}
//# sourceMappingURL=regelspraak-visitor-impl.d.ts.map