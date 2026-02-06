"use strict";
/**
 * Express server factory for the RegelSpraak REST API.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
exports.startServer = startServer;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
/**
 * Create and configure the Express application
 */
function createServer(options) {
    const app = (0, express_1.default)();
    // Parse JSON request bodies
    app.use(express_1.default.json());
    // Enable CORS if requested
    if (options.cors) {
        app.use((_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            if (_req.method === 'OPTIONS') {
                res.sendStatus(204);
                return;
            }
            next();
        });
    }
    // Mount the API router
    app.use('/api', (0, routes_1.createRouter)(options));
    return app;
}
/**
 * Start the server on the specified port
 */
function startServer(options) {
    const port = options.port || 3000;
    const app = createServer(options);
    return new Promise((resolve) => {
        app.listen(port, () => {
            console.log(`RegelSpraak server running at http://localhost:${port}`);
            console.log(`\nLoaded files: ${options.files.join(', ')}`);
            console.log(`\nAvailable endpoints:`);
            console.log(`  GET  /api/         Health check`);
            console.log(`  GET  /api/model    Model metadata`);
            console.log(`  POST /api/validate Validate input data`);
            console.log(`  POST /api/execute  Execute rules`);
            resolve();
        });
    });
}
//# sourceMappingURL=index.js.map