class User {
    name:string;
    static totalUsers = 0;

    constructor(name:string) {
        this.name = name;
        User.totalUsers++;
    }

    getName(){
        return this.name;
    }

    static getTotalUsers(){
        return User.totalUsers;
    }
}

const user1 = new User('sakthi');
const user2 = new User('vel');

console.log(user1.getName());
console.log(user2.getName());
console.log(User.getTotalUsers());