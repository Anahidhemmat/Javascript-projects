const setFormMessage = (formElement, type, message) => {
  const messageElement = document.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message-error", "form-message-success");
  messageElement.classList.add(`form-message-${type}`);
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
});
