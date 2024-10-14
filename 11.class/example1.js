//without class
var user1 = {
    firstName: "Sakthi",
    lastName: "vel",
    age: 20
};
var user2 = {
    firstName: "Sakthi",
    lastName: "vel",
    age: 20
};
function greetUser(user) {
    return "Hello, ".concat(user.firstName, " ").concat(user.lastName);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(getUserAge(user1));
