"use strict";

var myCar = {
    make : "Volvo",
    model : "S60",
    price : 42000,
    color : "Grey",
    seats : {
        material : "Leather",
        color : "Brown"
    }
};

var samsCar = Object.create(myCar);
samsCar.seats.color = "White";

/*console.log("The effect of Object.create(): ");
console.log("sam's Car : ", samsCar);
console.log("My Car : ", myCar);*/

/*console.log("What are the Object's keys? ");
console.log(Object.keys(myCar));

console.log("What are the Object's values? ");
console.log(Object.values(myCar));

console.log("The Object's entries: ");
console.log(Object.entries(myCar));*/
let s60Engine = {
    cylinders : 4,
    displacement : 2000,
    horsepower : 250
};

let yourCar = Object.assign(myCar, {engine: s60Engine});

/*console.log("The Effect of Object.assign() :");
console.log("Your Car : ", yourCar);
console.log("My Car : ", myCar);*/

let herCar = Object.freeze(myCar);

//herCar ="Yellow";
herCar.seats.color ="Red"; // nested object property allowed to change

//herCar.tyres = "Pirelli"; // adding new top level property
herCar.seats.bucket = true; // adding new nested object property

/*console.log("The effect of Object.freeze() :");
console.log("Her Car : ", herCar);
console.log("My Car : ", myCar);*/

let hisCar = Object.seal(myCar);

//hisCar.color = "White";
hisCar.seats.color = "White";

//hisCar.weight = 1632; // new attribute to the top level is not allowed in Strict mode seal function
hisCar.engine.torque = 350; // but new properties can be added to the nested object.

console.log("The effect of Object.seal(): ");
console.log("His Car : ", hisCar);
console.log("My Car : ", myCar);








