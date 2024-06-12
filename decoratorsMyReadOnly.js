"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function MyReadOnly(target, propertyKey, descriptor) {
    descriptor.set = undefined;
    return descriptor;
}
exports.default = MyReadOnly;
