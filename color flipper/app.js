const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//selectors

const button = document.querySelector("#btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  //get random number
  let randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

//get random number

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
