"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SimpleLogger(constructor) {
    return class extends constructor {
        constructor(...args) {
            console.log(`Creating an instance of ${constructor.name} with args: ${JSON.stringify(args)}`);
            super(...args);
        }
    };
}
exports.default = SimpleLogger;
