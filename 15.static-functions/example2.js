var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.isAdult = function (age) {
        return age >= 18 ? "Is Adult" : "Not an Adult";
    };
    return User;
}());
var user1 = new User('sakthi', 20);
var user2 = new User('sakthivel', 10);
console.log(User.isAdult(user1.age));
console.log(User.isAdult(user2.age));
