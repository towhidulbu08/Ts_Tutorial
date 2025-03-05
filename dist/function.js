"use strict";
// Function Signature:
let userInfo1;
let userInfo2;
let userInfo3;
//Normal function:
userInfo1 = () => {
    console.log("Anisul islam is 32 years old");
};
userInfo2 = (name) => {
    console.log(`${name} is 32 years old`);
};
userInfo3 = (name, age) => {
    console.log("object");
    return `${name} ${age}`;
};
userInfo1();
userInfo2("Anisul Islam");
console.log(userInfo3("Tamim", 27));
