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

//console.log("My Car : ", myCar);

var yourCar = myCar;
//console.log("Your Car : ", yourCar);

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Grey";

//console.log("Your Car : ", yourCar);
//console.log("My Car : ", myCar);

var hisCar = Object.assign({}, myCar);
hisCar.color = "Red";
hisCar.seats.color = "Neon Green";

/*console.log("The Effect of Object.assign() : ");
console.log("his Car : ", hisCar);
console.log("My Car : ", myCar);*/

var herCar = {...myCar};
herCar.seats.color = "Black";

/*console.log("The Effect of the spread Syntax");
console.log("her Car : ", herCar);
console.log("My Car : ", myCar);*/

myCar = {
    make : "Volvo",
    model : "S60",
    price : 42000,
    color : "Grey",
    seats : {
        material : "Leather",
        color : "Brown"
    }
};

yourCar = JSON.parse(JSON.stringify(myCar));
yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple";

console.log("The Effect of JSON.parse() and JSON.stringify() :");
console.log("Your Car : ", yourCar);
console.log("My Car : ", myCar);




