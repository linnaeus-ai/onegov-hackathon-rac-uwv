import { Value, RuntimeContext } from '../interfaces';
export interface NavigationResult {
    targetObject: Value | null;
    attributeName: string;
    error?: string;
}
/**
 * Strip "in X" unit suffix from an attribute name.
 * E.g., "reisduur per trein in minuten" → "reisduur per trein"
 * Returns the original name if no unit suffix is found.
 */
export declare function stripUnitSuffix(attributeName: string): {
    name: string;
    unit?: string;
};
/**
 * Resolves a complex navigation path to find the target object and attribute.
 *
 * Dutch right-to-left navigation per specification:
 * For a path like ["vlucht", "passagier", "leeftijd"], this will:
 * 1. Start from the base object (vlucht)
 * 2. Navigate to passagier
 * 3. Return the passagier object and "leeftijd" as the attribute to set
 *
 * @param path The navigation path from base object to attribute (object-first order)
 * @param context The runtime context
 * @param startObject Optional starting object, otherwise uses current instance
 * @returns Navigation result with target object and attribute name
 */
export declare function resolveNavigationPath(path: string[], context: RuntimeContext, startObject?: Value): NavigationResult;
/**
 * Checks if a path represents an object-scoped rule pattern.
 * Object-scoped rules have the pattern: ["ObjectType", ..., "attribute"]
 * where the first element is a capitalized object type name.
 *
 * @param path The navigation path (object-first order)
 * @returns True if this is an object-scoped rule pattern
 */
export declare function isObjectScopedRule(path: string[]): boolean;
/**
 * Navigates through a complex path to set an attribute value.
 * Handles both direct navigation and object-scoped rules.
 *
 * @param path The navigation path
 * @param value The value to set
 * @param context The runtime context
 * @returns Success status and any error message
 */
export declare function setValueAtPath(path: string[], value: Value, context: RuntimeContext): {
    success: boolean;
    error?: string;
};
//# sourceMappingURL=navigation.d.ts.map