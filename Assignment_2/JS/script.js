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
function submitSearch() {
  var search = document.getElementById("searchInput").value;
  var forests = ["Forests", "Trees", "Plants"];
  var oceans = ["Oceans", "Water", "Ocean Pollution"];
  var privacy = ["Privacy", "Policy", "Data Usage"];
  var contact = ["Contact", "Form", "Message"];
  var home = ["Home", "Video", "Title"];
  if (search == "") {
    alert("No result found");
  } else if (
    search == forests[0] ||
    search == forests[1] ||
    search == forests[2]
  ) {
    location.href = "Forests.html";
  } else if (
    search == oceans[0] ||
    search == oceans[1] ||
    search == oceans[2]
  ) {
    location.href = "Oceans.html";
  } else if (
    search == privacy[0] ||
    search == privacy[1] ||
    search == privacy[2]
  ) {
    location.href = "Privacy.html";
  } else if (
    search == contact[0] ||
    search == contact[1] ||
    search == contact[2]
  ) {
    location.href = "Contact.html";
  } else if (search == home[0] || search == home[1] || search == home[2]) {
    location.href = "index.html";
  }
}

function submitSearch2() {
  var search = document.getElementById("searchInput2").value;
  var forests = ["Forests", "Trees", "Plants"];
  var oceans = ["Oceans", "Water", "Ocean Pollution"];
  var privacy = ["Privacy", "Policy", "Data Usage"];
  var contact = ["Contact", "Form", "Message"];
  var home = ["Home", "Video", "Title"];
  if (search == "") {
    alert("No result found");
  } else if (
    search == forests[0] ||
    search == forests[1] ||
    search == forests[2]
  ) {
    location.href = "Forests.html";
  } else if (
    search == oceans[0] ||
    search == oceans[1] ||
    search == oceans[2]
  ) {
    location.href = "Oceans.html";
  } else if (
    search == privacy[0] ||
    search == privacy[1] ||
    search == privacy[2]
  ) {
    location.href = "Privacy.html";
  } else if (
    search == contact[0] ||
    search == contact[1] ||
    search == contact[2]
  ) {
    location.href = "Contact.html";
  } else if (search == home[0] || search == home[1] || search == home[2]) {
    location.href = "index.html";
  }
}

function submitSearch3() {
  var search = document.getElementById("searchInput3").value;
  var forests = ["Forests", "Trees", "Plants"];
  var oceans = ["Oceans", "Water", "Ocean Pollution"];
  var privacy = ["Privacy", "Policy", "Data Usage"];
  var contact = ["Contact", "Form", "Message"];
  var home = ["Home", "Video", "Title"];
  if (search == "") {
    alert("No result found");
  } else if (
    search == forests[0] ||
    search == forests[1] ||
    search == forests[2]
  ) {
    location.href = "Forests.html";
  } else if (
    search == oceans[0] ||
    search == oceans[1] ||
    search == oceans[2]
  ) {
    location.href = "Oceans.html";
  } else if (
    search == privacy[0] ||
    search == privacy[1] ||
    search == privacy[2]
  ) {
    location.href = "Privacy.html";
  } else if (
    search == contact[0] ||
    search == contact[1] ||
    search == contact[2]
  ) {
    location.href = "Contact.html";
  } else if (search == home[0] || search == home[1] || search == home[2]) {
    location.href = "index.html";
  }
}

function submitSearch4() {
  var search = document.getElementById("searchInput4").value;
  var forests = ["Forests", "Trees", "Plants"];
  var oceans = ["Oceans", "Water", "Ocean Pollution"];
  var privacy = ["Privacy", "Policy", "Data Usage"];
  var contact = ["Contact", "Form", "Message"];
  var home = ["Home", "Video", "Title"];
  if (search == "") {
    alert("No result found");
  } else if (
    search == forests[0] ||
    search == forests[1] ||
    search == forests[2]
  ) {
    location.href = "Forests.html";
  } else if (
    search == oceans[0] ||
    search == oceans[1] ||
    search == oceans[2]
  ) {
    location.href = "Oceans.html";
  } else if (
    search == privacy[0] ||
    search == privacy[1] ||
    search == privacy[2]
  ) {
    location.href = "Privacy.html";
  } else if (
    search == contact[0] ||
    search == contact[1] ||
    search == contact[2]
  ) {
    location.href = "Contact.html";
  } else if (search == home[0] || search == home[1] || search == home[2]) {
    location.href = "index.html";
  }
}

function submitSearch5() {
  var search = document.getElementById("searchInput5").value;
  var forests = ["Forests", "Trees", "Plants"];
  var oceans = ["Oceans", "Water", "Ocean Pollution"];
  var privacy = ["Privacy", "Policy", "Data Usage"];
  var contact = ["Contact", "Form", "Message"];
  var home = ["Home", "Video", "Title"];
  if (search == "") {
    alert("No result found");
  } else if (
    search == forests[0] ||
    search == forests[1] ||
    search == forests[2]
  ) {
    location.href = "Forests.html";
  } else if (
    search == oceans[0] ||
    search == oceans[1] ||
    search == oceans[2]
  ) {
    location.href = "Oceans.html";
  } else if (
    search == privacy[0] ||
    search == privacy[1] ||
    search == privacy[2]
  ) {
    location.href = "Privacy.html";
  } else if (
    search == contact[0] ||
    search == contact[1] ||
    search == contact[2]
  ) {
    location.href = "Contact.html";
  } else if (search == home[0] || search == home[1] || search == home[2]) {
    location.href = "index.html";
  }
}
