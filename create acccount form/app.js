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
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    //   add success class
    setSuccessFor(email);
  }

  if (!passwordValue) {
    // show error & add error class
    setErrorFor(password, "Password cannot be blank");
  } else {
    //   add success class
    setSuccessFor(password);
  }

  if (!passwordConfirmValue) {
    // show error & add error class
    setErrorFor(passwordConfirm, "Password cannot be blank");
  } else {
    //   add success class
    setSuccessFor(passwordConfirm);
  }
};

// set error => function

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  let small;
  if (input.id === "username") {
    small = input.nextElementSibling;
    small.innerText = message;
  } else if (input.id === "email") {
    small = input.nextElementSibling;
    small.innerText = message;
  } else if (input.id === "password") {
    small = input.nextElementSibling;
    small.innerText = message;
  } else if ((input.id = "passwordConfirm")) {
    small = input.nextElementSibling;
    small.innerText = message;
  }
  // add error text

  // add error class
  formControl.className = "form-control error";
};

// set success => function

const setSuccessFor = (input) => {
  // add seccess class
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// is email valid => function
const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
