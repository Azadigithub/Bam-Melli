let loginBtn = document.getElementById("login");
let userInput = document.querySelector("#user-name");
let passInput = document.querySelector("#password");
let userLabel = document.getElementById("user-error");
let passLabel = document.getElementById("pass-error");

let EnteredUsername;
let flagUser = false;
userInput.addEventListener("keyup", function (event) {
  if (userInput.value.length != 0) {
    flagUser = true;
    // console.log(userInput.value.length);
    userLabel.style.opacity = "0";
    userLabel.style.visibility = "hidden";
    userInput.classList.remove("active");
    EnteredUsername = event.target.value;
  } else {
    flagUser = false;
    console.log("==0");
    LoginButton();
  }
});
let Enteredpass;
let flagPass;
passInput.addEventListener("keyup", function (event) {
  if (passInput.value.length != 0) {
    flagPass = true;
    // console.log(passInput.value.length);
    passLabel.style.opacity = "0";
    passLabel.style.visibility = "hidden";
    passInput.classList.remove("active");
    Enteredpass = event.target.value;
  } else {
    flagPass = false;
    console.log("==0");
  }
});

loginBtn.addEventListener("click", LoginButton);

function LoginButton(event) {
  CheckUser();
  if (flagUser && flagPass) {
    console.log("You are Loggin !");
    console.log("You User-name :" + EnteredUsername);
    console.log("You Password :" + Enteredpass);
    userInput.value = "";
    passInput.value = "";
    // Send information to server...
  }
}
function CheckUser() {
  if (!flagUser) {
    userLabel.style.opacity = "1";
    userLabel.style.visibility = "visible";
    userInput.classList.add("active");
  } else {
    userLabel.style.opacity = "0";
    userLabel.style.visibility = "hidden";
    userInput.classList.remove("active");
    CheckPass();
  }
}
function CheckPass() {
  if (!flagPass) {
    passLabel.style.opacity = "1";
    passLabel.style.visibility = "visible";
    passInput.classList.add("active");
    // console.log("passeror");
  } else {
    passLabel.style.opacity = "0";
    passLabel.style.visibility = "hidden";
    passInput.classList.remove("active");
  }
}
