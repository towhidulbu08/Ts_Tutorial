"use strict";
let firstName;
let lastName;
function printTodos(todos) {
    if (todos) {
        todos.map((todo) => console.log(todo));
    }
    else {
        console.log("No Todos");
    }
}
const todos = ["todo1", "todo2"];
printTodos(null);
