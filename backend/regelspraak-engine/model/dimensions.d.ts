/**
 * Dimension coordinate model for RegelSpraak
 * Provides model-driven dimension resolution and range filtering
 */
import { Dimension } from '../ast/dimensions';
/**
 * Represents a dimension axis with ordered labels
 */
export interface DimensionAxis {
    name: string;
    labels: string[];
    usageStyle: 'prepositional' | 'adjectival';
    preposition?: string;
}
/**
 * Represents a specific coordinate on a dimension axis
 */
export interface DimensionCoordinate {
    axis: string;
    label: string;
    position: number;
}
/**
 * Represents a range on a dimension axis
 */
export interface DimensionRange {
    axis: string;
    from: string;
    to: string;
}
/**
 * Registry for managing dimension definitions and operations
 */
export declare class DimensionRegistry {
    private axes;
    private labelToPosition;
    /**
     * Register a dimension definition from the model
     */
    register(dimension: Dimension): void;
    /**
     * Get a dimension axis by name
     */
    getAxis(name: string): DimensionAxis | undefined;
    /**
     * Get all registered dimension axes
     */
    getAllAxes(): DimensionAxis[];
    /**
     * Get the position of a label on an axis
     */
    getLabelPosition(axis: string, label: string): number;
    /**
     * Get all labels within a range on an axis (inclusive)
     */
    getLabelsInRange(axis: string, from: string, to: string): string[];
    /**
     * Check if a label is valid for a given axis
     */
    isValidLabel(axis: string, label: string): boolean;
    /**
     * Find which dimension axis contains a given label
     * Returns the axis name or undefined if not found
     */
    findAxisForLabel(label: string): string | undefined;
    /**
     * Check if a dimension uses prepositional style
     */
    isPrepositional(axis: string): boolean;
    /**
     * Check if a dimension uses adjectival style
     */
    isAdjectival(axis: string): boolean;
    /**
     * Get the preposition for a prepositional dimension
     */
    getPreposition(axis: string): string | undefined;
}
//# sourceMappingURL=dimensions.d.ts.map