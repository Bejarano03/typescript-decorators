import SimpleLogger from "./decoratorsSimpleLogger";
import LogMethod from "./decoratorsLogMethod";
import MyReadOnly from "./decoratorsMyReadOnly";

@SimpleLogger
class MyTestClass {
    public property1: string;
    public property2: number;

    constructor(property1: string, property2: number) {
        this.property1 = property1;
        this.property2 = property2;
    }

    @LogMethod
    method1(): void {
        console.log("Method1 called");
    }

    @LogMethod
    method2(): void {
        console.log("Method2 called");
    }


    @MyReadOnly
    get readonlyProperty(): string {
        return `${this.property1} - ${this.property2}`;
    }
}

export default MyTestClass;