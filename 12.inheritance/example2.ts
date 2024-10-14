// // with inheritance

// class Person{
//     firstName:string;
//     lastName:string;
//     age:number;

//     constructor(firstName:string, lastName:string, age:number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     greet():string {
//         return `Hello ${this.firstName}${this.lastName}`;
//     }

//     getAge(){
//         return this.age;
//     }
// }

// class User extends Person{
    
//     constructor(firstName:string, lastName:string, age:number) {
//         super(firstName, lastName, age);
//     }
// }

// class Admin extends Person{
//     role:string;

//     constructor(firstName:string, lastName:string, age:number, role:string) {
//         super(firstName, lastName, age);
//         this.role = role;
//     }

//     getRole():string{
//         return `My Role is ${this.role}`
//     }


//     manageUsers():string {
//         return `Managing Users with Role ${this.role}`;
//     }
// }


// const user = new User("sakthi", "vel", 20);
// console.log(user.greet());

// const admin = new Admin("sakthi", "vel", 20, "manager");
// console.log(admin.getRole())