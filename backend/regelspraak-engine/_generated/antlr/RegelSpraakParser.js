"use strict";
// Generated from RegelSpraak.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensieRefContext = exports.TijdlijnContext = exports.LabelWaardeSpecificatieContext = exports.VoorzetselSpecificatieContext = exports.DimensieDefinitionContext = exports.EenheidMachtContext = exports.EenheidExpressieContext = exports.UnitIdentifierContext = exports.EenheidEntryContext = exports.EenheidsysteemDefinitionContext = exports.ObjectTypeRefContext = exports.DomeinRefContext = exports.EnumeratieSpecificatieContext = exports.DomeinTypeContext = exports.DomeinDefinitionContext = exports.GetalSpecificatieContext = exports.DatumTijdDatatypeContext = exports.BooleanDatatypeContext = exports.PercentageDatatypeContext = exports.TekstDatatypeContext = exports.NumeriekDatatypeContext = exports.LijstDatatypeContext = exports.DatatypeContext = exports.AttribuutSpecificatieContext = exports.KenmerkSpecificatieContext = exports.ObjectTypeMemberContext = exports.ObjectTypeDefinitionContext = exports.TimeUnitContext = exports.UnitContext = exports.DatumLiteralContext = exports.VoorzetselContext = exports.NaamwoordNoIsContext = exports.NaamwoordWithNumbersContext = exports.NaamwoordContext = exports.NaamPhraseNoIsContext = exports.IdentifierOrKeywordWithNumbersContext = exports.NaamPhraseWithNumbersContext = exports.NaamPhraseContext = exports.IdentifierOrKeywordNoIsContext = exports.IdentifierOrKeywordContext = exports.IdentifierContext = exports.BeslistabelColumnTextContext = exports.BeslistabelCellValueContext = exports.BeslistabelRowContext = exports.BeslistabelSeparatorContext = exports.BeslistabelHeaderContext = exports.BeslistabelTableContext = exports.BeslistabelContext = exports.DefinitieContext = exports.RegelSpraakDocumentContext = void 0;
exports.GenesteSamengesteldeVoorwaardeOnderdeelContext = exports.GenesteSamengesteldeVoorwaardeContext = exports.ElementaireVoorwaardeContext = exports.BulletPrefixContext = exports.NestedBulletPrefixContext = exports.OuterBulletPrefixContext = exports.SamengesteldeVoorwaardeOnderdeelContext = exports.VoorwaardeKwantificatieContext = exports.ToplevelSamengesteldeVoorwaardeContext = exports.VoorwaardeDeelContext = exports.InconsistentResultaatContext = exports.AlleAttributenVanObjecttypeContext = exports.UniekzijnResultaatContext = exports.ConsistentieregelContext = exports.SimpleNaamwoordContext = exports.AttributeInitVervolgContext = exports.ObjectAttributeInitContext = exports.ObjectCreatieContext = exports.VoorzetselNietVanContext = exports.FeitCreatieWordContext = exports.FeitCreatieSubjectWordContext = exports.FeitCreatieSubjectPhraseContext = exports.FeitCreatieRolPhraseContext = exports.FeitCreatiePatternContext = exports.ConsistencyOperatorContext = exports.FeitCreatieResultaatContext = exports.KenmerkFeitResultaatContext = exports.DagsoortdefinitieResultaatContext = exports.ObjectCreatieResultaatContext = exports.VerdelingContext = exports.ConsistencyCheckResultaatContext = exports.RelationshipWithAttributeResultaatContext = exports.GelijkstellingResultaatContext = exports.ResultaatDeelContext = exports.VersieGeldigheidContext = exports.RegelVersieContext = exports.RegelNameExtensionContext = exports.RegelNameContext = exports.RegelGroepContext = exports.RegelContext = exports.CardinalityWordContext = exports.CardinalityLineContext = exports.RolContentWordsContext = exports.RolObjectTypeContext = exports.RolDefinitionContext = exports.FeitTypeDefinitionContext = exports.ParameterMetLidwoordContext = exports.ParameterNamePartContext = exports.ParameterNamePhraseContext = exports.ParameterDefinitionContext = void 0;
exports.SubordinateClauseExprContext = exports.GelijkIsAanOfExprContext = exports.ComparisonExpressionContext = exports.LogicalExprContext = exports.LogicalExpressionContext = exports.SimpleExprBaseContext = exports.SimpleExprBegrenzingAfrondingContext = exports.SimpleExprAfrondingContext = exports.SimpleExprBegrenzingContext = exports.SimpleExpressieContext = exports.ExprAfrondingContext = exports.ExprBegrenzingContext = exports.ExprBegrenzingAfrondingContext = exports.SimpleExprContext = exports.ExpressieContext = exports.VariabeleExpressieContext = exports.VariabeleToekenningContext = exports.VariabeleDeelContext = exports.DatumExpressieContext = exports.TekstExpressieContext = exports.GetalExpressieContext = exports.DatumVergelijkingsOperatorMeervoudContext = exports.TekstVergelijkingsOperatorMeervoudContext = exports.GetalVergelijkingsOperatorMeervoudContext = exports.GenesteSamengesteldeVoorwaardeInPredicaatContext = exports.VergelijkingInPredicaatContext = exports.ElementaireVoorwaardeInPredicaatContext = exports.SamengesteldeVoorwaardeOnderdeelInPredicaatContext = exports.SamengesteldPredicaatContext = exports.DatumPredicaatContext = exports.TekstPredicaatContext = exports.GetalPredicaatContext = exports.AttribuutVergelijkingsPredicaatContext = exports.RolNaamContext = exports.EenzijdigeObjectVergelijkingContext = exports.ObjectPredicaatContext = exports.ElementairPredicaatContext = exports.PredicaatContext = exports.AggregationSubjectContext = exports.BezieldeReferentieContext = exports.KenmerkPhraseContext = exports.KenmerkNaamContext = exports.AttribuutMetLidwoordContext = exports.AttribuutReferentieContext = exports.BasisOnderwerpWithNumbersContext = exports.BasisOnderwerpContext = exports.OnderwerpBasisWithNumbersContext = exports.OnderwerpBasisContext = exports.OnderwerpReferentieWithNumbersContext = exports.OnderwerpReferentieContext = void 0;
exports.IdentifierExprContext = exports.CapitalizedTotaalVanExprContext = exports.MaandUitFuncExprContext = exports.AbsTijdsduurFuncExprContext = exports.PasenFuncExprContext = exports.EersteDatumFuncExprContext = exports.PercentageFuncExprContext = exports.StringLiteralExprContext = exports.PercentageLiteralExprContext = exports.DatumMetFuncExprContext = exports.DimensieRangeAggExprContext = exports.ParenExprContext = exports.AantalAttribuutExprContext = exports.CapitalizedTijdsevenredigDeelExprContext = exports.TijdsevenredigDeelExprContext = exports.TotaalVanExprContext = exports.JaarUitFuncExprContext = exports.BooleanFalseLiteralExprContext = exports.NaamwoordExprContext = exports.BegrenzingExprContext = exports.DagUitFuncExprContext = exports.AttrRefExprContext = exports.SomAlleAttribuutExprContext = exports.ConcatenatieExprContext = exports.UnaryNietExprContext = exports.AantalFuncExprContext = exports.DatumLiteralExprContext = exports.NumberLiteralExprContext = exports.EnumLiteralExprContext = exports.RekendatumKeywordExprContext = exports.MaxValFuncExprContext = exports.AbsValFuncExprContext = exports.BooleanTrueLiteralExprContext = exports.WortelFuncExprContext = exports.PrimaryExpressionContext = exports.PowerOperatorContext = exports.PowerExpressionContext = exports.MultiplicativeOperatorContext = exports.MultiplicativeExpressionContext = exports.AdditiveOperatorContext = exports.AdditiveExpressionContext = exports.ComparisonOperatorContext = exports.GelijkIsAanOperatorContext = exports.LiteralValueContext = exports.RegelStatusConditionExprContext = exports.IsKenmerkExprContext = exports.HeeftKenmerkExprContext = exports.UnaryConditionExprContext = exports.BinaryComparisonExprContext = exports.PeriodeCheckExprContext = void 0;
exports.RegelStatusGevuurdCheckContext = exports.RegelStatusInconsistentCheckContext = exports.RegelStatusConditionContext = exports.UnaryUniekConditionContext = exports.UnaryInconsistentDataConditionContext = exports.UnaryDagsoortConditionContext = exports.UnaryRolConditionContext = exports.UnaryNumeriekExactConditionContext = exports.UnaryKenmerkConditionContext = exports.UnaryCheckConditionContext = exports.UnaryConditionContext = exports.AggregerenOverBereikContext = exports.AggregerenOverVerzamelingContext = exports.AggregerenOverAlleDimensiesContext = exports.DimensieSelectieContext = exports.DatumAggregatieFunctieContext = exports.GetalAggregatieFunctieContext = exports.DateExpressionContext = exports.TotEnMetPeriodeContext = exports.TotPeriodeContext = exports.VanTotEnMetPeriodeContext = exports.VanTotPeriodeContext = exports.VanafPeriodeContext = exports.PeriodeDefinitieContext = exports.PeriodevergelijkingEnkelvoudigContext = exports.PeriodevergelijkingElementairContext = exports.ConditieBijExpressieContext = exports.BegrenzingMaximumContext = exports.BegrenzingMinimumContext = exports.BegrenzingContext = exports.AfrondingContext = exports.PronounExprContext = exports.ParamRefExprContext = exports.UnaryMinusExprContext = exports.HetAantalDagenInExprContext = exports.LaatsteDatumFuncExprContext = exports.AfrondingExprContext = exports.MinAlleAttribuutExprContext = exports.BezieldeRefExprContext = exports.DateCalcExprContext = exports.MaxAlleAttribuutExprContext = exports.MinValFuncExprContext = exports.PercentageOfExprContext = exports.BegrenzingAfrondingExprContext = exports.SimpleConcatenatieExprContext = exports.SomAlleExprContext = exports.SomFuncExprContext = exports.OnderwerpRefExprContext = exports.TijdsduurFuncExprContext = exports.DimensieAggExprContext = void 0;
exports.VerdelingRestContext = exports.VerdelingAfrondingContext = exports.VerdelingTieBreakContext = exports.VerdelingOpVolgordeContext = exports.VerdelingMaximumContext = exports.VerdelingGelijkeDelenContext = exports.VerdelingNaarRatoContext = exports.VerdelingMethodeContext = exports.VerdelingMethodeBulletContext = exports.VerdelingMethodeBulletListContext = exports.VerdelingMethodeMultiLineContext = exports.VerdelingMethodeSimpleContext = exports.VerdelingResultaatContext = exports.TekstreeksExprContext = exports.DagsoortDefinitionContext = exports.SubordinateIsKenmerkExprContext = exports.SubordinateHasExprContext = exports.SubordinateIsWithExprContext = exports.SubordinateClauseExpressionContext = void 0;
const antlr4_1 = require("antlr4");
class RegelSpraakParser extends antlr4_1.Parser {
    static VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL = 1;
    static NA_HET_ATTRIBUUT_MET_VOORZETSEL = 2;
    static DATUM_TIJD_MILLIS = 3;
    static GEDURENDE_DE_TIJD_DAT = 4;
    static GEDURENDE_HET_GEHELE = 5;
    static GEDURENDE_DE_GEHELE = 6;
    static HET_IS_DE_PERIODE = 7;
    static WORDT_BEREKEND_ALS = 8;
    static WORDT_GESTELD_OP = 9;
    static WORDT_GEINITIALISEERD_OP = 10;
    static DE_ABSOLUTE_TIJDSDUUR_VAN = 11;
    static DE_ABSOLUTE_WAARDE_VAN = 12;
    static DE_MAXIMALE_WAARDE_VAN = 13;
    static DE_MINIMALE_WAARDE_VAN = 14;
    static HET_TOTAAL_VAN = 15;
    static HET_TIJDSEVENREDIG_DEEL_PER = 16;
    static DE_DATUM_MET = 17;
    static DE_EERSTE_PAASDAG_VAN = 18;
    static ALS_ONVERDEELDE_REST_BLIJFT = 19;
    static MET_EEN_MINIMUM_VAN = 20;
    static MET_EEN_MAXIMUM_VAN = 21;
    static GROTER_OF_GELIJK_AAN = 22;
    static KLEINER_OF_GELIJK_AAN = 23;
    static LATER_OF_GELIJK_AAN = 24;
    static EERDER_OF_GELIJK_AAN = 25;
    static WAARBIJ_WORDT_VERDEELD = 26;
    static BESTAANDE_UIT = 27;
    static WEDERKERIG_FEITTYPE = 28;
    static IS_VAN_HET_TYPE = 29;
    static CONCATENATIE_VAN = 30;
    static VOLGEND_CRITERIUM = 31;
    static VOLGENDE_CRITERIA = 32;
    static BIJ_EVEN_GROOT_CRITERIUM = 33;
    static OP_VOLGORDE_VAN = 34;
    static NAAR_RATO_VAN = 35;
    static NUMERIEK_MET_EXACT = 36;
    static AAN_DE_ELFPROEF = 37;
    static GROTER_IS_DAN = 38;
    static KLEINER_IS_DAN = 39;
    static WORDT_VOLDAAN = 40;
    static ER_WORDT_EEN_NIEUW = 41;
    static WORDT_EEN_NIEUW = 42;
    static AANGEMAAKT = 43;
    static CREEER = 44;
    static NIEUWE = 45;
    static ER_AAN = 46;
    static GELIJK_IS_AAN = 47;
    static IS_GELIJK_AAN = 48;
    static IS_ONGELIJK_AAN = 49;
    static IS_KLEINER_DAN = 50;
    static IS_KLEINER_OF_GELIJK_AAN = 51;
    static IS_GROTER_DAN = 52;
    static IS_GROTER_OF_GELIJK_AAN = 53;
    static ZIJN_GELIJK_AAN = 54;
    static ZIJN_ONGELIJK_AAN = 55;
    static ZIJN_GROTER_DAN = 56;
    static ZIJN_GROTER_OF_GELIJK_AAN = 57;
    static ZIJN_KLEINER_DAN = 58;
    static ZIJN_KLEINER_OF_GELIJK_AAN = 59;
    static IS_LATER_DAN = 60;
    static IS_LATER_OF_GELIJK_AAN = 61;
    static IS_EERDER_DAN = 62;
    static IS_EERDER_OF_GELIJK_AAN = 63;
    static ZIJN_LATER_DAN = 64;
    static ZIJN_LATER_OF_GELIJK_AAN = 65;
    static ZIJN_EERDER_DAN = 66;
    static ZIJN_EERDER_OF_GELIJK_AAN = 67;
    static IS_LEEG = 68;
    static IS_GEVULD = 69;
    static ZIJN_LEEG = 70;
    static ZIJN_GEVULD = 71;
    static IS_KENMERK = 72;
    static IS_ROL = 73;
    static ZIJN_KENMERK = 74;
    static ZIJN_ROL = 75;
    static IS_NIET_KENMERK = 76;
    static IS_NIET_ROL = 77;
    static ZIJN_NIET_KENMERK = 78;
    static ZIJN_NIET_ROL = 79;
    static VOLDOET_AAN_DE_ELFPROEF = 80;
    static VOLDOEN_AAN_DE_ELFPROEF = 81;
    static VOLDOET_NIET_AAN_DE_ELFPROEF = 82;
    static VOLDOEN_NIET_AAN_DE_ELFPROEF = 83;
    static IS_NUMERIEK_MET_EXACT = 84;
    static IS_NIET_NUMERIEK_MET_EXACT = 85;
    static ZIJN_NUMERIEK_MET_EXACT = 86;
    static ZIJN_NIET_NUMERIEK_MET_EXACT = 87;
    static IS_EEN_DAGSOORT = 88;
    static ZIJN_EEN_DAGSOORT = 89;
    static IS_GEEN_DAGSOORT = 90;
    static ZIJN_GEEN_DAGSOORT = 91;
    static MOETEN_UNIEK_ZIJN = 92;
    static IS_GEVUURD = 93;
    static IS_INCONSISTENT = 94;
    static CONSISTENTIEREGEL = 95;
    static REGEL = 96;
    static REGELGROEP = 97;
    static BESLISTABEL = 98;
    static OBJECTTYPE = 99;
    static DOMEIN = 100;
    static LIJST = 101;
    static DIMENSIE = 102;
    static EENHEIDSYSTEEM = 103;
    static PARAMETER = 104;
    static FEITTYPE = 105;
    static DAGSOORT = 106;
    static DAARBIJ_GELDT = 107;
    static GELDIG = 108;
    static HEBBEN = 109;
    static HEEFT = 110;
    static INDIEN = 111;
    static IS_RECURSIEF = 112;
    static IS = 113;
    static MOET = 114;
    static MOETEN = 115;
    static WORDT_VERDEELD_OVER = 116;
    static WORDT = 117;
    static VOLDAAN = 118;
    static ZIJN = 119;
    static HAAR = 120;
    static HUN = 121;
    static AAN = 122;
    static AFGEROND_OP = 123;
    static ALLE = 124;
    static EERDER_DAN = 125;
    static GEDEELD_DOOR = 126;
    static GEDEELD_DOOR_ABS = 127;
    static GELIJK_AAN = 128;
    static GEVULD = 129;
    static GEVUURD = 130;
    static GROTER_DAN = 131;
    static INCONSISTENT = 132;
    static KLEINER_DAN = 133;
    static LATER_DAN = 134;
    static LEEG = 135;
    static MAAL = 136;
    static MIN = 137;
    static NAAR_BENEDEN = 138;
    static NAAR_BOVEN = 139;
    static NIET = 140;
    static ONGELIJK_ZIJN_AAN = 141;
    static ONGELIJK_AAN = 142;
    static PLUS = 143;
    static REKENKUNDIG = 144;
    static RICHTING_NUL = 145;
    static TOT = 146;
    static TOT_DE_MACHT = 147;
    static TOT_EN_MET = 148;
    static UNIEK = 149;
    static VANAF = 150;
    static VERENIGD_MET = 151;
    static VERMINDERD_MET = 152;
    static VOLDOEN = 153;
    static VOLDOET = 154;
    static WEG_VAN_NUL = 155;
    static DE_WORTEL_VAN = 156;
    static TENMINSTE = 157;
    static TEN_MINSTE = 158;
    static TEN_HOOGSTE = 159;
    static PRECIES = 160;
    static VOORWAARDE = 161;
    static VOORWAARDEN = 162;
    static BEZITTELIJK = 163;
    static BIJVOEGLIJK = 164;
    static BEZIELD = 165;
    static BOOLEAN = 166;
    static CIJFERS = 167;
    static DATUM_IN_DAGEN = 168;
    static DECIMALEN = 169;
    static ENUMERATIE = 170;
    static GEDIMENSIONEERD_MET = 171;
    static GEHEEL_GETAL = 172;
    static GETAL = 173;
    static KENMERK = 174;
    static KENMERKEN = 175;
    static MET = 176;
    static MET_EENHEID = 177;
    static MV_START = 178;
    static NEGATIEF = 179;
    static NIET_NEGATIEF = 180;
    static NUMERIEK = 181;
    static PERCENTAGE = 182;
    static POSITIEF = 183;
    static ROL = 184;
    static ROLLEN = 185;
    static TEKST = 186;
    static VOOR_ELK_JAAR = 187;
    static VOOR_ELKE_DAG = 188;
    static VOOR_ELKE_MAAND = 189;
    static AANTAL = 190;
    static EERSTE_VAN = 191;
    static IN_HELE = 192;
    static LAATSTE_VAN = 193;
    static REEKS_VAN_TEKSTEN_EN_WAARDEN = 194;
    static SOM_VAN = 195;
    static TIJDSDUUR_VAN = 196;
    static AFNEMENDE = 197;
    static IN_GELIJKE_DELEN = 198;
    static OVER_VERDELING = 199;
    static TOENEMENDE = 200;
    static DRIE_TELWOORD = 201;
    static EEN_TELWOORD = 202;
    static GEEN_VAN_DE = 203;
    static GEEN = 204;
    static TWEE_TELWOORD = 205;
    static VIER_TELWOORD = 206;
    static ALTIJD = 207;
    static BIJ = 208;
    static DAG = 209;
    static DAGEN = 210;
    static DAT = 211;
    static DE = 212;
    static DD_PUNT = 213;
    static DIE = 214;
    static EEN = 215;
    static EN = 216;
    static HET = 217;
    static MEERDERE = 218;
    static HIJ = 219;
    static IN = 220;
    static JAAR = 221;
    static JAREN = 222;
    static KWARTAAL = 223;
    static MAAND = 224;
    static MAANDEN = 225;
    static MILLISECONDE = 226;
    static MINUUT = 227;
    static MINUTEN = 228;
    static OF = 229;
    static ONWAAR = 230;
    static OP = 231;
    static OUDER = 232;
    static OVER = 233;
    static PERIODE = 234;
    static REKENDATUM = 235;
    static REKENJAAR = 236;
    static REGELVERSIE = 237;
    static SECONDE = 238;
    static SECONDEN = 239;
    static TM = 240;
    static UIT = 241;
    static UUR = 242;
    static UREN = 243;
    static VAN = 244;
    static VOLGENDE_VOORWAARDE = 245;
    static VOLGENDE_VOORWAARDEN = 246;
    static VOLGENDE = 247;
    static VOOR = 248;
    static WAAR = 249;
    static WEEK = 250;
    static WEKEN = 251;
    static ER = 252;
    static METER = 253;
    static KILOGRAM = 254;
    static VOET = 255;
    static POND = 256;
    static MIJL = 257;
    static M = 258;
    static KG = 259;
    static S = 260;
    static FT = 261;
    static LB = 262;
    static MI = 263;
    static EURO_SYMBOL = 264;
    static DOLLAR_SYMBOL = 265;
    static DEGREE_SYMBOL = 266;
    static IDENTIFIER = 267;
    static NUMBER = 268;
    static EQUALS = 269;
    static DATE_TIME_LITERAL = 270;
    static PERCENTAGE_LITERAL = 271;
    static STRING_LITERAL = 272;
    static ENUM_LITERAL = 273;
    static LPAREN = 274;
    static RPAREN = 275;
    static LBRACE = 276;
    static RBRACE = 277;
    static COMMA = 278;
    static DOT = 279;
    static COLON = 280;
    static SEMICOLON = 281;
    static SLASH = 282;
    static PERCENT_SIGN = 283;
    static BULLET = 284;
    static ASTERISK = 285;
    static L_ANGLE_QUOTE = 286;
    static R_ANGLE_QUOTE = 287;
    static CARET = 288;
    static DOUBLE_DOT = 289;
    static WS = 290;
    static LINE_COMMENT = 291;
    static MINUS = 292;
    static PIPE = 293;
    static NVT = 294;
    static EOF = antlr4_1.Token.EOF;
    static RULE_regelSpraakDocument = 0;
    static RULE_definitie = 1;
    static RULE_beslistabel = 2;
    static RULE_beslistabelTable = 3;
    static RULE_beslistabelHeader = 4;
    static RULE_beslistabelSeparator = 5;
    static RULE_beslistabelRow = 6;
    static RULE_beslistabelCellValue = 7;
    static RULE_beslistabelColumnText = 8;
    static RULE_identifier = 9;
    static RULE_identifierOrKeyword = 10;
    static RULE_identifierOrKeywordNoIs = 11;
    static RULE_naamPhrase = 12;
    static RULE_naamPhraseWithNumbers = 13;
    static RULE_identifierOrKeywordWithNumbers = 14;
    static RULE_naamPhraseNoIs = 15;
    static RULE_naamwoord = 16;
    static RULE_naamwoordWithNumbers = 17;
    static RULE_naamwoordNoIs = 18;
    static RULE_voorzetsel = 19;
    static RULE_datumLiteral = 20;
    static RULE_unit = 21;
    static RULE_timeUnit = 22;
    static RULE_objectTypeDefinition = 23;
    static RULE_objectTypeMember = 24;
    static RULE_kenmerkSpecificatie = 25;
    static RULE_attribuutSpecificatie = 26;
    static RULE_datatype = 27;
    static RULE_lijstDatatype = 28;
    static RULE_numeriekDatatype = 29;
    static RULE_tekstDatatype = 30;
    static RULE_percentageDatatype = 31;
    static RULE_booleanDatatype = 32;
    static RULE_datumTijdDatatype = 33;
    static RULE_getalSpecificatie = 34;
    static RULE_domeinDefinition = 35;
    static RULE_domeinType = 36;
    static RULE_enumeratieSpecificatie = 37;
    static RULE_domeinRef = 38;
    static RULE_objectTypeRef = 39;
    static RULE_eenheidsysteemDefinition = 40;
    static RULE_eenheidEntry = 41;
    static RULE_unitIdentifier = 42;
    static RULE_eenheidExpressie = 43;
    static RULE_eenheidMacht = 44;
    static RULE_dimensieDefinition = 45;
    static RULE_voorzetselSpecificatie = 46;
    static RULE_labelWaardeSpecificatie = 47;
    static RULE_tijdlijn = 48;
    static RULE_dimensieRef = 49;
    static RULE_parameterDefinition = 50;
    static RULE_parameterNamePhrase = 51;
    static RULE_parameterNamePart = 52;
    static RULE_parameterMetLidwoord = 53;
    static RULE_feitTypeDefinition = 54;
    static RULE_rolDefinition = 55;
    static RULE_rolObjectType = 56;
    static RULE_rolContentWords = 57;
    static RULE_cardinalityLine = 58;
    static RULE_cardinalityWord = 59;
    static RULE_regel = 60;
    static RULE_regelGroep = 61;
    static RULE_regelName = 62;
    static RULE_regelNameExtension = 63;
    static RULE_regelVersie = 64;
    static RULE_versieGeldigheid = 65;
    static RULE_resultaatDeel = 66;
    static RULE_consistencyOperator = 67;
    static RULE_feitCreatiePattern = 68;
    static RULE_feitCreatieRolPhrase = 69;
    static RULE_feitCreatieSubjectPhrase = 70;
    static RULE_feitCreatieSubjectWord = 71;
    static RULE_feitCreatieWord = 72;
    static RULE_voorzetselNietVan = 73;
    static RULE_objectCreatie = 74;
    static RULE_objectAttributeInit = 75;
    static RULE_attributeInitVervolg = 76;
    static RULE_simpleNaamwoord = 77;
    static RULE_consistentieregel = 78;
    static RULE_uniekzijnResultaat = 79;
    static RULE_alleAttributenVanObjecttype = 80;
    static RULE_inconsistentResultaat = 81;
    static RULE_voorwaardeDeel = 82;
    static RULE_toplevelSamengesteldeVoorwaarde = 83;
    static RULE_voorwaardeKwantificatie = 84;
    static RULE_samengesteldeVoorwaardeOnderdeel = 85;
    static RULE_outerBulletPrefix = 86;
    static RULE_nestedBulletPrefix = 87;
    static RULE_bulletPrefix = 88;
    static RULE_elementaireVoorwaarde = 89;
    static RULE_genesteSamengesteldeVoorwaarde = 90;
    static RULE_genesteSamengesteldeVoorwaardeOnderdeel = 91;
    static RULE_onderwerpReferentie = 92;
    static RULE_onderwerpReferentieWithNumbers = 93;
    static RULE_onderwerpBasis = 94;
    static RULE_onderwerpBasisWithNumbers = 95;
    static RULE_basisOnderwerp = 96;
    static RULE_basisOnderwerpWithNumbers = 97;
    static RULE_attribuutReferentie = 98;
    static RULE_attribuutMetLidwoord = 99;
    static RULE_kenmerkNaam = 100;
    static RULE_kenmerkPhrase = 101;
    static RULE_bezieldeReferentie = 102;
    static RULE_aggregationSubject = 103;
    static RULE_predicaat = 104;
    static RULE_elementairPredicaat = 105;
    static RULE_objectPredicaat = 106;
    static RULE_eenzijdigeObjectVergelijking = 107;
    static RULE_rolNaam = 108;
    static RULE_attribuutVergelijkingsPredicaat = 109;
    static RULE_getalPredicaat = 110;
    static RULE_tekstPredicaat = 111;
    static RULE_datumPredicaat = 112;
    static RULE_samengesteldPredicaat = 113;
    static RULE_samengesteldeVoorwaardeOnderdeelInPredicaat = 114;
    static RULE_elementaireVoorwaardeInPredicaat = 115;
    static RULE_vergelijkingInPredicaat = 116;
    static RULE_genesteSamengesteldeVoorwaardeInPredicaat = 117;
    static RULE_getalVergelijkingsOperatorMeervoud = 118;
    static RULE_tekstVergelijkingsOperatorMeervoud = 119;
    static RULE_datumVergelijkingsOperatorMeervoud = 120;
    static RULE_getalExpressie = 121;
    static RULE_tekstExpressie = 122;
    static RULE_datumExpressie = 123;
    static RULE_variabeleDeel = 124;
    static RULE_variabeleToekenning = 125;
    static RULE_variabeleExpressie = 126;
    static RULE_expressie = 127;
    static RULE_simpleExpressie = 128;
    static RULE_logicalExpression = 129;
    static RULE_comparisonExpression = 130;
    static RULE_literalValue = 131;
    static RULE_gelijkIsAanOperator = 132;
    static RULE_comparisonOperator = 133;
    static RULE_additiveExpression = 134;
    static RULE_additiveOperator = 135;
    static RULE_multiplicativeExpression = 136;
    static RULE_multiplicativeOperator = 137;
    static RULE_powerExpression = 138;
    static RULE_powerOperator = 139;
    static RULE_primaryExpression = 140;
    static RULE_afronding = 141;
    static RULE_begrenzing = 142;
    static RULE_begrenzingMinimum = 143;
    static RULE_begrenzingMaximum = 144;
    static RULE_conditieBijExpressie = 145;
    static RULE_periodevergelijkingElementair = 146;
    static RULE_periodevergelijkingEnkelvoudig = 147;
    static RULE_periodeDefinitie = 148;
    static RULE_dateExpression = 149;
    static RULE_getalAggregatieFunctie = 150;
    static RULE_datumAggregatieFunctie = 151;
    static RULE_dimensieSelectie = 152;
    static RULE_aggregerenOverAlleDimensies = 153;
    static RULE_aggregerenOverVerzameling = 154;
    static RULE_aggregerenOverBereik = 155;
    static RULE_unaryCondition = 156;
    static RULE_regelStatusCondition = 157;
    static RULE_subordinateClauseExpression = 158;
    static RULE_dagsoortDefinition = 159;
    static RULE_tekstreeksExpr = 160;
    static RULE_verdelingResultaat = 161;
    static RULE_verdelingMethodeSimple = 162;
    static RULE_verdelingMethodeMultiLine = 163;
    static RULE_verdelingMethodeBulletList = 164;
    static RULE_verdelingMethodeBullet = 165;
    static RULE_verdelingMethode = 166;
    static RULE_verdelingRest = 167;
    static literalNames = [null, "'(voor het attribuut zonder voorzetsel):'",
        "'(na het attribuut met voorzetsel'",
        "'Datum en tijd in millisecondes'",
        "'gedurende de tijd dat'",
        "'gedurende het gehele'",
        "'gedurende de gehele'",
        null, "'moet berekend worden als'",
        "'moet gesteld worden op'",
        "'moet ge\\u00EFnitialiseerd worden op'",
        "'de absolute tijdsduur van'",
        "'de absolute waarde van'",
        "'de maximale waarde van'",
        "'de minimale waarde van'",
        "'het totaal van'",
        "'het tijdsevenredig deel per'",
        "'de datum met jaar, maand en dag'",
        "'de eerste paasdag van'",
        "'Als onverdeelde rest blijft'",
        "'met een minimum van'",
        "'met een maximum van'",
        "'groter of gelijk aan'",
        "'kleiner of gelijk aan'",
        "'later of gelijk aan'",
        "'eerder of gelijk aan'",
        "'waarbij wordt verdeeld'",
        "', bestaande uit de'",
        "'Wederkerig feittype'",
        "'is van het type'",
        "'de concatenatie van'",
        "'het volgende criterium:'",
        "'volgende criteria:'",
        "'bij een even groot criterium'",
        "'op volgorde van'",
        "'naar rato van'",
        "'numeriek met exact'",
        "'aan de elfproef'",
        "'groter is dan'",
        "'kleiner is dan'",
        "'wordt voldaan'",
        null, "'wordt een nieuw'",
        "'aangemaakt'",
        "'Cre\\u00EBer'",
        "'nieuwe'",
        null, "'gelijk is aan'",
        "'is gelijk aan'",
        "'is ongelijk aan'",
        "'is kleiner dan'",
        "'is kleiner of gelijk aan'",
        "'is groter dan'",
        "'is groter of gelijk aan'",
        "'zijn gelijk aan'",
        "'zijn ongelijk aan'",
        "'zijn groter dan'",
        "'zijn groter of gelijk aan'",
        "'zijn kleiner dan'",
        "'zijn kleiner of gelijk aan'",
        "'is later dan'",
        "'is later of gelijk aan'",
        "'is eerder dan'",
        "'is eerder of gelijk aan'",
        "'zijn later dan'",
        "'zijn later of gelijk aan'",
        "'zijn eerder dan'",
        "'zijn eerder of gelijk aan'",
        "'is leeg'",
        "'is gevuld'",
        "'zijn leeg'",
        "'zijn gevuld'",
        "'is kenmerk'",
        "'is rol'",
        "'zijn kenmerk'",
        "'zijn rol'",
        "'is niet kenmerk'",
        "'is niet rol'",
        "'zijn niet kenmerk'",
        "'zijn niet rol'",
        "'voldoet aan de elfproef'",
        "'voldoen aan de elfproef'",
        "'voldoet niet aan de elfproef'",
        "'voldoen niet aan de elfproef'",
        "'is numeriek met exact'",
        "'is niet numeriek met exact'",
        "'zijn numeriek met exact'",
        "'zijn niet numeriek met exact'",
        "'is een dagsoort'",
        "'zijn een dagsoort'",
        "'is geen dagsoort'",
        "'zijn geen dagsoort'",
        "'moeten uniek zijn'",
        "'is gevuurd'",
        "'is inconsistent'",
        "'Consistentieregel'",
        "'Regel'", "'Regelgroep'",
        "'Beslistabel'",
        "'Objecttype'",
        "'Domein'",
        "'Lijst'", "'Dimensie'",
        "'Eenheidsysteem'",
        "'Parameter'",
        "'Feittype'",
        "'Dagsoort'",
        "'Daarbij geldt:'",
        "'geldig'",
        "'hebben'",
        "'heeft'", "'indien'",
        "'is recursief'",
        "'is'", "'moet'",
        "'moeten'",
        "'wordt verdeeld over'",
        "'wordt'", "'voldaan'",
        "'zijn'", "'haar'",
        "'hun'", "'aan'",
        "'afgerond op'",
        "'alle'", "'eerder dan'",
        "'gedeeld door'",
        "'gedeeld door (ABS)'",
        "'gelijk aan'",
        "'gevuld'",
        "'gevuurd'",
        "'groter dan'",
        "'inconsistent'",
        "'kleiner dan'",
        "'later dan'",
        "'leeg'", "'maal'",
        "'min'", "'naar beneden'",
        "'naar boven'",
        "'niet'", "'ongelijk zijn aan'",
        "'ongelijk aan'",
        "'plus'", "'rekenkundig'",
        "'richting nul'",
        "'tot'", "'tot de macht'",
        "'tot en met'",
        "'uniek'", "'vanaf'",
        "'verenigd met'",
        "'verminderd met'",
        "'voldoen'",
        "'voldoet'",
        "'weg van nul'",
        "'de wortel van'",
        "'tenminste'",
        "'ten minste'",
        "'ten hoogste'",
        "'precies'",
        "'voorwaarde'",
        "'voorwaarden'",
        "'(bezittelijk)'",
        "'(bijvoeglijk)'",
        "'(bezield)'",
        "'Boolean'",
        "'cijfers'",
        "'Datum in dagen'",
        "'decimalen'",
        "'Enumeratie'",
        "'gedimensioneerd met'",
        "'geheel getal'",
        "'getal'", "'kenmerk'",
        "'kenmerken'",
        "'met'", "'met eenheid'",
        "'(mv:'", "'negatief'",
        "'niet-negatief'",
        "'Numeriek'",
        "'Percentage'",
        "'positief'",
        "'rol'", "'rollen'",
        "'Tekst'", "'voor elk jaar'",
        "'voor elke dag'",
        "'voor elke maand'",
        "'aantal'",
        "'de eerste van'",
        "'in hele'",
        "'de laatste van'",
        "'reeks van teksten en waarden'",
        "'de som van'",
        "'de tijdsduur van'",
        "'afnemende'",
        "'in gelijke delen'",
        "'over.'", "'toenemende'",
        "'drie'", "'\\u00E9\\u00E9n'",
        "'geen van de'",
        "'geen'", "'twee'",
        "'vier'", "'altijd'",
        "'bij'", "'dag'",
        "'dagen'", "'dat'",
        null, "'dd.'",
        "'die'", null,
        "'en'", null,
        "'meerdere'",
        "'hij'", "'in'",
        "'jaar'", "'jaren'",
        "'kwartaal'",
        "'maand'", "'maanden'",
        "'milliseconde'",
        "'minuut'",
        "'minuten'",
        "'of'", "'onwaar'",
        "'op'", "'ouder'",
        "'over'", "'periode'",
        "'Rekendatum'",
        "'Rekenjaar'",
        "'regelversie'",
        "'seconde'",
        "'seconden'",
        "'t/m'", "'uit'",
        "'uur'", "'uren'",
        "'van'", "'volgende voorwaarde'",
        "'volgende voorwaarden'",
        "'volgende'",
        "'voor'", "'waar'",
        "'week'", "'weken'",
        "'er'", "'meter'",
        "'kilogram'",
        "'voet'", "'pond'",
        "'mijl'", "'m'",
        "'kg'", "'s'",
        "'ft'", "'lb'",
        "'mi'", "'\\u20AC'",
        "'$'", "'\\u00B0'",
        null, null,
        "'='", null,
        null, null,
        null, "'('",
        "')'", "'{'",
        "'}'", "','",
        "'.'", "':'",
        "';'", "'/'",
        "'%'", "'\\u2022'",
        "'*'", "'\\u00AB'",
        "'\\u00BB'",
        "'^'", "'..'",
        null, null,
        "'-'", "'|'",
        "'n.v.t.'"];
    static symbolicNames = [null, "VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL",
        "NA_HET_ATTRIBUUT_MET_VOORZETSEL",
        "DATUM_TIJD_MILLIS",
        "GEDURENDE_DE_TIJD_DAT",
        "GEDURENDE_HET_GEHELE",
        "GEDURENDE_DE_GEHELE",
        "HET_IS_DE_PERIODE",
        "WORDT_BEREKEND_ALS",
        "WORDT_GESTELD_OP",
        "WORDT_GEINITIALISEERD_OP",
        "DE_ABSOLUTE_TIJDSDUUR_VAN",
        "DE_ABSOLUTE_WAARDE_VAN",
        "DE_MAXIMALE_WAARDE_VAN",
        "DE_MINIMALE_WAARDE_VAN",
        "HET_TOTAAL_VAN",
        "HET_TIJDSEVENREDIG_DEEL_PER",
        "DE_DATUM_MET",
        "DE_EERSTE_PAASDAG_VAN",
        "ALS_ONVERDEELDE_REST_BLIJFT",
        "MET_EEN_MINIMUM_VAN",
        "MET_EEN_MAXIMUM_VAN",
        "GROTER_OF_GELIJK_AAN",
        "KLEINER_OF_GELIJK_AAN",
        "LATER_OF_GELIJK_AAN",
        "EERDER_OF_GELIJK_AAN",
        "WAARBIJ_WORDT_VERDEELD",
        "BESTAANDE_UIT",
        "WEDERKERIG_FEITTYPE",
        "IS_VAN_HET_TYPE",
        "CONCATENATIE_VAN",
        "VOLGEND_CRITERIUM",
        "VOLGENDE_CRITERIA",
        "BIJ_EVEN_GROOT_CRITERIUM",
        "OP_VOLGORDE_VAN",
        "NAAR_RATO_VAN",
        "NUMERIEK_MET_EXACT",
        "AAN_DE_ELFPROEF",
        "GROTER_IS_DAN",
        "KLEINER_IS_DAN",
        "WORDT_VOLDAAN",
        "ER_WORDT_EEN_NIEUW",
        "WORDT_EEN_NIEUW",
        "AANGEMAAKT",
        "CREEER", "NIEUWE",
        "ER_AAN", "GELIJK_IS_AAN",
        "IS_GELIJK_AAN",
        "IS_ONGELIJK_AAN",
        "IS_KLEINER_DAN",
        "IS_KLEINER_OF_GELIJK_AAN",
        "IS_GROTER_DAN",
        "IS_GROTER_OF_GELIJK_AAN",
        "ZIJN_GELIJK_AAN",
        "ZIJN_ONGELIJK_AAN",
        "ZIJN_GROTER_DAN",
        "ZIJN_GROTER_OF_GELIJK_AAN",
        "ZIJN_KLEINER_DAN",
        "ZIJN_KLEINER_OF_GELIJK_AAN",
        "IS_LATER_DAN",
        "IS_LATER_OF_GELIJK_AAN",
        "IS_EERDER_DAN",
        "IS_EERDER_OF_GELIJK_AAN",
        "ZIJN_LATER_DAN",
        "ZIJN_LATER_OF_GELIJK_AAN",
        "ZIJN_EERDER_DAN",
        "ZIJN_EERDER_OF_GELIJK_AAN",
        "IS_LEEG",
        "IS_GEVULD",
        "ZIJN_LEEG",
        "ZIJN_GEVULD",
        "IS_KENMERK",
        "IS_ROL", "ZIJN_KENMERK",
        "ZIJN_ROL",
        "IS_NIET_KENMERK",
        "IS_NIET_ROL",
        "ZIJN_NIET_KENMERK",
        "ZIJN_NIET_ROL",
        "VOLDOET_AAN_DE_ELFPROEF",
        "VOLDOEN_AAN_DE_ELFPROEF",
        "VOLDOET_NIET_AAN_DE_ELFPROEF",
        "VOLDOEN_NIET_AAN_DE_ELFPROEF",
        "IS_NUMERIEK_MET_EXACT",
        "IS_NIET_NUMERIEK_MET_EXACT",
        "ZIJN_NUMERIEK_MET_EXACT",
        "ZIJN_NIET_NUMERIEK_MET_EXACT",
        "IS_EEN_DAGSOORT",
        "ZIJN_EEN_DAGSOORT",
        "IS_GEEN_DAGSOORT",
        "ZIJN_GEEN_DAGSOORT",
        "MOETEN_UNIEK_ZIJN",
        "IS_GEVUURD",
        "IS_INCONSISTENT",
        "CONSISTENTIEREGEL",
        "REGEL", "REGELGROEP",
        "BESLISTABEL",
        "OBJECTTYPE",
        "DOMEIN", "LIJST",
        "DIMENSIE",
        "EENHEIDSYSTEEM",
        "PARAMETER",
        "FEITTYPE",
        "DAGSOORT",
        "DAARBIJ_GELDT",
        "GELDIG", "HEBBEN",
        "HEEFT", "INDIEN",
        "IS_RECURSIEF",
        "IS", "MOET",
        "MOETEN", "WORDT_VERDEELD_OVER",
        "WORDT", "VOLDAAN",
        "ZIJN", "HAAR",
        "HUN", "AAN",
        "AFGEROND_OP",
        "ALLE", "EERDER_DAN",
        "GEDEELD_DOOR",
        "GEDEELD_DOOR_ABS",
        "GELIJK_AAN",
        "GEVULD", "GEVUURD",
        "GROTER_DAN",
        "INCONSISTENT",
        "KLEINER_DAN",
        "LATER_DAN",
        "LEEG", "MAAL",
        "MIN", "NAAR_BENEDEN",
        "NAAR_BOVEN",
        "NIET", "ONGELIJK_ZIJN_AAN",
        "ONGELIJK_AAN",
        "PLUS", "REKENKUNDIG",
        "RICHTING_NUL",
        "TOT", "TOT_DE_MACHT",
        "TOT_EN_MET",
        "UNIEK", "VANAF",
        "VERENIGD_MET",
        "VERMINDERD_MET",
        "VOLDOEN",
        "VOLDOET",
        "WEG_VAN_NUL",
        "DE_WORTEL_VAN",
        "TENMINSTE",
        "TEN_MINSTE",
        "TEN_HOOGSTE",
        "PRECIES",
        "VOORWAARDE",
        "VOORWAARDEN",
        "BEZITTELIJK",
        "BIJVOEGLIJK",
        "BEZIELD",
        "BOOLEAN",
        "CIJFERS",
        "DATUM_IN_DAGEN",
        "DECIMALEN",
        "ENUMERATIE",
        "GEDIMENSIONEERD_MET",
        "GEHEEL_GETAL",
        "GETAL", "KENMERK",
        "KENMERKEN",
        "MET", "MET_EENHEID",
        "MV_START",
        "NEGATIEF",
        "NIET_NEGATIEF",
        "NUMERIEK",
        "PERCENTAGE",
        "POSITIEF",
        "ROL", "ROLLEN",
        "TEKST", "VOOR_ELK_JAAR",
        "VOOR_ELKE_DAG",
        "VOOR_ELKE_MAAND",
        "AANTAL", "EERSTE_VAN",
        "IN_HELE",
        "LAATSTE_VAN",
        "REEKS_VAN_TEKSTEN_EN_WAARDEN",
        "SOM_VAN",
        "TIJDSDUUR_VAN",
        "AFNEMENDE",
        "IN_GELIJKE_DELEN",
        "OVER_VERDELING",
        "TOENEMENDE",
        "DRIE_TELWOORD",
        "EEN_TELWOORD",
        "GEEN_VAN_DE",
        "GEEN", "TWEE_TELWOORD",
        "VIER_TELWOORD",
        "ALTIJD", "BIJ",
        "DAG", "DAGEN",
        "DAT", "DE",
        "DD_PUNT",
        "DIE", "EEN",
        "EN", "HET",
        "MEERDERE",
        "HIJ", "IN",
        "JAAR", "JAREN",
        "KWARTAAL",
        "MAAND", "MAANDEN",
        "MILLISECONDE",
        "MINUUT", "MINUTEN",
        "OF", "ONWAAR",
        "OP", "OUDER",
        "OVER", "PERIODE",
        "REKENDATUM",
        "REKENJAAR",
        "REGELVERSIE",
        "SECONDE",
        "SECONDEN",
        "TM", "UIT",
        "UUR", "UREN",
        "VAN", "VOLGENDE_VOORWAARDE",
        "VOLGENDE_VOORWAARDEN",
        "VOLGENDE",
        "VOOR", "WAAR",
        "WEEK", "WEKEN",
        "ER", "METER",
        "KILOGRAM",
        "VOET", "POND",
        "MIJL", "M",
        "KG", "S",
        "FT", "LB",
        "MI", "EURO_SYMBOL",
        "DOLLAR_SYMBOL",
        "DEGREE_SYMBOL",
        "IDENTIFIER",
        "NUMBER", "EQUALS",
        "DATE_TIME_LITERAL",
        "PERCENTAGE_LITERAL",
        "STRING_LITERAL",
        "ENUM_LITERAL",
        "LPAREN", "RPAREN",
        "LBRACE", "RBRACE",
        "COMMA", "DOT",
        "COLON", "SEMICOLON",
        "SLASH", "PERCENT_SIGN",
        "BULLET", "ASTERISK",
        "L_ANGLE_QUOTE",
        "R_ANGLE_QUOTE",
        "CARET", "DOUBLE_DOT",
        "WS", "LINE_COMMENT",
        "MINUS", "PIPE",
        "NVT"];
    // tslint:disable:no-trailing-whitespace
    static ruleNames = [
        "regelSpraakDocument", "definitie", "beslistabel", "beslistabelTable",
        "beslistabelHeader", "beslistabelSeparator", "beslistabelRow", "beslistabelCellValue",
        "beslistabelColumnText", "identifier", "identifierOrKeyword", "identifierOrKeywordNoIs",
        "naamPhrase", "naamPhraseWithNumbers", "identifierOrKeywordWithNumbers",
        "naamPhraseNoIs", "naamwoord", "naamwoordWithNumbers", "naamwoordNoIs",
        "voorzetsel", "datumLiteral", "unit", "timeUnit", "objectTypeDefinition",
        "objectTypeMember", "kenmerkSpecificatie", "attribuutSpecificatie", "datatype",
        "lijstDatatype", "numeriekDatatype", "tekstDatatype", "percentageDatatype",
        "booleanDatatype", "datumTijdDatatype", "getalSpecificatie", "domeinDefinition",
        "domeinType", "enumeratieSpecificatie", "domeinRef", "objectTypeRef",
        "eenheidsysteemDefinition", "eenheidEntry", "unitIdentifier", "eenheidExpressie",
        "eenheidMacht", "dimensieDefinition", "voorzetselSpecificatie", "labelWaardeSpecificatie",
        "tijdlijn", "dimensieRef", "parameterDefinition", "parameterNamePhrase",
        "parameterNamePart", "parameterMetLidwoord", "feitTypeDefinition", "rolDefinition",
        "rolObjectType", "rolContentWords", "cardinalityLine", "cardinalityWord",
        "regel", "regelGroep", "regelName", "regelNameExtension", "regelVersie",
        "versieGeldigheid", "resultaatDeel", "consistencyOperator", "feitCreatiePattern",
        "feitCreatieRolPhrase", "feitCreatieSubjectPhrase", "feitCreatieSubjectWord",
        "feitCreatieWord", "voorzetselNietVan", "objectCreatie", "objectAttributeInit",
        "attributeInitVervolg", "simpleNaamwoord", "consistentieregel", "uniekzijnResultaat",
        "alleAttributenVanObjecttype", "inconsistentResultaat", "voorwaardeDeel",
        "toplevelSamengesteldeVoorwaarde", "voorwaardeKwantificatie", "samengesteldeVoorwaardeOnderdeel",
        "outerBulletPrefix", "nestedBulletPrefix", "bulletPrefix", "elementaireVoorwaarde",
        "genesteSamengesteldeVoorwaarde", "genesteSamengesteldeVoorwaardeOnderdeel",
        "onderwerpReferentie", "onderwerpReferentieWithNumbers", "onderwerpBasis",
        "onderwerpBasisWithNumbers", "basisOnderwerp", "basisOnderwerpWithNumbers",
        "attribuutReferentie", "attribuutMetLidwoord", "kenmerkNaam", "kenmerkPhrase",
        "bezieldeReferentie", "aggregationSubject", "predicaat", "elementairPredicaat",
        "objectPredicaat", "eenzijdigeObjectVergelijking", "rolNaam", "attribuutVergelijkingsPredicaat",
        "getalPredicaat", "tekstPredicaat", "datumPredicaat", "samengesteldPredicaat",
        "samengesteldeVoorwaardeOnderdeelInPredicaat", "elementaireVoorwaardeInPredicaat",
        "vergelijkingInPredicaat", "genesteSamengesteldeVoorwaardeInPredicaat",
        "getalVergelijkingsOperatorMeervoud", "tekstVergelijkingsOperatorMeervoud",
        "datumVergelijkingsOperatorMeervoud", "getalExpressie", "tekstExpressie",
        "datumExpressie", "variabeleDeel", "variabeleToekenning", "variabeleExpressie",
        "expressie", "simpleExpressie", "logicalExpression", "comparisonExpression",
        "literalValue", "gelijkIsAanOperator", "comparisonOperator", "additiveExpression",
        "additiveOperator", "multiplicativeExpression", "multiplicativeOperator",
        "powerExpression", "powerOperator", "primaryExpression", "afronding",
        "begrenzing", "begrenzingMinimum", "begrenzingMaximum", "conditieBijExpressie",
        "periodevergelijkingElementair", "periodevergelijkingEnkelvoudig", "periodeDefinitie",
        "dateExpression", "getalAggregatieFunctie", "datumAggregatieFunctie",
        "dimensieSelectie", "aggregerenOverAlleDimensies", "aggregerenOverVerzameling",
        "aggregerenOverBereik", "unaryCondition", "regelStatusCondition", "subordinateClauseExpression",
        "dagsoortDefinition", "tekstreeksExpr", "verdelingResultaat", "verdelingMethodeSimple",
        "verdelingMethodeMultiLine", "verdelingMethodeBulletList", "verdelingMethodeBullet",
        "verdelingMethode", "verdelingRest",
    ];
    get grammarFileName() { return "RegelSpraak.g4"; }
    get literalNames() { return RegelSpraakParser.literalNames; }
    get symbolicNames() { return RegelSpraakParser.symbolicNames; }
    get ruleNames() { return RegelSpraakParser.ruleNames; }
    get serializedATN() { return RegelSpraakParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr4_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new antlr4_1.ParserATNSimulator(this, RegelSpraakParser._ATN, RegelSpraakParser.DecisionsToDFA, new antlr4_1.PredictionContextCache());
    }
    // @RuleVersion(0)
    regelSpraakDocument() {
        let localctx = new RegelSpraakDocumentContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, RegelSpraakParser.RULE_regelSpraakDocument);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 28 || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 4031) !== 0)) {
                    {
                        this.state = 342;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case 28:
                            case 99:
                            case 100:
                            case 102:
                            case 104:
                            case 105:
                            case 106:
                                {
                                    this.state = 336;
                                    this.definitie();
                                }
                                break;
                            case 96:
                                {
                                    this.state = 337;
                                    this.regel();
                                }
                                break;
                            case 97:
                                {
                                    this.state = 338;
                                    this.regelGroep();
                                }
                                break;
                            case 98:
                                {
                                    this.state = 339;
                                    this.beslistabel();
                                }
                                break;
                            case 95:
                                {
                                    this.state = 340;
                                    this.consistentieregel();
                                }
                                break;
                            case 103:
                                {
                                    this.state = 341;
                                    this.eenheidsysteemDefinition();
                                }
                                break;
                            default:
                                throw new antlr4_1.NoViableAltException(this);
                        }
                    }
                    this.state = 346;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 347;
                this.match(RegelSpraakParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    definitie() {
        let localctx = new DefinitieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, RegelSpraakParser.RULE_definitie);
        try {
            this.state = 355;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 99:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 349;
                        this.objectTypeDefinition();
                    }
                    break;
                case 100:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 350;
                        this.domeinDefinition();
                    }
                    break;
                case 104:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 351;
                        this.parameterDefinition();
                    }
                    break;
                case 102:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 352;
                        this.dimensieDefinition();
                    }
                    break;
                case 28:
                case 105:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 353;
                        this.feitTypeDefinition();
                    }
                    break;
                case 106:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 354;
                        this.dagsoortDefinition();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabel() {
        let localctx = new BeslistabelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 4, RegelSpraakParser.RULE_beslistabel);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 357;
                this.match(RegelSpraakParser.BESLISTABEL);
                this.state = 358;
                this.naamwoord();
                this.state = 360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 108) {
                    {
                        this.state = 359;
                        this.regelVersie();
                    }
                }
                this.state = 362;
                this.beslistabelTable();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabelTable() {
        let localctx = new BeslistabelTableContext(this, this._ctx, this.state);
        this.enterRule(localctx, 6, RegelSpraakParser.RULE_beslistabelTable);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 364;
                this.beslistabelHeader();
                this.state = 365;
                this.beslistabelSeparator();
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 366;
                            this.beslistabelRow();
                        }
                    }
                    this.state = 369;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 293);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabelHeader() {
        let localctx = new BeslistabelHeaderContext(this, this._ctx, this.state);
        this.enterRule(localctx, 8, RegelSpraakParser.RULE_beslistabelHeader);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 371;
                this.match(RegelSpraakParser.PIPE);
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 293) {
                    {
                        this.state = 372;
                        this.match(RegelSpraakParser.PIPE);
                    }
                }
                this.state = 375;
                localctx._resultColumn = this.beslistabelColumnText();
                this.state = 376;
                this.match(RegelSpraakParser.PIPE);
                this.state = 377;
                localctx._beslistabelColumnText = this.beslistabelColumnText();
                localctx._conditionColumns.push(localctx._beslistabelColumnText);
                this.state = 382;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 378;
                                this.match(RegelSpraakParser.PIPE);
                                this.state = 379;
                                localctx._beslistabelColumnText = this.beslistabelColumnText();
                                localctx._conditionColumns.push(localctx._beslistabelColumnText);
                            }
                        }
                    }
                    this.state = 384;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
                }
                this.state = 386;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                    case 1:
                        {
                            this.state = 385;
                            this.match(RegelSpraakParser.PIPE);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabelSeparator() {
        let localctx = new BeslistabelSeparatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 10, RegelSpraakParser.RULE_beslistabelSeparator);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 389;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 293) {
                    {
                        this.state = 388;
                        this.match(RegelSpraakParser.PIPE);
                    }
                }
                this.state = 399;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 392;
                                    this._errHandler.sync(this);
                                    _alt = 1;
                                    do {
                                        switch (_alt) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 391;
                                                        this.match(RegelSpraakParser.MINUS);
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new antlr4_1.NoViableAltException(this);
                                        }
                                        this.state = 394;
                                        this._errHandler.sync(this);
                                        _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
                                    } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                                    this.state = 397;
                                    this._errHandler.sync(this);
                                    switch (this._interp.adaptivePredict(this._input, 10, this._ctx)) {
                                        case 1:
                                            {
                                                this.state = 396;
                                                this.match(RegelSpraakParser.PIPE);
                                            }
                                            break;
                                    }
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 401;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                this.state = 406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 292) {
                    {
                        {
                            this.state = 403;
                            this.match(RegelSpraakParser.MINUS);
                        }
                    }
                    this.state = 408;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabelRow() {
        let localctx = new BeslistabelRowContext(this, this._ctx, this.state);
        this.enterRule(localctx, 12, RegelSpraakParser.RULE_beslistabelRow);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 409;
                this.match(RegelSpraakParser.PIPE);
                this.state = 410;
                localctx._rowNumber = this.match(RegelSpraakParser.NUMBER);
                this.state = 411;
                this.match(RegelSpraakParser.PIPE);
                this.state = 412;
                localctx._resultExpression = this.expressie();
                this.state = 413;
                this.match(RegelSpraakParser.PIPE);
                this.state = 414;
                localctx._beslistabelCellValue = this.beslistabelCellValue();
                localctx._conditionValues.push(localctx._beslistabelCellValue);
                this.state = 419;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 415;
                                this.match(RegelSpraakParser.PIPE);
                                this.state = 416;
                                localctx._beslistabelCellValue = this.beslistabelCellValue();
                                localctx._conditionValues.push(localctx._beslistabelCellValue);
                            }
                        }
                    }
                    this.state = 421;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
                }
                this.state = 423;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 422;
                            this.match(RegelSpraakParser.PIPE);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabelCellValue() {
        let localctx = new BeslistabelCellValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 14, RegelSpraakParser.RULE_beslistabelCellValue);
        try {
            this.state = 427;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 30:
                case 45:
                case 96:
                case 110:
                case 113:
                case 119:
                case 120:
                case 121:
                case 124:
                case 132:
                case 137:
                case 140:
                case 156:
                case 161:
                case 190:
                case 191:
                case 193:
                case 195:
                case 196:
                case 201:
                case 202:
                case 205:
                case 206:
                case 209:
                case 210:
                case 212:
                case 215:
                case 217:
                case 219:
                case 221:
                case 223:
                case 224:
                case 230:
                case 232:
                case 234:
                case 235:
                case 236:
                case 237:
                case 249:
                case 253:
                case 267:
                case 268:
                case 270:
                case 271:
                case 272:
                case 273:
                case 274:
                case 292:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 425;
                        this.expressie();
                    }
                    break;
                case 294:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 426;
                        this.match(RegelSpraakParser.NVT);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    beslistabelColumnText() {
        let localctx = new BeslistabelColumnTextContext(this, this._ctx, this.state);
        this.enterRule(localctx, 16, RegelSpraakParser.RULE_beslistabelColumnText);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 430;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 429;
                                    _la = this._input.LA(1);
                                    if (_la <= 0 || _la === 293) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 432;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 16, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let localctx = new IdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 18, RegelSpraakParser.RULE_identifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 434;
                this.match(RegelSpraakParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifierOrKeyword() {
        let localctx = new IdentifierOrKeywordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 20, RegelSpraakParser.RULE_identifierOrKeyword);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 436;
                _la = this._input.LA(1);
                if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifierOrKeywordNoIs() {
        let localctx = new IdentifierOrKeywordNoIsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 22, RegelSpraakParser.RULE_identifierOrKeywordNoIs);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 438;
                _la = this._input.LA(1);
                if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268451841) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    naamPhrase() {
        let localctx = new NaamPhraseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 24, RegelSpraakParser.RULE_naamPhrase);
        let _la;
        try {
            let _alt;
            this.state = 497;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 27, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 441;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0)) {
                            {
                                this.state = 440;
                                _la = this._input.LA(1);
                                if (!(_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 444;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 443;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 446;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 449;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 448;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 451;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 453;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 455;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 454;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 457;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 459;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 461;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 460;
                                    this.identifierOrKeyword();
                                }
                            }
                            this.state = 463;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267);
                        this.state = 465;
                        this.match(RegelSpraakParser.MET);
                        this.state = 467;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 466;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 469;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 472;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 471;
                                    this.identifierOrKeyword();
                                }
                            }
                            this.state = 474;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267);
                        this.state = 476;
                        this.match(RegelSpraakParser.MET);
                        this.state = 478;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 477;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 480;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 482;
                        this.match(RegelSpraakParser.NIET);
                        this.state = 484;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 483;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 486;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 488;
                        this.match(RegelSpraakParser.HET);
                        this.state = 489;
                        this.match(RegelSpraakParser.AANTAL);
                        this.state = 490;
                        this.match(RegelSpraakParser.DAGEN);
                        this.state = 491;
                        this.match(RegelSpraakParser.IN);
                        this.state = 493;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 492;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 495;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    naamPhraseWithNumbers() {
        let localctx = new NaamPhraseWithNumbersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 26, RegelSpraakParser.RULE_naamPhraseWithNumbers);
        let _la;
        try {
            let _alt;
            this.state = 556;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 500;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0)) {
                            {
                                this.state = 499;
                                _la = this._input.LA(1);
                                if (!(_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 503;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 502;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 505;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 508;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 507;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 510;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 512;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 514;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 513;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 516;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 518;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 520;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 519;
                                    this.identifierOrKeywordWithNumbers();
                                }
                            }
                            this.state = 522;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267 || _la === 268);
                        this.state = 524;
                        this.match(RegelSpraakParser.MET);
                        this.state = 526;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 525;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 528;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 531;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 530;
                                    this.identifierOrKeywordWithNumbers();
                                }
                            }
                            this.state = 533;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267 || _la === 268);
                        this.state = 535;
                        this.match(RegelSpraakParser.MET);
                        this.state = 537;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 536;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 539;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 541;
                        this.match(RegelSpraakParser.NIET);
                        this.state = 543;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 542;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 545;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 547;
                        this.match(RegelSpraakParser.HET);
                        this.state = 548;
                        this.match(RegelSpraakParser.AANTAL);
                        this.state = 549;
                        this.match(RegelSpraakParser.DAGEN);
                        this.state = 550;
                        this.match(RegelSpraakParser.IN);
                        this.state = 552;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 551;
                                            this.identifierOrKeywordWithNumbers();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 554;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    identifierOrKeywordWithNumbers() {
        let localctx = new IdentifierOrKeywordWithNumbersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 28, RegelSpraakParser.RULE_identifierOrKeywordWithNumbers);
        try {
            this.state = 560;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 96:
                case 110:
                case 113:
                case 124:
                case 132:
                case 161:
                case 190:
                case 201:
                case 202:
                case 205:
                case 206:
                case 209:
                case 210:
                case 221:
                case 223:
                case 224:
                case 232:
                case 234:
                case 253:
                case 267:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 558;
                        this.identifierOrKeyword();
                    }
                    break;
                case 268:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 559;
                        this.match(RegelSpraakParser.NUMBER);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    naamPhraseNoIs() {
        let localctx = new NaamPhraseNoIsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 30, RegelSpraakParser.RULE_naamPhraseNoIs);
        let _la;
        try {
            let _alt;
            this.state = 610;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 49, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 563;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0)) {
                            {
                                this.state = 562;
                                _la = this._input.LA(1);
                                if (!(_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 566;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 565;
                                            this.identifierOrKeywordNoIs();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 568;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 571;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 570;
                                            this.identifierOrKeywordNoIs();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 573;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 575;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 577;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 576;
                                            this.identifierOrKeywordNoIs();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 579;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 581;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 583;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 582;
                                    this.identifierOrKeywordNoIs();
                                }
                            }
                            this.state = 585;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268451841) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267);
                        this.state = 587;
                        this.match(RegelSpraakParser.MET);
                        this.state = 589;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 588;
                                            this.identifierOrKeywordNoIs();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 591;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 594;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 593;
                                    this.identifierOrKeywordNoIs();
                                }
                            }
                            this.state = 596;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268451841) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267);
                        this.state = 598;
                        this.match(RegelSpraakParser.MET);
                        this.state = 600;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 599;
                                            this.identifierOrKeywordNoIs();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 602;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 604;
                        this.match(RegelSpraakParser.NIET);
                        this.state = 606;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 605;
                                            this.identifierOrKeywordNoIs();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 608;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    naamwoord() {
        let localctx = new NaamwoordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 32, RegelSpraakParser.RULE_naamwoord);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 612;
                this.naamPhrase();
                this.state = 618;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 613;
                                this.voorzetsel();
                                this.state = 614;
                                this.naamPhrase();
                            }
                        }
                    }
                    this.state = 620;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    naamwoordWithNumbers() {
        let localctx = new NaamwoordWithNumbersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 34, RegelSpraakParser.RULE_naamwoordWithNumbers);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 621;
                this.naamPhraseWithNumbers();
                this.state = 627;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 622;
                                this.voorzetsel();
                                this.state = 623;
                                this.naamPhraseWithNumbers();
                            }
                        }
                    }
                    this.state = 629;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    naamwoordNoIs() {
        let localctx = new NaamwoordNoIsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 36, RegelSpraakParser.RULE_naamwoordNoIs);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 630;
                this.naamPhraseNoIs();
                this.state = 636;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 631;
                                this.voorzetsel();
                                this.state = 632;
                                this.naamPhraseNoIs();
                            }
                        }
                    }
                    this.state = 638;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    voorzetsel() {
        let localctx = new VoorzetselContext(this, this._ctx, this.state);
        this.enterRule(localctx, 38, RegelSpraakParser.RULE_voorzetsel);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 639;
                _la = this._input.LA(1);
                if (!(((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1073741829) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 44044545) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 137) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datumLiteral() {
        let localctx = new DatumLiteralContext(this, this._ctx, this.state);
        this.enterRule(localctx, 40, RegelSpraakParser.RULE_datumLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 641;
                this.match(RegelSpraakParser.DATE_TIME_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    unit() {
        let localctx = new UnitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 42, RegelSpraakParser.RULE_unit);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 643;
                this.match(RegelSpraakParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    timeUnit() {
        let localctx = new TimeUnitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 44, RegelSpraakParser.RULE_timeUnit);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 645;
                _la = this._input.LA(1);
                if (!(((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 1611509763) !== 0) || ((((_la - 242)) & ~0x1F) === 0 && ((1 << (_la - 242)) & 771) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectTypeDefinition() {
        let localctx = new ObjectTypeDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 46, RegelSpraakParser.RULE_objectTypeDefinition);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 647;
                this.match(RegelSpraakParser.OBJECTTYPE);
                this.state = 648;
                this.naamwoordNoIs();
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 178) {
                    {
                        this.state = 649;
                        this.match(RegelSpraakParser.MV_START);
                        this.state = 651;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 650;
                                    localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
                                    localctx._plural.push(localctx._IDENTIFIER);
                                }
                            }
                            this.state = 653;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 267);
                        this.state = 655;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                }
                this.state = 659;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 165) {
                    {
                        this.state = 658;
                        this.match(RegelSpraakParser.BEZIELD);
                    }
                }
                this.state = 664;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 661;
                                this.objectTypeMember();
                            }
                        }
                    }
                    this.state = 666;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectTypeMember() {
        let localctx = new ObjectTypeMemberContext(this, this._ctx, this.state);
        this.enterRule(localctx, 48, RegelSpraakParser.RULE_objectTypeMember);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 669;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
                    case 1:
                        {
                            this.state = 667;
                            this.kenmerkSpecificatie();
                        }
                        break;
                    case 2:
                        {
                            this.state = 668;
                            this.attribuutSpecificatie();
                        }
                        break;
                }
                this.state = 671;
                this.match(RegelSpraakParser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    kenmerkSpecificatie() {
        let localctx = new KenmerkSpecificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 50, RegelSpraakParser.RULE_kenmerkSpecificatie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 678;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
                    case 1:
                        {
                            this.state = 674;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 113) {
                                {
                                    this.state = 673;
                                    this.match(RegelSpraakParser.IS);
                                }
                            }
                            this.state = 676;
                            this.identifier();
                        }
                        break;
                    case 2:
                        {
                            this.state = 677;
                            this.naamwoordWithNumbers();
                        }
                        break;
                }
                this.state = 680;
                this.match(RegelSpraakParser.KENMERK);
                this.state = 682;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 163 || _la === 164) {
                    {
                        this.state = 681;
                        _la = this._input.LA(1);
                        if (!(_la === 163 || _la === 164)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 685;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 7) !== 0)) {
                    {
                        this.state = 684;
                        this.tijdlijn();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    attribuutSpecificatie() {
        let localctx = new AttribuutSpecificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 52, RegelSpraakParser.RULE_attribuutSpecificatie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 687;
                this.naamwoordWithNumbers();
                this.state = 691;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 62, this._ctx)) {
                    case 1:
                        {
                            this.state = 688;
                            this.datatype();
                        }
                        break;
                    case 2:
                        {
                            this.state = 689;
                            this.domeinRef();
                        }
                        break;
                    case 3:
                        {
                            this.state = 690;
                            this.objectTypeRef();
                        }
                        break;
                }
                this.state = 695;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 177) {
                    {
                        this.state = 693;
                        this.match(RegelSpraakParser.MET_EENHEID);
                        this.state = 694;
                        this.unitIdentifier();
                    }
                }
                this.state = 706;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 171) {
                    {
                        this.state = 697;
                        this.match(RegelSpraakParser.GEDIMENSIONEERD_MET);
                        this.state = 698;
                        this.dimensieRef();
                        this.state = 703;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 216) {
                            {
                                {
                                    this.state = 699;
                                    this.match(RegelSpraakParser.EN);
                                    this.state = 700;
                                    this.dimensieRef();
                                }
                            }
                            this.state = 705;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 7) !== 0)) {
                    {
                        this.state = 708;
                        this.tijdlijn();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datatype() {
        let localctx = new DatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 54, RegelSpraakParser.RULE_datatype);
        try {
            this.state = 717;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 181:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 711;
                        this.numeriekDatatype();
                    }
                    break;
                case 186:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 712;
                        this.tekstDatatype();
                    }
                    break;
                case 166:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 713;
                        this.booleanDatatype();
                    }
                    break;
                case 3:
                case 168:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 714;
                        this.datumTijdDatatype();
                    }
                    break;
                case 101:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 715;
                        this.lijstDatatype();
                    }
                    break;
                case 182:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 716;
                        this.percentageDatatype();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    lijstDatatype() {
        let localctx = new LijstDatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 56, RegelSpraakParser.RULE_lijstDatatype);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 719;
                this.match(RegelSpraakParser.LIJST);
                this.state = 720;
                this.match(RegelSpraakParser.VAN);
                this.state = 724;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 68, this._ctx)) {
                    case 1:
                        {
                            this.state = 721;
                            this.datatype();
                        }
                        break;
                    case 2:
                        {
                            this.state = 722;
                            this.domeinRef();
                        }
                        break;
                    case 3:
                        {
                            this.state = 723;
                            this.objectTypeRef();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    numeriekDatatype() {
        let localctx = new NumeriekDatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 58, RegelSpraakParser.RULE_numeriekDatatype);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 726;
                this.match(RegelSpraakParser.NUMERIEK);
                this.state = 731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 274) {
                    {
                        this.state = 727;
                        this.match(RegelSpraakParser.LPAREN);
                        this.state = 728;
                        this.getalSpecificatie();
                        this.state = 729;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tekstDatatype() {
        let localctx = new TekstDatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 60, RegelSpraakParser.RULE_tekstDatatype);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 733;
                this.match(RegelSpraakParser.TEKST);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    percentageDatatype() {
        let localctx = new PercentageDatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 62, RegelSpraakParser.RULE_percentageDatatype);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 735;
                this.match(RegelSpraakParser.PERCENTAGE);
                this.state = 740;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 274) {
                    {
                        this.state = 736;
                        this.match(RegelSpraakParser.LPAREN);
                        this.state = 737;
                        this.getalSpecificatie();
                        this.state = 738;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    booleanDatatype() {
        let localctx = new BooleanDatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 64, RegelSpraakParser.RULE_booleanDatatype);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 742;
                this.match(RegelSpraakParser.BOOLEAN);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datumTijdDatatype() {
        let localctx = new DatumTijdDatatypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 66, RegelSpraakParser.RULE_datumTijdDatatype);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 744;
                _la = this._input.LA(1);
                if (!(_la === 3 || _la === 168)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    getalSpecificatie() {
        let localctx = new GetalSpecificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 68, RegelSpraakParser.RULE_getalSpecificatie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 747;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & 19) !== 0)) {
                    {
                        this.state = 746;
                        _la = this._input.LA(1);
                        if (!(((((_la - 179)) & ~0x1F) === 0 && ((1 << (_la - 179)) & 19) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 755;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 72, this._ctx)) {
                    case 1:
                        {
                            this.state = 749;
                            this.match(RegelSpraakParser.GEHEEL_GETAL);
                        }
                        break;
                    case 2:
                        {
                            {
                                this.state = 750;
                                this.match(RegelSpraakParser.GETAL);
                                this.state = 751;
                                this.match(RegelSpraakParser.MET);
                                this.state = 752;
                                this.match(RegelSpraakParser.NUMBER);
                                this.state = 753;
                                this.match(RegelSpraakParser.DECIMALEN);
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 754;
                            this.match(RegelSpraakParser.GETAL);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    domeinDefinition() {
        let localctx = new DomeinDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 70, RegelSpraakParser.RULE_domeinDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 757;
                this.match(RegelSpraakParser.DOMEIN);
                this.state = 758;
                localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
                this.state = 759;
                this.match(RegelSpraakParser.IS_VAN_HET_TYPE);
                this.state = 760;
                this.domeinType();
                this.state = 763;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 177) {
                    {
                        this.state = 761;
                        this.match(RegelSpraakParser.MET_EENHEID);
                        this.state = 762;
                        this.eenheidExpressie();
                    }
                }
                this.state = 766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 281) {
                    {
                        this.state = 765;
                        this.match(RegelSpraakParser.SEMICOLON);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    domeinType() {
        let localctx = new DomeinTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 72, RegelSpraakParser.RULE_domeinType);
        try {
            this.state = 773;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 170:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 768;
                        this.enumeratieSpecificatie();
                    }
                    break;
                case 181:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 769;
                        this.numeriekDatatype();
                    }
                    break;
                case 186:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 770;
                        this.tekstDatatype();
                    }
                    break;
                case 166:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 771;
                        this.booleanDatatype();
                    }
                    break;
                case 3:
                case 168:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 772;
                        this.datumTijdDatatype();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    enumeratieSpecificatie() {
        let localctx = new EnumeratieSpecificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 74, RegelSpraakParser.RULE_enumeratieSpecificatie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 775;
                this.match(RegelSpraakParser.ENUMERATIE);
                this.state = 777;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 776;
                            this.match(RegelSpraakParser.ENUM_LITERAL);
                        }
                    }
                    this.state = 779;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 273);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    domeinRef() {
        let localctx = new DomeinRefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 76, RegelSpraakParser.RULE_domeinRef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 781;
                localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectTypeRef() {
        let localctx = new ObjectTypeRefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 78, RegelSpraakParser.RULE_objectTypeRef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 783;
                this.match(RegelSpraakParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eenheidsysteemDefinition() {
        let localctx = new EenheidsysteemDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 80, RegelSpraakParser.RULE_eenheidsysteemDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 785;
                this.match(RegelSpraakParser.EENHEIDSYSTEEM);
                this.state = 786;
                localctx._name = this.identifier();
                this.state = 790;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 212 || _la === 217) {
                    {
                        {
                            this.state = 787;
                            this.eenheidEntry();
                        }
                    }
                    this.state = 792;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eenheidEntry() {
        let localctx = new EenheidEntryContext(this, this._ctx, this.state);
        this.enterRule(localctx, 82, RegelSpraakParser.RULE_eenheidEntry);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 793;
                _la = this._input.LA(1);
                if (!(_la === 212 || _la === 217)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 794;
                localctx._unitName = this.unitIdentifier();
                this.state = 799;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 178) {
                    {
                        this.state = 795;
                        this.match(RegelSpraakParser.MV_START);
                        this.state = 796;
                        localctx._pluralName = this.unitIdentifier();
                        this.state = 797;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                }
                this.state = 801;
                localctx._abbrev = this.unitIdentifier();
                this.state = 803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 137 || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 1611657219) !== 0) || ((((_la - 242)) & ~0x1F) === 0 && ((1 << (_la - 242)) & 67107587) !== 0)) {
                    {
                        this.state = 802;
                        localctx._symbol_ = this.unitIdentifier();
                    }
                }
                this.state = 811;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 269) {
                    {
                        this.state = 805;
                        this.match(RegelSpraakParser.EQUALS);
                        this.state = 807;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 282) {
                            {
                                this.state = 806;
                                this.match(RegelSpraakParser.SLASH);
                            }
                        }
                        this.state = 809;
                        localctx._value = this.match(RegelSpraakParser.NUMBER);
                        this.state = 810;
                        localctx._targetUnit = this.unitIdentifier();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    unitIdentifier() {
        let localctx = new UnitIdentifierContext(this, this._ctx, this.state);
        this.enterRule(localctx, 84, RegelSpraakParser.RULE_unitIdentifier);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 813;
                _la = this._input.LA(1);
                if (!(_la === 137 || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 1611657219) !== 0) || ((((_la - 242)) & ~0x1F) === 0 && ((1 << (_la - 242)) & 67107587) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eenheidExpressie() {
        let localctx = new EenheidExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 86, RegelSpraakParser.RULE_eenheidExpressie);
        let _la;
        try {
            this.state = 824;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 83, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 815;
                        this.eenheidMacht();
                        this.state = 818;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 282) {
                            {
                                this.state = 816;
                                this.match(RegelSpraakParser.SLASH);
                                this.state = 817;
                                this.eenheidMacht();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 820;
                        this.match(RegelSpraakParser.NUMBER);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 821;
                        this.match(RegelSpraakParser.PERCENT_SIGN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 822;
                        this.match(RegelSpraakParser.EURO_SYMBOL);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 823;
                        this.match(RegelSpraakParser.DOLLAR_SYMBOL);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eenheidMacht() {
        let localctx = new EenheidMachtContext(this, this._ctx, this.state);
        this.enterRule(localctx, 88, RegelSpraakParser.RULE_eenheidMacht);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 826;
                this.unitIdentifier();
                this.state = 829;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 288) {
                    {
                        this.state = 827;
                        this.match(RegelSpraakParser.CARET);
                        this.state = 828;
                        this.match(RegelSpraakParser.NUMBER);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dimensieDefinition() {
        let localctx = new DimensieDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 90, RegelSpraakParser.RULE_dimensieDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 831;
                this.match(RegelSpraakParser.DIMENSIE);
                this.state = 832;
                this.naamwoord();
                this.state = 834;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 278) {
                    {
                        this.state = 833;
                        this.match(RegelSpraakParser.COMMA);
                    }
                }
                this.state = 836;
                this.match(RegelSpraakParser.BESTAANDE_UIT);
                this.state = 837;
                localctx._dimensieNaamMeervoud = this.naamwoord();
                this.state = 838;
                this.voorzetselSpecificatie();
                this.state = 840;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 839;
                            this.labelWaardeSpecificatie();
                        }
                    }
                    this.state = 842;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 268);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    voorzetselSpecificatie() {
        let localctx = new VoorzetselSpecificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 92, RegelSpraakParser.RULE_voorzetselSpecificatie);
        let _la;
        try {
            this.state = 851;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 2:
                    this.enterOuterAlt(localctx, 1);
                    {
                        {
                            this.state = 844;
                            this.match(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL);
                            this.state = 845;
                            localctx._vz = this.voorzetsel();
                            this.state = 846;
                            this.match(RegelSpraakParser.RPAREN);
                            this.state = 848;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 280) {
                                {
                                    this.state = 847;
                                    this.match(RegelSpraakParser.COLON);
                                }
                            }
                        }
                    }
                    break;
                case 1:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 850;
                        this.match(RegelSpraakParser.VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    labelWaardeSpecificatie() {
        let localctx = new LabelWaardeSpecificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 94, RegelSpraakParser.RULE_labelWaardeSpecificatie);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 853;
                this.match(RegelSpraakParser.NUMBER);
                this.state = 854;
                this.match(RegelSpraakParser.DOT);
                this.state = 855;
                localctx._dimWaarde = this.naamwoord();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tijdlijn() {
        let localctx = new TijdlijnContext(this, this._ctx, this.state);
        this.enterRule(localctx, 96, RegelSpraakParser.RULE_tijdlijn);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 857;
                _la = this._input.LA(1);
                if (!(((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 7) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dimensieRef() {
        let localctx = new DimensieRefContext(this, this._ctx, this.state);
        this.enterRule(localctx, 98, RegelSpraakParser.RULE_dimensieRef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 859;
                localctx._name = this.match(RegelSpraakParser.IDENTIFIER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterDefinition() {
        let localctx = new ParameterDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 100, RegelSpraakParser.RULE_parameterDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 861;
                this.match(RegelSpraakParser.PARAMETER);
                this.state = 862;
                this.parameterNamePhrase();
                this.state = 863;
                this.match(RegelSpraakParser.COLON);
                this.state = 866;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 3:
                    case 101:
                    case 166:
                    case 168:
                    case 181:
                    case 182:
                    case 186:
                        {
                            this.state = 864;
                            this.datatype();
                        }
                        break;
                    case 267:
                        {
                            this.state = 865;
                            this.domeinRef();
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 870;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 177) {
                    {
                        this.state = 868;
                        this.match(RegelSpraakParser.MET_EENHEID);
                        this.state = 869;
                        this.eenheidExpressie();
                    }
                }
                this.state = 874;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 113) {
                    {
                        this.state = 872;
                        this.match(RegelSpraakParser.IS);
                        this.state = 873;
                        this.expressie();
                    }
                }
                this.state = 877;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 187)) & ~0x1F) === 0 && ((1 << (_la - 187)) & 7) !== 0)) {
                    {
                        this.state = 876;
                        this.tijdlijn();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterNamePhrase() {
        let localctx = new ParameterNamePhraseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 102, RegelSpraakParser.RULE_parameterNamePhrase);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 212 || _la === 217) {
                    {
                        this.state = 879;
                        _la = this._input.LA(1);
                        if (!(_la === 212 || _la === 217)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 882;
                this.parameterNamePart();
                this.state = 888;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1073741829) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 44044545) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 137) !== 0)) {
                    {
                        {
                            this.state = 883;
                            this.voorzetsel();
                            this.state = 884;
                            this.parameterNamePart();
                        }
                    }
                    this.state = 890;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterNamePart() {
        let localctx = new ParameterNamePartContext(this, this._ctx, this.state);
        this.enterRule(localctx, 104, RegelSpraakParser.RULE_parameterNamePart);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 891;
                _la = this._input.LA(1);
                if (!(_la === 190 || _la === 267)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 895;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 892;
                                _la = this._input.LA(1);
                                if (!(_la === 190 || _la === 267 || _la === 268)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                    }
                    this.state = 897;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    parameterMetLidwoord() {
        let localctx = new ParameterMetLidwoordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 106, RegelSpraakParser.RULE_parameterMetLidwoord);
        let _la;
        try {
            let _alt;
            this.state = 911;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 98, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 899;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 212 || _la === 217) {
                            {
                                this.state = 898;
                                _la = this._input.LA(1);
                                if (!(_la === 212 || _la === 217)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                            }
                        }
                        this.state = 901;
                        this.parameterNamePart();
                        this.state = 907;
                        this._errHandler.sync(this);
                        _alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
                        while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 902;
                                        this.voorzetsel();
                                        this.state = 903;
                                        this.parameterNamePart();
                                    }
                                }
                            }
                            this.state = 909;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 910;
                        this.naamwoord();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    feitTypeDefinition() {
        let localctx = new FeitTypeDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 108, RegelSpraakParser.RULE_feitTypeDefinition);
        try {
            let _alt;
            this.state = 928;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 105:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 913;
                        this.match(RegelSpraakParser.FEITTYPE);
                        this.state = 914;
                        localctx._feittypenaam = this.naamwoord();
                        this.state = 915;
                        this.rolDefinition();
                        this.state = 917;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 916;
                                            this.rolDefinition();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 919;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                        this.state = 921;
                        this.cardinalityLine();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 923;
                        this.match(RegelSpraakParser.WEDERKERIG_FEITTYPE);
                        this.state = 924;
                        localctx._feittypenaam = this.naamwoord();
                        this.state = 925;
                        this.rolDefinition();
                        this.state = 926;
                        this.cardinalityLine();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    rolDefinition() {
        let localctx = new RolDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 110, RegelSpraakParser.RULE_rolDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 930;
                localctx._article = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(_la === 212 || _la === 217)) {
                    localctx._article = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 931;
                localctx._content = this.rolContentWords();
                this.state = 936;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 101, this._ctx)) {
                    case 1:
                        {
                            this.state = 932;
                            this.match(RegelSpraakParser.MV_START);
                            this.state = 933;
                            localctx._meervoud = this.naamwoord();
                            this.state = 934;
                            this.match(RegelSpraakParser.RPAREN);
                        }
                        break;
                }
                this.state = 939;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 102, this._ctx)) {
                    case 1:
                        {
                            this.state = 938;
                            localctx._objecttype = this.rolObjectType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    rolObjectType() {
        let localctx = new RolObjectTypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 112, RegelSpraakParser.RULE_rolObjectType);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 942;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 941;
                                    this.identifierOrKeyword();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 944;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    rolContentWords() {
        let localctx = new RolContentWordsContext(this, this._ctx, this.state);
        this.enterRule(localctx, 114, RegelSpraakParser.RULE_rolContentWords);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 948;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 948;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 96:
                                    case 110:
                                    case 113:
                                    case 124:
                                    case 132:
                                    case 161:
                                    case 190:
                                    case 201:
                                    case 202:
                                    case 205:
                                    case 206:
                                    case 209:
                                    case 210:
                                    case 221:
                                    case 223:
                                    case 224:
                                    case 232:
                                    case 234:
                                    case 253:
                                    case 267:
                                        {
                                            this.state = 946;
                                            this.identifierOrKeyword();
                                        }
                                        break;
                                    case 146:
                                    case 148:
                                    case 176:
                                    case 208:
                                    case 216:
                                    case 220:
                                    case 229:
                                    case 231:
                                    case 233:
                                    case 241:
                                    case 244:
                                    case 248:
                                        {
                                            this.state = 947;
                                            this.voorzetsel();
                                        }
                                        break;
                                    default:
                                        throw new antlr4_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 950;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cardinalityLine() {
        let localctx = new CardinalityLineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 116, RegelSpraakParser.RULE_cardinalityLine);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 953;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 952;
                                    this.cardinalityWord();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 955;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 106, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    cardinalityWord() {
        let localctx = new CardinalityWordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 118, RegelSpraakParser.RULE_cardinalityWord);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 957;
                _la = this._input.LA(1);
                if (_la <= 0 || _la === 28 || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 4027) !== 0) || _la === 281) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    regel() {
        let localctx = new RegelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 120, RegelSpraakParser.RULE_regel);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 959;
                this.match(RegelSpraakParser.REGEL);
                this.state = 960;
                this.regelName();
                this.state = 962;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 268) {
                    {
                        this.state = 961;
                        this.match(RegelSpraakParser.NUMBER);
                    }
                }
                this.state = 964;
                this.regelVersie();
                this.state = 965;
                this.resultaatDeel();
                this.state = 971;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 111:
                        {
                            this.state = 966;
                            this.voorwaardeDeel();
                            this.state = 968;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === 279) {
                                {
                                    this.state = 967;
                                    this.match(RegelSpraakParser.DOT);
                                }
                            }
                        }
                        break;
                    case 279:
                        {
                            this.state = 970;
                            this.match(RegelSpraakParser.DOT);
                        }
                        break;
                    case -1:
                    case 28:
                    case 95:
                    case 96:
                    case 97:
                    case 98:
                    case 99:
                    case 100:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 106:
                    case 107:
                        break;
                    default:
                        break;
                }
                this.state = 974;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 107) {
                    {
                        this.state = 973;
                        this.variabeleDeel();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    regelGroep() {
        let localctx = new RegelGroepContext(this, this._ctx, this.state);
        this.enterRule(localctx, 122, RegelSpraakParser.RULE_regelGroep);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 976;
                this.match(RegelSpraakParser.REGELGROEP);
                this.state = 977;
                this.naamwoord();
                this.state = 979;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 112) {
                    {
                        this.state = 978;
                        localctx._isRecursive = this.match(RegelSpraakParser.IS_RECURSIEF);
                    }
                }
                this.state = 983;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 983;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case 96:
                                        {
                                            this.state = 981;
                                            this.regel();
                                        }
                                        break;
                                    case 95:
                                        {
                                            this.state = 982;
                                            this.consistentieregel();
                                        }
                                        break;
                                    default:
                                        throw new antlr4_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 985;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 113, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    regelName() {
        let localctx = new RegelNameContext(this, this._ctx, this.state);
        this.enterRule(localctx, 124, RegelSpraakParser.RULE_regelName);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 987;
                this.naamwoordWithNumbers();
                this.state = 991;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 113 || ((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & 262209) !== 0) || _la === 278) {
                    {
                        {
                            this.state = 988;
                            this.regelNameExtension();
                        }
                    }
                    this.state = 993;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    regelNameExtension() {
        let localctx = new RegelNameExtensionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 126, RegelSpraakParser.RULE_regelNameExtension);
        try {
            this.state = 1008;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 115, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 994;
                        this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 995;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 996;
                        this.naamwoordWithNumbers();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 997;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 998;
                        this.match(RegelSpraakParser.MET);
                        this.state = 999;
                        this.naamwoordWithNumbers();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1000;
                        this.match(RegelSpraakParser.EN);
                        this.state = 1001;
                        this.naamwoordWithNumbers();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1002;
                        this.match(RegelSpraakParser.IS);
                        this.state = 1003;
                        this.naamwoordWithNumbers();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1004;
                        this.match(RegelSpraakParser.GEEN);
                        this.state = 1005;
                        this.naamwoordWithNumbers();
                        this.state = 1006;
                        this.match(RegelSpraakParser.IS);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    regelVersie() {
        let localctx = new RegelVersieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 128, RegelSpraakParser.RULE_regelVersie);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1010;
                this.match(RegelSpraakParser.GELDIG);
                this.state = 1011;
                this.versieGeldigheid();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    versieGeldigheid() {
        let localctx = new VersieGeldigheidContext(this, this._ctx, this.state);
        this.enterRule(localctx, 130, RegelSpraakParser.RULE_versieGeldigheid);
        let _la;
        try {
            this.state = 1020;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 207:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1013;
                        this.match(RegelSpraakParser.ALTIJD);
                    }
                    break;
                case 150:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1014;
                        this.match(RegelSpraakParser.VANAF);
                        this.state = 1015;
                        this.datumLiteral();
                        this.state = 1018;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 148 || _la === 240) {
                            {
                                this.state = 1016;
                                _la = this._input.LA(1);
                                if (!(_la === 148 || _la === 240)) {
                                    this._errHandler.recoverInline(this);
                                }
                                else {
                                    this._errHandler.reportMatch(this);
                                    this.consume();
                                }
                                this.state = 1017;
                                this.datumLiteral();
                            }
                        }
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    resultaatDeel() {
        let localctx = new ResultaatDeelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 132, RegelSpraakParser.RULE_resultaatDeel);
        let _la;
        try {
            this.state = 1062;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 121, this._ctx)) {
                case 1:
                    localctx = new DagsoortdefinitieResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1022;
                        this.match(RegelSpraakParser.EEN);
                        this.state = 1023;
                        this.match(RegelSpraakParser.DAG);
                        this.state = 1024;
                        this.match(RegelSpraakParser.IS);
                        this.state = 1025;
                        this.match(RegelSpraakParser.EEN);
                        this.state = 1026;
                        this.naamwoord();
                    }
                    break;
                case 2:
                    localctx = new GelijkstellingResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1027;
                        this.attribuutReferentie();
                        this.state = 1034;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case 8:
                                {
                                    this.state = 1028;
                                    this.match(RegelSpraakParser.WORDT_BEREKEND_ALS);
                                    this.state = 1029;
                                    this.expressie();
                                }
                                break;
                            case 9:
                                {
                                    this.state = 1030;
                                    this.match(RegelSpraakParser.WORDT_GESTELD_OP);
                                    this.state = 1031;
                                    this.expressie();
                                }
                                break;
                            case 10:
                                {
                                    this.state = 1032;
                                    this.match(RegelSpraakParser.WORDT_GEINITIALISEERD_OP);
                                    this.state = 1033;
                                    this.expressie();
                                }
                                break;
                            default:
                                throw new antlr4_1.NoViableAltException(this);
                        }
                        this.state = 1037;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 21) !== 0) || _la === 244) {
                            {
                                this.state = 1036;
                                this.periodeDefinitie();
                            }
                        }
                    }
                    break;
                case 3:
                    localctx = new ConsistencyCheckResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1039;
                        this.attribuutReferentie();
                        this.state = 1040;
                        this.match(RegelSpraakParser.MOET);
                        this.state = 1041;
                        this.consistencyOperator();
                        this.state = 1042;
                        this.expressie();
                    }
                    break;
                case 4:
                    localctx = new FeitCreatieResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1044;
                        this.feitCreatiePattern();
                    }
                    break;
                case 5:
                    localctx = new KenmerkFeitResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1045;
                        this.onderwerpReferentie();
                        this.state = 1046;
                        _la = this._input.LA(1);
                        if (!(_la === 110 || _la === 113)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1047;
                        this.kenmerkNaam();
                        this.state = 1049;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 21) !== 0) || _la === 244) {
                            {
                                this.state = 1048;
                                this.periodeDefinitie();
                            }
                        }
                    }
                    break;
                case 6:
                    localctx = new RelationshipWithAttributeResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1051;
                        this.onderwerpReferentie();
                        this.state = 1052;
                        this.match(RegelSpraakParser.HEEFT);
                        this.state = 1053;
                        _la = this._input.LA(1);
                        if (!(_la === 212 || _la === 217)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1054;
                        this.naamwoord();
                        this.state = 1055;
                        this.match(RegelSpraakParser.MET);
                        this.state = 1056;
                        this.attribuutMetLidwoord();
                        this.state = 1057;
                        _la = this._input.LA(1);
                        if (!(_la === 47 || _la === 48 || _la === 128)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1058;
                        this.expressie();
                    }
                    break;
                case 7:
                    localctx = new ObjectCreatieResultaatContext(this, localctx);
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1060;
                        this.objectCreatie();
                    }
                    break;
                case 8:
                    localctx = new VerdelingContext(this, localctx);
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1061;
                        this.verdelingResultaat();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    consistencyOperator() {
        let localctx = new ConsistencyOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 134, RegelSpraakParser.RULE_consistencyOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1064;
                _la = this._input.LA(1);
                if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 23) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 24617) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    feitCreatiePattern() {
        let localctx = new FeitCreatiePatternContext(this, this._ctx, this.state);
        this.enterRule(localctx, 136, RegelSpraakParser.RULE_feitCreatiePattern);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1066;
                this.match(RegelSpraakParser.EEN);
                this.state = 1067;
                localctx._role1 = this.feitCreatieRolPhrase();
                this.state = 1068;
                this.match(RegelSpraakParser.VAN);
                this.state = 1069;
                this.match(RegelSpraakParser.EEN);
                this.state = 1070;
                localctx._subject1 = this.feitCreatieSubjectPhrase();
                this.state = 1071;
                this.match(RegelSpraakParser.IS);
                this.state = 1072;
                localctx._article2 = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                    localctx._article2 = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1073;
                localctx._role2 = this.feitCreatieRolPhrase();
                this.state = 1074;
                this.match(RegelSpraakParser.VAN);
                this.state = 1075;
                localctx._article3 = this._input.LT(1);
                _la = this._input.LA(1);
                if (!(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                    localctx._article3 = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1076;
                localctx._subject2 = this.feitCreatieSubjectPhrase();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    feitCreatieRolPhrase() {
        let localctx = new FeitCreatieRolPhraseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 138, RegelSpraakParser.RULE_feitCreatieRolPhrase);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1079;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1078;
                            this.feitCreatieWord();
                        }
                    }
                    this.state = 1081;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 536887297) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & 1711292417) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 125939975) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 67113089) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    feitCreatieSubjectPhrase() {
        let localctx = new FeitCreatieSubjectPhraseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 140, RegelSpraakParser.RULE_feitCreatieSubjectPhrase);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1084;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1083;
                                    this.feitCreatieSubjectWord();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 1086;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    feitCreatieSubjectWord() {
        let localctx = new FeitCreatieSubjectWordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 142, RegelSpraakParser.RULE_feitCreatieSubjectWord);
        try {
            this.state = 1093;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 96:
                case 110:
                case 113:
                case 124:
                case 132:
                case 161:
                case 190:
                case 201:
                case 202:
                case 205:
                case 206:
                case 209:
                case 210:
                case 221:
                case 223:
                case 224:
                case 232:
                case 234:
                case 253:
                case 267:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1088;
                        this.identifierOrKeyword();
                    }
                    break;
                case 146:
                case 148:
                case 176:
                case 208:
                case 216:
                case 220:
                case 229:
                case 231:
                case 233:
                case 241:
                case 244:
                case 248:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1089;
                        this.voorzetsel();
                    }
                    break;
                case 212:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1090;
                        this.match(RegelSpraakParser.DE);
                    }
                    break;
                case 217:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1091;
                        this.match(RegelSpraakParser.HET);
                    }
                    break;
                case 215:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1092;
                        this.match(RegelSpraakParser.EEN);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    feitCreatieWord() {
        let localctx = new FeitCreatieWordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 144, RegelSpraakParser.RULE_feitCreatieWord);
        try {
            this.state = 1097;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 96:
                case 110:
                case 113:
                case 124:
                case 132:
                case 161:
                case 190:
                case 201:
                case 202:
                case 205:
                case 206:
                case 209:
                case 210:
                case 221:
                case 223:
                case 224:
                case 232:
                case 234:
                case 253:
                case 267:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1095;
                        this.identifierOrKeyword();
                    }
                    break;
                case 146:
                case 176:
                case 208:
                case 216:
                case 220:
                case 231:
                case 233:
                case 241:
                case 248:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1096;
                        this.voorzetselNietVan();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    voorzetselNietVan() {
        let localctx = new VoorzetselNietVanContext(this, this._ctx, this.state);
        this.enterRule(localctx, 146, RegelSpraakParser.RULE_voorzetselNietVan);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1099;
                _la = this._input.LA(1);
                if (!(_la === 146 || _la === 176 || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 41947393) !== 0) || _la === 241 || _la === 248)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectCreatie() {
        let localctx = new ObjectCreatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 148, RegelSpraakParser.RULE_objectCreatie);
        let _la;
        try {
            this.state = 1120;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 41:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1101;
                        this.match(RegelSpraakParser.ER_WORDT_EEN_NIEUW);
                        this.state = 1102;
                        localctx._objectType = this.naamwoord();
                        this.state = 1103;
                        this.match(RegelSpraakParser.AANGEMAAKT);
                        this.state = 1105;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 176) {
                            {
                                this.state = 1104;
                                this.objectAttributeInit();
                            }
                        }
                        this.state = 1108;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 127, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1107;
                                    this.match(RegelSpraakParser.DOT);
                                }
                                break;
                        }
                    }
                    break;
                case 44:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1110;
                        this.match(RegelSpraakParser.CREEER);
                        this.state = 1111;
                        this.match(RegelSpraakParser.EEN);
                        this.state = 1112;
                        this.match(RegelSpraakParser.NIEUWE);
                        this.state = 1113;
                        localctx._objectType = this.naamwoord();
                        this.state = 1115;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 176) {
                            {
                                this.state = 1114;
                                this.objectAttributeInit();
                            }
                        }
                        this.state = 1118;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 129, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1117;
                                    this.match(RegelSpraakParser.DOT);
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectAttributeInit() {
        let localctx = new ObjectAttributeInitContext(this, this._ctx, this.state);
        this.enterRule(localctx, 150, RegelSpraakParser.RULE_objectAttributeInit);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1122;
                this.match(RegelSpraakParser.MET);
                this.state = 1123;
                localctx._attribuut = this.simpleNaamwoord();
                this.state = 1124;
                this.match(RegelSpraakParser.GELIJK_AAN);
                this.state = 1125;
                localctx._waarde = this.simpleExpressie();
                this.state = 1129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 216) {
                    {
                        {
                            this.state = 1126;
                            this.attributeInitVervolg();
                        }
                    }
                    this.state = 1131;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    attributeInitVervolg() {
        let localctx = new AttributeInitVervolgContext(this, this._ctx, this.state);
        this.enterRule(localctx, 152, RegelSpraakParser.RULE_attributeInitVervolg);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1132;
                this.match(RegelSpraakParser.EN);
                this.state = 1133;
                localctx._attribuut = this.simpleNaamwoord();
                this.state = 1134;
                this.match(RegelSpraakParser.GELIJK_AAN);
                this.state = 1135;
                localctx._waarde = this.simpleExpressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    simpleNaamwoord() {
        let localctx = new SimpleNaamwoordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 154, RegelSpraakParser.RULE_simpleNaamwoord);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1137;
                this.naamPhrase();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    consistentieregel() {
        let localctx = new ConsistentieregelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 156, RegelSpraakParser.RULE_consistentieregel);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1139;
                this.match(RegelSpraakParser.CONSISTENTIEREGEL);
                this.state = 1140;
                this.naamwoord();
                this.state = 1150;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 134, this._ctx)) {
                    case 1:
                        {
                            this.state = 1141;
                            this.uniekzijnResultaat();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1142;
                            this.inconsistentResultaat();
                            this.state = 1148;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 111:
                                    {
                                        this.state = 1143;
                                        this.voorwaardeDeel();
                                        this.state = 1145;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 279) {
                                            {
                                                this.state = 1144;
                                                this.match(RegelSpraakParser.DOT);
                                            }
                                        }
                                    }
                                    break;
                                case 279:
                                    {
                                        this.state = 1147;
                                        this.match(RegelSpraakParser.DOT);
                                    }
                                    break;
                                case -1:
                                case 28:
                                case 95:
                                case 96:
                                case 97:
                                case 98:
                                case 99:
                                case 100:
                                case 102:
                                case 103:
                                case 104:
                                case 105:
                                case 106:
                                    break;
                                default:
                                    break;
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    uniekzijnResultaat() {
        let localctx = new UniekzijnResultaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 158, RegelSpraakParser.RULE_uniekzijnResultaat);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1152;
                this.alleAttributenVanObjecttype();
                this.state = 1153;
                this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
                this.state = 1155;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 279) {
                    {
                        this.state = 1154;
                        this.match(RegelSpraakParser.DOT);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    alleAttributenVanObjecttype() {
        let localctx = new AlleAttributenVanObjecttypeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 160, RegelSpraakParser.RULE_alleAttributenVanObjecttype);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1157;
                this.match(RegelSpraakParser.DE);
                this.state = 1158;
                this.naamwoord();
                this.state = 1159;
                this.match(RegelSpraakParser.VAN);
                this.state = 1160;
                this.match(RegelSpraakParser.ALLE);
                this.state = 1161;
                this.naamwoord();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    inconsistentResultaat() {
        let localctx = new InconsistentResultaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 162, RegelSpraakParser.RULE_inconsistentResultaat);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1164;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 136, this._ctx)) {
                    case 1:
                        {
                            this.state = 1163;
                            _la = this._input.LA(1);
                            if (!(_la === 212 || _la === 217 || _la === 252)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
                this.state = 1166;
                this.naamwoord();
                this.state = 1167;
                this.match(RegelSpraakParser.IS_INCONSISTENT);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    voorwaardeDeel() {
        let localctx = new VoorwaardeDeelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 164, RegelSpraakParser.RULE_voorwaardeDeel);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1169;
                this.match(RegelSpraakParser.INDIEN);
                this.state = 1172;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 137, this._ctx)) {
                    case 1:
                        {
                            this.state = 1170;
                            this.expressie();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1171;
                            this.toplevelSamengesteldeVoorwaarde();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    toplevelSamengesteldeVoorwaarde() {
        let localctx = new ToplevelSamengesteldeVoorwaardeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 166, RegelSpraakParser.RULE_toplevelSamengesteldeVoorwaarde);
        let _la;
        try {
            this.state = 1216;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 143, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1174;
                        this.match(RegelSpraakParser.ER_AAN);
                        this.state = 1175;
                        this.voorwaardeKwantificatie();
                        this.state = 1176;
                        _la = this._input.LA(1);
                        if (!(_la === 245 || _la === 246)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1177;
                        this.match(RegelSpraakParser.WORDT_VOLDAAN);
                        this.state = 1178;
                        this.match(RegelSpraakParser.COLON);
                        this.state = 1180;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1179;
                                    this.samengesteldeVoorwaardeOnderdeel();
                                }
                            }
                            this.state = 1182;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 284 || _la === 292);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1188;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 139, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1184;
                                    this.onderwerpReferentie();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1185;
                                    this.match(RegelSpraakParser.HIJ);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1186;
                                    this.match(RegelSpraakParser.HET);
                                }
                                break;
                            case 4:
                                {
                                    this.state = 1187;
                                    this.match(RegelSpraakParser.ER);
                                }
                                break;
                        }
                        this.state = 1190;
                        this.match(RegelSpraakParser.AAN);
                        this.state = 1191;
                        this.voorwaardeKwantificatie();
                        this.state = 1192;
                        _la = this._input.LA(1);
                        if (!(_la === 245 || _la === 246)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1193;
                        this.match(RegelSpraakParser.VOLDOET);
                        this.state = 1194;
                        this.match(RegelSpraakParser.COLON);
                        this.state = 1196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1195;
                                    this.samengesteldeVoorwaardeOnderdeel();
                                }
                            }
                            this.state = 1198;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 284 || _la === 292);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1204;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 141, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1200;
                                    this.onderwerpReferentie();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1201;
                                    this.match(RegelSpraakParser.HIJ);
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1202;
                                    this.match(RegelSpraakParser.HET);
                                }
                                break;
                            case 4:
                                {
                                    this.state = 1203;
                                    this.match(RegelSpraakParser.ER);
                                }
                                break;
                        }
                        this.state = 1206;
                        this.match(RegelSpraakParser.VOLDOET);
                        this.state = 1207;
                        this.match(RegelSpraakParser.AAN);
                        this.state = 1208;
                        this.voorwaardeKwantificatie();
                        this.state = 1209;
                        _la = this._input.LA(1);
                        if (!(_la === 245 || _la === 246)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1210;
                        this.match(RegelSpraakParser.COLON);
                        this.state = 1212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1211;
                                    this.samengesteldeVoorwaardeOnderdeel();
                                }
                            }
                            this.state = 1214;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 284 || _la === 292);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    voorwaardeKwantificatie() {
        let localctx = new VoorwaardeKwantificatieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 168, RegelSpraakParser.RULE_voorwaardeKwantificatie);
        let _la;
        try {
            this.state = 1233;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 212:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1218;
                        this.match(RegelSpraakParser.DE);
                    }
                    break;
                case 124:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1219;
                        this.match(RegelSpraakParser.ALLE);
                    }
                    break;
                case 203:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1220;
                        this.match(RegelSpraakParser.GEEN_VAN_DE);
                    }
                    break;
                case 157:
                case 158:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1221;
                        _la = this._input.LA(1);
                        if (!(_la === 157 || _la === 158)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1222;
                        _la = this._input.LA(1);
                        if (!(((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 16435) !== 0) || _la === 268)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1223;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1224;
                        this.match(RegelSpraakParser.DE);
                    }
                    break;
                case 159:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1225;
                        this.match(RegelSpraakParser.TEN_HOOGSTE);
                        this.state = 1226;
                        _la = this._input.LA(1);
                        if (!(((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 16435) !== 0) || _la === 268)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1227;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1228;
                        this.match(RegelSpraakParser.DE);
                    }
                    break;
                case 160:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1229;
                        this.match(RegelSpraakParser.PRECIES);
                        this.state = 1230;
                        _la = this._input.LA(1);
                        if (!(((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 16435) !== 0) || _la === 268)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1231;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1232;
                        this.match(RegelSpraakParser.DE);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    samengesteldeVoorwaardeOnderdeel() {
        let localctx = new SamengesteldeVoorwaardeOnderdeelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 170, RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeel);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1235;
                this.outerBulletPrefix();
                this.state = 1238;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 145, this._ctx)) {
                    case 1:
                        {
                            this.state = 1236;
                            this.elementaireVoorwaarde();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1237;
                            this.genesteSamengesteldeVoorwaarde();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    outerBulletPrefix() {
        let localctx = new OuterBulletPrefixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 172, RegelSpraakParser.RULE_outerBulletPrefix);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1240;
                _la = this._input.LA(1);
                if (!(_la === 284 || _la === 292)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    nestedBulletPrefix() {
        let localctx = new NestedBulletPrefixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 174, RegelSpraakParser.RULE_nestedBulletPrefix);
        try {
            this.state = 1245;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 289:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1242;
                        this.match(RegelSpraakParser.DOUBLE_DOT);
                    }
                    break;
                case 284:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1243;
                        this.match(RegelSpraakParser.BULLET);
                        this.state = 1244;
                        this.match(RegelSpraakParser.BULLET);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    bulletPrefix() {
        let localctx = new BulletPrefixContext(this, this._ctx, this.state);
        this.enterRule(localctx, 176, RegelSpraakParser.RULE_bulletPrefix);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1248;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1247;
                            _la = this._input.LA(1);
                            if (!(((((_la - 284)) & ~0x1F) === 0 && ((1 << (_la - 284)) & 291) !== 0))) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 1250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 284)) & ~0x1F) === 0 && ((1 << (_la - 284)) & 291) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    elementaireVoorwaarde() {
        let localctx = new ElementaireVoorwaardeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 178, RegelSpraakParser.RULE_elementaireVoorwaarde);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1252;
                this.expressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    genesteSamengesteldeVoorwaarde() {
        let localctx = new GenesteSamengesteldeVoorwaardeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 180, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaarde);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1257;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 148, this._ctx)) {
                    case 1:
                        {
                            this.state = 1254;
                            this.onderwerpReferentie();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1255;
                            this.match(RegelSpraakParser.HIJ);
                        }
                        break;
                    case 3:
                        {
                            this.state = 1256;
                            this.match(RegelSpraakParser.ER);
                        }
                        break;
                }
                this.state = 1259;
                this.match(RegelSpraakParser.VOLDOET);
                this.state = 1260;
                this.match(RegelSpraakParser.AAN);
                this.state = 1261;
                this.voorwaardeKwantificatie();
                this.state = 1262;
                _la = this._input.LA(1);
                if (!(_la === 245 || _la === 246)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1263;
                this.match(RegelSpraakParser.COLON);
                this.state = 1265;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1264;
                                    this.genesteSamengesteldeVoorwaardeOnderdeel();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 1267;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 149, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    genesteSamengesteldeVoorwaardeOnderdeel() {
        let localctx = new GenesteSamengesteldeVoorwaardeOnderdeelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 182, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeOnderdeel);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1269;
                this.nestedBulletPrefix();
                this.state = 1272;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 150, this._ctx)) {
                    case 1:
                        {
                            this.state = 1270;
                            this.elementaireVoorwaarde();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1271;
                            this.genesteSamengesteldeVoorwaarde();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    onderwerpReferentie() {
        let localctx = new OnderwerpReferentieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 184, RegelSpraakParser.RULE_onderwerpReferentie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1274;
                this.onderwerpBasis();
                this.state = 1277;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 151, this._ctx)) {
                    case 1:
                        {
                            this.state = 1275;
                            _la = this._input.LA(1);
                            if (!(_la === 211 || _la === 214)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1276;
                            this.predicaat();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    onderwerpReferentieWithNumbers() {
        let localctx = new OnderwerpReferentieWithNumbersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 186, RegelSpraakParser.RULE_onderwerpReferentieWithNumbers);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1279;
                this.onderwerpBasisWithNumbers();
                this.state = 1282;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 211 || _la === 214) {
                    {
                        this.state = 1280;
                        _la = this._input.LA(1);
                        if (!(_la === 211 || _la === 214)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1281;
                        this.predicaat();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    onderwerpBasis() {
        let localctx = new OnderwerpBasisContext(this, this._ctx, this.state);
        this.enterRule(localctx, 188, RegelSpraakParser.RULE_onderwerpBasis);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1284;
                this.basisOnderwerp();
                this.state = 1290;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1285;
                                this.voorzetsel();
                                this.state = 1286;
                                this.basisOnderwerp();
                            }
                        }
                    }
                    this.state = 1292;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    onderwerpBasisWithNumbers() {
        let localctx = new OnderwerpBasisWithNumbersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 190, RegelSpraakParser.RULE_onderwerpBasisWithNumbers);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1293;
                this.basisOnderwerpWithNumbers();
                this.state = 1299;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1073741829) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 44044545) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 137) !== 0)) {
                    {
                        {
                            this.state = 1294;
                            this.voorzetsel();
                            this.state = 1295;
                            this.basisOnderwerpWithNumbers();
                        }
                    }
                    this.state = 1301;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    basisOnderwerp() {
        let localctx = new BasisOnderwerpContext(this, this._ctx, this.state);
        this.enterRule(localctx, 192, RegelSpraakParser.RULE_basisOnderwerp);
        let _la;
        try {
            let _alt;
            this.state = 1309;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 119:
                case 212:
                case 215:
                case 217:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1302;
                        _la = this._input.LA(1);
                        if (!(_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1304;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 1303;
                                            this.identifierOrKeyword();
                                        }
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1306;
                            this._errHandler.sync(this);
                            _alt = this._interp.adaptivePredict(this._input, 155, this._ctx);
                        } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case 219:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1308;
                        this.match(RegelSpraakParser.HIJ);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    basisOnderwerpWithNumbers() {
        let localctx = new BasisOnderwerpWithNumbersContext(this, this._ctx, this.state);
        this.enterRule(localctx, 194, RegelSpraakParser.RULE_basisOnderwerpWithNumbers);
        let _la;
        try {
            this.state = 1318;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 119:
                case 212:
                case 215:
                case 217:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1311;
                        _la = this._input.LA(1);
                        if (!(_la === 119 || ((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1313;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 1312;
                                    this.identifierOrKeywordWithNumbers();
                                }
                            }
                            this.state = 1315;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267 || _la === 268);
                    }
                    break;
                case 219:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1317;
                        this.match(RegelSpraakParser.HIJ);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    attribuutReferentie() {
        let localctx = new AttribuutReferentieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 196, RegelSpraakParser.RULE_attribuutReferentie);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1320;
                this.attribuutMetLidwoord();
                this.state = 1321;
                this.match(RegelSpraakParser.VAN);
                this.state = 1322;
                this.onderwerpReferentie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    attribuutMetLidwoord() {
        let localctx = new AttribuutMetLidwoordContext(this, this._ctx, this.state);
        this.enterRule(localctx, 198, RegelSpraakParser.RULE_attribuutMetLidwoord);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1324;
                this.naamwoordNoIs();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    kenmerkNaam() {
        let localctx = new KenmerkNaamContext(this, this._ctx, this.state);
        this.enterRule(localctx, 200, RegelSpraakParser.RULE_kenmerkNaam);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1073741829) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 44044545) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 137) !== 0)) {
                    {
                        this.state = 1326;
                        this.voorzetsel();
                    }
                }
                this.state = 1329;
                this.naamwoordWithNumbers();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    kenmerkPhrase() {
        let localctx = new KenmerkPhraseContext(this, this._ctx, this.state);
        this.enterRule(localctx, 202, RegelSpraakParser.RULE_kenmerkPhrase);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1332;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & 1073741829) !== 0) || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & 44044545) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 137) !== 0)) {
                    {
                        this.state = 1331;
                        this.voorzetsel();
                    }
                }
                this.state = 1335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0)) {
                    {
                        this.state = 1334;
                        _la = this._input.LA(1);
                        if (!(((((_la - 212)) & ~0x1F) === 0 && ((1 << (_la - 212)) & 41) !== 0))) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 1338;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 1337;
                            this.identifierOrKeywordWithNumbers();
                        }
                    }
                    this.state = 1340;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268582913) !== 0) || _la === 132 || _la === 161 || ((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & 2149160961) !== 0) || ((((_la - 223)) & ~0x1F) === 0 && ((1 << (_la - 223)) & 1073744387) !== 0) || _la === 267 || _la === 268);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    bezieldeReferentie() {
        let localctx = new BezieldeReferentieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 204, RegelSpraakParser.RULE_bezieldeReferentie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1342;
                _la = this._input.LA(1);
                if (!(((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & 7) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1343;
                this.naamwoord();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    aggregationSubject() {
        let localctx = new AggregationSubjectContext(this, this._ctx, this.state);
        this.enterRule(localctx, 206, RegelSpraakParser.RULE_aggregationSubject);
        let _la;
        try {
            this.state = 1352;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 164, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1345;
                        this.match(RegelSpraakParser.ALLE);
                        this.state = 1346;
                        this.naamwoord();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1347;
                        this.naamwoord();
                        this.state = 1350;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 163, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1348;
                                    _la = this._input.LA(1);
                                    if (!(_la === 211 || _la === 214)) {
                                        this._errHandler.recoverInline(this);
                                    }
                                    else {
                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1349;
                                    this.predicaat();
                                }
                                break;
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    predicaat() {
        let localctx = new PredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 208, RegelSpraakParser.RULE_predicaat);
        try {
            this.state = 1356;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 45:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 64:
                case 65:
                case 66:
                case 67:
                case 96:
                case 110:
                case 113:
                case 119:
                case 124:
                case 132:
                case 140:
                case 146:
                case 148:
                case 161:
                case 176:
                case 190:
                case 201:
                case 202:
                case 205:
                case 206:
                case 208:
                case 209:
                case 210:
                case 212:
                case 215:
                case 216:
                case 217:
                case 220:
                case 221:
                case 223:
                case 224:
                case 229:
                case 231:
                case 232:
                case 233:
                case 234:
                case 241:
                case 244:
                case 248:
                case 253:
                case 267:
                case 268:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1354;
                        this.elementairPredicaat();
                    }
                    break;
                case 122:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1355;
                        this.samengesteldPredicaat();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    elementairPredicaat() {
        let localctx = new ElementairPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 210, RegelSpraakParser.RULE_elementairPredicaat);
        try {
            this.state = 1363;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 166, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1358;
                        this.attribuutVergelijkingsPredicaat();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1359;
                        this.objectPredicaat();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1360;
                        this.getalPredicaat();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1361;
                        this.tekstPredicaat();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1362;
                        this.datumPredicaat();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    objectPredicaat() {
        let localctx = new ObjectPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 212, RegelSpraakParser.RULE_objectPredicaat);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1365;
                this.eenzijdigeObjectVergelijking();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    eenzijdigeObjectVergelijking() {
        let localctx = new EenzijdigeObjectVergelijkingContext(this, this._ctx, this.state);
        this.enterRule(localctx, 214, RegelSpraakParser.RULE_eenzijdigeObjectVergelijking);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1368;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 167, this._ctx)) {
                    case 1:
                        {
                            this.state = 1367;
                            this.match(RegelSpraakParser.EEN);
                        }
                        break;
                }
                this.state = 1372;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 168, this._ctx)) {
                    case 1:
                        {
                            this.state = 1370;
                            this.kenmerkNaam();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1371;
                            this.rolNaam();
                        }
                        break;
                }
                this.state = 1374;
                _la = this._input.LA(1);
                if (!(_la === 109 || _la === 119)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    rolNaam() {
        let localctx = new RolNaamContext(this, this._ctx, this.state);
        this.enterRule(localctx, 216, RegelSpraakParser.RULE_rolNaam);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1376;
                this.naamwoord();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    attribuutVergelijkingsPredicaat() {
        let localctx = new AttribuutVergelijkingsPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 218, RegelSpraakParser.RULE_attribuutVergelijkingsPredicaat);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1379;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 169, this._ctx)) {
                    case 1:
                        {
                            this.state = 1378;
                            this.match(RegelSpraakParser.EEN);
                        }
                        break;
                }
                this.state = 1381;
                localctx._attribuutNaam = this.naamwoord();
                this.state = 1382;
                this.match(RegelSpraakParser.HEBBEN);
                this.state = 1383;
                this.comparisonOperator();
                this.state = 1384;
                this.expressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    getalPredicaat() {
        let localctx = new GetalPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 220, RegelSpraakParser.RULE_getalPredicaat);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1386;
                this.getalVergelijkingsOperatorMeervoud();
                this.state = 1387;
                this.getalExpressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tekstPredicaat() {
        let localctx = new TekstPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 222, RegelSpraakParser.RULE_tekstPredicaat);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1389;
                this.tekstVergelijkingsOperatorMeervoud();
                this.state = 1390;
                this.tekstExpressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datumPredicaat() {
        let localctx = new DatumPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 224, RegelSpraakParser.RULE_datumPredicaat);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1392;
                this.datumVergelijkingsOperatorMeervoud();
                this.state = 1393;
                this.datumExpressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    samengesteldPredicaat() {
        let localctx = new SamengesteldPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 226, RegelSpraakParser.RULE_samengesteldPredicaat);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1395;
                this.match(RegelSpraakParser.AAN);
                this.state = 1396;
                this.voorwaardeKwantificatie();
                this.state = 1397;
                _la = this._input.LA(1);
                if (!(_la === 245 || _la === 246)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1398;
                _la = this._input.LA(1);
                if (!(_la === 153 || _la === 154)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1399;
                this.match(RegelSpraakParser.COLON);
                this.state = 1401;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1400;
                                    this.samengesteldeVoorwaardeOnderdeelInPredicaat();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 1403;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 170, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    samengesteldeVoorwaardeOnderdeelInPredicaat() {
        let localctx = new SamengesteldeVoorwaardeOnderdeelInPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 228, RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeelInPredicaat);
        try {
            this.state = 1411;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 171, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1405;
                        this.bulletPrefix();
                        this.state = 1406;
                        this.elementaireVoorwaardeInPredicaat();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1408;
                        this.bulletPrefix();
                        this.state = 1409;
                        this.genesteSamengesteldeVoorwaardeInPredicaat();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    elementaireVoorwaardeInPredicaat() {
        let localctx = new ElementaireVoorwaardeInPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 230, RegelSpraakParser.RULE_elementaireVoorwaardeInPredicaat);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1413;
                this.vergelijkingInPredicaat();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    vergelijkingInPredicaat() {
        let localctx = new VergelijkingInPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 232, RegelSpraakParser.RULE_vergelijkingInPredicaat);
        let _la;
        try {
            this.state = 1426;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 172, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1415;
                        this.attribuutReferentie();
                        this.state = 1416;
                        this.comparisonOperator();
                        this.state = 1417;
                        this.expressie();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1419;
                        this.onderwerpReferentie();
                        this.state = 1420;
                        this.eenzijdigeObjectVergelijking();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1422;
                        this.attribuutReferentie();
                        this.state = 1423;
                        _la = this._input.LA(1);
                        if (!(_la === 113 || _la === 119)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1424;
                        this.kenmerkNaam();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    genesteSamengesteldeVoorwaardeInPredicaat() {
        let localctx = new GenesteSamengesteldeVoorwaardeInPredicaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 234, RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeInPredicaat);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1432;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 154:
                        {
                            this.state = 1428;
                            this.match(RegelSpraakParser.VOLDOET);
                        }
                        break;
                    case 153:
                        {
                            this.state = 1429;
                            this.match(RegelSpraakParser.VOLDOEN);
                        }
                        break;
                    case 117:
                        {
                            this.state = 1430;
                            this.match(RegelSpraakParser.WORDT);
                            this.state = 1431;
                            this.match(RegelSpraakParser.VOLDAAN);
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 1434;
                this.match(RegelSpraakParser.AAN);
                this.state = 1435;
                this.voorwaardeKwantificatie();
                this.state = 1436;
                _la = this._input.LA(1);
                if (!(_la === 245 || _la === 246)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1437;
                this.match(RegelSpraakParser.COLON);
                this.state = 1439;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1438;
                                    this.samengesteldeVoorwaardeOnderdeelInPredicaat();
                                }
                            }
                            break;
                        default:
                            throw new antlr4_1.NoViableAltException(this);
                    }
                    this.state = 1441;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 174, this._ctx);
                } while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    getalVergelijkingsOperatorMeervoud() {
        let localctx = new GetalVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
        this.enterRule(localctx, 236, RegelSpraakParser.RULE_getalVergelijkingsOperatorMeervoud);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1443;
                _la = this._input.LA(1);
                if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 63) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tekstVergelijkingsOperatorMeervoud() {
        let localctx = new TekstVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
        this.enterRule(localctx, 238, RegelSpraakParser.RULE_tekstVergelijkingsOperatorMeervoud);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1445;
                _la = this._input.LA(1);
                if (!(_la === 54 || _la === 55)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datumVergelijkingsOperatorMeervoud() {
        let localctx = new DatumVergelijkingsOperatorMeervoudContext(this, this._ctx, this.state);
        this.enterRule(localctx, 240, RegelSpraakParser.RULE_datumVergelijkingsOperatorMeervoud);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1447;
                _la = this._input.LA(1);
                if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 15363) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    getalExpressie() {
        let localctx = new GetalExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 242, RegelSpraakParser.RULE_getalExpressie);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1449;
                this.expressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tekstExpressie() {
        let localctx = new TekstExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 244, RegelSpraakParser.RULE_tekstExpressie);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1451;
                this.expressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datumExpressie() {
        let localctx = new DatumExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 246, RegelSpraakParser.RULE_datumExpressie);
        try {
            this.state = 1477;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 175, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1453;
                        this.datumLiteral();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1454;
                        this.match(RegelSpraakParser.REKENDATUM);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1455;
                        this.match(RegelSpraakParser.REKENJAAR);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1456;
                        this.match(RegelSpraakParser.DE_DATUM_MET);
                        this.state = 1457;
                        this.match(RegelSpraakParser.LPAREN);
                        this.state = 1458;
                        this.primaryExpression(0);
                        this.state = 1459;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 1460;
                        this.primaryExpression(0);
                        this.state = 1461;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 1462;
                        this.primaryExpression(0);
                        this.state = 1463;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1465;
                        this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
                        this.state = 1466;
                        this.match(RegelSpraakParser.LPAREN);
                        this.state = 1467;
                        this.primaryExpression(0);
                        this.state = 1468;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1470;
                        this.attribuutReferentie();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1471;
                        this.bezieldeReferentie();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1472;
                        this.parameterMetLidwoord();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 1473;
                        this.match(RegelSpraakParser.LPAREN);
                        this.state = 1474;
                        this.expressie();
                        this.state = 1475;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    variabeleDeel() {
        let localctx = new VariabeleDeelContext(this, this._ctx, this.state);
        this.enterRule(localctx, 248, RegelSpraakParser.RULE_variabeleDeel);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1479;
                this.match(RegelSpraakParser.DAARBIJ_GELDT);
                this.state = 1483;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 212 || _la === 217 || _la === 267) {
                    {
                        {
                            this.state = 1480;
                            this.variabeleToekenning();
                        }
                    }
                    this.state = 1485;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1486;
                this.match(RegelSpraakParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    variabeleToekenning() {
        let localctx = new VariabeleToekenningContext(this, this._ctx, this.state);
        this.enterRule(localctx, 250, RegelSpraakParser.RULE_variabeleToekenning);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1489;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 212 || _la === 217) {
                    {
                        this.state = 1488;
                        localctx._article = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === 212 || _la === 217)) {
                            localctx._article = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 1491;
                localctx._varName = this.match(RegelSpraakParser.IDENTIFIER);
                this.state = 1492;
                this.match(RegelSpraakParser.IS);
                this.state = 1493;
                localctx._varExpr = this.variabeleExpressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    variabeleExpressie() {
        let localctx = new VariabeleExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 252, RegelSpraakParser.RULE_variabeleExpressie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1495;
                this.primaryExpression(0);
                this.state = 1504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 67243011) !== 0)) {
                    {
                        {
                            this.state = 1498;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 137:
                                case 143:
                                case 152:
                                    {
                                        this.state = 1496;
                                        this.additiveOperator();
                                    }
                                    break;
                                case 126:
                                case 127:
                                case 136:
                                    {
                                        this.state = 1497;
                                        this.multiplicativeOperator();
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1500;
                            this.primaryExpression(0);
                        }
                    }
                    this.state = 1506;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    expressie() {
        let localctx = new ExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 254, RegelSpraakParser.RULE_expressie);
        try {
            this.state = 1520;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 180, this._ctx)) {
                case 1:
                    localctx = new ExprBegrenzingAfrondingContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1507;
                        this.logicalExpression();
                        this.state = 1508;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 1509;
                        this.begrenzing();
                        this.state = 1510;
                        this.afronding();
                    }
                    break;
                case 2:
                    localctx = new ExprBegrenzingContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1512;
                        this.logicalExpression();
                        this.state = 1513;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 1514;
                        this.begrenzing();
                    }
                    break;
                case 3:
                    localctx = new ExprAfrondingContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1516;
                        this.logicalExpression();
                        this.state = 1517;
                        this.afronding();
                    }
                    break;
                case 4:
                    localctx = new SimpleExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1519;
                        this.logicalExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    simpleExpressie() {
        let localctx = new SimpleExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 256, RegelSpraakParser.RULE_simpleExpressie);
        try {
            this.state = 1535;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 181, this._ctx)) {
                case 1:
                    localctx = new SimpleExprBegrenzingAfrondingContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1522;
                        this.comparisonExpression();
                        this.state = 1523;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 1524;
                        this.begrenzing();
                        this.state = 1525;
                        this.afronding();
                    }
                    break;
                case 2:
                    localctx = new SimpleExprBegrenzingContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1527;
                        this.comparisonExpression();
                        this.state = 1528;
                        this.match(RegelSpraakParser.COMMA);
                        this.state = 1529;
                        this.begrenzing();
                    }
                    break;
                case 3:
                    localctx = new SimpleExprAfrondingContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1531;
                        this.comparisonExpression();
                        this.state = 1532;
                        this.afronding();
                    }
                    break;
                case 4:
                    localctx = new SimpleExprBaseContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1534;
                        this.comparisonExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    logicalExpression() {
        let localctx = new LogicalExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 258, RegelSpraakParser.RULE_logicalExpression);
        let _la;
        try {
            localctx = new LogicalExprContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1537;
                localctx._left = this.comparisonExpression();
                this.state = 1540;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 182, this._ctx)) {
                    case 1:
                        {
                            this.state = 1538;
                            localctx._op = this._input.LT(1);
                            _la = this._input.LA(1);
                            if (!(_la === 216 || _la === 229)) {
                                localctx._op = this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1539;
                            localctx._right = this.logicalExpression();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    comparisonExpression() {
        let localctx = new ComparisonExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 260, RegelSpraakParser.RULE_comparisonExpression);
        let _la;
        try {
            this.state = 1573;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 185, this._ctx)) {
                case 1:
                    localctx = new SubordinateClauseExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1542;
                        this.subordinateClauseExpression();
                    }
                    break;
                case 2:
                    localctx = new PeriodeCheckExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1543;
                        this.periodevergelijkingElementair();
                    }
                    break;
                case 3:
                    localctx = new IsKenmerkExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1544;
                        localctx._left = this.additiveExpression();
                        this.state = 1545;
                        this.match(RegelSpraakParser.IS);
                        this.state = 1546;
                        this.naamwoordWithNumbers();
                    }
                    break;
                case 4:
                    localctx = new HeeftKenmerkExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1548;
                        localctx._left = this.additiveExpression();
                        this.state = 1549;
                        this.match(RegelSpraakParser.HEEFT);
                        this.state = 1550;
                        this.naamwoordWithNumbers();
                    }
                    break;
                case 5:
                    localctx = new GelijkIsAanOfExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1552;
                        localctx._left = this.additiveExpression();
                        this.state = 1553;
                        localctx._op = this.gelijkIsAanOperator();
                        this.state = 1554;
                        localctx._firstValue = this.literalValue();
                        this.state = 1559;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === 278) {
                            {
                                {
                                    this.state = 1555;
                                    this.match(RegelSpraakParser.COMMA);
                                    this.state = 1556;
                                    localctx._literalValue = this.literalValue();
                                    localctx._middleValues.push(localctx._literalValue);
                                }
                            }
                            this.state = 1561;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1562;
                        this.match(RegelSpraakParser.OF);
                        this.state = 1563;
                        localctx._lastValue = this.literalValue();
                    }
                    break;
                case 6:
                    localctx = new BinaryComparisonExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1565;
                        localctx._left = this.additiveExpression();
                        this.state = 1569;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 184, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1566;
                                    this.comparisonOperator();
                                    this.state = 1567;
                                    localctx._right = this.additiveExpression();
                                }
                                break;
                        }
                    }
                    break;
                case 7:
                    localctx = new UnaryConditionExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1571;
                        this.unaryCondition();
                    }
                    break;
                case 8:
                    localctx = new RegelStatusConditionExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1572;
                        this.regelStatusCondition();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    literalValue() {
        let localctx = new LiteralValueContext(this, this._ctx, this.state);
        this.enterRule(localctx, 262, RegelSpraakParser.RULE_literalValue);
        try {
            this.state = 1584;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 273:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1575;
                        this.match(RegelSpraakParser.ENUM_LITERAL);
                    }
                    break;
                case 272:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1576;
                        this.match(RegelSpraakParser.STRING_LITERAL);
                    }
                    break;
                case 268:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1577;
                        this.match(RegelSpraakParser.NUMBER);
                        this.state = 1579;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 186, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1578;
                                    this.unitIdentifier();
                                }
                                break;
                        }
                    }
                    break;
                case 271:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1581;
                        this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
                    }
                    break;
                case 270:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1582;
                        this.datumLiteral();
                    }
                    break;
                case 267:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1583;
                        this.identifier();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    gelijkIsAanOperator() {
        let localctx = new GelijkIsAanOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 264, RegelSpraakParser.RULE_gelijkIsAanOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1586;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 131) !== 0) || _la === 128)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    comparisonOperator() {
        let localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 266, RegelSpraakParser.RULE_comparisonOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1588;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 62914560) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 1073741315) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 674533377) !== 0) || _la === 220)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    additiveExpression() {
        let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 268, RegelSpraakParser.RULE_additiveExpression);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1590;
                localctx._left = this.multiplicativeExpression();
                this.state = 1596;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 188, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1591;
                                this.additiveOperator();
                                this.state = 1592;
                                localctx._right = this.multiplicativeExpression();
                            }
                        }
                    }
                    this.state = 1598;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 188, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    additiveOperator() {
        let localctx = new AdditiveOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 270, RegelSpraakParser.RULE_additiveOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1599;
                _la = this._input.LA(1);
                if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 32833) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    multiplicativeExpression() {
        let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 272, RegelSpraakParser.RULE_multiplicativeExpression);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1601;
                localctx._left = this.powerExpression();
                this.state = 1607;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1602;
                                this.multiplicativeOperator();
                                this.state = 1603;
                                localctx._right = this.powerExpression();
                            }
                        }
                    }
                    this.state = 1609;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 189, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    multiplicativeOperator() {
        let localctx = new MultiplicativeOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 274, RegelSpraakParser.RULE_multiplicativeOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1610;
                _la = this._input.LA(1);
                if (!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 1027) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    powerExpression() {
        let localctx = new PowerExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 276, RegelSpraakParser.RULE_powerExpression);
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1612;
                localctx._left = this.primaryExpression(0);
                this.state = 1618;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1613;
                                this.powerOperator();
                                this.state = 1614;
                                localctx._right = this.primaryExpression(0);
                            }
                        }
                    }
                    this.state = 1620;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 190, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    powerOperator() {
        let localctx = new PowerOperatorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 278, RegelSpraakParser.RULE_powerOperator);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1621;
                _la = this._input.LA(1);
                if (!(_la === 147 || _la === 288)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    primaryExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new PrimaryExpressionContext(this, this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 280;
        this.enterRecursionRule(localctx, 280, RegelSpraakParser.RULE_primaryExpression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1886;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 216, this._ctx)) {
                    case 1:
                        {
                            localctx = new UnaryMinusExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1624;
                            this.match(RegelSpraakParser.MIN);
                            this.state = 1625;
                            this.primaryExpression(55);
                        }
                        break;
                    case 2:
                        {
                            localctx = new UnaryMinusExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1626;
                            this.match(RegelSpraakParser.MINUS);
                            this.state = 1627;
                            this.primaryExpression(54);
                        }
                        break;
                    case 3:
                        {
                            localctx = new UnaryNietExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1628;
                            this.match(RegelSpraakParser.NIET);
                            this.state = 1629;
                            this.primaryExpression(53);
                        }
                        break;
                    case 4:
                        {
                            localctx = new AbsTijdsduurFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1630;
                            this.match(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN);
                            this.state = 1631;
                            this.primaryExpression(0);
                            this.state = 1632;
                            this.match(RegelSpraakParser.TOT);
                            this.state = 1633;
                            this.primaryExpression(0);
                            this.state = 1636;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 191, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1634;
                                        this.match(RegelSpraakParser.IN_HELE);
                                        this.state = 1635;
                                        this.unitIdentifier();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 5:
                        {
                            localctx = new TijdsduurFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1638;
                            this.match(RegelSpraakParser.TIJDSDUUR_VAN);
                            this.state = 1639;
                            this.primaryExpression(0);
                            this.state = 1640;
                            this.match(RegelSpraakParser.TOT);
                            this.state = 1641;
                            this.primaryExpression(0);
                            this.state = 1644;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 192, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1642;
                                        this.match(RegelSpraakParser.IN_HELE);
                                        this.state = 1643;
                                        this.unitIdentifier();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 6:
                        {
                            localctx = new SomFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1646;
                            this.match(RegelSpraakParser.SOM_VAN);
                            this.state = 1647;
                            this.primaryExpression(0);
                            this.state = 1652;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 278) {
                                {
                                    {
                                        this.state = 1648;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1649;
                                        this.primaryExpression(0);
                                    }
                                }
                                this.state = 1654;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1655;
                            this.match(RegelSpraakParser.EN);
                            this.state = 1656;
                            this.primaryExpression(50);
                        }
                        break;
                    case 7:
                        {
                            localctx = new SomAlleExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1658;
                            this.match(RegelSpraakParser.SOM_VAN);
                            this.state = 1659;
                            this.match(RegelSpraakParser.ALLE);
                            this.state = 1660;
                            this.naamwoord();
                        }
                        break;
                    case 8:
                        {
                            localctx = new SomAlleAttribuutExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1661;
                            this.match(RegelSpraakParser.SOM_VAN);
                            this.state = 1662;
                            this.match(RegelSpraakParser.ALLE);
                            this.state = 1663;
                            this.attribuutReferentie();
                        }
                        break;
                    case 9:
                        {
                            localctx = new AantalFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1667;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 217:
                                    {
                                        this.state = 1664;
                                        this.match(RegelSpraakParser.HET);
                                        this.state = 1665;
                                        this.match(RegelSpraakParser.AANTAL);
                                    }
                                    break;
                                case 190:
                                    {
                                        this.state = 1666;
                                        this.match(RegelSpraakParser.AANTAL);
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1669;
                            this.aggregationSubject();
                        }
                        break;
                    case 10:
                        {
                            localctx = new AantalAttribuutExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1670;
                            this.match(RegelSpraakParser.HET);
                            this.state = 1671;
                            this.match(RegelSpraakParser.AANTAL);
                            this.state = 1672;
                            this.attribuutReferentie();
                        }
                        break;
                    case 11:
                        {
                            localctx = new AantalAttribuutExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1673;
                            this.match(RegelSpraakParser.AANTAL);
                            this.state = 1674;
                            this.attribuutReferentie();
                        }
                        break;
                    case 12:
                        {
                            localctx = new PercentageFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1681;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 268:
                                    {
                                        this.state = 1675;
                                        this.match(RegelSpraakParser.NUMBER);
                                        this.state = 1678;
                                        this._errHandler.sync(this);
                                        switch (this._input.LA(1)) {
                                            case 283:
                                                {
                                                    this.state = 1676;
                                                    this.match(RegelSpraakParser.PERCENT_SIGN);
                                                }
                                                break;
                                            case 267:
                                                {
                                                    this.state = 1677;
                                                    localctx._p = this.match(RegelSpraakParser.IDENTIFIER);
                                                }
                                                break;
                                            default:
                                                throw new antlr4_1.NoViableAltException(this);
                                        }
                                    }
                                    break;
                                case 271:
                                    {
                                        this.state = 1680;
                                        this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1683;
                            this.match(RegelSpraakParser.VAN);
                            this.state = 1684;
                            this.primaryExpression(44);
                        }
                        break;
                    case 13:
                        {
                            localctx = new PercentageOfExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1685;
                            this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
                            this.state = 1686;
                            this.match(RegelSpraakParser.VAN);
                            this.state = 1687;
                            this.primaryExpression(43);
                        }
                        break;
                    case 14:
                        {
                            localctx = new ConcatenatieExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1688;
                            this.match(RegelSpraakParser.CONCATENATIE_VAN);
                            this.state = 1689;
                            this.primaryExpression(0);
                            this.state = 1694;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 278) {
                                {
                                    {
                                        this.state = 1690;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1691;
                                        this.primaryExpression(0);
                                    }
                                }
                                this.state = 1696;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1697;
                            _la = this._input.LA(1);
                            if (!(_la === 216 || _la === 229)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1698;
                            this.primaryExpression(39);
                        }
                        break;
                    case 15:
                        {
                            localctx = new WortelFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1700;
                            this.match(RegelSpraakParser.DE_WORTEL_VAN);
                            this.state = 1701;
                            this.primaryExpression(37);
                        }
                        break;
                    case 16:
                        {
                            localctx = new AbsValFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1702;
                            this.match(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN);
                            this.state = 1703;
                            this.match(RegelSpraakParser.LPAREN);
                            this.state = 1704;
                            this.expressie();
                            this.state = 1705;
                            this.match(RegelSpraakParser.RPAREN);
                        }
                        break;
                    case 17:
                        {
                            localctx = new MinValFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1707;
                            this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
                            this.state = 1708;
                            this.primaryExpression(0);
                            this.state = 1713;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 278) {
                                {
                                    {
                                        this.state = 1709;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1710;
                                        this.primaryExpression(0);
                                    }
                                }
                                this.state = 1715;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1716;
                            this.match(RegelSpraakParser.EN);
                            this.state = 1717;
                            this.primaryExpression(35);
                        }
                        break;
                    case 18:
                        {
                            localctx = new MinAlleAttribuutExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1719;
                            this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
                            this.state = 1720;
                            this.match(RegelSpraakParser.ALLE);
                            this.state = 1721;
                            this.attribuutReferentie();
                        }
                        break;
                    case 19:
                        {
                            localctx = new MaxValFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1722;
                            this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
                            this.state = 1723;
                            this.primaryExpression(0);
                            this.state = 1728;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 278) {
                                {
                                    {
                                        this.state = 1724;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1725;
                                        this.primaryExpression(0);
                                    }
                                }
                                this.state = 1730;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1731;
                            this.match(RegelSpraakParser.EN);
                            this.state = 1732;
                            this.primaryExpression(33);
                        }
                        break;
                    case 20:
                        {
                            localctx = new MaxAlleAttribuutExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1734;
                            this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
                            this.state = 1735;
                            this.match(RegelSpraakParser.ALLE);
                            this.state = 1736;
                            this.attribuutReferentie();
                        }
                        break;
                    case 21:
                        {
                            localctx = new JaarUitFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1737;
                            this.match(RegelSpraakParser.HET);
                            this.state = 1738;
                            this.match(RegelSpraakParser.JAAR);
                            this.state = 1739;
                            this.match(RegelSpraakParser.UIT);
                            this.state = 1740;
                            this.primaryExpression(31);
                        }
                        break;
                    case 22:
                        {
                            localctx = new MaandUitFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1741;
                            this.match(RegelSpraakParser.DE);
                            this.state = 1742;
                            this.match(RegelSpraakParser.MAAND);
                            this.state = 1743;
                            this.match(RegelSpraakParser.UIT);
                            this.state = 1744;
                            this.primaryExpression(30);
                        }
                        break;
                    case 23:
                        {
                            localctx = new DagUitFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1745;
                            this.match(RegelSpraakParser.DE);
                            this.state = 1746;
                            this.match(RegelSpraakParser.DAG);
                            this.state = 1747;
                            this.match(RegelSpraakParser.UIT);
                            this.state = 1748;
                            this.primaryExpression(29);
                        }
                        break;
                    case 24:
                        {
                            localctx = new DatumMetFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1749;
                            this.match(RegelSpraakParser.DE_DATUM_MET);
                            this.state = 1750;
                            this.match(RegelSpraakParser.LPAREN);
                            this.state = 1751;
                            this.primaryExpression(0);
                            this.state = 1752;
                            this.match(RegelSpraakParser.COMMA);
                            this.state = 1753;
                            this.primaryExpression(0);
                            this.state = 1754;
                            this.match(RegelSpraakParser.COMMA);
                            this.state = 1755;
                            this.primaryExpression(0);
                            this.state = 1756;
                            this.match(RegelSpraakParser.RPAREN);
                        }
                        break;
                    case 25:
                        {
                            localctx = new PasenFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1758;
                            this.match(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN);
                            this.state = 1759;
                            this.match(RegelSpraakParser.LPAREN);
                            this.state = 1760;
                            this.primaryExpression(0);
                            this.state = 1761;
                            this.match(RegelSpraakParser.RPAREN);
                        }
                        break;
                    case 26:
                        {
                            localctx = new DateCalcExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1763;
                            this.datumExpressie();
                            this.state = 1764;
                            _la = this._input.LA(1);
                            if (!(_la === 137 || _la === 143)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1765;
                            this.primaryExpression(0);
                            this.state = 1766;
                            this.timeUnit();
                        }
                        break;
                    case 27:
                        {
                            localctx = new EersteDatumFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1768;
                            this.match(RegelSpraakParser.EERSTE_VAN);
                            this.state = 1769;
                            this.primaryExpression(0);
                            this.state = 1774;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 278) {
                                {
                                    {
                                        this.state = 1770;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1771;
                                        this.primaryExpression(0);
                                    }
                                }
                                this.state = 1776;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1777;
                            this.match(RegelSpraakParser.EN);
                            this.state = 1778;
                            this.primaryExpression(25);
                        }
                        break;
                    case 28:
                        {
                            localctx = new LaatsteDatumFuncExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1780;
                            this.match(RegelSpraakParser.LAATSTE_VAN);
                            this.state = 1781;
                            this.primaryExpression(0);
                            this.state = 1786;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === 278) {
                                {
                                    {
                                        this.state = 1782;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1783;
                                        this.primaryExpression(0);
                                    }
                                }
                                this.state = 1788;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1789;
                            this.match(RegelSpraakParser.EN);
                            this.state = 1790;
                            this.primaryExpression(24);
                        }
                        break;
                    case 29:
                        {
                            localctx = new TotaalVanExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1792;
                            this.match(RegelSpraakParser.HET_TOTAAL_VAN);
                            this.state = 1793;
                            this.expressie();
                            this.state = 1795;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 202, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1794;
                                        this.conditieBijExpressie();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 30:
                        {
                            localctx = new HetAantalDagenInExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1797;
                            this.match(RegelSpraakParser.HET);
                            this.state = 1798;
                            this.match(RegelSpraakParser.AANTAL);
                            this.state = 1799;
                            this.match(RegelSpraakParser.DAGEN);
                            this.state = 1800;
                            this.match(RegelSpraakParser.IN);
                            this.state = 1809;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 212:
                                case 224:
                                    {
                                        this.state = 1802;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 212) {
                                            {
                                                this.state = 1801;
                                                this.match(RegelSpraakParser.DE);
                                            }
                                        }
                                        this.state = 1804;
                                        this.match(RegelSpraakParser.MAAND);
                                    }
                                    break;
                                case 217:
                                case 221:
                                    {
                                        this.state = 1806;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 217) {
                                            {
                                                this.state = 1805;
                                                this.match(RegelSpraakParser.HET);
                                            }
                                        }
                                        this.state = 1808;
                                        this.match(RegelSpraakParser.JAAR);
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1811;
                            this.match(RegelSpraakParser.DAT);
                            this.state = 1812;
                            this.expressie();
                        }
                        break;
                    case 31:
                        {
                            localctx = new CapitalizedTotaalVanExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1814;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1813;
                                        this.identifier();
                                    }
                                }
                                this.state = 1816;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === 267);
                            this.state = 1818;
                            this.match(RegelSpraakParser.HET_TOTAAL_VAN);
                            this.state = 1819;
                            this.expressie();
                            this.state = 1821;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 207, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1820;
                                        this.conditieBijExpressie();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 32:
                        {
                            localctx = new TijdsevenredigDeelExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1823;
                            this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
                            this.state = 1824;
                            _la = this._input.LA(1);
                            if (!(_la === 221 || _la === 224)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1825;
                            this.match(RegelSpraakParser.VAN);
                            this.state = 1826;
                            this.expressie();
                            this.state = 1828;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 208, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1827;
                                        this.conditieBijExpressie();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 33:
                        {
                            localctx = new CapitalizedTijdsevenredigDeelExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1831;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1830;
                                        this.identifier();
                                    }
                                }
                                this.state = 1833;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === 267);
                            this.state = 1835;
                            this.match(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER);
                            this.state = 1836;
                            _la = this._input.LA(1);
                            if (!(_la === 221 || _la === 224)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 1837;
                            this.match(RegelSpraakParser.VAN);
                            this.state = 1838;
                            this.expressie();
                            this.state = 1840;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 210, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1839;
                                        this.conditieBijExpressie();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 34:
                        {
                            localctx = new DimensieAggExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1844;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 13:
                                case 14:
                                case 190:
                                case 195:
                                case 217:
                                    {
                                        this.state = 1842;
                                        this.getalAggregatieFunctie();
                                    }
                                    break;
                                case 191:
                                case 193:
                                    {
                                        this.state = 1843;
                                        this.datumAggregatieFunctie();
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1846;
                            this.attribuutMetLidwoord();
                            this.state = 1847;
                            this.dimensieSelectie();
                        }
                        break;
                    case 35:
                        {
                            localctx = new DimensieRangeAggExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1851;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case 13:
                                case 14:
                                case 190:
                                case 195:
                                case 217:
                                    {
                                        this.state = 1849;
                                        this.getalAggregatieFunctie();
                                    }
                                    break;
                                case 191:
                                case 193:
                                    {
                                        this.state = 1850;
                                        this.datumAggregatieFunctie();
                                    }
                                    break;
                                default:
                                    throw new antlr4_1.NoViableAltException(this);
                            }
                            this.state = 1855;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 213, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1853;
                                        this.bezieldeReferentie();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 1854;
                                        this.attribuutReferentie();
                                    }
                                    break;
                            }
                            this.state = 1857;
                            this.match(RegelSpraakParser.VANAF);
                            this.state = 1858;
                            this.naamwoord();
                            this.state = 1859;
                            this.match(RegelSpraakParser.TM);
                            this.state = 1860;
                            this.naamwoord();
                            this.state = 1862;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 214, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1861;
                                        this.match(RegelSpraakParser.DOT);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 36:
                        {
                            localctx = new NumberLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1864;
                            this.match(RegelSpraakParser.NUMBER);
                            this.state = 1866;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 215, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1865;
                                        this.unitIdentifier();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 37:
                        {
                            localctx = new RekendatumKeywordExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1868;
                            this.match(RegelSpraakParser.REKENDATUM);
                        }
                        break;
                    case 38:
                        {
                            localctx = new IdentifierExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1869;
                            this.identifier();
                        }
                        break;
                    case 39:
                        {
                            localctx = new BezieldeRefExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1870;
                            this.bezieldeReferentie();
                        }
                        break;
                    case 40:
                        {
                            localctx = new AttrRefExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1871;
                            this.attribuutReferentie();
                        }
                        break;
                    case 41:
                        {
                            localctx = new OnderwerpRefExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1872;
                            this.onderwerpReferentie();
                        }
                        break;
                    case 42:
                        {
                            localctx = new NaamwoordExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1873;
                            this.naamwoord();
                        }
                        break;
                    case 43:
                        {
                            localctx = new ParamRefExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1874;
                            this.parameterMetLidwoord();
                        }
                        break;
                    case 44:
                        {
                            localctx = new PercentageLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1875;
                            this.match(RegelSpraakParser.PERCENTAGE_LITERAL);
                        }
                        break;
                    case 45:
                        {
                            localctx = new StringLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1876;
                            this.match(RegelSpraakParser.STRING_LITERAL);
                        }
                        break;
                    case 46:
                        {
                            localctx = new EnumLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1877;
                            this.match(RegelSpraakParser.ENUM_LITERAL);
                        }
                        break;
                    case 47:
                        {
                            localctx = new DatumLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1878;
                            this.datumLiteral();
                        }
                        break;
                    case 48:
                        {
                            localctx = new BooleanTrueLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1879;
                            this.match(RegelSpraakParser.WAAR);
                        }
                        break;
                    case 49:
                        {
                            localctx = new BooleanFalseLiteralExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1880;
                            this.match(RegelSpraakParser.ONWAAR);
                        }
                        break;
                    case 50:
                        {
                            localctx = new PronounExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1881;
                            this.match(RegelSpraakParser.HIJ);
                        }
                        break;
                    case 51:
                        {
                            localctx = new ParenExprContext(this, localctx);
                            this._ctx = localctx;
                            _prevctx = localctx;
                            this.state = 1882;
                            this.match(RegelSpraakParser.LPAREN);
                            this.state = 1883;
                            this.expressie();
                            this.state = 1884;
                            this.match(RegelSpraakParser.RPAREN);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1910;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
                while (_alt !== 2 && _alt !== antlr4_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 1908;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 218, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new SimpleConcatenatieExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
                                        this.state = 1888;
                                        if (!(this.precpred(this._ctx, 38))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
                                        }
                                        this.state = 1891;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        do {
                                            {
                                                {
                                                    this.state = 1889;
                                                    this.match(RegelSpraakParser.COMMA);
                                                    this.state = 1890;
                                                    this.primaryExpression(0);
                                                }
                                            }
                                            this.state = 1893;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        } while (_la === 278);
                                        this.state = 1895;
                                        _la = this._input.LA(1);
                                        if (!(_la === 216 || _la === 229)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 1896;
                                        this.primaryExpression(39);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
                                        this.state = 1898;
                                        if (!(this.precpred(this._ctx, 42))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 42)");
                                        }
                                        this.state = 1899;
                                        this.afronding();
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new BegrenzingAfrondingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
                                        this.state = 1900;
                                        if (!(this.precpred(this._ctx, 41))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
                                        }
                                        this.state = 1901;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1902;
                                        this.begrenzing();
                                        this.state = 1903;
                                        this.afronding();
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new BegrenzingExprContext(this, new PrimaryExpressionContext(this, _parentctx, _parentState));
                                        this.pushNewRecursionContext(localctx, _startState, RegelSpraakParser.RULE_primaryExpression);
                                        this.state = 1905;
                                        if (!(this.precpred(this._ctx, 40))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
                                        }
                                        this.state = 1906;
                                        this.match(RegelSpraakParser.COMMA);
                                        this.state = 1907;
                                        this.begrenzing();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1912;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    // @RuleVersion(0)
    afronding() {
        let localctx = new AfrondingContext(this, this._ctx, this.state);
        this.enterRule(localctx, 282, RegelSpraakParser.RULE_afronding);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1913;
                _la = this._input.LA(1);
                if (!(((((_la - 138)) & ~0x1F) === 0 && ((1 << (_la - 138)) & 131267) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1914;
                this.match(RegelSpraakParser.AFGEROND_OP);
                this.state = 1915;
                this.match(RegelSpraakParser.NUMBER);
                this.state = 1916;
                this.match(RegelSpraakParser.DECIMALEN);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    begrenzing() {
        let localctx = new BegrenzingContext(this, this._ctx, this.state);
        this.enterRule(localctx, 284, RegelSpraakParser.RULE_begrenzing);
        try {
            this.state = 1924;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 220, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1918;
                        this.begrenzingMinimum();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1919;
                        this.begrenzingMaximum();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1920;
                        this.begrenzingMinimum();
                        this.state = 1921;
                        this.match(RegelSpraakParser.EN);
                        this.state = 1922;
                        this.begrenzingMaximum();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    begrenzingMinimum() {
        let localctx = new BegrenzingMinimumContext(this, this._ctx, this.state);
        this.enterRule(localctx, 286, RegelSpraakParser.RULE_begrenzingMinimum);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1926;
                this.match(RegelSpraakParser.MET_EEN_MINIMUM_VAN);
                this.state = 1927;
                this.expressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    begrenzingMaximum() {
        let localctx = new BegrenzingMaximumContext(this, this._ctx, this.state);
        this.enterRule(localctx, 288, RegelSpraakParser.RULE_begrenzingMaximum);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1929;
                this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
                this.state = 1930;
                this.expressie();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    conditieBijExpressie() {
        let localctx = new ConditieBijExpressieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 290, RegelSpraakParser.RULE_conditieBijExpressie);
        try {
            this.state = 1935;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 4:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1932;
                        this.match(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT);
                        this.state = 1933;
                        localctx._condition = this.expressie();
                    }
                    break;
                case 146:
                case 148:
                case 150:
                case 244:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1934;
                        this.periodevergelijkingEnkelvoudig();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    periodevergelijkingElementair() {
        let localctx = new PeriodevergelijkingElementairContext(this, this._ctx, this.state);
        this.enterRule(localctx, 292, RegelSpraakParser.RULE_periodevergelijkingElementair);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1937;
                this.match(RegelSpraakParser.HET_IS_DE_PERIODE);
                this.state = 1938;
                this.periodevergelijkingEnkelvoudig();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    periodevergelijkingEnkelvoudig() {
        let localctx = new PeriodevergelijkingEnkelvoudigContext(this, this._ctx, this.state);
        this.enterRule(localctx, 294, RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig);
        try {
            this.state = 1956;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 222, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1940;
                        this.match(RegelSpraakParser.VANAF);
                        this.state = 1941;
                        this.datumExpressie();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1942;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1943;
                        this.datumExpressie();
                        this.state = 1944;
                        this.match(RegelSpraakParser.TOT);
                        this.state = 1945;
                        this.datumExpressie();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1947;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1948;
                        this.datumExpressie();
                        this.state = 1949;
                        this.match(RegelSpraakParser.TOT_EN_MET);
                        this.state = 1950;
                        this.datumExpressie();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1952;
                        this.match(RegelSpraakParser.TOT);
                        this.state = 1953;
                        this.datumExpressie();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1954;
                        this.match(RegelSpraakParser.TOT_EN_MET);
                        this.state = 1955;
                        this.datumExpressie();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    periodeDefinitie() {
        let localctx = new PeriodeDefinitieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 296, RegelSpraakParser.RULE_periodeDefinitie);
        try {
            this.state = 1974;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 223, this._ctx)) {
                case 1:
                    localctx = new VanafPeriodeContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1958;
                        this.match(RegelSpraakParser.VANAF);
                        this.state = 1959;
                        this.dateExpression();
                    }
                    break;
                case 2:
                    localctx = new TotPeriodeContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1960;
                        this.match(RegelSpraakParser.TOT);
                        this.state = 1961;
                        this.dateExpression();
                    }
                    break;
                case 3:
                    localctx = new TotEnMetPeriodeContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1962;
                        this.match(RegelSpraakParser.TOT_EN_MET);
                        this.state = 1963;
                        this.dateExpression();
                    }
                    break;
                case 4:
                    localctx = new VanTotPeriodeContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1964;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1965;
                        this.dateExpression();
                        this.state = 1966;
                        this.match(RegelSpraakParser.TOT);
                        this.state = 1967;
                        this.dateExpression();
                    }
                    break;
                case 5:
                    localctx = new VanTotEnMetPeriodeContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1969;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 1970;
                        this.dateExpression();
                        this.state = 1971;
                        this.match(RegelSpraakParser.TOT_EN_MET);
                        this.state = 1972;
                        this.dateExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dateExpression() {
        let localctx = new DateExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 298, RegelSpraakParser.RULE_dateExpression);
        try {
            this.state = 1980;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 270:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1976;
                        this.datumLiteral();
                    }
                    break;
                case 235:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1977;
                        this.match(RegelSpraakParser.REKENDATUM);
                    }
                    break;
                case 236:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1978;
                        this.match(RegelSpraakParser.REKENJAAR);
                    }
                    break;
                case 45:
                case 96:
                case 110:
                case 119:
                case 124:
                case 132:
                case 140:
                case 161:
                case 190:
                case 201:
                case 202:
                case 205:
                case 206:
                case 209:
                case 210:
                case 212:
                case 215:
                case 217:
                case 221:
                case 223:
                case 224:
                case 232:
                case 234:
                case 253:
                case 267:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1979;
                        this.attribuutReferentie();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    getalAggregatieFunctie() {
        let localctx = new GetalAggregatieFunctieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 300, RegelSpraakParser.RULE_getalAggregatieFunctie);
        try {
            this.state = 1988;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 217:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1982;
                        this.match(RegelSpraakParser.HET);
                        this.state = 1983;
                        this.match(RegelSpraakParser.AANTAL);
                    }
                    break;
                case 190:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1984;
                        this.match(RegelSpraakParser.AANTAL);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1985;
                        this.match(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1986;
                        this.match(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN);
                    }
                    break;
                case 195:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1987;
                        this.match(RegelSpraakParser.SOM_VAN);
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    datumAggregatieFunctie() {
        let localctx = new DatumAggregatieFunctieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 302, RegelSpraakParser.RULE_datumAggregatieFunctie);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1990;
                _la = this._input.LA(1);
                if (!(_la === 191 || _la === 193)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dimensieSelectie() {
        let localctx = new DimensieSelectieContext(this, this._ctx, this.state);
        this.enterRule(localctx, 304, RegelSpraakParser.RULE_dimensieSelectie);
        try {
            this.state = 2002;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 233:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1992;
                        this.match(RegelSpraakParser.OVER);
                        this.state = 1996;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 226, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1993;
                                    this.aggregerenOverAlleDimensies();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 1994;
                                    this.aggregerenOverVerzameling();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 1995;
                                    this.aggregerenOverBereik();
                                }
                                break;
                        }
                        this.state = 1998;
                        this.match(RegelSpraakParser.DOT);
                    }
                    break;
                case 244:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2000;
                        this.match(RegelSpraakParser.VAN);
                        this.state = 2001;
                        this.aggregerenOverAlleDimensies();
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    aggregerenOverAlleDimensies() {
        let localctx = new AggregerenOverAlleDimensiesContext(this, this._ctx, this.state);
        this.enterRule(localctx, 306, RegelSpraakParser.RULE_aggregerenOverAlleDimensies);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2004;
                this.match(RegelSpraakParser.ALLE);
                this.state = 2005;
                this.naamwoord();
                this.state = 2008;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 228, this._ctx)) {
                    case 1:
                        {
                            this.state = 2006;
                            _la = this._input.LA(1);
                            if (!(_la === 211 || _la === 214)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 2007;
                            this.predicaat();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    aggregerenOverVerzameling() {
        let localctx = new AggregerenOverVerzamelingContext(this, this._ctx, this.state);
        this.enterRule(localctx, 308, RegelSpraakParser.RULE_aggregerenOverVerzameling);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2010;
                this.match(RegelSpraakParser.DE);
                this.state = 2011;
                this.naamwoord();
                this.state = 2012;
                this.match(RegelSpraakParser.VANAF);
                this.state = 2013;
                this.naamwoord();
                this.state = 2014;
                this.match(RegelSpraakParser.TM);
                this.state = 2015;
                this.naamwoord();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    aggregerenOverBereik() {
        let localctx = new AggregerenOverBereikContext(this, this._ctx, this.state);
        this.enterRule(localctx, 310, RegelSpraakParser.RULE_aggregerenOverBereik);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2017;
                this.match(RegelSpraakParser.DE);
                this.state = 2018;
                this.naamwoord();
                this.state = 2019;
                this.match(RegelSpraakParser.IN);
                this.state = 2020;
                this.match(RegelSpraakParser.LBRACE);
                this.state = 2021;
                this.naamwoord();
                this.state = 2026;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 278) {
                    {
                        {
                            this.state = 2022;
                            this.match(RegelSpraakParser.COMMA);
                            this.state = 2023;
                            this.naamwoord();
                        }
                    }
                    this.state = 2028;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2029;
                this.match(RegelSpraakParser.EN);
                this.state = 2030;
                this.naamwoord();
                this.state = 2031;
                this.match(RegelSpraakParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    unaryCondition() {
        let localctx = new UnaryConditionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 312, RegelSpraakParser.RULE_unaryCondition);
        let _la;
        try {
            this.state = 2059;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 230, this._ctx)) {
                case 1:
                    localctx = new UnaryCheckConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2033;
                        localctx._expr = this.primaryExpression(0);
                        this.state = 2034;
                        localctx._op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 61455) !== 0))) {
                            localctx._op = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case 2:
                    localctx = new UnaryNumeriekExactConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2036;
                        localctx._expr = this.primaryExpression(0);
                        this.state = 2037;
                        localctx._op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 15) !== 0))) {
                            localctx._op = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2038;
                        this.match(RegelSpraakParser.NUMBER);
                        this.state = 2039;
                        this.match(RegelSpraakParser.CIJFERS);
                    }
                    break;
                case 3:
                    localctx = new UnaryDagsoortConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2041;
                        localctx._expr = this.primaryExpression(0);
                        this.state = 2042;
                        localctx._op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 15) !== 0))) {
                            localctx._op = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2043;
                        localctx._dagsoort = this.identifier();
                    }
                    break;
                case 4:
                    localctx = new UnaryKenmerkConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 2045;
                        localctx._expr = this.primaryExpression(0);
                        this.state = 2046;
                        localctx._op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 85) !== 0))) {
                            localctx._op = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2047;
                        localctx._kenmerk = this.identifier();
                    }
                    break;
                case 5:
                    localctx = new UnaryRolConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 2049;
                        localctx._expr = this.primaryExpression(0);
                        this.state = 2050;
                        localctx._op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 85) !== 0))) {
                            localctx._op = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2051;
                        localctx._rol = this.identifier();
                    }
                    break;
                case 6:
                    localctx = new UnaryUniekConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 2053;
                        localctx._ref = this.onderwerpReferentie();
                        this.state = 2054;
                        this.match(RegelSpraakParser.MOETEN_UNIEK_ZIJN);
                    }
                    break;
                case 7:
                    localctx = new UnaryInconsistentDataConditionContext(this, localctx);
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 2056;
                        localctx._expr = this.primaryExpression(0);
                        this.state = 2057;
                        this.match(RegelSpraakParser.IS_INCONSISTENT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    regelStatusCondition() {
        let localctx = new RegelStatusConditionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 314, RegelSpraakParser.RULE_regelStatusCondition);
        try {
            this.state = 2069;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 231, this._ctx)) {
                case 1:
                    localctx = new RegelStatusGevuurdCheckContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2061;
                        this.match(RegelSpraakParser.REGELVERSIE);
                        this.state = 2062;
                        localctx._name = this.naamwoord();
                        this.state = 2063;
                        this.match(RegelSpraakParser.IS_GEVUURD);
                    }
                    break;
                case 2:
                    localctx = new RegelStatusInconsistentCheckContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2065;
                        this.match(RegelSpraakParser.REGELVERSIE);
                        this.state = 2066;
                        localctx._name = this.naamwoord();
                        this.state = 2067;
                        this.match(RegelSpraakParser.IS_INCONSISTENT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    subordinateClauseExpression() {
        let localctx = new SubordinateClauseExpressionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 316, RegelSpraakParser.RULE_subordinateClauseExpression);
        try {
            this.state = 2083;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 232, this._ctx)) {
                case 1:
                    localctx = new SubordinateHasExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2071;
                        localctx._subject = this.onderwerpReferentie();
                        this.state = 2072;
                        localctx._object = this.naamwoordWithNumbers();
                        this.state = 2073;
                        localctx._verb = this.match(RegelSpraakParser.HEEFT);
                    }
                    break;
                case 2:
                    localctx = new SubordinateIsWithExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2075;
                        localctx._subject = this.onderwerpReferentie();
                        this.state = 2076;
                        localctx._prepPhrase = this.naamwoordWithNumbers();
                        this.state = 2077;
                        localctx._verb = this.match(RegelSpraakParser.IS);
                    }
                    break;
                case 3:
                    localctx = new SubordinateIsKenmerkExprContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2079;
                        localctx._subject = this.onderwerpReferentie();
                        this.state = 2080;
                        localctx._verb = this.match(RegelSpraakParser.IS);
                        this.state = 2081;
                        localctx._kenmerk = this.naamwoordWithNumbers();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    dagsoortDefinition() {
        let localctx = new DagsoortDefinitionContext(this, this._ctx, this.state);
        this.enterRule(localctx, 318, RegelSpraakParser.RULE_dagsoortDefinition);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2085;
                this.match(RegelSpraakParser.DAGSOORT);
                this.state = 2086;
                this.naamwoord();
                this.state = 2094;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 178) {
                    {
                        this.state = 2087;
                        this.match(RegelSpraakParser.MV_START);
                        this.state = 2089;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 2088;
                                    localctx._IDENTIFIER = this.match(RegelSpraakParser.IDENTIFIER);
                                    localctx._plural.push(localctx._IDENTIFIER);
                                }
                            }
                            this.state = 2091;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (_la === 267);
                        this.state = 2093;
                        this.match(RegelSpraakParser.RPAREN);
                    }
                }
                this.state = 2097;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 281) {
                    {
                        this.state = 2096;
                        this.match(RegelSpraakParser.SEMICOLON);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    tekstreeksExpr() {
        let localctx = new TekstreeksExprContext(this, this._ctx, this.state);
        this.enterRule(localctx, 320, RegelSpraakParser.RULE_tekstreeksExpr);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2099;
                this.match(RegelSpraakParser.STRING_LITERAL);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingResultaat() {
        let localctx = new VerdelingResultaatContext(this, this._ctx, this.state);
        this.enterRule(localctx, 322, RegelSpraakParser.RULE_verdelingResultaat);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2101;
                localctx._sourceAmount = this.expressie();
                this.state = 2102;
                this.match(RegelSpraakParser.WORDT_VERDEELD_OVER);
                this.state = 2103;
                localctx._targetCollection = this.expressie();
                this.state = 2104;
                this.match(RegelSpraakParser.COMMA);
                this.state = 2105;
                this.match(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD);
                this.state = 2108;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case 21:
                    case 33:
                    case 34:
                    case 35:
                    case 123:
                    case 198:
                        {
                            this.state = 2106;
                            this.verdelingMethodeSimple();
                        }
                        break;
                    case 280:
                        {
                            this.state = 2107;
                            this.verdelingMethodeMultiLine();
                        }
                        break;
                    default:
                        throw new antlr4_1.NoViableAltException(this);
                }
                this.state = 2111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 19) {
                    {
                        this.state = 2110;
                        this.verdelingRest();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingMethodeSimple() {
        let localctx = new VerdelingMethodeSimpleContext(this, this._ctx, this.state);
        this.enterRule(localctx, 324, RegelSpraakParser.RULE_verdelingMethodeSimple);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2113;
                this.verdelingMethode();
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingMethodeMultiLine() {
        let localctx = new VerdelingMethodeMultiLineContext(this, this._ctx, this.state);
        this.enterRule(localctx, 326, RegelSpraakParser.RULE_verdelingMethodeMultiLine);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2115;
                this.match(RegelSpraakParser.COLON);
                this.state = 2116;
                this.verdelingMethodeBulletList();
                this.state = 2118;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 238, this._ctx)) {
                    case 1:
                        {
                            this.state = 2117;
                            this.match(RegelSpraakParser.DOT);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingMethodeBulletList() {
        let localctx = new VerdelingMethodeBulletListContext(this, this._ctx, this.state);
        this.enterRule(localctx, 328, RegelSpraakParser.RULE_verdelingMethodeBulletList);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2120;
                this.verdelingMethodeBullet();
                this.state = 2124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 292) {
                    {
                        {
                            this.state = 2121;
                            this.verdelingMethodeBullet();
                        }
                    }
                    this.state = 2126;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingMethodeBullet() {
        let localctx = new VerdelingMethodeBulletContext(this, this._ctx, this.state);
        this.enterRule(localctx, 330, RegelSpraakParser.RULE_verdelingMethodeBullet);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2127;
                this.match(RegelSpraakParser.MINUS);
                this.state = 2128;
                this.verdelingMethode();
                this.state = 2130;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 240, this._ctx)) {
                    case 1:
                        {
                            this.state = 2129;
                            _la = this._input.LA(1);
                            if (!(_la === 278 || _la === 279)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingMethode() {
        let localctx = new VerdelingMethodeContext(this, this._ctx, this.state);
        this.enterRule(localctx, 332, RegelSpraakParser.RULE_verdelingMethode);
        let _la;
        try {
            this.state = 2146;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case 198:
                    localctx = new VerdelingGelijkeDelenContext(this, localctx);
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2132;
                        this.match(RegelSpraakParser.IN_GELIJKE_DELEN);
                    }
                    break;
                case 35:
                    localctx = new VerdelingNaarRatoContext(this, localctx);
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2133;
                        this.match(RegelSpraakParser.NAAR_RATO_VAN);
                        this.state = 2134;
                        localctx._ratioExpression = this.expressie();
                    }
                    break;
                case 34:
                    localctx = new VerdelingOpVolgordeContext(this, localctx);
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2135;
                        this.match(RegelSpraakParser.OP_VOLGORDE_VAN);
                        this.state = 2136;
                        localctx._orderDirection = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === 197 || _la === 200)) {
                            localctx._orderDirection = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 2137;
                        localctx._orderExpression = this.expressie();
                    }
                    break;
                case 33:
                    localctx = new VerdelingTieBreakContext(this, localctx);
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 2138;
                        this.match(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM);
                        this.state = 2139;
                        localctx._tieBreakMethod = this.verdelingMethode();
                    }
                    break;
                case 21:
                    localctx = new VerdelingMaximumContext(this, localctx);
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 2140;
                        this.match(RegelSpraakParser.MET_EEN_MAXIMUM_VAN);
                        this.state = 2141;
                        localctx._maxExpression = this.expressie();
                    }
                    break;
                case 123:
                    localctx = new VerdelingAfrondingContext(this, localctx);
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 2142;
                        this.match(RegelSpraakParser.AFGEROND_OP);
                        this.state = 2143;
                        localctx._decimals = this.match(RegelSpraakParser.NUMBER);
                        this.state = 2144;
                        this.match(RegelSpraakParser.DECIMALEN);
                        this.state = 2145;
                        localctx._roundDirection = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === 138 || _la === 139)) {
                            localctx._roundDirection = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                default:
                    throw new antlr4_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    // @RuleVersion(0)
    verdelingRest() {
        let localctx = new VerdelingRestContext(this, this._ctx, this.state);
        this.enterRule(localctx, 334, RegelSpraakParser.RULE_verdelingRest);
        let _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2148;
                this.match(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT);
                this.state = 2149;
                localctx._remainderTarget = this.expressie();
                this.state = 2151;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 199) {
                    {
                        this.state = 2150;
                        this.match(RegelSpraakParser.OVER_VERDELING);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr4_1.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    sempred(localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 140:
                return this.primaryExpression_sempred(localctx, predIndex);
        }
        return true;
    }
    primaryExpression_sempred(localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 38);
            case 1:
                return this.precpred(this._ctx, 42);
            case 2:
                return this.precpred(this._ctx, 41);
            case 3:
                return this.precpred(this._ctx, 40);
        }
        return true;
    }
    static _serializedATN = [4, 1, 294, 2154, 2, 0, 7, 0,
        2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9,
        2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2,
        17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24,
        7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7,
        31, 2, 32, 7, 32, 2, 33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38,
        2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
        46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53,
        7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7,
        60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7, 65, 2, 66, 7, 66, 2, 67, 7, 67,
        2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2, 72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2,
        75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7, 78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82,
        7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2, 85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7,
        89, 2, 90, 7, 90, 2, 91, 7, 91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96,
        2, 97, 7, 97, 2, 98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103,
        7, 103, 2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
        7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114, 2, 115,
        7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120, 7, 120, 2, 121,
        7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125, 2, 126, 7, 126, 2, 127,
        7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131, 7, 131, 2, 132, 7, 132, 2, 133,
        7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136, 2, 137, 7, 137, 2, 138, 7, 138, 2, 139,
        7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142, 7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145,
        7, 145, 2, 146, 7, 146, 2, 147, 7, 147, 2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151,
        7, 151, 2, 152, 7, 152, 2, 153, 7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157,
        7, 157, 2, 158, 7, 158, 2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163,
        7, 163, 2, 164, 7, 164, 2, 165, 7, 165, 2, 166, 7, 166, 2, 167, 7, 167, 1, 0, 1, 0, 1, 0, 1, 0, 1,
        0, 1, 0, 5, 0, 343, 8, 0, 10, 0, 12, 0, 346, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1,
        356, 8, 1, 1, 2, 1, 2, 1, 2, 3, 2, 361, 8, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 4, 3, 368, 8, 3, 11, 3, 12,
        3, 369, 1, 4, 1, 4, 3, 4, 374, 8, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 381, 8, 4, 10, 4, 12, 4, 384,
        9, 4, 1, 4, 3, 4, 387, 8, 4, 1, 5, 3, 5, 390, 8, 5, 1, 5, 4, 5, 393, 8, 5, 11, 5, 12, 5, 394, 1, 5, 3,
        5, 398, 8, 5, 4, 5, 400, 8, 5, 11, 5, 12, 5, 401, 1, 5, 5, 5, 405, 8, 5, 10, 5, 12, 5, 408, 9, 5, 1,
        6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 418, 8, 6, 10, 6, 12, 6, 421, 9, 6, 1, 6, 3, 6, 424,
        8, 6, 1, 7, 1, 7, 3, 7, 428, 8, 7, 1, 8, 4, 8, 431, 8, 8, 11, 8, 12, 8, 432, 1, 9, 1, 9, 1, 10, 1, 10,
        1, 11, 1, 11, 1, 12, 3, 12, 442, 8, 12, 1, 12, 4, 12, 445, 8, 12, 11, 12, 12, 12, 446, 1, 12, 4,
        12, 450, 8, 12, 11, 12, 12, 12, 451, 1, 12, 1, 12, 4, 12, 456, 8, 12, 11, 12, 12, 12, 457, 1, 12,
        1, 12, 4, 12, 462, 8, 12, 11, 12, 12, 12, 463, 1, 12, 1, 12, 4, 12, 468, 8, 12, 11, 12, 12, 12,
        469, 1, 12, 4, 12, 473, 8, 12, 11, 12, 12, 12, 474, 1, 12, 1, 12, 4, 12, 479, 8, 12, 11, 12, 12,
        12, 480, 1, 12, 1, 12, 4, 12, 485, 8, 12, 11, 12, 12, 12, 486, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12,
        4, 12, 494, 8, 12, 11, 12, 12, 12, 495, 3, 12, 498, 8, 12, 1, 13, 3, 13, 501, 8, 13, 1, 13, 4, 13,
        504, 8, 13, 11, 13, 12, 13, 505, 1, 13, 4, 13, 509, 8, 13, 11, 13, 12, 13, 510, 1, 13, 1, 13, 4,
        13, 515, 8, 13, 11, 13, 12, 13, 516, 1, 13, 1, 13, 4, 13, 521, 8, 13, 11, 13, 12, 13, 522, 1, 13,
        1, 13, 4, 13, 527, 8, 13, 11, 13, 12, 13, 528, 1, 13, 4, 13, 532, 8, 13, 11, 13, 12, 13, 533, 1,
        13, 1, 13, 4, 13, 538, 8, 13, 11, 13, 12, 13, 539, 1, 13, 1, 13, 4, 13, 544, 8, 13, 11, 13, 12,
        13, 545, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 4, 13, 553, 8, 13, 11, 13, 12, 13, 554, 3, 13, 557,
        8, 13, 1, 14, 1, 14, 3, 14, 561, 8, 14, 1, 15, 3, 15, 564, 8, 15, 1, 15, 4, 15, 567, 8, 15, 11, 15,
        12, 15, 568, 1, 15, 4, 15, 572, 8, 15, 11, 15, 12, 15, 573, 1, 15, 1, 15, 4, 15, 578, 8, 15, 11,
        15, 12, 15, 579, 1, 15, 1, 15, 4, 15, 584, 8, 15, 11, 15, 12, 15, 585, 1, 15, 1, 15, 4, 15, 590,
        8, 15, 11, 15, 12, 15, 591, 1, 15, 4, 15, 595, 8, 15, 11, 15, 12, 15, 596, 1, 15, 1, 15, 4, 15,
        601, 8, 15, 11, 15, 12, 15, 602, 1, 15, 1, 15, 4, 15, 607, 8, 15, 11, 15, 12, 15, 608, 3, 15, 611,
        8, 15, 1, 16, 1, 16, 1, 16, 1, 16, 5, 16, 617, 8, 16, 10, 16, 12, 16, 620, 9, 16, 1, 17, 1, 17, 1,
        17, 1, 17, 5, 17, 626, 8, 17, 10, 17, 12, 17, 629, 9, 17, 1, 18, 1, 18, 1, 18, 1, 18, 5, 18, 635,
        8, 18, 10, 18, 12, 18, 638, 9, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23,
        1, 23, 1, 23, 1, 23, 4, 23, 652, 8, 23, 11, 23, 12, 23, 653, 1, 23, 3, 23, 657, 8, 23, 1, 23, 3,
        23, 660, 8, 23, 1, 23, 5, 23, 663, 8, 23, 10, 23, 12, 23, 666, 9, 23, 1, 24, 1, 24, 3, 24, 670,
        8, 24, 1, 24, 1, 24, 1, 25, 3, 25, 675, 8, 25, 1, 25, 1, 25, 3, 25, 679, 8, 25, 1, 25, 1, 25, 3, 25,
        683, 8, 25, 1, 25, 3, 25, 686, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 692, 8, 26, 1, 26, 1, 26,
        3, 26, 696, 8, 26, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26, 702, 8, 26, 10, 26, 12, 26, 705, 9, 26, 3,
        26, 707, 8, 26, 1, 26, 3, 26, 710, 8, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 718, 8,
        27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 725, 8, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29,
        732, 8, 29, 1, 30, 1, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1, 31, 3, 31, 741, 8, 31, 1, 32, 1, 32, 1, 33,
        1, 33, 1, 34, 3, 34, 748, 8, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 3, 34, 756, 8, 34, 1, 35,
        1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 764, 8, 35, 1, 35, 3, 35, 767, 8, 35, 1, 36, 1, 36, 1, 36,
        1, 36, 1, 36, 3, 36, 774, 8, 36, 1, 37, 1, 37, 4, 37, 778, 8, 37, 11, 37, 12, 37, 779, 1, 38, 1,
        38, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 5, 40, 789, 8, 40, 10, 40, 12, 40, 792, 9, 40, 1, 41, 1, 41,
        1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 800, 8, 41, 1, 41, 1, 41, 3, 41, 804, 8, 41, 1, 41, 1, 41, 3, 41,
        808, 8, 41, 1, 41, 1, 41, 3, 41, 812, 8, 41, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43, 3, 43, 819, 8, 43,
        1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 825, 8, 43, 1, 44, 1, 44, 1, 44, 3, 44, 830, 8, 44, 1, 45, 1, 45,
        1, 45, 3, 45, 835, 8, 45, 1, 45, 1, 45, 1, 45, 1, 45, 4, 45, 841, 8, 45, 11, 45, 12, 45, 842, 1,
        46, 1, 46, 1, 46, 1, 46, 3, 46, 849, 8, 46, 1, 46, 3, 46, 852, 8, 46, 1, 47, 1, 47, 1, 47, 1, 47,
        1, 48, 1, 48, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 867, 8, 50, 1, 50, 1, 50, 3,
        50, 871, 8, 50, 1, 50, 1, 50, 3, 50, 875, 8, 50, 1, 50, 3, 50, 878, 8, 50, 1, 51, 3, 51, 881, 8,
        51, 1, 51, 1, 51, 1, 51, 1, 51, 5, 51, 887, 8, 51, 10, 51, 12, 51, 890, 9, 51, 1, 52, 1, 52, 5, 52,
        894, 8, 52, 10, 52, 12, 52, 897, 9, 52, 1, 53, 3, 53, 900, 8, 53, 1, 53, 1, 53, 1, 53, 1, 53, 5,
        53, 906, 8, 53, 10, 53, 12, 53, 909, 9, 53, 1, 53, 3, 53, 912, 8, 53, 1, 54, 1, 54, 1, 54, 1, 54,
        4, 54, 918, 8, 54, 11, 54, 12, 54, 919, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 1, 54, 3, 54, 929,
        8, 54, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 1, 55, 3, 55, 937, 8, 55, 1, 55, 3, 55, 940, 8, 55, 1, 56,
        4, 56, 943, 8, 56, 11, 56, 12, 56, 944, 1, 57, 1, 57, 4, 57, 949, 8, 57, 11, 57, 12, 57, 950, 1,
        58, 4, 58, 954, 8, 58, 11, 58, 12, 58, 955, 1, 59, 1, 59, 1, 60, 1, 60, 1, 60, 3, 60, 963, 8, 60,
        1, 60, 1, 60, 1, 60, 1, 60, 3, 60, 969, 8, 60, 1, 60, 3, 60, 972, 8, 60, 1, 60, 3, 60, 975, 8, 60,
        1, 61, 1, 61, 1, 61, 3, 61, 980, 8, 61, 1, 61, 1, 61, 4, 61, 984, 8, 61, 11, 61, 12, 61, 985, 1,
        62, 1, 62, 5, 62, 990, 8, 62, 10, 62, 12, 62, 993, 9, 62, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63,
        1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 3, 63, 1009, 8, 63, 1, 64, 1, 64, 1, 64, 1,
        65, 1, 65, 1, 65, 1, 65, 1, 65, 3, 65, 1019, 8, 65, 3, 65, 1021, 8, 65, 1, 66, 1, 66, 1, 66, 1, 66,
        1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 1035, 8, 66, 1, 66, 3, 66, 1038, 8,
        66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 1050, 8, 66, 1, 66,
        1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 1063, 8, 66, 1, 67, 1,
        67, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 68, 1, 69, 4, 69,
        1080, 8, 69, 11, 69, 12, 69, 1081, 1, 70, 4, 70, 1085, 8, 70, 11, 70, 12, 70, 1086, 1, 71, 1,
        71, 1, 71, 1, 71, 1, 71, 3, 71, 1094, 8, 71, 1, 72, 1, 72, 3, 72, 1098, 8, 72, 1, 73, 1, 73, 1, 74,
        1, 74, 1, 74, 1, 74, 3, 74, 1106, 8, 74, 1, 74, 3, 74, 1109, 8, 74, 1, 74, 1, 74, 1, 74, 1, 74, 1,
        74, 3, 74, 1116, 8, 74, 1, 74, 3, 74, 1119, 8, 74, 3, 74, 1121, 8, 74, 1, 75, 1, 75, 1, 75, 1, 75,
        1, 75, 5, 75, 1128, 8, 75, 10, 75, 12, 75, 1131, 9, 75, 1, 76, 1, 76, 1, 76, 1, 76, 1, 76, 1, 77,
        1, 77, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 3, 78, 1146, 8, 78, 1, 78, 3, 78, 1149, 8, 78, 3,
        78, 1151, 8, 78, 1, 79, 1, 79, 1, 79, 3, 79, 1156, 8, 79, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80,
        1, 81, 3, 81, 1165, 8, 81, 1, 81, 1, 81, 1, 81, 1, 82, 1, 82, 1, 82, 3, 82, 1173, 8, 82, 1, 83, 1,
        83, 1, 83, 1, 83, 1, 83, 1, 83, 4, 83, 1181, 8, 83, 11, 83, 12, 83, 1182, 1, 83, 1, 83, 1, 83, 1,
        83, 3, 83, 1189, 8, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 4, 83, 1197, 8, 83, 11, 83, 12,
        83, 1198, 1, 83, 1, 83, 1, 83, 1, 83, 3, 83, 1205, 8, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 1, 83,
        4, 83, 1213, 8, 83, 11, 83, 12, 83, 1214, 3, 83, 1217, 8, 83, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84,
        1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 1, 84, 3, 84, 1234, 8, 84, 1, 85, 1,
        85, 1, 85, 3, 85, 1239, 8, 85, 1, 86, 1, 86, 1, 87, 1, 87, 1, 87, 3, 87, 1246, 8, 87, 1, 88, 4, 88,
        1249, 8, 88, 11, 88, 12, 88, 1250, 1, 89, 1, 89, 1, 90, 1, 90, 1, 90, 3, 90, 1258, 8, 90, 1, 90,
        1, 90, 1, 90, 1, 90, 1, 90, 1, 90, 4, 90, 1266, 8, 90, 11, 90, 12, 90, 1267, 1, 91, 1, 91, 1, 91,
        3, 91, 1273, 8, 91, 1, 92, 1, 92, 1, 92, 3, 92, 1278, 8, 92, 1, 93, 1, 93, 1, 93, 3, 93, 1283, 8,
        93, 1, 94, 1, 94, 1, 94, 1, 94, 5, 94, 1289, 8, 94, 10, 94, 12, 94, 1292, 9, 94, 1, 95, 1, 95, 1,
        95, 1, 95, 5, 95, 1298, 8, 95, 10, 95, 12, 95, 1301, 9, 95, 1, 96, 1, 96, 4, 96, 1305, 8, 96, 11,
        96, 12, 96, 1306, 1, 96, 3, 96, 1310, 8, 96, 1, 97, 1, 97, 4, 97, 1314, 8, 97, 11, 97, 12, 97,
        1315, 1, 97, 3, 97, 1319, 8, 97, 1, 98, 1, 98, 1, 98, 1, 98, 1, 99, 1, 99, 1, 100, 3, 100, 1328,
        8, 100, 1, 100, 1, 100, 1, 101, 3, 101, 1333, 8, 101, 1, 101, 3, 101, 1336, 8, 101, 1, 101, 4,
        101, 1339, 8, 101, 11, 101, 12, 101, 1340, 1, 102, 1, 102, 1, 102, 1, 103, 1, 103, 1, 103, 1,
        103, 1, 103, 3, 103, 1351, 8, 103, 3, 103, 1353, 8, 103, 1, 104, 1, 104, 3, 104, 1357, 8, 104,
        1, 105, 1, 105, 1, 105, 1, 105, 1, 105, 3, 105, 1364, 8, 105, 1, 106, 1, 106, 1, 107, 3, 107,
        1369, 8, 107, 1, 107, 1, 107, 3, 107, 1373, 8, 107, 1, 107, 1, 107, 1, 108, 1, 108, 1, 109, 3,
        109, 1380, 8, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 110, 1, 110, 1, 110, 1, 111, 1,
        111, 1, 111, 1, 112, 1, 112, 1, 112, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 4, 113, 1402,
        8, 113, 11, 113, 12, 113, 1403, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 3, 114, 1412,
        8, 114, 1, 115, 1, 115, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116,
        1, 116, 1, 116, 3, 116, 1427, 8, 116, 1, 117, 1, 117, 1, 117, 1, 117, 3, 117, 1433, 8, 117, 1,
        117, 1, 117, 1, 117, 1, 117, 1, 117, 4, 117, 1440, 8, 117, 11, 117, 12, 117, 1441, 1, 118, 1,
        118, 1, 119, 1, 119, 1, 120, 1, 120, 1, 121, 1, 121, 1, 122, 1, 122, 1, 123, 1, 123, 1, 123, 1,
        123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1,
        123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 1, 123, 3, 123, 1478, 8, 123, 1,
        124, 1, 124, 5, 124, 1482, 8, 124, 10, 124, 12, 124, 1485, 9, 124, 1, 124, 1, 124, 1, 125, 3,
        125, 1490, 8, 125, 1, 125, 1, 125, 1, 125, 1, 125, 1, 126, 1, 126, 1, 126, 3, 126, 1499, 8, 126,
        1, 126, 1, 126, 5, 126, 1503, 8, 126, 10, 126, 12, 126, 1506, 9, 126, 1, 127, 1, 127, 1, 127,
        1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 1, 127, 3, 127, 1521,
        8, 127, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128, 1, 128,
        1, 128, 1, 128, 3, 128, 1536, 8, 128, 1, 129, 1, 129, 1, 129, 3, 129, 1541, 8, 129, 1, 130, 1,
        130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1, 130, 1,
        130, 1, 130, 5, 130, 1558, 8, 130, 10, 130, 12, 130, 1561, 9, 130, 1, 130, 1, 130, 1, 130, 1,
        130, 1, 130, 1, 130, 1, 130, 3, 130, 1570, 8, 130, 1, 130, 1, 130, 3, 130, 1574, 8, 130, 1, 131,
        1, 131, 1, 131, 1, 131, 3, 131, 1580, 8, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1585, 8, 131, 1,
        132, 1, 132, 1, 133, 1, 133, 1, 134, 1, 134, 1, 134, 1, 134, 5, 134, 1595, 8, 134, 10, 134, 12,
        134, 1598, 9, 134, 1, 135, 1, 135, 1, 136, 1, 136, 1, 136, 1, 136, 5, 136, 1606, 8, 136, 10,
        136, 12, 136, 1609, 9, 136, 1, 137, 1, 137, 1, 138, 1, 138, 1, 138, 1, 138, 5, 138, 1617, 8,
        138, 10, 138, 12, 138, 1620, 9, 138, 1, 139, 1, 139, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1637, 8, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1645, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        5, 140, 1651, 8, 140, 10, 140, 12, 140, 1654, 9, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1668, 8, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1679, 8, 140, 1, 140, 3, 140,
        1682, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 5, 140,
        1693, 8, 140, 10, 140, 12, 140, 1696, 9, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 5, 140, 1712, 8, 140, 10, 140,
        12, 140, 1715, 9, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 5, 140, 1727, 8, 140, 10, 140, 12, 140, 1730, 9, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 5, 140, 1773, 8, 140, 10, 140, 12, 140, 1776, 9, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 5, 140, 1785, 8, 140, 10, 140, 12, 140, 1788, 9, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1796, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        3, 140, 1803, 8, 140, 1, 140, 1, 140, 3, 140, 1807, 8, 140, 1, 140, 3, 140, 1810, 8, 140, 1,
        140, 1, 140, 1, 140, 4, 140, 1815, 8, 140, 11, 140, 12, 140, 1816, 1, 140, 1, 140, 1, 140, 3,
        140, 1822, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1829, 8, 140, 1, 140, 4, 140,
        1832, 8, 140, 11, 140, 12, 140, 1833, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1841,
        8, 140, 1, 140, 1, 140, 3, 140, 1845, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140,
        1852, 8, 140, 1, 140, 1, 140, 3, 140, 1856, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3,
        140, 1863, 8, 140, 1, 140, 1, 140, 3, 140, 1867, 8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 3, 140, 1887, 8, 140, 1, 140, 1, 140, 1, 140, 4, 140, 1892, 8, 140, 11, 140, 12, 140,
        1893, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140,
        1, 140, 1, 140, 5, 140, 1909, 8, 140, 10, 140, 12, 140, 1912, 9, 140, 1, 141, 1, 141, 1, 141,
        1, 141, 1, 141, 1, 142, 1, 142, 1, 142, 1, 142, 1, 142, 1, 142, 3, 142, 1925, 8, 142, 1, 143,
        1, 143, 1, 143, 1, 144, 1, 144, 1, 144, 1, 145, 1, 145, 1, 145, 3, 145, 1936, 8, 145, 1, 146,
        1, 146, 1, 146, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147,
        1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 3, 147, 1957, 8, 147, 1, 148, 1, 148, 1, 148,
        1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148, 1, 148,
        1, 148, 3, 148, 1975, 8, 148, 1, 149, 1, 149, 1, 149, 1, 149, 3, 149, 1981, 8, 149, 1, 150, 1,
        150, 1, 150, 1, 150, 1, 150, 1, 150, 3, 150, 1989, 8, 150, 1, 151, 1, 151, 1, 152, 1, 152, 1,
        152, 1, 152, 3, 152, 1997, 8, 152, 1, 152, 1, 152, 1, 152, 1, 152, 3, 152, 2003, 8, 152, 1, 153,
        1, 153, 1, 153, 1, 153, 3, 153, 2009, 8, 153, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154, 1, 154,
        1, 154, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1, 155, 5, 155, 2025, 8, 155, 10, 155,
        12, 155, 2028, 9, 155, 1, 155, 1, 155, 1, 155, 1, 155, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156,
        1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156,
        1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 1, 156, 3, 156, 2060, 8, 156,
        1, 157, 1, 157, 1, 157, 1, 157, 1, 157, 1, 157, 1, 157, 1, 157, 3, 157, 2070, 8, 157, 1, 158,
        1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 1, 158, 3, 158,
        2084, 8, 158, 1, 159, 1, 159, 1, 159, 1, 159, 4, 159, 2090, 8, 159, 11, 159, 12, 159, 2091,
        1, 159, 3, 159, 2095, 8, 159, 1, 159, 3, 159, 2098, 8, 159, 1, 160, 1, 160, 1, 161, 1, 161, 1,
        161, 1, 161, 1, 161, 1, 161, 1, 161, 3, 161, 2109, 8, 161, 1, 161, 3, 161, 2112, 8, 161, 1, 162,
        1, 162, 1, 163, 1, 163, 1, 163, 3, 163, 2119, 8, 163, 1, 164, 1, 164, 5, 164, 2123, 8, 164, 10,
        164, 12, 164, 2126, 9, 164, 1, 165, 1, 165, 1, 165, 3, 165, 2131, 8, 165, 1, 166, 1, 166, 1,
        166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 3,
        166, 2147, 8, 166, 1, 167, 1, 167, 1, 167, 3, 167, 2152, 8, 167, 1, 167, 0, 1, 280, 168, 0, 2,
        4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52,
        54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
        102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136,
        138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172,
        174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208,
        210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244,
        246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280,
        282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314, 316,
        318, 320, 322, 324, 326, 328, 330, 332, 334, 0, 53, 1, 0, 293, 293, 16, 0, 96, 96, 110, 110,
        113, 113, 124, 124, 132, 132, 161, 161, 190, 190, 201, 202, 205, 206, 209, 210, 221, 221,
        223, 224, 232, 232, 234, 234, 253, 253, 267, 267, 15, 0, 96, 96, 110, 110, 124, 124, 132,
        132, 161, 161, 190, 190, 201, 202, 205, 206, 209, 210, 221, 221, 223, 224, 232, 232, 234,
        234, 253, 253, 267, 267, 4, 0, 119, 119, 212, 212, 215, 215, 217, 217, 12, 0, 146, 146, 148,
        148, 176, 176, 208, 208, 216, 216, 220, 220, 229, 229, 231, 231, 233, 233, 241, 241, 244,
        244, 248, 248, 7, 0, 209, 210, 221, 222, 224, 225, 227, 228, 238, 239, 242, 243, 250, 251,
        1, 0, 163, 164, 2, 0, 3, 3, 168, 168, 2, 0, 179, 180, 183, 183, 2, 0, 212, 212, 217, 217, 7, 0,
        137, 137, 209, 210, 221, 228, 238, 239, 242, 243, 250, 251, 253, 267, 1, 0, 187, 189, 2, 0,
        190, 190, 267, 267, 2, 0, 190, 190, 267, 268, 5, 0, 28, 28, 95, 96, 98, 100, 102, 106, 281,
        281, 2, 0, 148, 148, 240, 240, 2, 0, 110, 110, 113, 113, 2, 0, 47, 48, 128, 128, 6, 0, 48, 50,
        52, 52, 128, 128, 131, 131, 133, 133, 141, 142, 3, 0, 212, 212, 215, 215, 217, 217, 9, 0, 146,
        146, 176, 176, 208, 208, 216, 216, 220, 220, 231, 231, 233, 233, 241, 241, 248, 248, 3, 0,
        212, 212, 217, 217, 252, 252, 1, 0, 245, 246, 1, 0, 157, 158, 4, 0, 201, 202, 205, 206, 215,
        215, 268, 268, 2, 0, 284, 284, 292, 292, 3, 0, 284, 285, 289, 289, 292, 292, 2, 0, 211, 211,
        214, 214, 1, 0, 119, 121, 2, 0, 109, 109, 119, 119, 1, 0, 153, 154, 2, 0, 113, 113, 119, 119,
        1, 0, 54, 59, 1, 0, 54, 55, 2, 0, 54, 55, 64, 67, 2, 0, 216, 216, 229, 229, 3, 0, 47, 48, 54, 54,
        128, 128, 11, 0, 22, 25, 38, 39, 47, 67, 113, 113, 125, 125, 128, 128, 131, 131, 133, 134,
        140, 140, 142, 142, 220, 220, 3, 0, 137, 137, 143, 143, 152, 152, 2, 0, 126, 127, 136, 136,
        2, 0, 147, 147, 288, 288, 2, 0, 137, 137, 143, 143, 2, 0, 221, 221, 224, 224, 3, 0, 138, 139,
        144, 145, 155, 155, 2, 0, 191, 191, 193, 193, 2, 0, 68, 71, 80, 83, 1, 0, 84, 87, 1, 0, 88, 91,
        4, 0, 72, 72, 74, 74, 76, 76, 78, 78, 4, 0, 73, 73, 75, 75, 77, 77, 79, 79, 1, 0, 278, 279, 2, 0,
        197, 197, 200, 200, 1, 0, 138, 139, 2389, 0, 344, 1, 0, 0, 0, 2, 355, 1, 0, 0, 0, 4, 357, 1, 0,
        0, 0, 6, 364, 1, 0, 0, 0, 8, 371, 1, 0, 0, 0, 10, 389, 1, 0, 0, 0, 12, 409, 1, 0, 0, 0, 14, 427, 1,
        0, 0, 0, 16, 430, 1, 0, 0, 0, 18, 434, 1, 0, 0, 0, 20, 436, 1, 0, 0, 0, 22, 438, 1, 0, 0, 0, 24, 497,
        1, 0, 0, 0, 26, 556, 1, 0, 0, 0, 28, 560, 1, 0, 0, 0, 30, 610, 1, 0, 0, 0, 32, 612, 1, 0, 0, 0, 34,
        621, 1, 0, 0, 0, 36, 630, 1, 0, 0, 0, 38, 639, 1, 0, 0, 0, 40, 641, 1, 0, 0, 0, 42, 643, 1, 0, 0, 0,
        44, 645, 1, 0, 0, 0, 46, 647, 1, 0, 0, 0, 48, 669, 1, 0, 0, 0, 50, 678, 1, 0, 0, 0, 52, 687, 1, 0,
        0, 0, 54, 717, 1, 0, 0, 0, 56, 719, 1, 0, 0, 0, 58, 726, 1, 0, 0, 0, 60, 733, 1, 0, 0, 0, 62, 735,
        1, 0, 0, 0, 64, 742, 1, 0, 0, 0, 66, 744, 1, 0, 0, 0, 68, 747, 1, 0, 0, 0, 70, 757, 1, 0, 0, 0, 72,
        773, 1, 0, 0, 0, 74, 775, 1, 0, 0, 0, 76, 781, 1, 0, 0, 0, 78, 783, 1, 0, 0, 0, 80, 785, 1, 0, 0, 0,
        82, 793, 1, 0, 0, 0, 84, 813, 1, 0, 0, 0, 86, 824, 1, 0, 0, 0, 88, 826, 1, 0, 0, 0, 90, 831, 1, 0,
        0, 0, 92, 851, 1, 0, 0, 0, 94, 853, 1, 0, 0, 0, 96, 857, 1, 0, 0, 0, 98, 859, 1, 0, 0, 0, 100, 861,
        1, 0, 0, 0, 102, 880, 1, 0, 0, 0, 104, 891, 1, 0, 0, 0, 106, 911, 1, 0, 0, 0, 108, 928, 1, 0, 0, 0,
        110, 930, 1, 0, 0, 0, 112, 942, 1, 0, 0, 0, 114, 948, 1, 0, 0, 0, 116, 953, 1, 0, 0, 0, 118, 957,
        1, 0, 0, 0, 120, 959, 1, 0, 0, 0, 122, 976, 1, 0, 0, 0, 124, 987, 1, 0, 0, 0, 126, 1008, 1, 0, 0,
        0, 128, 1010, 1, 0, 0, 0, 130, 1020, 1, 0, 0, 0, 132, 1062, 1, 0, 0, 0, 134, 1064, 1, 0, 0, 0, 136,
        1066, 1, 0, 0, 0, 138, 1079, 1, 0, 0, 0, 140, 1084, 1, 0, 0, 0, 142, 1093, 1, 0, 0, 0, 144, 1097,
        1, 0, 0, 0, 146, 1099, 1, 0, 0, 0, 148, 1120, 1, 0, 0, 0, 150, 1122, 1, 0, 0, 0, 152, 1132, 1, 0,
        0, 0, 154, 1137, 1, 0, 0, 0, 156, 1139, 1, 0, 0, 0, 158, 1152, 1, 0, 0, 0, 160, 1157, 1, 0, 0, 0,
        162, 1164, 1, 0, 0, 0, 164, 1169, 1, 0, 0, 0, 166, 1216, 1, 0, 0, 0, 168, 1233, 1, 0, 0, 0, 170,
        1235, 1, 0, 0, 0, 172, 1240, 1, 0, 0, 0, 174, 1245, 1, 0, 0, 0, 176, 1248, 1, 0, 0, 0, 178, 1252,
        1, 0, 0, 0, 180, 1257, 1, 0, 0, 0, 182, 1269, 1, 0, 0, 0, 184, 1274, 1, 0, 0, 0, 186, 1279, 1, 0,
        0, 0, 188, 1284, 1, 0, 0, 0, 190, 1293, 1, 0, 0, 0, 192, 1309, 1, 0, 0, 0, 194, 1318, 1, 0, 0, 0,
        196, 1320, 1, 0, 0, 0, 198, 1324, 1, 0, 0, 0, 200, 1327, 1, 0, 0, 0, 202, 1332, 1, 0, 0, 0, 204,
        1342, 1, 0, 0, 0, 206, 1352, 1, 0, 0, 0, 208, 1356, 1, 0, 0, 0, 210, 1363, 1, 0, 0, 0, 212, 1365,
        1, 0, 0, 0, 214, 1368, 1, 0, 0, 0, 216, 1376, 1, 0, 0, 0, 218, 1379, 1, 0, 0, 0, 220, 1386, 1, 0,
        0, 0, 222, 1389, 1, 0, 0, 0, 224, 1392, 1, 0, 0, 0, 226, 1395, 1, 0, 0, 0, 228, 1411, 1, 0, 0, 0,
        230, 1413, 1, 0, 0, 0, 232, 1426, 1, 0, 0, 0, 234, 1432, 1, 0, 0, 0, 236, 1443, 1, 0, 0, 0, 238,
        1445, 1, 0, 0, 0, 240, 1447, 1, 0, 0, 0, 242, 1449, 1, 0, 0, 0, 244, 1451, 1, 0, 0, 0, 246, 1477,
        1, 0, 0, 0, 248, 1479, 1, 0, 0, 0, 250, 1489, 1, 0, 0, 0, 252, 1495, 1, 0, 0, 0, 254, 1520, 1, 0,
        0, 0, 256, 1535, 1, 0, 0, 0, 258, 1537, 1, 0, 0, 0, 260, 1573, 1, 0, 0, 0, 262, 1584, 1, 0, 0, 0,
        264, 1586, 1, 0, 0, 0, 266, 1588, 1, 0, 0, 0, 268, 1590, 1, 0, 0, 0, 270, 1599, 1, 0, 0, 0, 272,
        1601, 1, 0, 0, 0, 274, 1610, 1, 0, 0, 0, 276, 1612, 1, 0, 0, 0, 278, 1621, 1, 0, 0, 0, 280, 1886,
        1, 0, 0, 0, 282, 1913, 1, 0, 0, 0, 284, 1924, 1, 0, 0, 0, 286, 1926, 1, 0, 0, 0, 288, 1929, 1, 0,
        0, 0, 290, 1935, 1, 0, 0, 0, 292, 1937, 1, 0, 0, 0, 294, 1956, 1, 0, 0, 0, 296, 1974, 1, 0, 0, 0,
        298, 1980, 1, 0, 0, 0, 300, 1988, 1, 0, 0, 0, 302, 1990, 1, 0, 0, 0, 304, 2002, 1, 0, 0, 0, 306,
        2004, 1, 0, 0, 0, 308, 2010, 1, 0, 0, 0, 310, 2017, 1, 0, 0, 0, 312, 2059, 1, 0, 0, 0, 314, 2069,
        1, 0, 0, 0, 316, 2083, 1, 0, 0, 0, 318, 2085, 1, 0, 0, 0, 320, 2099, 1, 0, 0, 0, 322, 2101, 1, 0,
        0, 0, 324, 2113, 1, 0, 0, 0, 326, 2115, 1, 0, 0, 0, 328, 2120, 1, 0, 0, 0, 330, 2127, 1, 0, 0, 0,
        332, 2146, 1, 0, 0, 0, 334, 2148, 1, 0, 0, 0, 336, 343, 3, 2, 1, 0, 337, 343, 3, 120, 60, 0, 338,
        343, 3, 122, 61, 0, 339, 343, 3, 4, 2, 0, 340, 343, 3, 156, 78, 0, 341, 343, 3, 80, 40, 0, 342,
        336, 1, 0, 0, 0, 342, 337, 1, 0, 0, 0, 342, 338, 1, 0, 0, 0, 342, 339, 1, 0, 0, 0, 342, 340, 1, 0,
        0, 0, 342, 341, 1, 0, 0, 0, 343, 346, 1, 0, 0, 0, 344, 342, 1, 0, 0, 0, 344, 345, 1, 0, 0, 0, 345,
        347, 1, 0, 0, 0, 346, 344, 1, 0, 0, 0, 347, 348, 5, 0, 0, 1, 348, 1, 1, 0, 0, 0, 349, 356, 3, 46,
        23, 0, 350, 356, 3, 70, 35, 0, 351, 356, 3, 100, 50, 0, 352, 356, 3, 90, 45, 0, 353, 356, 3, 108,
        54, 0, 354, 356, 3, 318, 159, 0, 355, 349, 1, 0, 0, 0, 355, 350, 1, 0, 0, 0, 355, 351, 1, 0, 0,
        0, 355, 352, 1, 0, 0, 0, 355, 353, 1, 0, 0, 0, 355, 354, 1, 0, 0, 0, 356, 3, 1, 0, 0, 0, 357, 358,
        5, 98, 0, 0, 358, 360, 3, 32, 16, 0, 359, 361, 3, 128, 64, 0, 360, 359, 1, 0, 0, 0, 360, 361, 1,
        0, 0, 0, 361, 362, 1, 0, 0, 0, 362, 363, 3, 6, 3, 0, 363, 5, 1, 0, 0, 0, 364, 365, 3, 8, 4, 0, 365,
        367, 3, 10, 5, 0, 366, 368, 3, 12, 6, 0, 367, 366, 1, 0, 0, 0, 368, 369, 1, 0, 0, 0, 369, 367, 1,
        0, 0, 0, 369, 370, 1, 0, 0, 0, 370, 7, 1, 0, 0, 0, 371, 373, 5, 293, 0, 0, 372, 374, 5, 293, 0, 0,
        373, 372, 1, 0, 0, 0, 373, 374, 1, 0, 0, 0, 374, 375, 1, 0, 0, 0, 375, 376, 3, 16, 8, 0, 376, 377,
        5, 293, 0, 0, 377, 382, 3, 16, 8, 0, 378, 379, 5, 293, 0, 0, 379, 381, 3, 16, 8, 0, 380, 378, 1,
        0, 0, 0, 381, 384, 1, 0, 0, 0, 382, 380, 1, 0, 0, 0, 382, 383, 1, 0, 0, 0, 383, 386, 1, 0, 0, 0, 384,
        382, 1, 0, 0, 0, 385, 387, 5, 293, 0, 0, 386, 385, 1, 0, 0, 0, 386, 387, 1, 0, 0, 0, 387, 9, 1, 0,
        0, 0, 388, 390, 5, 293, 0, 0, 389, 388, 1, 0, 0, 0, 389, 390, 1, 0, 0, 0, 390, 399, 1, 0, 0, 0, 391,
        393, 5, 292, 0, 0, 392, 391, 1, 0, 0, 0, 393, 394, 1, 0, 0, 0, 394, 392, 1, 0, 0, 0, 394, 395, 1,
        0, 0, 0, 395, 397, 1, 0, 0, 0, 396, 398, 5, 293, 0, 0, 397, 396, 1, 0, 0, 0, 397, 398, 1, 0, 0, 0,
        398, 400, 1, 0, 0, 0, 399, 392, 1, 0, 0, 0, 400, 401, 1, 0, 0, 0, 401, 399, 1, 0, 0, 0, 401, 402,
        1, 0, 0, 0, 402, 406, 1, 0, 0, 0, 403, 405, 5, 292, 0, 0, 404, 403, 1, 0, 0, 0, 405, 408, 1, 0, 0,
        0, 406, 404, 1, 0, 0, 0, 406, 407, 1, 0, 0, 0, 407, 11, 1, 0, 0, 0, 408, 406, 1, 0, 0, 0, 409, 410,
        5, 293, 0, 0, 410, 411, 5, 268, 0, 0, 411, 412, 5, 293, 0, 0, 412, 413, 3, 254, 127, 0, 413, 414,
        5, 293, 0, 0, 414, 419, 3, 14, 7, 0, 415, 416, 5, 293, 0, 0, 416, 418, 3, 14, 7, 0, 417, 415, 1,
        0, 0, 0, 418, 421, 1, 0, 0, 0, 419, 417, 1, 0, 0, 0, 419, 420, 1, 0, 0, 0, 420, 423, 1, 0, 0, 0, 421,
        419, 1, 0, 0, 0, 422, 424, 5, 293, 0, 0, 423, 422, 1, 0, 0, 0, 423, 424, 1, 0, 0, 0, 424, 13, 1,
        0, 0, 0, 425, 428, 3, 254, 127, 0, 426, 428, 5, 294, 0, 0, 427, 425, 1, 0, 0, 0, 427, 426, 1, 0,
        0, 0, 428, 15, 1, 0, 0, 0, 429, 431, 8, 0, 0, 0, 430, 429, 1, 0, 0, 0, 431, 432, 1, 0, 0, 0, 432,
        430, 1, 0, 0, 0, 432, 433, 1, 0, 0, 0, 433, 17, 1, 0, 0, 0, 434, 435, 5, 267, 0, 0, 435, 19, 1, 0,
        0, 0, 436, 437, 7, 1, 0, 0, 437, 21, 1, 0, 0, 0, 438, 439, 7, 2, 0, 0, 439, 23, 1, 0, 0, 0, 440, 442,
        7, 3, 0, 0, 441, 440, 1, 0, 0, 0, 441, 442, 1, 0, 0, 0, 442, 444, 1, 0, 0, 0, 443, 445, 3, 20, 10,
        0, 444, 443, 1, 0, 0, 0, 445, 446, 1, 0, 0, 0, 446, 444, 1, 0, 0, 0, 446, 447, 1, 0, 0, 0, 447, 498,
        1, 0, 0, 0, 448, 450, 3, 20, 10, 0, 449, 448, 1, 0, 0, 0, 450, 451, 1, 0, 0, 0, 451, 449, 1, 0, 0,
        0, 451, 452, 1, 0, 0, 0, 452, 498, 1, 0, 0, 0, 453, 455, 5, 45, 0, 0, 454, 456, 3, 20, 10, 0, 455,
        454, 1, 0, 0, 0, 456, 457, 1, 0, 0, 0, 457, 455, 1, 0, 0, 0, 457, 458, 1, 0, 0, 0, 458, 498, 1, 0,
        0, 0, 459, 461, 5, 45, 0, 0, 460, 462, 3, 20, 10, 0, 461, 460, 1, 0, 0, 0, 462, 463, 1, 0, 0, 0,
        463, 461, 1, 0, 0, 0, 463, 464, 1, 0, 0, 0, 464, 465, 1, 0, 0, 0, 465, 467, 5, 176, 0, 0, 466, 468,
        3, 20, 10, 0, 467, 466, 1, 0, 0, 0, 468, 469, 1, 0, 0, 0, 469, 467, 1, 0, 0, 0, 469, 470, 1, 0, 0,
        0, 470, 498, 1, 0, 0, 0, 471, 473, 3, 20, 10, 0, 472, 471, 1, 0, 0, 0, 473, 474, 1, 0, 0, 0, 474,
        472, 1, 0, 0, 0, 474, 475, 1, 0, 0, 0, 475, 476, 1, 0, 0, 0, 476, 478, 5, 176, 0, 0, 477, 479, 3,
        20, 10, 0, 478, 477, 1, 0, 0, 0, 479, 480, 1, 0, 0, 0, 480, 478, 1, 0, 0, 0, 480, 481, 1, 0, 0, 0,
        481, 498, 1, 0, 0, 0, 482, 484, 5, 140, 0, 0, 483, 485, 3, 20, 10, 0, 484, 483, 1, 0, 0, 0, 485,
        486, 1, 0, 0, 0, 486, 484, 1, 0, 0, 0, 486, 487, 1, 0, 0, 0, 487, 498, 1, 0, 0, 0, 488, 489, 5, 217,
        0, 0, 489, 490, 5, 190, 0, 0, 490, 491, 5, 210, 0, 0, 491, 493, 5, 220, 0, 0, 492, 494, 3, 20,
        10, 0, 493, 492, 1, 0, 0, 0, 494, 495, 1, 0, 0, 0, 495, 493, 1, 0, 0, 0, 495, 496, 1, 0, 0, 0, 496,
        498, 1, 0, 0, 0, 497, 441, 1, 0, 0, 0, 497, 449, 1, 0, 0, 0, 497, 453, 1, 0, 0, 0, 497, 459, 1, 0,
        0, 0, 497, 472, 1, 0, 0, 0, 497, 482, 1, 0, 0, 0, 497, 488, 1, 0, 0, 0, 498, 25, 1, 0, 0, 0, 499,
        501, 7, 3, 0, 0, 500, 499, 1, 0, 0, 0, 500, 501, 1, 0, 0, 0, 501, 503, 1, 0, 0, 0, 502, 504, 3, 28,
        14, 0, 503, 502, 1, 0, 0, 0, 504, 505, 1, 0, 0, 0, 505, 503, 1, 0, 0, 0, 505, 506, 1, 0, 0, 0, 506,
        557, 1, 0, 0, 0, 507, 509, 3, 28, 14, 0, 508, 507, 1, 0, 0, 0, 509, 510, 1, 0, 0, 0, 510, 508, 1,
        0, 0, 0, 510, 511, 1, 0, 0, 0, 511, 557, 1, 0, 0, 0, 512, 514, 5, 45, 0, 0, 513, 515, 3, 28, 14,
        0, 514, 513, 1, 0, 0, 0, 515, 516, 1, 0, 0, 0, 516, 514, 1, 0, 0, 0, 516, 517, 1, 0, 0, 0, 517, 557,
        1, 0, 0, 0, 518, 520, 5, 45, 0, 0, 519, 521, 3, 28, 14, 0, 520, 519, 1, 0, 0, 0, 521, 522, 1, 0,
        0, 0, 522, 520, 1, 0, 0, 0, 522, 523, 1, 0, 0, 0, 523, 524, 1, 0, 0, 0, 524, 526, 5, 176, 0, 0, 525,
        527, 3, 28, 14, 0, 526, 525, 1, 0, 0, 0, 527, 528, 1, 0, 0, 0, 528, 526, 1, 0, 0, 0, 528, 529, 1,
        0, 0, 0, 529, 557, 1, 0, 0, 0, 530, 532, 3, 28, 14, 0, 531, 530, 1, 0, 0, 0, 532, 533, 1, 0, 0, 0,
        533, 531, 1, 0, 0, 0, 533, 534, 1, 0, 0, 0, 534, 535, 1, 0, 0, 0, 535, 537, 5, 176, 0, 0, 536, 538,
        3, 28, 14, 0, 537, 536, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 537, 1, 0, 0, 0, 539, 540, 1, 0, 0,
        0, 540, 557, 1, 0, 0, 0, 541, 543, 5, 140, 0, 0, 542, 544, 3, 28, 14, 0, 543, 542, 1, 0, 0, 0, 544,
        545, 1, 0, 0, 0, 545, 543, 1, 0, 0, 0, 545, 546, 1, 0, 0, 0, 546, 557, 1, 0, 0, 0, 547, 548, 5, 217,
        0, 0, 548, 549, 5, 190, 0, 0, 549, 550, 5, 210, 0, 0, 550, 552, 5, 220, 0, 0, 551, 553, 3, 28,
        14, 0, 552, 551, 1, 0, 0, 0, 553, 554, 1, 0, 0, 0, 554, 552, 1, 0, 0, 0, 554, 555, 1, 0, 0, 0, 555,
        557, 1, 0, 0, 0, 556, 500, 1, 0, 0, 0, 556, 508, 1, 0, 0, 0, 556, 512, 1, 0, 0, 0, 556, 518, 1, 0,
        0, 0, 556, 531, 1, 0, 0, 0, 556, 541, 1, 0, 0, 0, 556, 547, 1, 0, 0, 0, 557, 27, 1, 0, 0, 0, 558,
        561, 3, 20, 10, 0, 559, 561, 5, 268, 0, 0, 560, 558, 1, 0, 0, 0, 560, 559, 1, 0, 0, 0, 561, 29,
        1, 0, 0, 0, 562, 564, 7, 3, 0, 0, 563, 562, 1, 0, 0, 0, 563, 564, 1, 0, 0, 0, 564, 566, 1, 0, 0, 0,
        565, 567, 3, 22, 11, 0, 566, 565, 1, 0, 0, 0, 567, 568, 1, 0, 0, 0, 568, 566, 1, 0, 0, 0, 568, 569,
        1, 0, 0, 0, 569, 611, 1, 0, 0, 0, 570, 572, 3, 22, 11, 0, 571, 570, 1, 0, 0, 0, 572, 573, 1, 0, 0,
        0, 573, 571, 1, 0, 0, 0, 573, 574, 1, 0, 0, 0, 574, 611, 1, 0, 0, 0, 575, 577, 5, 45, 0, 0, 576,
        578, 3, 22, 11, 0, 577, 576, 1, 0, 0, 0, 578, 579, 1, 0, 0, 0, 579, 577, 1, 0, 0, 0, 579, 580, 1,
        0, 0, 0, 580, 611, 1, 0, 0, 0, 581, 583, 5, 45, 0, 0, 582, 584, 3, 22, 11, 0, 583, 582, 1, 0, 0,
        0, 584, 585, 1, 0, 0, 0, 585, 583, 1, 0, 0, 0, 585, 586, 1, 0, 0, 0, 586, 587, 1, 0, 0, 0, 587, 589,
        5, 176, 0, 0, 588, 590, 3, 22, 11, 0, 589, 588, 1, 0, 0, 0, 590, 591, 1, 0, 0, 0, 591, 589, 1, 0,
        0, 0, 591, 592, 1, 0, 0, 0, 592, 611, 1, 0, 0, 0, 593, 595, 3, 22, 11, 0, 594, 593, 1, 0, 0, 0, 595,
        596, 1, 0, 0, 0, 596, 594, 1, 0, 0, 0, 596, 597, 1, 0, 0, 0, 597, 598, 1, 0, 0, 0, 598, 600, 5, 176,
        0, 0, 599, 601, 3, 22, 11, 0, 600, 599, 1, 0, 0, 0, 601, 602, 1, 0, 0, 0, 602, 600, 1, 0, 0, 0, 602,
        603, 1, 0, 0, 0, 603, 611, 1, 0, 0, 0, 604, 606, 5, 140, 0, 0, 605, 607, 3, 22, 11, 0, 606, 605,
        1, 0, 0, 0, 607, 608, 1, 0, 0, 0, 608, 606, 1, 0, 0, 0, 608, 609, 1, 0, 0, 0, 609, 611, 1, 0, 0, 0,
        610, 563, 1, 0, 0, 0, 610, 571, 1, 0, 0, 0, 610, 575, 1, 0, 0, 0, 610, 581, 1, 0, 0, 0, 610, 594,
        1, 0, 0, 0, 610, 604, 1, 0, 0, 0, 611, 31, 1, 0, 0, 0, 612, 618, 3, 24, 12, 0, 613, 614, 3, 38, 19,
        0, 614, 615, 3, 24, 12, 0, 615, 617, 1, 0, 0, 0, 616, 613, 1, 0, 0, 0, 617, 620, 1, 0, 0, 0, 618,
        616, 1, 0, 0, 0, 618, 619, 1, 0, 0, 0, 619, 33, 1, 0, 0, 0, 620, 618, 1, 0, 0, 0, 621, 627, 3, 26,
        13, 0, 622, 623, 3, 38, 19, 0, 623, 624, 3, 26, 13, 0, 624, 626, 1, 0, 0, 0, 625, 622, 1, 0, 0,
        0, 626, 629, 1, 0, 0, 0, 627, 625, 1, 0, 0, 0, 627, 628, 1, 0, 0, 0, 628, 35, 1, 0, 0, 0, 629, 627,
        1, 0, 0, 0, 630, 636, 3, 30, 15, 0, 631, 632, 3, 38, 19, 0, 632, 633, 3, 30, 15, 0, 633, 635, 1,
        0, 0, 0, 634, 631, 1, 0, 0, 0, 635, 638, 1, 0, 0, 0, 636, 634, 1, 0, 0, 0, 636, 637, 1, 0, 0, 0, 637,
        37, 1, 0, 0, 0, 638, 636, 1, 0, 0, 0, 639, 640, 7, 4, 0, 0, 640, 39, 1, 0, 0, 0, 641, 642, 5, 270,
        0, 0, 642, 41, 1, 0, 0, 0, 643, 644, 5, 267, 0, 0, 644, 43, 1, 0, 0, 0, 645, 646, 7, 5, 0, 0, 646,
        45, 1, 0, 0, 0, 647, 648, 5, 99, 0, 0, 648, 656, 3, 36, 18, 0, 649, 651, 5, 178, 0, 0, 650, 652,
        5, 267, 0, 0, 651, 650, 1, 0, 0, 0, 652, 653, 1, 0, 0, 0, 653, 651, 1, 0, 0, 0, 653, 654, 1, 0, 0,
        0, 654, 655, 1, 0, 0, 0, 655, 657, 5, 275, 0, 0, 656, 649, 1, 0, 0, 0, 656, 657, 1, 0, 0, 0, 657,
        659, 1, 0, 0, 0, 658, 660, 5, 165, 0, 0, 659, 658, 1, 0, 0, 0, 659, 660, 1, 0, 0, 0, 660, 664, 1,
        0, 0, 0, 661, 663, 3, 48, 24, 0, 662, 661, 1, 0, 0, 0, 663, 666, 1, 0, 0, 0, 664, 662, 1, 0, 0, 0,
        664, 665, 1, 0, 0, 0, 665, 47, 1, 0, 0, 0, 666, 664, 1, 0, 0, 0, 667, 670, 3, 50, 25, 0, 668, 670,
        3, 52, 26, 0, 669, 667, 1, 0, 0, 0, 669, 668, 1, 0, 0, 0, 670, 671, 1, 0, 0, 0, 671, 672, 5, 281,
        0, 0, 672, 49, 1, 0, 0, 0, 673, 675, 5, 113, 0, 0, 674, 673, 1, 0, 0, 0, 674, 675, 1, 0, 0, 0, 675,
        676, 1, 0, 0, 0, 676, 679, 3, 18, 9, 0, 677, 679, 3, 34, 17, 0, 678, 674, 1, 0, 0, 0, 678, 677,
        1, 0, 0, 0, 679, 680, 1, 0, 0, 0, 680, 682, 5, 174, 0, 0, 681, 683, 7, 6, 0, 0, 682, 681, 1, 0, 0,
        0, 682, 683, 1, 0, 0, 0, 683, 685, 1, 0, 0, 0, 684, 686, 3, 96, 48, 0, 685, 684, 1, 0, 0, 0, 685,
        686, 1, 0, 0, 0, 686, 51, 1, 0, 0, 0, 687, 691, 3, 34, 17, 0, 688, 692, 3, 54, 27, 0, 689, 692,
        3, 76, 38, 0, 690, 692, 3, 78, 39, 0, 691, 688, 1, 0, 0, 0, 691, 689, 1, 0, 0, 0, 691, 690, 1, 0,
        0, 0, 692, 695, 1, 0, 0, 0, 693, 694, 5, 177, 0, 0, 694, 696, 3, 84, 42, 0, 695, 693, 1, 0, 0, 0,
        695, 696, 1, 0, 0, 0, 696, 706, 1, 0, 0, 0, 697, 698, 5, 171, 0, 0, 698, 703, 3, 98, 49, 0, 699,
        700, 5, 216, 0, 0, 700, 702, 3, 98, 49, 0, 701, 699, 1, 0, 0, 0, 702, 705, 1, 0, 0, 0, 703, 701,
        1, 0, 0, 0, 703, 704, 1, 0, 0, 0, 704, 707, 1, 0, 0, 0, 705, 703, 1, 0, 0, 0, 706, 697, 1, 0, 0, 0,
        706, 707, 1, 0, 0, 0, 707, 709, 1, 0, 0, 0, 708, 710, 3, 96, 48, 0, 709, 708, 1, 0, 0, 0, 709, 710,
        1, 0, 0, 0, 710, 53, 1, 0, 0, 0, 711, 718, 3, 58, 29, 0, 712, 718, 3, 60, 30, 0, 713, 718, 3, 64,
        32, 0, 714, 718, 3, 66, 33, 0, 715, 718, 3, 56, 28, 0, 716, 718, 3, 62, 31, 0, 717, 711, 1, 0,
        0, 0, 717, 712, 1, 0, 0, 0, 717, 713, 1, 0, 0, 0, 717, 714, 1, 0, 0, 0, 717, 715, 1, 0, 0, 0, 717,
        716, 1, 0, 0, 0, 718, 55, 1, 0, 0, 0, 719, 720, 5, 101, 0, 0, 720, 724, 5, 244, 0, 0, 721, 725,
        3, 54, 27, 0, 722, 725, 3, 76, 38, 0, 723, 725, 3, 78, 39, 0, 724, 721, 1, 0, 0, 0, 724, 722, 1,
        0, 0, 0, 724, 723, 1, 0, 0, 0, 725, 57, 1, 0, 0, 0, 726, 731, 5, 181, 0, 0, 727, 728, 5, 274, 0,
        0, 728, 729, 3, 68, 34, 0, 729, 730, 5, 275, 0, 0, 730, 732, 1, 0, 0, 0, 731, 727, 1, 0, 0, 0, 731,
        732, 1, 0, 0, 0, 732, 59, 1, 0, 0, 0, 733, 734, 5, 186, 0, 0, 734, 61, 1, 0, 0, 0, 735, 740, 5, 182,
        0, 0, 736, 737, 5, 274, 0, 0, 737, 738, 3, 68, 34, 0, 738, 739, 5, 275, 0, 0, 739, 741, 1, 0, 0,
        0, 740, 736, 1, 0, 0, 0, 740, 741, 1, 0, 0, 0, 741, 63, 1, 0, 0, 0, 742, 743, 5, 166, 0, 0, 743,
        65, 1, 0, 0, 0, 744, 745, 7, 7, 0, 0, 745, 67, 1, 0, 0, 0, 746, 748, 7, 8, 0, 0, 747, 746, 1, 0, 0,
        0, 747, 748, 1, 0, 0, 0, 748, 755, 1, 0, 0, 0, 749, 756, 5, 172, 0, 0, 750, 751, 5, 173, 0, 0, 751,
        752, 5, 176, 0, 0, 752, 753, 5, 268, 0, 0, 753, 756, 5, 169, 0, 0, 754, 756, 5, 173, 0, 0, 755,
        749, 1, 0, 0, 0, 755, 750, 1, 0, 0, 0, 755, 754, 1, 0, 0, 0, 756, 69, 1, 0, 0, 0, 757, 758, 5, 100,
        0, 0, 758, 759, 5, 267, 0, 0, 759, 760, 5, 29, 0, 0, 760, 763, 3, 72, 36, 0, 761, 762, 5, 177,
        0, 0, 762, 764, 3, 86, 43, 0, 763, 761, 1, 0, 0, 0, 763, 764, 1, 0, 0, 0, 764, 766, 1, 0, 0, 0, 765,
        767, 5, 281, 0, 0, 766, 765, 1, 0, 0, 0, 766, 767, 1, 0, 0, 0, 767, 71, 1, 0, 0, 0, 768, 774, 3,
        74, 37, 0, 769, 774, 3, 58, 29, 0, 770, 774, 3, 60, 30, 0, 771, 774, 3, 64, 32, 0, 772, 774, 3,
        66, 33, 0, 773, 768, 1, 0, 0, 0, 773, 769, 1, 0, 0, 0, 773, 770, 1, 0, 0, 0, 773, 771, 1, 0, 0, 0,
        773, 772, 1, 0, 0, 0, 774, 73, 1, 0, 0, 0, 775, 777, 5, 170, 0, 0, 776, 778, 5, 273, 0, 0, 777,
        776, 1, 0, 0, 0, 778, 779, 1, 0, 0, 0, 779, 777, 1, 0, 0, 0, 779, 780, 1, 0, 0, 0, 780, 75, 1, 0,
        0, 0, 781, 782, 5, 267, 0, 0, 782, 77, 1, 0, 0, 0, 783, 784, 5, 267, 0, 0, 784, 79, 1, 0, 0, 0, 785,
        786, 5, 103, 0, 0, 786, 790, 3, 18, 9, 0, 787, 789, 3, 82, 41, 0, 788, 787, 1, 0, 0, 0, 789, 792,
        1, 0, 0, 0, 790, 788, 1, 0, 0, 0, 790, 791, 1, 0, 0, 0, 791, 81, 1, 0, 0, 0, 792, 790, 1, 0, 0, 0,
        793, 794, 7, 9, 0, 0, 794, 799, 3, 84, 42, 0, 795, 796, 5, 178, 0, 0, 796, 797, 3, 84, 42, 0, 797,
        798, 5, 275, 0, 0, 798, 800, 1, 0, 0, 0, 799, 795, 1, 0, 0, 0, 799, 800, 1, 0, 0, 0, 800, 801, 1,
        0, 0, 0, 801, 803, 3, 84, 42, 0, 802, 804, 3, 84, 42, 0, 803, 802, 1, 0, 0, 0, 803, 804, 1, 0, 0,
        0, 804, 811, 1, 0, 0, 0, 805, 807, 5, 269, 0, 0, 806, 808, 5, 282, 0, 0, 807, 806, 1, 0, 0, 0, 807,
        808, 1, 0, 0, 0, 808, 809, 1, 0, 0, 0, 809, 810, 5, 268, 0, 0, 810, 812, 3, 84, 42, 0, 811, 805,
        1, 0, 0, 0, 811, 812, 1, 0, 0, 0, 812, 83, 1, 0, 0, 0, 813, 814, 7, 10, 0, 0, 814, 85, 1, 0, 0, 0,
        815, 818, 3, 88, 44, 0, 816, 817, 5, 282, 0, 0, 817, 819, 3, 88, 44, 0, 818, 816, 1, 0, 0, 0, 818,
        819, 1, 0, 0, 0, 819, 825, 1, 0, 0, 0, 820, 825, 5, 268, 0, 0, 821, 825, 5, 283, 0, 0, 822, 825,
        5, 264, 0, 0, 823, 825, 5, 265, 0, 0, 824, 815, 1, 0, 0, 0, 824, 820, 1, 0, 0, 0, 824, 821, 1, 0,
        0, 0, 824, 822, 1, 0, 0, 0, 824, 823, 1, 0, 0, 0, 825, 87, 1, 0, 0, 0, 826, 829, 3, 84, 42, 0, 827,
        828, 5, 288, 0, 0, 828, 830, 5, 268, 0, 0, 829, 827, 1, 0, 0, 0, 829, 830, 1, 0, 0, 0, 830, 89,
        1, 0, 0, 0, 831, 832, 5, 102, 0, 0, 832, 834, 3, 32, 16, 0, 833, 835, 5, 278, 0, 0, 834, 833, 1,
        0, 0, 0, 834, 835, 1, 0, 0, 0, 835, 836, 1, 0, 0, 0, 836, 837, 5, 27, 0, 0, 837, 838, 3, 32, 16,
        0, 838, 840, 3, 92, 46, 0, 839, 841, 3, 94, 47, 0, 840, 839, 1, 0, 0, 0, 841, 842, 1, 0, 0, 0, 842,
        840, 1, 0, 0, 0, 842, 843, 1, 0, 0, 0, 843, 91, 1, 0, 0, 0, 844, 845, 5, 2, 0, 0, 845, 846, 3, 38,
        19, 0, 846, 848, 5, 275, 0, 0, 847, 849, 5, 280, 0, 0, 848, 847, 1, 0, 0, 0, 848, 849, 1, 0, 0,
        0, 849, 852, 1, 0, 0, 0, 850, 852, 5, 1, 0, 0, 851, 844, 1, 0, 0, 0, 851, 850, 1, 0, 0, 0, 852, 93,
        1, 0, 0, 0, 853, 854, 5, 268, 0, 0, 854, 855, 5, 279, 0, 0, 855, 856, 3, 32, 16, 0, 856, 95, 1,
        0, 0, 0, 857, 858, 7, 11, 0, 0, 858, 97, 1, 0, 0, 0, 859, 860, 5, 267, 0, 0, 860, 99, 1, 0, 0, 0,
        861, 862, 5, 104, 0, 0, 862, 863, 3, 102, 51, 0, 863, 866, 5, 280, 0, 0, 864, 867, 3, 54, 27,
        0, 865, 867, 3, 76, 38, 0, 866, 864, 1, 0, 0, 0, 866, 865, 1, 0, 0, 0, 867, 870, 1, 0, 0, 0, 868,
        869, 5, 177, 0, 0, 869, 871, 3, 86, 43, 0, 870, 868, 1, 0, 0, 0, 870, 871, 1, 0, 0, 0, 871, 874,
        1, 0, 0, 0, 872, 873, 5, 113, 0, 0, 873, 875, 3, 254, 127, 0, 874, 872, 1, 0, 0, 0, 874, 875, 1,
        0, 0, 0, 875, 877, 1, 0, 0, 0, 876, 878, 3, 96, 48, 0, 877, 876, 1, 0, 0, 0, 877, 878, 1, 0, 0, 0,
        878, 101, 1, 0, 0, 0, 879, 881, 7, 9, 0, 0, 880, 879, 1, 0, 0, 0, 880, 881, 1, 0, 0, 0, 881, 882,
        1, 0, 0, 0, 882, 888, 3, 104, 52, 0, 883, 884, 3, 38, 19, 0, 884, 885, 3, 104, 52, 0, 885, 887,
        1, 0, 0, 0, 886, 883, 1, 0, 0, 0, 887, 890, 1, 0, 0, 0, 888, 886, 1, 0, 0, 0, 888, 889, 1, 0, 0, 0,
        889, 103, 1, 0, 0, 0, 890, 888, 1, 0, 0, 0, 891, 895, 7, 12, 0, 0, 892, 894, 7, 13, 0, 0, 893, 892,
        1, 0, 0, 0, 894, 897, 1, 0, 0, 0, 895, 893, 1, 0, 0, 0, 895, 896, 1, 0, 0, 0, 896, 105, 1, 0, 0, 0,
        897, 895, 1, 0, 0, 0, 898, 900, 7, 9, 0, 0, 899, 898, 1, 0, 0, 0, 899, 900, 1, 0, 0, 0, 900, 901,
        1, 0, 0, 0, 901, 907, 3, 104, 52, 0, 902, 903, 3, 38, 19, 0, 903, 904, 3, 104, 52, 0, 904, 906,
        1, 0, 0, 0, 905, 902, 1, 0, 0, 0, 906, 909, 1, 0, 0, 0, 907, 905, 1, 0, 0, 0, 907, 908, 1, 0, 0, 0,
        908, 912, 1, 0, 0, 0, 909, 907, 1, 0, 0, 0, 910, 912, 3, 32, 16, 0, 911, 899, 1, 0, 0, 0, 911, 910,
        1, 0, 0, 0, 912, 107, 1, 0, 0, 0, 913, 914, 5, 105, 0, 0, 914, 915, 3, 32, 16, 0, 915, 917, 3, 110,
        55, 0, 916, 918, 3, 110, 55, 0, 917, 916, 1, 0, 0, 0, 918, 919, 1, 0, 0, 0, 919, 917, 1, 0, 0, 0,
        919, 920, 1, 0, 0, 0, 920, 921, 1, 0, 0, 0, 921, 922, 3, 116, 58, 0, 922, 929, 1, 0, 0, 0, 923,
        924, 5, 28, 0, 0, 924, 925, 3, 32, 16, 0, 925, 926, 3, 110, 55, 0, 926, 927, 3, 116, 58, 0, 927,
        929, 1, 0, 0, 0, 928, 913, 1, 0, 0, 0, 928, 923, 1, 0, 0, 0, 929, 109, 1, 0, 0, 0, 930, 931, 7, 9,
        0, 0, 931, 936, 3, 114, 57, 0, 932, 933, 5, 178, 0, 0, 933, 934, 3, 32, 16, 0, 934, 935, 5, 275,
        0, 0, 935, 937, 1, 0, 0, 0, 936, 932, 1, 0, 0, 0, 936, 937, 1, 0, 0, 0, 937, 939, 1, 0, 0, 0, 938,
        940, 3, 112, 56, 0, 939, 938, 1, 0, 0, 0, 939, 940, 1, 0, 0, 0, 940, 111, 1, 0, 0, 0, 941, 943,
        3, 20, 10, 0, 942, 941, 1, 0, 0, 0, 943, 944, 1, 0, 0, 0, 944, 942, 1, 0, 0, 0, 944, 945, 1, 0, 0,
        0, 945, 113, 1, 0, 0, 0, 946, 949, 3, 20, 10, 0, 947, 949, 3, 38, 19, 0, 948, 946, 1, 0, 0, 0, 948,
        947, 1, 0, 0, 0, 949, 950, 1, 0, 0, 0, 950, 948, 1, 0, 0, 0, 950, 951, 1, 0, 0, 0, 951, 115, 1, 0,
        0, 0, 952, 954, 3, 118, 59, 0, 953, 952, 1, 0, 0, 0, 954, 955, 1, 0, 0, 0, 955, 953, 1, 0, 0, 0,
        955, 956, 1, 0, 0, 0, 956, 117, 1, 0, 0, 0, 957, 958, 8, 14, 0, 0, 958, 119, 1, 0, 0, 0, 959, 960,
        5, 96, 0, 0, 960, 962, 3, 124, 62, 0, 961, 963, 5, 268, 0, 0, 962, 961, 1, 0, 0, 0, 962, 963, 1,
        0, 0, 0, 963, 964, 1, 0, 0, 0, 964, 965, 3, 128, 64, 0, 965, 971, 3, 132, 66, 0, 966, 968, 3, 164,
        82, 0, 967, 969, 5, 279, 0, 0, 968, 967, 1, 0, 0, 0, 968, 969, 1, 0, 0, 0, 969, 972, 1, 0, 0, 0,
        970, 972, 5, 279, 0, 0, 971, 966, 1, 0, 0, 0, 971, 970, 1, 0, 0, 0, 971, 972, 1, 0, 0, 0, 972, 974,
        1, 0, 0, 0, 973, 975, 3, 248, 124, 0, 974, 973, 1, 0, 0, 0, 974, 975, 1, 0, 0, 0, 975, 121, 1, 0,
        0, 0, 976, 977, 5, 97, 0, 0, 977, 979, 3, 32, 16, 0, 978, 980, 5, 112, 0, 0, 979, 978, 1, 0, 0,
        0, 979, 980, 1, 0, 0, 0, 980, 983, 1, 0, 0, 0, 981, 984, 3, 120, 60, 0, 982, 984, 3, 156, 78, 0,
        983, 981, 1, 0, 0, 0, 983, 982, 1, 0, 0, 0, 984, 985, 1, 0, 0, 0, 985, 983, 1, 0, 0, 0, 985, 986,
        1, 0, 0, 0, 986, 123, 1, 0, 0, 0, 987, 991, 3, 34, 17, 0, 988, 990, 3, 126, 63, 0, 989, 988, 1,
        0, 0, 0, 990, 993, 1, 0, 0, 0, 991, 989, 1, 0, 0, 0, 991, 992, 1, 0, 0, 0, 992, 125, 1, 0, 0, 0, 993,
        991, 1, 0, 0, 0, 994, 1009, 5, 198, 0, 0, 995, 996, 5, 278, 0, 0, 996, 1009, 3, 34, 17, 0, 997,
        998, 5, 278, 0, 0, 998, 999, 5, 176, 0, 0, 999, 1009, 3, 34, 17, 0, 1000, 1001, 5, 216, 0, 0,
        1001, 1009, 3, 34, 17, 0, 1002, 1003, 5, 113, 0, 0, 1003, 1009, 3, 34, 17, 0, 1004, 1005, 5,
        204, 0, 0, 1005, 1006, 3, 34, 17, 0, 1006, 1007, 5, 113, 0, 0, 1007, 1009, 1, 0, 0, 0, 1008,
        994, 1, 0, 0, 0, 1008, 995, 1, 0, 0, 0, 1008, 997, 1, 0, 0, 0, 1008, 1000, 1, 0, 0, 0, 1008, 1002,
        1, 0, 0, 0, 1008, 1004, 1, 0, 0, 0, 1009, 127, 1, 0, 0, 0, 1010, 1011, 5, 108, 0, 0, 1011, 1012,
        3, 130, 65, 0, 1012, 129, 1, 0, 0, 0, 1013, 1021, 5, 207, 0, 0, 1014, 1015, 5, 150, 0, 0, 1015,
        1018, 3, 40, 20, 0, 1016, 1017, 7, 15, 0, 0, 1017, 1019, 3, 40, 20, 0, 1018, 1016, 1, 0, 0, 0,
        1018, 1019, 1, 0, 0, 0, 1019, 1021, 1, 0, 0, 0, 1020, 1013, 1, 0, 0, 0, 1020, 1014, 1, 0, 0, 0,
        1021, 131, 1, 0, 0, 0, 1022, 1023, 5, 215, 0, 0, 1023, 1024, 5, 209, 0, 0, 1024, 1025, 5, 113,
        0, 0, 1025, 1026, 5, 215, 0, 0, 1026, 1063, 3, 32, 16, 0, 1027, 1034, 3, 196, 98, 0, 1028, 1029,
        5, 8, 0, 0, 1029, 1035, 3, 254, 127, 0, 1030, 1031, 5, 9, 0, 0, 1031, 1035, 3, 254, 127, 0, 1032,
        1033, 5, 10, 0, 0, 1033, 1035, 3, 254, 127, 0, 1034, 1028, 1, 0, 0, 0, 1034, 1030, 1, 0, 0, 0,
        1034, 1032, 1, 0, 0, 0, 1035, 1037, 1, 0, 0, 0, 1036, 1038, 3, 296, 148, 0, 1037, 1036, 1, 0,
        0, 0, 1037, 1038, 1, 0, 0, 0, 1038, 1063, 1, 0, 0, 0, 1039, 1040, 3, 196, 98, 0, 1040, 1041,
        5, 114, 0, 0, 1041, 1042, 3, 134, 67, 0, 1042, 1043, 3, 254, 127, 0, 1043, 1063, 1, 0, 0, 0,
        1044, 1063, 3, 136, 68, 0, 1045, 1046, 3, 184, 92, 0, 1046, 1047, 7, 16, 0, 0, 1047, 1049,
        3, 200, 100, 0, 1048, 1050, 3, 296, 148, 0, 1049, 1048, 1, 0, 0, 0, 1049, 1050, 1, 0, 0, 0, 1050,
        1063, 1, 0, 0, 0, 1051, 1052, 3, 184, 92, 0, 1052, 1053, 5, 110, 0, 0, 1053, 1054, 7, 9, 0, 0,
        1054, 1055, 3, 32, 16, 0, 1055, 1056, 5, 176, 0, 0, 1056, 1057, 3, 198, 99, 0, 1057, 1058,
        7, 17, 0, 0, 1058, 1059, 3, 254, 127, 0, 1059, 1063, 1, 0, 0, 0, 1060, 1063, 3, 148, 74, 0, 1061,
        1063, 3, 322, 161, 0, 1062, 1022, 1, 0, 0, 0, 1062, 1027, 1, 0, 0, 0, 1062, 1039, 1, 0, 0, 0,
        1062, 1044, 1, 0, 0, 0, 1062, 1045, 1, 0, 0, 0, 1062, 1051, 1, 0, 0, 0, 1062, 1060, 1, 0, 0, 0,
        1062, 1061, 1, 0, 0, 0, 1063, 133, 1, 0, 0, 0, 1064, 1065, 7, 18, 0, 0, 1065, 135, 1, 0, 0, 0,
        1066, 1067, 5, 215, 0, 0, 1067, 1068, 3, 138, 69, 0, 1068, 1069, 5, 244, 0, 0, 1069, 1070,
        5, 215, 0, 0, 1070, 1071, 3, 140, 70, 0, 1071, 1072, 5, 113, 0, 0, 1072, 1073, 7, 19, 0, 0, 1073,
        1074, 3, 138, 69, 0, 1074, 1075, 5, 244, 0, 0, 1075, 1076, 7, 19, 0, 0, 1076, 1077, 3, 140,
        70, 0, 1077, 137, 1, 0, 0, 0, 1078, 1080, 3, 144, 72, 0, 1079, 1078, 1, 0, 0, 0, 1080, 1081,
        1, 0, 0, 0, 1081, 1079, 1, 0, 0, 0, 1081, 1082, 1, 0, 0, 0, 1082, 139, 1, 0, 0, 0, 1083, 1085,
        3, 142, 71, 0, 1084, 1083, 1, 0, 0, 0, 1085, 1086, 1, 0, 0, 0, 1086, 1084, 1, 0, 0, 0, 1086, 1087,
        1, 0, 0, 0, 1087, 141, 1, 0, 0, 0, 1088, 1094, 3, 20, 10, 0, 1089, 1094, 3, 38, 19, 0, 1090, 1094,
        5, 212, 0, 0, 1091, 1094, 5, 217, 0, 0, 1092, 1094, 5, 215, 0, 0, 1093, 1088, 1, 0, 0, 0, 1093,
        1089, 1, 0, 0, 0, 1093, 1090, 1, 0, 0, 0, 1093, 1091, 1, 0, 0, 0, 1093, 1092, 1, 0, 0, 0, 1094,
        143, 1, 0, 0, 0, 1095, 1098, 3, 20, 10, 0, 1096, 1098, 3, 146, 73, 0, 1097, 1095, 1, 0, 0, 0,
        1097, 1096, 1, 0, 0, 0, 1098, 145, 1, 0, 0, 0, 1099, 1100, 7, 20, 0, 0, 1100, 147, 1, 0, 0, 0,
        1101, 1102, 5, 41, 0, 0, 1102, 1103, 3, 32, 16, 0, 1103, 1105, 5, 43, 0, 0, 1104, 1106, 3, 150,
        75, 0, 1105, 1104, 1, 0, 0, 0, 1105, 1106, 1, 0, 0, 0, 1106, 1108, 1, 0, 0, 0, 1107, 1109, 5,
        279, 0, 0, 1108, 1107, 1, 0, 0, 0, 1108, 1109, 1, 0, 0, 0, 1109, 1121, 1, 0, 0, 0, 1110, 1111,
        5, 44, 0, 0, 1111, 1112, 5, 215, 0, 0, 1112, 1113, 5, 45, 0, 0, 1113, 1115, 3, 32, 16, 0, 1114,
        1116, 3, 150, 75, 0, 1115, 1114, 1, 0, 0, 0, 1115, 1116, 1, 0, 0, 0, 1116, 1118, 1, 0, 0, 0, 1117,
        1119, 5, 279, 0, 0, 1118, 1117, 1, 0, 0, 0, 1118, 1119, 1, 0, 0, 0, 1119, 1121, 1, 0, 0, 0, 1120,
        1101, 1, 0, 0, 0, 1120, 1110, 1, 0, 0, 0, 1121, 149, 1, 0, 0, 0, 1122, 1123, 5, 176, 0, 0, 1123,
        1124, 3, 154, 77, 0, 1124, 1125, 5, 128, 0, 0, 1125, 1129, 3, 256, 128, 0, 1126, 1128, 3, 152,
        76, 0, 1127, 1126, 1, 0, 0, 0, 1128, 1131, 1, 0, 0, 0, 1129, 1127, 1, 0, 0, 0, 1129, 1130, 1,
        0, 0, 0, 1130, 151, 1, 0, 0, 0, 1131, 1129, 1, 0, 0, 0, 1132, 1133, 5, 216, 0, 0, 1133, 1134,
        3, 154, 77, 0, 1134, 1135, 5, 128, 0, 0, 1135, 1136, 3, 256, 128, 0, 1136, 153, 1, 0, 0, 0, 1137,
        1138, 3, 24, 12, 0, 1138, 155, 1, 0, 0, 0, 1139, 1140, 5, 95, 0, 0, 1140, 1150, 3, 32, 16, 0,
        1141, 1151, 3, 158, 79, 0, 1142, 1148, 3, 162, 81, 0, 1143, 1145, 3, 164, 82, 0, 1144, 1146,
        5, 279, 0, 0, 1145, 1144, 1, 0, 0, 0, 1145, 1146, 1, 0, 0, 0, 1146, 1149, 1, 0, 0, 0, 1147, 1149,
        5, 279, 0, 0, 1148, 1143, 1, 0, 0, 0, 1148, 1147, 1, 0, 0, 0, 1148, 1149, 1, 0, 0, 0, 1149, 1151,
        1, 0, 0, 0, 1150, 1141, 1, 0, 0, 0, 1150, 1142, 1, 0, 0, 0, 1151, 157, 1, 0, 0, 0, 1152, 1153,
        3, 160, 80, 0, 1153, 1155, 5, 92, 0, 0, 1154, 1156, 5, 279, 0, 0, 1155, 1154, 1, 0, 0, 0, 1155,
        1156, 1, 0, 0, 0, 1156, 159, 1, 0, 0, 0, 1157, 1158, 5, 212, 0, 0, 1158, 1159, 3, 32, 16, 0, 1159,
        1160, 5, 244, 0, 0, 1160, 1161, 5, 124, 0, 0, 1161, 1162, 3, 32, 16, 0, 1162, 161, 1, 0, 0, 0,
        1163, 1165, 7, 21, 0, 0, 1164, 1163, 1, 0, 0, 0, 1164, 1165, 1, 0, 0, 0, 1165, 1166, 1, 0, 0,
        0, 1166, 1167, 3, 32, 16, 0, 1167, 1168, 5, 94, 0, 0, 1168, 163, 1, 0, 0, 0, 1169, 1172, 5, 111,
        0, 0, 1170, 1173, 3, 254, 127, 0, 1171, 1173, 3, 166, 83, 0, 1172, 1170, 1, 0, 0, 0, 1172, 1171,
        1, 0, 0, 0, 1173, 165, 1, 0, 0, 0, 1174, 1175, 5, 46, 0, 0, 1175, 1176, 3, 168, 84, 0, 1176, 1177,
        7, 22, 0, 0, 1177, 1178, 5, 40, 0, 0, 1178, 1180, 5, 280, 0, 0, 1179, 1181, 3, 170, 85, 0, 1180,
        1179, 1, 0, 0, 0, 1181, 1182, 1, 0, 0, 0, 1182, 1180, 1, 0, 0, 0, 1182, 1183, 1, 0, 0, 0, 1183,
        1217, 1, 0, 0, 0, 1184, 1189, 3, 184, 92, 0, 1185, 1189, 5, 219, 0, 0, 1186, 1189, 5, 217, 0,
        0, 1187, 1189, 5, 252, 0, 0, 1188, 1184, 1, 0, 0, 0, 1188, 1185, 1, 0, 0, 0, 1188, 1186, 1, 0,
        0, 0, 1188, 1187, 1, 0, 0, 0, 1189, 1190, 1, 0, 0, 0, 1190, 1191, 5, 122, 0, 0, 1191, 1192, 3,
        168, 84, 0, 1192, 1193, 7, 22, 0, 0, 1193, 1194, 5, 154, 0, 0, 1194, 1196, 5, 280, 0, 0, 1195,
        1197, 3, 170, 85, 0, 1196, 1195, 1, 0, 0, 0, 1197, 1198, 1, 0, 0, 0, 1198, 1196, 1, 0, 0, 0, 1198,
        1199, 1, 0, 0, 0, 1199, 1217, 1, 0, 0, 0, 1200, 1205, 3, 184, 92, 0, 1201, 1205, 5, 219, 0, 0,
        1202, 1205, 5, 217, 0, 0, 1203, 1205, 5, 252, 0, 0, 1204, 1200, 1, 0, 0, 0, 1204, 1201, 1, 0,
        0, 0, 1204, 1202, 1, 0, 0, 0, 1204, 1203, 1, 0, 0, 0, 1205, 1206, 1, 0, 0, 0, 1206, 1207, 5, 154,
        0, 0, 1207, 1208, 5, 122, 0, 0, 1208, 1209, 3, 168, 84, 0, 1209, 1210, 7, 22, 0, 0, 1210, 1212,
        5, 280, 0, 0, 1211, 1213, 3, 170, 85, 0, 1212, 1211, 1, 0, 0, 0, 1213, 1214, 1, 0, 0, 0, 1214,
        1212, 1, 0, 0, 0, 1214, 1215, 1, 0, 0, 0, 1215, 1217, 1, 0, 0, 0, 1216, 1174, 1, 0, 0, 0, 1216,
        1188, 1, 0, 0, 0, 1216, 1204, 1, 0, 0, 0, 1217, 167, 1, 0, 0, 0, 1218, 1234, 5, 212, 0, 0, 1219,
        1234, 5, 124, 0, 0, 1220, 1234, 5, 203, 0, 0, 1221, 1222, 7, 23, 0, 0, 1222, 1223, 7, 24, 0,
        0, 1223, 1224, 5, 244, 0, 0, 1224, 1234, 5, 212, 0, 0, 1225, 1226, 5, 159, 0, 0, 1226, 1227,
        7, 24, 0, 0, 1227, 1228, 5, 244, 0, 0, 1228, 1234, 5, 212, 0, 0, 1229, 1230, 5, 160, 0, 0, 1230,
        1231, 7, 24, 0, 0, 1231, 1232, 5, 244, 0, 0, 1232, 1234, 5, 212, 0, 0, 1233, 1218, 1, 0, 0, 0,
        1233, 1219, 1, 0, 0, 0, 1233, 1220, 1, 0, 0, 0, 1233, 1221, 1, 0, 0, 0, 1233, 1225, 1, 0, 0, 0,
        1233, 1229, 1, 0, 0, 0, 1234, 169, 1, 0, 0, 0, 1235, 1238, 3, 172, 86, 0, 1236, 1239, 3, 178,
        89, 0, 1237, 1239, 3, 180, 90, 0, 1238, 1236, 1, 0, 0, 0, 1238, 1237, 1, 0, 0, 0, 1239, 171,
        1, 0, 0, 0, 1240, 1241, 7, 25, 0, 0, 1241, 173, 1, 0, 0, 0, 1242, 1246, 5, 289, 0, 0, 1243, 1244,
        5, 284, 0, 0, 1244, 1246, 5, 284, 0, 0, 1245, 1242, 1, 0, 0, 0, 1245, 1243, 1, 0, 0, 0, 1246,
        175, 1, 0, 0, 0, 1247, 1249, 7, 26, 0, 0, 1248, 1247, 1, 0, 0, 0, 1249, 1250, 1, 0, 0, 0, 1250,
        1248, 1, 0, 0, 0, 1250, 1251, 1, 0, 0, 0, 1251, 177, 1, 0, 0, 0, 1252, 1253, 3, 254, 127, 0, 1253,
        179, 1, 0, 0, 0, 1254, 1258, 3, 184, 92, 0, 1255, 1258, 5, 219, 0, 0, 1256, 1258, 5, 252, 0,
        0, 1257, 1254, 1, 0, 0, 0, 1257, 1255, 1, 0, 0, 0, 1257, 1256, 1, 0, 0, 0, 1258, 1259, 1, 0, 0,
        0, 1259, 1260, 5, 154, 0, 0, 1260, 1261, 5, 122, 0, 0, 1261, 1262, 3, 168, 84, 0, 1262, 1263,
        7, 22, 0, 0, 1263, 1265, 5, 280, 0, 0, 1264, 1266, 3, 182, 91, 0, 1265, 1264, 1, 0, 0, 0, 1266,
        1267, 1, 0, 0, 0, 1267, 1265, 1, 0, 0, 0, 1267, 1268, 1, 0, 0, 0, 1268, 181, 1, 0, 0, 0, 1269,
        1272, 3, 174, 87, 0, 1270, 1273, 3, 178, 89, 0, 1271, 1273, 3, 180, 90, 0, 1272, 1270, 1, 0,
        0, 0, 1272, 1271, 1, 0, 0, 0, 1273, 183, 1, 0, 0, 0, 1274, 1277, 3, 188, 94, 0, 1275, 1276, 7,
        27, 0, 0, 1276, 1278, 3, 208, 104, 0, 1277, 1275, 1, 0, 0, 0, 1277, 1278, 1, 0, 0, 0, 1278, 185,
        1, 0, 0, 0, 1279, 1282, 3, 190, 95, 0, 1280, 1281, 7, 27, 0, 0, 1281, 1283, 3, 208, 104, 0, 1282,
        1280, 1, 0, 0, 0, 1282, 1283, 1, 0, 0, 0, 1283, 187, 1, 0, 0, 0, 1284, 1290, 3, 192, 96, 0, 1285,
        1286, 3, 38, 19, 0, 1286, 1287, 3, 192, 96, 0, 1287, 1289, 1, 0, 0, 0, 1288, 1285, 1, 0, 0, 0,
        1289, 1292, 1, 0, 0, 0, 1290, 1288, 1, 0, 0, 0, 1290, 1291, 1, 0, 0, 0, 1291, 189, 1, 0, 0, 0,
        1292, 1290, 1, 0, 0, 0, 1293, 1299, 3, 194, 97, 0, 1294, 1295, 3, 38, 19, 0, 1295, 1296, 3,
        194, 97, 0, 1296, 1298, 1, 0, 0, 0, 1297, 1294, 1, 0, 0, 0, 1298, 1301, 1, 0, 0, 0, 1299, 1297,
        1, 0, 0, 0, 1299, 1300, 1, 0, 0, 0, 1300, 191, 1, 0, 0, 0, 1301, 1299, 1, 0, 0, 0, 1302, 1304,
        7, 3, 0, 0, 1303, 1305, 3, 20, 10, 0, 1304, 1303, 1, 0, 0, 0, 1305, 1306, 1, 0, 0, 0, 1306, 1304,
        1, 0, 0, 0, 1306, 1307, 1, 0, 0, 0, 1307, 1310, 1, 0, 0, 0, 1308, 1310, 5, 219, 0, 0, 1309, 1302,
        1, 0, 0, 0, 1309, 1308, 1, 0, 0, 0, 1310, 193, 1, 0, 0, 0, 1311, 1313, 7, 3, 0, 0, 1312, 1314,
        3, 28, 14, 0, 1313, 1312, 1, 0, 0, 0, 1314, 1315, 1, 0, 0, 0, 1315, 1313, 1, 0, 0, 0, 1315, 1316,
        1, 0, 0, 0, 1316, 1319, 1, 0, 0, 0, 1317, 1319, 5, 219, 0, 0, 1318, 1311, 1, 0, 0, 0, 1318, 1317,
        1, 0, 0, 0, 1319, 195, 1, 0, 0, 0, 1320, 1321, 3, 198, 99, 0, 1321, 1322, 5, 244, 0, 0, 1322,
        1323, 3, 184, 92, 0, 1323, 197, 1, 0, 0, 0, 1324, 1325, 3, 36, 18, 0, 1325, 199, 1, 0, 0, 0, 1326,
        1328, 3, 38, 19, 0, 1327, 1326, 1, 0, 0, 0, 1327, 1328, 1, 0, 0, 0, 1328, 1329, 1, 0, 0, 0, 1329,
        1330, 3, 34, 17, 0, 1330, 201, 1, 0, 0, 0, 1331, 1333, 3, 38, 19, 0, 1332, 1331, 1, 0, 0, 0, 1332,
        1333, 1, 0, 0, 0, 1333, 1335, 1, 0, 0, 0, 1334, 1336, 7, 19, 0, 0, 1335, 1334, 1, 0, 0, 0, 1335,
        1336, 1, 0, 0, 0, 1336, 1338, 1, 0, 0, 0, 1337, 1339, 3, 28, 14, 0, 1338, 1337, 1, 0, 0, 0, 1339,
        1340, 1, 0, 0, 0, 1340, 1338, 1, 0, 0, 0, 1340, 1341, 1, 0, 0, 0, 1341, 203, 1, 0, 0, 0, 1342,
        1343, 7, 28, 0, 0, 1343, 1344, 3, 32, 16, 0, 1344, 205, 1, 0, 0, 0, 1345, 1346, 5, 124, 0, 0,
        1346, 1353, 3, 32, 16, 0, 1347, 1350, 3, 32, 16, 0, 1348, 1349, 7, 27, 0, 0, 1349, 1351, 3,
        208, 104, 0, 1350, 1348, 1, 0, 0, 0, 1350, 1351, 1, 0, 0, 0, 1351, 1353, 1, 0, 0, 0, 1352, 1345,
        1, 0, 0, 0, 1352, 1347, 1, 0, 0, 0, 1353, 207, 1, 0, 0, 0, 1354, 1357, 3, 210, 105, 0, 1355, 1357,
        3, 226, 113, 0, 1356, 1354, 1, 0, 0, 0, 1356, 1355, 1, 0, 0, 0, 1357, 209, 1, 0, 0, 0, 1358, 1364,
        3, 218, 109, 0, 1359, 1364, 3, 212, 106, 0, 1360, 1364, 3, 220, 110, 0, 1361, 1364, 3, 222,
        111, 0, 1362, 1364, 3, 224, 112, 0, 1363, 1358, 1, 0, 0, 0, 1363, 1359, 1, 0, 0, 0, 1363, 1360,
        1, 0, 0, 0, 1363, 1361, 1, 0, 0, 0, 1363, 1362, 1, 0, 0, 0, 1364, 211, 1, 0, 0, 0, 1365, 1366,
        3, 214, 107, 0, 1366, 213, 1, 0, 0, 0, 1367, 1369, 5, 215, 0, 0, 1368, 1367, 1, 0, 0, 0, 1368,
        1369, 1, 0, 0, 0, 1369, 1372, 1, 0, 0, 0, 1370, 1373, 3, 200, 100, 0, 1371, 1373, 3, 216, 108,
        0, 1372, 1370, 1, 0, 0, 0, 1372, 1371, 1, 0, 0, 0, 1373, 1374, 1, 0, 0, 0, 1374, 1375, 7, 29,
        0, 0, 1375, 215, 1, 0, 0, 0, 1376, 1377, 3, 32, 16, 0, 1377, 217, 1, 0, 0, 0, 1378, 1380, 5, 215,
        0, 0, 1379, 1378, 1, 0, 0, 0, 1379, 1380, 1, 0, 0, 0, 1380, 1381, 1, 0, 0, 0, 1381, 1382, 3, 32,
        16, 0, 1382, 1383, 5, 109, 0, 0, 1383, 1384, 3, 266, 133, 0, 1384, 1385, 3, 254, 127, 0, 1385,
        219, 1, 0, 0, 0, 1386, 1387, 3, 236, 118, 0, 1387, 1388, 3, 242, 121, 0, 1388, 221, 1, 0, 0,
        0, 1389, 1390, 3, 238, 119, 0, 1390, 1391, 3, 244, 122, 0, 1391, 223, 1, 0, 0, 0, 1392, 1393,
        3, 240, 120, 0, 1393, 1394, 3, 246, 123, 0, 1394, 225, 1, 0, 0, 0, 1395, 1396, 5, 122, 0, 0,
        1396, 1397, 3, 168, 84, 0, 1397, 1398, 7, 22, 0, 0, 1398, 1399, 7, 30, 0, 0, 1399, 1401, 5,
        280, 0, 0, 1400, 1402, 3, 228, 114, 0, 1401, 1400, 1, 0, 0, 0, 1402, 1403, 1, 0, 0, 0, 1403,
        1401, 1, 0, 0, 0, 1403, 1404, 1, 0, 0, 0, 1404, 227, 1, 0, 0, 0, 1405, 1406, 3, 176, 88, 0, 1406,
        1407, 3, 230, 115, 0, 1407, 1412, 1, 0, 0, 0, 1408, 1409, 3, 176, 88, 0, 1409, 1410, 3, 234,
        117, 0, 1410, 1412, 1, 0, 0, 0, 1411, 1405, 1, 0, 0, 0, 1411, 1408, 1, 0, 0, 0, 1412, 229, 1,
        0, 0, 0, 1413, 1414, 3, 232, 116, 0, 1414, 231, 1, 0, 0, 0, 1415, 1416, 3, 196, 98, 0, 1416,
        1417, 3, 266, 133, 0, 1417, 1418, 3, 254, 127, 0, 1418, 1427, 1, 0, 0, 0, 1419, 1420, 3, 184,
        92, 0, 1420, 1421, 3, 214, 107, 0, 1421, 1427, 1, 0, 0, 0, 1422, 1423, 3, 196, 98, 0, 1423,
        1424, 7, 31, 0, 0, 1424, 1425, 3, 200, 100, 0, 1425, 1427, 1, 0, 0, 0, 1426, 1415, 1, 0, 0, 0,
        1426, 1419, 1, 0, 0, 0, 1426, 1422, 1, 0, 0, 0, 1427, 233, 1, 0, 0, 0, 1428, 1433, 5, 154, 0,
        0, 1429, 1433, 5, 153, 0, 0, 1430, 1431, 5, 117, 0, 0, 1431, 1433, 5, 118, 0, 0, 1432, 1428,
        1, 0, 0, 0, 1432, 1429, 1, 0, 0, 0, 1432, 1430, 1, 0, 0, 0, 1433, 1434, 1, 0, 0, 0, 1434, 1435,
        5, 122, 0, 0, 1435, 1436, 3, 168, 84, 0, 1436, 1437, 7, 22, 0, 0, 1437, 1439, 5, 280, 0, 0, 1438,
        1440, 3, 228, 114, 0, 1439, 1438, 1, 0, 0, 0, 1440, 1441, 1, 0, 0, 0, 1441, 1439, 1, 0, 0, 0,
        1441, 1442, 1, 0, 0, 0, 1442, 235, 1, 0, 0, 0, 1443, 1444, 7, 32, 0, 0, 1444, 237, 1, 0, 0, 0,
        1445, 1446, 7, 33, 0, 0, 1446, 239, 1, 0, 0, 0, 1447, 1448, 7, 34, 0, 0, 1448, 241, 1, 0, 0, 0,
        1449, 1450, 3, 254, 127, 0, 1450, 243, 1, 0, 0, 0, 1451, 1452, 3, 254, 127, 0, 1452, 245, 1,
        0, 0, 0, 1453, 1478, 3, 40, 20, 0, 1454, 1478, 5, 235, 0, 0, 1455, 1478, 5, 236, 0, 0, 1456,
        1457, 5, 17, 0, 0, 1457, 1458, 5, 274, 0, 0, 1458, 1459, 3, 280, 140, 0, 1459, 1460, 5, 278,
        0, 0, 1460, 1461, 3, 280, 140, 0, 1461, 1462, 5, 278, 0, 0, 1462, 1463, 3, 280, 140, 0, 1463,
        1464, 5, 275, 0, 0, 1464, 1478, 1, 0, 0, 0, 1465, 1466, 5, 18, 0, 0, 1466, 1467, 5, 274, 0, 0,
        1467, 1468, 3, 280, 140, 0, 1468, 1469, 5, 275, 0, 0, 1469, 1478, 1, 0, 0, 0, 1470, 1478, 3,
        196, 98, 0, 1471, 1478, 3, 204, 102, 0, 1472, 1478, 3, 106, 53, 0, 1473, 1474, 5, 274, 0, 0,
        1474, 1475, 3, 254, 127, 0, 1475, 1476, 5, 275, 0, 0, 1476, 1478, 1, 0, 0, 0, 1477, 1453, 1,
        0, 0, 0, 1477, 1454, 1, 0, 0, 0, 1477, 1455, 1, 0, 0, 0, 1477, 1456, 1, 0, 0, 0, 1477, 1465, 1,
        0, 0, 0, 1477, 1470, 1, 0, 0, 0, 1477, 1471, 1, 0, 0, 0, 1477, 1472, 1, 0, 0, 0, 1477, 1473, 1,
        0, 0, 0, 1478, 247, 1, 0, 0, 0, 1479, 1483, 5, 107, 0, 0, 1480, 1482, 3, 250, 125, 0, 1481, 1480,
        1, 0, 0, 0, 1482, 1485, 1, 0, 0, 0, 1483, 1481, 1, 0, 0, 0, 1483, 1484, 1, 0, 0, 0, 1484, 1486,
        1, 0, 0, 0, 1485, 1483, 1, 0, 0, 0, 1486, 1487, 5, 279, 0, 0, 1487, 249, 1, 0, 0, 0, 1488, 1490,
        7, 9, 0, 0, 1489, 1488, 1, 0, 0, 0, 1489, 1490, 1, 0, 0, 0, 1490, 1491, 1, 0, 0, 0, 1491, 1492,
        5, 267, 0, 0, 1492, 1493, 5, 113, 0, 0, 1493, 1494, 3, 252, 126, 0, 1494, 251, 1, 0, 0, 0, 1495,
        1504, 3, 280, 140, 0, 1496, 1499, 3, 270, 135, 0, 1497, 1499, 3, 274, 137, 0, 1498, 1496,
        1, 0, 0, 0, 1498, 1497, 1, 0, 0, 0, 1499, 1500, 1, 0, 0, 0, 1500, 1501, 3, 280, 140, 0, 1501,
        1503, 1, 0, 0, 0, 1502, 1498, 1, 0, 0, 0, 1503, 1506, 1, 0, 0, 0, 1504, 1502, 1, 0, 0, 0, 1504,
        1505, 1, 0, 0, 0, 1505, 253, 1, 0, 0, 0, 1506, 1504, 1, 0, 0, 0, 1507, 1508, 3, 258, 129, 0, 1508,
        1509, 5, 278, 0, 0, 1509, 1510, 3, 284, 142, 0, 1510, 1511, 3, 282, 141, 0, 1511, 1521, 1,
        0, 0, 0, 1512, 1513, 3, 258, 129, 0, 1513, 1514, 5, 278, 0, 0, 1514, 1515, 3, 284, 142, 0, 1515,
        1521, 1, 0, 0, 0, 1516, 1517, 3, 258, 129, 0, 1517, 1518, 3, 282, 141, 0, 1518, 1521, 1, 0,
        0, 0, 1519, 1521, 3, 258, 129, 0, 1520, 1507, 1, 0, 0, 0, 1520, 1512, 1, 0, 0, 0, 1520, 1516,
        1, 0, 0, 0, 1520, 1519, 1, 0, 0, 0, 1521, 255, 1, 0, 0, 0, 1522, 1523, 3, 260, 130, 0, 1523, 1524,
        5, 278, 0, 0, 1524, 1525, 3, 284, 142, 0, 1525, 1526, 3, 282, 141, 0, 1526, 1536, 1, 0, 0, 0,
        1527, 1528, 3, 260, 130, 0, 1528, 1529, 5, 278, 0, 0, 1529, 1530, 3, 284, 142, 0, 1530, 1536,
        1, 0, 0, 0, 1531, 1532, 3, 260, 130, 0, 1532, 1533, 3, 282, 141, 0, 1533, 1536, 1, 0, 0, 0, 1534,
        1536, 3, 260, 130, 0, 1535, 1522, 1, 0, 0, 0, 1535, 1527, 1, 0, 0, 0, 1535, 1531, 1, 0, 0, 0,
        1535, 1534, 1, 0, 0, 0, 1536, 257, 1, 0, 0, 0, 1537, 1540, 3, 260, 130, 0, 1538, 1539, 7, 35,
        0, 0, 1539, 1541, 3, 258, 129, 0, 1540, 1538, 1, 0, 0, 0, 1540, 1541, 1, 0, 0, 0, 1541, 259,
        1, 0, 0, 0, 1542, 1574, 3, 316, 158, 0, 1543, 1574, 3, 292, 146, 0, 1544, 1545, 3, 268, 134,
        0, 1545, 1546, 5, 113, 0, 0, 1546, 1547, 3, 34, 17, 0, 1547, 1574, 1, 0, 0, 0, 1548, 1549, 3,
        268, 134, 0, 1549, 1550, 5, 110, 0, 0, 1550, 1551, 3, 34, 17, 0, 1551, 1574, 1, 0, 0, 0, 1552,
        1553, 3, 268, 134, 0, 1553, 1554, 3, 264, 132, 0, 1554, 1559, 3, 262, 131, 0, 1555, 1556,
        5, 278, 0, 0, 1556, 1558, 3, 262, 131, 0, 1557, 1555, 1, 0, 0, 0, 1558, 1561, 1, 0, 0, 0, 1559,
        1557, 1, 0, 0, 0, 1559, 1560, 1, 0, 0, 0, 1560, 1562, 1, 0, 0, 0, 1561, 1559, 1, 0, 0, 0, 1562,
        1563, 5, 229, 0, 0, 1563, 1564, 3, 262, 131, 0, 1564, 1574, 1, 0, 0, 0, 1565, 1569, 3, 268,
        134, 0, 1566, 1567, 3, 266, 133, 0, 1567, 1568, 3, 268, 134, 0, 1568, 1570, 1, 0, 0, 0, 1569,
        1566, 1, 0, 0, 0, 1569, 1570, 1, 0, 0, 0, 1570, 1574, 1, 0, 0, 0, 1571, 1574, 3, 312, 156, 0,
        1572, 1574, 3, 314, 157, 0, 1573, 1542, 1, 0, 0, 0, 1573, 1543, 1, 0, 0, 0, 1573, 1544, 1, 0,
        0, 0, 1573, 1548, 1, 0, 0, 0, 1573, 1552, 1, 0, 0, 0, 1573, 1565, 1, 0, 0, 0, 1573, 1571, 1, 0,
        0, 0, 1573, 1572, 1, 0, 0, 0, 1574, 261, 1, 0, 0, 0, 1575, 1585, 5, 273, 0, 0, 1576, 1585, 5,
        272, 0, 0, 1577, 1579, 5, 268, 0, 0, 1578, 1580, 3, 84, 42, 0, 1579, 1578, 1, 0, 0, 0, 1579,
        1580, 1, 0, 0, 0, 1580, 1585, 1, 0, 0, 0, 1581, 1585, 5, 271, 0, 0, 1582, 1585, 3, 40, 20, 0,
        1583, 1585, 3, 18, 9, 0, 1584, 1575, 1, 0, 0, 0, 1584, 1576, 1, 0, 0, 0, 1584, 1577, 1, 0, 0,
        0, 1584, 1581, 1, 0, 0, 0, 1584, 1582, 1, 0, 0, 0, 1584, 1583, 1, 0, 0, 0, 1585, 263, 1, 0, 0,
        0, 1586, 1587, 7, 36, 0, 0, 1587, 265, 1, 0, 0, 0, 1588, 1589, 7, 37, 0, 0, 1589, 267, 1, 0, 0,
        0, 1590, 1596, 3, 272, 136, 0, 1591, 1592, 3, 270, 135, 0, 1592, 1593, 3, 272, 136, 0, 1593,
        1595, 1, 0, 0, 0, 1594, 1591, 1, 0, 0, 0, 1595, 1598, 1, 0, 0, 0, 1596, 1594, 1, 0, 0, 0, 1596,
        1597, 1, 0, 0, 0, 1597, 269, 1, 0, 0, 0, 1598, 1596, 1, 0, 0, 0, 1599, 1600, 7, 38, 0, 0, 1600,
        271, 1, 0, 0, 0, 1601, 1607, 3, 276, 138, 0, 1602, 1603, 3, 274, 137, 0, 1603, 1604, 3, 276,
        138, 0, 1604, 1606, 1, 0, 0, 0, 1605, 1602, 1, 0, 0, 0, 1606, 1609, 1, 0, 0, 0, 1607, 1605, 1,
        0, 0, 0, 1607, 1608, 1, 0, 0, 0, 1608, 273, 1, 0, 0, 0, 1609, 1607, 1, 0, 0, 0, 1610, 1611, 7,
        39, 0, 0, 1611, 275, 1, 0, 0, 0, 1612, 1618, 3, 280, 140, 0, 1613, 1614, 3, 278, 139, 0, 1614,
        1615, 3, 280, 140, 0, 1615, 1617, 1, 0, 0, 0, 1616, 1613, 1, 0, 0, 0, 1617, 1620, 1, 0, 0, 0,
        1618, 1616, 1, 0, 0, 0, 1618, 1619, 1, 0, 0, 0, 1619, 277, 1, 0, 0, 0, 1620, 1618, 1, 0, 0, 0,
        1621, 1622, 7, 40, 0, 0, 1622, 279, 1, 0, 0, 0, 1623, 1624, 6, 140, -1, 0, 1624, 1625, 5, 137,
        0, 0, 1625, 1887, 3, 280, 140, 55, 1626, 1627, 5, 292, 0, 0, 1627, 1887, 3, 280, 140, 54, 1628,
        1629, 5, 140, 0, 0, 1629, 1887, 3, 280, 140, 53, 1630, 1631, 5, 11, 0, 0, 1631, 1632, 3, 280,
        140, 0, 1632, 1633, 5, 146, 0, 0, 1633, 1636, 3, 280, 140, 0, 1634, 1635, 5, 192, 0, 0, 1635,
        1637, 3, 84, 42, 0, 1636, 1634, 1, 0, 0, 0, 1636, 1637, 1, 0, 0, 0, 1637, 1887, 1, 0, 0, 0, 1638,
        1639, 5, 196, 0, 0, 1639, 1640, 3, 280, 140, 0, 1640, 1641, 5, 146, 0, 0, 1641, 1644, 3, 280,
        140, 0, 1642, 1643, 5, 192, 0, 0, 1643, 1645, 3, 84, 42, 0, 1644, 1642, 1, 0, 0, 0, 1644, 1645,
        1, 0, 0, 0, 1645, 1887, 1, 0, 0, 0, 1646, 1647, 5, 195, 0, 0, 1647, 1652, 3, 280, 140, 0, 1648,
        1649, 5, 278, 0, 0, 1649, 1651, 3, 280, 140, 0, 1650, 1648, 1, 0, 0, 0, 1651, 1654, 1, 0, 0,
        0, 1652, 1650, 1, 0, 0, 0, 1652, 1653, 1, 0, 0, 0, 1653, 1655, 1, 0, 0, 0, 1654, 1652, 1, 0, 0,
        0, 1655, 1656, 5, 216, 0, 0, 1656, 1657, 3, 280, 140, 50, 1657, 1887, 1, 0, 0, 0, 1658, 1659,
        5, 195, 0, 0, 1659, 1660, 5, 124, 0, 0, 1660, 1887, 3, 32, 16, 0, 1661, 1662, 5, 195, 0, 0, 1662,
        1663, 5, 124, 0, 0, 1663, 1887, 3, 196, 98, 0, 1664, 1665, 5, 217, 0, 0, 1665, 1668, 5, 190,
        0, 0, 1666, 1668, 5, 190, 0, 0, 1667, 1664, 1, 0, 0, 0, 1667, 1666, 1, 0, 0, 0, 1668, 1669, 1,
        0, 0, 0, 1669, 1887, 3, 206, 103, 0, 1670, 1671, 5, 217, 0, 0, 1671, 1672, 5, 190, 0, 0, 1672,
        1887, 3, 196, 98, 0, 1673, 1674, 5, 190, 0, 0, 1674, 1887, 3, 196, 98, 0, 1675, 1678, 5, 268,
        0, 0, 1676, 1679, 5, 283, 0, 0, 1677, 1679, 5, 267, 0, 0, 1678, 1676, 1, 0, 0, 0, 1678, 1677,
        1, 0, 0, 0, 1679, 1682, 1, 0, 0, 0, 1680, 1682, 5, 271, 0, 0, 1681, 1675, 1, 0, 0, 0, 1681, 1680,
        1, 0, 0, 0, 1682, 1683, 1, 0, 0, 0, 1683, 1684, 5, 244, 0, 0, 1684, 1887, 3, 280, 140, 44, 1685,
        1686, 5, 271, 0, 0, 1686, 1687, 5, 244, 0, 0, 1687, 1887, 3, 280, 140, 43, 1688, 1689, 5, 30,
        0, 0, 1689, 1694, 3, 280, 140, 0, 1690, 1691, 5, 278, 0, 0, 1691, 1693, 3, 280, 140, 0, 1692,
        1690, 1, 0, 0, 0, 1693, 1696, 1, 0, 0, 0, 1694, 1692, 1, 0, 0, 0, 1694, 1695, 1, 0, 0, 0, 1695,
        1697, 1, 0, 0, 0, 1696, 1694, 1, 0, 0, 0, 1697, 1698, 7, 35, 0, 0, 1698, 1699, 3, 280, 140, 39,
        1699, 1887, 1, 0, 0, 0, 1700, 1701, 5, 156, 0, 0, 1701, 1887, 3, 280, 140, 37, 1702, 1703,
        5, 12, 0, 0, 1703, 1704, 5, 274, 0, 0, 1704, 1705, 3, 254, 127, 0, 1705, 1706, 5, 275, 0, 0,
        1706, 1887, 1, 0, 0, 0, 1707, 1708, 5, 14, 0, 0, 1708, 1713, 3, 280, 140, 0, 1709, 1710, 5,
        278, 0, 0, 1710, 1712, 3, 280, 140, 0, 1711, 1709, 1, 0, 0, 0, 1712, 1715, 1, 0, 0, 0, 1713,
        1711, 1, 0, 0, 0, 1713, 1714, 1, 0, 0, 0, 1714, 1716, 1, 0, 0, 0, 1715, 1713, 1, 0, 0, 0, 1716,
        1717, 5, 216, 0, 0, 1717, 1718, 3, 280, 140, 35, 1718, 1887, 1, 0, 0, 0, 1719, 1720, 5, 14,
        0, 0, 1720, 1721, 5, 124, 0, 0, 1721, 1887, 3, 196, 98, 0, 1722, 1723, 5, 13, 0, 0, 1723, 1728,
        3, 280, 140, 0, 1724, 1725, 5, 278, 0, 0, 1725, 1727, 3, 280, 140, 0, 1726, 1724, 1, 0, 0, 0,
        1727, 1730, 1, 0, 0, 0, 1728, 1726, 1, 0, 0, 0, 1728, 1729, 1, 0, 0, 0, 1729, 1731, 1, 0, 0, 0,
        1730, 1728, 1, 0, 0, 0, 1731, 1732, 5, 216, 0, 0, 1732, 1733, 3, 280, 140, 33, 1733, 1887,
        1, 0, 0, 0, 1734, 1735, 5, 13, 0, 0, 1735, 1736, 5, 124, 0, 0, 1736, 1887, 3, 196, 98, 0, 1737,
        1738, 5, 217, 0, 0, 1738, 1739, 5, 221, 0, 0, 1739, 1740, 5, 241, 0, 0, 1740, 1887, 3, 280,
        140, 31, 1741, 1742, 5, 212, 0, 0, 1742, 1743, 5, 224, 0, 0, 1743, 1744, 5, 241, 0, 0, 1744,
        1887, 3, 280, 140, 30, 1745, 1746, 5, 212, 0, 0, 1746, 1747, 5, 209, 0, 0, 1747, 1748, 5, 241,
        0, 0, 1748, 1887, 3, 280, 140, 29, 1749, 1750, 5, 17, 0, 0, 1750, 1751, 5, 274, 0, 0, 1751,
        1752, 3, 280, 140, 0, 1752, 1753, 5, 278, 0, 0, 1753, 1754, 3, 280, 140, 0, 1754, 1755, 5,
        278, 0, 0, 1755, 1756, 3, 280, 140, 0, 1756, 1757, 5, 275, 0, 0, 1757, 1887, 1, 0, 0, 0, 1758,
        1759, 5, 18, 0, 0, 1759, 1760, 5, 274, 0, 0, 1760, 1761, 3, 280, 140, 0, 1761, 1762, 5, 275,
        0, 0, 1762, 1887, 1, 0, 0, 0, 1763, 1764, 3, 246, 123, 0, 1764, 1765, 7, 41, 0, 0, 1765, 1766,
        3, 280, 140, 0, 1766, 1767, 3, 44, 22, 0, 1767, 1887, 1, 0, 0, 0, 1768, 1769, 5, 191, 0, 0, 1769,
        1774, 3, 280, 140, 0, 1770, 1771, 5, 278, 0, 0, 1771, 1773, 3, 280, 140, 0, 1772, 1770, 1,
        0, 0, 0, 1773, 1776, 1, 0, 0, 0, 1774, 1772, 1, 0, 0, 0, 1774, 1775, 1, 0, 0, 0, 1775, 1777, 1,
        0, 0, 0, 1776, 1774, 1, 0, 0, 0, 1777, 1778, 5, 216, 0, 0, 1778, 1779, 3, 280, 140, 25, 1779,
        1887, 1, 0, 0, 0, 1780, 1781, 5, 193, 0, 0, 1781, 1786, 3, 280, 140, 0, 1782, 1783, 5, 278,
        0, 0, 1783, 1785, 3, 280, 140, 0, 1784, 1782, 1, 0, 0, 0, 1785, 1788, 1, 0, 0, 0, 1786, 1784,
        1, 0, 0, 0, 1786, 1787, 1, 0, 0, 0, 1787, 1789, 1, 0, 0, 0, 1788, 1786, 1, 0, 0, 0, 1789, 1790,
        5, 216, 0, 0, 1790, 1791, 3, 280, 140, 24, 1791, 1887, 1, 0, 0, 0, 1792, 1793, 5, 15, 0, 0, 1793,
        1795, 3, 254, 127, 0, 1794, 1796, 3, 290, 145, 0, 1795, 1794, 1, 0, 0, 0, 1795, 1796, 1, 0,
        0, 0, 1796, 1887, 1, 0, 0, 0, 1797, 1798, 5, 217, 0, 0, 1798, 1799, 5, 190, 0, 0, 1799, 1800,
        5, 210, 0, 0, 1800, 1809, 5, 220, 0, 0, 1801, 1803, 5, 212, 0, 0, 1802, 1801, 1, 0, 0, 0, 1802,
        1803, 1, 0, 0, 0, 1803, 1804, 1, 0, 0, 0, 1804, 1810, 5, 224, 0, 0, 1805, 1807, 5, 217, 0, 0,
        1806, 1805, 1, 0, 0, 0, 1806, 1807, 1, 0, 0, 0, 1807, 1808, 1, 0, 0, 0, 1808, 1810, 5, 221, 0,
        0, 1809, 1802, 1, 0, 0, 0, 1809, 1806, 1, 0, 0, 0, 1810, 1811, 1, 0, 0, 0, 1811, 1812, 5, 211,
        0, 0, 1812, 1887, 3, 254, 127, 0, 1813, 1815, 3, 18, 9, 0, 1814, 1813, 1, 0, 0, 0, 1815, 1816,
        1, 0, 0, 0, 1816, 1814, 1, 0, 0, 0, 1816, 1817, 1, 0, 0, 0, 1817, 1818, 1, 0, 0, 0, 1818, 1819,
        5, 15, 0, 0, 1819, 1821, 3, 254, 127, 0, 1820, 1822, 3, 290, 145, 0, 1821, 1820, 1, 0, 0, 0,
        1821, 1822, 1, 0, 0, 0, 1822, 1887, 1, 0, 0, 0, 1823, 1824, 5, 16, 0, 0, 1824, 1825, 7, 42, 0,
        0, 1825, 1826, 5, 244, 0, 0, 1826, 1828, 3, 254, 127, 0, 1827, 1829, 3, 290, 145, 0, 1828,
        1827, 1, 0, 0, 0, 1828, 1829, 1, 0, 0, 0, 1829, 1887, 1, 0, 0, 0, 1830, 1832, 3, 18, 9, 0, 1831,
        1830, 1, 0, 0, 0, 1832, 1833, 1, 0, 0, 0, 1833, 1831, 1, 0, 0, 0, 1833, 1834, 1, 0, 0, 0, 1834,
        1835, 1, 0, 0, 0, 1835, 1836, 5, 16, 0, 0, 1836, 1837, 7, 42, 0, 0, 1837, 1838, 5, 244, 0, 0,
        1838, 1840, 3, 254, 127, 0, 1839, 1841, 3, 290, 145, 0, 1840, 1839, 1, 0, 0, 0, 1840, 1841,
        1, 0, 0, 0, 1841, 1887, 1, 0, 0, 0, 1842, 1845, 3, 300, 150, 0, 1843, 1845, 3, 302, 151, 0, 1844,
        1842, 1, 0, 0, 0, 1844, 1843, 1, 0, 0, 0, 1845, 1846, 1, 0, 0, 0, 1846, 1847, 3, 198, 99, 0, 1847,
        1848, 3, 304, 152, 0, 1848, 1887, 1, 0, 0, 0, 1849, 1852, 3, 300, 150, 0, 1850, 1852, 3, 302,
        151, 0, 1851, 1849, 1, 0, 0, 0, 1851, 1850, 1, 0, 0, 0, 1852, 1855, 1, 0, 0, 0, 1853, 1856, 3,
        204, 102, 0, 1854, 1856, 3, 196, 98, 0, 1855, 1853, 1, 0, 0, 0, 1855, 1854, 1, 0, 0, 0, 1856,
        1857, 1, 0, 0, 0, 1857, 1858, 5, 150, 0, 0, 1858, 1859, 3, 32, 16, 0, 1859, 1860, 5, 240, 0,
        0, 1860, 1862, 3, 32, 16, 0, 1861, 1863, 5, 279, 0, 0, 1862, 1861, 1, 0, 0, 0, 1862, 1863, 1,
        0, 0, 0, 1863, 1887, 1, 0, 0, 0, 1864, 1866, 5, 268, 0, 0, 1865, 1867, 3, 84, 42, 0, 1866, 1865,
        1, 0, 0, 0, 1866, 1867, 1, 0, 0, 0, 1867, 1887, 1, 0, 0, 0, 1868, 1887, 5, 235, 0, 0, 1869, 1887,
        3, 18, 9, 0, 1870, 1887, 3, 204, 102, 0, 1871, 1887, 3, 196, 98, 0, 1872, 1887, 3, 184, 92,
        0, 1873, 1887, 3, 32, 16, 0, 1874, 1887, 3, 106, 53, 0, 1875, 1887, 5, 271, 0, 0, 1876, 1887,
        5, 272, 0, 0, 1877, 1887, 5, 273, 0, 0, 1878, 1887, 3, 40, 20, 0, 1879, 1887, 5, 249, 0, 0, 1880,
        1887, 5, 230, 0, 0, 1881, 1887, 5, 219, 0, 0, 1882, 1883, 5, 274, 0, 0, 1883, 1884, 3, 254,
        127, 0, 1884, 1885, 5, 275, 0, 0, 1885, 1887, 1, 0, 0, 0, 1886, 1623, 1, 0, 0, 0, 1886, 1626,
        1, 0, 0, 0, 1886, 1628, 1, 0, 0, 0, 1886, 1630, 1, 0, 0, 0, 1886, 1638, 1, 0, 0, 0, 1886, 1646,
        1, 0, 0, 0, 1886, 1658, 1, 0, 0, 0, 1886, 1661, 1, 0, 0, 0, 1886, 1667, 1, 0, 0, 0, 1886, 1670,
        1, 0, 0, 0, 1886, 1673, 1, 0, 0, 0, 1886, 1681, 1, 0, 0, 0, 1886, 1685, 1, 0, 0, 0, 1886, 1688,
        1, 0, 0, 0, 1886, 1700, 1, 0, 0, 0, 1886, 1702, 1, 0, 0, 0, 1886, 1707, 1, 0, 0, 0, 1886, 1719,
        1, 0, 0, 0, 1886, 1722, 1, 0, 0, 0, 1886, 1734, 1, 0, 0, 0, 1886, 1737, 1, 0, 0, 0, 1886, 1741,
        1, 0, 0, 0, 1886, 1745, 1, 0, 0, 0, 1886, 1749, 1, 0, 0, 0, 1886, 1758, 1, 0, 0, 0, 1886, 1763,
        1, 0, 0, 0, 1886, 1768, 1, 0, 0, 0, 1886, 1780, 1, 0, 0, 0, 1886, 1792, 1, 0, 0, 0, 1886, 1797,
        1, 0, 0, 0, 1886, 1814, 1, 0, 0, 0, 1886, 1823, 1, 0, 0, 0, 1886, 1831, 1, 0, 0, 0, 1886, 1844,
        1, 0, 0, 0, 1886, 1851, 1, 0, 0, 0, 1886, 1864, 1, 0, 0, 0, 1886, 1868, 1, 0, 0, 0, 1886, 1869,
        1, 0, 0, 0, 1886, 1870, 1, 0, 0, 0, 1886, 1871, 1, 0, 0, 0, 1886, 1872, 1, 0, 0, 0, 1886, 1873,
        1, 0, 0, 0, 1886, 1874, 1, 0, 0, 0, 1886, 1875, 1, 0, 0, 0, 1886, 1876, 1, 0, 0, 0, 1886, 1877,
        1, 0, 0, 0, 1886, 1878, 1, 0, 0, 0, 1886, 1879, 1, 0, 0, 0, 1886, 1880, 1, 0, 0, 0, 1886, 1881,
        1, 0, 0, 0, 1886, 1882, 1, 0, 0, 0, 1887, 1910, 1, 0, 0, 0, 1888, 1891, 10, 38, 0, 0, 1889, 1890,
        5, 278, 0, 0, 1890, 1892, 3, 280, 140, 0, 1891, 1889, 1, 0, 0, 0, 1892, 1893, 1, 0, 0, 0, 1893,
        1891, 1, 0, 0, 0, 1893, 1894, 1, 0, 0, 0, 1894, 1895, 1, 0, 0, 0, 1895, 1896, 7, 35, 0, 0, 1896,
        1897, 3, 280, 140, 39, 1897, 1909, 1, 0, 0, 0, 1898, 1899, 10, 42, 0, 0, 1899, 1909, 3, 282,
        141, 0, 1900, 1901, 10, 41, 0, 0, 1901, 1902, 5, 278, 0, 0, 1902, 1903, 3, 284, 142, 0, 1903,
        1904, 3, 282, 141, 0, 1904, 1909, 1, 0, 0, 0, 1905, 1906, 10, 40, 0, 0, 1906, 1907, 5, 278,
        0, 0, 1907, 1909, 3, 284, 142, 0, 1908, 1888, 1, 0, 0, 0, 1908, 1898, 1, 0, 0, 0, 1908, 1900,
        1, 0, 0, 0, 1908, 1905, 1, 0, 0, 0, 1909, 1912, 1, 0, 0, 0, 1910, 1908, 1, 0, 0, 0, 1910, 1911,
        1, 0, 0, 0, 1911, 281, 1, 0, 0, 0, 1912, 1910, 1, 0, 0, 0, 1913, 1914, 7, 43, 0, 0, 1914, 1915,
        5, 123, 0, 0, 1915, 1916, 5, 268, 0, 0, 1916, 1917, 5, 169, 0, 0, 1917, 283, 1, 0, 0, 0, 1918,
        1925, 3, 286, 143, 0, 1919, 1925, 3, 288, 144, 0, 1920, 1921, 3, 286, 143, 0, 1921, 1922,
        5, 216, 0, 0, 1922, 1923, 3, 288, 144, 0, 1923, 1925, 1, 0, 0, 0, 1924, 1918, 1, 0, 0, 0, 1924,
        1919, 1, 0, 0, 0, 1924, 1920, 1, 0, 0, 0, 1925, 285, 1, 0, 0, 0, 1926, 1927, 5, 20, 0, 0, 1927,
        1928, 3, 254, 127, 0, 1928, 287, 1, 0, 0, 0, 1929, 1930, 5, 21, 0, 0, 1930, 1931, 3, 254, 127,
        0, 1931, 289, 1, 0, 0, 0, 1932, 1933, 5, 4, 0, 0, 1933, 1936, 3, 254, 127, 0, 1934, 1936, 3,
        294, 147, 0, 1935, 1932, 1, 0, 0, 0, 1935, 1934, 1, 0, 0, 0, 1936, 291, 1, 0, 0, 0, 1937, 1938,
        5, 7, 0, 0, 1938, 1939, 3, 294, 147, 0, 1939, 293, 1, 0, 0, 0, 1940, 1941, 5, 150, 0, 0, 1941,
        1957, 3, 246, 123, 0, 1942, 1943, 5, 244, 0, 0, 1943, 1944, 3, 246, 123, 0, 1944, 1945, 5,
        146, 0, 0, 1945, 1946, 3, 246, 123, 0, 1946, 1957, 1, 0, 0, 0, 1947, 1948, 5, 244, 0, 0, 1948,
        1949, 3, 246, 123, 0, 1949, 1950, 5, 148, 0, 0, 1950, 1951, 3, 246, 123, 0, 1951, 1957, 1,
        0, 0, 0, 1952, 1953, 5, 146, 0, 0, 1953, 1957, 3, 246, 123, 0, 1954, 1955, 5, 148, 0, 0, 1955,
        1957, 3, 246, 123, 0, 1956, 1940, 1, 0, 0, 0, 1956, 1942, 1, 0, 0, 0, 1956, 1947, 1, 0, 0, 0,
        1956, 1952, 1, 0, 0, 0, 1956, 1954, 1, 0, 0, 0, 1957, 295, 1, 0, 0, 0, 1958, 1959, 5, 150, 0,
        0, 1959, 1975, 3, 298, 149, 0, 1960, 1961, 5, 146, 0, 0, 1961, 1975, 3, 298, 149, 0, 1962,
        1963, 5, 148, 0, 0, 1963, 1975, 3, 298, 149, 0, 1964, 1965, 5, 244, 0, 0, 1965, 1966, 3, 298,
        149, 0, 1966, 1967, 5, 146, 0, 0, 1967, 1968, 3, 298, 149, 0, 1968, 1975, 1, 0, 0, 0, 1969,
        1970, 5, 244, 0, 0, 1970, 1971, 3, 298, 149, 0, 1971, 1972, 5, 148, 0, 0, 1972, 1973, 3, 298,
        149, 0, 1973, 1975, 1, 0, 0, 0, 1974, 1958, 1, 0, 0, 0, 1974, 1960, 1, 0, 0, 0, 1974, 1962, 1,
        0, 0, 0, 1974, 1964, 1, 0, 0, 0, 1974, 1969, 1, 0, 0, 0, 1975, 297, 1, 0, 0, 0, 1976, 1981, 3,
        40, 20, 0, 1977, 1981, 5, 235, 0, 0, 1978, 1981, 5, 236, 0, 0, 1979, 1981, 3, 196, 98, 0, 1980,
        1976, 1, 0, 0, 0, 1980, 1977, 1, 0, 0, 0, 1980, 1978, 1, 0, 0, 0, 1980, 1979, 1, 0, 0, 0, 1981,
        299, 1, 0, 0, 0, 1982, 1983, 5, 217, 0, 0, 1983, 1989, 5, 190, 0, 0, 1984, 1989, 5, 190, 0, 0,
        1985, 1989, 5, 13, 0, 0, 1986, 1989, 5, 14, 0, 0, 1987, 1989, 5, 195, 0, 0, 1988, 1982, 1, 0,
        0, 0, 1988, 1984, 1, 0, 0, 0, 1988, 1985, 1, 0, 0, 0, 1988, 1986, 1, 0, 0, 0, 1988, 1987, 1, 0,
        0, 0, 1989, 301, 1, 0, 0, 0, 1990, 1991, 7, 44, 0, 0, 1991, 303, 1, 0, 0, 0, 1992, 1996, 5, 233,
        0, 0, 1993, 1997, 3, 306, 153, 0, 1994, 1997, 3, 308, 154, 0, 1995, 1997, 3, 310, 155, 0, 1996,
        1993, 1, 0, 0, 0, 1996, 1994, 1, 0, 0, 0, 1996, 1995, 1, 0, 0, 0, 1997, 1998, 1, 0, 0, 0, 1998,
        1999, 5, 279, 0, 0, 1999, 2003, 1, 0, 0, 0, 2000, 2001, 5, 244, 0, 0, 2001, 2003, 3, 306, 153,
        0, 2002, 1992, 1, 0, 0, 0, 2002, 2000, 1, 0, 0, 0, 2003, 305, 1, 0, 0, 0, 2004, 2005, 5, 124,
        0, 0, 2005, 2008, 3, 32, 16, 0, 2006, 2007, 7, 27, 0, 0, 2007, 2009, 3, 208, 104, 0, 2008, 2006,
        1, 0, 0, 0, 2008, 2009, 1, 0, 0, 0, 2009, 307, 1, 0, 0, 0, 2010, 2011, 5, 212, 0, 0, 2011, 2012,
        3, 32, 16, 0, 2012, 2013, 5, 150, 0, 0, 2013, 2014, 3, 32, 16, 0, 2014, 2015, 5, 240, 0, 0, 2015,
        2016, 3, 32, 16, 0, 2016, 309, 1, 0, 0, 0, 2017, 2018, 5, 212, 0, 0, 2018, 2019, 3, 32, 16, 0,
        2019, 2020, 5, 220, 0, 0, 2020, 2021, 5, 276, 0, 0, 2021, 2026, 3, 32, 16, 0, 2022, 2023, 5,
        278, 0, 0, 2023, 2025, 3, 32, 16, 0, 2024, 2022, 1, 0, 0, 0, 2025, 2028, 1, 0, 0, 0, 2026, 2024,
        1, 0, 0, 0, 2026, 2027, 1, 0, 0, 0, 2027, 2029, 1, 0, 0, 0, 2028, 2026, 1, 0, 0, 0, 2029, 2030,
        5, 216, 0, 0, 2030, 2031, 3, 32, 16, 0, 2031, 2032, 5, 277, 0, 0, 2032, 311, 1, 0, 0, 0, 2033,
        2034, 3, 280, 140, 0, 2034, 2035, 7, 45, 0, 0, 2035, 2060, 1, 0, 0, 0, 2036, 2037, 3, 280, 140,
        0, 2037, 2038, 7, 46, 0, 0, 2038, 2039, 5, 268, 0, 0, 2039, 2040, 5, 167, 0, 0, 2040, 2060,
        1, 0, 0, 0, 2041, 2042, 3, 280, 140, 0, 2042, 2043, 7, 47, 0, 0, 2043, 2044, 3, 18, 9, 0, 2044,
        2060, 1, 0, 0, 0, 2045, 2046, 3, 280, 140, 0, 2046, 2047, 7, 48, 0, 0, 2047, 2048, 3, 18, 9,
        0, 2048, 2060, 1, 0, 0, 0, 2049, 2050, 3, 280, 140, 0, 2050, 2051, 7, 49, 0, 0, 2051, 2052,
        3, 18, 9, 0, 2052, 2060, 1, 0, 0, 0, 2053, 2054, 3, 184, 92, 0, 2054, 2055, 5, 92, 0, 0, 2055,
        2060, 1, 0, 0, 0, 2056, 2057, 3, 280, 140, 0, 2057, 2058, 5, 94, 0, 0, 2058, 2060, 1, 0, 0, 0,
        2059, 2033, 1, 0, 0, 0, 2059, 2036, 1, 0, 0, 0, 2059, 2041, 1, 0, 0, 0, 2059, 2045, 1, 0, 0, 0,
        2059, 2049, 1, 0, 0, 0, 2059, 2053, 1, 0, 0, 0, 2059, 2056, 1, 0, 0, 0, 2060, 313, 1, 0, 0, 0,
        2061, 2062, 5, 237, 0, 0, 2062, 2063, 3, 32, 16, 0, 2063, 2064, 5, 93, 0, 0, 2064, 2070, 1,
        0, 0, 0, 2065, 2066, 5, 237, 0, 0, 2066, 2067, 3, 32, 16, 0, 2067, 2068, 5, 94, 0, 0, 2068, 2070,
        1, 0, 0, 0, 2069, 2061, 1, 0, 0, 0, 2069, 2065, 1, 0, 0, 0, 2070, 315, 1, 0, 0, 0, 2071, 2072,
        3, 184, 92, 0, 2072, 2073, 3, 34, 17, 0, 2073, 2074, 5, 110, 0, 0, 2074, 2084, 1, 0, 0, 0, 2075,
        2076, 3, 184, 92, 0, 2076, 2077, 3, 34, 17, 0, 2077, 2078, 5, 113, 0, 0, 2078, 2084, 1, 0, 0,
        0, 2079, 2080, 3, 184, 92, 0, 2080, 2081, 5, 113, 0, 0, 2081, 2082, 3, 34, 17, 0, 2082, 2084,
        1, 0, 0, 0, 2083, 2071, 1, 0, 0, 0, 2083, 2075, 1, 0, 0, 0, 2083, 2079, 1, 0, 0, 0, 2084, 317,
        1, 0, 0, 0, 2085, 2086, 5, 106, 0, 0, 2086, 2094, 3, 32, 16, 0, 2087, 2089, 5, 178, 0, 0, 2088,
        2090, 5, 267, 0, 0, 2089, 2088, 1, 0, 0, 0, 2090, 2091, 1, 0, 0, 0, 2091, 2089, 1, 0, 0, 0, 2091,
        2092, 1, 0, 0, 0, 2092, 2093, 1, 0, 0, 0, 2093, 2095, 5, 275, 0, 0, 2094, 2087, 1, 0, 0, 0, 2094,
        2095, 1, 0, 0, 0, 2095, 2097, 1, 0, 0, 0, 2096, 2098, 5, 281, 0, 0, 2097, 2096, 1, 0, 0, 0, 2097,
        2098, 1, 0, 0, 0, 2098, 319, 1, 0, 0, 0, 2099, 2100, 5, 272, 0, 0, 2100, 321, 1, 0, 0, 0, 2101,
        2102, 3, 254, 127, 0, 2102, 2103, 5, 116, 0, 0, 2103, 2104, 3, 254, 127, 0, 2104, 2105, 5,
        278, 0, 0, 2105, 2108, 5, 26, 0, 0, 2106, 2109, 3, 324, 162, 0, 2107, 2109, 3, 326, 163, 0,
        2108, 2106, 1, 0, 0, 0, 2108, 2107, 1, 0, 0, 0, 2109, 2111, 1, 0, 0, 0, 2110, 2112, 3, 334, 167,
        0, 2111, 2110, 1, 0, 0, 0, 2111, 2112, 1, 0, 0, 0, 2112, 323, 1, 0, 0, 0, 2113, 2114, 3, 332,
        166, 0, 2114, 325, 1, 0, 0, 0, 2115, 2116, 5, 280, 0, 0, 2116, 2118, 3, 328, 164, 0, 2117, 2119,
        5, 279, 0, 0, 2118, 2117, 1, 0, 0, 0, 2118, 2119, 1, 0, 0, 0, 2119, 327, 1, 0, 0, 0, 2120, 2124,
        3, 330, 165, 0, 2121, 2123, 3, 330, 165, 0, 2122, 2121, 1, 0, 0, 0, 2123, 2126, 1, 0, 0, 0, 2124,
        2122, 1, 0, 0, 0, 2124, 2125, 1, 0, 0, 0, 2125, 329, 1, 0, 0, 0, 2126, 2124, 1, 0, 0, 0, 2127,
        2128, 5, 292, 0, 0, 2128, 2130, 3, 332, 166, 0, 2129, 2131, 7, 50, 0, 0, 2130, 2129, 1, 0, 0,
        0, 2130, 2131, 1, 0, 0, 0, 2131, 331, 1, 0, 0, 0, 2132, 2147, 5, 198, 0, 0, 2133, 2134, 5, 35,
        0, 0, 2134, 2147, 3, 254, 127, 0, 2135, 2136, 5, 34, 0, 0, 2136, 2137, 7, 51, 0, 0, 2137, 2147,
        3, 254, 127, 0, 2138, 2139, 5, 33, 0, 0, 2139, 2147, 3, 332, 166, 0, 2140, 2141, 5, 21, 0, 0,
        2141, 2147, 3, 254, 127, 0, 2142, 2143, 5, 123, 0, 0, 2143, 2144, 5, 268, 0, 0, 2144, 2145,
        5, 169, 0, 0, 2145, 2147, 7, 52, 0, 0, 2146, 2132, 1, 0, 0, 0, 2146, 2133, 1, 0, 0, 0, 2146, 2135,
        1, 0, 0, 0, 2146, 2138, 1, 0, 0, 0, 2146, 2140, 1, 0, 0, 0, 2146, 2142, 1, 0, 0, 0, 2147, 333,
        1, 0, 0, 0, 2148, 2149, 5, 19, 0, 0, 2149, 2151, 3, 254, 127, 0, 2150, 2152, 5, 199, 0, 0, 2151,
        2150, 1, 0, 0, 0, 2151, 2152, 1, 0, 0, 0, 2152, 335, 1, 0, 0, 0, 243, 342, 344, 355, 360, 369,
        373, 382, 386, 389, 394, 397, 401, 406, 419, 423, 427, 432, 441, 446, 451, 457, 463, 469,
        474, 480, 486, 495, 497, 500, 505, 510, 516, 522, 528, 533, 539, 545, 554, 556, 560, 563,
        568, 573, 579, 585, 591, 596, 602, 608, 610, 618, 627, 636, 653, 656, 659, 664, 669, 674,
        678, 682, 685, 691, 695, 703, 706, 709, 717, 724, 731, 740, 747, 755, 763, 766, 773, 779,
        790, 799, 803, 807, 811, 818, 824, 829, 834, 842, 848, 851, 866, 870, 874, 877, 880, 888,
        895, 899, 907, 911, 919, 928, 936, 939, 944, 948, 950, 955, 962, 968, 971, 974, 979, 983,
        985, 991, 1008, 1018, 1020, 1034, 1037, 1049, 1062, 1081, 1086, 1093, 1097, 1105, 1108,
        1115, 1118, 1120, 1129, 1145, 1148, 1150, 1155, 1164, 1172, 1182, 1188, 1198, 1204, 1214,
        1216, 1233, 1238, 1245, 1250, 1257, 1267, 1272, 1277, 1282, 1290, 1299, 1306, 1309, 1315,
        1318, 1327, 1332, 1335, 1340, 1350, 1352, 1356, 1363, 1368, 1372, 1379, 1403, 1411, 1426,
        1432, 1441, 1477, 1483, 1489, 1498, 1504, 1520, 1535, 1540, 1559, 1569, 1573, 1579, 1584,
        1596, 1607, 1618, 1636, 1644, 1652, 1667, 1678, 1681, 1694, 1713, 1728, 1774, 1786, 1795,
        1802, 1806, 1809, 1816, 1821, 1828, 1833, 1840, 1844, 1851, 1855, 1862, 1866, 1886, 1893,
        1908, 1910, 1924, 1935, 1956, 1974, 1980, 1988, 1996, 2002, 2008, 2026, 2059, 2069, 2083,
        2091, 2094, 2097, 2108, 2111, 2118, 2124, 2130, 2146, 2151];
    static __ATN;
    static get _ATN() {
        if (!RegelSpraakParser.__ATN) {
            RegelSpraakParser.__ATN = new antlr4_1.ATNDeserializer().deserialize(RegelSpraakParser._serializedATN);
        }
        return RegelSpraakParser.__ATN;
    }
    static DecisionsToDFA = RegelSpraakParser._ATN.decisionToState.map((ds, index) => new antlr4_1.DFA(ds, index));
}
exports.default = RegelSpraakParser;
class RegelSpraakDocumentContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EOF() {
        return this.getToken(RegelSpraakParser.EOF, 0);
    }
    definitie_list() {
        return this.getTypedRuleContexts(DefinitieContext);
    }
    definitie(i) {
        return this.getTypedRuleContext(DefinitieContext, i);
    }
    regel_list() {
        return this.getTypedRuleContexts(RegelContext);
    }
    regel(i) {
        return this.getTypedRuleContext(RegelContext, i);
    }
    regelGroep_list() {
        return this.getTypedRuleContexts(RegelGroepContext);
    }
    regelGroep(i) {
        return this.getTypedRuleContext(RegelGroepContext, i);
    }
    beslistabel_list() {
        return this.getTypedRuleContexts(BeslistabelContext);
    }
    beslistabel(i) {
        return this.getTypedRuleContext(BeslistabelContext, i);
    }
    consistentieregel_list() {
        return this.getTypedRuleContexts(ConsistentieregelContext);
    }
    consistentieregel(i) {
        return this.getTypedRuleContext(ConsistentieregelContext, i);
    }
    eenheidsysteemDefinition_list() {
        return this.getTypedRuleContexts(EenheidsysteemDefinitionContext);
    }
    eenheidsysteemDefinition(i) {
        return this.getTypedRuleContext(EenheidsysteemDefinitionContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regelSpraakDocument;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelSpraakDocument) {
            return visitor.visitRegelSpraakDocument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelSpraakDocumentContext = RegelSpraakDocumentContext;
class DefinitieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    objectTypeDefinition() {
        return this.getTypedRuleContext(ObjectTypeDefinitionContext, 0);
    }
    domeinDefinition() {
        return this.getTypedRuleContext(DomeinDefinitionContext, 0);
    }
    parameterDefinition() {
        return this.getTypedRuleContext(ParameterDefinitionContext, 0);
    }
    dimensieDefinition() {
        return this.getTypedRuleContext(DimensieDefinitionContext, 0);
    }
    feitTypeDefinition() {
        return this.getTypedRuleContext(FeitTypeDefinitionContext, 0);
    }
    dagsoortDefinition() {
        return this.getTypedRuleContext(DagsoortDefinitionContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_definitie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDefinitie) {
            return visitor.visitDefinitie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefinitieContext = DefinitieContext;
class BeslistabelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    BESLISTABEL() {
        return this.getToken(RegelSpraakParser.BESLISTABEL, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    beslistabelTable() {
        return this.getTypedRuleContext(BeslistabelTableContext, 0);
    }
    regelVersie() {
        return this.getTypedRuleContext(RegelVersieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabel) {
            return visitor.visitBeslistabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelContext = BeslistabelContext;
class BeslistabelTableContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    beslistabelHeader() {
        return this.getTypedRuleContext(BeslistabelHeaderContext, 0);
    }
    beslistabelSeparator() {
        return this.getTypedRuleContext(BeslistabelSeparatorContext, 0);
    }
    beslistabelRow_list() {
        return this.getTypedRuleContexts(BeslistabelRowContext);
    }
    beslistabelRow(i) {
        return this.getTypedRuleContext(BeslistabelRowContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabelTable;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabelTable) {
            return visitor.visitBeslistabelTable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelTableContext = BeslistabelTableContext;
class BeslistabelHeaderContext extends antlr4_1.ParserRuleContext {
    _resultColumn;
    _beslistabelColumnText;
    _conditionColumns = [];
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PIPE_list() {
        return this.getTokens(RegelSpraakParser.PIPE);
    }
    PIPE(i) {
        return this.getToken(RegelSpraakParser.PIPE, i);
    }
    beslistabelColumnText_list() {
        return this.getTypedRuleContexts(BeslistabelColumnTextContext);
    }
    beslistabelColumnText(i) {
        return this.getTypedRuleContext(BeslistabelColumnTextContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabelHeader;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabelHeader) {
            return visitor.visitBeslistabelHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelHeaderContext = BeslistabelHeaderContext;
class BeslistabelSeparatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PIPE_list() {
        return this.getTokens(RegelSpraakParser.PIPE);
    }
    PIPE(i) {
        return this.getToken(RegelSpraakParser.PIPE, i);
    }
    MINUS_list() {
        return this.getTokens(RegelSpraakParser.MINUS);
    }
    MINUS(i) {
        return this.getToken(RegelSpraakParser.MINUS, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabelSeparator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabelSeparator) {
            return visitor.visitBeslistabelSeparator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelSeparatorContext = BeslistabelSeparatorContext;
class BeslistabelRowContext extends antlr4_1.ParserRuleContext {
    _rowNumber;
    _resultExpression;
    _beslistabelCellValue;
    _conditionValues = [];
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PIPE_list() {
        return this.getTokens(RegelSpraakParser.PIPE);
    }
    PIPE(i) {
        return this.getToken(RegelSpraakParser.PIPE, i);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    beslistabelCellValue_list() {
        return this.getTypedRuleContexts(BeslistabelCellValueContext);
    }
    beslistabelCellValue(i) {
        return this.getTypedRuleContext(BeslistabelCellValueContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabelRow;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabelRow) {
            return visitor.visitBeslistabelRow(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelRowContext = BeslistabelRowContext;
class BeslistabelCellValueContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    NVT() {
        return this.getToken(RegelSpraakParser.NVT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabelCellValue;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabelCellValue) {
            return visitor.visitBeslistabelCellValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelCellValueContext = BeslistabelCellValueContext;
class BeslistabelColumnTextContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PIPE_list() {
        return this.getTokens(RegelSpraakParser.PIPE);
    }
    PIPE(i) {
        return this.getToken(RegelSpraakParser.PIPE, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_beslistabelColumnText;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBeslistabelColumnText) {
            return visitor.visitBeslistabelColumnText(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BeslistabelColumnTextContext = BeslistabelColumnTextContext;
class IdentifierContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_identifier;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class IdentifierOrKeywordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    DAG() {
        return this.getToken(RegelSpraakParser.DAG, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    PERIODE() {
        return this.getToken(RegelSpraakParser.PERIODE, 0);
    }
    REGEL() {
        return this.getToken(RegelSpraakParser.REGEL, 0);
    }
    VOORWAARDE() {
        return this.getToken(RegelSpraakParser.VOORWAARDE, 0);
    }
    HEEFT() {
        return this.getToken(RegelSpraakParser.HEEFT, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    INCONSISTENT() {
        return this.getToken(RegelSpraakParser.INCONSISTENT, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    KWARTAAL() {
        return this.getToken(RegelSpraakParser.KWARTAAL, 0);
    }
    METER() {
        return this.getToken(RegelSpraakParser.METER, 0);
    }
    EEN_TELWOORD() {
        return this.getToken(RegelSpraakParser.EEN_TELWOORD, 0);
    }
    TWEE_TELWOORD() {
        return this.getToken(RegelSpraakParser.TWEE_TELWOORD, 0);
    }
    DRIE_TELWOORD() {
        return this.getToken(RegelSpraakParser.DRIE_TELWOORD, 0);
    }
    VIER_TELWOORD() {
        return this.getToken(RegelSpraakParser.VIER_TELWOORD, 0);
    }
    OUDER() {
        return this.getToken(RegelSpraakParser.OUDER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_identifierOrKeyword;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierOrKeyword) {
            return visitor.visitIdentifierOrKeyword(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierOrKeywordContext = IdentifierOrKeywordContext;
class IdentifierOrKeywordNoIsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    DAG() {
        return this.getToken(RegelSpraakParser.DAG, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    PERIODE() {
        return this.getToken(RegelSpraakParser.PERIODE, 0);
    }
    REGEL() {
        return this.getToken(RegelSpraakParser.REGEL, 0);
    }
    VOORWAARDE() {
        return this.getToken(RegelSpraakParser.VOORWAARDE, 0);
    }
    HEEFT() {
        return this.getToken(RegelSpraakParser.HEEFT, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    INCONSISTENT() {
        return this.getToken(RegelSpraakParser.INCONSISTENT, 0);
    }
    KWARTAAL() {
        return this.getToken(RegelSpraakParser.KWARTAAL, 0);
    }
    METER() {
        return this.getToken(RegelSpraakParser.METER, 0);
    }
    EEN_TELWOORD() {
        return this.getToken(RegelSpraakParser.EEN_TELWOORD, 0);
    }
    TWEE_TELWOORD() {
        return this.getToken(RegelSpraakParser.TWEE_TELWOORD, 0);
    }
    DRIE_TELWOORD() {
        return this.getToken(RegelSpraakParser.DRIE_TELWOORD, 0);
    }
    VIER_TELWOORD() {
        return this.getToken(RegelSpraakParser.VIER_TELWOORD, 0);
    }
    OUDER() {
        return this.getToken(RegelSpraakParser.OUDER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_identifierOrKeywordNoIs;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierOrKeywordNoIs) {
            return visitor.visitIdentifierOrKeywordNoIs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierOrKeywordNoIsContext = IdentifierOrKeywordNoIsContext;
class NaamPhraseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeyword_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordContext);
    }
    identifierOrKeyword(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, i);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    NIEUWE() {
        return this.getToken(RegelSpraakParser.NIEUWE, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    NIET() {
        return this.getToken(RegelSpraakParser.NIET, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_naamPhrase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamPhrase) {
            return visitor.visitNaamPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamPhraseContext = NaamPhraseContext;
class NaamPhraseWithNumbersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeywordWithNumbers_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordWithNumbersContext);
    }
    identifierOrKeywordWithNumbers(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordWithNumbersContext, i);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    NIEUWE() {
        return this.getToken(RegelSpraakParser.NIEUWE, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    NIET() {
        return this.getToken(RegelSpraakParser.NIET, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_naamPhraseWithNumbers;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamPhraseWithNumbers) {
            return visitor.visitNaamPhraseWithNumbers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamPhraseWithNumbersContext = NaamPhraseWithNumbersContext;
class IdentifierOrKeywordWithNumbersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeyword() {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_identifierOrKeywordWithNumbers;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierOrKeywordWithNumbers) {
            return visitor.visitIdentifierOrKeywordWithNumbers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierOrKeywordWithNumbersContext = IdentifierOrKeywordWithNumbersContext;
class NaamPhraseNoIsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeywordNoIs_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordNoIsContext);
    }
    identifierOrKeywordNoIs(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordNoIsContext, i);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    NIEUWE() {
        return this.getToken(RegelSpraakParser.NIEUWE, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    NIET() {
        return this.getToken(RegelSpraakParser.NIET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_naamPhraseNoIs;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamPhraseNoIs) {
            return visitor.visitNaamPhraseNoIs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamPhraseNoIsContext = NaamPhraseNoIsContext;
class NaamwoordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamPhrase_list() {
        return this.getTypedRuleContexts(NaamPhraseContext);
    }
    naamPhrase(i) {
        return this.getTypedRuleContext(NaamPhraseContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_naamwoord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamwoord) {
            return visitor.visitNaamwoord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamwoordContext = NaamwoordContext;
class NaamwoordWithNumbersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamPhraseWithNumbers_list() {
        return this.getTypedRuleContexts(NaamPhraseWithNumbersContext);
    }
    naamPhraseWithNumbers(i) {
        return this.getTypedRuleContext(NaamPhraseWithNumbersContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_naamwoordWithNumbers;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamwoordWithNumbers) {
            return visitor.visitNaamwoordWithNumbers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamwoordWithNumbersContext = NaamwoordWithNumbersContext;
class NaamwoordNoIsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamPhraseNoIs_list() {
        return this.getTypedRuleContexts(NaamPhraseNoIsContext);
    }
    naamPhraseNoIs(i) {
        return this.getTypedRuleContext(NaamPhraseNoIsContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_naamwoordNoIs;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamwoordNoIs) {
            return visitor.visitNaamwoordNoIs(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamwoordNoIsContext = NaamwoordNoIsContext;
class VoorzetselContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    VOOR() {
        return this.getToken(RegelSpraakParser.VOOR, 0);
    }
    OVER() {
        return this.getToken(RegelSpraakParser.OVER, 0);
    }
    OP() {
        return this.getToken(RegelSpraakParser.OP, 0);
    }
    BIJ() {
        return this.getToken(RegelSpraakParser.BIJ, 0);
    }
    UIT() {
        return this.getToken(RegelSpraakParser.UIT, 0);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    OF() {
        return this.getToken(RegelSpraakParser.OF, 0);
    }
    TOT_EN_MET() {
        return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_voorzetsel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVoorzetsel) {
            return visitor.visitVoorzetsel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VoorzetselContext = VoorzetselContext;
class DatumLiteralContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DATE_TIME_LITERAL() {
        return this.getToken(RegelSpraakParser.DATE_TIME_LITERAL, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datumLiteral;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumLiteral) {
            return visitor.visitDatumLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumLiteralContext = DatumLiteralContext;
class UnitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_unit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
class TimeUnitContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DAG() {
        return this.getToken(RegelSpraakParser.DAG, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    MAANDEN() {
        return this.getToken(RegelSpraakParser.MAANDEN, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    JAREN() {
        return this.getToken(RegelSpraakParser.JAREN, 0);
    }
    WEEK() {
        return this.getToken(RegelSpraakParser.WEEK, 0);
    }
    WEKEN() {
        return this.getToken(RegelSpraakParser.WEKEN, 0);
    }
    UUR() {
        return this.getToken(RegelSpraakParser.UUR, 0);
    }
    UREN() {
        return this.getToken(RegelSpraakParser.UREN, 0);
    }
    MINUUT() {
        return this.getToken(RegelSpraakParser.MINUUT, 0);
    }
    MINUTEN() {
        return this.getToken(RegelSpraakParser.MINUTEN, 0);
    }
    SECONDE() {
        return this.getToken(RegelSpraakParser.SECONDE, 0);
    }
    SECONDEN() {
        return this.getToken(RegelSpraakParser.SECONDEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_timeUnit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTimeUnit) {
            return visitor.visitTimeUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TimeUnitContext = TimeUnitContext;
class ObjectTypeDefinitionContext extends antlr4_1.ParserRuleContext {
    _IDENTIFIER;
    _plural = [];
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OBJECTTYPE() {
        return this.getToken(RegelSpraakParser.OBJECTTYPE, 0);
    }
    naamwoordNoIs() {
        return this.getTypedRuleContext(NaamwoordNoIsContext, 0);
    }
    MV_START() {
        return this.getToken(RegelSpraakParser.MV_START, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    BEZIELD() {
        return this.getToken(RegelSpraakParser.BEZIELD, 0);
    }
    objectTypeMember_list() {
        return this.getTypedRuleContexts(ObjectTypeMemberContext);
    }
    objectTypeMember(i) {
        return this.getTypedRuleContext(ObjectTypeMemberContext, i);
    }
    IDENTIFIER_list() {
        return this.getTokens(RegelSpraakParser.IDENTIFIER);
    }
    IDENTIFIER(i) {
        return this.getToken(RegelSpraakParser.IDENTIFIER, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_objectTypeDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectTypeDefinition) {
            return visitor.visitObjectTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectTypeDefinitionContext = ObjectTypeDefinitionContext;
class ObjectTypeMemberContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    SEMICOLON() {
        return this.getToken(RegelSpraakParser.SEMICOLON, 0);
    }
    kenmerkSpecificatie() {
        return this.getTypedRuleContext(KenmerkSpecificatieContext, 0);
    }
    attribuutSpecificatie() {
        return this.getTypedRuleContext(AttribuutSpecificatieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_objectTypeMember;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectTypeMember) {
            return visitor.visitObjectTypeMember(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectTypeMemberContext = ObjectTypeMemberContext;
class KenmerkSpecificatieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    KENMERK() {
        return this.getToken(RegelSpraakParser.KENMERK, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    tijdlijn() {
        return this.getTypedRuleContext(TijdlijnContext, 0);
    }
    BIJVOEGLIJK() {
        return this.getToken(RegelSpraakParser.BIJVOEGLIJK, 0);
    }
    BEZITTELIJK() {
        return this.getToken(RegelSpraakParser.BEZITTELIJK, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_kenmerkSpecificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKenmerkSpecificatie) {
            return visitor.visitKenmerkSpecificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KenmerkSpecificatieContext = KenmerkSpecificatieContext;
class AttribuutSpecificatieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    datatype() {
        return this.getTypedRuleContext(DatatypeContext, 0);
    }
    domeinRef() {
        return this.getTypedRuleContext(DomeinRefContext, 0);
    }
    objectTypeRef() {
        return this.getTypedRuleContext(ObjectTypeRefContext, 0);
    }
    MET_EENHEID() {
        return this.getToken(RegelSpraakParser.MET_EENHEID, 0);
    }
    unitIdentifier() {
        return this.getTypedRuleContext(UnitIdentifierContext, 0);
    }
    GEDIMENSIONEERD_MET() {
        return this.getToken(RegelSpraakParser.GEDIMENSIONEERD_MET, 0);
    }
    dimensieRef_list() {
        return this.getTypedRuleContexts(DimensieRefContext);
    }
    dimensieRef(i) {
        return this.getTypedRuleContext(DimensieRefContext, i);
    }
    tijdlijn() {
        return this.getTypedRuleContext(TijdlijnContext, 0);
    }
    EN_list() {
        return this.getTokens(RegelSpraakParser.EN);
    }
    EN(i) {
        return this.getToken(RegelSpraakParser.EN, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_attribuutSpecificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttribuutSpecificatie) {
            return visitor.visitAttribuutSpecificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttribuutSpecificatieContext = AttribuutSpecificatieContext;
class DatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    numeriekDatatype() {
        return this.getTypedRuleContext(NumeriekDatatypeContext, 0);
    }
    tekstDatatype() {
        return this.getTypedRuleContext(TekstDatatypeContext, 0);
    }
    booleanDatatype() {
        return this.getTypedRuleContext(BooleanDatatypeContext, 0);
    }
    datumTijdDatatype() {
        return this.getTypedRuleContext(DatumTijdDatatypeContext, 0);
    }
    lijstDatatype() {
        return this.getTypedRuleContext(LijstDatatypeContext, 0);
    }
    percentageDatatype() {
        return this.getTypedRuleContext(PercentageDatatypeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatatype) {
            return visitor.visitDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatatypeContext = DatatypeContext;
class LijstDatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    LIJST() {
        return this.getToken(RegelSpraakParser.LIJST, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    datatype() {
        return this.getTypedRuleContext(DatatypeContext, 0);
    }
    domeinRef() {
        return this.getTypedRuleContext(DomeinRefContext, 0);
    }
    objectTypeRef() {
        return this.getTypedRuleContext(ObjectTypeRefContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_lijstDatatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLijstDatatype) {
            return visitor.visitLijstDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LijstDatatypeContext = LijstDatatypeContext;
class NumeriekDatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NUMERIEK() {
        return this.getToken(RegelSpraakParser.NUMERIEK, 0);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    getalSpecificatie() {
        return this.getTypedRuleContext(GetalSpecificatieContext, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_numeriekDatatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumeriekDatatype) {
            return visitor.visitNumeriekDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumeriekDatatypeContext = NumeriekDatatypeContext;
class TekstDatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    TEKST() {
        return this.getToken(RegelSpraakParser.TEKST, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_tekstDatatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTekstDatatype) {
            return visitor.visitTekstDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TekstDatatypeContext = TekstDatatypeContext;
class PercentageDatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PERCENTAGE() {
        return this.getToken(RegelSpraakParser.PERCENTAGE, 0);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    getalSpecificatie() {
        return this.getTypedRuleContext(GetalSpecificatieContext, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_percentageDatatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPercentageDatatype) {
            return visitor.visitPercentageDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PercentageDatatypeContext = PercentageDatatypeContext;
class BooleanDatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    BOOLEAN() {
        return this.getToken(RegelSpraakParser.BOOLEAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_booleanDatatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanDatatype) {
            return visitor.visitBooleanDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanDatatypeContext = BooleanDatatypeContext;
class DatumTijdDatatypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DATUM_IN_DAGEN() {
        return this.getToken(RegelSpraakParser.DATUM_IN_DAGEN, 0);
    }
    DATUM_TIJD_MILLIS() {
        return this.getToken(RegelSpraakParser.DATUM_TIJD_MILLIS, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datumTijdDatatype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumTijdDatatype) {
            return visitor.visitDatumTijdDatatype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumTijdDatatypeContext = DatumTijdDatatypeContext;
class GetalSpecificatieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GEHEEL_GETAL() {
        return this.getToken(RegelSpraakParser.GEHEEL_GETAL, 0);
    }
    GETAL() {
        return this.getToken(RegelSpraakParser.GETAL, 0);
    }
    NEGATIEF() {
        return this.getToken(RegelSpraakParser.NEGATIEF, 0);
    }
    NIET_NEGATIEF() {
        return this.getToken(RegelSpraakParser.NIET_NEGATIEF, 0);
    }
    POSITIEF() {
        return this.getToken(RegelSpraakParser.POSITIEF, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    DECIMALEN() {
        return this.getToken(RegelSpraakParser.DECIMALEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_getalSpecificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetalSpecificatie) {
            return visitor.visitGetalSpecificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GetalSpecificatieContext = GetalSpecificatieContext;
class DomeinDefinitionContext extends antlr4_1.ParserRuleContext {
    _name;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DOMEIN() {
        return this.getToken(RegelSpraakParser.DOMEIN, 0);
    }
    IS_VAN_HET_TYPE() {
        return this.getToken(RegelSpraakParser.IS_VAN_HET_TYPE, 0);
    }
    domeinType() {
        return this.getTypedRuleContext(DomeinTypeContext, 0);
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    MET_EENHEID() {
        return this.getToken(RegelSpraakParser.MET_EENHEID, 0);
    }
    eenheidExpressie() {
        return this.getTypedRuleContext(EenheidExpressieContext, 0);
    }
    SEMICOLON() {
        return this.getToken(RegelSpraakParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_domeinDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDomeinDefinition) {
            return visitor.visitDomeinDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DomeinDefinitionContext = DomeinDefinitionContext;
class DomeinTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    enumeratieSpecificatie() {
        return this.getTypedRuleContext(EnumeratieSpecificatieContext, 0);
    }
    numeriekDatatype() {
        return this.getTypedRuleContext(NumeriekDatatypeContext, 0);
    }
    tekstDatatype() {
        return this.getTypedRuleContext(TekstDatatypeContext, 0);
    }
    booleanDatatype() {
        return this.getTypedRuleContext(BooleanDatatypeContext, 0);
    }
    datumTijdDatatype() {
        return this.getTypedRuleContext(DatumTijdDatatypeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_domeinType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDomeinType) {
            return visitor.visitDomeinType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DomeinTypeContext = DomeinTypeContext;
class EnumeratieSpecificatieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ENUMERATIE() {
        return this.getToken(RegelSpraakParser.ENUMERATIE, 0);
    }
    ENUM_LITERAL_list() {
        return this.getTokens(RegelSpraakParser.ENUM_LITERAL);
    }
    ENUM_LITERAL(i) {
        return this.getToken(RegelSpraakParser.ENUM_LITERAL, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_enumeratieSpecificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumeratieSpecificatie) {
            return visitor.visitEnumeratieSpecificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumeratieSpecificatieContext = EnumeratieSpecificatieContext;
class DomeinRefContext extends antlr4_1.ParserRuleContext {
    _name;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_domeinRef;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDomeinRef) {
            return visitor.visitDomeinRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DomeinRefContext = DomeinRefContext;
class ObjectTypeRefContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_objectTypeRef;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectTypeRef) {
            return visitor.visitObjectTypeRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectTypeRefContext = ObjectTypeRefContext;
class EenheidsysteemDefinitionContext extends antlr4_1.ParserRuleContext {
    _name;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EENHEIDSYSTEEM() {
        return this.getToken(RegelSpraakParser.EENHEIDSYSTEEM, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    eenheidEntry_list() {
        return this.getTypedRuleContexts(EenheidEntryContext);
    }
    eenheidEntry(i) {
        return this.getTypedRuleContext(EenheidEntryContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_eenheidsysteemDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEenheidsysteemDefinition) {
            return visitor.visitEenheidsysteemDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EenheidsysteemDefinitionContext = EenheidsysteemDefinitionContext;
class EenheidEntryContext extends antlr4_1.ParserRuleContext {
    _unitName;
    _pluralName;
    _abbrev;
    _symbol_;
    _value;
    _targetUnit;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    unitIdentifier_list() {
        return this.getTypedRuleContexts(UnitIdentifierContext);
    }
    unitIdentifier(i) {
        return this.getTypedRuleContext(UnitIdentifierContext, i);
    }
    MV_START() {
        return this.getToken(RegelSpraakParser.MV_START, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    EQUALS() {
        return this.getToken(RegelSpraakParser.EQUALS, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    SLASH() {
        return this.getToken(RegelSpraakParser.SLASH, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_eenheidEntry;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEenheidEntry) {
            return visitor.visitEenheidEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EenheidEntryContext = EenheidEntryContext;
class UnitIdentifierContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    METER() {
        return this.getToken(RegelSpraakParser.METER, 0);
    }
    KILOGRAM() {
        return this.getToken(RegelSpraakParser.KILOGRAM, 0);
    }
    MILLISECONDE() {
        return this.getToken(RegelSpraakParser.MILLISECONDE, 0);
    }
    SECONDE() {
        return this.getToken(RegelSpraakParser.SECONDE, 0);
    }
    MINUUT() {
        return this.getToken(RegelSpraakParser.MINUUT, 0);
    }
    MINUTEN() {
        return this.getToken(RegelSpraakParser.MINUTEN, 0);
    }
    UUR() {
        return this.getToken(RegelSpraakParser.UUR, 0);
    }
    UREN() {
        return this.getToken(RegelSpraakParser.UREN, 0);
    }
    VOET() {
        return this.getToken(RegelSpraakParser.VOET, 0);
    }
    POND() {
        return this.getToken(RegelSpraakParser.POND, 0);
    }
    MIJL() {
        return this.getToken(RegelSpraakParser.MIJL, 0);
    }
    M() {
        return this.getToken(RegelSpraakParser.M, 0);
    }
    KG() {
        return this.getToken(RegelSpraakParser.KG, 0);
    }
    S() {
        return this.getToken(RegelSpraakParser.S, 0);
    }
    FT() {
        return this.getToken(RegelSpraakParser.FT, 0);
    }
    LB() {
        return this.getToken(RegelSpraakParser.LB, 0);
    }
    MIN() {
        return this.getToken(RegelSpraakParser.MIN, 0);
    }
    MI() {
        return this.getToken(RegelSpraakParser.MI, 0);
    }
    EURO_SYMBOL() {
        return this.getToken(RegelSpraakParser.EURO_SYMBOL, 0);
    }
    DOLLAR_SYMBOL() {
        return this.getToken(RegelSpraakParser.DOLLAR_SYMBOL, 0);
    }
    DEGREE_SYMBOL() {
        return this.getToken(RegelSpraakParser.DEGREE_SYMBOL, 0);
    }
    DAG() {
        return this.getToken(RegelSpraakParser.DAG, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    MAANDEN() {
        return this.getToken(RegelSpraakParser.MAANDEN, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    JAREN() {
        return this.getToken(RegelSpraakParser.JAREN, 0);
    }
    WEEK() {
        return this.getToken(RegelSpraakParser.WEEK, 0);
    }
    WEKEN() {
        return this.getToken(RegelSpraakParser.WEKEN, 0);
    }
    KWARTAAL() {
        return this.getToken(RegelSpraakParser.KWARTAAL, 0);
    }
    SECONDEN() {
        return this.getToken(RegelSpraakParser.SECONDEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_unitIdentifier;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnitIdentifier) {
            return visitor.visitUnitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitIdentifierContext = UnitIdentifierContext;
class EenheidExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    eenheidMacht_list() {
        return this.getTypedRuleContexts(EenheidMachtContext);
    }
    eenheidMacht(i) {
        return this.getTypedRuleContext(EenheidMachtContext, i);
    }
    SLASH() {
        return this.getToken(RegelSpraakParser.SLASH, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    PERCENT_SIGN() {
        return this.getToken(RegelSpraakParser.PERCENT_SIGN, 0);
    }
    EURO_SYMBOL() {
        return this.getToken(RegelSpraakParser.EURO_SYMBOL, 0);
    }
    DOLLAR_SYMBOL() {
        return this.getToken(RegelSpraakParser.DOLLAR_SYMBOL, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_eenheidExpressie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEenheidExpressie) {
            return visitor.visitEenheidExpressie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EenheidExpressieContext = EenheidExpressieContext;
class EenheidMachtContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    unitIdentifier() {
        return this.getTypedRuleContext(UnitIdentifierContext, 0);
    }
    CARET() {
        return this.getToken(RegelSpraakParser.CARET, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_eenheidMacht;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEenheidMacht) {
            return visitor.visitEenheidMacht(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EenheidMachtContext = EenheidMachtContext;
class DimensieDefinitionContext extends antlr4_1.ParserRuleContext {
    _dimensieNaamMeervoud;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DIMENSIE() {
        return this.getToken(RegelSpraakParser.DIMENSIE, 0);
    }
    naamwoord_list() {
        return this.getTypedRuleContexts(NaamwoordContext);
    }
    naamwoord(i) {
        return this.getTypedRuleContext(NaamwoordContext, i);
    }
    BESTAANDE_UIT() {
        return this.getToken(RegelSpraakParser.BESTAANDE_UIT, 0);
    }
    voorzetselSpecificatie() {
        return this.getTypedRuleContext(VoorzetselSpecificatieContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    labelWaardeSpecificatie_list() {
        return this.getTypedRuleContexts(LabelWaardeSpecificatieContext);
    }
    labelWaardeSpecificatie(i) {
        return this.getTypedRuleContext(LabelWaardeSpecificatieContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_dimensieDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDimensieDefinition) {
            return visitor.visitDimensieDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DimensieDefinitionContext = DimensieDefinitionContext;
class VoorzetselSpecificatieContext extends antlr4_1.ParserRuleContext {
    _vz;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NA_HET_ATTRIBUUT_MET_VOORZETSEL() {
        return this.getToken(RegelSpraakParser.NA_HET_ATTRIBUUT_MET_VOORZETSEL, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    voorzetsel() {
        return this.getTypedRuleContext(VoorzetselContext, 0);
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL() {
        return this.getToken(RegelSpraakParser.VOOR_HET_ATTRIBUUT_ZONDER_VOORZETSEL, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_voorzetselSpecificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVoorzetselSpecificatie) {
            return visitor.visitVoorzetselSpecificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VoorzetselSpecificatieContext = VoorzetselSpecificatieContext;
class LabelWaardeSpecificatieContext extends antlr4_1.ParserRuleContext {
    _dimWaarde;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_labelWaardeSpecificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLabelWaardeSpecificatie) {
            return visitor.visitLabelWaardeSpecificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LabelWaardeSpecificatieContext = LabelWaardeSpecificatieContext;
class TijdlijnContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VOOR_ELKE_DAG() {
        return this.getToken(RegelSpraakParser.VOOR_ELKE_DAG, 0);
    }
    VOOR_ELKE_MAAND() {
        return this.getToken(RegelSpraakParser.VOOR_ELKE_MAAND, 0);
    }
    VOOR_ELK_JAAR() {
        return this.getToken(RegelSpraakParser.VOOR_ELK_JAAR, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_tijdlijn;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTijdlijn) {
            return visitor.visitTijdlijn(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TijdlijnContext = TijdlijnContext;
class DimensieRefContext extends antlr4_1.ParserRuleContext {
    _name;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_dimensieRef;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDimensieRef) {
            return visitor.visitDimensieRef(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DimensieRefContext = DimensieRefContext;
class ParameterDefinitionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PARAMETER() {
        return this.getToken(RegelSpraakParser.PARAMETER, 0);
    }
    parameterNamePhrase() {
        return this.getTypedRuleContext(ParameterNamePhraseContext, 0);
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    datatype() {
        return this.getTypedRuleContext(DatatypeContext, 0);
    }
    domeinRef() {
        return this.getTypedRuleContext(DomeinRefContext, 0);
    }
    MET_EENHEID() {
        return this.getToken(RegelSpraakParser.MET_EENHEID, 0);
    }
    eenheidExpressie() {
        return this.getTypedRuleContext(EenheidExpressieContext, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    tijdlijn() {
        return this.getTypedRuleContext(TijdlijnContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_parameterDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterDefinition) {
            return visitor.visitParameterDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterDefinitionContext = ParameterDefinitionContext;
class ParameterNamePhraseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameterNamePart_list() {
        return this.getTypedRuleContexts(ParameterNamePartContext);
    }
    parameterNamePart(i) {
        return this.getTypedRuleContext(ParameterNamePartContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_parameterNamePhrase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterNamePhrase) {
            return visitor.visitParameterNamePhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterNamePhraseContext = ParameterNamePhraseContext;
class ParameterNamePartContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IDENTIFIER_list() {
        return this.getTokens(RegelSpraakParser.IDENTIFIER);
    }
    IDENTIFIER(i) {
        return this.getToken(RegelSpraakParser.IDENTIFIER, i);
    }
    AANTAL_list() {
        return this.getTokens(RegelSpraakParser.AANTAL);
    }
    AANTAL(i) {
        return this.getToken(RegelSpraakParser.AANTAL, i);
    }
    NUMBER_list() {
        return this.getTokens(RegelSpraakParser.NUMBER);
    }
    NUMBER(i) {
        return this.getToken(RegelSpraakParser.NUMBER, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_parameterNamePart;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterNamePart) {
            return visitor.visitParameterNamePart(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterNamePartContext = ParameterNamePartContext;
class ParameterMetLidwoordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    parameterNamePart_list() {
        return this.getTypedRuleContexts(ParameterNamePartContext);
    }
    parameterNamePart(i) {
        return this.getTypedRuleContext(ParameterNamePartContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_parameterMetLidwoord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterMetLidwoord) {
            return visitor.visitParameterMetLidwoord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterMetLidwoordContext = ParameterMetLidwoordContext;
class FeitTypeDefinitionContext extends antlr4_1.ParserRuleContext {
    _feittypenaam;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    FEITTYPE() {
        return this.getToken(RegelSpraakParser.FEITTYPE, 0);
    }
    rolDefinition_list() {
        return this.getTypedRuleContexts(RolDefinitionContext);
    }
    rolDefinition(i) {
        return this.getTypedRuleContext(RolDefinitionContext, i);
    }
    cardinalityLine() {
        return this.getTypedRuleContext(CardinalityLineContext, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    WEDERKERIG_FEITTYPE() {
        return this.getToken(RegelSpraakParser.WEDERKERIG_FEITTYPE, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_feitTypeDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitTypeDefinition) {
            return visitor.visitFeitTypeDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitTypeDefinitionContext = FeitTypeDefinitionContext;
class RolDefinitionContext extends antlr4_1.ParserRuleContext {
    _article;
    _content;
    _meervoud;
    _objecttype;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    rolContentWords() {
        return this.getTypedRuleContext(RolContentWordsContext, 0);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    MV_START() {
        return this.getToken(RegelSpraakParser.MV_START, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    rolObjectType() {
        return this.getTypedRuleContext(RolObjectTypeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_rolDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRolDefinition) {
            return visitor.visitRolDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RolDefinitionContext = RolDefinitionContext;
class RolObjectTypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeyword_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordContext);
    }
    identifierOrKeyword(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_rolObjectType;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRolObjectType) {
            return visitor.visitRolObjectType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RolObjectTypeContext = RolObjectTypeContext;
class RolContentWordsContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeyword_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordContext);
    }
    identifierOrKeyword(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_rolContentWords;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRolContentWords) {
            return visitor.visitRolContentWords(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RolContentWordsContext = RolContentWordsContext;
class CardinalityLineContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    cardinalityWord_list() {
        return this.getTypedRuleContexts(CardinalityWordContext);
    }
    cardinalityWord(i) {
        return this.getTypedRuleContext(CardinalityWordContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_cardinalityLine;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCardinalityLine) {
            return visitor.visitCardinalityLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CardinalityLineContext = CardinalityLineContext;
class CardinalityWordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OBJECTTYPE() {
        return this.getToken(RegelSpraakParser.OBJECTTYPE, 0);
    }
    PARAMETER() {
        return this.getToken(RegelSpraakParser.PARAMETER, 0);
    }
    REGEL() {
        return this.getToken(RegelSpraakParser.REGEL, 0);
    }
    FEITTYPE() {
        return this.getToken(RegelSpraakParser.FEITTYPE, 0);
    }
    WEDERKERIG_FEITTYPE() {
        return this.getToken(RegelSpraakParser.WEDERKERIG_FEITTYPE, 0);
    }
    DIMENSIE() {
        return this.getToken(RegelSpraakParser.DIMENSIE, 0);
    }
    DOMEIN() {
        return this.getToken(RegelSpraakParser.DOMEIN, 0);
    }
    BESLISTABEL() {
        return this.getToken(RegelSpraakParser.BESLISTABEL, 0);
    }
    CONSISTENTIEREGEL() {
        return this.getToken(RegelSpraakParser.CONSISTENTIEREGEL, 0);
    }
    EENHEIDSYSTEEM() {
        return this.getToken(RegelSpraakParser.EENHEIDSYSTEEM, 0);
    }
    DAGSOORT() {
        return this.getToken(RegelSpraakParser.DAGSOORT, 0);
    }
    SEMICOLON() {
        return this.getToken(RegelSpraakParser.SEMICOLON, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_cardinalityWord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCardinalityWord) {
            return visitor.visitCardinalityWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CardinalityWordContext = CardinalityWordContext;
class RegelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    REGEL() {
        return this.getToken(RegelSpraakParser.REGEL, 0);
    }
    regelName() {
        return this.getTypedRuleContext(RegelNameContext, 0);
    }
    regelVersie() {
        return this.getTypedRuleContext(RegelVersieContext, 0);
    }
    resultaatDeel() {
        return this.getTypedRuleContext(ResultaatDeelContext, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    voorwaardeDeel() {
        return this.getTypedRuleContext(VoorwaardeDeelContext, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    variabeleDeel() {
        return this.getTypedRuleContext(VariabeleDeelContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegel) {
            return visitor.visitRegel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelContext = RegelContext;
class RegelGroepContext extends antlr4_1.ParserRuleContext {
    _isRecursive;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    REGELGROEP() {
        return this.getToken(RegelSpraakParser.REGELGROEP, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    regel_list() {
        return this.getTypedRuleContexts(RegelContext);
    }
    regel(i) {
        return this.getTypedRuleContext(RegelContext, i);
    }
    consistentieregel_list() {
        return this.getTypedRuleContexts(ConsistentieregelContext);
    }
    consistentieregel(i) {
        return this.getTypedRuleContext(ConsistentieregelContext, i);
    }
    IS_RECURSIEF() {
        return this.getToken(RegelSpraakParser.IS_RECURSIEF, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regelGroep;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelGroep) {
            return visitor.visitRegelGroep(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelGroepContext = RegelGroepContext;
class RegelNameContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    regelNameExtension_list() {
        return this.getTypedRuleContexts(RegelNameExtensionContext);
    }
    regelNameExtension(i) {
        return this.getTypedRuleContext(RegelNameExtensionContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regelName;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelName) {
            return visitor.visitRegelName(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelNameContext = RegelNameContext;
class RegelNameExtensionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IN_GELIJKE_DELEN() {
        return this.getToken(RegelSpraakParser.IN_GELIJKE_DELEN, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    GEEN() {
        return this.getToken(RegelSpraakParser.GEEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regelNameExtension;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelNameExtension) {
            return visitor.visitRegelNameExtension(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelNameExtensionContext = RegelNameExtensionContext;
class RegelVersieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GELDIG() {
        return this.getToken(RegelSpraakParser.GELDIG, 0);
    }
    versieGeldigheid() {
        return this.getTypedRuleContext(VersieGeldigheidContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regelVersie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelVersie) {
            return visitor.visitRegelVersie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelVersieContext = RegelVersieContext;
class VersieGeldigheidContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ALTIJD() {
        return this.getToken(RegelSpraakParser.ALTIJD, 0);
    }
    VANAF() {
        return this.getToken(RegelSpraakParser.VANAF, 0);
    }
    datumLiteral_list() {
        return this.getTypedRuleContexts(DatumLiteralContext);
    }
    datumLiteral(i) {
        return this.getTypedRuleContext(DatumLiteralContext, i);
    }
    TM() {
        return this.getToken(RegelSpraakParser.TM, 0);
    }
    TOT_EN_MET() {
        return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_versieGeldigheid;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVersieGeldigheid) {
            return visitor.visitVersieGeldigheid(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VersieGeldigheidContext = VersieGeldigheidContext;
class ResultaatDeelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_resultaatDeel;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ResultaatDeelContext = ResultaatDeelContext;
class GelijkstellingResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    WORDT_BEREKEND_ALS() {
        return this.getToken(RegelSpraakParser.WORDT_BEREKEND_ALS, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    WORDT_GESTELD_OP() {
        return this.getToken(RegelSpraakParser.WORDT_GESTELD_OP, 0);
    }
    WORDT_GEINITIALISEERD_OP() {
        return this.getToken(RegelSpraakParser.WORDT_GEINITIALISEERD_OP, 0);
    }
    periodeDefinitie() {
        return this.getTypedRuleContext(PeriodeDefinitieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGelijkstellingResultaat) {
            return visitor.visitGelijkstellingResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GelijkstellingResultaatContext = GelijkstellingResultaatContext;
class RelationshipWithAttributeResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    HEEFT() {
        return this.getToken(RegelSpraakParser.HEEFT, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    attribuutMetLidwoord() {
        return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
    }
    IS_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
    }
    GELIJK_IS_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_IS_AAN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRelationshipWithAttributeResultaat) {
            return visitor.visitRelationshipWithAttributeResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RelationshipWithAttributeResultaatContext = RelationshipWithAttributeResultaatContext;
class ConsistencyCheckResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    MOET() {
        return this.getToken(RegelSpraakParser.MOET, 0);
    }
    consistencyOperator() {
        return this.getTypedRuleContext(ConsistencyOperatorContext, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConsistencyCheckResultaat) {
            return visitor.visitConsistencyCheckResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConsistencyCheckResultaatContext = ConsistencyCheckResultaatContext;
class VerdelingContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    verdelingResultaat() {
        return this.getTypedRuleContext(VerdelingResultaatContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdeling) {
            return visitor.visitVerdeling(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingContext = VerdelingContext;
class ObjectCreatieResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    objectCreatie() {
        return this.getTypedRuleContext(ObjectCreatieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectCreatieResultaat) {
            return visitor.visitObjectCreatieResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectCreatieResultaatContext = ObjectCreatieResultaatContext;
class DagsoortdefinitieResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    EEN_list() {
        return this.getTokens(RegelSpraakParser.EEN);
    }
    EEN(i) {
        return this.getToken(RegelSpraakParser.EEN, i);
    }
    DAG() {
        return this.getToken(RegelSpraakParser.DAG, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDagsoortdefinitieResultaat) {
            return visitor.visitDagsoortdefinitieResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DagsoortdefinitieResultaatContext = DagsoortdefinitieResultaatContext;
class KenmerkFeitResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    kenmerkNaam() {
        return this.getTypedRuleContext(KenmerkNaamContext, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    HEEFT() {
        return this.getToken(RegelSpraakParser.HEEFT, 0);
    }
    periodeDefinitie() {
        return this.getTypedRuleContext(PeriodeDefinitieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKenmerkFeitResultaat) {
            return visitor.visitKenmerkFeitResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KenmerkFeitResultaatContext = KenmerkFeitResultaatContext;
class FeitCreatieResultaatContext extends ResultaatDeelContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    feitCreatiePattern() {
        return this.getTypedRuleContext(FeitCreatiePatternContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitCreatieResultaat) {
            return visitor.visitFeitCreatieResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitCreatieResultaatContext = FeitCreatieResultaatContext;
class ConsistencyOperatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ONGELIJK_ZIJN_AAN() {
        return this.getToken(RegelSpraakParser.ONGELIJK_ZIJN_AAN, 0);
    }
    ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ONGELIJK_AAN, 0);
    }
    IS_ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_ONGELIJK_AAN, 0);
    }
    GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
    }
    IS_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
    }
    GROTER_DAN() {
        return this.getToken(RegelSpraakParser.GROTER_DAN, 0);
    }
    IS_GROTER_DAN() {
        return this.getToken(RegelSpraakParser.IS_GROTER_DAN, 0);
    }
    KLEINER_DAN() {
        return this.getToken(RegelSpraakParser.KLEINER_DAN, 0);
    }
    IS_KLEINER_DAN() {
        return this.getToken(RegelSpraakParser.IS_KLEINER_DAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_consistencyOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConsistencyOperator) {
            return visitor.visitConsistencyOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConsistencyOperatorContext = ConsistencyOperatorContext;
class FeitCreatiePatternContext extends antlr4_1.ParserRuleContext {
    _role1;
    _subject1;
    _article2;
    _role2;
    _article3;
    _subject2;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EEN_list() {
        return this.getTokens(RegelSpraakParser.EEN);
    }
    EEN(i) {
        return this.getToken(RegelSpraakParser.EEN, i);
    }
    VAN_list() {
        return this.getTokens(RegelSpraakParser.VAN);
    }
    VAN(i) {
        return this.getToken(RegelSpraakParser.VAN, i);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    feitCreatieRolPhrase_list() {
        return this.getTypedRuleContexts(FeitCreatieRolPhraseContext);
    }
    feitCreatieRolPhrase(i) {
        return this.getTypedRuleContext(FeitCreatieRolPhraseContext, i);
    }
    feitCreatieSubjectPhrase_list() {
        return this.getTypedRuleContexts(FeitCreatieSubjectPhraseContext);
    }
    feitCreatieSubjectPhrase(i) {
        return this.getTypedRuleContext(FeitCreatieSubjectPhraseContext, i);
    }
    DE_list() {
        return this.getTokens(RegelSpraakParser.DE);
    }
    DE(i) {
        return this.getToken(RegelSpraakParser.DE, i);
    }
    HET_list() {
        return this.getTokens(RegelSpraakParser.HET);
    }
    HET(i) {
        return this.getToken(RegelSpraakParser.HET, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_feitCreatiePattern;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitCreatiePattern) {
            return visitor.visitFeitCreatiePattern(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitCreatiePatternContext = FeitCreatiePatternContext;
class FeitCreatieRolPhraseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    feitCreatieWord_list() {
        return this.getTypedRuleContexts(FeitCreatieWordContext);
    }
    feitCreatieWord(i) {
        return this.getTypedRuleContext(FeitCreatieWordContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_feitCreatieRolPhrase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitCreatieRolPhrase) {
            return visitor.visitFeitCreatieRolPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitCreatieRolPhraseContext = FeitCreatieRolPhraseContext;
class FeitCreatieSubjectPhraseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    feitCreatieSubjectWord_list() {
        return this.getTypedRuleContexts(FeitCreatieSubjectWordContext);
    }
    feitCreatieSubjectWord(i) {
        return this.getTypedRuleContext(FeitCreatieSubjectWordContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_feitCreatieSubjectPhrase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitCreatieSubjectPhrase) {
            return visitor.visitFeitCreatieSubjectPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitCreatieSubjectPhraseContext = FeitCreatieSubjectPhraseContext;
class FeitCreatieSubjectWordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeyword() {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, 0);
    }
    voorzetsel() {
        return this.getTypedRuleContext(VoorzetselContext, 0);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_feitCreatieSubjectWord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitCreatieSubjectWord) {
            return visitor.visitFeitCreatieSubjectWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitCreatieSubjectWordContext = FeitCreatieSubjectWordContext;
class FeitCreatieWordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    identifierOrKeyword() {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, 0);
    }
    voorzetselNietVan() {
        return this.getTypedRuleContext(VoorzetselNietVanContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_feitCreatieWord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFeitCreatieWord) {
            return visitor.visitFeitCreatieWord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FeitCreatieWordContext = FeitCreatieWordContext;
class VoorzetselNietVanContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    VOOR() {
        return this.getToken(RegelSpraakParser.VOOR, 0);
    }
    OVER() {
        return this.getToken(RegelSpraakParser.OVER, 0);
    }
    OP() {
        return this.getToken(RegelSpraakParser.OP, 0);
    }
    BIJ() {
        return this.getToken(RegelSpraakParser.BIJ, 0);
    }
    UIT() {
        return this.getToken(RegelSpraakParser.UIT, 0);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_voorzetselNietVan;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVoorzetselNietVan) {
            return visitor.visitVoorzetselNietVan(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VoorzetselNietVanContext = VoorzetselNietVanContext;
class ObjectCreatieContext extends antlr4_1.ParserRuleContext {
    _objectType;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ER_WORDT_EEN_NIEUW() {
        return this.getToken(RegelSpraakParser.ER_WORDT_EEN_NIEUW, 0);
    }
    AANGEMAAKT() {
        return this.getToken(RegelSpraakParser.AANGEMAAKT, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    objectAttributeInit() {
        return this.getTypedRuleContext(ObjectAttributeInitContext, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    CREEER() {
        return this.getToken(RegelSpraakParser.CREEER, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    NIEUWE() {
        return this.getToken(RegelSpraakParser.NIEUWE, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_objectCreatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectCreatie) {
            return visitor.visitObjectCreatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectCreatieContext = ObjectCreatieContext;
class ObjectAttributeInitContext extends antlr4_1.ParserRuleContext {
    _attribuut;
    _waarde;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MET() {
        return this.getToken(RegelSpraakParser.MET, 0);
    }
    GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
    }
    simpleNaamwoord() {
        return this.getTypedRuleContext(SimpleNaamwoordContext, 0);
    }
    simpleExpressie() {
        return this.getTypedRuleContext(SimpleExpressieContext, 0);
    }
    attributeInitVervolg_list() {
        return this.getTypedRuleContexts(AttributeInitVervolgContext);
    }
    attributeInitVervolg(i) {
        return this.getTypedRuleContext(AttributeInitVervolgContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_objectAttributeInit;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectAttributeInit) {
            return visitor.visitObjectAttributeInit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectAttributeInitContext = ObjectAttributeInitContext;
class AttributeInitVervolgContext extends antlr4_1.ParserRuleContext {
    _attribuut;
    _waarde;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
    }
    simpleNaamwoord() {
        return this.getTypedRuleContext(SimpleNaamwoordContext, 0);
    }
    simpleExpressie() {
        return this.getTypedRuleContext(SimpleExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_attributeInitVervolg;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttributeInitVervolg) {
            return visitor.visitAttributeInitVervolg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttributeInitVervolgContext = AttributeInitVervolgContext;
class SimpleNaamwoordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamPhrase() {
        return this.getTypedRuleContext(NaamPhraseContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_simpleNaamwoord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleNaamwoord) {
            return visitor.visitSimpleNaamwoord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleNaamwoordContext = SimpleNaamwoordContext;
class ConsistentieregelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    CONSISTENTIEREGEL() {
        return this.getToken(RegelSpraakParser.CONSISTENTIEREGEL, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    uniekzijnResultaat() {
        return this.getTypedRuleContext(UniekzijnResultaatContext, 0);
    }
    inconsistentResultaat() {
        return this.getTypedRuleContext(InconsistentResultaatContext, 0);
    }
    voorwaardeDeel() {
        return this.getTypedRuleContext(VoorwaardeDeelContext, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_consistentieregel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConsistentieregel) {
            return visitor.visitConsistentieregel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConsistentieregelContext = ConsistentieregelContext;
class UniekzijnResultaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    alleAttributenVanObjecttype() {
        return this.getTypedRuleContext(AlleAttributenVanObjecttypeContext, 0);
    }
    MOETEN_UNIEK_ZIJN() {
        return this.getToken(RegelSpraakParser.MOETEN_UNIEK_ZIJN, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_uniekzijnResultaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUniekzijnResultaat) {
            return visitor.visitUniekzijnResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UniekzijnResultaatContext = UniekzijnResultaatContext;
class AlleAttributenVanObjecttypeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    naamwoord_list() {
        return this.getTypedRuleContexts(NaamwoordContext);
    }
    naamwoord(i) {
        return this.getTypedRuleContext(NaamwoordContext, i);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_alleAttributenVanObjecttype;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAlleAttributenVanObjecttype) {
            return visitor.visitAlleAttributenVanObjecttype(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AlleAttributenVanObjecttypeContext = AlleAttributenVanObjecttypeContext;
class InconsistentResultaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    IS_INCONSISTENT() {
        return this.getToken(RegelSpraakParser.IS_INCONSISTENT, 0);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    ER() {
        return this.getToken(RegelSpraakParser.ER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_inconsistentResultaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInconsistentResultaat) {
            return visitor.visitInconsistentResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InconsistentResultaatContext = InconsistentResultaatContext;
class VoorwaardeDeelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    INDIEN() {
        return this.getToken(RegelSpraakParser.INDIEN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    toplevelSamengesteldeVoorwaarde() {
        return this.getTypedRuleContext(ToplevelSamengesteldeVoorwaardeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_voorwaardeDeel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVoorwaardeDeel) {
            return visitor.visitVoorwaardeDeel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VoorwaardeDeelContext = VoorwaardeDeelContext;
class ToplevelSamengesteldeVoorwaardeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ER_AAN() {
        return this.getToken(RegelSpraakParser.ER_AAN, 0);
    }
    voorwaardeKwantificatie() {
        return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0);
    }
    WORDT_VOLDAAN() {
        return this.getToken(RegelSpraakParser.WORDT_VOLDAAN, 0);
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    VOLGENDE_VOORWAARDEN() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
    }
    VOLGENDE_VOORWAARDE() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
    }
    samengesteldeVoorwaardeOnderdeel_list() {
        return this.getTypedRuleContexts(SamengesteldeVoorwaardeOnderdeelContext);
    }
    samengesteldeVoorwaardeOnderdeel(i) {
        return this.getTypedRuleContext(SamengesteldeVoorwaardeOnderdeelContext, i);
    }
    AAN() {
        return this.getToken(RegelSpraakParser.AAN, 0);
    }
    VOLDOET() {
        return this.getToken(RegelSpraakParser.VOLDOET, 0);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    HIJ() {
        return this.getToken(RegelSpraakParser.HIJ, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    ER() {
        return this.getToken(RegelSpraakParser.ER, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_toplevelSamengesteldeVoorwaarde;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitToplevelSamengesteldeVoorwaarde) {
            return visitor.visitToplevelSamengesteldeVoorwaarde(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ToplevelSamengesteldeVoorwaardeContext = ToplevelSamengesteldeVoorwaardeContext;
class VoorwaardeKwantificatieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    GEEN_VAN_DE() {
        return this.getToken(RegelSpraakParser.GEEN_VAN_DE, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    TEN_MINSTE() {
        return this.getToken(RegelSpraakParser.TEN_MINSTE, 0);
    }
    TENMINSTE() {
        return this.getToken(RegelSpraakParser.TENMINSTE, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    EEN_TELWOORD() {
        return this.getToken(RegelSpraakParser.EEN_TELWOORD, 0);
    }
    TWEE_TELWOORD() {
        return this.getToken(RegelSpraakParser.TWEE_TELWOORD, 0);
    }
    DRIE_TELWOORD() {
        return this.getToken(RegelSpraakParser.DRIE_TELWOORD, 0);
    }
    VIER_TELWOORD() {
        return this.getToken(RegelSpraakParser.VIER_TELWOORD, 0);
    }
    TEN_HOOGSTE() {
        return this.getToken(RegelSpraakParser.TEN_HOOGSTE, 0);
    }
    PRECIES() {
        return this.getToken(RegelSpraakParser.PRECIES, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_voorwaardeKwantificatie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVoorwaardeKwantificatie) {
            return visitor.visitVoorwaardeKwantificatie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VoorwaardeKwantificatieContext = VoorwaardeKwantificatieContext;
class SamengesteldeVoorwaardeOnderdeelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    outerBulletPrefix() {
        return this.getTypedRuleContext(OuterBulletPrefixContext, 0);
    }
    elementaireVoorwaarde() {
        return this.getTypedRuleContext(ElementaireVoorwaardeContext, 0);
    }
    genesteSamengesteldeVoorwaarde() {
        return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSamengesteldeVoorwaardeOnderdeel) {
            return visitor.visitSamengesteldeVoorwaardeOnderdeel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SamengesteldeVoorwaardeOnderdeelContext = SamengesteldeVoorwaardeOnderdeelContext;
class OuterBulletPrefixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MINUS() {
        return this.getToken(RegelSpraakParser.MINUS, 0);
    }
    BULLET() {
        return this.getToken(RegelSpraakParser.BULLET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_outerBulletPrefix;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOuterBulletPrefix) {
            return visitor.visitOuterBulletPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OuterBulletPrefixContext = OuterBulletPrefixContext;
class NestedBulletPrefixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DOUBLE_DOT() {
        return this.getToken(RegelSpraakParser.DOUBLE_DOT, 0);
    }
    BULLET_list() {
        return this.getTokens(RegelSpraakParser.BULLET);
    }
    BULLET(i) {
        return this.getToken(RegelSpraakParser.BULLET, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_nestedBulletPrefix;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNestedBulletPrefix) {
            return visitor.visitNestedBulletPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NestedBulletPrefixContext = NestedBulletPrefixContext;
class BulletPrefixContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MINUS_list() {
        return this.getTokens(RegelSpraakParser.MINUS);
    }
    MINUS(i) {
        return this.getToken(RegelSpraakParser.MINUS, i);
    }
    DOUBLE_DOT_list() {
        return this.getTokens(RegelSpraakParser.DOUBLE_DOT);
    }
    DOUBLE_DOT(i) {
        return this.getToken(RegelSpraakParser.DOUBLE_DOT, i);
    }
    BULLET_list() {
        return this.getTokens(RegelSpraakParser.BULLET);
    }
    BULLET(i) {
        return this.getToken(RegelSpraakParser.BULLET, i);
    }
    ASTERISK_list() {
        return this.getTokens(RegelSpraakParser.ASTERISK);
    }
    ASTERISK(i) {
        return this.getToken(RegelSpraakParser.ASTERISK, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_bulletPrefix;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBulletPrefix) {
            return visitor.visitBulletPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BulletPrefixContext = BulletPrefixContext;
class ElementaireVoorwaardeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_elementaireVoorwaarde;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementaireVoorwaarde) {
            return visitor.visitElementaireVoorwaarde(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementaireVoorwaardeContext = ElementaireVoorwaardeContext;
class GenesteSamengesteldeVoorwaardeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VOLDOET() {
        return this.getToken(RegelSpraakParser.VOLDOET, 0);
    }
    AAN() {
        return this.getToken(RegelSpraakParser.AAN, 0);
    }
    voorwaardeKwantificatie() {
        return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0);
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    VOLGENDE_VOORWAARDEN() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
    }
    VOLGENDE_VOORWAARDE() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    HIJ() {
        return this.getToken(RegelSpraakParser.HIJ, 0);
    }
    ER() {
        return this.getToken(RegelSpraakParser.ER, 0);
    }
    genesteSamengesteldeVoorwaardeOnderdeel_list() {
        return this.getTypedRuleContexts(GenesteSamengesteldeVoorwaardeOnderdeelContext);
    }
    genesteSamengesteldeVoorwaardeOnderdeel(i) {
        return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeOnderdeelContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_genesteSamengesteldeVoorwaarde;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGenesteSamengesteldeVoorwaarde) {
            return visitor.visitGenesteSamengesteldeVoorwaarde(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenesteSamengesteldeVoorwaardeContext = GenesteSamengesteldeVoorwaardeContext;
class GenesteSamengesteldeVoorwaardeOnderdeelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    nestedBulletPrefix() {
        return this.getTypedRuleContext(NestedBulletPrefixContext, 0);
    }
    elementaireVoorwaarde() {
        return this.getTypedRuleContext(ElementaireVoorwaardeContext, 0);
    }
    genesteSamengesteldeVoorwaarde() {
        return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeOnderdeel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGenesteSamengesteldeVoorwaardeOnderdeel) {
            return visitor.visitGenesteSamengesteldeVoorwaardeOnderdeel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenesteSamengesteldeVoorwaardeOnderdeelContext = GenesteSamengesteldeVoorwaardeOnderdeelContext;
class OnderwerpReferentieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    onderwerpBasis() {
        return this.getTypedRuleContext(OnderwerpBasisContext, 0);
    }
    predicaat() {
        return this.getTypedRuleContext(PredicaatContext, 0);
    }
    DIE() {
        return this.getToken(RegelSpraakParser.DIE, 0);
    }
    DAT() {
        return this.getToken(RegelSpraakParser.DAT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_onderwerpReferentie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOnderwerpReferentie) {
            return visitor.visitOnderwerpReferentie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OnderwerpReferentieContext = OnderwerpReferentieContext;
class OnderwerpReferentieWithNumbersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    onderwerpBasisWithNumbers() {
        return this.getTypedRuleContext(OnderwerpBasisWithNumbersContext, 0);
    }
    predicaat() {
        return this.getTypedRuleContext(PredicaatContext, 0);
    }
    DIE() {
        return this.getToken(RegelSpraakParser.DIE, 0);
    }
    DAT() {
        return this.getToken(RegelSpraakParser.DAT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_onderwerpReferentieWithNumbers;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOnderwerpReferentieWithNumbers) {
            return visitor.visitOnderwerpReferentieWithNumbers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OnderwerpReferentieWithNumbersContext = OnderwerpReferentieWithNumbersContext;
class OnderwerpBasisContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    basisOnderwerp_list() {
        return this.getTypedRuleContexts(BasisOnderwerpContext);
    }
    basisOnderwerp(i) {
        return this.getTypedRuleContext(BasisOnderwerpContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_onderwerpBasis;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOnderwerpBasis) {
            return visitor.visitOnderwerpBasis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OnderwerpBasisContext = OnderwerpBasisContext;
class OnderwerpBasisWithNumbersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    basisOnderwerpWithNumbers_list() {
        return this.getTypedRuleContexts(BasisOnderwerpWithNumbersContext);
    }
    basisOnderwerpWithNumbers(i) {
        return this.getTypedRuleContext(BasisOnderwerpWithNumbersContext, i);
    }
    voorzetsel_list() {
        return this.getTypedRuleContexts(VoorzetselContext);
    }
    voorzetsel(i) {
        return this.getTypedRuleContext(VoorzetselContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_onderwerpBasisWithNumbers;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOnderwerpBasisWithNumbers) {
            return visitor.visitOnderwerpBasisWithNumbers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OnderwerpBasisWithNumbersContext = OnderwerpBasisWithNumbersContext;
class BasisOnderwerpContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    identifierOrKeyword_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordContext);
    }
    identifierOrKeyword(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordContext, i);
    }
    HIJ() {
        return this.getToken(RegelSpraakParser.HIJ, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_basisOnderwerp;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBasisOnderwerp) {
            return visitor.visitBasisOnderwerp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BasisOnderwerpContext = BasisOnderwerpContext;
class BasisOnderwerpWithNumbersContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    identifierOrKeywordWithNumbers_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordWithNumbersContext);
    }
    identifierOrKeywordWithNumbers(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordWithNumbersContext, i);
    }
    HIJ() {
        return this.getToken(RegelSpraakParser.HIJ, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_basisOnderwerpWithNumbers;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBasisOnderwerpWithNumbers) {
            return visitor.visitBasisOnderwerpWithNumbers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BasisOnderwerpWithNumbersContext = BasisOnderwerpWithNumbersContext;
class AttribuutReferentieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    attribuutMetLidwoord() {
        return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_attribuutReferentie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttribuutReferentie) {
            return visitor.visitAttribuutReferentie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttribuutReferentieContext = AttribuutReferentieContext;
class AttribuutMetLidwoordContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoordNoIs() {
        return this.getTypedRuleContext(NaamwoordNoIsContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_attribuutMetLidwoord;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttribuutMetLidwoord) {
            return visitor.visitAttribuutMetLidwoord(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttribuutMetLidwoordContext = AttribuutMetLidwoordContext;
class KenmerkNaamContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    voorzetsel() {
        return this.getTypedRuleContext(VoorzetselContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_kenmerkNaam;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKenmerkNaam) {
            return visitor.visitKenmerkNaam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KenmerkNaamContext = KenmerkNaamContext;
class KenmerkPhraseContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    voorzetsel() {
        return this.getTypedRuleContext(VoorzetselContext, 0);
    }
    identifierOrKeywordWithNumbers_list() {
        return this.getTypedRuleContexts(IdentifierOrKeywordWithNumbersContext);
    }
    identifierOrKeywordWithNumbers(i) {
        return this.getTypedRuleContext(IdentifierOrKeywordWithNumbersContext, i);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_kenmerkPhrase;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKenmerkPhrase) {
            return visitor.visitKenmerkPhrase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KenmerkPhraseContext = KenmerkPhraseContext;
class BezieldeReferentieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    HAAR() {
        return this.getToken(RegelSpraakParser.HAAR, 0);
    }
    HUN() {
        return this.getToken(RegelSpraakParser.HUN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_bezieldeReferentie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBezieldeReferentie) {
            return visitor.visitBezieldeReferentie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BezieldeReferentieContext = BezieldeReferentieContext;
class AggregationSubjectContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    predicaat() {
        return this.getTypedRuleContext(PredicaatContext, 0);
    }
    DIE() {
        return this.getToken(RegelSpraakParser.DIE, 0);
    }
    DAT() {
        return this.getToken(RegelSpraakParser.DAT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_aggregationSubject;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregationSubject) {
            return visitor.visitAggregationSubject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AggregationSubjectContext = AggregationSubjectContext;
class PredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    elementairPredicaat() {
        return this.getTypedRuleContext(ElementairPredicaatContext, 0);
    }
    samengesteldPredicaat() {
        return this.getTypedRuleContext(SamengesteldPredicaatContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_predicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPredicaat) {
            return visitor.visitPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PredicaatContext = PredicaatContext;
class ElementairPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    attribuutVergelijkingsPredicaat() {
        return this.getTypedRuleContext(AttribuutVergelijkingsPredicaatContext, 0);
    }
    objectPredicaat() {
        return this.getTypedRuleContext(ObjectPredicaatContext, 0);
    }
    getalPredicaat() {
        return this.getTypedRuleContext(GetalPredicaatContext, 0);
    }
    tekstPredicaat() {
        return this.getTypedRuleContext(TekstPredicaatContext, 0);
    }
    datumPredicaat() {
        return this.getTypedRuleContext(DatumPredicaatContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_elementairPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementairPredicaat) {
            return visitor.visitElementairPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementairPredicaatContext = ElementairPredicaatContext;
class ObjectPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    eenzijdigeObjectVergelijking() {
        return this.getTypedRuleContext(EenzijdigeObjectVergelijkingContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_objectPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectPredicaat) {
            return visitor.visitObjectPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectPredicaatContext = ObjectPredicaatContext;
class EenzijdigeObjectVergelijkingContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    HEBBEN() {
        return this.getToken(RegelSpraakParser.HEBBEN, 0);
    }
    kenmerkNaam() {
        return this.getTypedRuleContext(KenmerkNaamContext, 0);
    }
    rolNaam() {
        return this.getTypedRuleContext(RolNaamContext, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_eenzijdigeObjectVergelijking;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEenzijdigeObjectVergelijking) {
            return visitor.visitEenzijdigeObjectVergelijking(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EenzijdigeObjectVergelijkingContext = EenzijdigeObjectVergelijkingContext;
class RolNaamContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_rolNaam;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRolNaam) {
            return visitor.visitRolNaam(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RolNaamContext = RolNaamContext;
class AttribuutVergelijkingsPredicaatContext extends antlr4_1.ParserRuleContext {
    _attribuutNaam;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    HEBBEN() {
        return this.getToken(RegelSpraakParser.HEBBEN, 0);
    }
    comparisonOperator() {
        return this.getTypedRuleContext(ComparisonOperatorContext, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    EEN() {
        return this.getToken(RegelSpraakParser.EEN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_attribuutVergelijkingsPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttribuutVergelijkingsPredicaat) {
            return visitor.visitAttribuutVergelijkingsPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttribuutVergelijkingsPredicaatContext = AttribuutVergelijkingsPredicaatContext;
class GetalPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    getalVergelijkingsOperatorMeervoud() {
        return this.getTypedRuleContext(GetalVergelijkingsOperatorMeervoudContext, 0);
    }
    getalExpressie() {
        return this.getTypedRuleContext(GetalExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_getalPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetalPredicaat) {
            return visitor.visitGetalPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GetalPredicaatContext = GetalPredicaatContext;
class TekstPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    tekstVergelijkingsOperatorMeervoud() {
        return this.getTypedRuleContext(TekstVergelijkingsOperatorMeervoudContext, 0);
    }
    tekstExpressie() {
        return this.getTypedRuleContext(TekstExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_tekstPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTekstPredicaat) {
            return visitor.visitTekstPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TekstPredicaatContext = TekstPredicaatContext;
class DatumPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    datumVergelijkingsOperatorMeervoud() {
        return this.getTypedRuleContext(DatumVergelijkingsOperatorMeervoudContext, 0);
    }
    datumExpressie() {
        return this.getTypedRuleContext(DatumExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datumPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumPredicaat) {
            return visitor.visitDatumPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumPredicaatContext = DatumPredicaatContext;
class SamengesteldPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    AAN() {
        return this.getToken(RegelSpraakParser.AAN, 0);
    }
    voorwaardeKwantificatie() {
        return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0);
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    VOLGENDE_VOORWAARDEN() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
    }
    VOLGENDE_VOORWAARDE() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
    }
    VOLDOET() {
        return this.getToken(RegelSpraakParser.VOLDOET, 0);
    }
    VOLDOEN() {
        return this.getToken(RegelSpraakParser.VOLDOEN, 0);
    }
    samengesteldeVoorwaardeOnderdeelInPredicaat_list() {
        return this.getTypedRuleContexts(SamengesteldeVoorwaardeOnderdeelInPredicaatContext);
    }
    samengesteldeVoorwaardeOnderdeelInPredicaat(i) {
        return this.getTypedRuleContext(SamengesteldeVoorwaardeOnderdeelInPredicaatContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_samengesteldPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSamengesteldPredicaat) {
            return visitor.visitSamengesteldPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SamengesteldPredicaatContext = SamengesteldPredicaatContext;
class SamengesteldeVoorwaardeOnderdeelInPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    bulletPrefix() {
        return this.getTypedRuleContext(BulletPrefixContext, 0);
    }
    elementaireVoorwaardeInPredicaat() {
        return this.getTypedRuleContext(ElementaireVoorwaardeInPredicaatContext, 0);
    }
    genesteSamengesteldeVoorwaardeInPredicaat() {
        return this.getTypedRuleContext(GenesteSamengesteldeVoorwaardeInPredicaatContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_samengesteldeVoorwaardeOnderdeelInPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSamengesteldeVoorwaardeOnderdeelInPredicaat) {
            return visitor.visitSamengesteldeVoorwaardeOnderdeelInPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SamengesteldeVoorwaardeOnderdeelInPredicaatContext = SamengesteldeVoorwaardeOnderdeelInPredicaatContext;
class ElementaireVoorwaardeInPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    vergelijkingInPredicaat() {
        return this.getTypedRuleContext(VergelijkingInPredicaatContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_elementaireVoorwaardeInPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElementaireVoorwaardeInPredicaat) {
            return visitor.visitElementaireVoorwaardeInPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElementaireVoorwaardeInPredicaatContext = ElementaireVoorwaardeInPredicaatContext;
class VergelijkingInPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    comparisonOperator() {
        return this.getTypedRuleContext(ComparisonOperatorContext, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    eenzijdigeObjectVergelijking() {
        return this.getTypedRuleContext(EenzijdigeObjectVergelijkingContext, 0);
    }
    kenmerkNaam() {
        return this.getTypedRuleContext(KenmerkNaamContext, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    ZIJN() {
        return this.getToken(RegelSpraakParser.ZIJN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_vergelijkingInPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVergelijkingInPredicaat) {
            return visitor.visitVergelijkingInPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VergelijkingInPredicaatContext = VergelijkingInPredicaatContext;
class GenesteSamengesteldeVoorwaardeInPredicaatContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    AAN() {
        return this.getToken(RegelSpraakParser.AAN, 0);
    }
    voorwaardeKwantificatie() {
        return this.getTypedRuleContext(VoorwaardeKwantificatieContext, 0);
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    VOLGENDE_VOORWAARDEN() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDEN, 0);
    }
    VOLGENDE_VOORWAARDE() {
        return this.getToken(RegelSpraakParser.VOLGENDE_VOORWAARDE, 0);
    }
    VOLDOET() {
        return this.getToken(RegelSpraakParser.VOLDOET, 0);
    }
    VOLDOEN() {
        return this.getToken(RegelSpraakParser.VOLDOEN, 0);
    }
    WORDT() {
        return this.getToken(RegelSpraakParser.WORDT, 0);
    }
    VOLDAAN() {
        return this.getToken(RegelSpraakParser.VOLDAAN, 0);
    }
    samengesteldeVoorwaardeOnderdeelInPredicaat_list() {
        return this.getTypedRuleContexts(SamengesteldeVoorwaardeOnderdeelInPredicaatContext);
    }
    samengesteldeVoorwaardeOnderdeelInPredicaat(i) {
        return this.getTypedRuleContext(SamengesteldeVoorwaardeOnderdeelInPredicaatContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_genesteSamengesteldeVoorwaardeInPredicaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGenesteSamengesteldeVoorwaardeInPredicaat) {
            return visitor.visitGenesteSamengesteldeVoorwaardeInPredicaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GenesteSamengesteldeVoorwaardeInPredicaatContext = GenesteSamengesteldeVoorwaardeInPredicaatContext;
class GetalVergelijkingsOperatorMeervoudContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ZIJN_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
    }
    ZIJN_ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
    }
    ZIJN_GROTER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GROTER_DAN, 0);
    }
    ZIJN_GROTER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GROTER_OF_GELIJK_AAN, 0);
    }
    ZIJN_KLEINER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_KLEINER_DAN, 0);
    }
    ZIJN_KLEINER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_KLEINER_OF_GELIJK_AAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_getalVergelijkingsOperatorMeervoud;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetalVergelijkingsOperatorMeervoud) {
            return visitor.visitGetalVergelijkingsOperatorMeervoud(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GetalVergelijkingsOperatorMeervoudContext = GetalVergelijkingsOperatorMeervoudContext;
class TekstVergelijkingsOperatorMeervoudContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ZIJN_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
    }
    ZIJN_ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_tekstVergelijkingsOperatorMeervoud;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTekstVergelijkingsOperatorMeervoud) {
            return visitor.visitTekstVergelijkingsOperatorMeervoud(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TekstVergelijkingsOperatorMeervoudContext = TekstVergelijkingsOperatorMeervoudContext;
class DatumVergelijkingsOperatorMeervoudContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ZIJN_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
    }
    ZIJN_ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
    }
    ZIJN_LATER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_LATER_DAN, 0);
    }
    ZIJN_LATER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_LATER_OF_GELIJK_AAN, 0);
    }
    ZIJN_EERDER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_EERDER_DAN, 0);
    }
    ZIJN_EERDER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_EERDER_OF_GELIJK_AAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datumVergelijkingsOperatorMeervoud;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumVergelijkingsOperatorMeervoud) {
            return visitor.visitDatumVergelijkingsOperatorMeervoud(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumVergelijkingsOperatorMeervoudContext = DatumVergelijkingsOperatorMeervoudContext;
class GetalExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_getalExpressie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetalExpressie) {
            return visitor.visitGetalExpressie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GetalExpressieContext = GetalExpressieContext;
class TekstExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_tekstExpressie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTekstExpressie) {
            return visitor.visitTekstExpressie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TekstExpressieContext = TekstExpressieContext;
class DatumExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    datumLiteral() {
        return this.getTypedRuleContext(DatumLiteralContext, 0);
    }
    REKENDATUM() {
        return this.getToken(RegelSpraakParser.REKENDATUM, 0);
    }
    REKENJAAR() {
        return this.getToken(RegelSpraakParser.REKENJAAR, 0);
    }
    DE_DATUM_MET() {
        return this.getToken(RegelSpraakParser.DE_DATUM_MET, 0);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    DE_EERSTE_PAASDAG_VAN() {
        return this.getToken(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    bezieldeReferentie() {
        return this.getTypedRuleContext(BezieldeReferentieContext, 0);
    }
    parameterMetLidwoord() {
        return this.getTypedRuleContext(ParameterMetLidwoordContext, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datumExpressie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumExpressie) {
            return visitor.visitDatumExpressie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumExpressieContext = DatumExpressieContext;
class VariabeleDeelContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DAARBIJ_GELDT() {
        return this.getToken(RegelSpraakParser.DAARBIJ_GELDT, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    variabeleToekenning_list() {
        return this.getTypedRuleContexts(VariabeleToekenningContext);
    }
    variabeleToekenning(i) {
        return this.getTypedRuleContext(VariabeleToekenningContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_variabeleDeel;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariabeleDeel) {
            return visitor.visitVariabeleDeel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariabeleDeelContext = VariabeleDeelContext;
class VariabeleToekenningContext extends antlr4_1.ParserRuleContext {
    _article;
    _varName;
    _varExpr;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    variabeleExpressie() {
        return this.getTypedRuleContext(VariabeleExpressieContext, 0);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_variabeleToekenning;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariabeleToekenning) {
            return visitor.visitVariabeleToekenning(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariabeleToekenningContext = VariabeleToekenningContext;
class VariabeleExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    additiveOperator_list() {
        return this.getTypedRuleContexts(AdditiveOperatorContext);
    }
    additiveOperator(i) {
        return this.getTypedRuleContext(AdditiveOperatorContext, i);
    }
    multiplicativeOperator_list() {
        return this.getTypedRuleContexts(MultiplicativeOperatorContext);
    }
    multiplicativeOperator(i) {
        return this.getTypedRuleContext(MultiplicativeOperatorContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_variabeleExpressie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariabeleExpressie) {
            return visitor.visitVariabeleExpressie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariabeleExpressieContext = VariabeleExpressieContext;
class ExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_expressie;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressieContext = ExpressieContext;
class SimpleExprContext extends ExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleExpr) {
            return visitor.visitSimpleExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleExprContext = SimpleExprContext;
class ExprBegrenzingAfrondingContext extends ExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    begrenzing() {
        return this.getTypedRuleContext(BegrenzingContext, 0);
    }
    afronding() {
        return this.getTypedRuleContext(AfrondingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprBegrenzingAfronding) {
            return visitor.visitExprBegrenzingAfronding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprBegrenzingAfrondingContext = ExprBegrenzingAfrondingContext;
class ExprBegrenzingContext extends ExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    begrenzing() {
        return this.getTypedRuleContext(BegrenzingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprBegrenzing) {
            return visitor.visitExprBegrenzing(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprBegrenzingContext = ExprBegrenzingContext;
class ExprAfrondingContext extends ExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    afronding() {
        return this.getTypedRuleContext(AfrondingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExprAfronding) {
            return visitor.visitExprAfronding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprAfrondingContext = ExprAfrondingContext;
class SimpleExpressieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_simpleExpressie;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.SimpleExpressieContext = SimpleExpressieContext;
class SimpleExprBegrenzingContext extends SimpleExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonExpression() {
        return this.getTypedRuleContext(ComparisonExpressionContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    begrenzing() {
        return this.getTypedRuleContext(BegrenzingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleExprBegrenzing) {
            return visitor.visitSimpleExprBegrenzing(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleExprBegrenzingContext = SimpleExprBegrenzingContext;
class SimpleExprAfrondingContext extends SimpleExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonExpression() {
        return this.getTypedRuleContext(ComparisonExpressionContext, 0);
    }
    afronding() {
        return this.getTypedRuleContext(AfrondingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleExprAfronding) {
            return visitor.visitSimpleExprAfronding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleExprAfrondingContext = SimpleExprAfrondingContext;
class SimpleExprBegrenzingAfrondingContext extends SimpleExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonExpression() {
        return this.getTypedRuleContext(ComparisonExpressionContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    begrenzing() {
        return this.getTypedRuleContext(BegrenzingContext, 0);
    }
    afronding() {
        return this.getTypedRuleContext(AfrondingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleExprBegrenzingAfronding) {
            return visitor.visitSimpleExprBegrenzingAfronding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleExprBegrenzingAfrondingContext = SimpleExprBegrenzingAfrondingContext;
class SimpleExprBaseContext extends SimpleExpressieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonExpression() {
        return this.getTypedRuleContext(ComparisonExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleExprBase) {
            return visitor.visitSimpleExprBase(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleExprBaseContext = SimpleExprBaseContext;
class LogicalExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_logicalExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.LogicalExpressionContext = LogicalExpressionContext;
class LogicalExprContext extends LogicalExpressionContext {
    _left;
    _op;
    _right;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    comparisonExpression() {
        return this.getTypedRuleContext(ComparisonExpressionContext, 0);
    }
    logicalExpression() {
        return this.getTypedRuleContext(LogicalExpressionContext, 0);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    OF() {
        return this.getToken(RegelSpraakParser.OF, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogicalExpr) {
            return visitor.visitLogicalExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogicalExprContext = LogicalExprContext;
class ComparisonExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_comparisonExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ComparisonExpressionContext = ComparisonExpressionContext;
class GelijkIsAanOfExprContext extends ComparisonExpressionContext {
    _left;
    _op;
    _firstValue;
    _literalValue;
    _middleValues = [];
    _lastValue;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    OF() {
        return this.getToken(RegelSpraakParser.OF, 0);
    }
    additiveExpression() {
        return this.getTypedRuleContext(AdditiveExpressionContext, 0);
    }
    gelijkIsAanOperator() {
        return this.getTypedRuleContext(GelijkIsAanOperatorContext, 0);
    }
    literalValue_list() {
        return this.getTypedRuleContexts(LiteralValueContext);
    }
    literalValue(i) {
        return this.getTypedRuleContext(LiteralValueContext, i);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGelijkIsAanOfExpr) {
            return visitor.visitGelijkIsAanOfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GelijkIsAanOfExprContext = GelijkIsAanOfExprContext;
class SubordinateClauseExprContext extends ComparisonExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    subordinateClauseExpression() {
        return this.getTypedRuleContext(SubordinateClauseExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubordinateClauseExpr) {
            return visitor.visitSubordinateClauseExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubordinateClauseExprContext = SubordinateClauseExprContext;
class PeriodeCheckExprContext extends ComparisonExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    periodevergelijkingElementair() {
        return this.getTypedRuleContext(PeriodevergelijkingElementairContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPeriodeCheckExpr) {
            return visitor.visitPeriodeCheckExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PeriodeCheckExprContext = PeriodeCheckExprContext;
class BinaryComparisonExprContext extends ComparisonExpressionContext {
    _left;
    _right;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    additiveExpression_list() {
        return this.getTypedRuleContexts(AdditiveExpressionContext);
    }
    additiveExpression(i) {
        return this.getTypedRuleContext(AdditiveExpressionContext, i);
    }
    comparisonOperator() {
        return this.getTypedRuleContext(ComparisonOperatorContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinaryComparisonExpr) {
            return visitor.visitBinaryComparisonExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BinaryComparisonExprContext = BinaryComparisonExprContext;
class UnaryConditionExprContext extends ComparisonExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    unaryCondition() {
        return this.getTypedRuleContext(UnaryConditionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryConditionExpr) {
            return visitor.visitUnaryConditionExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryConditionExprContext = UnaryConditionExprContext;
class HeeftKenmerkExprContext extends ComparisonExpressionContext {
    _left;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HEEFT() {
        return this.getToken(RegelSpraakParser.HEEFT, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    additiveExpression() {
        return this.getTypedRuleContext(AdditiveExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHeeftKenmerkExpr) {
            return visitor.visitHeeftKenmerkExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.HeeftKenmerkExprContext = HeeftKenmerkExprContext;
class IsKenmerkExprContext extends ComparisonExpressionContext {
    _left;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    additiveExpression() {
        return this.getTypedRuleContext(AdditiveExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIsKenmerkExpr) {
            return visitor.visitIsKenmerkExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IsKenmerkExprContext = IsKenmerkExprContext;
class RegelStatusConditionExprContext extends ComparisonExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    regelStatusCondition() {
        return this.getTypedRuleContext(RegelStatusConditionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelStatusConditionExpr) {
            return visitor.visitRegelStatusConditionExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelStatusConditionExprContext = RegelStatusConditionExprContext;
class LiteralValueContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ENUM_LITERAL() {
        return this.getToken(RegelSpraakParser.ENUM_LITERAL, 0);
    }
    STRING_LITERAL() {
        return this.getToken(RegelSpraakParser.STRING_LITERAL, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    unitIdentifier() {
        return this.getTypedRuleContext(UnitIdentifierContext, 0);
    }
    PERCENTAGE_LITERAL() {
        return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
    }
    datumLiteral() {
        return this.getTypedRuleContext(DatumLiteralContext, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_literalValue;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralValue) {
            return visitor.visitLiteralValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralValueContext = LiteralValueContext;
class GelijkIsAanOperatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GELIJK_IS_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_IS_AAN, 0);
    }
    IS_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
    }
    GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
    }
    ZIJN_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_gelijkIsAanOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGelijkIsAanOperator) {
            return visitor.visitGelijkIsAanOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GelijkIsAanOperatorContext = GelijkIsAanOperatorContext;
class ComparisonOperatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_AAN, 0);
    }
    ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ONGELIJK_AAN, 0);
    }
    GELIJK_IS_AAN() {
        return this.getToken(RegelSpraakParser.GELIJK_IS_AAN, 0);
    }
    GROTER_DAN() {
        return this.getToken(RegelSpraakParser.GROTER_DAN, 0);
    }
    GROTER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.GROTER_OF_GELIJK_AAN, 0);
    }
    KLEINER_DAN() {
        return this.getToken(RegelSpraakParser.KLEINER_DAN, 0);
    }
    KLEINER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.KLEINER_OF_GELIJK_AAN, 0);
    }
    KLEINER_IS_DAN() {
        return this.getToken(RegelSpraakParser.KLEINER_IS_DAN, 0);
    }
    GROTER_IS_DAN() {
        return this.getToken(RegelSpraakParser.GROTER_IS_DAN, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    LATER_DAN() {
        return this.getToken(RegelSpraakParser.LATER_DAN, 0);
    }
    LATER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.LATER_OF_GELIJK_AAN, 0);
    }
    EERDER_DAN() {
        return this.getToken(RegelSpraakParser.EERDER_DAN, 0);
    }
    EERDER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.EERDER_OF_GELIJK_AAN, 0);
    }
    NIET() {
        return this.getToken(RegelSpraakParser.NIET, 0);
    }
    IS_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_GELIJK_AAN, 0);
    }
    IS_ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_ONGELIJK_AAN, 0);
    }
    IS_KLEINER_DAN() {
        return this.getToken(RegelSpraakParser.IS_KLEINER_DAN, 0);
    }
    IS_KLEINER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_KLEINER_OF_GELIJK_AAN, 0);
    }
    IS_GROTER_DAN() {
        return this.getToken(RegelSpraakParser.IS_GROTER_DAN, 0);
    }
    IS_GROTER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_GROTER_OF_GELIJK_AAN, 0);
    }
    ZIJN_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GELIJK_AAN, 0);
    }
    ZIJN_ONGELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_ONGELIJK_AAN, 0);
    }
    ZIJN_KLEINER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_KLEINER_DAN, 0);
    }
    ZIJN_KLEINER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_KLEINER_OF_GELIJK_AAN, 0);
    }
    ZIJN_GROTER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GROTER_DAN, 0);
    }
    ZIJN_GROTER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_GROTER_OF_GELIJK_AAN, 0);
    }
    IS_LATER_DAN() {
        return this.getToken(RegelSpraakParser.IS_LATER_DAN, 0);
    }
    IS_LATER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_LATER_OF_GELIJK_AAN, 0);
    }
    IS_EERDER_DAN() {
        return this.getToken(RegelSpraakParser.IS_EERDER_DAN, 0);
    }
    IS_EERDER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.IS_EERDER_OF_GELIJK_AAN, 0);
    }
    ZIJN_LATER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_LATER_DAN, 0);
    }
    ZIJN_LATER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_LATER_OF_GELIJK_AAN, 0);
    }
    ZIJN_EERDER_DAN() {
        return this.getToken(RegelSpraakParser.ZIJN_EERDER_DAN, 0);
    }
    ZIJN_EERDER_OF_GELIJK_AAN() {
        return this.getToken(RegelSpraakParser.ZIJN_EERDER_OF_GELIJK_AAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_comparisonOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComparisonOperatorContext = ComparisonOperatorContext;
class AdditiveExpressionContext extends antlr4_1.ParserRuleContext {
    _left;
    _right;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    multiplicativeExpression_list() {
        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
    }
    multiplicativeExpression(i) {
        return this.getTypedRuleContext(MultiplicativeExpressionContext, i);
    }
    additiveOperator_list() {
        return this.getTypedRuleContexts(AdditiveOperatorContext);
    }
    additiveOperator(i) {
        return this.getTypedRuleContext(AdditiveOperatorContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_additiveExpression;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveExpressionContext = AdditiveExpressionContext;
class AdditiveOperatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    PLUS() {
        return this.getToken(RegelSpraakParser.PLUS, 0);
    }
    MIN() {
        return this.getToken(RegelSpraakParser.MIN, 0);
    }
    VERMINDERD_MET() {
        return this.getToken(RegelSpraakParser.VERMINDERD_MET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_additiveOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveOperator) {
            return visitor.visitAdditiveOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveOperatorContext = AdditiveOperatorContext;
class MultiplicativeExpressionContext extends antlr4_1.ParserRuleContext {
    _left;
    _right;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    powerExpression_list() {
        return this.getTypedRuleContexts(PowerExpressionContext);
    }
    powerExpression(i) {
        return this.getTypedRuleContext(PowerExpressionContext, i);
    }
    multiplicativeOperator_list() {
        return this.getTypedRuleContexts(MultiplicativeOperatorContext);
    }
    multiplicativeOperator(i) {
        return this.getTypedRuleContext(MultiplicativeOperatorContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_multiplicativeExpression;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
class MultiplicativeOperatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MAAL() {
        return this.getToken(RegelSpraakParser.MAAL, 0);
    }
    GEDEELD_DOOR() {
        return this.getToken(RegelSpraakParser.GEDEELD_DOOR, 0);
    }
    GEDEELD_DOOR_ABS() {
        return this.getToken(RegelSpraakParser.GEDEELD_DOOR_ABS, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_multiplicativeOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeOperator) {
            return visitor.visitMultiplicativeOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeOperatorContext = MultiplicativeOperatorContext;
class PowerExpressionContext extends antlr4_1.ParserRuleContext {
    _left;
    _right;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    powerOperator_list() {
        return this.getTypedRuleContexts(PowerOperatorContext);
    }
    powerOperator(i) {
        return this.getTypedRuleContext(PowerOperatorContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_powerExpression;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPowerExpression) {
            return visitor.visitPowerExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowerExpressionContext = PowerExpressionContext;
class PowerOperatorContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    TOT_DE_MACHT() {
        return this.getToken(RegelSpraakParser.TOT_DE_MACHT, 0);
    }
    CARET() {
        return this.getToken(RegelSpraakParser.CARET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_powerOperator;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPowerOperator) {
            return visitor.visitPowerOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PowerOperatorContext = PowerOperatorContext;
class PrimaryExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_primaryExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PrimaryExpressionContext = PrimaryExpressionContext;
class WortelFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_WORTEL_VAN() {
        return this.getToken(RegelSpraakParser.DE_WORTEL_VAN, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWortelFuncExpr) {
            return visitor.visitWortelFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WortelFuncExprContext = WortelFuncExprContext;
class BooleanTrueLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    WAAR() {
        return this.getToken(RegelSpraakParser.WAAR, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanTrueLiteralExpr) {
            return visitor.visitBooleanTrueLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanTrueLiteralExprContext = BooleanTrueLiteralExprContext;
class AbsValFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_ABSOLUTE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_ABSOLUTE_WAARDE_VAN, 0);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAbsValFuncExpr) {
            return visitor.visitAbsValFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AbsValFuncExprContext = AbsValFuncExprContext;
class MaxValFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_MAXIMALE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMaxValFuncExpr) {
            return visitor.visitMaxValFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MaxValFuncExprContext = MaxValFuncExprContext;
class RekendatumKeywordExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    REKENDATUM() {
        return this.getToken(RegelSpraakParser.REKENDATUM, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRekendatumKeywordExpr) {
            return visitor.visitRekendatumKeywordExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RekendatumKeywordExprContext = RekendatumKeywordExprContext;
class EnumLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ENUM_LITERAL() {
        return this.getToken(RegelSpraakParser.ENUM_LITERAL, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumLiteralExpr) {
            return visitor.visitEnumLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumLiteralExprContext = EnumLiteralExprContext;
class NumberLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    unitIdentifier() {
        return this.getTypedRuleContext(UnitIdentifierContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNumberLiteralExpr) {
            return visitor.visitNumberLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NumberLiteralExprContext = NumberLiteralExprContext;
class DatumLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    datumLiteral() {
        return this.getTypedRuleContext(DatumLiteralContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumLiteralExpr) {
            return visitor.visitDatumLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumLiteralExprContext = DatumLiteralExprContext;
class AantalFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    aggregationSubject() {
        return this.getTypedRuleContext(AggregationSubjectContext, 0);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAantalFuncExpr) {
            return visitor.visitAantalFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AantalFuncExprContext = AantalFuncExprContext;
class UnaryNietExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NIET() {
        return this.getToken(RegelSpraakParser.NIET, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryNietExpr) {
            return visitor.visitUnaryNietExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryNietExprContext = UnaryNietExprContext;
class ConcatenatieExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    CONCATENATIE_VAN() {
        return this.getToken(RegelSpraakParser.CONCATENATIE_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    OF() {
        return this.getToken(RegelSpraakParser.OF, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConcatenatieExpr) {
            return visitor.visitConcatenatieExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConcatenatieExprContext = ConcatenatieExprContext;
class SomAlleAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    SOM_VAN() {
        return this.getToken(RegelSpraakParser.SOM_VAN, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSomAlleAttribuutExpr) {
            return visitor.visitSomAlleAttribuutExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SomAlleAttribuutExprContext = SomAlleAttribuutExprContext;
class AttrRefExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAttrRefExpr) {
            return visitor.visitAttrRefExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AttrRefExprContext = AttrRefExprContext;
class DagUitFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    DAG() {
        return this.getToken(RegelSpraakParser.DAG, 0);
    }
    UIT() {
        return this.getToken(RegelSpraakParser.UIT, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDagUitFuncExpr) {
            return visitor.visitDagUitFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DagUitFuncExprContext = DagUitFuncExprContext;
class BegrenzingExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    begrenzing() {
        return this.getTypedRuleContext(BegrenzingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBegrenzingExpr) {
            return visitor.visitBegrenzingExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BegrenzingExprContext = BegrenzingExprContext;
class NaamwoordExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaamwoordExpr) {
            return visitor.visitNaamwoordExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NaamwoordExprContext = NaamwoordExprContext;
class BooleanFalseLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ONWAAR() {
        return this.getToken(RegelSpraakParser.ONWAAR, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBooleanFalseLiteralExpr) {
            return visitor.visitBooleanFalseLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanFalseLiteralExprContext = BooleanFalseLiteralExprContext;
class JaarUitFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    UIT() {
        return this.getToken(RegelSpraakParser.UIT, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJaarUitFuncExpr) {
            return visitor.visitJaarUitFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.JaarUitFuncExprContext = JaarUitFuncExprContext;
class TotaalVanExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET_TOTAAL_VAN() {
        return this.getToken(RegelSpraakParser.HET_TOTAAL_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    conditieBijExpressie() {
        return this.getTypedRuleContext(ConditieBijExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotaalVanExpr) {
            return visitor.visitTotaalVanExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TotaalVanExprContext = TotaalVanExprContext;
class TijdsevenredigDeelExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET_TIJDSEVENREDIG_DEEL_PER() {
        return this.getToken(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    conditieBijExpressie() {
        return this.getTypedRuleContext(ConditieBijExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTijdsevenredigDeelExpr) {
            return visitor.visitTijdsevenredigDeelExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TijdsevenredigDeelExprContext = TijdsevenredigDeelExprContext;
class CapitalizedTijdsevenredigDeelExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET_TIJDSEVENREDIG_DEEL_PER() {
        return this.getToken(RegelSpraakParser.HET_TIJDSEVENREDIG_DEEL_PER, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    identifier_list() {
        return this.getTypedRuleContexts(IdentifierContext);
    }
    identifier(i) {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
    conditieBijExpressie() {
        return this.getTypedRuleContext(ConditieBijExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCapitalizedTijdsevenredigDeelExpr) {
            return visitor.visitCapitalizedTijdsevenredigDeelExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CapitalizedTijdsevenredigDeelExprContext = CapitalizedTijdsevenredigDeelExprContext;
class AantalAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAantalAttribuutExpr) {
            return visitor.visitAantalAttribuutExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AantalAttribuutExprContext = AantalAttribuutExprContext;
class ParenExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenExpr) {
            return visitor.visitParenExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenExprContext = ParenExprContext;
class DimensieRangeAggExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VANAF() {
        return this.getToken(RegelSpraakParser.VANAF, 0);
    }
    naamwoord_list() {
        return this.getTypedRuleContexts(NaamwoordContext);
    }
    naamwoord(i) {
        return this.getTypedRuleContext(NaamwoordContext, i);
    }
    TM() {
        return this.getToken(RegelSpraakParser.TM, 0);
    }
    getalAggregatieFunctie() {
        return this.getTypedRuleContext(GetalAggregatieFunctieContext, 0);
    }
    datumAggregatieFunctie() {
        return this.getTypedRuleContext(DatumAggregatieFunctieContext, 0);
    }
    bezieldeReferentie() {
        return this.getTypedRuleContext(BezieldeReferentieContext, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDimensieRangeAggExpr) {
            return visitor.visitDimensieRangeAggExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DimensieRangeAggExprContext = DimensieRangeAggExprContext;
class DatumMetFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_DATUM_MET() {
        return this.getToken(RegelSpraakParser.DE_DATUM_MET, 0);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumMetFuncExpr) {
            return visitor.visitDatumMetFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumMetFuncExprContext = DatumMetFuncExprContext;
class PercentageLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    PERCENTAGE_LITERAL() {
        return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPercentageLiteralExpr) {
            return visitor.visitPercentageLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PercentageLiteralExprContext = PercentageLiteralExprContext;
class StringLiteralExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    STRING_LITERAL() {
        return this.getToken(RegelSpraakParser.STRING_LITERAL, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteralExpr) {
            return visitor.visitStringLiteralExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLiteralExprContext = StringLiteralExprContext;
class PercentageFuncExprContext extends PrimaryExpressionContext {
    _p;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    PERCENTAGE_LITERAL() {
        return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
    }
    PERCENT_SIGN() {
        return this.getToken(RegelSpraakParser.PERCENT_SIGN, 0);
    }
    IDENTIFIER() {
        return this.getToken(RegelSpraakParser.IDENTIFIER, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPercentageFuncExpr) {
            return visitor.visitPercentageFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PercentageFuncExprContext = PercentageFuncExprContext;
class EersteDatumFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    EERSTE_VAN() {
        return this.getToken(RegelSpraakParser.EERSTE_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEersteDatumFuncExpr) {
            return visitor.visitEersteDatumFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EersteDatumFuncExprContext = EersteDatumFuncExprContext;
class PasenFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_EERSTE_PAASDAG_VAN() {
        return this.getToken(RegelSpraakParser.DE_EERSTE_PAASDAG_VAN, 0);
    }
    LPAREN() {
        return this.getToken(RegelSpraakParser.LPAREN, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPasenFuncExpr) {
            return visitor.visitPasenFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PasenFuncExprContext = PasenFuncExprContext;
class AbsTijdsduurFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_ABSOLUTE_TIJDSDUUR_VAN() {
        return this.getToken(RegelSpraakParser.DE_ABSOLUTE_TIJDSDUUR_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    IN_HELE() {
        return this.getToken(RegelSpraakParser.IN_HELE, 0);
    }
    unitIdentifier() {
        return this.getTypedRuleContext(UnitIdentifierContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAbsTijdsduurFuncExpr) {
            return visitor.visitAbsTijdsduurFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AbsTijdsduurFuncExprContext = AbsTijdsduurFuncExprContext;
class MaandUitFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    UIT() {
        return this.getToken(RegelSpraakParser.UIT, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMaandUitFuncExpr) {
            return visitor.visitMaandUitFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MaandUitFuncExprContext = MaandUitFuncExprContext;
class CapitalizedTotaalVanExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET_TOTAAL_VAN() {
        return this.getToken(RegelSpraakParser.HET_TOTAAL_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    identifier_list() {
        return this.getTypedRuleContexts(IdentifierContext);
    }
    identifier(i) {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
    conditieBijExpressie() {
        return this.getTypedRuleContext(ConditieBijExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCapitalizedTotaalVanExpr) {
            return visitor.visitCapitalizedTotaalVanExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CapitalizedTotaalVanExprContext = CapitalizedTotaalVanExprContext;
class IdentifierExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierExpr) {
            return visitor.visitIdentifierExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierExprContext = IdentifierExprContext;
class DimensieAggExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    attribuutMetLidwoord() {
        return this.getTypedRuleContext(AttribuutMetLidwoordContext, 0);
    }
    dimensieSelectie() {
        return this.getTypedRuleContext(DimensieSelectieContext, 0);
    }
    getalAggregatieFunctie() {
        return this.getTypedRuleContext(GetalAggregatieFunctieContext, 0);
    }
    datumAggregatieFunctie() {
        return this.getTypedRuleContext(DatumAggregatieFunctieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDimensieAggExpr) {
            return visitor.visitDimensieAggExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DimensieAggExprContext = DimensieAggExprContext;
class TijdsduurFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    TIJDSDUUR_VAN() {
        return this.getToken(RegelSpraakParser.TIJDSDUUR_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    IN_HELE() {
        return this.getToken(RegelSpraakParser.IN_HELE, 0);
    }
    unitIdentifier() {
        return this.getTypedRuleContext(UnitIdentifierContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTijdsduurFuncExpr) {
            return visitor.visitTijdsduurFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TijdsduurFuncExprContext = TijdsduurFuncExprContext;
class OnderwerpRefExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOnderwerpRefExpr) {
            return visitor.visitOnderwerpRefExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OnderwerpRefExprContext = OnderwerpRefExprContext;
class SomFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    SOM_VAN() {
        return this.getToken(RegelSpraakParser.SOM_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSomFuncExpr) {
            return visitor.visitSomFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SomFuncExprContext = SomFuncExprContext;
class SomAlleExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    SOM_VAN() {
        return this.getToken(RegelSpraakParser.SOM_VAN, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSomAlleExpr) {
            return visitor.visitSomAlleExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SomAlleExprContext = SomAlleExprContext;
class SimpleConcatenatieExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    OF() {
        return this.getToken(RegelSpraakParser.OF, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleConcatenatieExpr) {
            return visitor.visitSimpleConcatenatieExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleConcatenatieExprContext = SimpleConcatenatieExprContext;
class BegrenzingAfrondingExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    begrenzing() {
        return this.getTypedRuleContext(BegrenzingContext, 0);
    }
    afronding() {
        return this.getTypedRuleContext(AfrondingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBegrenzingAfrondingExpr) {
            return visitor.visitBegrenzingAfrondingExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BegrenzingAfrondingExprContext = BegrenzingAfrondingExprContext;
class PercentageOfExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    PERCENTAGE_LITERAL() {
        return this.getToken(RegelSpraakParser.PERCENTAGE_LITERAL, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPercentageOfExpr) {
            return visitor.visitPercentageOfExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PercentageOfExprContext = PercentageOfExprContext;
class MinValFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_MINIMALE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMinValFuncExpr) {
            return visitor.visitMinValFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MinValFuncExprContext = MinValFuncExprContext;
class MaxAlleAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_MAXIMALE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMaxAlleAttribuutExpr) {
            return visitor.visitMaxAlleAttribuutExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MaxAlleAttribuutExprContext = MaxAlleAttribuutExprContext;
class DateCalcExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    datumExpressie() {
        return this.getTypedRuleContext(DatumExpressieContext, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    timeUnit() {
        return this.getTypedRuleContext(TimeUnitContext, 0);
    }
    PLUS() {
        return this.getToken(RegelSpraakParser.PLUS, 0);
    }
    MIN() {
        return this.getToken(RegelSpraakParser.MIN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateCalcExpr) {
            return visitor.visitDateCalcExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateCalcExprContext = DateCalcExprContext;
class BezieldeRefExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    bezieldeReferentie() {
        return this.getTypedRuleContext(BezieldeReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBezieldeRefExpr) {
            return visitor.visitBezieldeRefExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BezieldeRefExprContext = BezieldeRefExprContext;
class MinAlleAttribuutExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    DE_MINIMALE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN, 0);
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMinAlleAttribuutExpr) {
            return visitor.visitMinAlleAttribuutExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MinAlleAttribuutExprContext = MinAlleAttribuutExprContext;
class AfrondingExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    afronding() {
        return this.getTypedRuleContext(AfrondingContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAfrondingExpr) {
            return visitor.visitAfrondingExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AfrondingExprContext = AfrondingExprContext;
class LaatsteDatumFuncExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    LAATSTE_VAN() {
        return this.getToken(RegelSpraakParser.LAATSTE_VAN, 0);
    }
    primaryExpression_list() {
        return this.getTypedRuleContexts(PrimaryExpressionContext);
    }
    primaryExpression(i) {
        return this.getTypedRuleContext(PrimaryExpressionContext, i);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLaatsteDatumFuncExpr) {
            return visitor.visitLaatsteDatumFuncExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LaatsteDatumFuncExprContext = LaatsteDatumFuncExprContext;
class HetAantalDagenInExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HET_list() {
        return this.getTokens(RegelSpraakParser.HET);
    }
    HET(i) {
        return this.getToken(RegelSpraakParser.HET, i);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    DAGEN() {
        return this.getToken(RegelSpraakParser.DAGEN, 0);
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    DAT() {
        return this.getToken(RegelSpraakParser.DAT, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    MAAND() {
        return this.getToken(RegelSpraakParser.MAAND, 0);
    }
    JAAR() {
        return this.getToken(RegelSpraakParser.JAAR, 0);
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHetAantalDagenInExpr) {
            return visitor.visitHetAantalDagenInExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.HetAantalDagenInExprContext = HetAantalDagenInExprContext;
class UnaryMinusExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    MIN() {
        return this.getToken(RegelSpraakParser.MIN, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    MINUS() {
        return this.getToken(RegelSpraakParser.MINUS, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryMinusExpr) {
            return visitor.visitUnaryMinusExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryMinusExprContext = UnaryMinusExprContext;
class ParamRefExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    parameterMetLidwoord() {
        return this.getTypedRuleContext(ParameterMetLidwoordContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParamRefExpr) {
            return visitor.visitParamRefExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParamRefExprContext = ParamRefExprContext;
class PronounExprContext extends PrimaryExpressionContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    HIJ() {
        return this.getToken(RegelSpraakParser.HIJ, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPronounExpr) {
            return visitor.visitPronounExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PronounExprContext = PronounExprContext;
class AfrondingContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    AFGEROND_OP() {
        return this.getToken(RegelSpraakParser.AFGEROND_OP, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    DECIMALEN() {
        return this.getToken(RegelSpraakParser.DECIMALEN, 0);
    }
    NAAR_BENEDEN() {
        return this.getToken(RegelSpraakParser.NAAR_BENEDEN, 0);
    }
    NAAR_BOVEN() {
        return this.getToken(RegelSpraakParser.NAAR_BOVEN, 0);
    }
    REKENKUNDIG() {
        return this.getToken(RegelSpraakParser.REKENKUNDIG, 0);
    }
    RICHTING_NUL() {
        return this.getToken(RegelSpraakParser.RICHTING_NUL, 0);
    }
    WEG_VAN_NUL() {
        return this.getToken(RegelSpraakParser.WEG_VAN_NUL, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_afronding;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAfronding) {
            return visitor.visitAfronding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AfrondingContext = AfrondingContext;
class BegrenzingContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    begrenzingMinimum() {
        return this.getTypedRuleContext(BegrenzingMinimumContext, 0);
    }
    begrenzingMaximum() {
        return this.getTypedRuleContext(BegrenzingMaximumContext, 0);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_begrenzing;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBegrenzing) {
            return visitor.visitBegrenzing(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BegrenzingContext = BegrenzingContext;
class BegrenzingMinimumContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MET_EEN_MINIMUM_VAN() {
        return this.getToken(RegelSpraakParser.MET_EEN_MINIMUM_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_begrenzingMinimum;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBegrenzingMinimum) {
            return visitor.visitBegrenzingMinimum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BegrenzingMinimumContext = BegrenzingMinimumContext;
class BegrenzingMaximumContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MET_EEN_MAXIMUM_VAN() {
        return this.getToken(RegelSpraakParser.MET_EEN_MAXIMUM_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_begrenzingMaximum;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBegrenzingMaximum) {
            return visitor.visitBegrenzingMaximum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BegrenzingMaximumContext = BegrenzingMaximumContext;
class ConditieBijExpressieContext extends antlr4_1.ParserRuleContext {
    _condition;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    GEDURENDE_DE_TIJD_DAT() {
        return this.getToken(RegelSpraakParser.GEDURENDE_DE_TIJD_DAT, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    periodevergelijkingEnkelvoudig() {
        return this.getTypedRuleContext(PeriodevergelijkingEnkelvoudigContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_conditieBijExpressie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditieBijExpressie) {
            return visitor.visitConditieBijExpressie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditieBijExpressieContext = ConditieBijExpressieContext;
class PeriodevergelijkingElementairContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    HET_IS_DE_PERIODE() {
        return this.getToken(RegelSpraakParser.HET_IS_DE_PERIODE, 0);
    }
    periodevergelijkingEnkelvoudig() {
        return this.getTypedRuleContext(PeriodevergelijkingEnkelvoudigContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_periodevergelijkingElementair;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPeriodevergelijkingElementair) {
            return visitor.visitPeriodevergelijkingElementair(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PeriodevergelijkingElementairContext = PeriodevergelijkingElementairContext;
class PeriodevergelijkingEnkelvoudigContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    VANAF() {
        return this.getToken(RegelSpraakParser.VANAF, 0);
    }
    datumExpressie_list() {
        return this.getTypedRuleContexts(DatumExpressieContext);
    }
    datumExpressie(i) {
        return this.getTypedRuleContext(DatumExpressieContext, i);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    TOT_EN_MET() {
        return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_periodevergelijkingEnkelvoudig;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPeriodevergelijkingEnkelvoudig) {
            return visitor.visitPeriodevergelijkingEnkelvoudig(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PeriodevergelijkingEnkelvoudigContext = PeriodevergelijkingEnkelvoudigContext;
class PeriodeDefinitieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_periodeDefinitie;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PeriodeDefinitieContext = PeriodeDefinitieContext;
class VanafPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VANAF() {
        return this.getToken(RegelSpraakParser.VANAF, 0);
    }
    dateExpression() {
        return this.getTypedRuleContext(DateExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVanafPeriode) {
            return visitor.visitVanafPeriode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VanafPeriodeContext = VanafPeriodeContext;
class VanTotPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    dateExpression_list() {
        return this.getTypedRuleContexts(DateExpressionContext);
    }
    dateExpression(i) {
        return this.getTypedRuleContext(DateExpressionContext, i);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVanTotPeriode) {
            return visitor.visitVanTotPeriode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VanTotPeriodeContext = VanTotPeriodeContext;
class VanTotEnMetPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    dateExpression_list() {
        return this.getTypedRuleContexts(DateExpressionContext);
    }
    dateExpression(i) {
        return this.getTypedRuleContext(DateExpressionContext, i);
    }
    TOT_EN_MET() {
        return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVanTotEnMetPeriode) {
            return visitor.visitVanTotEnMetPeriode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VanTotEnMetPeriodeContext = VanTotEnMetPeriodeContext;
class TotPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    TOT() {
        return this.getToken(RegelSpraakParser.TOT, 0);
    }
    dateExpression() {
        return this.getTypedRuleContext(DateExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotPeriode) {
            return visitor.visitTotPeriode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TotPeriodeContext = TotPeriodeContext;
class TotEnMetPeriodeContext extends PeriodeDefinitieContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    TOT_EN_MET() {
        return this.getToken(RegelSpraakParser.TOT_EN_MET, 0);
    }
    dateExpression() {
        return this.getTypedRuleContext(DateExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTotEnMetPeriode) {
            return visitor.visitTotEnMetPeriode(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TotEnMetPeriodeContext = TotEnMetPeriodeContext;
class DateExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    datumLiteral() {
        return this.getTypedRuleContext(DatumLiteralContext, 0);
    }
    REKENDATUM() {
        return this.getToken(RegelSpraakParser.REKENDATUM, 0);
    }
    REKENJAAR() {
        return this.getToken(RegelSpraakParser.REKENJAAR, 0);
    }
    attribuutReferentie() {
        return this.getTypedRuleContext(AttribuutReferentieContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_dateExpression;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDateExpression) {
            return visitor.visitDateExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DateExpressionContext = DateExpressionContext;
class GetalAggregatieFunctieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    HET() {
        return this.getToken(RegelSpraakParser.HET, 0);
    }
    AANTAL() {
        return this.getToken(RegelSpraakParser.AANTAL, 0);
    }
    DE_MAXIMALE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_MAXIMALE_WAARDE_VAN, 0);
    }
    DE_MINIMALE_WAARDE_VAN() {
        return this.getToken(RegelSpraakParser.DE_MINIMALE_WAARDE_VAN, 0);
    }
    SOM_VAN() {
        return this.getToken(RegelSpraakParser.SOM_VAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_getalAggregatieFunctie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetalAggregatieFunctie) {
            return visitor.visitGetalAggregatieFunctie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GetalAggregatieFunctieContext = GetalAggregatieFunctieContext;
class DatumAggregatieFunctieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    EERSTE_VAN() {
        return this.getToken(RegelSpraakParser.EERSTE_VAN, 0);
    }
    LAATSTE_VAN() {
        return this.getToken(RegelSpraakParser.LAATSTE_VAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_datumAggregatieFunctie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDatumAggregatieFunctie) {
            return visitor.visitDatumAggregatieFunctie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatumAggregatieFunctieContext = DatumAggregatieFunctieContext;
class DimensieSelectieContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    OVER() {
        return this.getToken(RegelSpraakParser.OVER, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    aggregerenOverAlleDimensies() {
        return this.getTypedRuleContext(AggregerenOverAlleDimensiesContext, 0);
    }
    aggregerenOverVerzameling() {
        return this.getTypedRuleContext(AggregerenOverVerzamelingContext, 0);
    }
    aggregerenOverBereik() {
        return this.getTypedRuleContext(AggregerenOverBereikContext, 0);
    }
    VAN() {
        return this.getToken(RegelSpraakParser.VAN, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_dimensieSelectie;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDimensieSelectie) {
            return visitor.visitDimensieSelectie(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DimensieSelectieContext = DimensieSelectieContext;
class AggregerenOverAlleDimensiesContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ALLE() {
        return this.getToken(RegelSpraakParser.ALLE, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    predicaat() {
        return this.getTypedRuleContext(PredicaatContext, 0);
    }
    DIE() {
        return this.getToken(RegelSpraakParser.DIE, 0);
    }
    DAT() {
        return this.getToken(RegelSpraakParser.DAT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_aggregerenOverAlleDimensies;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregerenOverAlleDimensies) {
            return visitor.visitAggregerenOverAlleDimensies(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AggregerenOverAlleDimensiesContext = AggregerenOverAlleDimensiesContext;
class AggregerenOverVerzamelingContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    naamwoord_list() {
        return this.getTypedRuleContexts(NaamwoordContext);
    }
    naamwoord(i) {
        return this.getTypedRuleContext(NaamwoordContext, i);
    }
    VANAF() {
        return this.getToken(RegelSpraakParser.VANAF, 0);
    }
    TM() {
        return this.getToken(RegelSpraakParser.TM, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_aggregerenOverVerzameling;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregerenOverVerzameling) {
            return visitor.visitAggregerenOverVerzameling(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AggregerenOverVerzamelingContext = AggregerenOverVerzamelingContext;
class AggregerenOverBereikContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DE() {
        return this.getToken(RegelSpraakParser.DE, 0);
    }
    naamwoord_list() {
        return this.getTypedRuleContexts(NaamwoordContext);
    }
    naamwoord(i) {
        return this.getTypedRuleContext(NaamwoordContext, i);
    }
    IN() {
        return this.getToken(RegelSpraakParser.IN, 0);
    }
    LBRACE() {
        return this.getToken(RegelSpraakParser.LBRACE, 0);
    }
    EN() {
        return this.getToken(RegelSpraakParser.EN, 0);
    }
    RBRACE() {
        return this.getToken(RegelSpraakParser.RBRACE, 0);
    }
    COMMA_list() {
        return this.getTokens(RegelSpraakParser.COMMA);
    }
    COMMA(i) {
        return this.getToken(RegelSpraakParser.COMMA, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_aggregerenOverBereik;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregerenOverBereik) {
            return visitor.visitAggregerenOverBereik(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AggregerenOverBereikContext = AggregerenOverBereikContext;
class UnaryConditionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_unaryCondition;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.UnaryConditionContext = UnaryConditionContext;
class UnaryCheckConditionContext extends UnaryConditionContext {
    _expr;
    _op;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    IS_LEEG() {
        return this.getToken(RegelSpraakParser.IS_LEEG, 0);
    }
    IS_GEVULD() {
        return this.getToken(RegelSpraakParser.IS_GEVULD, 0);
    }
    VOLDOET_AAN_DE_ELFPROEF() {
        return this.getToken(RegelSpraakParser.VOLDOET_AAN_DE_ELFPROEF, 0);
    }
    VOLDOET_NIET_AAN_DE_ELFPROEF() {
        return this.getToken(RegelSpraakParser.VOLDOET_NIET_AAN_DE_ELFPROEF, 0);
    }
    ZIJN_LEEG() {
        return this.getToken(RegelSpraakParser.ZIJN_LEEG, 0);
    }
    ZIJN_GEVULD() {
        return this.getToken(RegelSpraakParser.ZIJN_GEVULD, 0);
    }
    VOLDOEN_AAN_DE_ELFPROEF() {
        return this.getToken(RegelSpraakParser.VOLDOEN_AAN_DE_ELFPROEF, 0);
    }
    VOLDOEN_NIET_AAN_DE_ELFPROEF() {
        return this.getToken(RegelSpraakParser.VOLDOEN_NIET_AAN_DE_ELFPROEF, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryCheckCondition) {
            return visitor.visitUnaryCheckCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryCheckConditionContext = UnaryCheckConditionContext;
class UnaryKenmerkConditionContext extends UnaryConditionContext {
    _expr;
    _op;
    _kenmerk;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    IS_KENMERK() {
        return this.getToken(RegelSpraakParser.IS_KENMERK, 0);
    }
    ZIJN_KENMERK() {
        return this.getToken(RegelSpraakParser.ZIJN_KENMERK, 0);
    }
    IS_NIET_KENMERK() {
        return this.getToken(RegelSpraakParser.IS_NIET_KENMERK, 0);
    }
    ZIJN_NIET_KENMERK() {
        return this.getToken(RegelSpraakParser.ZIJN_NIET_KENMERK, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryKenmerkCondition) {
            return visitor.visitUnaryKenmerkCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryKenmerkConditionContext = UnaryKenmerkConditionContext;
class UnaryNumeriekExactConditionContext extends UnaryConditionContext {
    _expr;
    _op;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    CIJFERS() {
        return this.getToken(RegelSpraakParser.CIJFERS, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    IS_NUMERIEK_MET_EXACT() {
        return this.getToken(RegelSpraakParser.IS_NUMERIEK_MET_EXACT, 0);
    }
    IS_NIET_NUMERIEK_MET_EXACT() {
        return this.getToken(RegelSpraakParser.IS_NIET_NUMERIEK_MET_EXACT, 0);
    }
    ZIJN_NUMERIEK_MET_EXACT() {
        return this.getToken(RegelSpraakParser.ZIJN_NUMERIEK_MET_EXACT, 0);
    }
    ZIJN_NIET_NUMERIEK_MET_EXACT() {
        return this.getToken(RegelSpraakParser.ZIJN_NIET_NUMERIEK_MET_EXACT, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryNumeriekExactCondition) {
            return visitor.visitUnaryNumeriekExactCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryNumeriekExactConditionContext = UnaryNumeriekExactConditionContext;
class UnaryRolConditionContext extends UnaryConditionContext {
    _expr;
    _op;
    _rol;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    IS_ROL() {
        return this.getToken(RegelSpraakParser.IS_ROL, 0);
    }
    ZIJN_ROL() {
        return this.getToken(RegelSpraakParser.ZIJN_ROL, 0);
    }
    IS_NIET_ROL() {
        return this.getToken(RegelSpraakParser.IS_NIET_ROL, 0);
    }
    ZIJN_NIET_ROL() {
        return this.getToken(RegelSpraakParser.ZIJN_NIET_ROL, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryRolCondition) {
            return visitor.visitUnaryRolCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryRolConditionContext = UnaryRolConditionContext;
class UnaryDagsoortConditionContext extends UnaryConditionContext {
    _expr;
    _op;
    _dagsoort;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    identifier() {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    IS_EEN_DAGSOORT() {
        return this.getToken(RegelSpraakParser.IS_EEN_DAGSOORT, 0);
    }
    ZIJN_EEN_DAGSOORT() {
        return this.getToken(RegelSpraakParser.ZIJN_EEN_DAGSOORT, 0);
    }
    IS_GEEN_DAGSOORT() {
        return this.getToken(RegelSpraakParser.IS_GEEN_DAGSOORT, 0);
    }
    ZIJN_GEEN_DAGSOORT() {
        return this.getToken(RegelSpraakParser.ZIJN_GEEN_DAGSOORT, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryDagsoortCondition) {
            return visitor.visitUnaryDagsoortCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryDagsoortConditionContext = UnaryDagsoortConditionContext;
class UnaryInconsistentDataConditionContext extends UnaryConditionContext {
    _expr;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IS_INCONSISTENT() {
        return this.getToken(RegelSpraakParser.IS_INCONSISTENT, 0);
    }
    primaryExpression() {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryInconsistentDataCondition) {
            return visitor.visitUnaryInconsistentDataCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryInconsistentDataConditionContext = UnaryInconsistentDataConditionContext;
class UnaryUniekConditionContext extends UnaryConditionContext {
    _ref;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    MOETEN_UNIEK_ZIJN() {
        return this.getToken(RegelSpraakParser.MOETEN_UNIEK_ZIJN, 0);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryUniekCondition) {
            return visitor.visitUnaryUniekCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryUniekConditionContext = UnaryUniekConditionContext;
class RegelStatusConditionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_regelStatusCondition;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.RegelStatusConditionContext = RegelStatusConditionContext;
class RegelStatusInconsistentCheckContext extends RegelStatusConditionContext {
    _name;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    REGELVERSIE() {
        return this.getToken(RegelSpraakParser.REGELVERSIE, 0);
    }
    IS_INCONSISTENT() {
        return this.getToken(RegelSpraakParser.IS_INCONSISTENT, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelStatusInconsistentCheck) {
            return visitor.visitRegelStatusInconsistentCheck(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelStatusInconsistentCheckContext = RegelStatusInconsistentCheckContext;
class RegelStatusGevuurdCheckContext extends RegelStatusConditionContext {
    _name;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    REGELVERSIE() {
        return this.getToken(RegelSpraakParser.REGELVERSIE, 0);
    }
    IS_GEVUURD() {
        return this.getToken(RegelSpraakParser.IS_GEVUURD, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRegelStatusGevuurdCheck) {
            return visitor.visitRegelStatusGevuurdCheck(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RegelStatusGevuurdCheckContext = RegelStatusGevuurdCheckContext;
class SubordinateClauseExpressionContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_subordinateClauseExpression;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.SubordinateClauseExpressionContext = SubordinateClauseExpressionContext;
class SubordinateIsWithExprContext extends SubordinateClauseExpressionContext {
    _subject;
    _prepPhrase;
    _verb;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubordinateIsWithExpr) {
            return visitor.visitSubordinateIsWithExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubordinateIsWithExprContext = SubordinateIsWithExprContext;
class SubordinateHasExprContext extends SubordinateClauseExpressionContext {
    _subject;
    _object;
    _verb;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    HEEFT() {
        return this.getToken(RegelSpraakParser.HEEFT, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubordinateHasExpr) {
            return visitor.visitSubordinateHasExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubordinateHasExprContext = SubordinateHasExprContext;
class SubordinateIsKenmerkExprContext extends SubordinateClauseExpressionContext {
    _subject;
    _verb;
    _kenmerk;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    onderwerpReferentie() {
        return this.getTypedRuleContext(OnderwerpReferentieContext, 0);
    }
    IS() {
        return this.getToken(RegelSpraakParser.IS, 0);
    }
    naamwoordWithNumbers() {
        return this.getTypedRuleContext(NaamwoordWithNumbersContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSubordinateIsKenmerkExpr) {
            return visitor.visitSubordinateIsKenmerkExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SubordinateIsKenmerkExprContext = SubordinateIsKenmerkExprContext;
class DagsoortDefinitionContext extends antlr4_1.ParserRuleContext {
    _IDENTIFIER;
    _plural = [];
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    DAGSOORT() {
        return this.getToken(RegelSpraakParser.DAGSOORT, 0);
    }
    naamwoord() {
        return this.getTypedRuleContext(NaamwoordContext, 0);
    }
    MV_START() {
        return this.getToken(RegelSpraakParser.MV_START, 0);
    }
    RPAREN() {
        return this.getToken(RegelSpraakParser.RPAREN, 0);
    }
    SEMICOLON() {
        return this.getToken(RegelSpraakParser.SEMICOLON, 0);
    }
    IDENTIFIER_list() {
        return this.getTokens(RegelSpraakParser.IDENTIFIER);
    }
    IDENTIFIER(i) {
        return this.getToken(RegelSpraakParser.IDENTIFIER, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_dagsoortDefinition;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDagsoortDefinition) {
            return visitor.visitDagsoortDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DagsoortDefinitionContext = DagsoortDefinitionContext;
class TekstreeksExprContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    STRING_LITERAL() {
        return this.getToken(RegelSpraakParser.STRING_LITERAL, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_tekstreeksExpr;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTekstreeksExpr) {
            return visitor.visitTekstreeksExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TekstreeksExprContext = TekstreeksExprContext;
class VerdelingResultaatContext extends antlr4_1.ParserRuleContext {
    _sourceAmount;
    _targetCollection;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    WORDT_VERDEELD_OVER() {
        return this.getToken(RegelSpraakParser.WORDT_VERDEELD_OVER, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    WAARBIJ_WORDT_VERDEELD() {
        return this.getToken(RegelSpraakParser.WAARBIJ_WORDT_VERDEELD, 0);
    }
    expressie_list() {
        return this.getTypedRuleContexts(ExpressieContext);
    }
    expressie(i) {
        return this.getTypedRuleContext(ExpressieContext, i);
    }
    verdelingMethodeSimple() {
        return this.getTypedRuleContext(VerdelingMethodeSimpleContext, 0);
    }
    verdelingMethodeMultiLine() {
        return this.getTypedRuleContext(VerdelingMethodeMultiLineContext, 0);
    }
    verdelingRest() {
        return this.getTypedRuleContext(VerdelingRestContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingResultaat;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingResultaat) {
            return visitor.visitVerdelingResultaat(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingResultaatContext = VerdelingResultaatContext;
class VerdelingMethodeSimpleContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    verdelingMethode() {
        return this.getTypedRuleContext(VerdelingMethodeContext, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingMethodeSimple;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingMethodeSimple) {
            return visitor.visitVerdelingMethodeSimple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingMethodeSimpleContext = VerdelingMethodeSimpleContext;
class VerdelingMethodeMultiLineContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    COLON() {
        return this.getToken(RegelSpraakParser.COLON, 0);
    }
    verdelingMethodeBulletList() {
        return this.getTypedRuleContext(VerdelingMethodeBulletListContext, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingMethodeMultiLine;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingMethodeMultiLine) {
            return visitor.visitVerdelingMethodeMultiLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingMethodeMultiLineContext = VerdelingMethodeMultiLineContext;
class VerdelingMethodeBulletListContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    verdelingMethodeBullet_list() {
        return this.getTypedRuleContexts(VerdelingMethodeBulletContext);
    }
    verdelingMethodeBullet(i) {
        return this.getTypedRuleContext(VerdelingMethodeBulletContext, i);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingMethodeBulletList;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingMethodeBulletList) {
            return visitor.visitVerdelingMethodeBulletList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingMethodeBulletListContext = VerdelingMethodeBulletListContext;
class VerdelingMethodeBulletContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    MINUS() {
        return this.getToken(RegelSpraakParser.MINUS, 0);
    }
    verdelingMethode() {
        return this.getTypedRuleContext(VerdelingMethodeContext, 0);
    }
    COMMA() {
        return this.getToken(RegelSpraakParser.COMMA, 0);
    }
    DOT() {
        return this.getToken(RegelSpraakParser.DOT, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingMethodeBullet;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingMethodeBullet) {
            return visitor.visitVerdelingMethodeBullet(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingMethodeBulletContext = VerdelingMethodeBulletContext;
class VerdelingMethodeContext extends antlr4_1.ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingMethode;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.VerdelingMethodeContext = VerdelingMethodeContext;
class VerdelingNaarRatoContext extends VerdelingMethodeContext {
    _ratioExpression;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NAAR_RATO_VAN() {
        return this.getToken(RegelSpraakParser.NAAR_RATO_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingNaarRato) {
            return visitor.visitVerdelingNaarRato(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingNaarRatoContext = VerdelingNaarRatoContext;
class VerdelingGelijkeDelenContext extends VerdelingMethodeContext {
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    IN_GELIJKE_DELEN() {
        return this.getToken(RegelSpraakParser.IN_GELIJKE_DELEN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingGelijkeDelen) {
            return visitor.visitVerdelingGelijkeDelen(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingGelijkeDelenContext = VerdelingGelijkeDelenContext;
class VerdelingMaximumContext extends VerdelingMethodeContext {
    _maxExpression;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    MET_EEN_MAXIMUM_VAN() {
        return this.getToken(RegelSpraakParser.MET_EEN_MAXIMUM_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingMaximum) {
            return visitor.visitVerdelingMaximum(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingMaximumContext = VerdelingMaximumContext;
class VerdelingOpVolgordeContext extends VerdelingMethodeContext {
    _orderDirection;
    _orderExpression;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    OP_VOLGORDE_VAN() {
        return this.getToken(RegelSpraakParser.OP_VOLGORDE_VAN, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    TOENEMENDE() {
        return this.getToken(RegelSpraakParser.TOENEMENDE, 0);
    }
    AFNEMENDE() {
        return this.getToken(RegelSpraakParser.AFNEMENDE, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingOpVolgorde) {
            return visitor.visitVerdelingOpVolgorde(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingOpVolgordeContext = VerdelingOpVolgordeContext;
class VerdelingTieBreakContext extends VerdelingMethodeContext {
    _tieBreakMethod;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    BIJ_EVEN_GROOT_CRITERIUM() {
        return this.getToken(RegelSpraakParser.BIJ_EVEN_GROOT_CRITERIUM, 0);
    }
    verdelingMethode() {
        return this.getTypedRuleContext(VerdelingMethodeContext, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingTieBreak) {
            return visitor.visitVerdelingTieBreak(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingTieBreakContext = VerdelingTieBreakContext;
class VerdelingAfrondingContext extends VerdelingMethodeContext {
    _decimals;
    _roundDirection;
    constructor(parser, ctx) {
        super(parser, ctx.parentCtx, ctx.invokingState);
        super.copyFrom(ctx);
    }
    AFGEROND_OP() {
        return this.getToken(RegelSpraakParser.AFGEROND_OP, 0);
    }
    DECIMALEN() {
        return this.getToken(RegelSpraakParser.DECIMALEN, 0);
    }
    NUMBER() {
        return this.getToken(RegelSpraakParser.NUMBER, 0);
    }
    NAAR_BENEDEN() {
        return this.getToken(RegelSpraakParser.NAAR_BENEDEN, 0);
    }
    NAAR_BOVEN() {
        return this.getToken(RegelSpraakParser.NAAR_BOVEN, 0);
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingAfronding) {
            return visitor.visitVerdelingAfronding(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingAfrondingContext = VerdelingAfrondingContext;
class VerdelingRestContext extends antlr4_1.ParserRuleContext {
    _remainderTarget;
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        this.parser = parser;
    }
    ALS_ONVERDEELDE_REST_BLIJFT() {
        return this.getToken(RegelSpraakParser.ALS_ONVERDEELDE_REST_BLIJFT, 0);
    }
    expressie() {
        return this.getTypedRuleContext(ExpressieContext, 0);
    }
    OVER_VERDELING() {
        return this.getToken(RegelSpraakParser.OVER_VERDELING, 0);
    }
    get ruleIndex() {
        return RegelSpraakParser.RULE_verdelingRest;
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVerdelingRest) {
            return visitor.visitVerdelingRest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VerdelingRestContext = VerdelingRestContext;
//# sourceMappingURL=RegelSpraakParser.js.map