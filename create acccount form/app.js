//selectors

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

//submition
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

//check inputs function

const checkInputs = () => {
  // get the values from inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();
};
