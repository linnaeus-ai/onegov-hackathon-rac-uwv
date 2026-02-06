import { UnitSystem, BaseUnit } from './base-unit';
/**
 * Registry of all unit systems in the domain
 */
export declare class UnitRegistry {
    private systems;
    constructor();
    /**
     * Initialize standard unit systems from the specification
     * Uses hub-and-spoke pattern: all units have toBaseFactor relative to base unit
     */
    private initStandardSystems;
    /**
     * Add a new unit system
     */
    addSystem(system: UnitSystem): void;
    /**
     * Get a unit system by name
     */
    getSystem(name: string): UnitSystem | undefined;
    /**
     * Find a unit across all systems
     */
    findUnit(identifier: string): {
        unit: BaseUnit;
        system: UnitSystem;
    } | undefined;
    /**
     * Check if two units are compatible (same system)
     */
    areUnitsCompatible(unit1: string, unit2: string): boolean;
    /**
     * Convert a value between units
     */
    convert(value: number, fromUnit: string, toUnit: string): number | undefined;
}
//# sourceMappingURL=unit-registry.d.ts.map