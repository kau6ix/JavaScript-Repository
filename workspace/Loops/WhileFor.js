"use strict";

console.log("While loops");

//console.log("Integers from 1 to 10 : ");

let i = 1;

/*while(i <= 10){

	console.log(i);
	i++;
}

console.log("Even Integers from 1 to 20 : ");

i = 1;

while(i <= 20){

	if (i % 2 == 0)
		console.log(i);

	i++;
}


console.log("Increasing order of series (with break) : ");

i = 1;

while(i <= 10){

	console.log(i);

	i++;

	if(i == 5){

		break;
	}
}

console.log("Decreasing order of the series (with continue) : ");

i = 11;

while(i > 1) {

	i --;

	if(i == 5){

		continue;
	}

	console.log(i);
}

console.log("do-while Loops : ");

let factorial = 1;
let n = 5;
i = 1;

do {
	factorial *= i;
	i ++;
}
while(i <= n);

console.log("Factorial of " + n + " = " + factorial);
*/

console.log("Fibonacci series using for Loops : ");

let a = 0, b = 1, c;
let count = 10;

for (let i = 3; i <= count; i ++){

	c = a + b;
	a = b;
	b = c;

	console.log(c);
}



