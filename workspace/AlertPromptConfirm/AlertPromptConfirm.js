"use strict";

alert("This is alert message");

let name = prompt("The prompt message is: \nPlease enter your name:");
console.log("You have entered " + name);

let subject = prompt("Please enter your selected subject name", "Javascript");
console.log("Your selected subject is " + subject);

let a = prompt("Enter a number to get its square value");
let b = a * a;
alert("Square value of " + a + " is : " + b);
console.log("Square value of " + a + " is : " + b);

let output = confirm("Confirmation Message: \nReady to move to the next demo ?");

if(output){
	console.log("you pressed ok...");
}
else{
	console.log("You pressed Cancel!");
}