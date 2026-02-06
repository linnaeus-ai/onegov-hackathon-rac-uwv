/**
 * REST API route handlers for the RegelSpraak server.
 */
import { Router } from 'express';
import { Engine } from '../engine';
import { DomainModel } from '../ast/domain-model';
export interface ServerOptions {
    model: DomainModel;
    engine: Engine;
    files: string[];
}
/**
 * Input data schema for execution
 */
export interface ExecuteRequest {
    rekendatum?: string;
    parameters?: Record<string, any>;
    objects?: Record<string, Array<Record<string, any>>>;
    relationships?: Array<{
        type: string;
        from: string;
        to: string;
        fromType?: string;
        toType?: string;
    }>;
}
/**
 * Create the API router with all endpoints
 */
export declare function createRouter(options: ServerOptions): Router;
//# sourceMappingURL=routes.d.ts.map