"use strict";

//Assign value using var keyword
var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum of price1 and price2 is = ", total);

//Updating variables declared with var without using var keyword
price1 = 30;
price2 = 30;
total = price1 + price2;

console.log("Updated Sum of price1 and price2 is = ", total);

//Updating variables declared with var
var price1 = 50;
var price2 = 40;
var total = price1 + price2;

console.log("Sum of the re-declared price1 and price2 is = ", total);

//Assign value using let keyword
let divident = 420;
let divisor = 20;

console.log("The Division result is = ", divident/divisor);

//Update value using let keyword
divident = 720;
divisor = 30;

console.log("The Updated Division result is = ", divident/divisor);

/*Let does not permit re-dclaration. Once variable has been declared with let,
it can be updated but nor re-declared*/
/*let divident = 800;
let divisor = 40;

console.log("The Division result after redclaration is = ", divident/divisor);*/

/* The Const Keyword represents constants. Constants can only be defined once.
Updates and re-clarations are not permitted*/
const My_Birthday ='16.01.1996';
console.log("My birthday is on : ",My_Birthday);

// const My_Birthday='16.01.1999';

/////////////////////////////////////////////////////////////////////////////

//When using var , a variable can be used before initialization, this is known as variable hoisting.
a = 25;
console.log("The value of a = ", a);
var a;

//Using let and const , variable hoisting is not possible.
/*b = 50;
console.log("The value of b = ", b);
let b;*/

c = 50;
console.log("The value of c = ", c);
const c;























