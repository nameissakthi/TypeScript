interface User{
    name:string;
    age:number;
}

const jsonData = `{
    "name" : "sakthi",
    "age" : 20
}`;

const user = JSON.parse(jsonData) as User;

console.log(`Name : ${user.name}, Age : ${user.age}`);