/**
 * Base unit representation within a unit system
 *
 * Units use a hub-and-spoke conversion model:
 * - Each unit has a `toBaseFactor` that converts it to the system's base unit
 * - Any conversion becomes: (value * fromUnit.toBaseFactor) / toUnit.toBaseFactor
 * - This enables O(1) conversion between any two units in the same system
 */
export interface BaseUnit {
    name: string;
    plural?: string;
    abbreviation?: string;
    symbol?: string;
    /**
     * Conversion factor to the system's base unit.
     * Multiply by this factor to get the value in base units.
     * Default is 1 for the base unit itself.
     *
     * Example for time system (base = seconde):
     * - milliseconde: 0.001 (1 ms = 0.001 s)
     * - minuut: 60 (1 min = 60 s)
     * - uur: 3600 (1 hr = 3600 s)
     */
    toBaseFactor?: number;
    conversionFactor?: number;
    conversionToUnit?: string;
}
/**
 * Unit system (eenheidssysteem) with its base units
 *
 * Uses hub-and-spoke conversion: all units convert through a common base unit.
 */
export declare class UnitSystem {
    name: string;
    private baseUnits;
    private abbreviationMap;
    private symbolMap;
    constructor(name: string, // e.g., "Tijd", "Valuta", "Afstand"
    baseUnits?: Map<string, BaseUnit>, abbreviationMap?: Map<string, string>, symbolMap?: Map<string, string>);
    addUnit(unit: BaseUnit): void;
    findUnit(identifier: string): BaseUnit | undefined;
    /**
     * Convert a value from one unit to another within this system.
     *
     * Uses hub-and-spoke pattern:
     * 1. Convert from source unit to base unit: value * fromUnit.toBaseFactor
     * 2. Convert from base unit to target: baseValue / toUnit.toBaseFactor
     *
     * Falls back to legacy edge-to-edge conversion if toBaseFactor is not available.
     */
    convert(value: number, fromUnit: string, toUnit: string): number | undefined;
}
//# sourceMappingURL=base-unit.d.ts.map