"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMixins = applyMixins;
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function applyMixins(derivedCtor, baseCtors) {
    for (const baseCtor of baseCtors) {
        for (const name of Object.getOwnPropertyNames(baseCtor.prototype)) {
            const baseCtorName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            if (baseCtorName) {
                Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
            }
        }
    }
}
//# sourceMappingURL=apply-mixins.js.map