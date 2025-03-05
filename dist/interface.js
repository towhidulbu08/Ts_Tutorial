"use strict";
let users = [];
let user1 = {
    id: 1,
    name: "Anisul Islam",
    age: 32,
};
let user2 = {
    id: 2,
    name: "Mr Tamim",
    age: 30,
};
users.push(user1, user2);
const printUserInfo = (user) => {
    console.log(`userid=${user.id}, name=${user.id}, age=${user.id}`);
};
users.forEach((user) => printUserInfo(user));
