"use strict";
/**
 * AST nodes for expressions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantifierType = void 0;
// Compound condition types
var QuantifierType;
(function (QuantifierType) {
    QuantifierType["DE"] = "de";
    QuantifierType["ALLE"] = "alle";
    QuantifierType["GEEN"] = "geen";
    QuantifierType["TEN_MINSTE"] = "ten_minste";
    QuantifierType["TEN_HOOGSTE"] = "ten_hoogste";
    QuantifierType["PRECIES"] = "precies";
})(QuantifierType || (exports.QuantifierType = QuantifierType = {}));
//# sourceMappingURL=expressions.js.map