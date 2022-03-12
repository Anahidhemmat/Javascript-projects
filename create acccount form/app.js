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

//check inputs => function

const checkInputs = () => {
  // get the values from inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmValue = passwordConfirm.value.trim();

  if (!usernameValue) {
    // show error & add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //   add success class
    setSuccessFor(username);
  }
  if (!emailValue) {
    // show error & add error class
    setErrorFor(email, "Email cannot be blank");
  } else {
    //   add success class
    setSuccessFor(email);
  }
  if (!passwordValue) {
    // show error & add error class
    setErrorFor(password, "Password cannot be blank");
  } else {
    //   add success class
    setSuccessFor(username);
  }
  if (!passwordConfirmValue) {
    // show error & add error class
    setErrorFor(passwordConfirm, "Password cannot be blank");
  } else {
    //   add success class
    setSuccessFor(username);
  }
};

// set error => function

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = document.querySelector("small");

  // add error text
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
};

// set success => function

const setSuccessFor = (input) => {
  // add seccess class
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
