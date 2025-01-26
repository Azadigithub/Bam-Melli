let loginBtn = document.getElementById("login");
let userInut = document.querySelector(".user-name");
let passInput = document.querySelector(".password");
let userLabel = document.querySelector(".user-error");
let passLabel = document.querySelector(".pass-error");

let EnteredUsename;
userInut.addEventListener("keyup", function (event) {
  EnteredUsename = event.target.value;
  console.log(EnteredUsename.length);
});
passInput.addEventListener("keydown", function () {
  console.log("pass");
});

loginBtn.addEventListener("click", function (event) {
  if (EnteredUsename.length == 0) {
    userLabel.style.opacity = 1;
  }
  console.log(EnteredUsename);
});
