"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitSystem = void 0;
/**
 * Unit system (eenheidssysteem) with its base units
 *
 * Uses hub-and-spoke conversion: all units convert through a common base unit.
 */
class UnitSystem {
    name;
    baseUnits;
    abbreviationMap;
    symbolMap;
    constructor(name, // e.g., "Tijd", "Valuta", "Afstand"
    baseUnits = new Map(), abbreviationMap = new Map(), symbolMap = new Map()) {
        this.name = name;
        this.baseUnits = baseUnits;
        this.abbreviationMap = abbreviationMap;
        this.symbolMap = symbolMap;
    }
    addUnit(unit) {
        this.baseUnits.set(unit.name, unit);
        if (unit.abbreviation) {
            this.abbreviationMap.set(unit.abbreviation, unit.name);
        }
        if (unit.symbol) {
            this.symbolMap.set(unit.symbol, unit.name);
        }
        if (unit.plural) {
            this.baseUnits.set(unit.plural, unit);
        }
    }
    findUnit(identifier) {
        // Direct name lookup
        if (this.baseUnits.has(identifier)) {
            return this.baseUnits.get(identifier);
        }
        // Abbreviation lookup
        if (this.abbreviationMap.has(identifier)) {
            const unitName = this.abbreviationMap.get(identifier);
            return this.baseUnits.get(unitName);
        }
        // Symbol lookup
        if (this.symbolMap.has(identifier)) {
            const unitName = this.symbolMap.get(identifier);
            return this.baseUnits.get(unitName);
        }
        return undefined;
    }
    /**
     * Convert a value from one unit to another within this system.
     *
     * Uses hub-and-spoke pattern:
     * 1. Convert from source unit to base unit: value * fromUnit.toBaseFactor
     * 2. Convert from base unit to target: baseValue / toUnit.toBaseFactor
     *
     * Falls back to legacy edge-to-edge conversion if toBaseFactor is not available.
     */
    convert(value, fromUnit, toUnit) {
        const from = this.findUnit(fromUnit);
        const to = this.findUnit(toUnit);
        if (!from || !to) {
            return undefined;
        }
        // Same unit
        if (from.name === to.name) {
            return value;
        }
        // Hub-and-spoke conversion (preferred)
        const fromBaseFactor = from.toBaseFactor;
        const toBaseFactor = to.toBaseFactor;
        if (fromBaseFactor !== undefined && toBaseFactor !== undefined) {
            // Convert to base unit, then to target unit
            const baseValue = value * fromBaseFactor;
            return baseValue / toBaseFactor;
        }
        // Legacy: Direct conversion path (for backward compatibility)
        if (from.conversionToUnit === to.name && from.conversionFactor) {
            return value * from.conversionFactor;
        }
        // Legacy: Reverse conversion
        if (to.conversionToUnit === from.name && to.conversionFactor) {
            return value / to.conversionFactor;
        }
        // No conversion path available
        return undefined;
    }
}
exports.UnitSystem = UnitSystem;
//# sourceMappingURL=base-unit.js.map