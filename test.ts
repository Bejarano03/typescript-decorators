import MyTestClass from './MyTestClass';

const myInstance = new MyTestClass("test", 42);
myInstance.method1();
myInstance.method2();

// Test the read-only property
console.log(myInstance.readonlyProperty);

// Attempt to modify the read-only property (should throw an error or be ignored)
try {
    (myInstance as any).readonlyProperty = "new value"; // TypeScript will complain, cast to any to bypass
    console.log(myInstance.readonlyProperty);
} catch (error) {
    console.log("Error modifying readonlyProperty:", error);
}