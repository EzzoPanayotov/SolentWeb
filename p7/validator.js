function submitDetails(){
    var letters = /^[A-Za-z]+$/;
    if((document.getElementById("t1").value== "") && (!document.getElementById("t1").value.match(letters))){
       document.getElementById("e1").innerHTML="First Name cannot be blank and should not contain numbers";
       document.getElementById("t1").style.border= "1px solid red"; 
       
    }
    else if(document.getElementById("t2").value=="") {
        document.getElementById("t2").style.border= "1px solid red";
    }
    else if(document.getElementById("t3").value=="") {
        document.getElementById("t3").style.border= "1px solid red";
    }
    else if(document.getElementById("t4").value=="") {
        document.getElementById("t4").style.border= "1px solid red";
    }
    else{
    alert("Details saved successfuly");
    }

}