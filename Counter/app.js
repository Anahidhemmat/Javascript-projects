//set initial count

let count = 0;

const buttons = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    //first way
    // const styles = e.currentTarget.classList;
    // if (styles.contains("decrease")) {
    //   count--;
    // } else if (styles.contains("increase")) {
    //   count++;
    // } else {
    //   count = 0;
    // }
    // value.textContent = count;

    //second way
    if (button.classList.contains("decrease")) {
      count--;
    } else if (button.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
