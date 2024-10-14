// without class modifiers

class User {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const user = new User("sakthivel", 20);
user.name = "sakthi";
console.log(user.name + " : "+user.age);