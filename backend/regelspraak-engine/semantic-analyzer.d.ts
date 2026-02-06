import { DomainModel } from './ast/domain-model';
export interface ValidationError {
    message: string;
    location?: any;
    severity: 'error' | 'warning';
}
export declare enum SymbolKind {
    PARAMETER = "parameter",
    OBJECT_TYPE = "object_type",
    ATTRIBUTE = "attribute",
    KENMERK = "kenmerk",
    VARIABLE = "variable",
    RULE = "rule",
    REGELGROEP = "regelgroep",
    DOMAIN = "domain",
    FEITTYPE = "feittype",
    DIMENSION = "dimension",
    DAGSOORT = "dagsoort"
}
export interface Symbol {
    name: string;
    kind: SymbolKind;
    datatype?: string;
    definition: any;
}
export declare class SymbolTable {
    private symbols;
    private parent?;
    constructor(parent?: SymbolTable);
    define(name: string, symbol: Symbol): void;
    lookup(name: string): Symbol | undefined;
    lookupLocal(name: string): Symbol | undefined;
}
export declare class SemanticAnalyzer {
    private errors;
    private globalScope;
    private currentScope;
    private objectTypes;
    private parameters;
    private dimensions;
    analyze(model: DomainModel): ValidationError[];
    private collectDefinitions;
    private validateModel;
    private validateRegel;
    private validateGelijkstelling;
    private validateKenmerkToekenning;
    private validateObjectCreatie;
    private validateBeslistabel;
    private validateAttributeReference;
    private validateExpression;
    private getExpressionType;
    private isTypeCompatible;
    private getDataTypeString;
    private addError;
}
//# sourceMappingURL=semantic-analyzer.d.ts.map