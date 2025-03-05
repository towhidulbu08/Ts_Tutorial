"use strict";
class User {
    constructor(fullName, age) {
        this.fullName = fullName;
        this.age = age;
        this.formatUser = () => {
            return `name: ${this.fullName}, age: ${this.age}`;
        };
    }
}
let user = new User("Tamim", 27);
console.log(user.formatUser());
