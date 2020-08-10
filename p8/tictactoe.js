var lastclicked = "O";

function showLetter(i) {
  var check = document.getElementById(i).innerHTML;

  if (check != "X" && check != "O") {
    if (lastclicked == "O") {
      document.getElementById(i).innerHTML = "X";
      lastclicked = "X";
    } else {
      document.getElementById(i).innerHTML = "O";
      lastclicked = "O";
    }
    if (
      document.getElementById("c1").innerHTML &&
      document.getElementById("c2").innerHTML &&
      document.getElementById("c3").innerHTML == "X"
    ) {
      alert("Player X Wins ");
    } else if (
      document.getElementById("c4").innerHTML &&
      document.getElementById("c5").innerHTML &&
      document.getElementById("c6").innerHTML == "X"
    ) {
      alert("Player X Wins ");
    } else if (
      document.getElementById("c7").innerHTML &&
      document.getElementById("c8").innerHTML &&
      document.getElementById("c9").innerHTML == "X"
    ) {
      alert("Player X Wins ");
    } else if (
      document.getElementById("c1").innerHTML &&
      document.getElementById("c5").innerHTML &&
      document.getElementById("c9").innerHTML == "X"
    ) {
      alert("Player X Wins ");
    } else if (
      document.getElementById("c3").innerHTML &&
      document.getElementById("c5").innerHTML &&
      document.getElementById("c7").innerHTML == "X"
    ) {
      alert("Player X Wins ");
    }
    if (
      document.getElementById("c1").innerHTML &&
      document.getElementById("c2").innerHTML &&
      document.getElementById("c3").innerHTML == "O"
    ) {
      alert("Player O Wins ");
    } else if (
      document.getElementById("c4").innerHTML &&
      document.getElementById("c5").innerHTML &&
      document.getElementById("c6").innerHTML == "O"
    ) {
      alert("Player O Wins ");
    } else if (
      document.getElementById("c7").innerHTML &&
      document.getElementById("c8").innerHTML &&
      document.getElementById("c9").innerHTML == "O"
    ) {
      alert("Player O Wins ");
    } else if (
      document.getElementById("c1").innerHTML &&
      document.getElementById("c5").innerHTML &&
      document.getElementById("c9").innerHTML == "O"
    ) {
      alert("Player O Wins ");
    } else if (
      document.getElementById("c3").innerHTML &&
      document.getElementById("c5").innerHTML &&
      document.getElementById("c7").innerHTML == "O"
    ) {
      alert("Player O Wins ");
    }
  }
}

//  document.getElementById("c5").innerHTML = "";
//The command on top makes the middle square not usable
