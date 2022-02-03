//Selectors
let todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todolist = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);

//Functions

//addTodo function

function addTodo(e) {
  //prevent form from submmiting
  e.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.append(newTodo);

  //check mark button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.append(completedButton);

  //Trash button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.append(trashButton);

  //append to list
  todolist.append(todoDiv);
  //clear todoInput value
  todoInput.value = "";
}

//delectCheck function

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add("fall");
    //remove
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //complete mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
