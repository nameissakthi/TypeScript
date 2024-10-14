// with class modifiers
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user = new User("sakthi", 20);
console.log(user.getName() + " : " + user.getAge());
user.setName("sakthivel");
console.log(user.getName() + " : " + user.getAge());
