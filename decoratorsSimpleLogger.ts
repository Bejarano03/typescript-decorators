function SimpleLogger<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            console.log(`Creating an instance of ${constructor.name} with args: ${JSON.stringify(args)}`);
            super(...args);
        }
    };
}

export default SimpleLogger;