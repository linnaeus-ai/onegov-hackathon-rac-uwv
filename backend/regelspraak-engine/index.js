"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredicateEvaluator = exports.SemanticAnalyzer = exports.AntlrParser = exports.Context = exports.Engine = void 0;
// Main entry point
__exportStar(require("./interfaces"), exports);
var engine_1 = require("./engine");
Object.defineProperty(exports, "Engine", { enumerable: true, get: function () { return engine_1.Engine; } });
var context_1 = require("./context");
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return context_1.Context; } });
var parser_1 = require("./parser");
Object.defineProperty(exports, "AntlrParser", { enumerable: true, get: function () { return parser_1.AntlrParser; } });
var semantic_analyzer_1 = require("./semantic-analyzer");
Object.defineProperty(exports, "SemanticAnalyzer", { enumerable: true, get: function () { return semantic_analyzer_1.SemanticAnalyzer; } });
__exportStar(require("./ast"), exports);
// Unified predicate system
__exportStar(require("./predicates/predicate-types"), exports);
var predicate_evaluator_1 = require("./predicates/predicate-evaluator");
Object.defineProperty(exports, "PredicateEvaluator", { enumerable: true, get: function () { return predicate_evaluator_1.PredicateEvaluator; } });
//# sourceMappingURL=index.js.map