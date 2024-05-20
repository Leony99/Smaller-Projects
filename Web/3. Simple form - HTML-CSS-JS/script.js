const form = document.querySelector(".form");
const inputUsername = document.querySelectorAll("input")[0];
const inputEmail = document.querySelectorAll("input")[1];
const inputPassword = document.querySelectorAll("input")[2];
const inputPasswordConfirmation = document.querySelectorAll("input")[3];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    inputReset(inputUsername);
    inputReset(inputEmail);
    inputReset(inputPassword);
    inputReset(inputPasswordConfirmation);
    
    checkInputs();
});

function checkInputs() {
    if(inputUsername.value === "") {
      inputError(inputUsername, "Username is required.");
    }
    else {
      inputSuccess(inputUsername);
    }

    if(inputEmail.value === "") {
      inputError(inputEmail, "Email is required.");
    }
    else if(!validateEmail(inputEmail.value)) {
      inputError(inputEmail, "Invalid email.");
    }
    else {
      inputSuccess(inputEmail);
    }

    if(inputPassword.value === "") {
      inputError(inputPassword, "Password is required.");
    }
    else {
      inputSuccess(inputPassword);
    }

    if(inputPasswordConfirmation.value === "") {
      inputError(inputPasswordConfirmation, "Password confirmation is required.");
    }
    else if(inputPasswordConfirmation.value !== inputPassword.value) {
      inputError(inputPasswordConfirmation, "Password doesn't match.");
    }
    else {
      inputSuccess(inputPasswordConfirmation);
    }
}

function inputReset(input) {
  const field = input.parentElement;
  const iconError = field.querySelectorAll("i")[0];
  const iconSuccess = field.querySelectorAll("i")[1];
  const messageError = field.querySelector("small");

  input.style.border = "2px solid rgba(186, 188, 190, 1)";
  iconError.style.visibility = "hidden";
  iconSuccess.style.visibility = "hidden";
  messageError.style.visibility = "hidden";
}

function inputError(input, message) {
  const field = input.parentElement;
  const iconError = field.querySelectorAll("i")[0];
  const messageError = field.querySelector("small");

  input.style.border = "2px solid rgba(231, 10, 10, 1)";
  iconError.style.color = "rgba(231, 10, 10, 1)";
  iconError.style.visibility = "visible";
  messageError.innerText = message;
  messageError.style.visibility = "visible";
}

function inputSuccess(input) {
  const field = input.parentElement;
  const iconSuccess = field.querySelectorAll("i")[1];

  input.style.border = "2px solid rgba(20, 219, 34, 1)";
  iconSuccess.style.color = "rgba(20, 219, 34, 1)";
  iconSuccess.style.visibility = "visible";
}

function validateEmail(value) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (value.match(validRegex)) {
      return true;
    }
    else {
      return false;
    }
}