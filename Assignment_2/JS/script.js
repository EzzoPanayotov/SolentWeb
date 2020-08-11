var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9\+]+$/;
var fName = [];
var lName = [];
var email = [];
var phNumber = [];
var message = [];

function submitDetails() {
  if (
    document.getElementById("fName").value == "" ||
    !document.getElementById("fName").value.match(letters, numbers)
  ) {
    document.getElementById("fName").style.border = "1px solid red";
  }

  if (
    document.getElementById("lName").value == "" ||
    !document.getElementById("lName").value.match(letters, numbers)
  ) {
    document.getElementById("lName").style.border = "1px solid red";
  }
  if (
    document.getElementById("email").value == "" &&
    !document.getElementById("email").value.match(letters)
  ) {
    document.getElementById("email").style.border = "1px solid red";
  }
  if (
    document.getElementById("phNumber").value == "" &&
    !document.getElementById("phNumber").value.match(letters)
  ) {
    document.getElementById("phNumber").style.border = "1px solid red";
  }
  var fNameInput = document.getElementById("fName");
  var lNameInput = document.getElementById("lName");
  var emailInput = document.getElementById("email");
  var phNumberInput = document.getElementById("phNumber");
  var messageInput = document.getElementById("message");

  fName.push(fNameInput.value);
  lName.push(lNameInput.value);
  email.push(emailInput.value);
  phNumber.push(phNumberInput.value);
  message.push(messageInput.value);

  clearAndShow();
}

function inputColor() {
  if (!document.getElementById("fName").value.match(letters, numbers)) {
    document.getElementById("fName").style.border = "1px solid red";
  } else {
    document.getElementById("fName").style.border = "";
  }
}
function inputColor2() {
  if (!document.getElementById("lName").value.match(letters, numbers)) {
    document.getElementById("lName").style.border = "1px solid red";
  } else {
    document.getElementById("lName").style.border = "";
  }
}
function inputColor3() {
  if (!document.getElementById("phNumber").value.match(numbers)) {
    document.getElementById("phNumber").style.border = "1px solid red";
  } else {
    document.getElementById("phNumber").style.border = "";
  }
}

function clearAndShow() {
  var fNameInput = document.getElementById("fName");
  var lNameInput = document.getElementById("lName");
  var emailInput = document.getElementById("email");
  var phNumberInput = document.getElementById("phNumber");
  var messageBox = document.getElementById("display");
  var messageInput = document.getElementById("message");
  fNameInput.value = "";
  lNameInput.value = "";
  emailInput.value = "";
  phNumberInput.value = "";
  messageInput.value = "";

  messageBox.innerHTML = "";
  messageBox.innerHTML += "First Name: " + fName.join(",") + "<br/>";
  messageBox.innerHTML += "Last  Name: " + lName.join(",") + "<br/>";
  messageBox.innerHTML += "Email: " + email.join(",") + "<br/>";
  messageBox.innerHTML += "Phone Number: " + phNumber.join(",") + "<br/>";
  messageBox.innerHTML += "Message: " + message.join(",");
}
