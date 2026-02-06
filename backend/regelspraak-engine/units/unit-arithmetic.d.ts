import { Value } from '../interfaces/value';
import { CompositeUnit } from './composite-unit';
import { UnitRegistry } from './unit-registry';
/**
 * Extended value interface with composite unit support
 */
export interface UnitValue extends Value {
    compositeUnit?: CompositeUnit;
}
/**
 * Create a value with unit information
 */
export declare function createUnitValue(value: number, unit?: string, registry?: UnitRegistry): UnitValue;
/**
 * Perform arithmetic operations with unit handling
 */
export declare function performUnitArithmetic(operation: '+' | '-' | '*' | '/', left: UnitValue, right: UnitValue, registry: UnitRegistry): UnitValue;
//# sourceMappingURL=unit-arithmetic.d.ts.map