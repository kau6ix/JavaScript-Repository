"use strict";

console.log("The min of 1, 2, 3 : ", Math.min(1, 2, 3));

let arr1 = [1, 2, 3];

console.log("The min of arr1 (without spread) : ", Math.min(arr1));

console.log("The min of arr1 (with spread) : ", Math.min(...arr1));

let arr2 = [4, 5, 6];
let arr3 = [3, 7, 2];

console.log("The min of arr2 and arr3 (with spread) : ", Math.min(...arr2, ...arr3));

console.log("The min of arr2 and arr3 (with spread) : ", Math.min(...arr2, 0, ...arr3, 8));

// Initialize array with Spread 
let arrays = [...arr1, 10, ...arr3, 20];

console.log("Array created by combining the spread operator with Integers : \n", arrays);

let str = "Skillsoft";

console.log("str = ", str);
console.log("spreading str : ", ...str);
console.log("Array formed by spreading str : ", [...str]);


console.log("Array formed with Array.from(str) : ", Array.from(str));


