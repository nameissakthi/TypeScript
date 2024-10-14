function logMethod(target:any, propertyKey:string, descriptor:PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args:any[]) {
        console.log(`Calling ${propertyKey} method with Arguments ${args.join(',')}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result : ${result}`);
        return result;
    }
}


class Calculator {

    @logMethod
    add(a:number, b:number) {
        const result = a+b;
        return result;
    }

    @logMethod
    subtract(a:number, b:number){
        const result = a-b;
        return result;
    }
}


const calculator = new Calculator();
calculator.add(5,3);
calculator.subtract(7,2);