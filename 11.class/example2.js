var User = /** @class */ (function () {
    function User(firsName, lastName, age) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.firsName, " ").concat(this.lastName);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
//creating instances
var user1 = new User("sakthi", "vel", 20);
var user2 = new User("sakthi", "murugan", 20);
console.log(user1.greet());
console.log(user1.getAge());
console.log(user2.greet());
console.log(user2.getAge());
