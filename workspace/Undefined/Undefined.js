"use strict";

// Implicitly initialized with undefined
var uninitialized_var;
console.log("uninitialized_var = ", uninitialized_var);

let uninitialized_let;
console.log("uninitialized_let = ", uninitialized_let);

// Explicitly initialized with undefined
var undefined_var = undefined;
console.log("undefined_var = ", undefined_var);

let undefined_let = undefined;
console.log("undefined_let = ", undefined_let);

//No variable in Javascript implicitly assign value null, it has to be initialized explicitly
var x = null;
console.log("The value of x = ", x);