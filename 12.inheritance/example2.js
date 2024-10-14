// with inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello ".concat(this.firstName).concat(this.lastName);
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, role) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.role = role;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return "My Role is ".concat(this.role);
    };
    Admin.prototype.manageUsers = function () {
        return "Managing Users with Role ".concat(this.role);
    };
    return Admin;
}(Person));
var user = new User("sakthi", "vel", 20);
console.log(user.greet());
var admin = new Admin("sakthi", "vel", 20, "manager");
console.log(admin.getRole());
