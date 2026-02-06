"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleExecutor = void 0;
const expression_evaluator_1 = require("../evaluators/expression-evaluator");
const feit_executor_1 = require("./feit-executor");
const navigation_1 = require("../utils/navigation");
const timelines_1 = require("../ast/timelines");
/**
 * Executes RegelSpraak rules
 */
class RuleExecutor {
    expressionEvaluator = new expression_evaluator_1.ExpressionEvaluator();
    feitExecutor = new feit_executor_1.FeitExecutor();
    recordRuleFired(context, ruleName) {
        if (!ruleName)
            return;
        const ctx = context;
        if (ctx.markRuleExecuted)
            ctx.markRuleExecuted(ruleName);
        if (ctx.addExecutionTrace)
            ctx.addExecutionTrace(`RULE_FIRED rule_name='${ruleName}'`);
    }
    /**
     * Normalize a string for comparison by:
     * 1. Inserting space before capital letters (e.g., "Natuurlijkpersoon" → "Natuurlijk persoon")
     * 2. Converting to lowercase
     * 3. Stripping leading articles (de/het/een)
     * 4. Collapsing multiple spaces
     */
    normalize(s) {
        return s
            .replace(/([a-z])([A-Z])/g, '$1 $2') // FIRST: "Natuurlijkpersoon" → "Natuurlijk persoon"
            .toLowerCase() // THEN lowercase (so regex above can match capitals)
            .replace(/^(de|het|een)\s+/, '') // Strip leading articles
            .replace(/\s+/g, ' ') // Collapse multiple spaces
            .trim();
    }
    /**
     * Check if the engine's current_instance matches the rule's target path.
     * Handles name normalization and role-to-type resolution.
     */
    instanceMatchesTarget(instance, targetPath, context) {
        if (targetPath.length < 1)
            return false;
        const instanceType = instance.objectType;
        if (!instanceType)
            return false;
        const targetRef = targetPath[0];
        const normalizedInstanceType = this.normalize(instanceType);
        const normalizedTarget = this.normalize(targetRef);
        // Direct match (after normalization)
        if (normalizedInstanceType === normalizedTarget) {
            return true;
        }
        // Role-to-type resolution
        const resolvedType = this.resolveRoleToObjectType(targetRef, context);
        if (resolvedType) {
            const normalizedResolved = this.normalize(resolvedType);
            if (normalizedInstanceType === normalizedResolved) {
                return true;
            }
        }
        return false;
    }
    /**
     * Navigate through an object graph and set an attribute value.
     * Handles both Feittype role navigation and direct attribute access.
     */
    navigateAndSetAttribute(startObj, targetPath, value, context, skipFirstSegment = true) {
        const ctx = context;
        let currentObj = startObj;
        // Determine starting index for navigation
        const startIdx = skipFirstSegment ? 1 : 0;
        // Navigate through intermediate segments (stop before last = attribute name)
        for (let i = startIdx; i < targetPath.length - 1; i++) {
            const navSegment = targetPath[i];
            // First check if this is a Feittype role navigation
            let navigatedThroughFeittype = false;
            const feittypen = ctx.getAllFeittypen ? ctx.getAllFeittypen() : [];
            for (const feittype of feittypen) {
                for (let targetRoleIdx = 0; targetRoleIdx < (feittype.rollen || []).length; targetRoleIdx++) {
                    const targetRole = feittype.rollen[targetRoleIdx];
                    // Clean role name for comparison
                    const roleNameClean = targetRole.naam.toLowerCase().replace(/^(de|het|een)\s+/, '');
                    const segmentClean = navSegment.toLowerCase().replace(/^(de|het|een)\s+/, '');
                    if (roleNameClean === segmentClean ||
                        (targetRole.meervoud && targetRole.meervoud.toLowerCase() === segmentClean)) {
                        // Found the target role we want to navigate to
                        // Now find which other role matches our current object
                        const currentObjType = currentObj.objectType || currentObj.type;
                        // Find the role that matches the current object type
                        for (let sourceRoleIdx = 0; sourceRoleIdx < feittype.rollen.length; sourceRoleIdx++) {
                            if (sourceRoleIdx === targetRoleIdx)
                                continue; // Skip the target role
                            const sourceRole = feittype.rollen[sourceRoleIdx];
                            if (sourceRole.objectType === currentObjType) {
                                // Current object matches this source role
                                // Navigate from source to target role
                                const asSubject = (sourceRoleIdx === 0);
                                const relatedObjects = ctx.getRelatedObjects(currentObj, feittype.naam, asSubject);
                                if (relatedObjects && relatedObjects.length > 0) {
                                    currentObj = relatedObjects[0];
                                    navigatedThroughFeittype = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (navigatedThroughFeittype)
                        break;
                }
                if (navigatedThroughFeittype)
                    break;
            }
            if (!navigatedThroughFeittype) {
                // Try as a direct attribute
                const objData = currentObj.value;
                const nextObj = objData[navSegment];
                if (!nextObj || nextObj.type !== 'object') {
                    // Can't navigate further
                    return { success: false, error: new Error(`Navigation failed at segment: ${navSegment}`) };
                }
                currentObj = nextObj;
            }
        }
        if (!currentObj) {
            return { success: false, error: new Error('Navigation resulted in null object') };
        }
        // Set the attribute on the final object (last element in path)
        const attributeName = targetPath[targetPath.length - 1];
        if (value.type === 'timeline') {
            // Timeline handling
            const objType = currentObj.objectType || currentObj.type;
            const objId = currentObj.value.instance_id || currentObj.objectId || 'unknown';
            const timelineImpl = value instanceof timelines_1.TimelineValueImpl
                ? value
                : new timelines_1.TimelineValueImpl(value.value);
            ctx.setTimelineAttribute(objType, objId, attributeName, timelineImpl);
        }
        else {
            // Regular value - store directly
            const objData = currentObj.value;
            objData[attributeName] = value;
        }
        return { success: true };
    }
    /**
     * Resolves a role name (e.g., "passagier") to its FeitType objectType (e.g., "Natuurlijk persoon").
     * This enables object-scoped rule detection for role-based targets.
     */
    resolveRoleToObjectType(roleName, context) {
        const ctx = context;
        const feittypen = ctx.getAllFeittypen ? ctx.getAllFeittypen() : [];
        const roleClean = roleName.toLowerCase().replace(/^(de|het|een)\s+/, '').trim();
        // First, check if role name contains a known object type name
        // This is more reliable than the FeitType parsing which has issues with multi-word roles
        for (const objType of ctx.domainModel?.objectTypes || []) {
            const objTypeLower = objType.name.toLowerCase();
            // Check if role contains the full object type name
            // e.g., "te verdelen contingent treinmiles" contains "contingent treinmiles"
            if (roleClean.includes(objTypeLower)) {
                return objType.name;
            }
        }
        // Fallback to FeitType lookup
        for (const feittype of feittypen) {
            for (const rol of feittype.rollen || []) {
                const rolNaamClean = (rol.naam || '').toLowerCase().replace(/^(de|het|een)\s+/, '').trim();
                const meervoudClean = (rol.meervoud || '').toLowerCase().trim();
                // Exact match
                if (rolNaamClean === roleClean || meervoudClean === roleClean) {
                    const objType = rol.objectType || '';
                    const cleanObjType = objType.split(/\s+(één|een|meerdere|veel)\s+/i)[0].trim();
                    // Only return if the objectType looks like a valid type (has at least 2 words or is capitalized)
                    if (cleanObjType && (cleanObjType.includes(' ') || cleanObjType[0] === cleanObjType[0].toUpperCase())) {
                        return cleanObjType;
                    }
                }
            }
        }
        return null;
    }
    execute(rule, context) {
        try {
            const result = rule.result || rule.resultaat;
            if (!result) {
                return {
                    success: false,
                    error: new Error(`Rule '${rule.name || rule.naam}' has no result part`)
                };
            }
            // Execute variable assignments first (§11.1 spec - variables are evaluated before conditions)
            if (rule.variables && rule.variables.length > 0) {
                for (const variable of rule.variables) {
                    try {
                        const value = this.expressionEvaluator.evaluate(variable.expression, context);
                        context.setVariable(variable.name, value);
                    }
                    catch (error) {
                        return {
                            success: false,
                            error: new Error(`Failed to evaluate variable '${variable.name}': ${error instanceof Error ? error.message : 'unknown error'}`)
                        };
                    }
                }
            }
            // Extract rule name early for tracking in all paths
            const ruleName = rule.name || rule.naam;
            // For Kenmerktoekenning rules with conditions, we handle the condition differently
            // The condition is evaluated per object, not at the rule level
            if (result.type === 'Kenmerktoekenning' && rule.condition) {
                return this.executeKenmerktoekenningWithCondition(result, rule.condition, context, ruleName);
            }
            // For ObjectCreation rules with conditions, iterate over objects
            // The condition determines which objects trigger creation
            if (result.type === 'ObjectCreation' && rule.condition) {
                return this.executeObjectCreationWithCondition(result, rule.condition, context, ruleName);
            }
            // For FeitCreatie rules with conditions, iterate over objects
            // The condition determines which objects trigger relationship creation
            if (result.type === 'FeitCreatie' && rule.condition) {
                return this.executeFeitCreatieWithCondition(result, rule.condition, context, ruleName);
            }
            // Check if there's a condition for other rule types
            if (rule.condition) {
                try {
                    // Evaluate the condition
                    const conditionResult = this.expressionEvaluator.evaluate(rule.condition.expression, context);
                    // Check if condition is truthy
                    if (!this.isTruthy(conditionResult)) {
                        // Condition is false, skip rule execution
                        return {
                            success: true,
                            skipped: true,
                            reason: 'Condition evaluated to false'
                        };
                    }
                }
                catch (error) {
                    // If condition evaluation fails (e.g., missing attribute), treat as false
                    return {
                        success: true,
                        skipped: true,
                        reason: `Condition evaluation failed: ${error instanceof Error ? error.message : 'unknown error'}`
                    };
                }
            }
            // Mark rule as executed for regel status tracking and fired_rules output
            const ctx = context;
            this.recordRuleFired(context, ruleName);
            // Set current rule name for consistency rule tracking
            ctx._currentRuleName = ruleName;
            // Special handling for inconsistent-type consistency rules
            if (result.type === 'Consistentieregel') {
                const consistentieregel = result;
                if (consistentieregel.criteriumType === 'inconsistent' && rule.condition) {
                    // For inconsistent rules, condition being true means inconsistency was found
                    if (ctx.markRuleInconsistent) {
                        ctx.markRuleInconsistent(rule.name);
                    }
                }
            }
            // Execute the result part(s)
            return this.executeResultPart(result, context);
        }
        catch (error) {
            return {
                success: false,
                error: error
            };
        }
    }
    executeResultPart(result, context) {
        switch (result.type) {
            case 'Gelijkstelling':
                return this.executeGelijkstelling(result, context);
            case 'ObjectCreation':
                return this.executeObjectCreation(result, context);
            case 'MultipleResults':
                return this.executeMultipleResults(result, context);
            case 'Kenmerktoekenning':
                return this.executeKenmerktoekenning(result, context);
            case 'Consistentieregel':
                return this.executeConsistentieregel(result, context);
            case 'Verdeling':
                return this.executeVerdeling(result, context);
            case 'FeitCreatie':
                return this.feitExecutor.executeFeitCreatie(result, context);
            default:
                throw new Error(`Unsupported result type: ${result.type}`);
        }
    }
    executeGelijkstelling(gelijkstelling, context) {
        // The target is an AttributeReference or DimensionedAttributeReference
        if (!gelijkstelling.target) {
            throw new Error('No target in gelijkstelling');
        }
        let targetPath;
        if (gelijkstelling.target.type === 'DimensionedAttributeReference') {
            // For dimensional references, get the path from the base attribute
            const dimRef = gelijkstelling.target;
            if (!dimRef.baseAttribute || !dimRef.baseAttribute.path) {
                throw new Error('DimensionedAttributeReference must have baseAttribute with path');
            }
            targetPath = dimRef.baseAttribute.path;
        }
        else if (gelijkstelling.target.path) {
            // Regular AttributeReference
            targetPath = gelijkstelling.target.path;
        }
        else {
            throw new Error(`No path in gelijkstelling target. Target type: ${gelijkstelling.target.type}`);
        }
        if (targetPath.length === 0) {
            throw new Error('Empty target path in gelijkstelling');
        }
        const ctx = context;
        // TIGHT GATE: Only use single-instance mode when ALL conditions met:
        // 1. Engine explicitly marked it's controlling iteration
        // 2. current_instance is set and is an object
        // 3. Instance type matches rule target (direct or via role)
        const engineControlled = context._engineControlsIteration === true;
        const engineInstance = ctx.current_instance;
        if (engineControlled &&
            engineInstance &&
            engineInstance.type === 'object' &&
            this.instanceMatchesTarget(engineInstance, targetPath, context)) {
            // Single-instance mode: evaluate once, set on current instance
            const value = this.expressionEvaluator.evaluate(gelijkstelling.expression, context);
            const result = this.navigateAndSetAttribute(engineInstance, targetPath, value, context);
            // Return success even if navigation fails - matches original behavior where
            // navigation failures are silently skipped (just like the multi-instance path)
            return {
                success: true,
                target: targetPath.join('.'),
                value
            };
        }
        // Fall through to existing multi-instance logic for:
        // - Standalone execution (no engine iteration)
        // - Type mismatches
        // - Edge cases
        // Check if this is an object-scoped rule
        if ((0, navigation_1.isObjectScopedRule)(targetPath)) {
            // With object-first order, the object type is the first element
            const objectType = targetPath[0];
            // Handle multi-word object types - "Natuurlijkpersoon" should match "Natuurlijk persoon"
            // Try exact match first
            let objects = context.getObjectsByType(objectType);
            // If no exact match, try variations
            if (objects.length === 0) {
                // Try common variations of multi-word object types
                const variations = [
                    // Convert "Natuurlijkpersoon" to "Natuurlijk persoon"
                    objectType.replace(/lijk(?=[A-Z])/g, 'lijk '),
                    // Add space before capital letters
                    objectType.replace(/([a-z])([A-Z])/g, '$1 $2'),
                    // Handle specific case
                    objectType === 'Natuurlijkpersoon' ? 'Natuurlijk persoon' : objectType
                ];
                for (const variant of variations) {
                    if (variant !== objectType) {
                        objects = context.getObjectsByType(variant);
                        if (objects.length > 0)
                            break;
                    }
                }
            }
            if (objects.length > 0) {
                // Object-scoped rule - iterate over all objects of this type
                for (const obj of objects) {
                    // Set current_instance for pronoun resolution
                    const objCtx = context;
                    const oldInstance = objCtx.current_instance;
                    objCtx.current_instance = obj;
                    try {
                        // Evaluate expression in the context of this object
                        const value = this.expressionEvaluator.evaluate(gelijkstelling.expression, context);
                        // Use shared helper for navigation and assignment
                        this.navigateAndSetAttribute(obj, targetPath, value, context, true);
                    }
                    finally {
                        objCtx.current_instance = oldInstance;
                    }
                }
                return {
                    success: true,
                    target: targetPath.join('.'),
                    value: { type: 'string', value: `Set on all ${objects.length} ${objectType} objects` }
                };
            }
        }
        // Check if first element might be a role name that maps to an object type
        // This handles targets like "passagier" → "Natuurlijk persoon"
        if (targetPath.length >= 2) {
            const potentialRole = targetPath[0];
            const resolvedType = this.resolveRoleToObjectType(potentialRole, context);
            if (resolvedType) {
                // Role-based scoping - iterate over all objects of the resolved type
                const objects = context.getObjectsByType(resolvedType);
                if (objects.length > 0) {
                    for (const obj of objects) {
                        // Set current_instance for pronoun resolution
                        const roleCtx = context;
                        const oldInstance = roleCtx.current_instance;
                        roleCtx.current_instance = obj;
                        try {
                            // Evaluate the expression for this instance
                            const instanceValue = this.expressionEvaluator.evaluate(gelijkstelling.expression, context);
                            // Use shared helper for navigation and assignment
                            this.navigateAndSetAttribute(obj, targetPath, instanceValue, context, true);
                        }
                        finally {
                            // Restore previous current_instance
                            roleCtx.current_instance = oldInstance;
                        }
                    }
                    return {
                        success: true,
                        target: targetPath.join('.'),
                        value: { type: 'string', value: `Set on all ${objects.length} ${resolvedType} objects (via role "${potentialRole}")` }
                    };
                }
            }
        }
        // Not an object-scoped rule - evaluate the expression once
        const value = this.expressionEvaluator.evaluate(gelijkstelling.expression, context);
        if (targetPath.length === 1) {
            // Simple attribute name - likely a variable assignment
            context.setVariable(targetPath[0], value);
            return {
                success: true,
                target: targetPath.join('.'),
                value
            };
        }
        else if (targetPath.length === 2) {
            // Pattern like ["berekening", "resultaat"] - object-first order
            const objectName = targetPath[0];
            const attributeName = targetPath[1];
            // First, try to get the object as a variable
            const objectValue = context.getVariable(objectName);
            if (objectValue && objectValue.type === 'object') {
                // Set the attribute on the specific object
                // Check if this is a timeline value
                if (value.type === 'timeline') {
                    // Store as timeline attribute
                    const objType = objectValue.objectType || objectValue.type || objectName;
                    const objId = objectValue.value.instance_id || objectValue.objectId || 'unknown';
                    // Wrap in TimelineValueImpl if not already
                    const timelineImpl = value instanceof timelines_1.TimelineValueImpl
                        ? value
                        : new timelines_1.TimelineValueImpl(value.value);
                    context.setTimelineAttribute(objType, objId, attributeName, timelineImpl);
                }
                else {
                    // Regular value - store directly
                    const objectData = objectValue.value;
                    objectData[attributeName] = value;
                }
            }
            else {
                // Fall back to getting all objects of this type
                // Try with capital first letter as object types are usually capitalized
                const capitalizedName = objectName.charAt(0).toUpperCase() + objectName.slice(1);
                let objects = context.getObjectsByType(capitalizedName);
                if (objects.length === 0) {
                    // Fall back to exact name
                    objects = context.getObjectsByType(objectName);
                }
                // Set attribute on all objects of this type
                for (const obj of objects) {
                    if (obj.type === 'object') {
                        // Check if this is a timeline value
                        if (value.type === 'timeline') {
                            // Store as timeline attribute
                            const objType = obj.objectType || obj.type || capitalizedName;
                            const objId = obj.value.instance_id || obj.objectId || 'unknown';
                            // Wrap in TimelineValueImpl if not already
                            const timelineImpl = value instanceof timelines_1.TimelineValueImpl
                                ? value
                                : new timelines_1.TimelineValueImpl(value.value);
                            context.setTimelineAttribute(objType, objId, attributeName, timelineImpl);
                        }
                        else {
                            // Regular value - store directly
                            const objectData = obj.value;
                            objectData[attributeName] = value;
                        }
                    }
                }
            }
            return {
                success: true,
                target: targetPath.join('.'),
                value
            };
        }
        else {
            // Complex path - use navigation resolver
            const result = (0, navigation_1.setValueAtPath)(targetPath, value, context);
            if (!result.success) {
                throw new Error(`Failed to set value at path ${targetPath.join('.')}: ${result.error}`);
            }
            return {
                success: true,
                target: targetPath.join('.'),
                value
            };
        }
    }
    executeObjectCreation(objectCreation, context) {
        // Generate a unique ID for the new object
        const objectId = context.generateObjectId(objectCreation.objectType);
        // Initialize attributes
        const attributes = {};
        // Create a temporary context that includes already-initialized attributes
        // This allows expressions to reference other attributes being set
        const tempContext = Object.create(context);
        tempContext.getVariable = function (name) {
            // First check if it's an attribute being initialized
            if (attributes[name] !== undefined) {
                return attributes[name];
            }
            // Otherwise delegate to the original context
            return context.getVariable(name);
        };
        // Evaluate each attribute initialization
        for (const init of objectCreation.attributeInits) {
            const value = this.expressionEvaluator.evaluate(init.value, tempContext);
            attributes[init.attribute] = value;
        }
        // Create the object in the context
        context.createObject(objectCreation.objectType, objectId, attributes);
        // Add to execution trace
        context.addExecutionTrace(`Created ${objectCreation.objectType} with id ${objectId}`);
        return {
            success: true,
            objectType: objectCreation.objectType,
            objectId,
            attributes
        };
    }
    executeMultipleResults(multipleResults, context) {
        const results = [];
        for (const result of multipleResults.results) {
            const execResult = this.executeResultPart(result, context);
            results.push(execResult);
            // If any result fails, stop and return the failure
            if (!execResult.success) {
                return execResult;
            }
        }
        return {
            success: true,
            multipleResults: results
        };
    }
    executeKenmerktoekenning(kenmerktoekenning, context) {
        // Evaluate the subject expression to get the object(s)
        const subjectValue = this.expressionEvaluator.evaluate(kenmerktoekenning.subject, context);
        // The subject should reference an object or collection of objects
        if (subjectValue.type === 'object') {
            // Single object - set the characteristic using separate kenmerken dict
            const objType = subjectValue.objectType || 'unknown';
            const objId = subjectValue.objectId || 'unknown';
            // Kenmerken are stored with "is " prefix
            const kenmerkKey = `is ${kenmerktoekenning.characteristic}`;
            context.setKenmerk(objType, objId, kenmerkKey, true);
            return {
                success: true,
                // Successfully set characteristic
            };
        }
        else if (subjectValue.type === 'array') {
            // Collection of objects - set characteristic on all
            const objects = subjectValue.value;
            let count = 0;
            for (const obj of objects) {
                if (obj.type === 'object') {
                    const objType = obj.objectType || 'unknown';
                    const objId = obj.objectId || 'unknown';
                    // Kenmerken are stored with "is " prefix
                    const kenmerkKey = `is ${kenmerktoekenning.characteristic}`;
                    context.setKenmerk(objType, objId, kenmerkKey, true);
                    count++;
                }
            }
            return {
                success: true,
                // Successfully set characteristic on multiple objects
            };
        }
        else {
            throw new Error(`Cannot set characteristic on value of type ${subjectValue.type}`);
        }
    }
    executeKenmerktoekenningWithCondition(kenmerktoekenning, condition, context, ruleName) {
        // Extract the object type from the subject
        // The subject can be:
        // - VariableReference: { type: 'VariableReference', variableName: 'Natuurlijkpersoon' }
        // - AttributeReference with single path: { type: 'AttributeReference', path: ['Planning'] }
        const subjectExpr = kenmerktoekenning.subject;
        let objectType;
        if (subjectExpr.type === 'VariableReference') {
            const varRef = subjectExpr;
            objectType = varRef.variableName;
        }
        else if (subjectExpr.type === 'AttributeReference') {
            // Handle AttributeReference with single-element path (equivalent to VariableReference)
            const attrRef = subjectExpr;
            if (attrRef.path && attrRef.path.length === 1) {
                objectType = attrRef.path[0];
            }
        }
        if (objectType) {
            // Get all objects of this type
            let objects = context.getObjectsByType(objectType);
            // If no objects found, try resolving as a role name (e.g., "passagier" -> "Natuurlijk persoon")
            if (objects.length === 0) {
                const resolvedType = this.resolveRoleToObjectType(objectType, context);
                if (resolvedType) {
                    objects = context.getObjectsByType(resolvedType);
                    objectType = resolvedType; // Use resolved type for kenmerk storage
                }
            }
            let writeCount = 0;
            // For each object, evaluate the condition with the object as context
            for (const obj of objects) {
                // Create a temporary context with _subject pointing to the current object
                const tempContext = Object.create(context);
                tempContext.setVariable = context.setVariable.bind(context);
                tempContext.getVariable = function (name) {
                    if (name === '_subject') {
                        // The obj itself is the Value object
                        return obj;
                    }
                    return context.getVariable(name);
                };
                // Also set current_instance for pronoun resolution (self/zijn/haar)
                tempContext.current_instance = obj;
                // Evaluate the condition for this object
                try {
                    const conditionResult = this.expressionEvaluator.evaluate(condition.expression, tempContext);
                    // Normalize kenmerk name: handle both "is X" and "heeft X" (bezittelijk) patterns
                    const characteristic = kenmerktoekenning.characteristic;
                    let kenmerkKey;
                    // Check if it already has a prefix or is a bezittelijk kenmerk like "recht op"
                    if (characteristic.startsWith('recht op') || characteristic.startsWith('heeft ')) {
                        // Bezittelijk kenmerk - keep as is without adding "is " prefix
                        kenmerkKey = characteristic;
                    }
                    else if (!characteristic.startsWith('is ')) {
                        // Standard kenmerk without prefix - add "is " prefix
                        kenmerkKey = `is ${characteristic}`;
                    }
                    else {
                        kenmerkKey = characteristic;
                    }
                    const objType = obj.objectType || objectType;
                    const objId = obj.objectId || 'unknown';
                    // Set true OR false based on condition result
                    if (this.isTruthy(conditionResult)) {
                        context.setKenmerk(objType, objId, kenmerkKey, true);
                        writeCount++;
                    }
                    else {
                        context.setKenmerk(objType, objId, kenmerkKey, false);
                        writeCount++;
                    }
                }
                catch (error) {
                    // If condition evaluation fails (e.g., missing attribute), skip this object
                    // Continue to next object
                }
            }
            // Only fire if at least one kenmerk was actually written
            if (writeCount > 0) {
                this.recordRuleFired(context, ruleName);
            }
            return {
                success: true,
            };
        }
        throw new Error('Conditional kenmerktoekenning requires a VariableReference or single-path AttributeReference subject');
    }
    isTruthy(value) {
        // Check if a value is considered true in a conditional context
        if (value.type === 'boolean') {
            return value.value === true;
        }
        if (value.type === 'number') {
            return value.value !== 0;
        }
        if (value.type === 'string') {
            return value.value !== '';
        }
        // For other types, consider non-null as truthy
        return value.value != null;
    }
    stripArticles(text) {
        return text.replace(/^(de|het|een|alle|één|zijn|haar|hun)\s+/i, '').trim();
    }
    /**
     * Deduce the object type referenced in a condition.
     * Used for ObjectCreation and FeitCreatie rules to determine what objects to iterate over
     * when the rule has a condition like "indien het salaris groter is dan X".
     */
    deduceTypeFromCondition(voorwaarde, context) {
        if (!voorwaarde || !voorwaarde.expression) {
            return undefined;
        }
        // Extract references from the condition expression
        // This now includes both AttributeReference and VariableReference
        const refs = this.extractReferences(voorwaarde.expression);
        // Find which object type owns these attributes or matches the variables
        const ctx = context;
        if (!ctx.domainModel || !ctx.domainModel.objectTypes) {
            return undefined;
        }
        // Keep track of candidates to handle ambiguity
        const candidates = new Set();
        for (const ref of refs) {
            if (ref.type === 'AttributeReference') {
                const attrRef = ref;
                if (attrRef.path && attrRef.path.length > 0) {
                    // Case 1: Object-first path (e.g., ["persoon", "leeftijd"])
                    // The attribute is the last element
                    const potentialAttrName = attrRef.path[attrRef.path.length - 1];
                    const objectNameOrPath = attrRef.path.slice(0, -1);
                    if (objectNameOrPath.length > 0) {
                        // Check if the prefix resolves to an object type
                        const prefix = objectNameOrPath[0]; // Simplified: check first element
                        for (const objType of ctx.domainModel.objectTypes) {
                            const typeName = objType.name || objType.naam;
                            if (typeName && typeName.toLowerCase() === prefix.toLowerCase()) {
                                if (this.typeHasAttribute(objType, potentialAttrName)) {
                                    candidates.add(objType.name || objType.naam);
                                }
                            }
                        }
                    }
                    // Case 2: Attribute-first/Single path (legacy or specific patterns)
                    // Try to fuzzy match the first element as an attribute of some type
                    let attrName = attrRef.path[0];
                    attrName = this.stripArticles(attrName);
                    for (const objType of ctx.domainModel.objectTypes) {
                        if (this.typeHasAttribute(objType, attrName)) {
                            candidates.add(objType.name || objType.naam);
                        }
                    }
                }
            }
            else if (ref.type === 'VariableReference') {
                const varRef = ref;
                const varName = this.stripArticles(varRef.variableName);
                // Check if the variable name itself matches an object type (singular or plural)
                for (const objType of ctx.domainModel.objectTypes) {
                    const typeName = objType.name || objType.naam;
                    // distinct heuristics
                    if (typeName.toLowerCase() === varName.toLowerCase()) {
                        candidates.add(typeName);
                    }
                    if (objType.plural && objType.plural.some((p) => p.toLowerCase() === varName.toLowerCase())) {
                        candidates.add(typeName);
                    }
                }
                // Also check if this 'variable' is actually a unique attribute of some type
                // (This happens because simple noun phrases are parsed as VariableReference)
                for (const objType of ctx.domainModel.objectTypes) {
                    if (this.typeHasAttribute(objType, varName)) {
                        candidates.add(objType.name || objType.naam);
                    }
                }
            }
        }
        // If we have exactly one candidate, return it
        if (candidates.size === 1) {
            return candidates.values().next().value;
        }
        // TODO: stricter resolution if multiple candidates?
        return undefined;
    }
    typeHasAttribute(objType, attrName) {
        if (!objType.members)
            return false;
        const normalizedAttr = attrName.toLowerCase();
        return objType.members.some((member) => {
            const memberName = (member.name || member.naam || '').toLowerCase();
            return this.stripArticles(memberName) === this.stripArticles(normalizedAttr);
        });
    }
    /**
     * Extract all attribute and variable references from an expression.
     * Recursively traverses the expression tree.
     */
    extractReferences(expr) {
        const refs = [];
        if (!expr) {
            return refs;
        }
        // Direct match
        if (expr.type === 'AttributeReference') {
            refs.push(expr);
        }
        else if (expr.type === 'VariableReference') {
            refs.push(expr);
        }
        // Recursive traversal
        if (expr.left)
            refs.push(...this.extractReferences(expr.left));
        if (expr.right)
            refs.push(...this.extractReferences(expr.right));
        if (expr.operand)
            refs.push(...this.extractReferences(expr.operand));
        // Function calls
        if (expr.type === 'FunctionCall') {
            const func = expr;
            if (func.arguments) {
                func.arguments.forEach(arg => refs.push(...this.extractReferences(arg)));
            }
        }
        // Nested expressions
        if (expr.type === 'SubselectieExpression') {
            const sub = expr;
            refs.push(...this.extractReferences(sub.collection));
            // We might want references from the predicate too, but usually the collection defines the type
        }
        if (expr.type === 'AggregationExpression') {
            const agg = expr;
            if (Array.isArray(agg.target)) {
                agg.target.forEach(t => refs.push(...this.extractReferences(t)));
            }
            else {
                refs.push(...this.extractReferences(agg.target));
            }
        }
        if (expr.type === 'SamengesteldeVoorwaarde') {
            const sv = expr;
            if (sv.voorwaarden) {
                sv.voorwaarden.forEach(v => refs.push(...this.extractReferences(v)));
            }
        }
        if (expr.type === 'ConjunctionExpression' || expr.type === 'DisjunctionExpression') {
            const conj = expr; // Both have .values
            if (conj.values) {
                conj.values.forEach((v) => refs.push(...this.extractReferences(v)));
            }
        }
        return refs;
    }
    /**
     * Execute ObjectCreation with a condition by iterating over relevant objects
     */
    executeObjectCreationWithCondition(objectCreation, condition, context, ruleName) {
        // Deduce which object type to iterate over from the condition
        const targetType = this.deduceTypeFromCondition(condition, context);
        if (!targetType) {
            // Cannot deduce type, fall back to regular execution with condition check
            const conditionResult = this.expressionEvaluator.evaluate(condition.expression, context);
            if (!this.isTruthy(conditionResult)) {
                return {
                    success: true,
                    skipped: true,
                    reason: 'Condition evaluated to false'
                };
            }
            const result = this.executeObjectCreation(objectCreation, context);
            // ObjectCreation always creates one object on success, so success implies fired
            if (result.success && !result.skipped) {
                this.recordRuleFired(context, ruleName);
            }
            return result;
        }
        // Get all objects of the deduced type
        const objects = context.getObjectsByType(targetType);
        let createdCount = 0;
        const createdObjects = [];
        // For each object, evaluate the condition with the object as context
        for (const obj of objects) {
            // Create a temporary context with current_instance pointing to the current object
            const tempContext = Object.create(context);
            tempContext.setVariable = context.setVariable.bind(context);
            tempContext.getVariable = function (name) {
                if (name === '_subject' || name === 'current_instance') {
                    return obj;
                }
                return context.getVariable(name);
            };
            // Also set current_instance for attribute resolution
            tempContext.current_instance = obj;
            // Evaluate the condition for this object
            try {
                const conditionResult = this.expressionEvaluator.evaluate(condition.expression, tempContext);
                if (this.isTruthy(conditionResult)) {
                    // Condition is true, create the object with this context
                    const result = this.executeObjectCreation(objectCreation, tempContext);
                    if (result.success) {
                        createdCount++;
                        if (result.objectType && result.objectId && result.attributes) {
                            createdObjects.push({
                                objectType: result.objectType,
                                objectId: result.objectId,
                                attributes: result.attributes
                            });
                        }
                    }
                }
            }
            catch (error) {
                // If condition evaluation fails, skip this object
                continue;
            }
        }
        // Only fire if at least one object was created
        if (createdCount > 0) {
            this.recordRuleFired(context, ruleName);
        }
        return {
            success: true,
            value: {
                type: 'string',
                value: `Created ${createdCount} objects`
            }
        };
    }
    /**
     * Execute FeitCreatie with a condition by iterating over relevant objects
     */
    executeFeitCreatieWithCondition(feitCreatie, condition, context, ruleName) {
        // Deduce which object type to iterate over from the condition
        const targetType = this.deduceTypeFromCondition(condition, context);
        if (!targetType) {
            // Cannot deduce type, fall back to regular execution with condition check
            const conditionResult = this.expressionEvaluator.evaluate(condition.expression, context);
            if (!this.isTruthy(conditionResult)) {
                return {
                    success: true,
                    skipped: true,
                    reason: 'Condition evaluated to false'
                };
            }
            const result = this.feitExecutor.executeFeitCreatie(feitCreatie, context);
            // Use structured createdCount from result
            if (result.createdCount > 0) {
                this.recordRuleFired(context, ruleName);
            }
            return result;
        }
        // Get all objects of the deduced type
        const objects = context.getObjectsByType(targetType);
        let totalCreated = 0;
        // For each object, evaluate the condition with the object as context
        for (const obj of objects) {
            // Create a temporary context with current_instance pointing to the current object
            const tempContext = Object.create(context);
            tempContext.setVariable = context.setVariable.bind(context);
            tempContext.getVariable = function (name) {
                if (name === '_subject' || name === 'current_instance') {
                    return obj;
                }
                return context.getVariable(name);
            };
            // Also set current_instance for attribute resolution
            tempContext.current_instance = obj;
            // Evaluate the condition for this object
            try {
                const conditionResult = this.expressionEvaluator.evaluate(condition.expression, tempContext);
                if (this.isTruthy(conditionResult)) {
                    // Condition is true, create the relationships with this context
                    const result = this.feitExecutor.executeFeitCreatie(feitCreatie, tempContext);
                    if (result.success) {
                        // Use structured createdCount from result
                        totalCreated += result.createdCount || 0;
                    }
                }
            }
            catch (error) {
                // If condition evaluation fails, skip this object
                continue;
            }
        }
        // Only fire if at least one relationship was created
        if (totalCreated > 0) {
            this.recordRuleFired(context, ruleName);
        }
        return {
            success: true,
            value: {
                type: 'string',
                value: `Created ${totalCreated} relationship${totalCreated !== 1 ? 's' : ''}`
            }
        };
    }
    executeConsistentieregel(consistentieregel, context) {
        if (consistentieregel.criteriumType === 'uniek') {
            // Handle uniqueness check
            if (!consistentieregel.target) {
                throw new Error('Uniqueness check requires a target expression');
            }
            // Evaluate the target expression to get all values to check
            const targetValue = this.expressionEvaluator.evaluate(consistentieregel.target, context);
            // The target should be an array of values
            if (targetValue.type !== 'array') {
                throw new Error('Uniqueness check target must evaluate to an array');
            }
            const values = targetValue.value;
            const uniqueValues = new Set();
            let hasNonUniqueValues = false;
            // Check for duplicates
            for (const value of values) {
                // Skip undefined/null values
                if (value.value === undefined || value.value === null) {
                    continue;
                }
                const stringKey = JSON.stringify(value.value);
                if (uniqueValues.has(stringKey)) {
                    hasNonUniqueValues = true;
                    // Mark rule as inconsistent for regel status tracking
                    const ctx = context;
                    if (ctx.markRuleInconsistent && ctx._currentRuleName) {
                        ctx.markRuleInconsistent(ctx._currentRuleName);
                    }
                    break;
                }
                uniqueValues.add(stringKey);
            }
            // For consistency rules, we don't fail on validation errors
            // Instead, we record the result in the context (implementation specific)
            return {
                success: true,
                // The rule executed successfully, regardless of whether values were unique
            };
        }
        else if (consistentieregel.criteriumType === 'inconsistent') {
            // Handle inconsistency check
            // Note: Engine now handles object scoping via central deduction, so we just evaluate the condition
            if (consistentieregel.condition) {
                // Evaluate the condition for the current instance (set by Engine)
                const conditionResult = this.expressionEvaluator.evaluate(consistentieregel.condition, context);
                // For inconsistency rules, check if condition is violated
                if (conditionResult.type === 'boolean' && !conditionResult.value) {
                    // Condition failed - mark as inconsistent
                    const ctx = context;
                    if (ctx.markRuleInconsistent && ctx._currentRuleName) {
                        ctx.markRuleInconsistent(ctx._currentRuleName);
                    }
                }
                return {
                    success: true,
                };
            }
            // No condition means always inconsistent?
            return {
                success: true,
            };
        }
        throw new Error(`Unknown consistency criterion type: ${consistentieregel.criteriumType}`);
    }
    executeVerdeling(verdeling, context) {
        // Note: Engine now handles object scoping via central deduction
        // We just execute the distribution for the current instance (set by Engine)
        const ctx = context;
        return this.executeVerdelingForInstance(verdeling, ctx);
    }
    /**
     * Execute Verdeling for a single instance context.
     * Extracted from original executeVerdeling to support object-scoped iteration.
     */
    executeVerdelingForInstance(verdeling, context) {
        // Evaluate the source amount to get the total to distribute
        const sourceValue = this.expressionEvaluator.evaluate(verdeling.sourceAmount, context);
        if (sourceValue.type !== 'number') {
            throw new Error('Distribution source must be a number');
        }
        const totalAmount = sourceValue.value;
        // Parse the target collection to extract objects and attribute
        // Pattern: "de <attribute> van <collection>"
        let targetObjects = [];
        let attributeName = '';
        if (verdeling.targetCollection.type === 'AttributeReference') {
            const attrRef = verdeling.targetCollection;
            const path = attrRef.path;
            if (path.length === 0) {
                throw new Error('Distribution target path cannot be empty');
            }
            // Attribute name is always the last element in the path
            attributeName = path[path.length - 1];
            // Navigation path is everything except the attribute (last element)
            const navigationPath = path.slice(0, -1);
            if (navigationPath.length === 0) {
                // Simple case: just an attribute on current instance, no collection
                throw new Error('Distribution target must reference a collection, not just an attribute');
            }
            // Try to resolve the collection
            targetObjects = this.resolveCollectionForVerdeling(navigationPath, context);
        }
        else {
            throw new Error('Distribution target must be a navigation expression or attribute reference');
        }
        if (targetObjects.length === 0) {
            // Nothing to distribute to
            // Handle remainder if specified
            if (verdeling.remainderTarget) {
                this.setRemainderValue(verdeling.remainderTarget, sourceValue, context);
            }
            return {
                success: true
                // No targets for distribution
            };
        }
        // Calculate distribution based on methods
        const distributionResult = this.calculateDistribution(totalAmount, targetObjects, verdeling.distributionMethods, context);
        // Apply distributed values to target objects
        for (let i = 0; i < targetObjects.length; i++) {
            const targetObj = targetObjects[i];
            if (!targetObj || targetObj.type !== 'object') {
                continue;
            }
            const objectData = targetObj.value;
            objectData[attributeName] = {
                type: 'number',
                value: distributionResult.amounts[i]
            };
        }
        // Handle remainder if specified
        if (verdeling.remainderTarget && distributionResult.remainder > 0) {
            const remainderValue = {
                type: 'number',
                value: distributionResult.remainder
            };
            this.setRemainderValue(verdeling.remainderTarget, remainderValue, context);
        }
        return {
            success: true
            // Distributed totalAmount to targetObjects.length targets
        };
    }
    /**
     * Resolve navigation path to collection of target objects for Verdeling.
     * Handles patterns like "de X van alle Y van Z" where:
     * - Y is a collection reference (role name, object type, or variable)
     * - Z may be a navigation context
     *
     * Ported from Python's _resolve_collection_for_verdeling.
     */
    resolveCollectionForVerdeling(navigationPath, context) {
        const ctx = context;
        // First path element is typically the collection reference
        const collectionRef = navigationPath[0];
        // Helper to strip articles from text
        const stripArticles = (text) => {
            return text.replace(/^(de|het|een|alle)\s+/i, '').trim();
        };
        // Try 1: Simple variable lookup (handles existing 2-path cases)
        const varValue = ctx.getVariable(collectionRef);
        if (varValue?.type === 'array') {
            return varValue.value;
        }
        // Try 2: Look for FeitType relationship from current instance
        if (ctx.current_instance) {
            const currentType = ctx.current_instance.objectType;
            const pathClean = stripArticles(collectionRef).toLowerCase();
            // Check all FeitTypes for matching roles
            for (const feittype of ctx.getAllFeittypen()) {
                if (!feittype.rollen)
                    continue;
                const roleTypes = feittype.rollen.map(r => r.objectType);
                if (!roleTypes.includes(currentType))
                    continue;
                // Check if any role name matches our path element
                for (let i = 0; i < feittype.rollen.length; i++) {
                    const rol = feittype.rollen[i];
                    const roleName = stripArticles(rol.naam || '').toLowerCase();
                    const rolePlural = rol.meervoud ? stripArticles(rol.meervoud).toLowerCase() : '';
                    // Check for matches (exact, contains, plural)
                    const matches = pathClean === roleName ||
                        pathClean === rolePlural ||
                        pathClean.includes(roleName) ||
                        pathClean.includes(rolePlural) ||
                        (rolePlural && pathClean.includes(rolePlural));
                    if (matches) {
                        // Determine if current instance is subject or object in this relationship
                        let currentRoleIndex = null;
                        for (let idx = 0; idx < feittype.rollen.length; idx++) {
                            const r = feittype.rollen[idx];
                            if (r.objectType === currentType) {
                                currentRoleIndex = idx;
                                break;
                            }
                        }
                        const asSubject = currentRoleIndex === 0;
                        const related = ctx.getRelatedObjects(ctx.current_instance, feittype.naam, asSubject);
                        if (related.length > 0) {
                            return related;
                        }
                    }
                }
            }
            // Try 3: Find all objects of a matching type
            const matchedType = this.findObjectTypeMatch(pathClean, ctx);
            if (matchedType) {
                return ctx.getObjectsByType(matchedType);
            }
        }
        // Try 4: Look up as variable with article stripped
        const cleanedRef = stripArticles(collectionRef);
        const cleanedValue = ctx.getVariable(cleanedRef);
        if (cleanedValue?.type === 'array') {
            return cleanedValue.value;
        }
        // Try 5: Resolve as FeitType role name to get objects of that type
        // Handles cases like "passagiers met recht op treinmiles" → "Natuurlijk persoon"
        for (const segment of navigationPath) {
            const roleObjType = this.resolveRoleToObjectType(segment, context);
            if (roleObjType) {
                const objects = ctx.getObjectsByType(roleObjType);
                if (objects.length > 0) {
                    return objects;
                }
            }
        }
        // Fallback: return empty array
        return [];
    }
    /**
     * Find object type that matches the given text (singular or plural form)
     */
    findObjectTypeMatch(text, context) {
        const ctx = context;
        const textLower = text.toLowerCase();
        for (const objType of ctx.domainModel.objectTypes || []) {
            const nameLower = objType.name.toLowerCase();
            // Exact match
            if (textLower === nameLower) {
                return objType.name;
            }
            // Plural match
            if (objType.plural) {
                const plurals = Array.isArray(objType.plural) ? objType.plural : [objType.plural];
                for (const plural of plurals) {
                    if (textLower === plural.toLowerCase()) {
                        return objType.name;
                    }
                }
            }
            // Contains match (for compound names)
            if (textLower.includes(nameLower) || nameLower.includes(textLower)) {
                return objType.name;
            }
        }
        return null;
    }
    setRemainderValue(remainderTarget, value, context) {
        // The remainder target should be an attribute reference on the current instance
        if (remainderTarget.type === 'AttributeReference') {
            const attrRef = remainderTarget;
            if (attrRef.path && attrRef.path.length > 0) {
                // With object-first order, attribute is the last element
                const attrName = attrRef.path[attrRef.path.length - 1];
                // Set on current instance or specified object
                const ctx = context;
                if (ctx.current_instance) {
                    const objectData = ctx.current_instance.value;
                    objectData[attrName] = value;
                }
            }
        }
    }
    calculateDistribution(totalAmount, targetObjects, methods, context) {
        const n = targetObjects.length;
        if (n === 0) {
            return { amounts: [], remainder: totalAmount };
        }
        // Start with equal distribution as default
        let amounts = new Array(n).fill(totalAmount / n);
        let hasRatio = false;
        let hasOrdering = false;
        let hasMaximum = false;
        let hasRounding = false;
        // Extract all method configurations
        let ratioExpression;
        let orderExpression;
        let orderDirection;
        let tieBreakMethod;
        let maximumExpression;
        let roundingDecimals;
        let roundingDirection;
        // Process methods to extract configurations
        for (const method of methods) {
            switch (method.type) {
                case 'VerdelingGelijkeDelen':
                    // Equal distribution is the default
                    break;
                case 'VerdelingNaarRato':
                    hasRatio = true;
                    ratioExpression = method.ratioExpression;
                    break;
                case 'VerdelingOpVolgorde':
                    hasOrdering = true;
                    const orderMethod = method;
                    orderExpression = orderMethod.orderExpression;
                    orderDirection = orderMethod.orderDirection;
                    break;
                case 'VerdelingTieBreak':
                    tieBreakMethod = method.tieBreakMethod;
                    break;
                case 'VerdelingMaximum':
                    hasMaximum = true;
                    maximumExpression = method.maxExpression;
                    break;
                case 'VerdelingAfronding':
                    hasRounding = true;
                    const roundingMethod = method;
                    roundingDecimals = roundingMethod.decimals;
                    roundingDirection = roundingMethod.roundDirection;
                    break;
            }
        }
        // Apply distribution logic based on methods
        if (hasOrdering && orderExpression) {
            // Sort objects and apply ordered distribution
            amounts = this.distributeOrdered(totalAmount, targetObjects, orderExpression, orderDirection, tieBreakMethod, maximumExpression, context);
        }
        else if (hasRatio && ratioExpression) {
            // Apply ratio-based distribution
            amounts = this.distributeByRatio(totalAmount, targetObjects, ratioExpression, context);
        }
        // Apply maximum constraint if specified
        if (hasMaximum && maximumExpression) {
            amounts = this.applyMaximumConstraint(amounts, targetObjects, maximumExpression, context);
        }
        // Apply rounding if specified
        if (hasRounding && roundingDecimals !== undefined) {
            amounts = this.applyRounding(amounts, roundingDecimals, roundingDirection === 'naar beneden');
        }
        // Calculate remainder
        const distributedTotal = amounts.reduce((sum, amt) => sum + amt, 0);
        const remainder = totalAmount - distributedTotal;
        return { amounts, remainder };
    }
    distributeByRatio(totalAmount, targetObjects, ratioExpression, context) {
        // Evaluate ratio expression for each target object
        const ratios = [];
        let totalRatio = 0;
        for (const targetObj of targetObjects) {
            if (targetObj.type !== 'object') {
                ratios.push(0);
                continue;
            }
            // Temporarily set this object as current for expression evaluation
            const ctx = context;
            const oldInstance = ctx.current_instance;
            ctx.current_instance = targetObj;
            try {
                const ratioValue = this.expressionEvaluator.evaluate(ratioExpression, context);
                if (ratioValue.type === 'number') {
                    const ratio = ratioValue.value;
                    ratios.push(ratio);
                    totalRatio += ratio;
                }
                else {
                    ratios.push(0);
                }
            }
            finally {
                ctx.current_instance = oldInstance;
            }
        }
        // Calculate amounts based on ratios
        if (totalRatio === 0) {
            // If all ratios are 0, distribute equally
            return new Array(targetObjects.length).fill(totalAmount / targetObjects.length);
        }
        return ratios.map(ratio => (ratio / totalRatio) * totalAmount);
    }
    distributeOrdered(totalAmount, targetObjects, orderExpression, orderDirection, tieBreakMethod, maximumExpression, context) {
        // Create array of objects with their order values
        const objectsWithOrder = [];
        for (let i = 0; i < targetObjects.length; i++) {
            const targetObj = targetObjects[i];
            if (targetObj.type !== 'object') {
                objectsWithOrder.push({ obj: targetObj, orderValue: 0, index: i });
                continue;
            }
            // Evaluate order expression for this object
            const ctx = context;
            const oldInstance = ctx.current_instance;
            ctx.current_instance = targetObj;
            try {
                const orderValue = this.expressionEvaluator.evaluate(orderExpression, context);
                objectsWithOrder.push({
                    obj: targetObj,
                    orderValue: orderValue.value,
                    index: i
                });
            }
            finally {
                ctx.current_instance = oldInstance;
            }
        }
        // Sort by order value
        objectsWithOrder.sort((a, b) => {
            const comparison = a.orderValue < b.orderValue ? -1 :
                a.orderValue > b.orderValue ? 1 : 0;
            return orderDirection === 'toenemende' ? comparison : -comparison;
        });
        // Distribute in order, respecting maximum if specified
        const amounts = new Array(targetObjects.length).fill(0);
        let remainingAmount = totalAmount;
        // Group by order value for tie-breaking
        const groups = [];
        let currentGroup = [];
        let lastOrderValue = null;
        for (const item of objectsWithOrder) {
            if (lastOrderValue !== null && item.orderValue !== lastOrderValue) {
                if (currentGroup.length > 0) {
                    groups.push(currentGroup);
                    currentGroup = [];
                }
            }
            currentGroup.push({ obj: item.obj, index: item.index });
            lastOrderValue = item.orderValue;
        }
        if (currentGroup.length > 0) {
            groups.push(currentGroup);
        }
        // Distribute to each group
        for (const group of groups) {
            if (remainingAmount <= 0)
                break;
            // For tied objects, distribute based on tie-break method
            if (group.length === 1) {
                // No tie, give all remaining (respecting maximum)
                const index = group[0].index;
                let amount = remainingAmount;
                // Apply maximum if specified
                if (maximumExpression) {
                    const ctx = context;
                    const oldInstance = ctx.current_instance;
                    ctx.current_instance = group[0].obj;
                    try {
                        const maxValue = this.expressionEvaluator.evaluate(maximumExpression, context);
                        if (maxValue.type === 'number') {
                            amount = Math.min(amount, maxValue.value);
                        }
                    }
                    finally {
                        ctx.current_instance = oldInstance;
                    }
                }
                amounts[index] = amount;
                remainingAmount -= amount;
            }
            else {
                // Tie - distribute within group based on tie-break method
                if (tieBreakMethod) {
                    if (tieBreakMethod.type === 'VerdelingGelijkeDelen') {
                        // Equal distribution within group
                        const amountPerObject = remainingAmount / group.length;
                        for (const { obj, index } of group) {
                            let amount = amountPerObject;
                            // Apply maximum if specified
                            if (maximumExpression) {
                                const ctx = context;
                                const oldInstance = ctx.current_instance;
                                ctx.current_instance = obj;
                                try {
                                    const maxValue = this.expressionEvaluator.evaluate(maximumExpression, context);
                                    if (maxValue.type === 'number') {
                                        amount = Math.min(amount, maxValue.value);
                                    }
                                }
                                finally {
                                    ctx.current_instance = oldInstance;
                                }
                            }
                            amounts[index] = amount;
                            remainingAmount -= amount;
                        }
                    }
                    else if (tieBreakMethod.type === 'VerdelingNaarRato') {
                        // Ratio-based distribution within group
                        const tieBreakExpression = tieBreakMethod.ratioExpression;
                        const groupObjects = group.map(g => g.obj);
                        const groupAmounts = this.distributeByRatio(remainingAmount, groupObjects, tieBreakExpression, context);
                        // Apply amounts with maximum constraint
                        for (let i = 0; i < group.length; i++) {
                            let amount = groupAmounts[i];
                            // Apply maximum if specified
                            if (maximumExpression) {
                                const ctx = context;
                                const oldInstance = ctx.current_instance;
                                ctx.current_instance = group[i].obj;
                                try {
                                    const maxValue = this.expressionEvaluator.evaluate(maximumExpression, context);
                                    if (maxValue.type === 'number') {
                                        amount = Math.min(amount, maxValue.value);
                                    }
                                }
                                finally {
                                    ctx.current_instance = oldInstance;
                                }
                            }
                            amounts[group[i].index] = amount;
                            remainingAmount -= amount;
                        }
                    }
                }
                else {
                    // No tie-break method specified, distribute equally
                    const amountPerObject = remainingAmount / group.length;
                    for (const { obj, index } of group) {
                        amounts[index] = amountPerObject;
                        remainingAmount -= amountPerObject;
                    }
                }
            }
        }
        return amounts;
    }
    applyMaximumConstraint(amounts, targetObjects, maximumExpression, context) {
        const newAmounts = [];
        for (let i = 0; i < amounts.length; i++) {
            const targetObj = targetObjects[i];
            if (targetObj.type !== 'object') {
                newAmounts.push(amounts[i]);
                continue;
            }
            // Evaluate maximum for this object
            const ctx = context;
            const oldInstance = ctx.current_instance;
            ctx.current_instance = targetObj;
            try {
                const maxValue = this.expressionEvaluator.evaluate(maximumExpression, context);
                if (maxValue.type === 'number') {
                    newAmounts.push(Math.min(amounts[i], maxValue.value));
                }
                else {
                    newAmounts.push(amounts[i]);
                }
            }
            finally {
                ctx.current_instance = oldInstance;
            }
        }
        return newAmounts;
    }
    applyRounding(amounts, decimals, roundDown) {
        const factor = Math.pow(10, decimals);
        return amounts.map(amount => {
            if (roundDown) {
                return Math.floor(amount * factor) / factor;
            }
            else {
                return Math.ceil(amount * factor) / factor;
            }
        });
    }
    executeRegelGroep(regelGroep, context) {
        const results = [];
        if (!regelGroep.isRecursive) {
            // Non-recursive: execute all rules once
            for (const rule of regelGroep.rules) {
                try {
                    const result = this.execute(rule, context);
                    results.push({
                        rule: rule.name,
                        status: result.success ? 'evaluated' : 'error',
                        result: result
                    });
                }
                catch (error) {
                    results.push({
                        rule: rule.name,
                        status: 'error',
                        error: error instanceof Error ? error.message : 'Unknown error'
                    });
                }
            }
        }
        else {
            // Recursive: execute with iteration tracking
            const maxIterations = context.maxRecursionIterations || 100; // Use configurable limit from context
            let iteration = 0;
            // Cycle detection: track object creation graph
            // Maps creator_id -> set of created object IDs
            const creationGraph = new Map();
            while (iteration < maxIterations) {
                iteration++;
                let objectCreated = false;
                for (const rule of regelGroep.rules) {
                    // Check if this is an object creation rule
                    const result = rule.result || rule.resultaat;
                    if (result && result.type === 'ObjectCreation') {
                        // Check termination condition
                        if (rule.condition) {
                            try {
                                const conditionResult = this.expressionEvaluator.evaluate(rule.condition.expression, context);
                                if (!this.isTruthy(conditionResult)) {
                                    // Termination condition met
                                    results.push({
                                        iteration,
                                        rule: rule.name,
                                        status: 'terminated',
                                        message: 'Termination condition met'
                                    });
                                    return {
                                        success: true,
                                        value: { type: 'array', value: results }
                                    };
                                }
                            }
                            catch (error) {
                                // Condition evaluation failed - treat as termination
                                results.push({
                                    iteration,
                                    rule: rule.name,
                                    status: 'terminated',
                                    message: `Condition evaluation failed: ${error instanceof Error ? error.message : 'unknown'}`
                                });
                                return {
                                    success: true,
                                    value: { type: 'array', value: results }
                                };
                            }
                        }
                        // Execute object creation
                        const result = this.execute(rule, context);
                        if (result.success) {
                            objectCreated = true;
                            results.push({
                                iteration,
                                rule: rule.name,
                                status: 'object_created',
                                result
                            });
                        }
                    }
                    else {
                        // Execute other rules normally
                        const result = this.execute(rule, context);
                        results.push({
                            iteration,
                            rule: rule.name,
                            status: result.success ? 'evaluated' : 'error',
                            result
                        });
                    }
                }
                // If no objects were created, terminate
                if (!objectCreated) {
                    results.push({
                        iteration,
                        status: 'completed',
                        message: 'No more objects created'
                    });
                    break;
                }
            }
            // Check if we hit max iterations
            if (iteration >= maxIterations) {
                results.push({
                    iteration,
                    status: 'max_iterations_reached',
                    message: `Maximum iterations (${maxIterations}) reached`
                });
            }
        }
        return {
            success: true,
            value: { type: 'array', value: results }
        };
    }
}
exports.RuleExecutor = RuleExecutor;
//# sourceMappingURL=rule-executor.js.map