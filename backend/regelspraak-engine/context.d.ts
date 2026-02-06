import { RuntimeContext, Value } from './interfaces';
import { FeitType } from './ast/feittype';
import { TimelineValueImpl } from './ast/timelines';
import { DomainModel } from './ast/domain-model';
import { Dimension } from './ast/dimensions';
import { DimensionRegistry } from './model/dimensions';
import { KenmerkEquivalenceRegistry } from './kenmerk-equivalence-registry';
/**
 * Represents a relationship instance between two objects
 */
export interface Relationship {
    feittypeNaam: string;
    subject: Value;
    object: Value;
    preposition?: string;
}
/**
 * Implementation of runtime context
 */
export declare class Context implements RuntimeContext {
    private scopes;
    private objects;
    private executionTrace;
    private objectCounter;
    current_instance: Value | undefined;
    evaluation_date: Date;
    domainModel: DomainModel;
    dimensionRegistry: DimensionRegistry;
    private relationships;
    private feittypen;
    private timelineAttributes;
    private timelineParameters;
    private objectKenmerken;
    private executedRules;
    private inconsistentRules;
    maxRecursionIterations: number;
    private kenmerkRegistries;
    constructor(model?: DomainModel);
    /**
     * Initialize kenmerk equivalence registries from model object types.
     * Can be called after domain model is updated to re-initialize registries.
     */
    initializeKenmerkRegistries(): void;
    /**
     * Get or create equivalence registry for an object type.
     */
    getKenmerkRegistry(objectType: string): KenmerkEquivalenceRegistry;
    getVariable(name: string): Value | undefined;
    setVariable(name: string, value: Value): void;
    pushScope(): void;
    popScope(): void;
    getParameter(name: string): Value | undefined;
    getObject(type: string, id: string): any | undefined;
    createObject(type: string, id: string, attributes: Record<string, Value>): void;
    /**
     * Canonicalize type name for comparison (lowercase, no spaces/articles)
     */
    private canonicalizeTypeName;
    getObjectsByType(type: string): Value[];
    addExecutionTrace(message: string): void;
    getExecutionTrace(): string[];
    /**
     * Get all kenmerken for an object as a Map.
     * Returns both canonical keys and 'is ' prefixed variants for backward compatibility.
     */
    private getObjectKenmerkenMap;
    /**
     * Get a kenmerk value for an object.
     * Uses KenmerkEquivalenceRegistry for canonical key resolution.
     */
    getKenmerk(type: string, id: string, kenmerkName: string): boolean | undefined;
    /**
     * Set a kenmerk value for an object.
     * Always stores under the canonical key.
     */
    setKenmerk(type: string, id: string, kenmerkName: string, value: boolean): void;
    /**
     * Initialize kenmerken for an object (called when creating objects)
     */
    initializeKenmerken(type: string, id: string, kenmerkNames: string[]): void;
    /**
     * Get a timeline attribute value at a specific date.
     */
    getTimelineAttribute(type: string, id: string, attrName: string, date?: Date): Value | null;
    /**
     * Set a timeline attribute value.
     */
    setTimelineAttribute(type: string, id: string, attrName: string, timelineValue: TimelineValueImpl): void;
    /**
     * Get a timeline parameter value.
     */
    getTimelineParameter(name: string): TimelineValueImpl | undefined;
    /**
     * Set a timeline parameter value.
     */
    setTimelineParameter(name: string, timelineValue: TimelineValueImpl): void;
    generateObjectId(type: string): string;
    getEvaluationDate(): Date;
    setEvaluationDate(date: Date): void;
    setCurrentInstance(instance: Value | undefined): void;
    /**
     * Register a Feittype definition
     */
    registerFeittype(feittype: FeitType): void;
    /**
     * Get a Feittype definition by name
     */
    getFeittype(naam: string): FeitType | undefined;
    /**
     * Get all registered FeitTypes
     */
    getAllFeittypen(): FeitType[];
    /**
     * Find a FeitType that has the given role
     */
    findFeittypeByRole(roleName: string): FeitType | undefined;
    /**
     * Creates and stores a relationship between two objects
     */
    addRelationship(feittypeNaam: string, subject: Value, object: Value, preposition?: string): Relationship;
    /**
     * Find relationships matching the given criteria
     */
    findRelationships(criteria: {
        subject?: Value;
        object?: Value;
        feittypeNaam?: string;
    }): Relationship[];
    /**
     * Get objects related to the given subject via the specified feittype
     */
    getRelatedObjects(subject: Value, feittypeNaam: string, asSubject?: boolean): Value[];
    markRuleExecuted(regelNaam: string): void;
    markRuleInconsistent(regelNaam: string): void;
    isRuleExecuted(regelNaam: string): boolean;
    isRuleInconsistent(regelNaam: string): boolean;
    /**
     * Get a dimension definition by name
     */
    getDimension(name: string): Dimension | undefined;
    /**
     * Helper to check if two object values represent the same object.
     * Public for reuse by other components that need identity comparison.
     */
    objectsMatch(obj1: Value, obj2: Value): boolean;
    /**
     * Clone the context for temporary evaluation
     */
    clone(): Context;
}
//# sourceMappingURL=context.d.ts.map