"use strict";
/**
 * Dimension coordinate model for RegelSpraak
 * Provides model-driven dimension resolution and range filtering
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionRegistry = void 0;
/**
 * Registry for managing dimension definitions and operations
 */
class DimensionRegistry {
    axes = new Map();
    labelToPosition = new Map();
    /**
     * Register a dimension definition from the model
     */
    register(dimension) {
        // Create axis from dimension
        const axis = {
            name: dimension.name,
            labels: dimension.labels.map(l => l.label),
            usageStyle: dimension.usageStyle,
            preposition: dimension.preposition
        };
        this.axes.set(dimension.name, axis);
        // Build label position index
        const positionMap = new Map();
        dimension.labels.forEach((label) => {
            positionMap.set(label.label, label.position);
        });
        this.labelToPosition.set(dimension.name, positionMap);
    }
    /**
     * Get a dimension axis by name
     */
    getAxis(name) {
        return this.axes.get(name);
    }
    /**
     * Get all registered dimension axes
     */
    getAllAxes() {
        return Array.from(this.axes.values());
    }
    /**
     * Get the position of a label on an axis
     */
    getLabelPosition(axis, label) {
        const positionMap = this.labelToPosition.get(axis);
        if (!positionMap) {
            return -1;
        }
        return positionMap.get(label) ?? -1;
    }
    /**
     * Get all labels within a range on an axis (inclusive)
     */
    getLabelsInRange(axis, from, to) {
        const dimensionAxis = this.axes.get(axis);
        if (!dimensionAxis) {
            return [];
        }
        const fromPos = this.getLabelPosition(axis, from);
        const toPos = this.getLabelPosition(axis, to);
        if (fromPos === -1 || toPos === -1) {
            return [];
        }
        const minPos = Math.min(fromPos, toPos);
        const maxPos = Math.max(fromPos, toPos);
        const result = [];
        const positionMap = this.labelToPosition.get(axis);
        for (const [label, position] of positionMap.entries()) {
            if (position >= minPos && position <= maxPos) {
                result.push(label);
            }
        }
        // Sort by position to maintain order
        result.sort((a, b) => {
            const posA = this.getLabelPosition(axis, a);
            const posB = this.getLabelPosition(axis, b);
            return posA - posB;
        });
        return result;
    }
    /**
     * Check if a label is valid for a given axis
     */
    isValidLabel(axis, label) {
        const positionMap = this.labelToPosition.get(axis);
        if (!positionMap) {
            return false;
        }
        return positionMap.has(label);
    }
    /**
     * Find which dimension axis contains a given label
     * Returns the axis name or undefined if not found
     */
    findAxisForLabel(label) {
        for (const [axisName, positionMap] of this.labelToPosition.entries()) {
            if (positionMap.has(label)) {
                return axisName;
            }
        }
        return undefined;
    }
    /**
     * Check if a dimension uses prepositional style
     */
    isPrepositional(axis) {
        const dimensionAxis = this.axes.get(axis);
        return dimensionAxis?.usageStyle === 'prepositional';
    }
    /**
     * Check if a dimension uses adjectival style
     */
    isAdjectival(axis) {
        const dimensionAxis = this.axes.get(axis);
        return dimensionAxis?.usageStyle === 'adjectival';
    }
    /**
     * Get the preposition for a prepositional dimension
     */
    getPreposition(axis) {
        const dimensionAxis = this.axes.get(axis);
        return dimensionAxis?.preposition;
    }
}
exports.DimensionRegistry = DimensionRegistry;
//# sourceMappingURL=dimensions.js.map