var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9\+]+$/;
var fName = [];
var lName = [];
var email = [];
var phNumber = [];
var message = [];

// The function below acts as a validatior in a way
// In the else statement I used the push command to take the user input and save it in an array
function submitDetails() {
  if (
    document.getElementById("fName").value == "" ||
    !document.getElementById("fName").value.match(letters, numbers)
  ) {
    document.getElementById("fName").style.border = "1px solid red";
  } else if (
    document.getElementById("lName").value == "" ||
    !document.getElementById("lName").value.match(letters, numbers)
  ) {
    document.getElementById("lName").style.border = "1px solid red";
  } else if (
    document.getElementById("email").value == "" &&
    !document.getElementById("email").value.match(letters)
  ) {
    document.getElementById("email").style.border = "1px solid red";
  } else if (
    document.getElementById("phNumber").value == "" &&
    !document.getElementById("phNumber").value.match(letters)
  ) {
    document.getElementById("phNumber").style.border = "1px solid red";
  } else {
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
}
// These functions check if the user input is correct in the certain field and if its blank or wrong it changes the border color to red
// Also I couldn't find a way to make everything in one function
// I tried to put everything in a single function but if the input in one filed was wrong all of the others changed color
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

// This function clears the input and displays it after the submit button is clicked
function clearAndShow() {
  var fNameInput = document.getElementById("fName");
  var lNameInput = document.getElementById("lName");
  var emailInput = document.getElementById("email");
  var phNumberInput = document.getElementById("phNumber");
  var messageBox = document.getElementById("displayDetails");
  var messageInput = document.getElementById("message");
  fNameInput.value = "";
  lNameInput.value = "";
  emailInput.value = "";
  phNumberInput.value = "";
  messageInput.value = "";

  messageBox.innerHTML = "";
  messageBox.innerHTML += "First Name: " + fName.join(", ") + "<br/>";
  messageBox.innerHTML += "Last  Name: " + lName.join(", ") + "<br/>";
  messageBox.innerHTML += "Email: " + email.join(", ") + "<br/>";
  messageBox.innerHTML += "Phone Number: " + phNumber.join(", ") + "<br/>";
  messageBox.innerHTML += "Message: " + message.join(", ");
}
// This is my best try to make the search bar work, I tried to put certain values in an array
// My thinking was: if the input value is equal to a certain value in the array.... redirect to the certain page
// But I couldn't make the input value interact with the array... I was thinking of using a for loop
function submitSearch() {
  var search = document.getElementById("searchInput");
  var forests = ["Forests", "Trees", "Plants"];
  if ((search.value = "")) {
    alert("No result found");
  }
  if (search.value == forests) {
    location.href = "Forests.html";
  }
}
