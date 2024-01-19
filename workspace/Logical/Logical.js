"use strict";

console.log("Logical operators");

let A = 13, B = 25;

console.log("A = ", A);
console.log("B = ", B);

// Logical AND operator
if(A >= 12 && B <= 25)
	console.log("A + B = ", A + B);

let X = 15, Y = 20;

console.log("X = ", X);
console.log("Y = ", Y);

// Logical OR operator
if(X > 20 || Y < 25)
	console.log("X + Y = ", X + Y);

var result = !(X == Y);
console.log("Result of !(X == Y) is : ", result);

let condition;

//Ternary Operators
console.log("Condition = ", condition = (100 > 10) ? true : false);
console.log("Condition = ", condition = (100 < 10) ? true : false);

let maxValue;
console.log("maxValue = ", maxValue = (100 > 10) ? 100 : 10);
