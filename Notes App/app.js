//Selectors
const notesEl = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const mainEl = document.querySelector(".main");
const textArea = document.querySelector("textarea");

//edit button

editBtn.addEventListener("click", () => {
  mainEl.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
});

// textArea.addEventListener("input", (e) => {
//   const { value } = e.target;
//   mainEl.innerHTML = marked(value);
// });
