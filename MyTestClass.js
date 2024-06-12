"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorsSimpleLogger_1 = __importDefault(require("./decoratorsSimpleLogger"));
const decoratorsLogMethod_1 = __importDefault(require("./decoratorsLogMethod"));
const decoratorsMyReadOnly_1 = __importDefault(require("./decoratorsMyReadOnly"));
let MyTestClass = class MyTestClass {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }
    method1() {
        console.log("Method1 called");
    }
    method2() {
        console.log("Method2 called");
    }
    get readonlyProperty() {
        return `${this.property1} - ${this.property2}`;
    }
};
__decorate([
    decoratorsLogMethod_1.default
], MyTestClass.prototype, "method1", null);
__decorate([
    decoratorsLogMethod_1.default
], MyTestClass.prototype, "method2", null);
__decorate([
    decoratorsMyReadOnly_1.default
], MyTestClass.prototype, "readonlyProperty", null);
MyTestClass = __decorate([
    decoratorsSimpleLogger_1.default
], MyTestClass);
exports.default = MyTestClass;
