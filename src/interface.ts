interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 1,
  name: "Anisul Islam",
  age: 32,
};
let user2: IUser = {
  id: 2,
  name: "Mr Tamim",
  age: 30,
};

users.push(user1, user2);

const printUserInfo = (user: IUser) => {
  console.log(`userid=${user.id}, name=${user.id}, age=${user.id}`);
};

users.forEach((user) => printUserInfo(user));
