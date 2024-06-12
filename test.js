"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MyTestClass_1 = __importDefault(require("./MyTestClass"));
const myInstance = new MyTestClass_1.default("test", 42);
myInstance.method1();
myInstance.method2();
// Test the read-only property
console.log(myInstance.readonlyProperty);
// Attempt to modify the read-only property (should throw an error or be ignored)
try {
    myInstance.readonlyProperty = "new value"; // TypeScript will complain, cast to any to bypass
    console.log(myInstance.readonlyProperty);
}
catch (error) {
    console.log("Error modifying readonlyProperty:", error);
}
