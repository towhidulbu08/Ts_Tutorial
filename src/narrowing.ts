let firstName: string;
let lastName: typeof firstName;

function printTodos(todos: string[] | null) {
  if (todos) {
    todos.map((todo) => console.log(todo));
  } else {
    console.log("No Todos");
  }
}

const todos = ["todo1", "todo2"];

printTodos(null);
