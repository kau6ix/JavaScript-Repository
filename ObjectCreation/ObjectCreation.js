"use strict";

/*let firstItem = { id : 1, name : "laptop", price : 500};
let secondItem = { id : 2, name : "watch", price : 240, brand : "Sonical"};

console.log(`First item has a name of ${firstItem.name} and a price of ${firstItem.price}.`);

console.log(`Second item has a name of ${secondItem["name"]} and a price of ${secondItem["price"]}.`);

console.log(`The brand of first item is ${firstItem.brand} and while that of second item is ${secondItem.brand}.`);*/

/*const USD_EUR = 0.9;

let thirdItem = {
    id : 3,
    name : "headphones",
    brand : "Sonical",
    price : 84,
    priceEUR : this.price * USD_EUR
}

console.log("The price of third item in Euros : ", thirdItem.priceEUR);

thirdItem = {
    id : 3,
    name : "headphones",
    brand : "Sonical",
    price : 84,
    priceEUR : function() {return this.price * USD_EUR;}
}

console.log("The price of updated thirdItem in Euros : ", thirdItem.priceEUR());

thirdItem = {
    id : 3,
    name : "headphones",
    brand : "Sonical",
    price : 84,
    priceEUR() {return this.price * USD_EUR;}
};

console.log("The price of ES6 thirdItem in Euros : ", thirdItem.priceEUR());

thirdItem.mfgCountry = "Canada";

console.log("The Third item is : ", thirdItem);*/

let fourthItem = new Object();

fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;

console.log("The fourthItem is : ", fourthItem);

// Remove a property from existing object 

delete fourthItem.price;

console.log("The fourthItem is : ", fourthItem);




