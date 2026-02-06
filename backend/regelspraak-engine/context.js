"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const dimensions_1 = require("./model/dimensions");
const kenmerk_equivalence_registry_1 = require("./kenmerk-equivalence-registry");
/**
 * Implementation of runtime context
 */
class Context {
    scopes = [new Map()];
    objects = new Map();
    executionTrace = [];
    objectCounter = 0;
    current_instance;
    evaluation_date = new Date();
    domainModel;
    dimensionRegistry;
    // Store relationships between objects
    relationships = [];
    // Store Feittype definitions
    feittypen = new Map();
    // Store timeline attributes for objects
    // Map from object type -> object id -> attribute name -> TimelineValue
    timelineAttributes = new Map();
    // Store timeline parameters
    timelineParameters = new Map();
    // Store kenmerken for objects (separate from attributes, mirroring Python's RuntimeObject.kenmerken)
    // Map from object type -> object id -> kenmerk name -> boolean value
    objectKenmerken = new Map();
    // Rule execution tracking for regel status conditions
    executedRules = new Set(); // Rules that have been executed (fired)
    inconsistentRules = new Set(); // Consistency rules that found inconsistencies
    // Configurable maximum iterations for recursive rule groups (spec §9.9)
    maxRecursionIterations = 100;
    // Per-object-type kenmerk equivalence registries
    kenmerkRegistries = new Map();
    constructor(model) {
        if (model) {
            this.domainModel = model;
        }
        else {
            // Create an empty domain model if none provided
            this.domainModel = {
                objectTypes: [],
                parameters: [],
                regels: [],
                regelGroepen: [],
                beslistabels: [],
                dimensions: [],
                dagsoortDefinities: [],
                domains: [],
                feitTypes: [],
                unitSystems: []
            };
        }
        // Initialize dimension registry from model
        this.dimensionRegistry = new dimensions_1.DimensionRegistry();
        if (this.domainModel.dimensions) {
            for (const dimension of this.domainModel.dimensions) {
                this.dimensionRegistry.register(dimension);
            }
        }
        // Register FeitTypes from model so relationship navigation works
        // Check both 'feitTypes' and 'feittypen' - AST uses 'feittypen', some code uses 'feitTypes'
        const feitTypes = this.domainModel.feitTypes || this.domainModel.feittypen || [];
        for (const feittype of feitTypes) {
            this.registerFeittype(feittype);
        }
        // Initialize kenmerk registries from model
        this.initializeKenmerkRegistries();
    }
    /**
     * Initialize kenmerk equivalence registries from model object types.
     * Can be called after domain model is updated to re-initialize registries.
     */
    initializeKenmerkRegistries() {
        if (!this.domainModel)
            return;
        // Clear existing registries to prevent stale equivalences
        this.kenmerkRegistries.clear();
        for (const objectType of this.domainModel.objectTypes || []) {
            const registry = this.getKenmerkRegistry(objectType.name);
            // Register kenmerken from object type members
            for (const member of objectType.members || []) {
                if (member.type === 'KenmerkSpecification') {
                    registry.registerKenmerk(member);
                }
            }
        }
    }
    /**
     * Get or create equivalence registry for an object type.
     */
    getKenmerkRegistry(objectType) {
        const canonicalType = this.canonicalizeTypeName(objectType);
        if (!this.kenmerkRegistries.has(canonicalType)) {
            this.kenmerkRegistries.set(canonicalType, new kenmerk_equivalence_registry_1.KenmerkEquivalenceRegistry());
        }
        return this.kenmerkRegistries.get(canonicalType);
    }
    getVariable(name) {
        // Search from innermost to outermost scope
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            const value = this.scopes[i].get(name);
            if (value !== undefined) {
                return value;
            }
        }
        return undefined;
    }
    setVariable(name, value) {
        // Set in current scope
        this.scopes[this.scopes.length - 1].set(name, value);
    }
    pushScope() {
        this.scopes.push(new Map());
    }
    popScope() {
        if (this.scopes.length > 1) {
            this.scopes.pop();
        }
    }
    getParameter(name) {
        // For now, parameters are just variables in the global scope
        return this.scopes[0].get(name);
    }
    getObject(type, id) {
        const typeMap = this.objects.get(type);
        return typeMap?.get(id);
    }
    createObject(type, id, attributes) {
        if (!this.objects.has(type)) {
            this.objects.set(type, new Map());
        }
        this.objects.get(type).set(id, attributes);
    }
    /**
     * Canonicalize type name for comparison (lowercase, no spaces/articles)
     */
    canonicalizeTypeName(name) {
        return name.toLowerCase()
            .replace(/^(de|het|een)\s+/g, '')
            .replace(/\s+/g, '');
    }
    getObjectsByType(type) {
        // Try exact match first
        let typeMap = this.objects.get(type);
        // If no exact match, try canonicalized matching
        // Handles: "Natuurlijk persoon" matching "Natuurlijkpersoon"
        if (!typeMap) {
            const canonicalQuery = this.canonicalizeTypeName(type);
            for (const [storedType, map] of this.objects.entries()) {
                if (this.canonicalizeTypeName(storedType) === canonicalQuery) {
                    typeMap = map;
                    break;
                }
            }
        }
        if (!typeMap) {
            return [];
        }
        const result = [];
        for (const [id, attributes] of typeMap.entries()) {
            // Get kenmerken for this object
            const kenmerken = this.getObjectKenmerkenMap(type, id);
            result.push({
                type: 'object',
                objectType: type,
                objectId: id,
                value: attributes,
                kenmerken: kenmerken // Include separate kenmerken dict
            });
        }
        return result;
    }
    addExecutionTrace(message) {
        this.executionTrace.push(message);
    }
    getExecutionTrace() {
        return [...this.executionTrace];
    }
    // --- Kenmerken Handling (separate from attributes, mirroring Python) ---
    /**
     * Get all kenmerken for an object as a Map.
     * Returns both canonical keys and 'is ' prefixed variants for backward compatibility.
     */
    getObjectKenmerkenMap(type, id) {
        // Use canonicalized type matching (same as getKenmerk)
        let typeMap = this.objectKenmerken.get(type);
        if (!typeMap) {
            const canonicalQuery = this.canonicalizeTypeName(type);
            for (const [storedType, map] of this.objectKenmerken.entries()) {
                if (this.canonicalizeTypeName(storedType) === canonicalQuery) {
                    typeMap = map;
                    break;
                }
            }
        }
        if (!typeMap)
            return {};
        const objectMap = typeMap.get(id);
        if (!objectMap)
            return {};
        // Convert Map to plain object with both canonical and 'is ' prefixed keys
        const result = {};
        for (const [name, value] of objectMap.entries()) {
            result[name] = value;
            // Also include 'is ' prefixed variant for backward compatibility
            // (tests and some code expect 'is minderjarig' format)
            // NOTE: This adds 'is ' even for bezittelijk kenmerken, which is
            // semantically incorrect but harmless for backward compatibility.
            if (!name.startsWith('is ')) {
                result[`is ${name}`] = value;
            }
        }
        return result;
    }
    /**
     * Get a kenmerk value for an object.
     * Uses KenmerkEquivalenceRegistry for canonical key resolution.
     */
    getKenmerk(type, id, kenmerkName) {
        // Get registry for this type
        const registry = this.getKenmerkRegistry(type);
        // Resolve to canonical storage key
        const canonical = registry.getCanonicalLabel(kenmerkName);
        // Find type map (with canonicalized type matching)
        let typeMap = this.objectKenmerken.get(type);
        if (!typeMap) {
            const canonicalQuery = this.canonicalizeTypeName(type);
            for (const [storedType, map] of this.objectKenmerken.entries()) {
                if (this.canonicalizeTypeName(storedType) === canonicalQuery) {
                    typeMap = map;
                    break;
                }
            }
        }
        if (!typeMap)
            return undefined;
        const objectMap = typeMap.get(id);
        if (!objectMap)
            return undefined;
        // Look up by canonical key
        const value = objectMap.get(canonical);
        if (value !== undefined)
            return value;
        // Fallback: check all stored keys for equivalence (handles legacy data)
        for (const [storedName, storedValue] of objectMap.entries()) {
            if (registry.areEquivalent(storedName, kenmerkName)) {
                return storedValue;
            }
        }
        return undefined;
    }
    /**
     * Set a kenmerk value for an object.
     * Always stores under the canonical key.
     */
    setKenmerk(type, id, kenmerkName, value) {
        // Get registry for this type
        const registry = this.getKenmerkRegistry(type);
        // Resolve to canonical storage key
        const canonical = registry.getCanonicalLabel(kenmerkName);
        // Find existing type bucket or create new one
        let typeKey = type;
        const canonicalQuery = this.canonicalizeTypeName(type);
        for (const storedType of this.objectKenmerken.keys()) {
            if (this.canonicalizeTypeName(storedType) === canonicalQuery) {
                typeKey = storedType;
                break;
            }
        }
        if (!this.objectKenmerken.has(typeKey)) {
            this.objectKenmerken.set(typeKey, new Map());
        }
        const typeMap = this.objectKenmerken.get(typeKey);
        if (!typeMap.has(id)) {
            typeMap.set(id, new Map());
        }
        const objectMap = typeMap.get(id);
        // Store under canonical key
        objectMap.set(canonical, value);
    }
    /**
     * Initialize kenmerken for an object (called when creating objects)
     */
    initializeKenmerken(type, id, kenmerkNames) {
        if (!this.objectKenmerken.has(type)) {
            this.objectKenmerken.set(type, new Map());
        }
        const typeMap = this.objectKenmerken.get(type);
        if (!typeMap.has(id)) {
            typeMap.set(id, new Map());
        }
        const objectMap = typeMap.get(id);
        // Initialize all kenmerken to false (mirroring Python's behavior)
        for (const name of kenmerkNames) {
            if (!objectMap.has(name)) {
                objectMap.set(name, false);
            }
        }
    }
    /**
     * Get a timeline attribute value at a specific date.
     */
    getTimelineAttribute(type, id, attrName, date) {
        const evalDate = date || this.evaluation_date;
        const typeMap = this.timelineAttributes.get(type);
        if (!typeMap)
            return null;
        const objectMap = typeMap.get(id);
        if (!objectMap)
            return null;
        const timelineValue = objectMap.get(attrName);
        if (!timelineValue)
            return null;
        return timelineValue.getValueAt(evalDate);
    }
    /**
     * Set a timeline attribute value.
     */
    setTimelineAttribute(type, id, attrName, timelineValue) {
        if (!this.timelineAttributes.has(type)) {
            this.timelineAttributes.set(type, new Map());
        }
        const typeMap = this.timelineAttributes.get(type);
        if (!typeMap.has(id)) {
            typeMap.set(id, new Map());
        }
        const objectMap = typeMap.get(id);
        objectMap.set(attrName, timelineValue);
    }
    /**
     * Get a timeline parameter value.
     */
    getTimelineParameter(name) {
        return this.timelineParameters.get(name);
    }
    /**
     * Set a timeline parameter value.
     */
    setTimelineParameter(name, timelineValue) {
        this.timelineParameters.set(name, timelineValue);
    }
    generateObjectId(type) {
        this.objectCounter++;
        return `${type}_${this.objectCounter}`;
    }
    getEvaluationDate() {
        return this.evaluation_date;
    }
    setEvaluationDate(date) {
        this.evaluation_date = date;
    }
    setCurrentInstance(instance) {
        this.current_instance = instance;
    }
    // --- Feittype Handling ---
    /**
     * Register a Feittype definition
     */
    registerFeittype(feittype) {
        this.feittypen.set(feittype.naam, feittype);
    }
    /**
     * Get a Feittype definition by name
     */
    getFeittype(naam) {
        return this.feittypen.get(naam);
    }
    /**
     * Get all registered FeitTypes
     */
    getAllFeittypen() {
        return Array.from(this.feittypen.values());
    }
    // --- Relationship Handling ---
    /**
     * Find a FeitType that has the given role
     */
    findFeittypeByRole(roleName) {
        for (const feittype of this.feittypen.values()) {
            if (!feittype.rollen)
                continue;
            for (const rol of feittype.rollen) {
                if (rol.naam === roleName || rol.meervoud === roleName) {
                    return feittype;
                }
            }
        }
        return undefined;
    }
    /**
     * Creates and stores a relationship between two objects
     */
    addRelationship(feittypeNaam, subject, object, preposition = 'MET') {
        if (subject.type !== 'object' || object.type !== 'object') {
            throw new Error('Relationships can only be created between objects');
        }
        const relationship = {
            feittypeNaam,
            subject,
            object,
            preposition
        };
        this.relationships.push(relationship);
        return relationship;
    }
    /**
     * Find relationships matching the given criteria
     */
    findRelationships(criteria) {
        return this.relationships.filter(rel => {
            if (criteria.subject && !this.objectsMatch(rel.subject, criteria.subject)) {
                return false;
            }
            if (criteria.object && !this.objectsMatch(rel.object, criteria.object)) {
                return false;
            }
            if (criteria.feittypeNaam && rel.feittypeNaam !== criteria.feittypeNaam) {
                return false;
            }
            return true;
        });
    }
    /**
     * Get objects related to the given subject via the specified feittype
     */
    getRelatedObjects(subject, feittypeNaam, asSubject = true) {
        if (subject.type !== 'object') {
            return [];
        }
        const related = [];
        for (const rel of this.relationships) {
            if (rel.feittypeNaam !== feittypeNaam) {
                continue;
            }
            // Check if objects match by comparing their identities
            const subjectMatches = this.objectsMatch(rel.subject, subject);
            const objectMatches = this.objectsMatch(rel.object, subject);
            if (asSubject && subjectMatches) {
                related.push(rel.object);
            }
            else if (!asSubject && objectMatches) {
                related.push(rel.subject);
            }
        }
        return related;
    }
    // --- Rule Execution Tracking (for regel status conditions) ---
    markRuleExecuted(regelNaam) {
        this.executedRules.add(regelNaam);
    }
    markRuleInconsistent(regelNaam) {
        this.inconsistentRules.add(regelNaam);
    }
    isRuleExecuted(regelNaam) {
        return this.executedRules.has(regelNaam);
    }
    isRuleInconsistent(regelNaam) {
        return this.inconsistentRules.has(regelNaam);
    }
    // --- Dimension Handling ---
    /**
     * Get a dimension definition by name
     */
    getDimension(name) {
        return this.domainModel.dimensions?.find(d => d.name === name);
    }
    /**
     * Helper to check if two object values represent the same object.
     * Public for reuse by other components that need identity comparison.
     */
    objectsMatch(obj1, obj2) {
        if (obj1.type !== 'object' || obj2.type !== 'object') {
            return false;
        }
        // Compare by objectType and objectId if available
        const o1 = obj1;
        const o2 = obj2;
        if (o1.objectType && o2.objectType && o1.objectType !== o2.objectType) {
            return false;
        }
        if (o1.objectId && o2.objectId) {
            return o1.objectId === o2.objectId;
        }
        // If no IDs, compare by reference
        return obj1 === obj2;
    }
    /**
     * Clone the context for temporary evaluation
     */
    clone() {
        const cloned = new Context(this.domainModel);
        // Copy scopes
        cloned.scopes = this.scopes.map(scope => new Map(scope));
        // Copy objects
        cloned.objects = new Map();
        for (const [type, typeMap] of this.objects) {
            cloned.objects.set(type, new Map(typeMap));
        }
        // Copy other properties
        cloned.objectCounter = this.objectCounter;
        cloned.current_instance = this.current_instance;
        cloned.evaluation_date = this.evaluation_date;
        cloned.executionTrace = [...this.executionTrace];
        // Copy relationships
        cloned.relationships = [...this.relationships];
        // Copy feittypen
        cloned.feittypen = new Map(this.feittypen);
        // Copy timeline attributes
        cloned.timelineAttributes = new Map();
        for (const [type, typeMap] of this.timelineAttributes) {
            const clonedTypeMap = new Map();
            for (const [id, objectMap] of typeMap) {
                clonedTypeMap.set(id, new Map(objectMap));
            }
            cloned.timelineAttributes.set(type, clonedTypeMap);
        }
        // Copy timeline parameters
        cloned.timelineParameters = new Map(this.timelineParameters);
        // Copy object kenmerken
        cloned.objectKenmerken = new Map();
        for (const [type, typeMap] of this.objectKenmerken) {
            const clonedTypeMap = new Map();
            for (const [id, objectMap] of typeMap) {
                clonedTypeMap.set(id, new Map(objectMap));
            }
            cloned.objectKenmerken.set(type, clonedTypeMap);
        }
        // Copy rule execution tracking
        cloned.executedRules = new Set(this.executedRules);
        cloned.inconsistentRules = new Set(this.inconsistentRules);
        // Note: dimensionRegistry is already initialized from domainModel in constructor
        // It references the same dimension definitions, which is correct since they don't change
        return cloned;
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map