import { ATN, DFA, FailedPredicateException, Parser, RuleContext, ParserRuleContext, TerminalNode, Token, TokenStream } from 'antlr4';
import RegelSpraakVisitor from "./RegelSpraakVisitor.js";
export default class RegelSpraakParser extends Parser {
    static readonly VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL = 1;
    static readonly NA_HET_ATTRIBUUT_MET_VOORZETSEL = 2;
    static readonly DATUM_TIJD_MILLIS = 3;
    static readonly GEDURENDE_DE_TIJD_DAT = 4;
    static readonly GEDURENDE_HET_GEHELE = 5;
    static readonly GEDURENDE_DE_GEHELE = 6;
    static readonly HET_IS_DE_PERIODE = 7;
    static readonly WORDT_BEREKEND_ALS = 8;
    static readonly WORDT_GESTELD_OP = 9;
    static readonly WORDT_GEINITIALISEERD_OP = 10;
    static readonly DE_ABSOLUTE_TIJDSDUUR_VAN = 11;
    static readonly DE_ABSOLUTE_WAARDE_VAN = 12;
    static readonly DE_MAXIMALE_WAARDE_VAN = 13;
    static readonly DE_MINIMALE_WAARDE_VAN = 14;
    static readonly HET_TOTAAL_VAN = 15;
    static readonly HET_TIJDSEVENREDIG_DEEL_PER = 16;
    static readonly DE_DATUM_MET = 17;
    static readonly DE_EERSTE_PAASDAG_VAN = 18;
    static readonly ALS_ONVERDEELDE_REST_BLIJFT = 19;
    static readonly MET_EEN_MINIMUM_VAN = 20;
    static readonly MET_EEN_MAXIMUM_VAN = 21;
    static readonly GROTER_OF_GELIJK_AAN = 22;
    static readonly KLEINER_OF_GELIJK_AAN = 23;
    static readonly LATER_OF_GELIJK_AAN = 24;
    static readonly EERDER_OF_GELIJK_AAN = 25;
    static readonly WAARBIJ_WORDT_VERDEELD = 26;
    static readonly BESTAANDE_UIT = 27;
    static readonly WEDERKERIG_FEITTYPE = 28;
    static readonly IS_VAN_HET_TYPE = 29;
    static readonly CONCATENATIE_VAN = 30;
    static readonly VOLGEND_CRITERIUM = 31;
    static readonly VOLGENDE_CRITERIA = 32;
    static readonly BIJ_EVEN_GROOT_CRITERIUM = 33;
    static readonly OP_VOLGORDE_VAN = 34;
    static readonly NAAR_RATO_VAN = 35;
    static readonly NUMERIEK_MET_EXACT = 36;
    static readonly AAN_DE_ELFPROEF = 37;
    static readonly GROTER_IS_DAN = 38;
    static readonly KLEINER_IS_DAN = 39;
    static readonly WORDT_VOLDAAN = 40;
    static readonly ER_WORDT_EEN_NIEUW = 41;
    static readonly WORDT_EEN_NIEUW = 42;
    static readonly AANGEMAAKT = 43;
    static readonly CREEER = 44;
    static readonly NIEUWE = 45;
    static readonly ER_AAN = 46;
    static readonly GELIJK_IS_AAN = 47;
    static readonly IS_GELIJK_AAN = 48;
    static readonly IS_ONGELIJK_AAN = 49;
    static readonly IS_KLEINER_DAN = 50;
    static readonly IS_KLEINER_OF_GELIJK_AAN = 51;
    static readonly IS_GROTER_DAN = 52;
    static readonly IS_GROTER_OF_GELIJK_AAN = 53;
    static readonly ZIJN_GELIJK_AAN = 54;
    static readonly ZIJN_ONGELIJK_AAN = 55;
    static readonly ZIJN_GROTER_DAN = 56;
    static readonly ZIJN_GROTER_OF_GELIJK_AAN = 57;
    static readonly ZIJN_KLEINER_DAN = 58;
    static readonly ZIJN_KLEINER_OF_GELIJK_AAN = 59;
    static readonly IS_LATER_DAN = 60;
    static readonly IS_LATER_OF_GELIJK_AAN = 61;
    static readonly IS_EERDER_DAN = 62;
    static readonly IS_EERDER_OF_GELIJK_AAN = 63;
    static readonly ZIJN_LATER_DAN = 64;
    static readonly ZIJN_LATER_OF_GELIJK_AAN = 65;
    static readonly ZIJN_EERDER_DAN = 66;
    static readonly ZIJN_EERDER_OF_GELIJK_AAN = 67;
    static readonly IS_LEEG = 68;
    static readonly IS_GEVULD = 69;
    static readonly ZIJN_LEEG = 70;
    static readonly ZIJN_GEVULD = 71;
    static readonly IS_KENMERK = 72;
    static readonly IS_ROL = 73;
    static readonly ZIJN_KENMERK = 74;
    static readonly ZIJN_ROL = 75;
    static readonly IS_NIET_KENMERK = 76;
    static readonly IS_NIET_ROL = 77;
    static readonly ZIJN_NIET_KENMERK = 78;
    static readonly ZIJN_NIET_ROL = 79;
    static readonly VOLDOET_AAN_DE_ELFPROEF = 80;
    static readonly VOLDOEN_AAN_DE_ELFPROEF = 81;
    static readonly VOLDOET_NIET_AAN_DE_ELFPROEF = 82;
    static readonly VOLDOEN_NIET_AAN_DE_ELFPROEF = 83;
    static readonly IS_NUMERIEK_MET_EXACT = 84;
    static readonly IS_NIET_NUMERIEK_MET_EXACT = 85;
    static readonly ZIJN_NUMERIEK_MET_EXACT = 86;
    static readonly ZIJN_NIET_NUMERIEK_MET_EXACT = 87;
    static readonly IS_EEN_DAGSOORT = 88;
    static readonly ZIJN_EEN_DAGSOORT = 89;
    static readonly IS_GEEN_DAGSOORT = 90;
    static readonly ZIJN_GEEN_DAGSOORT = 91;
    static readonly MOETEN_UNIEK_ZIJN = 92;
    static readonly IS_GEVUURD = 93;
    static readonly IS_INCONSISTENT = 94;
    static readonly CONSISTENTIEREGEL = 95;
    static readonly REGEL = 96;
    static readonly REGELGROEP = 97;
    static readonly BESLISTABEL = 98;
    static readonly OBJECTTYPE = 99;
    static readonly DOMEIN = 100;
    static readonly LIJST = 101;
    static readonly DIMENSIE = 102;
    static readonly EENHEIDSYSTEEM = 103;
    static readonly PARAMETER = 104;
    static readonly FEITTYPE = 105;
    static readonly DAGSOORT = 106;
    static readonly DAARBIJ_GELDT = 107;
    static readonly GELDIG = 108;
    static readonly HEBBEN = 109;
    static readonly HEEFT = 110;
    static readonly INDIEN = 111;
    static readonly IS_RECURSIEF = 112;
    static readonly IS = 113;
    static readonly MOET = 114;
    static readonly MOETEN = 115;
    static readonly WORDT_VERDEELD_OVER = 116;
    static readonly WORDT = 117;
    static readonly VOLDAAN = 118;
    static readonly ZIJN = 119;
    static readonly HAAR = 120;
    static readonly HUN = 121;
    static readonly AAN = 122;
    static readonly AFGEROND_OP = 123;
    static readonly ALLE = 124;
    static readonly EERDER_DAN = 125;
    static readonly GEDEELD_DOOR = 126;
    static readonly GEDEELD_DOOR_ABS = 127;
    static readonly GELIJK_AAN = 128;
    static readonly GEVULD = 129;
    static readonly GEVUURD = 130;
    static readonly GROTER_DAN = 131;
    static readonly INCONSISTENT = 132;
    static readonly KLEINER_DAN = 133;
    static readonly LATER_DAN = 134;
    static readonly LEEG = 135;
    static readonly MAAL = 136;
    static readonly MIN = 137;
    static readonly NAAR_BENEDEN = 138;
    static readonly NAAR_BOVEN = 139;
    static readonly NIET = 140;
    static readonly ONGELIJK_ZIJN_AAN = 141;
    static readonly ONGELIJK_AAN = 142;
    static readonly PLUS = 143;
    static readonly REKENKUNDIG = 144;
    static readonly RICHTING_NUL = 145;
    static readonly TOT = 146;
    static readonly TOT_DE_MACHT = 147;
    static readonly TOT_EN_MET = 148;
    static readonly UNIEK = 149;
    static readonly VANAF = 150;
    static readonly VERENIGD_MET = 151;
    static readonly VERMINDERD_MET = 152;
    static readonly VOLDOEN = 153;
    static readonly VOLDOET = 154;
    static readonly WEG_VAN_NUL = 155;
    static readonly DE_WORTEL_VAN = 156;
    static readonly TENMINSTE = 157;
    static readonly TEN_MINSTE = 158;
    static readonly TEN_HOOGSTE = 159;
    static readonly PRECIES = 160;
    static readonly VOORWAARDE = 161;
    static readonly VOORWAARDEN = 162;
    static readonly BEZITTELIJK = 163;
    static readonly BIJVOEGLIJK = 164;
    static readonly BEZIELD = 165;
    static readonly BOOLEAN = 166;
    static readonly CIJFERS = 167;
    static readonly DATUM_IN_DAGEN = 168;
    static readonly DECIMALEN = 169;
    static readonly ENUMERATIE = 170;
    static readonly GEDIMENSIONEERD_MET = 171;
    static readonly GEHEEL_GETAL = 172;
    static readonly GETAL = 173;
    static readonly KENMERK = 174;
    static readonly KENMERKEN = 175;
    static readonly MET = 176;
    static readonly MET_EENHEID = 177;
    static readonly MV_START = 178;
    static readonly NEGATIEF = 179;
    static readonly NIET_NEGATIEF = 180;
    static readonly NUMERIEK = 181;
    static readonly PERCENTAGE = 182;
    static readonly POSITIEF = 183;
    static readonly ROL = 184;
    static readonly ROLLEN = 185;
    static readonly TEKST = 186;
    static readonly VOOR_ELK_JAAR = 187;
    static readonly VOOR_ELKE_DAG = 188;
    static readonly VOOR_ELKE_MAAND = 189;
    static readonly AANTAL = 190;
    static readonly EERSTE_VAN = 191;
    static readonly IN_HELE = 192;
    static readonly LAATSTE_VAN = 193;
    static readonly REEKS_VAN_TEKSTEN_EN_WAARDEN = 194;
    static readonly SOM_VAN = 195;
    static readonly TIJDSDUUR_VAN = 196;
    static readonly AFNEMENDE = 197;
    static readonly IN_GELIJKE_DELEN = 198;
    static readonly OVER_VERDELING = 199;
    static readonly TOENEMENDE = 200;
    static readonly DRIE_TELWOORD = 201;
    static readonly EEN_TELWOORD = 202;
    static readonly GEEN_VAN_DE = 203;
    static readonly GEEN = 204;
    static readonly TWEE_TELWOORD = 205;
    static readonly VIER_TELWOORD = 206;
    static readonly ALTIJD = 207;
    static readonly BIJ = 208;
    static readonly DAG = 209;
    static readonly DAGEN = 210;
    static readonly DAT = 211;
    static readonly DE = 212;
    static readonly DD_PUNT = 213;
    static readonly DIE = 214;
    static readonly EEN = 215;
    static readonly EN = 216;
    static readonly HET = 217;
    static readonly MEERDERE = 218;
    static readonly HIJ = 219;
    static readonly IN = 220;
    static readonly JAAR = 221;
    static readonly JAREN = 222;
    static readonly KWARTAAL = 223;
    static readonly MAAND = 224;
    static readonly MAANDEN = 225;
    static readonly MILLISECONDE = 226;
    static readonly MINUUT = 227;
    static readonly MINUTEN = 228;
    static readonly OF = 229;
    static readonly ONWAAR = 230;
    static readonly OP = 231;
    static readonly OUDER = 232;
    static readonly OVER = 233;
    static readonly PERIODE = 234;
    static readonly REKENDATUM = 235;
    static readonly REKENJAAR = 236;
    static readonly REGELVERSIE = 237;
    static readonly SECONDE = 238;
    static readonly SECONDEN = 239;
    static readonly TM = 240;
    static readonly UIT = 241;
    static readonly UUR = 242;
    static readonly UREN = 243;
    static readonly VAN = 244;
    static readonly VOLGENDE_VOORWAARDE = 245;
    static readonly VOLGENDE_VOORWAARDEN = 246;
    static readonly VOLGENDE = 247;
    static readonly VOOR = 248;
    static readonly WAAR = 249;
    static readonly WEEK = 250;
    static readonly WEKEN = 251;
    static readonly ER = 252;
    static readonly METER = 253;
    static readonly KILOGRAM = 254;
    static readonly VOET = 255;
    static readonly POND = 256;
    static readonly MIJL = 257;
    static readonly M = 258;
    static readonly KG = 259;
    static readonly S = 260;
    static readonly FT = 261;
    static readonly LB = 262;
    static readonly MI = 263;
    static readonly EURO_SYMBOL = 264;
    static readonly DOLLAR_SYMBOL = 265;
    static readonly DEGREE_SYMBOL = 266;
    static readonly IDENTIFIER = 267;
    static readonly NUMBER = 268;
    static readonly EQUALS = 269;
    static readonly DATE_TIME_LITERAL = 270;
    static readonly PERCENTAGE_LITERAL = 271;
    static readonly STRING_LITERAL = 272;
    static readonly ENUM_LITERAL = 273;
    static readonly LPAREN = 274;
    static readonly RPAREN = 275;
    static readonly LBRACE = 276;
    static readonly RBRACE = 277;
    static readonly COMMA = 278;
    static readonly DOT = 279;
    static readonly COLON = 280;
    static readonly SEMICOLON = 281;
    static readonly SLASH = 282;
    static readonly PERCENT_SIGN = 283;
    static readonly BULLET = 284;
    static readonly ASTERISK = 285;
    static readonly L_ANGLE_QUOTE = 286;
    static readonly R_ANGLE_QUOTE = 287;
    static readonly CARET = 288;
    static readonly DOUBLE_DOT = 289;
    static readonly WS = 290;
    static readonly LINE_COMMENT = 291;
    static readonly MINUS = 292;
    static readonly PIPE = 293;
    static readonly NVT = 294;
    static readonly EOF: number;
    static readonly RULE_regelSpraakDocument = 0;
    static readonly RULE_definitie = 1;
    static readonly RULE_beslistabel = 2;
    static readonly RULE_beslistabelTable = 3;
    static readonly RULE_beslistabelHeader = 4;
    static readonly RULE_beslistabelSeparator = 5;
    static readonly RULE_beslistabelRow = 6;
    static readonly RULE_beslistabelCellValue = 7;
    static readonly RULE_beslistabelColumnText = 8;
    static readonly RULE_identifier = 9;
    static readonly RULE_identifierOrKeyword = 10;
    static readonly RULE_identifierOrKeywordNoIs = 11;
    static readonly RULE_naamPhrase = 12;
    static readonly RULE_naamPhraseWithNumbers = 13;
    static readonly RULE_identifierOrKeywordWithNumbers = 14;
    static readonly RULE_naamPhraseNoIs = 15;
    static readonly RULE_naamwoord = 16;
    static readonly RULE_naamwoordWithNumbers = 17;
    static readonly RULE_naamwoordNoIs = 18;
    static readonly RULE_voorzetsel = 19;
    static readonly RULE_datumLiteral = 20;
    static readonly RULE_unit = 21;
    static readonly RULE_timeUnit = 22;
    static readonly RULE_objectTypeDefinition = 23;
    static readonly RULE_objectTypeMember = 24;
    static readonly RULE_kenmerkSpecificatie = 25;
    static readonly RULE_attribuutSpecificatie = 26;
    static readonly RULE_datatype = 27;
    static readonly RULE_lijstDatatype = 28;
    static readonly RULE_numeriekDatatype = 29;
    static readonly RULE_tekstDatatype = 30;
    static readonly RULE_percentageDatatype = 31;
    static readonly RULE_booleanDatatype = 32;
    static readonly RULE_datumTijdDatatype = 33;
    static readonly RULE_getalSpecificatie = 34;
    static readonly RULE_domeinDefinition = 35;
    static readonly RULE_domeinType = 36;
    static readonly RULE_enumeratieSpecificatie = 37;
    static readonly RULE_domeinRef = 38;
    static readonly RULE_objectTypeRef = 39;
    static readonly RULE_eenheidsysteemDefinition = 40;
    static readonly RULE_eenheidEntry = 41;
    static readonly RULE_unitIdentifier = 42;
    static readonly RULE_eenheidExpressie = 43;
    static readonly RULE_eenheidMacht = 44;
    static readonly RULE_dimensieDefinition = 45;
    static readonly RULE_voorzetselSpecificatie = 46;
    static readonly RULE_labelWaardeSpecificatie = 47;
    static readonly RULE_tijdlijn = 48;
    static readonly RULE_dimensieRef = 49;
    static readonly RULE_parameterDefinition = 50;
    static readonly RULE_parameterNamePhrase = 51;
    static readonly RULE_parameterNamePart = 52;
    static readonly RULE_parameterMetLidwoord = 53;
    static readonly RULE_feitTypeDefinition = 54;
    static readonly RULE_rolDefinition = 55;
    static readonly RULE_rolObjectType = 56;
    static readonly RULE_rolContentWords = 57;
    static readonly RULE_cardinalityLine = 58;
    static readonly RULE_cardinalityWord = 59;
    static readonly RULE_regel = 60;
    static readonly RULE_regelGroep = 61;
    static readonly RULE_regelName = 62;
    static readonly RULE_regelNameExtension = 63;
    static readonly RULE_regelVersie = 64;
    static readonly RULE_versieGeldigheid = 65;
    static readonly RULE_resultaatDeel = 66;
    static readonly RULE_consistencyOperator = 67;
    static readonly RULE_feitCreatiePattern = 68;
    static readonly RULE_feitCreatieRolPhrase = 69;
    static readonly RULE_feitCreatieSubjectPhrase = 70;
    static readonly RULE_feitCreatieSubjectWord = 71;
    static readonly RULE_feitCreatieWord = 72;
    static readonly RULE_voorzetselNietVan = 73;
    static readonly RULE_objectCreatie = 74;
    static readonly RULE_objectAttributeInit = 75;
    static readonly RULE_attributeInitVervolg = 76;
    static readonly RULE_simpleNaamwoord = 77;
    static readonly RULE_consistentieregel = 78;
    static readonly RULE_uniekzijnResultaat = 79;
    static readonly RULE_alleAttributenVanObjecttype = 80;
    static readonly RULE_inconsistentResultaat = 81;
    static readonly RULE_voorwaardeDeel = 82;
    static readonly RULE_toplevelSamengesteldeVoorwaarde = 83;
    static readonly RULE_voorwaardeKwantificatie = 84;
    static readonly RULE_samengesteldeVoorwaardeOnderdeel = 85;
    static readonly RULE_outerBulletPrefix = 86;
    static readonly RULE_nestedBulletPrefix = 87;
    static readonly RULE_bulletPrefix = 88;
    static readonly RULE_elementaireVoorwaarde = 89;
    static readonly RULE_genesteSamengesteldeVoorwaarde = 90;
    static readonly RULE_genesteSamengesteldeVoorwaardeOnderdeel = 91;
    static readonly RULE_onderwerpReferentie = 92;
    static readonly RULE_onderwerpReferentieWithNumbers = 93;
    static readonly RULE_onderwerpBasis = 94;
    static readonly RULE_onderwerpBasisWithNumbers = 95;
    static readonly RULE_basisOnderwerp = 96;
    static readonly RULE_basisOnderwerpWithNumbers = 97;
    static readonly RULE_attribuutReferentie = 98;
    static readonly RULE_attribuutMetLidwoord = 99;
    static readonly RULE_kenmerkNaam = 100;
    static readonly RULE_kenmerkPhrase = 101;
    static readonly RULE_bezieldeReferentie = 102;
    static readonly RULE_aggregationSubject = 103;
    static readonly RULE_predicaat = 104;
    static readonly RULE_elementairPredicaat = 105;
    static readonly RULE_objectPredicaat = 106;
    static readonly RULE_eenzijdigeObjectVergelijking = 107;
    static readonly RULE_rolNaam = 108;
    static readonly RULE_attribuutVergelijkingsPredicaat = 109;
    static readonly RULE_getalPredicaat = 110;
    static readonly RULE_tekstPredicaat = 111;
    static readonly RULE_datumPredicaat = 112;
    static readonly RULE_samengesteldPredicaat = 113;
    static readonly RULE_samengesteldeVoorwaardeOnderdeelInPredicaat = 114;
    static readonly RULE_elementaireVoorwaardeInPredicaat = 115;
    static readonly RULE_vergelijkingInPredicaat = 116;
    static readonly RULE_genesteSamengesteldeVoorwaardeInPredicaat = 117;
    static readonly RULE_getalVergelijkingsOperatorMeervoud = 118;
    static readonly RULE_tekstVergelijkingsOperatorMeervoud = 119;
    static readonly RULE_datumVergelijkingsOperatorMeervoud = 120;
    static readonly RULE_getalExpressie = 121;
    static readonly RULE_tekstExpressie = 122;
    static readonly RULE_datumExpressie = 123;
    static readonly RULE_variabeleDeel = 124;
    static readonly RULE_variabeleToekenning = 125;
    static readonly RULE_variabeleExpressie = 126;
    static readonly RULE_expressie = 127;
    static readonly RULE_simpleExpressie = 128;
    static readonly RULE_logicalExpression = 129;
    static readonly RULE_comparisonExpression = 130;
    static readonly RULE_literalValue = 131;
    static readonly RULE_gelijkIsAanOperator = 132;
    static readonly RULE_comparisonOperator = 133;
    static readonly RULE_additiveExpression = 134;
    static readonly RULE_additiveOperator = 135;
    static readonly RULE_multiplicativeExpression = 136;
    static readonly RULE_multiplicativeOperator = 137;
    static readonly RULE_powerExpression = 138;
    static readonly RULE_powerOperator = 139;
    static readonly RULE_primaryExpression = 140;
    static readonly RULE_afronding = 141;
    static readonly RULE_begrenzing = 142;
    static readonly RULE_begrenzingMinimum = 143;
    static readonly RULE_begrenzingMaximum = 144;
    static readonly RULE_conditieBijExpressie = 145;
    static readonly RULE_periodevergelijkingElementair = 146;
    static readonly RULE_periodevergelijkingEnkelvoudig = 147;
    static readonly RULE_periodeDefinitie = 148;
    static readonly RULE_dateExpression = 149;
    static readonly RULE_getalAggregatieFunctie = 150;
    static readonly RULE_datumAggregatieFunctie = 151;
    static readonly RULE_dimensieSelectie = 152;
    static readonly RULE_aggregerenOverAlleDimensies = 153;
    static readonly RULE_aggregerenOverVerzameling = 154;
    static readonly RULE_aggregerenOverBereik = 155;
    static readonly RULE_unaryCondition = 156;
    static readonly RULE_regelStatusCondition = 157;
    static readonly RULE_subordinateClauseExpression = 158;
    static readonly RULE_dagsoortDefinition = 159;
    static readonly RULE_tekstreeksExpr = 160;
    static readonly RULE_verdelingResultaat = 161;
    static readonly RULE_verdelingMethodeSimple = 162;
    static readonly RULE_verdelingMethodeMultiLine = 163;
    static readonly RULE_verdelingMethodeBulletList = 164;
    static readonly RULE_verdelingMethodeBullet = 165;
    static readonly RULE_verdelingMethode = 166;
    static readonly RULE_verdelingRest = 167;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    regelSpraakDocument(): RegelSpraakDocumentContext;
    definitie(): DefinitieContext;
    beslistabel(): BeslistabelContext;
    beslistabelTable(): BeslistabelTableContext;
    beslistabelHeader(): BeslistabelHeaderContext;
    beslistabelSeparator(): BeslistabelSeparatorContext;
    beslistabelRow(): BeslistabelRowContext;
    beslistabelCellValue(): BeslistabelCellValueContext;
    beslistabelColumnText(): BeslistabelColumnTextContext;
    identifier(): IdentifierContext;
    identifierOrKeyword(): IdentifierOrKeywordContext;
    identifierOrKeywordNoIs(): IdentifierOrKeywordNoIsContext;
    naamPhrase(): NaamPhraseContext;
    naamPhraseWithNumbers(): NaamPhraseWithNumbersContext;
    identifierOrKeywordWithNumbers(): IdentifierOrKeywordWithNumbersContext;
    naamPhraseNoIs(): NaamPhraseNoIsContext;
    naamwoord(): NaamwoordContext;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    naamwoordNoIs(): NaamwoordNoIsContext;
    voorzetsel(): VoorzetselContext;
    datumLiteral(): DatumLiteralContext;
    unit(): UnitContext;
    timeUnit(): TimeUnitContext;
    objectTypeDefinition(): ObjectTypeDefinitionContext;
    objectTypeMember(): ObjectTypeMemberContext;
    kenmerkSpecificatie(): KenmerkSpecificatieContext;
    attribuutSpecificatie(): AttribuutSpecificatieContext;
    datatype(): DatatypeContext;
    lijstDatatype(): LijstDatatypeContext;
    numeriekDatatype(): NumeriekDatatypeContext;
    tekstDatatype(): TekstDatatypeContext;
    percentageDatatype(): PercentageDatatypeContext;
    booleanDatatype(): BooleanDatatypeContext;
    datumTijdDatatype(): DatumTijdDatatypeContext;
    getalSpecificatie(): GetalSpecificatieContext;
    domeinDefinition(): DomeinDefinitionContext;
    domeinType(): DomeinTypeContext;
    enumeratieSpecificatie(): EnumeratieSpecificatieContext;
    domeinRef(): DomeinRefContext;
    objectTypeRef(): ObjectTypeRefContext;
    eenheidsysteemDefinition(): EenheidsysteemDefinitionContext;
    eenheidEntry(): EenheidEntryContext;
    unitIdentifier(): UnitIdentifierContext;
    eenheidExpressie(): EenheidExpressieContext;
    eenheidMacht(): EenheidMachtContext;
    dimensieDefinition(): DimensieDefinitionContext;
    voorzetselSpecificatie(): VoorzetselSpecificatieContext;
    labelWaardeSpecificatie(): LabelWaardeSpecificatieContext;
    tijdlijn(): TijdlijnContext;
    dimensieRef(): DimensieRefContext;
    parameterDefinition(): ParameterDefinitionContext;
    parameterNamePhrase(): ParameterNamePhraseContext;
    parameterNamePart(): ParameterNamePartContext;
    parameterMetLidwoord(): ParameterMetLidwoordContext;
    feitTypeDefinition(): FeitTypeDefinitionContext;
    rolDefinition(): RolDefinitionContext;
    rolObjectType(): RolObjectTypeContext;
    rolContentWords(): RolContentWordsContext;
    cardinalityLine(): CardinalityLineContext;
    cardinalityWord(): CardinalityWordContext;
    regel(): RegelContext;
    regelGroep(): RegelGroepContext;
    regelName(): RegelNameContext;
    regelNameExtension(): RegelNameExtensionContext;
    regelVersie(): RegelVersieContext;
    versieGeldigheid(): VersieGeldigheidContext;
    resultaatDeel(): ResultaatDeelContext;
    consistencyOperator(): ConsistencyOperatorContext;
    feitCreatiePattern(): FeitCreatiePatternContext;
    feitCreatieRolPhrase(): FeitCreatieRolPhraseContext;
    feitCreatieSubjectPhrase(): FeitCreatieSubjectPhraseContext;
    feitCreatieSubjectWord(): FeitCreatieSubjectWordContext;
    feitCreatieWord(): FeitCreatieWordContext;
    voorzetselNietVan(): VoorzetselNietVanContext;
    objectCreatie(): ObjectCreatieContext;
    objectAttributeInit(): ObjectAttributeInitContext;
    attributeInitVervolg(): AttributeInitVervolgContext;
    simpleNaamwoord(): SimpleNaamwoordContext;
    consistentieregel(): ConsistentieregelContext;
    uniekzijnResultaat(): UniekzijnResultaatContext;
    alleAttributenVanObjecttype(): AlleAttributenVanObjecttypeContext;
    inconsistentResultaat(): InconsistentResultaatContext;
    voorwaardeDeel(): VoorwaardeDeelContext;
    toplevelSamengesteldeVoorwaarde(): ToplevelSamengesteldeVoorwaardeContext;
    voorwaardeKwantificatie(): VoorwaardeKwantificatieContext;
    samengesteldeVoorwaardeOnderdeel(): SamengesteldeVoorwaardeOnderdeelContext;
    outerBulletPrefix(): OuterBulletPrefixContext;
    nestedBulletPrefix(): NestedBulletPrefixContext;
    bulletPrefix(): BulletPrefixContext;
    elementaireVoorwaarde(): ElementaireVoorwaardeContext;
    genesteSamengesteldeVoorwaarde(): GenesteSamengesteldeVoorwaardeContext;
    genesteSamengesteldeVoorwaardeOnderdeel(): GenesteSamengesteldeVoorwaardeOnderdeelContext;
    onderwerpReferentie(): OnderwerpReferentieContext;
    onderwerpReferentieWithNumbers(): OnderwerpReferentieWithNumbersContext;
    onderwerpBasis(): OnderwerpBasisContext;
    onderwerpBasisWithNumbers(): OnderwerpBasisWithNumbersContext;
    basisOnderwerp(): BasisOnderwerpContext;
    basisOnderwerpWithNumbers(): BasisOnderwerpWithNumbersContext;
    attribuutReferentie(): AttribuutReferentieContext;
    attribuutMetLidwoord(): AttribuutMetLidwoordContext;
    kenmerkNaam(): KenmerkNaamContext;
    kenmerkPhrase(): KenmerkPhraseContext;
    bezieldeReferentie(): BezieldeReferentieContext;
    aggregationSubject(): AggregationSubjectContext;
    predicaat(): PredicaatContext;
    elementairPredicaat(): ElementairPredicaatContext;
    objectPredicaat(): ObjectPredicaatContext;
    eenzijdigeObjectVergelijking(): EenzijdigeObjectVergelijkingContext;
    rolNaam(): RolNaamContext;
    attribuutVergelijkingsPredicaat(): AttribuutVergelijkingsPredicaatContext;
    getalPredicaat(): GetalPredicaatContext;
    tekstPredicaat(): TekstPredicaatContext;
    datumPredicaat(): DatumPredicaatContext;
    samengesteldPredicaat(): SamengesteldPredicaatContext;
    samengesteldeVoorwaardeOnderdeelInPredicaat(): SamengesteldeVoorwaardeOnderdeelInPredicaatContext;
    elementaireVoorwaardeInPredicaat(): ElementaireVoorwaardeInPredicaatContext;
    vergelijkingInPredicaat(): VergelijkingInPredicaatContext;
    genesteSamengesteldeVoorwaardeInPredicaat(): GenesteSamengesteldeVoorwaardeInPredicaatContext;
    getalVergelijkingsOperatorMeervoud(): GetalVergelijkingsOperatorMeervoudContext;
    tekstVergelijkingsOperatorMeervoud(): TekstVergelijkingsOperatorMeervoudContext;
    datumVergelijkingsOperatorMeervoud(): DatumVergelijkingsOperatorMeervoudContext;
    getalExpressie(): GetalExpressieContext;
    tekstExpressie(): TekstExpressieContext;
    datumExpressie(): DatumExpressieContext;
    variabeleDeel(): VariabeleDeelContext;
    variabeleToekenning(): VariabeleToekenningContext;
    variabeleExpressie(): VariabeleExpressieContext;
    expressie(): ExpressieContext;
    simpleExpressie(): SimpleExpressieContext;
    logicalExpression(): LogicalExpressionContext;
    comparisonExpression(): ComparisonExpressionContext;
    literalValue(): LiteralValueContext;
    gelijkIsAanOperator(): GelijkIsAanOperatorContext;
    comparisonOperator(): ComparisonOperatorContext;
    additiveExpression(): AdditiveExpressionContext;
    additiveOperator(): AdditiveOperatorContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    multiplicativeOperator(): MultiplicativeOperatorContext;
    powerExpression(): PowerExpressionContext;
    powerOperator(): PowerOperatorContext;
    primaryExpression(): PrimaryExpressionContext;
    primaryExpression(_p: number): PrimaryExpressionContext;
    afronding(): AfrondingContext;
    begrenzing(): BegrenzingContext;
    begrenzingMinimum(): BegrenzingMinimumContext;
    begrenzingMaximum(): BegrenzingMaximumContext;
    conditieBijExpressie(): ConditieBijExpressieContext;
    periodevergelijkingElementair(): PeriodevergelijkingElementairContext;
    periodevergelijkingEnkelvoudig(): PeriodevergelijkingEnkelvoudigContext;
    periodeDefinitie(): PeriodeDefinitieContext;
    dateExpression(): DateExpressionContext;
    getalAggregatieFunctie(): GetalAggregatieFunctieContext;
    datumAggregatieFunctie(): DatumAggregatieFunctieContext;
    dimensieSelectie(): DimensieSelectieContext;
    aggregerenOverAlleDimensies(): AggregerenOverAlleDimensiesContext;
    aggregerenOverVerzameling(): AggregerenOverVerzamelingContext;
    aggregerenOverBereik(): AggregerenOverBereikContext;
    unaryCondition(): UnaryConditionContext;
    regelStatusCondition(): RegelStatusConditionContext;
    subordinateClauseExpression(): SubordinateClauseExpressionContext;
    dagsoortDefinition(): DagsoortDefinitionContext;
    tekstreeksExpr(): TekstreeksExprContext;
    verdelingResultaat(): VerdelingResultaatContext;
    verdelingMethodeSimple(): VerdelingMethodeSimpleContext;
    verdelingMethodeMultiLine(): VerdelingMethodeMultiLineContext;
    verdelingMethodeBulletList(): VerdelingMethodeBulletListContext;
    verdelingMethodeBullet(): VerdelingMethodeBulletContext;
    verdelingMethode(): VerdelingMethodeContext;
    verdelingRest(): VerdelingRestContext;
    sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private primaryExpression_sempred;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
export declare class RegelSpraakDocumentContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    EOF(): TerminalNode;
    definitie_list(): DefinitieContext[];
    definitie(i: number): DefinitieContext;
    regel_list(): RegelContext[];
    regel(i: number): RegelContext;
    regelGroep_list(): RegelGroepContext[];
    regelGroep(i: number): RegelGroepContext;
    beslistabel_list(): BeslistabelContext[];
    beslistabel(i: number): BeslistabelContext;
    consistentieregel_list(): ConsistentieregelContext[];
    consistentieregel(i: number): ConsistentieregelContext;
    eenheidsysteemDefinition_list(): EenheidsysteemDefinitionContext[];
    eenheidsysteemDefinition(i: number): EenheidsysteemDefinitionContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DefinitieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    objectTypeDefinition(): ObjectTypeDefinitionContext;
    domeinDefinition(): DomeinDefinitionContext;
    parameterDefinition(): ParameterDefinitionContext;
    dimensieDefinition(): DimensieDefinitionContext;
    feitTypeDefinition(): FeitTypeDefinitionContext;
    dagsoortDefinition(): DagsoortDefinitionContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    BESLISTABEL(): TerminalNode;
    naamwoord(): NaamwoordContext;
    beslistabelTable(): BeslistabelTableContext;
    regelVersie(): RegelVersieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelTableContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    beslistabelHeader(): BeslistabelHeaderContext;
    beslistabelSeparator(): BeslistabelSeparatorContext;
    beslistabelRow_list(): BeslistabelRowContext[];
    beslistabelRow(i: number): BeslistabelRowContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelHeaderContext extends ParserRuleContext {
    _resultColumn: BeslistabelColumnTextContext;
    _beslistabelColumnText: BeslistabelColumnTextContext;
    _conditionColumns: BeslistabelColumnTextContext[];
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PIPE_list(): TerminalNode[];
    PIPE(i: number): TerminalNode;
    beslistabelColumnText_list(): BeslistabelColumnTextContext[];
    beslistabelColumnText(i: number): BeslistabelColumnTextContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelSeparatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PIPE_list(): TerminalNode[];
    PIPE(i: number): TerminalNode;
    MINUS_list(): TerminalNode[];
    MINUS(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelRowContext extends ParserRuleContext {
    _rowNumber: Token;
    _resultExpression: ExpressieContext;
    _beslistabelCellValue: BeslistabelCellValueContext;
    _conditionValues: BeslistabelCellValueContext[];
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PIPE_list(): TerminalNode[];
    PIPE(i: number): TerminalNode;
    NUMBER(): TerminalNode;
    expressie(): ExpressieContext;
    beslistabelCellValue_list(): BeslistabelCellValueContext[];
    beslistabelCellValue(i: number): BeslistabelCellValueContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelCellValueContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    expressie(): ExpressieContext;
    NVT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BeslistabelColumnTextContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PIPE_list(): TerminalNode[];
    PIPE(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class IdentifierContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class IdentifierOrKeywordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    DAG(): TerminalNode;
    DAGEN(): TerminalNode;
    MAAND(): TerminalNode;
    JAAR(): TerminalNode;
    AANTAL(): TerminalNode;
    PERIODE(): TerminalNode;
    REGEL(): TerminalNode;
    VOORWAARDE(): TerminalNode;
    HEEFT(): TerminalNode;
    ALLE(): TerminalNode;
    INCONSISTENT(): TerminalNode;
    IS(): TerminalNode;
    KWARTAAL(): TerminalNode;
    METER(): TerminalNode;
    EEN_TELWOORD(): TerminalNode;
    TWEE_TELWOORD(): TerminalNode;
    DRIE_TELWOORD(): TerminalNode;
    VIER_TELWOORD(): TerminalNode;
    OUDER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class IdentifierOrKeywordNoIsContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    DAG(): TerminalNode;
    DAGEN(): TerminalNode;
    MAAND(): TerminalNode;
    JAAR(): TerminalNode;
    AANTAL(): TerminalNode;
    PERIODE(): TerminalNode;
    REGEL(): TerminalNode;
    VOORWAARDE(): TerminalNode;
    HEEFT(): TerminalNode;
    ALLE(): TerminalNode;
    INCONSISTENT(): TerminalNode;
    KWARTAAL(): TerminalNode;
    METER(): TerminalNode;
    EEN_TELWOORD(): TerminalNode;
    TWEE_TELWOORD(): TerminalNode;
    DRIE_TELWOORD(): TerminalNode;
    VIER_TELWOORD(): TerminalNode;
    OUDER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamPhraseContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeyword_list(): IdentifierOrKeywordContext[];
    identifierOrKeyword(i: number): IdentifierOrKeywordContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    ZIJN(): TerminalNode;
    NIEUWE(): TerminalNode;
    MET(): TerminalNode;
    NIET(): TerminalNode;
    AANTAL(): TerminalNode;
    DAGEN(): TerminalNode;
    IN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamPhraseWithNumbersContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeywordWithNumbers_list(): IdentifierOrKeywordWithNumbersContext[];
    identifierOrKeywordWithNumbers(i: number): IdentifierOrKeywordWithNumbersContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    ZIJN(): TerminalNode;
    NIEUWE(): TerminalNode;
    MET(): TerminalNode;
    NIET(): TerminalNode;
    AANTAL(): TerminalNode;
    DAGEN(): TerminalNode;
    IN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class IdentifierOrKeywordWithNumbersContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeyword(): IdentifierOrKeywordContext;
    NUMBER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamPhraseNoIsContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeywordNoIs_list(): IdentifierOrKeywordNoIsContext[];
    identifierOrKeywordNoIs(i: number): IdentifierOrKeywordNoIsContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    ZIJN(): TerminalNode;
    NIEUWE(): TerminalNode;
    MET(): TerminalNode;
    NIET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamwoordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamPhrase_list(): NaamPhraseContext[];
    naamPhrase(i: number): NaamPhraseContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamwoordWithNumbersContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamPhraseWithNumbers_list(): NaamPhraseWithNumbersContext[];
    naamPhraseWithNumbers(i: number): NaamPhraseWithNumbersContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamwoordNoIsContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamPhraseNoIs_list(): NaamPhraseNoIsContext[];
    naamPhraseNoIs(i: number): NaamPhraseNoIsContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VoorzetselContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    VAN(): TerminalNode;
    IN(): TerminalNode;
    VOOR(): TerminalNode;
    OVER(): TerminalNode;
    OP(): TerminalNode;
    BIJ(): TerminalNode;
    UIT(): TerminalNode;
    TOT(): TerminalNode;
    EN(): TerminalNode;
    MET(): TerminalNode;
    OF(): TerminalNode;
    TOT_EN_MET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumLiteralContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DATE_TIME_LITERAL(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnitContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TimeUnitContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DAG(): TerminalNode;
    DAGEN(): TerminalNode;
    MAAND(): TerminalNode;
    MAANDEN(): TerminalNode;
    JAAR(): TerminalNode;
    JAREN(): TerminalNode;
    WEEK(): TerminalNode;
    WEKEN(): TerminalNode;
    UUR(): TerminalNode;
    UREN(): TerminalNode;
    MINUUT(): TerminalNode;
    MINUTEN(): TerminalNode;
    SECONDE(): TerminalNode;
    SECONDEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectTypeDefinitionContext extends ParserRuleContext {
    _IDENTIFIER: Token;
    _plural: Token[];
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    OBJECTTYPE(): TerminalNode;
    naamwoordNoIs(): NaamwoordNoIsContext;
    MV_START(): TerminalNode;
    RPAREN(): TerminalNode;
    BEZIELD(): TerminalNode;
    objectTypeMember_list(): ObjectTypeMemberContext[];
    objectTypeMember(i: number): ObjectTypeMemberContext;
    IDENTIFIER_list(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectTypeMemberContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    SEMICOLON(): TerminalNode;
    kenmerkSpecificatie(): KenmerkSpecificatieContext;
    attribuutSpecificatie(): AttribuutSpecificatieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class KenmerkSpecificatieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    KENMERK(): TerminalNode;
    identifier(): IdentifierContext;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    tijdlijn(): TijdlijnContext;
    BIJVOEGLIJK(): TerminalNode;
    BEZITTELIJK(): TerminalNode;
    IS(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AttribuutSpecificatieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    datatype(): DatatypeContext;
    domeinRef(): DomeinRefContext;
    objectTypeRef(): ObjectTypeRefContext;
    MET_EENHEID(): TerminalNode;
    unitIdentifier(): UnitIdentifierContext;
    GEDIMENSIONEERD_MET(): TerminalNode;
    dimensieRef_list(): DimensieRefContext[];
    dimensieRef(i: number): DimensieRefContext;
    tijdlijn(): TijdlijnContext;
    EN_list(): TerminalNode[];
    EN(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    numeriekDatatype(): NumeriekDatatypeContext;
    tekstDatatype(): TekstDatatypeContext;
    booleanDatatype(): BooleanDatatypeContext;
    datumTijdDatatype(): DatumTijdDatatypeContext;
    lijstDatatype(): LijstDatatypeContext;
    percentageDatatype(): PercentageDatatypeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class LijstDatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    LIJST(): TerminalNode;
    VAN(): TerminalNode;
    datatype(): DatatypeContext;
    domeinRef(): DomeinRefContext;
    objectTypeRef(): ObjectTypeRefContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NumeriekDatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    NUMERIEK(): TerminalNode;
    LPAREN(): TerminalNode;
    getalSpecificatie(): GetalSpecificatieContext;
    RPAREN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TekstDatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    TEKST(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PercentageDatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PERCENTAGE(): TerminalNode;
    LPAREN(): TerminalNode;
    getalSpecificatie(): GetalSpecificatieContext;
    RPAREN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BooleanDatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    BOOLEAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumTijdDatatypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DATUM_IN_DAGEN(): TerminalNode;
    DATUM_TIJD_MILLIS(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GetalSpecificatieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    GEHEEL_GETAL(): TerminalNode;
    GETAL(): TerminalNode;
    NEGATIEF(): TerminalNode;
    NIET_NEGATIEF(): TerminalNode;
    POSITIEF(): TerminalNode;
    MET(): TerminalNode;
    NUMBER(): TerminalNode;
    DECIMALEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DomeinDefinitionContext extends ParserRuleContext {
    _name: Token;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DOMEIN(): TerminalNode;
    IS_VAN_HET_TYPE(): TerminalNode;
    domeinType(): DomeinTypeContext;
    IDENTIFIER(): TerminalNode;
    MET_EENHEID(): TerminalNode;
    eenheidExpressie(): EenheidExpressieContext;
    SEMICOLON(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DomeinTypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    enumeratieSpecificatie(): EnumeratieSpecificatieContext;
    numeriekDatatype(): NumeriekDatatypeContext;
    tekstDatatype(): TekstDatatypeContext;
    booleanDatatype(): BooleanDatatypeContext;
    datumTijdDatatype(): DatumTijdDatatypeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EnumeratieSpecificatieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ENUMERATIE(): TerminalNode;
    ENUM_LITERAL_list(): TerminalNode[];
    ENUM_LITERAL(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DomeinRefContext extends ParserRuleContext {
    _name: Token;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectTypeRefContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EenheidsysteemDefinitionContext extends ParserRuleContext {
    _name: IdentifierContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    EENHEIDSYSTEEM(): TerminalNode;
    identifier(): IdentifierContext;
    eenheidEntry_list(): EenheidEntryContext[];
    eenheidEntry(i: number): EenheidEntryContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EenheidEntryContext extends ParserRuleContext {
    _unitName: UnitIdentifierContext;
    _pluralName: UnitIdentifierContext;
    _abbrev: UnitIdentifierContext;
    _symbol_: UnitIdentifierContext;
    _value: Token;
    _targetUnit: UnitIdentifierContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    HET(): TerminalNode;
    unitIdentifier_list(): UnitIdentifierContext[];
    unitIdentifier(i: number): UnitIdentifierContext;
    MV_START(): TerminalNode;
    RPAREN(): TerminalNode;
    EQUALS(): TerminalNode;
    NUMBER(): TerminalNode;
    SLASH(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnitIdentifierContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    METER(): TerminalNode;
    KILOGRAM(): TerminalNode;
    MILLISECONDE(): TerminalNode;
    SECONDE(): TerminalNode;
    MINUUT(): TerminalNode;
    MINUTEN(): TerminalNode;
    UUR(): TerminalNode;
    UREN(): TerminalNode;
    VOET(): TerminalNode;
    POND(): TerminalNode;
    MIJL(): TerminalNode;
    M(): TerminalNode;
    KG(): TerminalNode;
    S(): TerminalNode;
    FT(): TerminalNode;
    LB(): TerminalNode;
    MIN(): TerminalNode;
    MI(): TerminalNode;
    EURO_SYMBOL(): TerminalNode;
    DOLLAR_SYMBOL(): TerminalNode;
    DEGREE_SYMBOL(): TerminalNode;
    DAG(): TerminalNode;
    DAGEN(): TerminalNode;
    MAAND(): TerminalNode;
    MAANDEN(): TerminalNode;
    JAAR(): TerminalNode;
    JAREN(): TerminalNode;
    WEEK(): TerminalNode;
    WEKEN(): TerminalNode;
    KWARTAAL(): TerminalNode;
    SECONDEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EenheidExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    eenheidMacht_list(): EenheidMachtContext[];
    eenheidMacht(i: number): EenheidMachtContext;
    SLASH(): TerminalNode;
    NUMBER(): TerminalNode;
    PERCENT_SIGN(): TerminalNode;
    EURO_SYMBOL(): TerminalNode;
    DOLLAR_SYMBOL(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EenheidMachtContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    unitIdentifier(): UnitIdentifierContext;
    CARET(): TerminalNode;
    NUMBER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DimensieDefinitionContext extends ParserRuleContext {
    _dimensieNaamMeervoud: NaamwoordContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DIMENSIE(): TerminalNode;
    naamwoord_list(): NaamwoordContext[];
    naamwoord(i: number): NaamwoordContext;
    BESTAANDE_UIT(): TerminalNode;
    voorzetselSpecificatie(): VoorzetselSpecificatieContext;
    COMMA(): TerminalNode;
    labelWaardeSpecificatie_list(): LabelWaardeSpecificatieContext[];
    labelWaardeSpecificatie(i: number): LabelWaardeSpecificatieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VoorzetselSpecificatieContext extends ParserRuleContext {
    _vz: VoorzetselContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    NA_HET_ATTRIBUUT_MET_VOORZETSEL(): TerminalNode;
    RPAREN(): TerminalNode;
    voorzetsel(): VoorzetselContext;
    COLON(): TerminalNode;
    VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class LabelWaardeSpecificatieContext extends ParserRuleContext {
    _dimWaarde: NaamwoordContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    NUMBER(): TerminalNode;
    DOT(): TerminalNode;
    naamwoord(): NaamwoordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TijdlijnContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    VOOR_ELKE_DAG(): TerminalNode;
    VOOR_ELKE_MAAND(): TerminalNode;
    VOOR_ELK_JAAR(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DimensieRefContext extends ParserRuleContext {
    _name: Token;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ParameterDefinitionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PARAMETER(): TerminalNode;
    parameterNamePhrase(): ParameterNamePhraseContext;
    COLON(): TerminalNode;
    datatype(): DatatypeContext;
    domeinRef(): DomeinRefContext;
    MET_EENHEID(): TerminalNode;
    eenheidExpressie(): EenheidExpressieContext;
    IS(): TerminalNode;
    expressie(): ExpressieContext;
    tijdlijn(): TijdlijnContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ParameterNamePhraseContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    parameterNamePart_list(): ParameterNamePartContext[];
    parameterNamePart(i: number): ParameterNamePartContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ParameterNamePartContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IDENTIFIER_list(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    AANTAL_list(): TerminalNode[];
    AANTAL(i: number): TerminalNode;
    NUMBER_list(): TerminalNode[];
    NUMBER(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ParameterMetLidwoordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    parameterNamePart_list(): ParameterNamePartContext[];
    parameterNamePart(i: number): ParameterNamePartContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    naamwoord(): NaamwoordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitTypeDefinitionContext extends ParserRuleContext {
    _feittypenaam: NaamwoordContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    FEITTYPE(): TerminalNode;
    rolDefinition_list(): RolDefinitionContext[];
    rolDefinition(i: number): RolDefinitionContext;
    cardinalityLine(): CardinalityLineContext;
    naamwoord(): NaamwoordContext;
    WEDERKERIG_FEITTYPE(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RolDefinitionContext extends ParserRuleContext {
    _article: Token;
    _content: RolContentWordsContext;
    _meervoud: NaamwoordContext;
    _objecttype: RolObjectTypeContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    rolContentWords(): RolContentWordsContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    MV_START(): TerminalNode;
    RPAREN(): TerminalNode;
    naamwoord(): NaamwoordContext;
    rolObjectType(): RolObjectTypeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RolObjectTypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeyword_list(): IdentifierOrKeywordContext[];
    identifierOrKeyword(i: number): IdentifierOrKeywordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RolContentWordsContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeyword_list(): IdentifierOrKeywordContext[];
    identifierOrKeyword(i: number): IdentifierOrKeywordContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class CardinalityLineContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    cardinalityWord_list(): CardinalityWordContext[];
    cardinalityWord(i: number): CardinalityWordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class CardinalityWordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    OBJECTTYPE(): TerminalNode;
    PARAMETER(): TerminalNode;
    REGEL(): TerminalNode;
    FEITTYPE(): TerminalNode;
    WEDERKERIG_FEITTYPE(): TerminalNode;
    DIMENSIE(): TerminalNode;
    DOMEIN(): TerminalNode;
    BESLISTABEL(): TerminalNode;
    CONSISTENTIEREGEL(): TerminalNode;
    EENHEIDSYSTEEM(): TerminalNode;
    DAGSOORT(): TerminalNode;
    SEMICOLON(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    REGEL(): TerminalNode;
    regelName(): RegelNameContext;
    regelVersie(): RegelVersieContext;
    resultaatDeel(): ResultaatDeelContext;
    NUMBER(): TerminalNode;
    voorwaardeDeel(): VoorwaardeDeelContext;
    DOT(): TerminalNode;
    variabeleDeel(): VariabeleDeelContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelGroepContext extends ParserRuleContext {
    _isRecursive: Token;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    REGELGROEP(): TerminalNode;
    naamwoord(): NaamwoordContext;
    regel_list(): RegelContext[];
    regel(i: number): RegelContext;
    consistentieregel_list(): ConsistentieregelContext[];
    consistentieregel(i: number): ConsistentieregelContext;
    IS_RECURSIEF(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelNameContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    regelNameExtension_list(): RegelNameExtensionContext[];
    regelNameExtension(i: number): RegelNameExtensionContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelNameExtensionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IN_GELIJKE_DELEN(): TerminalNode;
    COMMA(): TerminalNode;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    MET(): TerminalNode;
    EN(): TerminalNode;
    IS(): TerminalNode;
    GEEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelVersieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    GELDIG(): TerminalNode;
    versieGeldigheid(): VersieGeldigheidContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VersieGeldigheidContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ALTIJD(): TerminalNode;
    VANAF(): TerminalNode;
    datumLiteral_list(): DatumLiteralContext[];
    datumLiteral(i: number): DatumLiteralContext;
    TM(): TerminalNode;
    TOT_EN_MET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ResultaatDeelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: ResultaatDeelContext): void;
}
export declare class GelijkstellingResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    attribuutReferentie(): AttribuutReferentieContext;
    WORDT_BEREKEND_ALS(): TerminalNode;
    expressie(): ExpressieContext;
    WORDT_GESTELD_OP(): TerminalNode;
    WORDT_GEINITIALISEERD_OP(): TerminalNode;
    periodeDefinitie(): PeriodeDefinitieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RelationshipWithAttributeResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    onderwerpReferentie(): OnderwerpReferentieContext;
    HEEFT(): TerminalNode;
    naamwoord(): NaamwoordContext;
    MET(): TerminalNode;
    attribuutMetLidwoord(): AttribuutMetLidwoordContext;
    expressie(): ExpressieContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    GELIJK_AAN(): TerminalNode;
    IS_GELIJK_AAN(): TerminalNode;
    GELIJK_IS_AAN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ConsistencyCheckResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    attribuutReferentie(): AttribuutReferentieContext;
    MOET(): TerminalNode;
    consistencyOperator(): ConsistencyOperatorContext;
    expressie(): ExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    verdelingResultaat(): VerdelingResultaatContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectCreatieResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    objectCreatie(): ObjectCreatieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DagsoortdefinitieResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    EEN_list(): TerminalNode[];
    EEN(i: number): TerminalNode;
    DAG(): TerminalNode;
    IS(): TerminalNode;
    naamwoord(): NaamwoordContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class KenmerkFeitResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    onderwerpReferentie(): OnderwerpReferentieContext;
    kenmerkNaam(): KenmerkNaamContext;
    IS(): TerminalNode;
    HEEFT(): TerminalNode;
    periodeDefinitie(): PeriodeDefinitieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitCreatieResultaatContext extends ResultaatDeelContext {
    constructor(parser: RegelSpraakParser, ctx: ResultaatDeelContext);
    feitCreatiePattern(): FeitCreatiePatternContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ConsistencyOperatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ONGELIJK_ZIJN_AAN(): TerminalNode;
    ONGELIJK_AAN(): TerminalNode;
    IS_ONGELIJK_AAN(): TerminalNode;
    GELIJK_AAN(): TerminalNode;
    IS_GELIJK_AAN(): TerminalNode;
    GROTER_DAN(): TerminalNode;
    IS_GROTER_DAN(): TerminalNode;
    KLEINER_DAN(): TerminalNode;
    IS_KLEINER_DAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitCreatiePatternContext extends ParserRuleContext {
    _role1: FeitCreatieRolPhraseContext;
    _subject1: FeitCreatieSubjectPhraseContext;
    _article2: Token;
    _role2: FeitCreatieRolPhraseContext;
    _article3: Token;
    _subject2: FeitCreatieSubjectPhraseContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    EEN_list(): TerminalNode[];
    EEN(i: number): TerminalNode;
    VAN_list(): TerminalNode[];
    VAN(i: number): TerminalNode;
    IS(): TerminalNode;
    feitCreatieRolPhrase_list(): FeitCreatieRolPhraseContext[];
    feitCreatieRolPhrase(i: number): FeitCreatieRolPhraseContext;
    feitCreatieSubjectPhrase_list(): FeitCreatieSubjectPhraseContext[];
    feitCreatieSubjectPhrase(i: number): FeitCreatieSubjectPhraseContext;
    DE_list(): TerminalNode[];
    DE(i: number): TerminalNode;
    HET_list(): TerminalNode[];
    HET(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitCreatieRolPhraseContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    feitCreatieWord_list(): FeitCreatieWordContext[];
    feitCreatieWord(i: number): FeitCreatieWordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitCreatieSubjectPhraseContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    feitCreatieSubjectWord_list(): FeitCreatieSubjectWordContext[];
    feitCreatieSubjectWord(i: number): FeitCreatieSubjectWordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitCreatieSubjectWordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeyword(): IdentifierOrKeywordContext;
    voorzetsel(): VoorzetselContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class FeitCreatieWordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    identifierOrKeyword(): IdentifierOrKeywordContext;
    voorzetselNietVan(): VoorzetselNietVanContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VoorzetselNietVanContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IN(): TerminalNode;
    VOOR(): TerminalNode;
    OVER(): TerminalNode;
    OP(): TerminalNode;
    BIJ(): TerminalNode;
    UIT(): TerminalNode;
    TOT(): TerminalNode;
    EN(): TerminalNode;
    MET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectCreatieContext extends ParserRuleContext {
    _objectType: NaamwoordContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ER_WORDT_EEN_NIEUW(): TerminalNode;
    AANGEMAAKT(): TerminalNode;
    naamwoord(): NaamwoordContext;
    objectAttributeInit(): ObjectAttributeInitContext;
    DOT(): TerminalNode;
    CREEER(): TerminalNode;
    EEN(): TerminalNode;
    NIEUWE(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectAttributeInitContext extends ParserRuleContext {
    _attribuut: SimpleNaamwoordContext;
    _waarde: SimpleExpressieContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MET(): TerminalNode;
    GELIJK_AAN(): TerminalNode;
    simpleNaamwoord(): SimpleNaamwoordContext;
    simpleExpressie(): SimpleExpressieContext;
    attributeInitVervolg_list(): AttributeInitVervolgContext[];
    attributeInitVervolg(i: number): AttributeInitVervolgContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AttributeInitVervolgContext extends ParserRuleContext {
    _attribuut: SimpleNaamwoordContext;
    _waarde: SimpleExpressieContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    EN(): TerminalNode;
    GELIJK_AAN(): TerminalNode;
    simpleNaamwoord(): SimpleNaamwoordContext;
    simpleExpressie(): SimpleExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SimpleNaamwoordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamPhrase(): NaamPhraseContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ConsistentieregelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    CONSISTENTIEREGEL(): TerminalNode;
    naamwoord(): NaamwoordContext;
    uniekzijnResultaat(): UniekzijnResultaatContext;
    inconsistentResultaat(): InconsistentResultaatContext;
    voorwaardeDeel(): VoorwaardeDeelContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UniekzijnResultaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    alleAttributenVanObjecttype(): AlleAttributenVanObjecttypeContext;
    MOETEN_UNIEK_ZIJN(): TerminalNode;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AlleAttributenVanObjecttypeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    naamwoord_list(): NaamwoordContext[];
    naamwoord(i: number): NaamwoordContext;
    VAN(): TerminalNode;
    ALLE(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class InconsistentResultaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoord(): NaamwoordContext;
    IS_INCONSISTENT(): TerminalNode;
    DE(): TerminalNode;
    HET(): TerminalNode;
    ER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VoorwaardeDeelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    INDIEN(): TerminalNode;
    expressie(): ExpressieContext;
    toplevelSamengesteldeVoorwaarde(): ToplevelSamengesteldeVoorwaardeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ToplevelSamengesteldeVoorwaardeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ER_AAN(): TerminalNode;
    voorwaardeKwantificatie(): VoorwaardeKwantificatieContext;
    WORDT_VOLDAAN(): TerminalNode;
    COLON(): TerminalNode;
    VOLGENDE_VOORWAARDEN(): TerminalNode;
    VOLGENDE_VOORWAARDE(): TerminalNode;
    samengesteldeVoorwaardeOnderdeel_list(): SamengesteldeVoorwaardeOnderdeelContext[];
    samengesteldeVoorwaardeOnderdeel(i: number): SamengesteldeVoorwaardeOnderdeelContext;
    AAN(): TerminalNode;
    VOLDOET(): TerminalNode;
    onderwerpReferentie(): OnderwerpReferentieContext;
    HIJ(): TerminalNode;
    HET(): TerminalNode;
    ER(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VoorwaardeKwantificatieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    ALLE(): TerminalNode;
    GEEN_VAN_DE(): TerminalNode;
    VAN(): TerminalNode;
    TEN_MINSTE(): TerminalNode;
    TENMINSTE(): TerminalNode;
    NUMBER(): TerminalNode;
    EEN(): TerminalNode;
    EEN_TELWOORD(): TerminalNode;
    TWEE_TELWOORD(): TerminalNode;
    DRIE_TELWOORD(): TerminalNode;
    VIER_TELWOORD(): TerminalNode;
    TEN_HOOGSTE(): TerminalNode;
    PRECIES(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SamengesteldeVoorwaardeOnderdeelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    outerBulletPrefix(): OuterBulletPrefixContext;
    elementaireVoorwaarde(): ElementaireVoorwaardeContext;
    genesteSamengesteldeVoorwaarde(): GenesteSamengesteldeVoorwaardeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class OuterBulletPrefixContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MINUS(): TerminalNode;
    BULLET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NestedBulletPrefixContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DOUBLE_DOT(): TerminalNode;
    BULLET_list(): TerminalNode[];
    BULLET(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BulletPrefixContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MINUS_list(): TerminalNode[];
    MINUS(i: number): TerminalNode;
    DOUBLE_DOT_list(): TerminalNode[];
    DOUBLE_DOT(i: number): TerminalNode;
    BULLET_list(): TerminalNode[];
    BULLET(i: number): TerminalNode;
    ASTERISK_list(): TerminalNode[];
    ASTERISK(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ElementaireVoorwaardeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    expressie(): ExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GenesteSamengesteldeVoorwaardeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    VOLDOET(): TerminalNode;
    AAN(): TerminalNode;
    voorwaardeKwantificatie(): VoorwaardeKwantificatieContext;
    COLON(): TerminalNode;
    VOLGENDE_VOORWAARDEN(): TerminalNode;
    VOLGENDE_VOORWAARDE(): TerminalNode;
    onderwerpReferentie(): OnderwerpReferentieContext;
    HIJ(): TerminalNode;
    ER(): TerminalNode;
    genesteSamengesteldeVoorwaardeOnderdeel_list(): GenesteSamengesteldeVoorwaardeOnderdeelContext[];
    genesteSamengesteldeVoorwaardeOnderdeel(i: number): GenesteSamengesteldeVoorwaardeOnderdeelContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GenesteSamengesteldeVoorwaardeOnderdeelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    nestedBulletPrefix(): NestedBulletPrefixContext;
    elementaireVoorwaarde(): ElementaireVoorwaardeContext;
    genesteSamengesteldeVoorwaarde(): GenesteSamengesteldeVoorwaardeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class OnderwerpReferentieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    onderwerpBasis(): OnderwerpBasisContext;
    predicaat(): PredicaatContext;
    DIE(): TerminalNode;
    DAT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class OnderwerpReferentieWithNumbersContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    onderwerpBasisWithNumbers(): OnderwerpBasisWithNumbersContext;
    predicaat(): PredicaatContext;
    DIE(): TerminalNode;
    DAT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class OnderwerpBasisContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    basisOnderwerp_list(): BasisOnderwerpContext[];
    basisOnderwerp(i: number): BasisOnderwerpContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class OnderwerpBasisWithNumbersContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    basisOnderwerpWithNumbers_list(): BasisOnderwerpWithNumbersContext[];
    basisOnderwerpWithNumbers(i: number): BasisOnderwerpWithNumbersContext;
    voorzetsel_list(): VoorzetselContext[];
    voorzetsel(i: number): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BasisOnderwerpContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    ZIJN(): TerminalNode;
    identifierOrKeyword_list(): IdentifierOrKeywordContext[];
    identifierOrKeyword(i: number): IdentifierOrKeywordContext;
    HIJ(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BasisOnderwerpWithNumbersContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    ZIJN(): TerminalNode;
    identifierOrKeywordWithNumbers_list(): IdentifierOrKeywordWithNumbersContext[];
    identifierOrKeywordWithNumbers(i: number): IdentifierOrKeywordWithNumbersContext;
    HIJ(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AttribuutReferentieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    attribuutMetLidwoord(): AttribuutMetLidwoordContext;
    VAN(): TerminalNode;
    onderwerpReferentie(): OnderwerpReferentieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AttribuutMetLidwoordContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoordNoIs(): NaamwoordNoIsContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class KenmerkNaamContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    voorzetsel(): VoorzetselContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class KenmerkPhraseContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    voorzetsel(): VoorzetselContext;
    identifierOrKeywordWithNumbers_list(): IdentifierOrKeywordWithNumbersContext[];
    identifierOrKeywordWithNumbers(i: number): IdentifierOrKeywordWithNumbersContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    EEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BezieldeReferentieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoord(): NaamwoordContext;
    ZIJN(): TerminalNode;
    HAAR(): TerminalNode;
    HUN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AggregationSubjectContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ALLE(): TerminalNode;
    naamwoord(): NaamwoordContext;
    predicaat(): PredicaatContext;
    DIE(): TerminalNode;
    DAT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    elementairPredicaat(): ElementairPredicaatContext;
    samengesteldPredicaat(): SamengesteldPredicaatContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ElementairPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    attribuutVergelijkingsPredicaat(): AttribuutVergelijkingsPredicaatContext;
    objectPredicaat(): ObjectPredicaatContext;
    getalPredicaat(): GetalPredicaatContext;
    tekstPredicaat(): TekstPredicaatContext;
    datumPredicaat(): DatumPredicaatContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ObjectPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    eenzijdigeObjectVergelijking(): EenzijdigeObjectVergelijkingContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EenzijdigeObjectVergelijkingContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ZIJN(): TerminalNode;
    HEBBEN(): TerminalNode;
    kenmerkNaam(): KenmerkNaamContext;
    rolNaam(): RolNaamContext;
    EEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RolNaamContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    naamwoord(): NaamwoordContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AttribuutVergelijkingsPredicaatContext extends ParserRuleContext {
    _attribuutNaam: NaamwoordContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    HEBBEN(): TerminalNode;
    comparisonOperator(): ComparisonOperatorContext;
    expressie(): ExpressieContext;
    naamwoord(): NaamwoordContext;
    EEN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GetalPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    getalVergelijkingsOperatorMeervoud(): GetalVergelijkingsOperatorMeervoudContext;
    getalExpressie(): GetalExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TekstPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    tekstVergelijkingsOperatorMeervoud(): TekstVergelijkingsOperatorMeervoudContext;
    tekstExpressie(): TekstExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    datumVergelijkingsOperatorMeervoud(): DatumVergelijkingsOperatorMeervoudContext;
    datumExpressie(): DatumExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SamengesteldPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    AAN(): TerminalNode;
    voorwaardeKwantificatie(): VoorwaardeKwantificatieContext;
    COLON(): TerminalNode;
    VOLGENDE_VOORWAARDEN(): TerminalNode;
    VOLGENDE_VOORWAARDE(): TerminalNode;
    VOLDOET(): TerminalNode;
    VOLDOEN(): TerminalNode;
    samengesteldeVoorwaardeOnderdeelInPredicaat_list(): SamengesteldeVoorwaardeOnderdeelInPredicaatContext[];
    samengesteldeVoorwaardeOnderdeelInPredicaat(i: number): SamengesteldeVoorwaardeOnderdeelInPredicaatContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SamengesteldeVoorwaardeOnderdeelInPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    bulletPrefix(): BulletPrefixContext;
    elementaireVoorwaardeInPredicaat(): ElementaireVoorwaardeInPredicaatContext;
    genesteSamengesteldeVoorwaardeInPredicaat(): GenesteSamengesteldeVoorwaardeInPredicaatContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ElementaireVoorwaardeInPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    vergelijkingInPredicaat(): VergelijkingInPredicaatContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VergelijkingInPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    attribuutReferentie(): AttribuutReferentieContext;
    comparisonOperator(): ComparisonOperatorContext;
    expressie(): ExpressieContext;
    onderwerpReferentie(): OnderwerpReferentieContext;
    eenzijdigeObjectVergelijking(): EenzijdigeObjectVergelijkingContext;
    kenmerkNaam(): KenmerkNaamContext;
    IS(): TerminalNode;
    ZIJN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GenesteSamengesteldeVoorwaardeInPredicaatContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    AAN(): TerminalNode;
    voorwaardeKwantificatie(): VoorwaardeKwantificatieContext;
    COLON(): TerminalNode;
    VOLGENDE_VOORWAARDEN(): TerminalNode;
    VOLGENDE_VOORWAARDE(): TerminalNode;
    VOLDOET(): TerminalNode;
    VOLDOEN(): TerminalNode;
    WORDT(): TerminalNode;
    VOLDAAN(): TerminalNode;
    samengesteldeVoorwaardeOnderdeelInPredicaat_list(): SamengesteldeVoorwaardeOnderdeelInPredicaatContext[];
    samengesteldeVoorwaardeOnderdeelInPredicaat(i: number): SamengesteldeVoorwaardeOnderdeelInPredicaatContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GetalVergelijkingsOperatorMeervoudContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ZIJN_GELIJK_AAN(): TerminalNode;
    ZIJN_ONGELIJK_AAN(): TerminalNode;
    ZIJN_GROTER_DAN(): TerminalNode;
    ZIJN_GROTER_OF_GELIJK_AAN(): TerminalNode;
    ZIJN_KLEINER_DAN(): TerminalNode;
    ZIJN_KLEINER_OF_GELIJK_AAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TekstVergelijkingsOperatorMeervoudContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ZIJN_GELIJK_AAN(): TerminalNode;
    ZIJN_ONGELIJK_AAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumVergelijkingsOperatorMeervoudContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ZIJN_GELIJK_AAN(): TerminalNode;
    ZIJN_ONGELIJK_AAN(): TerminalNode;
    ZIJN_LATER_DAN(): TerminalNode;
    ZIJN_LATER_OF_GELIJK_AAN(): TerminalNode;
    ZIJN_EERDER_DAN(): TerminalNode;
    ZIJN_EERDER_OF_GELIJK_AAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GetalExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    expressie(): ExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TekstExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    expressie(): ExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    datumLiteral(): DatumLiteralContext;
    REKENDATUM(): TerminalNode;
    REKENJAAR(): TerminalNode;
    DE_DATUM_MET(): TerminalNode;
    LPAREN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    DE_EERSTE_PAASDAG_VAN(): TerminalNode;
    attribuutReferentie(): AttribuutReferentieContext;
    bezieldeReferentie(): BezieldeReferentieContext;
    parameterMetLidwoord(): ParameterMetLidwoordContext;
    expressie(): ExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VariabeleDeelContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DAARBIJ_GELDT(): TerminalNode;
    DOT(): TerminalNode;
    variabeleToekenning_list(): VariabeleToekenningContext[];
    variabeleToekenning(i: number): VariabeleToekenningContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VariabeleToekenningContext extends ParserRuleContext {
    _article: Token;
    _varName: Token;
    _varExpr: VariabeleExpressieContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    IS(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    variabeleExpressie(): VariabeleExpressieContext;
    DE(): TerminalNode;
    HET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VariabeleExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    additiveOperator_list(): AdditiveOperatorContext[];
    additiveOperator(i: number): AdditiveOperatorContext;
    multiplicativeOperator_list(): MultiplicativeOperatorContext[];
    multiplicativeOperator(i: number): MultiplicativeOperatorContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressieContext): void;
}
export declare class SimpleExprContext extends ExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: ExpressieContext);
    logicalExpression(): LogicalExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ExprBegrenzingAfrondingContext extends ExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: ExpressieContext);
    logicalExpression(): LogicalExpressionContext;
    COMMA(): TerminalNode;
    begrenzing(): BegrenzingContext;
    afronding(): AfrondingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ExprBegrenzingContext extends ExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: ExpressieContext);
    logicalExpression(): LogicalExpressionContext;
    COMMA(): TerminalNode;
    begrenzing(): BegrenzingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ExprAfrondingContext extends ExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: ExpressieContext);
    logicalExpression(): LogicalExpressionContext;
    afronding(): AfrondingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SimpleExpressieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: SimpleExpressieContext): void;
}
export declare class SimpleExprBegrenzingContext extends SimpleExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext);
    comparisonExpression(): ComparisonExpressionContext;
    COMMA(): TerminalNode;
    begrenzing(): BegrenzingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SimpleExprAfrondingContext extends SimpleExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext);
    comparisonExpression(): ComparisonExpressionContext;
    afronding(): AfrondingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SimpleExprBegrenzingAfrondingContext extends SimpleExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext);
    comparisonExpression(): ComparisonExpressionContext;
    COMMA(): TerminalNode;
    begrenzing(): BegrenzingContext;
    afronding(): AfrondingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SimpleExprBaseContext extends SimpleExpressieContext {
    constructor(parser: RegelSpraakParser, ctx: SimpleExpressieContext);
    comparisonExpression(): ComparisonExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class LogicalExpressionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: LogicalExpressionContext): void;
}
export declare class LogicalExprContext extends LogicalExpressionContext {
    _left: ComparisonExpressionContext;
    _op: Token;
    _right: LogicalExpressionContext;
    constructor(parser: RegelSpraakParser, ctx: LogicalExpressionContext);
    comparisonExpression(): ComparisonExpressionContext;
    logicalExpression(): LogicalExpressionContext;
    EN(): TerminalNode;
    OF(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ComparisonExpressionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: ComparisonExpressionContext): void;
}
export declare class GelijkIsAanOfExprContext extends ComparisonExpressionContext {
    _left: AdditiveExpressionContext;
    _op: GelijkIsAanOperatorContext;
    _firstValue: LiteralValueContext;
    _literalValue: LiteralValueContext;
    _middleValues: LiteralValueContext[];
    _lastValue: LiteralValueContext;
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    OF(): TerminalNode;
    additiveExpression(): AdditiveExpressionContext;
    gelijkIsAanOperator(): GelijkIsAanOperatorContext;
    literalValue_list(): LiteralValueContext[];
    literalValue(i: number): LiteralValueContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SubordinateClauseExprContext extends ComparisonExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    subordinateClauseExpression(): SubordinateClauseExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PeriodeCheckExprContext extends ComparisonExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    periodevergelijkingElementair(): PeriodevergelijkingElementairContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BinaryComparisonExprContext extends ComparisonExpressionContext {
    _left: AdditiveExpressionContext;
    _right: AdditiveExpressionContext;
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    additiveExpression_list(): AdditiveExpressionContext[];
    additiveExpression(i: number): AdditiveExpressionContext;
    comparisonOperator(): ComparisonOperatorContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryConditionExprContext extends ComparisonExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    unaryCondition(): UnaryConditionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class HeeftKenmerkExprContext extends ComparisonExpressionContext {
    _left: AdditiveExpressionContext;
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    HEEFT(): TerminalNode;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    additiveExpression(): AdditiveExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class IsKenmerkExprContext extends ComparisonExpressionContext {
    _left: AdditiveExpressionContext;
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    IS(): TerminalNode;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    additiveExpression(): AdditiveExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelStatusConditionExprContext extends ComparisonExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: ComparisonExpressionContext);
    regelStatusCondition(): RegelStatusConditionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class LiteralValueContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ENUM_LITERAL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    NUMBER(): TerminalNode;
    unitIdentifier(): UnitIdentifierContext;
    PERCENTAGE_LITERAL(): TerminalNode;
    datumLiteral(): DatumLiteralContext;
    identifier(): IdentifierContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GelijkIsAanOperatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    GELIJK_IS_AAN(): TerminalNode;
    IS_GELIJK_AAN(): TerminalNode;
    GELIJK_AAN(): TerminalNode;
    ZIJN_GELIJK_AAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ComparisonOperatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    GELIJK_AAN(): TerminalNode;
    ONGELIJK_AAN(): TerminalNode;
    GELIJK_IS_AAN(): TerminalNode;
    GROTER_DAN(): TerminalNode;
    GROTER_OF_GELIJK_AAN(): TerminalNode;
    KLEINER_DAN(): TerminalNode;
    KLEINER_OF_GELIJK_AAN(): TerminalNode;
    KLEINER_IS_DAN(): TerminalNode;
    GROTER_IS_DAN(): TerminalNode;
    IS(): TerminalNode;
    IN(): TerminalNode;
    LATER_DAN(): TerminalNode;
    LATER_OF_GELIJK_AAN(): TerminalNode;
    EERDER_DAN(): TerminalNode;
    EERDER_OF_GELIJK_AAN(): TerminalNode;
    NIET(): TerminalNode;
    IS_GELIJK_AAN(): TerminalNode;
    IS_ONGELIJK_AAN(): TerminalNode;
    IS_KLEINER_DAN(): TerminalNode;
    IS_KLEINER_OF_GELIJK_AAN(): TerminalNode;
    IS_GROTER_DAN(): TerminalNode;
    IS_GROTER_OF_GELIJK_AAN(): TerminalNode;
    ZIJN_GELIJK_AAN(): TerminalNode;
    ZIJN_ONGELIJK_AAN(): TerminalNode;
    ZIJN_KLEINER_DAN(): TerminalNode;
    ZIJN_KLEINER_OF_GELIJK_AAN(): TerminalNode;
    ZIJN_GROTER_DAN(): TerminalNode;
    ZIJN_GROTER_OF_GELIJK_AAN(): TerminalNode;
    IS_LATER_DAN(): TerminalNode;
    IS_LATER_OF_GELIJK_AAN(): TerminalNode;
    IS_EERDER_DAN(): TerminalNode;
    IS_EERDER_OF_GELIJK_AAN(): TerminalNode;
    ZIJN_LATER_DAN(): TerminalNode;
    ZIJN_LATER_OF_GELIJK_AAN(): TerminalNode;
    ZIJN_EERDER_DAN(): TerminalNode;
    ZIJN_EERDER_OF_GELIJK_AAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AdditiveExpressionContext extends ParserRuleContext {
    _left: MultiplicativeExpressionContext;
    _right: MultiplicativeExpressionContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    multiplicativeExpression_list(): MultiplicativeExpressionContext[];
    multiplicativeExpression(i: number): MultiplicativeExpressionContext;
    additiveOperator_list(): AdditiveOperatorContext[];
    additiveOperator(i: number): AdditiveOperatorContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AdditiveOperatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    PLUS(): TerminalNode;
    MIN(): TerminalNode;
    VERMINDERD_MET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MultiplicativeExpressionContext extends ParserRuleContext {
    _left: PowerExpressionContext;
    _right: PowerExpressionContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    powerExpression_list(): PowerExpressionContext[];
    powerExpression(i: number): PowerExpressionContext;
    multiplicativeOperator_list(): MultiplicativeOperatorContext[];
    multiplicativeOperator(i: number): MultiplicativeOperatorContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MultiplicativeOperatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MAAL(): TerminalNode;
    GEDEELD_DOOR(): TerminalNode;
    GEDEELD_DOOR_ABS(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PowerExpressionContext extends ParserRuleContext {
    _left: PrimaryExpressionContext;
    _right: PrimaryExpressionContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    powerOperator_list(): PowerOperatorContext[];
    powerOperator(i: number): PowerOperatorContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PowerOperatorContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    TOT_DE_MACHT(): TerminalNode;
    CARET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PrimaryExpressionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrimaryExpressionContext): void;
}
export declare class WortelFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_WORTEL_VAN(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BooleanTrueLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    WAAR(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AbsValFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_ABSOLUTE_WAARDE_VAN(): TerminalNode;
    LPAREN(): TerminalNode;
    expressie(): ExpressieContext;
    RPAREN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MaxValFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_MAXIMALE_WAARDE_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RekendatumKeywordExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    REKENDATUM(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EnumLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    ENUM_LITERAL(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NumberLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    NUMBER(): TerminalNode;
    unitIdentifier(): UnitIdentifierContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    datumLiteral(): DatumLiteralContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AantalFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    aggregationSubject(): AggregationSubjectContext;
    HET(): TerminalNode;
    AANTAL(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryNietExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    NIET(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ConcatenatieExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    CONCATENATIE_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    OF(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SomAlleAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    SOM_VAN(): TerminalNode;
    ALLE(): TerminalNode;
    attribuutReferentie(): AttribuutReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AttrRefExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    attribuutReferentie(): AttribuutReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DagUitFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE(): TerminalNode;
    DAG(): TerminalNode;
    UIT(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BegrenzingExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    primaryExpression(): PrimaryExpressionContext;
    COMMA(): TerminalNode;
    begrenzing(): BegrenzingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class NaamwoordExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    naamwoord(): NaamwoordContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BooleanFalseLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    ONWAAR(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class JaarUitFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET(): TerminalNode;
    JAAR(): TerminalNode;
    UIT(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TotaalVanExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET_TOTAAL_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    conditieBijExpressie(): ConditieBijExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TijdsevenredigDeelExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET_TIJDSEVENREDIG_DEEL_PER(): TerminalNode;
    VAN(): TerminalNode;
    expressie(): ExpressieContext;
    MAAND(): TerminalNode;
    JAAR(): TerminalNode;
    conditieBijExpressie(): ConditieBijExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class CapitalizedTijdsevenredigDeelExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET_TIJDSEVENREDIG_DEEL_PER(): TerminalNode;
    VAN(): TerminalNode;
    expressie(): ExpressieContext;
    MAAND(): TerminalNode;
    JAAR(): TerminalNode;
    identifier_list(): IdentifierContext[];
    identifier(i: number): IdentifierContext;
    conditieBijExpressie(): ConditieBijExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AantalAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET(): TerminalNode;
    AANTAL(): TerminalNode;
    attribuutReferentie(): AttribuutReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ParenExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    LPAREN(): TerminalNode;
    expressie(): ExpressieContext;
    RPAREN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DimensieRangeAggExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    VANAF(): TerminalNode;
    naamwoord_list(): NaamwoordContext[];
    naamwoord(i: number): NaamwoordContext;
    TM(): TerminalNode;
    getalAggregatieFunctie(): GetalAggregatieFunctieContext;
    datumAggregatieFunctie(): DatumAggregatieFunctieContext;
    bezieldeReferentie(): BezieldeReferentieContext;
    attribuutReferentie(): AttribuutReferentieContext;
    DOT(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumMetFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_DATUM_MET(): TerminalNode;
    LPAREN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RPAREN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PercentageLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    PERCENTAGE_LITERAL(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class StringLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    STRING_LITERAL(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PercentageFuncExprContext extends PrimaryExpressionContext {
    _p: Token;
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    VAN(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    NUMBER(): TerminalNode;
    PERCENTAGE_LITERAL(): TerminalNode;
    PERCENT_SIGN(): TerminalNode;
    IDENTIFIER(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class EersteDatumFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    EERSTE_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PasenFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_EERSTE_PAASDAG_VAN(): TerminalNode;
    LPAREN(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    RPAREN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AbsTijdsduurFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_ABSOLUTE_TIJDSDUUR_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    TOT(): TerminalNode;
    IN_HELE(): TerminalNode;
    unitIdentifier(): UnitIdentifierContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MaandUitFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE(): TerminalNode;
    MAAND(): TerminalNode;
    UIT(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class CapitalizedTotaalVanExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET_TOTAAL_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    identifier_list(): IdentifierContext[];
    identifier(i: number): IdentifierContext;
    conditieBijExpressie(): ConditieBijExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class IdentifierExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    identifier(): IdentifierContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DimensieAggExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    attribuutMetLidwoord(): AttribuutMetLidwoordContext;
    dimensieSelectie(): DimensieSelectieContext;
    getalAggregatieFunctie(): GetalAggregatieFunctieContext;
    datumAggregatieFunctie(): DatumAggregatieFunctieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TijdsduurFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    TIJDSDUUR_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    TOT(): TerminalNode;
    IN_HELE(): TerminalNode;
    unitIdentifier(): UnitIdentifierContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class OnderwerpRefExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    onderwerpReferentie(): OnderwerpReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SomFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    SOM_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SomAlleExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    SOM_VAN(): TerminalNode;
    ALLE(): TerminalNode;
    naamwoord(): NaamwoordContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SimpleConcatenatieExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    OF(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BegrenzingAfrondingExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    primaryExpression(): PrimaryExpressionContext;
    COMMA(): TerminalNode;
    begrenzing(): BegrenzingContext;
    afronding(): AfrondingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PercentageOfExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    PERCENTAGE_LITERAL(): TerminalNode;
    VAN(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MinValFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_MINIMALE_WAARDE_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MaxAlleAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_MAXIMALE_WAARDE_VAN(): TerminalNode;
    ALLE(): TerminalNode;
    attribuutReferentie(): AttribuutReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DateCalcExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    datumExpressie(): DatumExpressieContext;
    primaryExpression(): PrimaryExpressionContext;
    timeUnit(): TimeUnitContext;
    PLUS(): TerminalNode;
    MIN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BezieldeRefExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    bezieldeReferentie(): BezieldeReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class MinAlleAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    DE_MINIMALE_WAARDE_VAN(): TerminalNode;
    ALLE(): TerminalNode;
    attribuutReferentie(): AttribuutReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AfrondingExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    primaryExpression(): PrimaryExpressionContext;
    afronding(): AfrondingContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class LaatsteDatumFuncExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    LAATSTE_VAN(): TerminalNode;
    primaryExpression_list(): PrimaryExpressionContext[];
    primaryExpression(i: number): PrimaryExpressionContext;
    EN(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class HetAantalDagenInExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HET_list(): TerminalNode[];
    HET(i: number): TerminalNode;
    AANTAL(): TerminalNode;
    DAGEN(): TerminalNode;
    IN(): TerminalNode;
    DAT(): TerminalNode;
    expressie(): ExpressieContext;
    MAAND(): TerminalNode;
    JAAR(): TerminalNode;
    DE(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryMinusExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    MIN(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    MINUS(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ParamRefExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    parameterMetLidwoord(): ParameterMetLidwoordContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PronounExprContext extends PrimaryExpressionContext {
    constructor(parser: RegelSpraakParser, ctx: PrimaryExpressionContext);
    HIJ(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AfrondingContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    AFGEROND_OP(): TerminalNode;
    NUMBER(): TerminalNode;
    DECIMALEN(): TerminalNode;
    NAAR_BENEDEN(): TerminalNode;
    NAAR_BOVEN(): TerminalNode;
    REKENKUNDIG(): TerminalNode;
    RICHTING_NUL(): TerminalNode;
    WEG_VAN_NUL(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BegrenzingContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    begrenzingMinimum(): BegrenzingMinimumContext;
    begrenzingMaximum(): BegrenzingMaximumContext;
    EN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BegrenzingMinimumContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MET_EEN_MINIMUM_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class BegrenzingMaximumContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MET_EEN_MAXIMUM_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class ConditieBijExpressieContext extends ParserRuleContext {
    _condition: ExpressieContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    GEDURENDE_DE_TIJD_DAT(): TerminalNode;
    expressie(): ExpressieContext;
    periodevergelijkingEnkelvoudig(): PeriodevergelijkingEnkelvoudigContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PeriodevergelijkingElementairContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    HET_IS_DE_PERIODE(): TerminalNode;
    periodevergelijkingEnkelvoudig(): PeriodevergelijkingEnkelvoudigContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PeriodevergelijkingEnkelvoudigContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    VANAF(): TerminalNode;
    datumExpressie_list(): DatumExpressieContext[];
    datumExpressie(i: number): DatumExpressieContext;
    VAN(): TerminalNode;
    TOT(): TerminalNode;
    TOT_EN_MET(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class PeriodeDefinitieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: PeriodeDefinitieContext): void;
}
export declare class VanafPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext);
    VANAF(): TerminalNode;
    dateExpression(): DateExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VanTotPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext);
    VAN(): TerminalNode;
    dateExpression_list(): DateExpressionContext[];
    dateExpression(i: number): DateExpressionContext;
    TOT(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VanTotEnMetPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext);
    VAN(): TerminalNode;
    dateExpression_list(): DateExpressionContext[];
    dateExpression(i: number): DateExpressionContext;
    TOT_EN_MET(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TotPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext);
    TOT(): TerminalNode;
    dateExpression(): DateExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TotEnMetPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser: RegelSpraakParser, ctx: PeriodeDefinitieContext);
    TOT_EN_MET(): TerminalNode;
    dateExpression(): DateExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DateExpressionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    datumLiteral(): DatumLiteralContext;
    REKENDATUM(): TerminalNode;
    REKENJAAR(): TerminalNode;
    attribuutReferentie(): AttribuutReferentieContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class GetalAggregatieFunctieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    HET(): TerminalNode;
    AANTAL(): TerminalNode;
    DE_MAXIMALE_WAARDE_VAN(): TerminalNode;
    DE_MINIMALE_WAARDE_VAN(): TerminalNode;
    SOM_VAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DatumAggregatieFunctieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    EERSTE_VAN(): TerminalNode;
    LAATSTE_VAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DimensieSelectieContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    OVER(): TerminalNode;
    DOT(): TerminalNode;
    aggregerenOverAlleDimensies(): AggregerenOverAlleDimensiesContext;
    aggregerenOverVerzameling(): AggregerenOverVerzamelingContext;
    aggregerenOverBereik(): AggregerenOverBereikContext;
    VAN(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AggregerenOverAlleDimensiesContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ALLE(): TerminalNode;
    naamwoord(): NaamwoordContext;
    predicaat(): PredicaatContext;
    DIE(): TerminalNode;
    DAT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AggregerenOverVerzamelingContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    naamwoord_list(): NaamwoordContext[];
    naamwoord(i: number): NaamwoordContext;
    VANAF(): TerminalNode;
    TM(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class AggregerenOverBereikContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DE(): TerminalNode;
    naamwoord_list(): NaamwoordContext[];
    naamwoord(i: number): NaamwoordContext;
    IN(): TerminalNode;
    LBRACE(): TerminalNode;
    EN(): TerminalNode;
    RBRACE(): TerminalNode;
    COMMA_list(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryConditionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: UnaryConditionContext): void;
}
export declare class UnaryCheckConditionContext extends UnaryConditionContext {
    _expr: PrimaryExpressionContext;
    _op: Token;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    primaryExpression(): PrimaryExpressionContext;
    IS_LEEG(): TerminalNode;
    IS_GEVULD(): TerminalNode;
    VOLDOET_AAN_DE_ELFPROEF(): TerminalNode;
    VOLDOET_NIET_AAN_DE_ELFPROEF(): TerminalNode;
    ZIJN_LEEG(): TerminalNode;
    ZIJN_GEVULD(): TerminalNode;
    VOLDOEN_AAN_DE_ELFPROEF(): TerminalNode;
    VOLDOEN_NIET_AAN_DE_ELFPROEF(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryKenmerkConditionContext extends UnaryConditionContext {
    _expr: PrimaryExpressionContext;
    _op: Token;
    _kenmerk: IdentifierContext;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    primaryExpression(): PrimaryExpressionContext;
    identifier(): IdentifierContext;
    IS_KENMERK(): TerminalNode;
    ZIJN_KENMERK(): TerminalNode;
    IS_NIET_KENMERK(): TerminalNode;
    ZIJN_NIET_KENMERK(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryNumeriekExactConditionContext extends UnaryConditionContext {
    _expr: PrimaryExpressionContext;
    _op: Token;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    NUMBER(): TerminalNode;
    CIJFERS(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    IS_NUMERIEK_MET_EXACT(): TerminalNode;
    IS_NIET_NUMERIEK_MET_EXACT(): TerminalNode;
    ZIJN_NUMERIEK_MET_EXACT(): TerminalNode;
    ZIJN_NIET_NUMERIEK_MET_EXACT(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryRolConditionContext extends UnaryConditionContext {
    _expr: PrimaryExpressionContext;
    _op: Token;
    _rol: IdentifierContext;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    primaryExpression(): PrimaryExpressionContext;
    identifier(): IdentifierContext;
    IS_ROL(): TerminalNode;
    ZIJN_ROL(): TerminalNode;
    IS_NIET_ROL(): TerminalNode;
    ZIJN_NIET_ROL(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryDagsoortConditionContext extends UnaryConditionContext {
    _expr: PrimaryExpressionContext;
    _op: Token;
    _dagsoort: IdentifierContext;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    primaryExpression(): PrimaryExpressionContext;
    identifier(): IdentifierContext;
    IS_EEN_DAGSOORT(): TerminalNode;
    ZIJN_EEN_DAGSOORT(): TerminalNode;
    IS_GEEN_DAGSOORT(): TerminalNode;
    ZIJN_GEEN_DAGSOORT(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryInconsistentDataConditionContext extends UnaryConditionContext {
    _expr: PrimaryExpressionContext;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    IS_INCONSISTENT(): TerminalNode;
    primaryExpression(): PrimaryExpressionContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class UnaryUniekConditionContext extends UnaryConditionContext {
    _ref: OnderwerpReferentieContext;
    constructor(parser: RegelSpraakParser, ctx: UnaryConditionContext);
    MOETEN_UNIEK_ZIJN(): TerminalNode;
    onderwerpReferentie(): OnderwerpReferentieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelStatusConditionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: RegelStatusConditionContext): void;
}
export declare class RegelStatusInconsistentCheckContext extends RegelStatusConditionContext {
    _name: NaamwoordContext;
    constructor(parser: RegelSpraakParser, ctx: RegelStatusConditionContext);
    REGELVERSIE(): TerminalNode;
    IS_INCONSISTENT(): TerminalNode;
    naamwoord(): NaamwoordContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class RegelStatusGevuurdCheckContext extends RegelStatusConditionContext {
    _name: NaamwoordContext;
    constructor(parser: RegelSpraakParser, ctx: RegelStatusConditionContext);
    REGELVERSIE(): TerminalNode;
    IS_GEVUURD(): TerminalNode;
    naamwoord(): NaamwoordContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SubordinateClauseExpressionContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: SubordinateClauseExpressionContext): void;
}
export declare class SubordinateIsWithExprContext extends SubordinateClauseExpressionContext {
    _subject: OnderwerpReferentieContext;
    _prepPhrase: NaamwoordWithNumbersContext;
    _verb: Token;
    constructor(parser: RegelSpraakParser, ctx: SubordinateClauseExpressionContext);
    onderwerpReferentie(): OnderwerpReferentieContext;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    IS(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SubordinateHasExprContext extends SubordinateClauseExpressionContext {
    _subject: OnderwerpReferentieContext;
    _object: NaamwoordWithNumbersContext;
    _verb: Token;
    constructor(parser: RegelSpraakParser, ctx: SubordinateClauseExpressionContext);
    onderwerpReferentie(): OnderwerpReferentieContext;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    HEEFT(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class SubordinateIsKenmerkExprContext extends SubordinateClauseExpressionContext {
    _subject: OnderwerpReferentieContext;
    _verb: Token;
    _kenmerk: NaamwoordWithNumbersContext;
    constructor(parser: RegelSpraakParser, ctx: SubordinateClauseExpressionContext);
    onderwerpReferentie(): OnderwerpReferentieContext;
    IS(): TerminalNode;
    naamwoordWithNumbers(): NaamwoordWithNumbersContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class DagsoortDefinitionContext extends ParserRuleContext {
    _IDENTIFIER: Token;
    _plural: Token[];
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    DAGSOORT(): TerminalNode;
    naamwoord(): NaamwoordContext;
    MV_START(): TerminalNode;
    RPAREN(): TerminalNode;
    SEMICOLON(): TerminalNode;
    IDENTIFIER_list(): TerminalNode[];
    IDENTIFIER(i: number): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class TekstreeksExprContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    STRING_LITERAL(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingResultaatContext extends ParserRuleContext {
    _sourceAmount: ExpressieContext;
    _targetCollection: ExpressieContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    WORDT_VERDEELD_OVER(): TerminalNode;
    COMMA(): TerminalNode;
    WAARBIJ_WORDT_VERDEELD(): TerminalNode;
    expressie_list(): ExpressieContext[];
    expressie(i: number): ExpressieContext;
    verdelingMethodeSimple(): VerdelingMethodeSimpleContext;
    verdelingMethodeMultiLine(): VerdelingMethodeMultiLineContext;
    verdelingRest(): VerdelingRestContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingMethodeSimpleContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    verdelingMethode(): VerdelingMethodeContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingMethodeMultiLineContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    COLON(): TerminalNode;
    verdelingMethodeBulletList(): VerdelingMethodeBulletListContext;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingMethodeBulletListContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    verdelingMethodeBullet_list(): VerdelingMethodeBulletContext[];
    verdelingMethodeBullet(i: number): VerdelingMethodeBulletContext;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingMethodeBulletContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    MINUS(): TerminalNode;
    verdelingMethode(): VerdelingMethodeContext;
    COMMA(): TerminalNode;
    DOT(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingMethodeContext extends ParserRuleContext {
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    get ruleIndex(): number;
    copyFrom(ctx: VerdelingMethodeContext): void;
}
export declare class VerdelingNaarRatoContext extends VerdelingMethodeContext {
    _ratioExpression: ExpressieContext;
    constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext);
    NAAR_RATO_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingGelijkeDelenContext extends VerdelingMethodeContext {
    constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext);
    IN_GELIJKE_DELEN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingMaximumContext extends VerdelingMethodeContext {
    _maxExpression: ExpressieContext;
    constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext);
    MET_EEN_MAXIMUM_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingOpVolgordeContext extends VerdelingMethodeContext {
    _orderDirection: Token;
    _orderExpression: ExpressieContext;
    constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext);
    OP_VOLGORDE_VAN(): TerminalNode;
    expressie(): ExpressieContext;
    TOENEMENDE(): TerminalNode;
    AFNEMENDE(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingTieBreakContext extends VerdelingMethodeContext {
    _tieBreakMethod: VerdelingMethodeContext;
    constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext);
    BIJ_EVEN_GROOT_CRITERIUM(): TerminalNode;
    verdelingMethode(): VerdelingMethodeContext;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingAfrondingContext extends VerdelingMethodeContext {
    _decimals: Token;
    _roundDirection: Token;
    constructor(parser: RegelSpraakParser, ctx: VerdelingMethodeContext);
    AFGEROND_OP(): TerminalNode;
    DECIMALEN(): TerminalNode;
    NUMBER(): TerminalNode;
    NAAR_BENEDEN(): TerminalNode;
    NAAR_BOVEN(): TerminalNode;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
export declare class VerdelingRestContext extends ParserRuleContext {
    _remainderTarget: ExpressieContext;
    constructor(parser?: RegelSpraakParser, parent?: ParserRuleContext, invokingState?: number);
    ALS_ONVERDEELDE_REST_BLIJFT(): TerminalNode;
    expressie(): ExpressieContext;
    OVER_VERDELING(): TerminalNode;
    get ruleIndex(): number;
    accept<Result>(visitor: RegelSpraakVisitor<Result>): Result;
}
//# sourceMappingURL=RegelSpraakParser.d.ts.map