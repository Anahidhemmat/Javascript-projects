let input = document.querySelector("#inputField");
let addToDoButton = document.querySelector("#addToDo");
let toDoContainer = document.querySelector("#toDoContainer");

addToDoButton.addEventListener("click", () => {
  let paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  paragraph.classList.add("p-styling");
  toDoContainer.append(paragraph);
  input.value = "";
  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", () => {
    paragraph.remove();
  });
});
