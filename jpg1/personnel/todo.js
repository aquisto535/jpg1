const ToDoForm = document.getElementById("todo-form");
const ToDoInput = document.querySelector("#todo-form input")
const ToDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";

let toDos = [];

ToDoForm.addEventListener("submit", handleToDoSubmit);

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    
  }