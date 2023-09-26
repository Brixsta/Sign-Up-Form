const signUpButton = document.querySelector(".sign-up-button");
const formContainer = document.querySelector(".form-container");
const bg = document.querySelector(".bg");
signUpButton.addEventListener("click", () => {
  bg.classList.toggle("change");
  formContainer.classList.toggle("change");
});
