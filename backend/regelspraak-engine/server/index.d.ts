/**
 * Express server factory for the RegelSpraak REST API.
 */
import { Application } from 'express';
import { ServerOptions } from './routes';
export interface CreateServerOptions extends Omit<ServerOptions, 'engine'> {
    port?: number;
    cors?: boolean;
}
/**
 * Create and configure the Express application
 */
export declare function createServer(options: ServerOptions & {
    cors?: boolean;
}): Application;
/**
 * Start the server on the specified port
 */
export declare function startServer(options: ServerOptions & {
    port?: number;
    cors?: boolean;
}): Promise<void>;
//# sourceMappingURL=index.d.ts.map