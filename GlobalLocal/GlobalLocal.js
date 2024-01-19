let globalLet = "This is global variable declared with let";
let globalVar = "This is global variable declared with var";

let numLet = 10;
var numVar = 20;
const NUM_CONST = 30;

function firstFunction() {

	let localLet = "This is local variable declared with let";
	var localVar = "This is local variable declared with var";
	undeclaredLocalVar = "This is an undeclared variable";

/*	console.log("globalLet from inside firstFunction : ", globalLet);
	console.log("globalVar from inside firstFunction : ", globalVar);

	console.log("numLet from inside firstFunction : ", numLet);
	console.log("numVar from inside firstFunction : ", numVar);
	console.log("NUM_CONST from inside firstFunction : ", NUM_CONST);

	console.log("localLet from inside firstFunction : ", localLet);
	console.log("localVar from inside firstFunction : ", localVar);
	console.log("undeclaredLocalVar from inside firstFunction : ", undeclaredLocalVar);*/
}

firstFunction();


/*console.log("globalLet from outside firstFunction : ", globalLet);
console.log("globalVar from outside firstFunction : ", globalVar);

console.log("numLet from outside firstFunction : ", numLet);
console.log("numVar from outside firstFunction : ", numVar);
console.log("NUM_CONST from outside firstFunction : ", NUM_CONST);

console.log("localLet from outside firstFunction : ", localLet);
console.log("localVar from outside firstFunction : ", localVar);

console.log("undeclaredLocalVar outside inside firstFunction : ", undeclaredLocalVar);*/


/*function secondFunction() {

	let numLet = 100;
	var numVar = 200;
	let NUM_CONST = 300;

	console.log("Redclared numLet from inside secondFunction : ", numLet);
	console.log("Redclared numVar from inside secondFunction : ", numVar);
}

secondFunction();

console.log("numLet from outside after invoking secondFunction : ", numLet);
console.log("numVar from outside after invoking secondFunction : ", numVar);
console.log("NUM_CONST from outside after invoking secondFunction : ", NUM_CONST);

function thirdFunction() {

	numLet = 1000;
	numVar = 2000;
	//NUM_CONST = 3000;

	console.log("Updated numLet from inside thirdFunction : ", numLet);
	console.log("Updated numVar from inside thirdFunction : ", numVar);

}

thirdFunction();

console.log("numLet from outside after invoking thirdFunction : ", numLet);
console.log("numVar from outside after invoking thirdFunction : ", numVar);*/

function fourthFuction() {

	console.log("Starting first for loop...");

	for (let i = 0; i < 10; i ++) 
	{

		console.log(i);
	}

	//console.log("Value of i from fourthFuction : ", i);

	console.log("Starting second for loop...");

	for (var j = 0; j < 10; j ++) 
	{

		console.log(j);
	}

	console.log("Value of j from fourthFuction : ", j);

}

fourthFuction();

