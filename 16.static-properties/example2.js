var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUsers++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.getTotalUsers = function () {
        return User.totalUsers;
    };
    User.totalUsers = 0;
    return User;
}());
var user1 = new User('sakthi');
var user2 = new User('vel');
console.log(user1.getName());
console.log(user2.getName());
console.log(User.getTotalUsers());
