"use strict";

console.log("Is this === window ?", this === window);
console.log("What is this ?", this);

var age = 35;
console.log("window.age: ", window.age);
console.log("this.age: ", this.age);

this.age = 55;
console.log("window.age : ", window.age);
console.log("age: ", age);

let someFunction = () => this;
console.log("This returned from a function : ", someFunction());

let myCar = {
    make : "Volvo",
    model : "S60",
    price : 42000,
    printDetails() {
        console.log(`
            Make : ${this.make}
            Model : ${this.model}
            Price : ${this.price} `);
    },
    engine : {
        cylinders : 4,
        displacement : 2000,
        horsepower : 250,
        printDetails() {
            console.log(`
                Displacement : ${this.displacement} cc
                Horsepower : ${this.horsepower} bhp`);
        }
    }
};

console.log("The fields of myCar :");
myCar.printDetails();

console.log("Engine Details : \n");
myCar.engine.printDetails();

let myCar = {
    make : "Volvo",
    model : "S60",
    price : 42000,
    engine : {
        cylinders : 4,
        displacement : 2000,
        horsepower : 250
    }
};

function printCarDetails() {
    console.log(`
            Make : ${this.make}
            Model : ${this.model}
            Price : $${this.price} `);
};

function printEngineDetails() {
    console.log(`
            Displacement : ${this.displacement}cc
            Horsepower : ${this.horsepower}bhp`);
};

// Linking function to object

console.log("Car Details: \n");
printCarDetails.call(myCar);

console.log("Engine Details : \n");
printEngineDetails.call(myCar.engine);

// Say we have similar type of different object

let yourCar = {
    make : "Porsche",
    model : "718 Cayman",
    price : 61000,
    engine : {
        cylinders : 4,
        displacement : 2500,
        horsepower : 350
    }
};

console.log("your Car Details: \n");
printCarDetails.call(yourCar);

console.log("Your Engine Details : \n");
printEngineDetails.call(yourCar.engine);











