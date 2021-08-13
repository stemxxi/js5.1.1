




// var person = prompt("Please enter your name");

function myFunction() {
    var person = prompt("Please enter your name",);
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
    var age = prompt("Please enter your age");
    if (age != null) {
        document.getElementById("age").innerHTML = 
        "Hello " + person + " your age is " + age ;
    }
    var addition = prompt("6 + 3 = ");
    if (addition == 9) {
        document.getElementById("addition").innerHTML = 
        "6 + 3 = 9 " + "Your answer is correct" ;
    } 
    else{
        document.getElementById("addition").innerHTML =
        person + " Unfortunately, your answer is incorrect" ;
    }
    var subtraction = prompt("6 - 3 = ");
    if (subtraction == 3) {
        document.getElementById("subtraction").innerHTML = 
        "6 - 3 = 3 " + "Your answer is correct" ;
    } 
    else{
        document.getElementById("subtraction").innerHTML =
        person + " Unfortunately, your answer is incorrect" ;
    }
    var multiplication = prompt("6 * 3 = ");
    if (multiplication == 18) {
        document.getElementById("multiplication").innerHTML = 
        "6 * 3 = 18 " + "Your answer is correct" ;
    } 
    else{
        document.getElementById("multiplication").innerHTML =
        person + " Unfortunately, your answer is incorrect" ;
    }
    var divisionWithRemainder = prompt("10 % 4 = ");
    if (divisionWithRemainder == 2.5 , 2,5) {
        document.getElementById("division__with-remainder").innerHTML = 
        "10 % 4 = 2.5 " + "Your answer is correct" ;
    } 
    else{
        document.getElementById("division__with-remainder").innerHTML =
        person + " Unfortunately, your answer is incorrect" ;
    }
    var devision = prompt("10 / 2 = ");
    if (devision == 5) {
        document.getElementById("division").innerHTML = 
        "10 / 5 = 2 " + "Your answer is correct" ;
    } 
    else{
        document.getElementById("devision").innerHTML =
        person + " Unfortunately, your answer is incorrect" ;
    }
}


    


