"use strict";
// Generated from RegelSpraak.g4 by ANTLR 4.13.1
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RegelSpraakParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
class RegelSpraakVisitor extends antlr4_1.ParseTreeVisitor {
    /**
     * Visit a parse tree produced by `RegelSpraakParser.regelSpraakDocument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelSpraakDocument;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.definitie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinitie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabelTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabelTable;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabelHeader`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabelHeader;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabelSeparator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabelSeparator;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabelRow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabelRow;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabelCellValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabelCellValue;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.beslistabelColumnText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeslistabelColumnText;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.identifierOrKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrKeyword;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.identifierOrKeywordNoIs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrKeywordNoIs;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.naamPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamPhrase;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.naamPhraseWithNumbers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamPhraseWithNumbers;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.identifierOrKeywordWithNumbers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrKeywordWithNumbers;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.naamPhraseNoIs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamPhraseNoIs;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.naamwoord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamwoord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.naamwoordWithNumbers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamwoordWithNumbers;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.naamwoordNoIs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamwoordNoIs;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.voorzetsel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVoorzetsel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datumLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumLiteral;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.unit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnit;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.timeUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeUnit;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.objectTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.objectTypeMember`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeMember;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.kenmerkSpecificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKenmerkSpecificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.attribuutSpecificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribuutSpecificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.lijstDatatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLijstDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.numeriekDatatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeriekDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.tekstDatatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTekstDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.percentageDatatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPercentageDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.booleanDatatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datumTijdDatatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumTijdDatatype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.getalSpecificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetalSpecificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.domeinDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomeinDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.domeinType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomeinType;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.enumeratieSpecificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumeratieSpecificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.domeinRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDomeinRef;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.objectTypeRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectTypeRef;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.eenheidsysteemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEenheidsysteemDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.eenheidEntry`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEenheidEntry;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.unitIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitIdentifier;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.eenheidExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEenheidExpressie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.eenheidMacht`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEenheidMacht;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.dimensieDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimensieDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.voorzetselSpecificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVoorzetselSpecificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.labelWaardeSpecificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelWaardeSpecificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.tijdlijn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTijdlijn;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.dimensieRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimensieRef;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.parameterDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.parameterNamePhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterNamePhrase;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.parameterNamePart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterNamePart;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.parameterMetLidwoord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterMetLidwoord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.feitTypeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitTypeDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.rolDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.rolObjectType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolObjectType;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.rolContentWords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolContentWords;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.cardinalityLine`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCardinalityLine;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.cardinalityWord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCardinalityWord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.regel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.regelGroep`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelGroep;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.regelName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelName;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.regelNameExtension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelNameExtension;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.regelVersie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelVersie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.versieGeldigheid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVersieGeldigheid;
    /**
     * Visit a parse tree produced by the `DagsoortdefinitieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDagsoortdefinitieResultaat;
    /**
     * Visit a parse tree produced by the `GelijkstellingResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGelijkstellingResultaat;
    /**
     * Visit a parse tree produced by the `ConsistencyCheckResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConsistencyCheckResultaat;
    /**
     * Visit a parse tree produced by the `FeitCreatieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitCreatieResultaat;
    /**
     * Visit a parse tree produced by the `KenmerkFeitResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKenmerkFeitResultaat;
    /**
     * Visit a parse tree produced by the `RelationshipWithAttributeResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelationshipWithAttributeResultaat;
    /**
     * Visit a parse tree produced by the `ObjectCreatieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreatieResultaat;
    /**
     * Visit a parse tree produced by the `Verdeling`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdeling;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.consistencyOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConsistencyOperator;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.feitCreatiePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitCreatiePattern;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.feitCreatieRolPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitCreatieRolPhrase;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.feitCreatieSubjectPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitCreatieSubjectPhrase;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.feitCreatieSubjectWord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitCreatieSubjectWord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.feitCreatieWord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFeitCreatieWord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.voorzetselNietVan`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVoorzetselNietVan;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.objectCreatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectCreatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.objectAttributeInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectAttributeInit;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.attributeInitVervolg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributeInitVervolg;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.simpleNaamwoord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleNaamwoord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.consistentieregel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConsistentieregel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.uniekzijnResultaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUniekzijnResultaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.alleAttributenVanObjecttype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlleAttributenVanObjecttype;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.inconsistentResultaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInconsistentResultaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.voorwaardeDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVoorwaardeDeel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.toplevelSamengesteldeVoorwaarde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitToplevelSamengesteldeVoorwaarde;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.voorwaardeKwantificatie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVoorwaardeKwantificatie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.samengesteldeVoorwaardeOnderdeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSamengesteldeVoorwaardeOnderdeel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.outerBulletPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuterBulletPrefix;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.nestedBulletPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNestedBulletPrefix;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.bulletPrefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBulletPrefix;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.elementaireVoorwaarde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementaireVoorwaarde;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaarde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenesteSamengesteldeVoorwaarde;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaardeOnderdeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenesteSamengesteldeVoorwaardeOnderdeel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.onderwerpReferentie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnderwerpReferentie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.onderwerpReferentieWithNumbers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnderwerpReferentieWithNumbers;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.onderwerpBasis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnderwerpBasis;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.onderwerpBasisWithNumbers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnderwerpBasisWithNumbers;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.basisOnderwerp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBasisOnderwerp;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.basisOnderwerpWithNumbers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBasisOnderwerpWithNumbers;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.attribuutReferentie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribuutReferentie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.attribuutMetLidwoord`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribuutMetLidwoord;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.kenmerkNaam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKenmerkNaam;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.kenmerkPhrase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKenmerkPhrase;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.bezieldeReferentie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBezieldeReferentie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.aggregationSubject`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationSubject;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.predicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.elementairPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementairPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.objectPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.eenzijdigeObjectVergelijking`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEenzijdigeObjectVergelijking;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.rolNaam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolNaam;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.attribuutVergelijkingsPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttribuutVergelijkingsPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.getalPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetalPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.tekstPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTekstPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datumPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.samengesteldPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSamengesteldPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.samengesteldeVoorwaardeOnderdeelInPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSamengesteldeVoorwaardeOnderdeelInPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.elementaireVoorwaardeInPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementaireVoorwaardeInPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.vergelijkingInPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVergelijkingInPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaardeInPredicaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenesteSamengesteldeVoorwaardeInPredicaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.getalVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetalVergelijkingsOperatorMeervoud;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.tekstVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTekstVergelijkingsOperatorMeervoud;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datumVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumVergelijkingsOperatorMeervoud;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.getalExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetalExpressie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.tekstExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTekstExpressie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datumExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumExpressie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.variabeleDeel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariabeleDeel;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.variabeleToekenning`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariabeleToekenning;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.variabeleExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariabeleExpressie;
    /**
     * Visit a parse tree produced by the `ExprBegrenzingAfronding`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprBegrenzingAfronding;
    /**
     * Visit a parse tree produced by the `ExprBegrenzing`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprBegrenzing;
    /**
     * Visit a parse tree produced by the `ExprAfronding`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprAfronding;
    /**
     * Visit a parse tree produced by the `SimpleExpr`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleExpr;
    /**
     * Visit a parse tree produced by the `SimpleExprBegrenzingAfronding`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleExprBegrenzingAfronding;
    /**
     * Visit a parse tree produced by the `SimpleExprBegrenzing`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleExprBegrenzing;
    /**
     * Visit a parse tree produced by the `SimpleExprAfronding`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleExprAfronding;
    /**
     * Visit a parse tree produced by the `SimpleExprBase`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleExprBase;
    /**
     * Visit a parse tree produced by the `LogicalExpr`
     * labeled alternative in `RegelSpraakParser.logicalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalExpr;
    /**
     * Visit a parse tree produced by the `SubordinateClauseExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubordinateClauseExpr;
    /**
     * Visit a parse tree produced by the `PeriodeCheckExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPeriodeCheckExpr;
    /**
     * Visit a parse tree produced by the `IsKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIsKenmerkExpr;
    /**
     * Visit a parse tree produced by the `HeeftKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHeeftKenmerkExpr;
    /**
     * Visit a parse tree produced by the `GelijkIsAanOfExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGelijkIsAanOfExpr;
    /**
     * Visit a parse tree produced by the `BinaryComparisonExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryComparisonExpr;
    /**
     * Visit a parse tree produced by the `UnaryConditionExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryConditionExpr;
    /**
     * Visit a parse tree produced by the `RegelStatusConditionExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelStatusConditionExpr;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.literalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralValue;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.gelijkIsAanOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGelijkIsAanOperator;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.additiveExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditiveExpression;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.additiveOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdditiveOperator;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.multiplicativeExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicativeExpression;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.multiplicativeOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiplicativeOperator;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.powerExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowerExpression;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.powerOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowerOperator;
    /**
     * Visit a parse tree produced by the `WortelFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWortelFuncExpr;
    /**
     * Visit a parse tree produced by the `BooleanTrueLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanTrueLiteralExpr;
    /**
     * Visit a parse tree produced by the `AbsValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbsValFuncExpr;
    /**
     * Visit a parse tree produced by the `MaxValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaxValFuncExpr;
    /**
     * Visit a parse tree produced by the `RekendatumKeywordExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRekendatumKeywordExpr;
    /**
     * Visit a parse tree produced by the `EnumLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumLiteralExpr;
    /**
     * Visit a parse tree produced by the `NumberLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumberLiteralExpr;
    /**
     * Visit a parse tree produced by the `DatumLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumLiteralExpr;
    /**
     * Visit a parse tree produced by the `AantalFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAantalFuncExpr;
    /**
     * Visit a parse tree produced by the `UnaryNietExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryNietExpr;
    /**
     * Visit a parse tree produced by the `ConcatenatieExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConcatenatieExpr;
    /**
     * Visit a parse tree produced by the `SomAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSomAlleAttribuutExpr;
    /**
     * Visit a parse tree produced by the `AttrRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrRefExpr;
    /**
     * Visit a parse tree produced by the `DagUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDagUitFuncExpr;
    /**
     * Visit a parse tree produced by the `BegrenzingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegrenzingExpr;
    /**
     * Visit a parse tree produced by the `NaamwoordExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNaamwoordExpr;
    /**
     * Visit a parse tree produced by the `BooleanFalseLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanFalseLiteralExpr;
    /**
     * Visit a parse tree produced by the `JaarUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJaarUitFuncExpr;
    /**
     * Visit a parse tree produced by the `TotaalVanExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTotaalVanExpr;
    /**
     * Visit a parse tree produced by the `TijdsevenredigDeelExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTijdsevenredigDeelExpr;
    /**
     * Visit a parse tree produced by the `CapitalizedTijdsevenredigDeelExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCapitalizedTijdsevenredigDeelExpr;
    /**
     * Visit a parse tree produced by the `AantalAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAantalAttribuutExpr;
    /**
     * Visit a parse tree produced by the `ParenExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenExpr;
    /**
     * Visit a parse tree produced by the `DimensieRangeAggExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimensieRangeAggExpr;
    /**
     * Visit a parse tree produced by the `DatumMetFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumMetFuncExpr;
    /**
     * Visit a parse tree produced by the `PercentageLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPercentageLiteralExpr;
    /**
     * Visit a parse tree produced by the `StringLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteralExpr;
    /**
     * Visit a parse tree produced by the `PercentageFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPercentageFuncExpr;
    /**
     * Visit a parse tree produced by the `EersteDatumFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEersteDatumFuncExpr;
    /**
     * Visit a parse tree produced by the `PasenFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPasenFuncExpr;
    /**
     * Visit a parse tree produced by the `AbsTijdsduurFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbsTijdsduurFuncExpr;
    /**
     * Visit a parse tree produced by the `MaandUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaandUitFuncExpr;
    /**
     * Visit a parse tree produced by the `CapitalizedTotaalVanExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCapitalizedTotaalVanExpr;
    /**
     * Visit a parse tree produced by the `IdentifierExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierExpr;
    /**
     * Visit a parse tree produced by the `DimensieAggExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimensieAggExpr;
    /**
     * Visit a parse tree produced by the `TijdsduurFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTijdsduurFuncExpr;
    /**
     * Visit a parse tree produced by the `OnderwerpRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOnderwerpRefExpr;
    /**
     * Visit a parse tree produced by the `SomFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSomFuncExpr;
    /**
     * Visit a parse tree produced by the `SomAlleExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSomAlleExpr;
    /**
     * Visit a parse tree produced by the `SimpleConcatenatieExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleConcatenatieExpr;
    /**
     * Visit a parse tree produced by the `BegrenzingAfrondingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegrenzingAfrondingExpr;
    /**
     * Visit a parse tree produced by the `PercentageOfExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPercentageOfExpr;
    /**
     * Visit a parse tree produced by the `MinValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMinValFuncExpr;
    /**
     * Visit a parse tree produced by the `MaxAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaxAlleAttribuutExpr;
    /**
     * Visit a parse tree produced by the `DateCalcExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateCalcExpr;
    /**
     * Visit a parse tree produced by the `BezieldeRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBezieldeRefExpr;
    /**
     * Visit a parse tree produced by the `MinAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMinAlleAttribuutExpr;
    /**
     * Visit a parse tree produced by the `AfrondingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAfrondingExpr;
    /**
     * Visit a parse tree produced by the `LaatsteDatumFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLaatsteDatumFuncExpr;
    /**
     * Visit a parse tree produced by the `HetAantalDagenInExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHetAantalDagenInExpr;
    /**
     * Visit a parse tree produced by the `UnaryMinusExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryMinusExpr;
    /**
     * Visit a parse tree produced by the `ParamRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamRefExpr;
    /**
     * Visit a parse tree produced by the `PronounExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPronounExpr;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.afronding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAfronding;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.begrenzing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegrenzing;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.begrenzingMinimum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegrenzingMinimum;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.begrenzingMaximum`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBegrenzingMaximum;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.conditieBijExpressie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConditieBijExpressie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.periodevergelijkingElementair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPeriodevergelijkingElementair;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.periodevergelijkingEnkelvoudig`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPeriodevergelijkingEnkelvoudig;
    /**
     * Visit a parse tree produced by the `VanafPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVanafPeriode;
    /**
     * Visit a parse tree produced by the `TotPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTotPeriode;
    /**
     * Visit a parse tree produced by the `TotEnMetPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTotEnMetPeriode;
    /**
     * Visit a parse tree produced by the `VanTotPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVanTotPeriode;
    /**
     * Visit a parse tree produced by the `VanTotEnMetPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVanTotEnMetPeriode;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.dateExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateExpression;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.getalAggregatieFunctie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetalAggregatieFunctie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.datumAggregatieFunctie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatumAggregatieFunctie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.dimensieSelectie`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDimensieSelectie;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.aggregerenOverAlleDimensies`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregerenOverAlleDimensies;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.aggregerenOverVerzameling`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregerenOverVerzameling;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.aggregerenOverBereik`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregerenOverBereik;
    /**
     * Visit a parse tree produced by the `unaryCheckCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryCheckCondition;
    /**
     * Visit a parse tree produced by the `unaryNumeriekExactCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryNumeriekExactCondition;
    /**
     * Visit a parse tree produced by the `unaryDagsoortCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryDagsoortCondition;
    /**
     * Visit a parse tree produced by the `unaryKenmerkCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryKenmerkCondition;
    /**
     * Visit a parse tree produced by the `unaryRolCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryRolCondition;
    /**
     * Visit a parse tree produced by the `unaryUniekCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryUniekCondition;
    /**
     * Visit a parse tree produced by the `unaryInconsistentDataCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryInconsistentDataCondition;
    /**
     * Visit a parse tree produced by the `regelStatusGevuurdCheck`
     * labeled alternative in `RegelSpraakParser.regelStatusCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelStatusGevuurdCheck;
    /**
     * Visit a parse tree produced by the `regelStatusInconsistentCheck`
     * labeled alternative in `RegelSpraakParser.regelStatusCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRegelStatusInconsistentCheck;
    /**
     * Visit a parse tree produced by the `SubordinateHasExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubordinateHasExpr;
    /**
     * Visit a parse tree produced by the `SubordinateIsWithExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubordinateIsWithExpr;
    /**
     * Visit a parse tree produced by the `SubordinateIsKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubordinateIsKenmerkExpr;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.dagsoortDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDagsoortDefinition;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.tekstreeksExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTekstreeksExpr;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.verdelingResultaat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingResultaat;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.verdelingMethodeSimple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingMethodeSimple;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.verdelingMethodeMultiLine`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingMethodeMultiLine;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.verdelingMethodeBulletList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingMethodeBulletList;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.verdelingMethodeBullet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingMethodeBullet;
    /**
     * Visit a parse tree produced by the `VerdelingGelijkeDelen`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingGelijkeDelen;
    /**
     * Visit a parse tree produced by the `VerdelingNaarRato`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingNaarRato;
    /**
     * Visit a parse tree produced by the `VerdelingOpVolgorde`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingOpVolgorde;
    /**
     * Visit a parse tree produced by the `VerdelingTieBreak`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingTieBreak;
    /**
     * Visit a parse tree produced by the `VerdelingMaximum`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingMaximum;
    /**
     * Visit a parse tree produced by the `VerdelingAfronding`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingAfronding;
    /**
     * Visit a parse tree produced by `RegelSpraakParser.verdelingRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVerdelingRest;
}
exports.default = RegelSpraakVisitor;
//# sourceMappingURL=RegelSpraakVisitor.js.map