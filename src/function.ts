// Function Signature:

let userInfo1: () => void;
let userInfo2: (name: string) => void;
let userInfo3: (name: string, age: number) => string;

//Normal function:

userInfo1 = () => {
  console.log("Anisul islam is 32 years old");
};
userInfo2 = (name: string) => {
  console.log(`${name} is 32 years old`);
};

userInfo3 = (name, age) => {
  console.log("object");
  return `${name} ${age}`;
};

userInfo1();
userInfo2("Anisul Islam");
console.log(userInfo3("Tamim", 27));
