"use strict";
// Generated from RegelSpraak.g4 by ANTLR 4.13.1
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4_1 = require("antlr4");
/**
 * This interface defines a complete listener for a parse tree produced by
 * `RegelSpraakParser`.
 */
class RegelSpraakListener extends antlr4_1.ParseTreeListener {
    /**
     * Enter a parse tree produced by `RegelSpraakParser.regelSpraakDocument`.
     * @param ctx the parse tree
     */
    enterRegelSpraakDocument;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.regelSpraakDocument`.
     * @param ctx the parse tree
     */
    exitRegelSpraakDocument;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.definitie`.
     * @param ctx the parse tree
     */
    enterDefinitie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.definitie`.
     * @param ctx the parse tree
     */
    exitDefinitie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabel`.
     * @param ctx the parse tree
     */
    enterBeslistabel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabel`.
     * @param ctx the parse tree
     */
    exitBeslistabel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabelTable`.
     * @param ctx the parse tree
     */
    enterBeslistabelTable;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabelTable`.
     * @param ctx the parse tree
     */
    exitBeslistabelTable;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabelHeader`.
     * @param ctx the parse tree
     */
    enterBeslistabelHeader;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabelHeader`.
     * @param ctx the parse tree
     */
    exitBeslistabelHeader;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabelSeparator`.
     * @param ctx the parse tree
     */
    enterBeslistabelSeparator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabelSeparator`.
     * @param ctx the parse tree
     */
    exitBeslistabelSeparator;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabelRow`.
     * @param ctx the parse tree
     */
    enterBeslistabelRow;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabelRow`.
     * @param ctx the parse tree
     */
    exitBeslistabelRow;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabelCellValue`.
     * @param ctx the parse tree
     */
    enterBeslistabelCellValue;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabelCellValue`.
     * @param ctx the parse tree
     */
    exitBeslistabelCellValue;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.beslistabelColumnText`.
     * @param ctx the parse tree
     */
    enterBeslistabelColumnText;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.beslistabelColumnText`.
     * @param ctx the parse tree
     */
    exitBeslistabelColumnText;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.identifierOrKeyword`.
     * @param ctx the parse tree
     */
    enterIdentifierOrKeyword;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.identifierOrKeyword`.
     * @param ctx the parse tree
     */
    exitIdentifierOrKeyword;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.identifierOrKeywordNoIs`.
     * @param ctx the parse tree
     */
    enterIdentifierOrKeywordNoIs;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.identifierOrKeywordNoIs`.
     * @param ctx the parse tree
     */
    exitIdentifierOrKeywordNoIs;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.naamPhrase`.
     * @param ctx the parse tree
     */
    enterNaamPhrase;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.naamPhrase`.
     * @param ctx the parse tree
     */
    exitNaamPhrase;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.naamPhraseWithNumbers`.
     * @param ctx the parse tree
     */
    enterNaamPhraseWithNumbers;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.naamPhraseWithNumbers`.
     * @param ctx the parse tree
     */
    exitNaamPhraseWithNumbers;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.identifierOrKeywordWithNumbers`.
     * @param ctx the parse tree
     */
    enterIdentifierOrKeywordWithNumbers;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.identifierOrKeywordWithNumbers`.
     * @param ctx the parse tree
     */
    exitIdentifierOrKeywordWithNumbers;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.naamPhraseNoIs`.
     * @param ctx the parse tree
     */
    enterNaamPhraseNoIs;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.naamPhraseNoIs`.
     * @param ctx the parse tree
     */
    exitNaamPhraseNoIs;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.naamwoord`.
     * @param ctx the parse tree
     */
    enterNaamwoord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.naamwoord`.
     * @param ctx the parse tree
     */
    exitNaamwoord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.naamwoordWithNumbers`.
     * @param ctx the parse tree
     */
    enterNaamwoordWithNumbers;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.naamwoordWithNumbers`.
     * @param ctx the parse tree
     */
    exitNaamwoordWithNumbers;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.naamwoordNoIs`.
     * @param ctx the parse tree
     */
    enterNaamwoordNoIs;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.naamwoordNoIs`.
     * @param ctx the parse tree
     */
    exitNaamwoordNoIs;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.voorzetsel`.
     * @param ctx the parse tree
     */
    enterVoorzetsel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.voorzetsel`.
     * @param ctx the parse tree
     */
    exitVoorzetsel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datumLiteral`.
     * @param ctx the parse tree
     */
    enterDatumLiteral;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datumLiteral`.
     * @param ctx the parse tree
     */
    exitDatumLiteral;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.unit`.
     * @param ctx the parse tree
     */
    enterUnit;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.unit`.
     * @param ctx the parse tree
     */
    exitUnit;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.timeUnit`.
     * @param ctx the parse tree
     */
    enterTimeUnit;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.timeUnit`.
     * @param ctx the parse tree
     */
    exitTimeUnit;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.objectTypeDefinition`.
     * @param ctx the parse tree
     */
    enterObjectTypeDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.objectTypeDefinition`.
     * @param ctx the parse tree
     */
    exitObjectTypeDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.objectTypeMember`.
     * @param ctx the parse tree
     */
    enterObjectTypeMember;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.objectTypeMember`.
     * @param ctx the parse tree
     */
    exitObjectTypeMember;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.kenmerkSpecificatie`.
     * @param ctx the parse tree
     */
    enterKenmerkSpecificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.kenmerkSpecificatie`.
     * @param ctx the parse tree
     */
    exitKenmerkSpecificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.attribuutSpecificatie`.
     * @param ctx the parse tree
     */
    enterAttribuutSpecificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.attribuutSpecificatie`.
     * @param ctx the parse tree
     */
    exitAttribuutSpecificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datatype`.
     * @param ctx the parse tree
     */
    enterDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datatype`.
     * @param ctx the parse tree
     */
    exitDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.lijstDatatype`.
     * @param ctx the parse tree
     */
    enterLijstDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.lijstDatatype`.
     * @param ctx the parse tree
     */
    exitLijstDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.numeriekDatatype`.
     * @param ctx the parse tree
     */
    enterNumeriekDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.numeriekDatatype`.
     * @param ctx the parse tree
     */
    exitNumeriekDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.tekstDatatype`.
     * @param ctx the parse tree
     */
    enterTekstDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.tekstDatatype`.
     * @param ctx the parse tree
     */
    exitTekstDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.percentageDatatype`.
     * @param ctx the parse tree
     */
    enterPercentageDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.percentageDatatype`.
     * @param ctx the parse tree
     */
    exitPercentageDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.booleanDatatype`.
     * @param ctx the parse tree
     */
    enterBooleanDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.booleanDatatype`.
     * @param ctx the parse tree
     */
    exitBooleanDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datumTijdDatatype`.
     * @param ctx the parse tree
     */
    enterDatumTijdDatatype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datumTijdDatatype`.
     * @param ctx the parse tree
     */
    exitDatumTijdDatatype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.getalSpecificatie`.
     * @param ctx the parse tree
     */
    enterGetalSpecificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.getalSpecificatie`.
     * @param ctx the parse tree
     */
    exitGetalSpecificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.domeinDefinition`.
     * @param ctx the parse tree
     */
    enterDomeinDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.domeinDefinition`.
     * @param ctx the parse tree
     */
    exitDomeinDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.domeinType`.
     * @param ctx the parse tree
     */
    enterDomeinType;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.domeinType`.
     * @param ctx the parse tree
     */
    exitDomeinType;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.enumeratieSpecificatie`.
     * @param ctx the parse tree
     */
    enterEnumeratieSpecificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.enumeratieSpecificatie`.
     * @param ctx the parse tree
     */
    exitEnumeratieSpecificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.domeinRef`.
     * @param ctx the parse tree
     */
    enterDomeinRef;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.domeinRef`.
     * @param ctx the parse tree
     */
    exitDomeinRef;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.objectTypeRef`.
     * @param ctx the parse tree
     */
    enterObjectTypeRef;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.objectTypeRef`.
     * @param ctx the parse tree
     */
    exitObjectTypeRef;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.eenheidsysteemDefinition`.
     * @param ctx the parse tree
     */
    enterEenheidsysteemDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.eenheidsysteemDefinition`.
     * @param ctx the parse tree
     */
    exitEenheidsysteemDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.eenheidEntry`.
     * @param ctx the parse tree
     */
    enterEenheidEntry;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.eenheidEntry`.
     * @param ctx the parse tree
     */
    exitEenheidEntry;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.unitIdentifier`.
     * @param ctx the parse tree
     */
    enterUnitIdentifier;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.unitIdentifier`.
     * @param ctx the parse tree
     */
    exitUnitIdentifier;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.eenheidExpressie`.
     * @param ctx the parse tree
     */
    enterEenheidExpressie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.eenheidExpressie`.
     * @param ctx the parse tree
     */
    exitEenheidExpressie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.eenheidMacht`.
     * @param ctx the parse tree
     */
    enterEenheidMacht;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.eenheidMacht`.
     * @param ctx the parse tree
     */
    exitEenheidMacht;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.dimensieDefinition`.
     * @param ctx the parse tree
     */
    enterDimensieDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.dimensieDefinition`.
     * @param ctx the parse tree
     */
    exitDimensieDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.voorzetselSpecificatie`.
     * @param ctx the parse tree
     */
    enterVoorzetselSpecificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.voorzetselSpecificatie`.
     * @param ctx the parse tree
     */
    exitVoorzetselSpecificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.labelWaardeSpecificatie`.
     * @param ctx the parse tree
     */
    enterLabelWaardeSpecificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.labelWaardeSpecificatie`.
     * @param ctx the parse tree
     */
    exitLabelWaardeSpecificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.tijdlijn`.
     * @param ctx the parse tree
     */
    enterTijdlijn;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.tijdlijn`.
     * @param ctx the parse tree
     */
    exitTijdlijn;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.dimensieRef`.
     * @param ctx the parse tree
     */
    enterDimensieRef;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.dimensieRef`.
     * @param ctx the parse tree
     */
    exitDimensieRef;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.parameterDefinition`.
     * @param ctx the parse tree
     */
    enterParameterDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.parameterDefinition`.
     * @param ctx the parse tree
     */
    exitParameterDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.parameterNamePhrase`.
     * @param ctx the parse tree
     */
    enterParameterNamePhrase;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.parameterNamePhrase`.
     * @param ctx the parse tree
     */
    exitParameterNamePhrase;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.parameterNamePart`.
     * @param ctx the parse tree
     */
    enterParameterNamePart;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.parameterNamePart`.
     * @param ctx the parse tree
     */
    exitParameterNamePart;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.parameterMetLidwoord`.
     * @param ctx the parse tree
     */
    enterParameterMetLidwoord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.parameterMetLidwoord`.
     * @param ctx the parse tree
     */
    exitParameterMetLidwoord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.feitTypeDefinition`.
     * @param ctx the parse tree
     */
    enterFeitTypeDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.feitTypeDefinition`.
     * @param ctx the parse tree
     */
    exitFeitTypeDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.rolDefinition`.
     * @param ctx the parse tree
     */
    enterRolDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.rolDefinition`.
     * @param ctx the parse tree
     */
    exitRolDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.rolObjectType`.
     * @param ctx the parse tree
     */
    enterRolObjectType;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.rolObjectType`.
     * @param ctx the parse tree
     */
    exitRolObjectType;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.rolContentWords`.
     * @param ctx the parse tree
     */
    enterRolContentWords;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.rolContentWords`.
     * @param ctx the parse tree
     */
    exitRolContentWords;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.cardinalityLine`.
     * @param ctx the parse tree
     */
    enterCardinalityLine;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.cardinalityLine`.
     * @param ctx the parse tree
     */
    exitCardinalityLine;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.cardinalityWord`.
     * @param ctx the parse tree
     */
    enterCardinalityWord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.cardinalityWord`.
     * @param ctx the parse tree
     */
    exitCardinalityWord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.regel`.
     * @param ctx the parse tree
     */
    enterRegel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.regel`.
     * @param ctx the parse tree
     */
    exitRegel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.regelGroep`.
     * @param ctx the parse tree
     */
    enterRegelGroep;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.regelGroep`.
     * @param ctx the parse tree
     */
    exitRegelGroep;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.regelName`.
     * @param ctx the parse tree
     */
    enterRegelName;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.regelName`.
     * @param ctx the parse tree
     */
    exitRegelName;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.regelNameExtension`.
     * @param ctx the parse tree
     */
    enterRegelNameExtension;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.regelNameExtension`.
     * @param ctx the parse tree
     */
    exitRegelNameExtension;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.regelVersie`.
     * @param ctx the parse tree
     */
    enterRegelVersie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.regelVersie`.
     * @param ctx the parse tree
     */
    exitRegelVersie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.versieGeldigheid`.
     * @param ctx the parse tree
     */
    enterVersieGeldigheid;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.versieGeldigheid`.
     * @param ctx the parse tree
     */
    exitVersieGeldigheid;
    /**
     * Enter a parse tree produced by the `DagsoortdefinitieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterDagsoortdefinitieResultaat;
    /**
     * Exit a parse tree produced by the `DagsoortdefinitieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitDagsoortdefinitieResultaat;
    /**
     * Enter a parse tree produced by the `GelijkstellingResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterGelijkstellingResultaat;
    /**
     * Exit a parse tree produced by the `GelijkstellingResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitGelijkstellingResultaat;
    /**
     * Enter a parse tree produced by the `ConsistencyCheckResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterConsistencyCheckResultaat;
    /**
     * Exit a parse tree produced by the `ConsistencyCheckResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitConsistencyCheckResultaat;
    /**
     * Enter a parse tree produced by the `FeitCreatieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterFeitCreatieResultaat;
    /**
     * Exit a parse tree produced by the `FeitCreatieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitFeitCreatieResultaat;
    /**
     * Enter a parse tree produced by the `KenmerkFeitResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterKenmerkFeitResultaat;
    /**
     * Exit a parse tree produced by the `KenmerkFeitResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitKenmerkFeitResultaat;
    /**
     * Enter a parse tree produced by the `RelationshipWithAttributeResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterRelationshipWithAttributeResultaat;
    /**
     * Exit a parse tree produced by the `RelationshipWithAttributeResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitRelationshipWithAttributeResultaat;
    /**
     * Enter a parse tree produced by the `ObjectCreatieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterObjectCreatieResultaat;
    /**
     * Exit a parse tree produced by the `ObjectCreatieResultaat`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitObjectCreatieResultaat;
    /**
     * Enter a parse tree produced by the `Verdeling`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    enterVerdeling;
    /**
     * Exit a parse tree produced by the `Verdeling`
     * labeled alternative in `RegelSpraakParser.resultaatDeel`.
     * @param ctx the parse tree
     */
    exitVerdeling;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.consistencyOperator`.
     * @param ctx the parse tree
     */
    enterConsistencyOperator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.consistencyOperator`.
     * @param ctx the parse tree
     */
    exitConsistencyOperator;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.feitCreatiePattern`.
     * @param ctx the parse tree
     */
    enterFeitCreatiePattern;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.feitCreatiePattern`.
     * @param ctx the parse tree
     */
    exitFeitCreatiePattern;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.feitCreatieRolPhrase`.
     * @param ctx the parse tree
     */
    enterFeitCreatieRolPhrase;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.feitCreatieRolPhrase`.
     * @param ctx the parse tree
     */
    exitFeitCreatieRolPhrase;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.feitCreatieSubjectPhrase`.
     * @param ctx the parse tree
     */
    enterFeitCreatieSubjectPhrase;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.feitCreatieSubjectPhrase`.
     * @param ctx the parse tree
     */
    exitFeitCreatieSubjectPhrase;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.feitCreatieSubjectWord`.
     * @param ctx the parse tree
     */
    enterFeitCreatieSubjectWord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.feitCreatieSubjectWord`.
     * @param ctx the parse tree
     */
    exitFeitCreatieSubjectWord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.feitCreatieWord`.
     * @param ctx the parse tree
     */
    enterFeitCreatieWord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.feitCreatieWord`.
     * @param ctx the parse tree
     */
    exitFeitCreatieWord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.voorzetselNietVan`.
     * @param ctx the parse tree
     */
    enterVoorzetselNietVan;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.voorzetselNietVan`.
     * @param ctx the parse tree
     */
    exitVoorzetselNietVan;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.objectCreatie`.
     * @param ctx the parse tree
     */
    enterObjectCreatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.objectCreatie`.
     * @param ctx the parse tree
     */
    exitObjectCreatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.objectAttributeInit`.
     * @param ctx the parse tree
     */
    enterObjectAttributeInit;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.objectAttributeInit`.
     * @param ctx the parse tree
     */
    exitObjectAttributeInit;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.attributeInitVervolg`.
     * @param ctx the parse tree
     */
    enterAttributeInitVervolg;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.attributeInitVervolg`.
     * @param ctx the parse tree
     */
    exitAttributeInitVervolg;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.simpleNaamwoord`.
     * @param ctx the parse tree
     */
    enterSimpleNaamwoord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.simpleNaamwoord`.
     * @param ctx the parse tree
     */
    exitSimpleNaamwoord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.consistentieregel`.
     * @param ctx the parse tree
     */
    enterConsistentieregel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.consistentieregel`.
     * @param ctx the parse tree
     */
    exitConsistentieregel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.uniekzijnResultaat`.
     * @param ctx the parse tree
     */
    enterUniekzijnResultaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.uniekzijnResultaat`.
     * @param ctx the parse tree
     */
    exitUniekzijnResultaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.alleAttributenVanObjecttype`.
     * @param ctx the parse tree
     */
    enterAlleAttributenVanObjecttype;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.alleAttributenVanObjecttype`.
     * @param ctx the parse tree
     */
    exitAlleAttributenVanObjecttype;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.inconsistentResultaat`.
     * @param ctx the parse tree
     */
    enterInconsistentResultaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.inconsistentResultaat`.
     * @param ctx the parse tree
     */
    exitInconsistentResultaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.voorwaardeDeel`.
     * @param ctx the parse tree
     */
    enterVoorwaardeDeel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.voorwaardeDeel`.
     * @param ctx the parse tree
     */
    exitVoorwaardeDeel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.toplevelSamengesteldeVoorwaarde`.
     * @param ctx the parse tree
     */
    enterToplevelSamengesteldeVoorwaarde;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.toplevelSamengesteldeVoorwaarde`.
     * @param ctx the parse tree
     */
    exitToplevelSamengesteldeVoorwaarde;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.voorwaardeKwantificatie`.
     * @param ctx the parse tree
     */
    enterVoorwaardeKwantificatie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.voorwaardeKwantificatie`.
     * @param ctx the parse tree
     */
    exitVoorwaardeKwantificatie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.samengesteldeVoorwaardeOnderdeel`.
     * @param ctx the parse tree
     */
    enterSamengesteldeVoorwaardeOnderdeel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.samengesteldeVoorwaardeOnderdeel`.
     * @param ctx the parse tree
     */
    exitSamengesteldeVoorwaardeOnderdeel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.bulletPrefix`.
     * @param ctx the parse tree
     */
    enterBulletPrefix;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.bulletPrefix`.
     * @param ctx the parse tree
     */
    exitBulletPrefix;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.elementaireVoorwaarde`.
     * @param ctx the parse tree
     */
    enterElementaireVoorwaarde;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.elementaireVoorwaarde`.
     * @param ctx the parse tree
     */
    exitElementaireVoorwaarde;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaarde`.
     * @param ctx the parse tree
     */
    enterGenesteSamengesteldeVoorwaarde;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaarde`.
     * @param ctx the parse tree
     */
    exitGenesteSamengesteldeVoorwaarde;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.onderwerpReferentie`.
     * @param ctx the parse tree
     */
    enterOnderwerpReferentie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.onderwerpReferentie`.
     * @param ctx the parse tree
     */
    exitOnderwerpReferentie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.onderwerpReferentieWithNumbers`.
     * @param ctx the parse tree
     */
    enterOnderwerpReferentieWithNumbers;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.onderwerpReferentieWithNumbers`.
     * @param ctx the parse tree
     */
    exitOnderwerpReferentieWithNumbers;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.onderwerpBasis`.
     * @param ctx the parse tree
     */
    enterOnderwerpBasis;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.onderwerpBasis`.
     * @param ctx the parse tree
     */
    exitOnderwerpBasis;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.onderwerpBasisWithNumbers`.
     * @param ctx the parse tree
     */
    enterOnderwerpBasisWithNumbers;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.onderwerpBasisWithNumbers`.
     * @param ctx the parse tree
     */
    exitOnderwerpBasisWithNumbers;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.basisOnderwerp`.
     * @param ctx the parse tree
     */
    enterBasisOnderwerp;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.basisOnderwerp`.
     * @param ctx the parse tree
     */
    exitBasisOnderwerp;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.basisOnderwerpWithNumbers`.
     * @param ctx the parse tree
     */
    enterBasisOnderwerpWithNumbers;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.basisOnderwerpWithNumbers`.
     * @param ctx the parse tree
     */
    exitBasisOnderwerpWithNumbers;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.attribuutReferentie`.
     * @param ctx the parse tree
     */
    enterAttribuutReferentie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.attribuutReferentie`.
     * @param ctx the parse tree
     */
    exitAttribuutReferentie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.attribuutMetLidwoord`.
     * @param ctx the parse tree
     */
    enterAttribuutMetLidwoord;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.attribuutMetLidwoord`.
     * @param ctx the parse tree
     */
    exitAttribuutMetLidwoord;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.kenmerkNaam`.
     * @param ctx the parse tree
     */
    enterKenmerkNaam;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.kenmerkNaam`.
     * @param ctx the parse tree
     */
    exitKenmerkNaam;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.kenmerkPhrase`.
     * @param ctx the parse tree
     */
    enterKenmerkPhrase;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.kenmerkPhrase`.
     * @param ctx the parse tree
     */
    exitKenmerkPhrase;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.bezieldeReferentie`.
     * @param ctx the parse tree
     */
    enterBezieldeReferentie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.bezieldeReferentie`.
     * @param ctx the parse tree
     */
    exitBezieldeReferentie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.aggregationSubject`.
     * @param ctx the parse tree
     */
    enterAggregationSubject;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.aggregationSubject`.
     * @param ctx the parse tree
     */
    exitAggregationSubject;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.predicaat`.
     * @param ctx the parse tree
     */
    enterPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.predicaat`.
     * @param ctx the parse tree
     */
    exitPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.elementairPredicaat`.
     * @param ctx the parse tree
     */
    enterElementairPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.elementairPredicaat`.
     * @param ctx the parse tree
     */
    exitElementairPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.objectPredicaat`.
     * @param ctx the parse tree
     */
    enterObjectPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.objectPredicaat`.
     * @param ctx the parse tree
     */
    exitObjectPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.eenzijdigeObjectVergelijking`.
     * @param ctx the parse tree
     */
    enterEenzijdigeObjectVergelijking;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.eenzijdigeObjectVergelijking`.
     * @param ctx the parse tree
     */
    exitEenzijdigeObjectVergelijking;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.rolNaam`.
     * @param ctx the parse tree
     */
    enterRolNaam;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.rolNaam`.
     * @param ctx the parse tree
     */
    exitRolNaam;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.attribuutVergelijkingsPredicaat`.
     * @param ctx the parse tree
     */
    enterAttribuutVergelijkingsPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.attribuutVergelijkingsPredicaat`.
     * @param ctx the parse tree
     */
    exitAttribuutVergelijkingsPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.getalPredicaat`.
     * @param ctx the parse tree
     */
    enterGetalPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.getalPredicaat`.
     * @param ctx the parse tree
     */
    exitGetalPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.tekstPredicaat`.
     * @param ctx the parse tree
     */
    enterTekstPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.tekstPredicaat`.
     * @param ctx the parse tree
     */
    exitTekstPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datumPredicaat`.
     * @param ctx the parse tree
     */
    enterDatumPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datumPredicaat`.
     * @param ctx the parse tree
     */
    exitDatumPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.samengesteldPredicaat`.
     * @param ctx the parse tree
     */
    enterSamengesteldPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.samengesteldPredicaat`.
     * @param ctx the parse tree
     */
    exitSamengesteldPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.samengesteldeVoorwaardeOnderdeelInPredicaat`.
     * @param ctx the parse tree
     */
    enterSamengesteldeVoorwaardeOnderdeelInPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.samengesteldeVoorwaardeOnderdeelInPredicaat`.
     * @param ctx the parse tree
     */
    exitSamengesteldeVoorwaardeOnderdeelInPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.elementaireVoorwaardeInPredicaat`.
     * @param ctx the parse tree
     */
    enterElementaireVoorwaardeInPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.elementaireVoorwaardeInPredicaat`.
     * @param ctx the parse tree
     */
    exitElementaireVoorwaardeInPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.vergelijkingInPredicaat`.
     * @param ctx the parse tree
     */
    enterVergelijkingInPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.vergelijkingInPredicaat`.
     * @param ctx the parse tree
     */
    exitVergelijkingInPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaardeInPredicaat`.
     * @param ctx the parse tree
     */
    enterGenesteSamengesteldeVoorwaardeInPredicaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.genesteSamengesteldeVoorwaardeInPredicaat`.
     * @param ctx the parse tree
     */
    exitGenesteSamengesteldeVoorwaardeInPredicaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.getalVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     */
    enterGetalVergelijkingsOperatorMeervoud;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.getalVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     */
    exitGetalVergelijkingsOperatorMeervoud;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.tekstVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     */
    enterTekstVergelijkingsOperatorMeervoud;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.tekstVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     */
    exitTekstVergelijkingsOperatorMeervoud;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datumVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     */
    enterDatumVergelijkingsOperatorMeervoud;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datumVergelijkingsOperatorMeervoud`.
     * @param ctx the parse tree
     */
    exitDatumVergelijkingsOperatorMeervoud;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.getalExpressie`.
     * @param ctx the parse tree
     */
    enterGetalExpressie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.getalExpressie`.
     * @param ctx the parse tree
     */
    exitGetalExpressie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.tekstExpressie`.
     * @param ctx the parse tree
     */
    enterTekstExpressie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.tekstExpressie`.
     * @param ctx the parse tree
     */
    exitTekstExpressie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datumExpressie`.
     * @param ctx the parse tree
     */
    enterDatumExpressie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datumExpressie`.
     * @param ctx the parse tree
     */
    exitDatumExpressie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.variabeleDeel`.
     * @param ctx the parse tree
     */
    enterVariabeleDeel;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.variabeleDeel`.
     * @param ctx the parse tree
     */
    exitVariabeleDeel;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.variabeleToekenning`.
     * @param ctx the parse tree
     */
    enterVariabeleToekenning;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.variabeleToekenning`.
     * @param ctx the parse tree
     */
    exitVariabeleToekenning;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.variabeleExpressie`.
     * @param ctx the parse tree
     */
    enterVariabeleExpressie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.variabeleExpressie`.
     * @param ctx the parse tree
     */
    exitVariabeleExpressie;
    /**
     * Enter a parse tree produced by the `ExprBegrenzingAfronding`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    enterExprBegrenzingAfronding;
    /**
     * Exit a parse tree produced by the `ExprBegrenzingAfronding`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    exitExprBegrenzingAfronding;
    /**
     * Enter a parse tree produced by the `ExprBegrenzing`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    enterExprBegrenzing;
    /**
     * Exit a parse tree produced by the `ExprBegrenzing`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    exitExprBegrenzing;
    /**
     * Enter a parse tree produced by the `ExprAfronding`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    enterExprAfronding;
    /**
     * Exit a parse tree produced by the `ExprAfronding`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    exitExprAfronding;
    /**
     * Enter a parse tree produced by the `SimpleExpr`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    enterSimpleExpr;
    /**
     * Exit a parse tree produced by the `SimpleExpr`
     * labeled alternative in `RegelSpraakParser.expressie`.
     * @param ctx the parse tree
     */
    exitSimpleExpr;
    /**
     * Enter a parse tree produced by the `SimpleExprBegrenzingAfronding`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    enterSimpleExprBegrenzingAfronding;
    /**
     * Exit a parse tree produced by the `SimpleExprBegrenzingAfronding`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    exitSimpleExprBegrenzingAfronding;
    /**
     * Enter a parse tree produced by the `SimpleExprBegrenzing`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    enterSimpleExprBegrenzing;
    /**
     * Exit a parse tree produced by the `SimpleExprBegrenzing`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    exitSimpleExprBegrenzing;
    /**
     * Enter a parse tree produced by the `SimpleExprAfronding`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    enterSimpleExprAfronding;
    /**
     * Exit a parse tree produced by the `SimpleExprAfronding`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    exitSimpleExprAfronding;
    /**
     * Enter a parse tree produced by the `SimpleExprBase`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    enterSimpleExprBase;
    /**
     * Exit a parse tree produced by the `SimpleExprBase`
     * labeled alternative in `RegelSpraakParser.simpleExpressie`.
     * @param ctx the parse tree
     */
    exitSimpleExprBase;
    /**
     * Enter a parse tree produced by the `LogicalExpr`
     * labeled alternative in `RegelSpraakParser.logicalExpression`.
     * @param ctx the parse tree
     */
    enterLogicalExpr;
    /**
     * Exit a parse tree produced by the `LogicalExpr`
     * labeled alternative in `RegelSpraakParser.logicalExpression`.
     * @param ctx the parse tree
     */
    exitLogicalExpr;
    /**
     * Enter a parse tree produced by the `SubordinateClauseExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterSubordinateClauseExpr;
    /**
     * Exit a parse tree produced by the `SubordinateClauseExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitSubordinateClauseExpr;
    /**
     * Enter a parse tree produced by the `PeriodeCheckExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterPeriodeCheckExpr;
    /**
     * Exit a parse tree produced by the `PeriodeCheckExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitPeriodeCheckExpr;
    /**
     * Enter a parse tree produced by the `IsKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterIsKenmerkExpr;
    /**
     * Exit a parse tree produced by the `IsKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitIsKenmerkExpr;
    /**
     * Enter a parse tree produced by the `HeeftKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterHeeftKenmerkExpr;
    /**
     * Exit a parse tree produced by the `HeeftKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitHeeftKenmerkExpr;
    /**
     * Enter a parse tree produced by the `GelijkIsAanOfExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterGelijkIsAanOfExpr;
    /**
     * Exit a parse tree produced by the `GelijkIsAanOfExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitGelijkIsAanOfExpr;
    /**
     * Enter a parse tree produced by the `BinaryComparisonExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterBinaryComparisonExpr;
    /**
     * Exit a parse tree produced by the `BinaryComparisonExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitBinaryComparisonExpr;
    /**
     * Enter a parse tree produced by the `UnaryConditionExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterUnaryConditionExpr;
    /**
     * Exit a parse tree produced by the `UnaryConditionExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitUnaryConditionExpr;
    /**
     * Enter a parse tree produced by the `RegelStatusConditionExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    enterRegelStatusConditionExpr;
    /**
     * Exit a parse tree produced by the `RegelStatusConditionExpr`
     * labeled alternative in `RegelSpraakParser.comparisonExpression`.
     * @param ctx the parse tree
     */
    exitRegelStatusConditionExpr;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.literalValue`.
     * @param ctx the parse tree
     */
    enterLiteralValue;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.literalValue`.
     * @param ctx the parse tree
     */
    exitLiteralValue;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.gelijkIsAanOperator`.
     * @param ctx the parse tree
     */
    enterGelijkIsAanOperator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.gelijkIsAanOperator`.
     * @param ctx the parse tree
     */
    exitGelijkIsAanOperator;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.additiveExpression`.
     * @param ctx the parse tree
     */
    enterAdditiveExpression;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.additiveExpression`.
     * @param ctx the parse tree
     */
    exitAdditiveExpression;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.additiveOperator`.
     * @param ctx the parse tree
     */
    enterAdditiveOperator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.additiveOperator`.
     * @param ctx the parse tree
     */
    exitAdditiveOperator;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.multiplicativeExpression`.
     * @param ctx the parse tree
     */
    enterMultiplicativeExpression;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.multiplicativeExpression`.
     * @param ctx the parse tree
     */
    exitMultiplicativeExpression;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.multiplicativeOperator`.
     * @param ctx the parse tree
     */
    enterMultiplicativeOperator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.multiplicativeOperator`.
     * @param ctx the parse tree
     */
    exitMultiplicativeOperator;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.powerExpression`.
     * @param ctx the parse tree
     */
    enterPowerExpression;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.powerExpression`.
     * @param ctx the parse tree
     */
    exitPowerExpression;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.powerOperator`.
     * @param ctx the parse tree
     */
    enterPowerOperator;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.powerOperator`.
     * @param ctx the parse tree
     */
    exitPowerOperator;
    /**
     * Enter a parse tree produced by the `WortelFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterWortelFuncExpr;
    /**
     * Exit a parse tree produced by the `WortelFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitWortelFuncExpr;
    /**
     * Enter a parse tree produced by the `BooleanTrueLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBooleanTrueLiteralExpr;
    /**
     * Exit a parse tree produced by the `BooleanTrueLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBooleanTrueLiteralExpr;
    /**
     * Enter a parse tree produced by the `AbsValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAbsValFuncExpr;
    /**
     * Exit a parse tree produced by the `AbsValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAbsValFuncExpr;
    /**
     * Enter a parse tree produced by the `MaxValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMaxValFuncExpr;
    /**
     * Exit a parse tree produced by the `MaxValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMaxValFuncExpr;
    /**
     * Enter a parse tree produced by the `RekendatumKeywordExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterRekendatumKeywordExpr;
    /**
     * Exit a parse tree produced by the `RekendatumKeywordExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitRekendatumKeywordExpr;
    /**
     * Enter a parse tree produced by the `EnumLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterEnumLiteralExpr;
    /**
     * Exit a parse tree produced by the `EnumLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitEnumLiteralExpr;
    /**
     * Enter a parse tree produced by the `NumberLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNumberLiteralExpr;
    /**
     * Exit a parse tree produced by the `NumberLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNumberLiteralExpr;
    /**
     * Enter a parse tree produced by the `DatumLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDatumLiteralExpr;
    /**
     * Exit a parse tree produced by the `DatumLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDatumLiteralExpr;
    /**
     * Enter a parse tree produced by the `AantalFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAantalFuncExpr;
    /**
     * Exit a parse tree produced by the `AantalFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAantalFuncExpr;
    /**
     * Enter a parse tree produced by the `UnaryNietExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterUnaryNietExpr;
    /**
     * Exit a parse tree produced by the `UnaryNietExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitUnaryNietExpr;
    /**
     * Enter a parse tree produced by the `ConcatenatieExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConcatenatieExpr;
    /**
     * Exit a parse tree produced by the `ConcatenatieExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConcatenatieExpr;
    /**
     * Enter a parse tree produced by the `SomAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSomAlleAttribuutExpr;
    /**
     * Exit a parse tree produced by the `SomAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSomAlleAttribuutExpr;
    /**
     * Enter a parse tree produced by the `AttrRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAttrRefExpr;
    /**
     * Exit a parse tree produced by the `AttrRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAttrRefExpr;
    /**
     * Enter a parse tree produced by the `DagUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDagUitFuncExpr;
    /**
     * Exit a parse tree produced by the `DagUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDagUitFuncExpr;
    /**
     * Enter a parse tree produced by the `BegrenzingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBegrenzingExpr;
    /**
     * Exit a parse tree produced by the `BegrenzingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBegrenzingExpr;
    /**
     * Enter a parse tree produced by the `NaamwoordExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterNaamwoordExpr;
    /**
     * Exit a parse tree produced by the `NaamwoordExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitNaamwoordExpr;
    /**
     * Enter a parse tree produced by the `BooleanFalseLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBooleanFalseLiteralExpr;
    /**
     * Exit a parse tree produced by the `BooleanFalseLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBooleanFalseLiteralExpr;
    /**
     * Enter a parse tree produced by the `JaarUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterJaarUitFuncExpr;
    /**
     * Exit a parse tree produced by the `JaarUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitJaarUitFuncExpr;
    /**
     * Enter a parse tree produced by the `TotaalVanExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTotaalVanExpr;
    /**
     * Exit a parse tree produced by the `TotaalVanExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTotaalVanExpr;
    /**
     * Enter a parse tree produced by the `TijdsevenredigDeelExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTijdsevenredigDeelExpr;
    /**
     * Exit a parse tree produced by the `TijdsevenredigDeelExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTijdsevenredigDeelExpr;
    /**
     * Enter a parse tree produced by the `CapitalizedTijdsevenredigDeelExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCapitalizedTijdsevenredigDeelExpr;
    /**
     * Exit a parse tree produced by the `CapitalizedTijdsevenredigDeelExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCapitalizedTijdsevenredigDeelExpr;
    /**
     * Enter a parse tree produced by the `AantalAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAantalAttribuutExpr;
    /**
     * Exit a parse tree produced by the `AantalAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAantalAttribuutExpr;
    /**
     * Enter a parse tree produced by the `ParenExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenExpr;
    /**
     * Exit a parse tree produced by the `ParenExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenExpr;
    /**
     * Enter a parse tree produced by the `DimensieRangeAggExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDimensieRangeAggExpr;
    /**
     * Exit a parse tree produced by the `DimensieRangeAggExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDimensieRangeAggExpr;
    /**
     * Enter a parse tree produced by the `DatumMetFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDatumMetFuncExpr;
    /**
     * Exit a parse tree produced by the `DatumMetFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDatumMetFuncExpr;
    /**
     * Enter a parse tree produced by the `PercentageLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPercentageLiteralExpr;
    /**
     * Exit a parse tree produced by the `PercentageLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPercentageLiteralExpr;
    /**
     * Enter a parse tree produced by the `StringLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStringLiteralExpr;
    /**
     * Exit a parse tree produced by the `StringLiteralExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStringLiteralExpr;
    /**
     * Enter a parse tree produced by the `PercentageFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPercentageFuncExpr;
    /**
     * Exit a parse tree produced by the `PercentageFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPercentageFuncExpr;
    /**
     * Enter a parse tree produced by the `EersteDatumFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterEersteDatumFuncExpr;
    /**
     * Exit a parse tree produced by the `EersteDatumFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitEersteDatumFuncExpr;
    /**
     * Enter a parse tree produced by the `PasenFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPasenFuncExpr;
    /**
     * Exit a parse tree produced by the `PasenFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPasenFuncExpr;
    /**
     * Enter a parse tree produced by the `AbsTijdsduurFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAbsTijdsduurFuncExpr;
    /**
     * Exit a parse tree produced by the `AbsTijdsduurFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAbsTijdsduurFuncExpr;
    /**
     * Enter a parse tree produced by the `MaandUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMaandUitFuncExpr;
    /**
     * Exit a parse tree produced by the `MaandUitFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMaandUitFuncExpr;
    /**
     * Enter a parse tree produced by the `CapitalizedTotaalVanExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCapitalizedTotaalVanExpr;
    /**
     * Exit a parse tree produced by the `CapitalizedTotaalVanExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCapitalizedTotaalVanExpr;
    /**
     * Enter a parse tree produced by the `IdentifierExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterIdentifierExpr;
    /**
     * Exit a parse tree produced by the `IdentifierExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitIdentifierExpr;
    /**
     * Enter a parse tree produced by the `DimensieAggExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDimensieAggExpr;
    /**
     * Exit a parse tree produced by the `DimensieAggExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDimensieAggExpr;
    /**
     * Enter a parse tree produced by the `TijdsduurFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterTijdsduurFuncExpr;
    /**
     * Exit a parse tree produced by the `TijdsduurFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitTijdsduurFuncExpr;
    /**
     * Enter a parse tree produced by the `OnderwerpRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterOnderwerpRefExpr;
    /**
     * Exit a parse tree produced by the `OnderwerpRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitOnderwerpRefExpr;
    /**
     * Enter a parse tree produced by the `SomFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSomFuncExpr;
    /**
     * Exit a parse tree produced by the `SomFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSomFuncExpr;
    /**
     * Enter a parse tree produced by the `SomAlleExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSomAlleExpr;
    /**
     * Exit a parse tree produced by the `SomAlleExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSomAlleExpr;
    /**
     * Enter a parse tree produced by the `SimpleConcatenatieExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleConcatenatieExpr;
    /**
     * Exit a parse tree produced by the `SimpleConcatenatieExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleConcatenatieExpr;
    /**
     * Enter a parse tree produced by the `BegrenzingAfrondingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBegrenzingAfrondingExpr;
    /**
     * Exit a parse tree produced by the `BegrenzingAfrondingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBegrenzingAfrondingExpr;
    /**
     * Enter a parse tree produced by the `PercentageOfExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPercentageOfExpr;
    /**
     * Exit a parse tree produced by the `PercentageOfExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPercentageOfExpr;
    /**
     * Enter a parse tree produced by the `MinValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMinValFuncExpr;
    /**
     * Exit a parse tree produced by the `MinValFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMinValFuncExpr;
    /**
     * Enter a parse tree produced by the `MaxAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMaxAlleAttribuutExpr;
    /**
     * Exit a parse tree produced by the `MaxAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMaxAlleAttribuutExpr;
    /**
     * Enter a parse tree produced by the `DateCalcExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterDateCalcExpr;
    /**
     * Exit a parse tree produced by the `DateCalcExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitDateCalcExpr;
    /**
     * Enter a parse tree produced by the `BezieldeRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterBezieldeRefExpr;
    /**
     * Exit a parse tree produced by the `BezieldeRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitBezieldeRefExpr;
    /**
     * Enter a parse tree produced by the `MinAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterMinAlleAttribuutExpr;
    /**
     * Exit a parse tree produced by the `MinAlleAttribuutExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitMinAlleAttribuutExpr;
    /**
     * Enter a parse tree produced by the `AfrondingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAfrondingExpr;
    /**
     * Exit a parse tree produced by the `AfrondingExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAfrondingExpr;
    /**
     * Enter a parse tree produced by the `LaatsteDatumFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLaatsteDatumFuncExpr;
    /**
     * Exit a parse tree produced by the `LaatsteDatumFuncExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLaatsteDatumFuncExpr;
    /**
     * Enter a parse tree produced by the `HetAantalDagenInExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterHetAantalDagenInExpr;
    /**
     * Exit a parse tree produced by the `HetAantalDagenInExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitHetAantalDagenInExpr;
    /**
     * Enter a parse tree produced by the `UnaryMinusExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterUnaryMinusExpr;
    /**
     * Exit a parse tree produced by the `UnaryMinusExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitUnaryMinusExpr;
    /**
     * Enter a parse tree produced by the `ParamRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParamRefExpr;
    /**
     * Exit a parse tree produced by the `ParamRefExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParamRefExpr;
    /**
     * Enter a parse tree produced by the `PronounExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPronounExpr;
    /**
     * Exit a parse tree produced by the `PronounExpr`
     * labeled alternative in `RegelSpraakParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPronounExpr;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.afronding`.
     * @param ctx the parse tree
     */
    enterAfronding;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.afronding`.
     * @param ctx the parse tree
     */
    exitAfronding;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.begrenzing`.
     * @param ctx the parse tree
     */
    enterBegrenzing;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.begrenzing`.
     * @param ctx the parse tree
     */
    exitBegrenzing;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.begrenzingMinimum`.
     * @param ctx the parse tree
     */
    enterBegrenzingMinimum;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.begrenzingMinimum`.
     * @param ctx the parse tree
     */
    exitBegrenzingMinimum;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.begrenzingMaximum`.
     * @param ctx the parse tree
     */
    enterBegrenzingMaximum;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.begrenzingMaximum`.
     * @param ctx the parse tree
     */
    exitBegrenzingMaximum;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.conditieBijExpressie`.
     * @param ctx the parse tree
     */
    enterConditieBijExpressie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.conditieBijExpressie`.
     * @param ctx the parse tree
     */
    exitConditieBijExpressie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.periodevergelijkingElementair`.
     * @param ctx the parse tree
     */
    enterPeriodevergelijkingElementair;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.periodevergelijkingElementair`.
     * @param ctx the parse tree
     */
    exitPeriodevergelijkingElementair;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.periodevergelijkingEnkelvoudig`.
     * @param ctx the parse tree
     */
    enterPeriodevergelijkingEnkelvoudig;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.periodevergelijkingEnkelvoudig`.
     * @param ctx the parse tree
     */
    exitPeriodevergelijkingEnkelvoudig;
    /**
     * Enter a parse tree produced by the `VanafPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    enterVanafPeriode;
    /**
     * Exit a parse tree produced by the `VanafPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    exitVanafPeriode;
    /**
     * Enter a parse tree produced by the `TotPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    enterTotPeriode;
    /**
     * Exit a parse tree produced by the `TotPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    exitTotPeriode;
    /**
     * Enter a parse tree produced by the `TotEnMetPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    enterTotEnMetPeriode;
    /**
     * Exit a parse tree produced by the `TotEnMetPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    exitTotEnMetPeriode;
    /**
     * Enter a parse tree produced by the `VanTotPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    enterVanTotPeriode;
    /**
     * Exit a parse tree produced by the `VanTotPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    exitVanTotPeriode;
    /**
     * Enter a parse tree produced by the `VanTotEnMetPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    enterVanTotEnMetPeriode;
    /**
     * Exit a parse tree produced by the `VanTotEnMetPeriode`
     * labeled alternative in `RegelSpraakParser.periodeDefinitie`.
     * @param ctx the parse tree
     */
    exitVanTotEnMetPeriode;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.dateExpression`.
     * @param ctx the parse tree
     */
    enterDateExpression;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.dateExpression`.
     * @param ctx the parse tree
     */
    exitDateExpression;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.getalAggregatieFunctie`.
     * @param ctx the parse tree
     */
    enterGetalAggregatieFunctie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.getalAggregatieFunctie`.
     * @param ctx the parse tree
     */
    exitGetalAggregatieFunctie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.datumAggregatieFunctie`.
     * @param ctx the parse tree
     */
    enterDatumAggregatieFunctie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.datumAggregatieFunctie`.
     * @param ctx the parse tree
     */
    exitDatumAggregatieFunctie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.dimensieSelectie`.
     * @param ctx the parse tree
     */
    enterDimensieSelectie;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.dimensieSelectie`.
     * @param ctx the parse tree
     */
    exitDimensieSelectie;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.aggregerenOverAlleDimensies`.
     * @param ctx the parse tree
     */
    enterAggregerenOverAlleDimensies;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.aggregerenOverAlleDimensies`.
     * @param ctx the parse tree
     */
    exitAggregerenOverAlleDimensies;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.aggregerenOverVerzameling`.
     * @param ctx the parse tree
     */
    enterAggregerenOverVerzameling;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.aggregerenOverVerzameling`.
     * @param ctx the parse tree
     */
    exitAggregerenOverVerzameling;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.aggregerenOverBereik`.
     * @param ctx the parse tree
     */
    enterAggregerenOverBereik;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.aggregerenOverBereik`.
     * @param ctx the parse tree
     */
    exitAggregerenOverBereik;
    /**
     * Enter a parse tree produced by the `unaryCheckCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryCheckCondition;
    /**
     * Exit a parse tree produced by the `unaryCheckCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryCheckCondition;
    /**
     * Enter a parse tree produced by the `unaryNumeriekExactCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryNumeriekExactCondition;
    /**
     * Exit a parse tree produced by the `unaryNumeriekExactCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryNumeriekExactCondition;
    /**
     * Enter a parse tree produced by the `unaryDagsoortCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryDagsoortCondition;
    /**
     * Exit a parse tree produced by the `unaryDagsoortCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryDagsoortCondition;
    /**
     * Enter a parse tree produced by the `unaryKenmerkCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryKenmerkCondition;
    /**
     * Exit a parse tree produced by the `unaryKenmerkCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryKenmerkCondition;
    /**
     * Enter a parse tree produced by the `unaryRolCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryRolCondition;
    /**
     * Exit a parse tree produced by the `unaryRolCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryRolCondition;
    /**
     * Enter a parse tree produced by the `unaryUniekCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryUniekCondition;
    /**
     * Exit a parse tree produced by the `unaryUniekCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryUniekCondition;
    /**
     * Enter a parse tree produced by the `unaryInconsistentDataCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    enterUnaryInconsistentDataCondition;
    /**
     * Exit a parse tree produced by the `unaryInconsistentDataCondition`
     * labeled alternative in `RegelSpraakParser.unaryCondition`.
     * @param ctx the parse tree
     */
    exitUnaryInconsistentDataCondition;
    /**
     * Enter a parse tree produced by the `regelStatusGevuurdCheck`
     * labeled alternative in `RegelSpraakParser.regelStatusCondition`.
     * @param ctx the parse tree
     */
    enterRegelStatusGevuurdCheck;
    /**
     * Exit a parse tree produced by the `regelStatusGevuurdCheck`
     * labeled alternative in `RegelSpraakParser.regelStatusCondition`.
     * @param ctx the parse tree
     */
    exitRegelStatusGevuurdCheck;
    /**
     * Enter a parse tree produced by the `regelStatusInconsistentCheck`
     * labeled alternative in `RegelSpraakParser.regelStatusCondition`.
     * @param ctx the parse tree
     */
    enterRegelStatusInconsistentCheck;
    /**
     * Exit a parse tree produced by the `regelStatusInconsistentCheck`
     * labeled alternative in `RegelSpraakParser.regelStatusCondition`.
     * @param ctx the parse tree
     */
    exitRegelStatusInconsistentCheck;
    /**
     * Enter a parse tree produced by the `SubordinateHasExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     */
    enterSubordinateHasExpr;
    /**
     * Exit a parse tree produced by the `SubordinateHasExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     */
    exitSubordinateHasExpr;
    /**
     * Enter a parse tree produced by the `SubordinateIsWithExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     */
    enterSubordinateIsWithExpr;
    /**
     * Exit a parse tree produced by the `SubordinateIsWithExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     */
    exitSubordinateIsWithExpr;
    /**
     * Enter a parse tree produced by the `SubordinateIsKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     */
    enterSubordinateIsKenmerkExpr;
    /**
     * Exit a parse tree produced by the `SubordinateIsKenmerkExpr`
     * labeled alternative in `RegelSpraakParser.subordinateClauseExpression`.
     * @param ctx the parse tree
     */
    exitSubordinateIsKenmerkExpr;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.dagsoortDefinition`.
     * @param ctx the parse tree
     */
    enterDagsoortDefinition;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.dagsoortDefinition`.
     * @param ctx the parse tree
     */
    exitDagsoortDefinition;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.tekstreeksExpr`.
     * @param ctx the parse tree
     */
    enterTekstreeksExpr;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.tekstreeksExpr`.
     * @param ctx the parse tree
     */
    exitTekstreeksExpr;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.verdelingResultaat`.
     * @param ctx the parse tree
     */
    enterVerdelingResultaat;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.verdelingResultaat`.
     * @param ctx the parse tree
     */
    exitVerdelingResultaat;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.verdelingMethodeSimple`.
     * @param ctx the parse tree
     */
    enterVerdelingMethodeSimple;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.verdelingMethodeSimple`.
     * @param ctx the parse tree
     */
    exitVerdelingMethodeSimple;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.verdelingMethodeMultiLine`.
     * @param ctx the parse tree
     */
    enterVerdelingMethodeMultiLine;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.verdelingMethodeMultiLine`.
     * @param ctx the parse tree
     */
    exitVerdelingMethodeMultiLine;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.verdelingMethodeBulletList`.
     * @param ctx the parse tree
     */
    enterVerdelingMethodeBulletList;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.verdelingMethodeBulletList`.
     * @param ctx the parse tree
     */
    exitVerdelingMethodeBulletList;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.verdelingMethodeBullet`.
     * @param ctx the parse tree
     */
    enterVerdelingMethodeBullet;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.verdelingMethodeBullet`.
     * @param ctx the parse tree
     */
    exitVerdelingMethodeBullet;
    /**
     * Enter a parse tree produced by the `VerdelingGelijkeDelen`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    enterVerdelingGelijkeDelen;
    /**
     * Exit a parse tree produced by the `VerdelingGelijkeDelen`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    exitVerdelingGelijkeDelen;
    /**
     * Enter a parse tree produced by the `VerdelingNaarRato`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    enterVerdelingNaarRato;
    /**
     * Exit a parse tree produced by the `VerdelingNaarRato`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    exitVerdelingNaarRato;
    /**
     * Enter a parse tree produced by the `VerdelingOpVolgorde`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    enterVerdelingOpVolgorde;
    /**
     * Exit a parse tree produced by the `VerdelingOpVolgorde`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    exitVerdelingOpVolgorde;
    /**
     * Enter a parse tree produced by the `VerdelingTieBreak`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    enterVerdelingTieBreak;
    /**
     * Exit a parse tree produced by the `VerdelingTieBreak`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    exitVerdelingTieBreak;
    /**
     * Enter a parse tree produced by the `VerdelingMaximum`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    enterVerdelingMaximum;
    /**
     * Exit a parse tree produced by the `VerdelingMaximum`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    exitVerdelingMaximum;
    /**
     * Enter a parse tree produced by the `VerdelingAfronding`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    enterVerdelingAfronding;
    /**
     * Exit a parse tree produced by the `VerdelingAfronding`
     * labeled alternative in `RegelSpraakParser.verdelingMethode`.
     * @param ctx the parse tree
     */
    exitVerdelingAfronding;
    /**
     * Enter a parse tree produced by `RegelSpraakParser.verdelingRest`.
     * @param ctx the parse tree
     */
    enterVerdelingRest;
    /**
     * Exit a parse tree produced by `RegelSpraakParser.verdelingRest`.
     * @param ctx the parse tree
     */
    exitVerdelingRest;
}
exports.default = RegelSpraakListener;
//# sourceMappingURL=RegelSpraakListener.js.map