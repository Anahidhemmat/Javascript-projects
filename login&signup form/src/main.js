const setFormMessage = (formElement, type, message) => {
  const messageElement = document.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message-error", "form-message-success");
  messageElement.classList.add(`form-message-${type}`);
};

const setInputMessage = (inputElement, message) => {
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(
    ".form-input-error-message"
  ).textContent = message;
};

const clearInputError = (inputElement) => {
  inputElement.classList.remove("form-message-error");
  inputElement.parentElement.querySelector(
    ".form-input-error-message"
  ).textContent = "";
};
//links
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form-hidden");
      createAccountForm.classList.remove("form-hidden");
    });
  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
  });
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setFormMessage(loginForm, "error", "Invalid username or password");
  });
  document.querySelectorAll(".form-input").forEach((element) => {
    element.addEventListener("blur", (e) => {
      if ((e.target.id = "username" && e.target.value.length < 8)) {
        setInputMessage(element, "Username must be at least 8 charecters");
      }
    });
    element.addEventListener("input", (e) => {
      clearInputError(element);
    });
  });
});
