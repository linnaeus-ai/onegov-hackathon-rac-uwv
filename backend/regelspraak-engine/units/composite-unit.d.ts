/**
 * Represents a composite unit like km/h or m/s^2
 */
export declare class CompositeUnit {
    numerator: Array<[string, number]>;
    denominator: Array<[string, number]>;
    constructor(numerator?: Array<[string, number]>, denominator?: Array<[string, number]>);
    /**
     * Parse a unit expression like "km/h" or "m/s^2"
     */
    static parse(unitExpr: string): CompositeUnit;
    /**
     * Normalize by canceling out matching units
     */
    normalize(): CompositeUnit;
    /**
     * Multiply two composite units
     */
    multiply(other: CompositeUnit): CompositeUnit;
    /**
     * Divide by another composite unit
     */
    divide(other: CompositeUnit): CompositeUnit;
    /**
     * Check if this is a dimensionless unit (all canceled out)
     */
    isDimensionless(): boolean;
    /**
     * Convert to string representation
     */
    toString(): string;
    /**
     * Check if two composite units are equal
     */
    equals(other: CompositeUnit): boolean;
}
//# sourceMappingURL=composite-unit.d.ts.map