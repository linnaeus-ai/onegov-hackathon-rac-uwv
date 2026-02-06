"use strict";
/**
 * REST API route handlers for the RegelSpraak server.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouter = createRouter;
const express_1 = require("express");
const context_1 = require("../context");
const fired_rules_1 = require("../utils/fired-rules");
/**
 * Parse a value from input JSON into a proper Value object
 */
function parseValue(v) {
    if (v && typeof v === 'object' && 'value' in v) {
        return {
            type: 'number',
            value: v.value,
            unit: v.unit ? { name: v.unit } : undefined
        };
    }
    if (typeof v === 'number') {
        return { type: 'number', value: v };
    }
    if (typeof v === 'boolean') {
        return { type: 'boolean', value: v };
    }
    if (typeof v === 'string') {
        if (/^\d{4}-\d{2}-\d{2}/.test(v)) {
            return { type: 'date', value: new Date(v) };
        }
        return { type: 'string', value: v };
    }
    if (v === null || v === undefined) {
        return { type: 'null', value: null };
    }
    if (Array.isArray(v)) {
        return { type: 'list', value: v.map(parseValue) };
    }
    return { type: 'object', value: v };
}
/**
 * Populate context with input data
 */
function populateContext(context, data) {
    if (data.rekendatum) {
        context.setEvaluationDate(new Date(data.rekendatum));
    }
    for (const [name, value] of Object.entries(data.parameters || {})) {
        context.setVariable(name, parseValue(value));
    }
    const objectMap = new Map();
    for (const [typeName, instances] of Object.entries(data.objects || {})) {
        for (const instance of instances) {
            const { id, ...attrs } = instance;
            const parsedAttrs = {};
            for (const [k, v] of Object.entries(attrs)) {
                parsedAttrs[k] = parseValue(v);
            }
            context.createObject(typeName, id, parsedAttrs);
            const objects = context.getObjectsByType(typeName);
            const obj = objects.find((o) => o.objectId === id);
            if (obj) {
                objectMap.set(`${typeName}:${id}`, { type: typeName, value: obj });
            }
        }
    }
    for (const rel of data.relationships || []) {
        let fromObj;
        let toObj;
        if (rel.fromType) {
            const fromRef = objectMap.get(`${rel.fromType}:${rel.from}`);
            if (fromRef)
                fromObj = fromRef.value;
        }
        else {
            for (const [key, val] of objectMap.entries()) {
                if (key.endsWith(`:${rel.from}`)) {
                    fromObj = val.value;
                    break;
                }
            }
        }
        if (rel.toType) {
            const toRef = objectMap.get(`${rel.toType}:${rel.to}`);
            if (toRef)
                toObj = toRef.value;
        }
        else {
            for (const [key, val] of objectMap.entries()) {
                if (key.endsWith(`:${rel.to}`)) {
                    toObj = val.value;
                    break;
                }
            }
        }
        if (fromObj && toObj) {
            context.addRelationship(rel.type, fromObj, toObj);
        }
    }
}
/**
 * Serialize context objects to output format
 */
function serializeObjects(context) {
    const result = {};
    const knownTypes = new Set();
    if (context.domainModel?.objectTypes) {
        for (const objType of context.domainModel.objectTypes) {
            knownTypes.add(objType.name);
        }
    }
    for (const typeName of knownTypes) {
        const objects = context.getObjectsByType(typeName);
        if (objects.length === 0)
            continue;
        if (!result[typeName]) {
            result[typeName] = {};
        }
        for (const obj of objects) {
            const objId = obj.objectId;
            const attrs = obj.value || {};
            const kenmerken = obj.kenmerken || {};
            const serialized = {};
            for (const [key, val] of Object.entries(attrs)) {
                if (val && typeof val === 'object' && 'value' in val) {
                    const v = val;
                    if (v.unit) {
                        serialized[key] = { value: v.value, unit: v.unit.name };
                    }
                    else if (v.type === 'date' && v.value instanceof Date) {
                        serialized[key] = v.value.toISOString().split('T')[0];
                    }
                    else {
                        serialized[key] = v.value;
                    }
                }
                else {
                    serialized[key] = val;
                }
            }
            for (const [key, val] of Object.entries(kenmerken)) {
                serialized[key] = val;
            }
            result[typeName][objId] = serialized;
        }
    }
    return result;
}
/**
 * Extract model metadata for the /api/model endpoint
 */
