let loginBtn = document.getElementById("login");
let userInput = document.querySelector("#user-name");
let passInput = document.querySelector("#password");
let userLabel = document.getElementById("user-error");
let passLabel = document.getElementById("pass-error");

let EnteredUsername;
let flag = false;
userInput.addEventListener("keyup", function (event) {
  flag = true;
  userLabel.style.opacity = "0";
  userLabel.style.visibility = "hidden";
  userInput.classList.remove("active");
  EnteredUsername = event.target.value;
});
let Enteredpass;
passInput.addEventListener("keyup", function (event) {
  flag = true;
  passLabel.style.opacity = "0";
  passLabel.style.visibility = "hidden";
  passInput.classList.remove("active");
  Enteredpass = event.target.value;
});
passInput.addEventListener("keydown", function () {
  console.log("pass");
});

loginBtn.addEventListener("click", function (event) {
  if (!flag) {
    userLabel.style.opacity = "1";
    userLabel.style.visibility = "visible";
    userInput.classList.add("active");

    passLabel.style.opacity = "1";
    passLabel.style.visibility = "visible";
    passInput.classList.add("active");

    console.log("lll");
  } else {
    console.log(EnteredUsername.length);
    console.log(Enteredpass.length);
  }
});
