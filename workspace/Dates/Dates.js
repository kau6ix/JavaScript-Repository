"use strict";

var time = new Date();
console.log("Current time : \n", time);

time = new Date(2023, 9, 10, 15, 21, 43);
console.log("Year, Month, Day, Hour, Min, Sec :\n", time);

time = new Date("November 6, 2023");
console.log("Initialized with a date string : \n", time);

time = new Date("2023-10-17");
console.log("Initialized with (yyyy-mm-dd): \n", time);

time = new Date("2023-11-6");

console.log("My timezone offset in minutes: ", time.getTimezoneOffset());

console.log("The UTC time is : ", time.toUTCString());