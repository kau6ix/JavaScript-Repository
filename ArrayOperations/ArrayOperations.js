"use strict";

let prices = new Array(10, 20, 36, 40, 47);
let shallowCopy = prices;

console.log("Before changing shallowCopy, prices = \n", prices);

shallowCopy[0] = 70;
console.log("After changing shallowCopy, prices = \n", prices);

let deepCopy = prices.slice();
console.log("Before changing deepCopy, prices = \n", prices);

deepCopy[0] = "Eighty";
console.log("After changing deepCopy, prices = \n", prices);
console.log("The contents of deepCopy = \n", deepCopy);

prices.push(100);
console.log("Contents of prices after a push : \n", prices);

prices.unshift(0);
console.log("The contents of the prices array after an unshift : \n", prices);

prices.pop();
console.log("Contents of prices after a pop : \n", prices);

prices.shift();
console.log("The contents of the prices array after a shift : \n", prices);

delete prices[2];
console.log("The contents of the prices array after a delete at index 2 : \n", prices);

let dogBreeds = ['Labrador', 'Beagle', 'Golden Retriever', 'Doberman', 'German Shepherd', 'Boxer'];

console.log("Original contents of dogBreeds : \n", dogBreeds);

dogBreeds.splice(3, 0, 'Poodle', 'Dalmatian');
console.log("dogBreeds after splice(3, 0, 'Poodle', 'Dalmatian') : \n", dogBreeds);

dogBreeds.splice(1, 2, 'Indi');
console.log("dogBreeds after splice(1, 2, 'Indi') : \n", dogBreeds);

let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3) = \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(3, 5);
console.log("dogBreeds.slice(3, 5) = \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3, -1);
console.log("dogBreeds.slice(-3, -1) = \n", sliceOfDogBreeds);


let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nairobi'];
let ocianiaOffices = ['Christchurch', 'Sydney'];

let southernOffices = africaOffices.concat(ocianiaOffices);
console.log("southernOffices : \n", southernOffices);
console.log("africaOffices : \n", africaOffices);
console.log("ocianiaOffices : \n", ocianiaOffices);

let allOffices = africaOffices.concat(ocianiaOffices, europeOffices);
console.log("allOffices : \n", allOffices);

let sortedOffices = allOffices.sort();
console.log("sortedOffices : \n", sortedOffices);
console.log("allOffices : \n", allOffices);
console.log("Reverse sorting of allOffices : \n", allOffices.reverse());

allOffices = africaOffices.concat(ocianiaOffices, europeOffices);
console.log("Sorted copy of allOffices using spread syntax: \n", [...allOffices].sort());

console.log("Sorted copy of allOffices using slice: \n", allOffices.slice().sort());

let numArray = [20,50,3,10,35];

console.log("Original elements of numArray : \n", numArray);

console.log("Sorted copy of numArray using default sort: \n", numArray.slice().sort());

numArray.sort(function(a, b) {return a - b});
console.log("sorted numArray with compare function : \n", numArray);

numArray.sort(function(a, b) {return b - a});
console.log("Reverse sorted numArray with compare function : \n", numArray);







