"use strict";

let str_double_quotes = "Javascript";
let str_single_quotes = 'Programming language';
let str_back_ticks = `Is ${str_double_quotes} a ${str_single_quotes} ?`
console.log("String with back ticks : ", str_back_ticks);

let sum = `${1 + 2 + 3}`;
console.log(`The expression evaluated to a value of ${sum}`);

let str = 'I "love" spinach';
console.log("String defined without escape characters : ", str);

let sentence = "I \"love\" spinach";
console.log("String defined with escape characters : ", sentence);

let multiline_str =
`			This is a
			String which
			spans multiple lines`;
console.log("A multi-line string: \n", multiline_str);

var name_str1 = "David";
var name_str2 = "David";

var name_obj1 = new String("David");
var name_obj2 = new String("David");

console.log("Type of name_str1: ", typeof name_str1);
console.log("Type of name_obj1: ", typeof name_obj1);

console.log("Is name_str1 == name_str2 ?", name_str1 == name_str2);
console.log("Is name_str1 == name_obj1 ?", name_str1 == name_obj1);
console.log("Is name_obj1 == name_obj2 ?", name_obj1 == name_obj2);
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2", name_str1.valueOf() == name_str2.valueOf());

console.log("Is name_str1 === name_str2 ?", name_str1 === name_str2);
console.log("Is name_str1 === name_obj1 ?", name_str1 === name_obj1);
console.log("Is name_obj1 === name_obj2 ?", name_obj1 === name_obj2);
console.log("Is the valueOf name_obj1 triple equal to valueOf name_obj2", name_str1.valueOf() === name_str2.valueOf());

let empName = "Jane Chang";

console.log("Number of characters in empName is : " + empName.length);
console.log("Index of h is : " + empName.indexOf("h"));
console.log("'ch' occurs at position : " + empName.search("Ch"));

var line = "Fundamentals of Javascript";

console.log("Original line: ", line);
console.log("Slice (1, 12): ", line.slice(1, 12)); // index 1 to index 11
console.log("Slice (-23, -15): ", line.slice(-23, -15)); // index -23 to index -14
console.log("Slice (13): ", line.slice(13)); // starting index 13

var line = "Fundamentals of Javascript";

console.log("Original line: ", line);

//Replace function works on copy of the string, not the actual String
console.log("Replacing 'Javascript' with 'Web Programming'",
			line.replace("Javascript","Web Programming"));

// Javascript is case sensitive, as in below we have used "javascript" instead of "Javascript"
console.log("Replacing 'javascript' with 'Python'",
			line.replace("javascript","Python"));

//To make substitution to be case insensitive, we need to use specific syntax => /javascript/i
console.log("Replacing 'Javascript/i' with 'Python'",
			line.replace(/Javascript/i,"Python"));

//It will replace the first occurence of "a" with "A"
console.log("Default replace of 'a' with 'A': ",
			line.replace("a","A"));

//It will replace all occurences of "a" with "A"
console.log("Global replace of 'a' with 'A': ",
			line.replace(/a/g, "A"));

console.log("Splitting the line on space: ", line.split(" "));

var myString = "      Hey, this is JS      ";

console.log("Before the trim operation : " + myString);
console.log("After the trim operation : " + myString.trim());

























