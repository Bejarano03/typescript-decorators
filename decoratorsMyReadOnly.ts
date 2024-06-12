function MyReadOnly(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.set = undefined;
    return descriptor;
}

export default MyReadOnly;