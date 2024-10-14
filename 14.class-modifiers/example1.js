// without class modifiers
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User("sakthivel", 20);
user.name = "sakthi";
console.log(user.name + " : " + user.age);
