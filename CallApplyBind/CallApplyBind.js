"use strict";

let firstScorecard = {
    name : "Clara",
    math : 75,
    verbal : 82
};

let secondScorecard = {
    name : "Steve",
    math : 71,
    verbal : 91
};

function printWeightedScore(mathWt, verbalWt) {

    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt + verbalWt);
    console.log(`The Weighted score for ${this.name} is ${weightedScore}`);
}

/*console.log("Linking the scorecards with call()");
printWeightedScore.call(firstScorecard, 2, 1);
printWeightedScore.call(secondScorecard, 1, 1);

console.log("Linking the scorecards with apply()");
printWeightedScore.apply(firstScorecard, [2, 1]);
printWeightedScore.apply(secondScorecard, [1, 1]);

console.log("Linking the scorecards with bind()");
let firstScore = printWeightedScore.bind(firstScorecard);
let secondScore = printWeightedScore.bind(secondScorecard);
console.log("The functions have been bound but not invoked. calling them now...");
firstScore(2, 1);
secondScore(1, 1);*/

let weightedScoreArrow = (mathWt, verbalWt) => {

    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt + verbalWt);
    console.log(`The Weighted score for ${this.name} is ${weightedScore}`);
    console.log("this is : ", this);
}

console.log("Invoking arrow function with call()");
weightedScoreArrow.call(firstScorecard, 2, 1);

console.log("Invoking arrow function with bind()");
let firstScore = weightedScoreArrow.bind(firstScorecard);
firstScore(2, 1);




