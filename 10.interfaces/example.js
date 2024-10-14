function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User : ".concat(user.firstName, " ").concat(user.lastName, " ").concat(user.age));
}
var user1 = { firstName: "sakthi", lastName: "vel", age: 20 };
console.log(greetUser(user1));
logUserDetails(user1);