function extractModelMetadata(model) {
    const objectTypes = (model.objectTypes || []).map((ot) => {
        const attributes = [];
        const kenmerken = [];
        if (ot.attributen && typeof ot.attributen === 'object') {
            for (const [attrName, attrDef] of Object.entries(ot.attributen)) {
                attributes.push(attrName);
            }
        }
        if (ot.kenmerken && Array.isArray(ot.kenmerken)) {
            for (const k of ot.kenmerken) {
                kenmerken.push(typeof k === 'string' ? k : k.name || k.naam);
            }
        }
        return {
            name: ot.name,
            attributes,
            kenmerken
        };
    });
    const parameters = (model.parameters || []).map((p) => ({
        name: p.name || p.naam,
        type: p.datatype?.type || p.type || 'unknown',
        unit: p.datatype?.unit?.name || p.unit || undefined
    }));
    const relationships = (model.feitTypes || []).flatMap((ft) => {
        if (!ft.rollen || ft.rollen.length < 2)
            return [];
        return [{
                name: ft.naam,
                from: ft.rollen[0]?.objectType,
                to: ft.rollen[1]?.objectType
            }];
    });
    return {
        objectTypes,
        parameters,
        relationships
    };
}
/**
 * Validate input data against model (without execution)
 */
function validateInput(data, model) {
    const errors = [];
    const knownTypes = new Set();
    const typeAttributes = new Map();
    for (const objType of model.objectTypes || []) {
        knownTypes.add(objType.name);
        const attrs = new Set();
        if (objType.attributen && typeof objType.attributen === 'object') {
            for (const attrName of Object.keys(objType.attributen)) {
                attrs.add(attrName);
            }
        }
        typeAttributes.set(objType.name, attrs);
    }
    for (const [typeName, instances] of Object.entries(data.objects || {})) {
        if (!knownTypes.has(typeName)) {
            errors.push({
                path: `objects.${typeName}`,
                message: `Unknown object type: ${typeName}`
            });
            continue;
        }
        const validAttrs = typeAttributes.get(typeName) || new Set();
        instances.forEach((instance, idx) => {
            if (!instance.id) {
                errors.push({
                    path: `objects.${typeName}[${idx}]`,
                    message: 'Missing required field: id'
                });
            }
            for (const attrName of Object.keys(instance)) {
                if (attrName === 'id')
                    continue;
                if (!validAttrs.has(attrName)) {
                    errors.push({
                        path: `objects.${typeName}[${idx}]`,
                        message: `Unknown attribute: ${attrName}`
                    });
                }
            }
        });
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
/**
 * Create the API router with all endpoints
 */
function createRouter(options) {
    const router = (0, express_1.Router)();
    const { model, engine, files } = options;
    // GET / - Health check and server info
    router.get('/', (_req, res) => {
        res.json({
            status: 'ok',
            version: '0.2.0',
            files: files,
            endpoints: [
                'GET /api/ - Health check',
                'GET /api/model - Model metadata',
                'POST /api/validate - Validate input data',
                'POST /api/execute - Execute rules'
            ]
        });
    });
    // GET /model - Model metadata
    router.get('/model', (_req, res) => {
        res.json(extractModelMetadata(model));
    });
    // POST /validate - Validate input data without execution
    router.post('/validate', (req, res) => {
        const data = req.body;
        const result = validateInput(data, model);
        res.json(result);
    });
    // POST /execute - Execute rules with provided state
    router.post('/execute', (req, res) => {
        const data = req.body;
        try {
            const context = new context_1.Context(model);
            populateContext(context, data);
            const execResult = engine.execute(model, context);
            if (!execResult.success) {
                res.status(400).json({
                    success: false,
                    error: execResult.error?.message || 'Unknown execution error'
                });
                return;
            }
            const firedRules = (0, fired_rules_1.extractFiredRules)(context.getExecutionTrace());
            res.json({
                success: true,
                objects: serializeObjects(context),
                firedRules
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Internal server error'
            });
        }
    });
    return router;
}
//# sourceMappingURL=routes.js.map