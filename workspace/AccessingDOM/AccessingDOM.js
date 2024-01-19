document.getElementById("numericsection").innerHTML=30;

document.getElementById("textsection").innerHTML="Name: Kaushik";

var a;
a = 10;

var b, c;
b = c = 20;

//-------------Not using var / let keyword !
x = a + 30;

console.log("value of a : " + a);
console.log("value of b : " + b);
console.log("value of c : " + c);
console.log("value of x : " + x);

//-------------Not using var / let keyword !
y = b * c;
console.log("value of y : " + y);

//------------------------Using Variable as Upper Camel Case // Lower Camel Case // Underscore !
StudentName="Brianna";
studentName="John";
student_name="Kaushik";

console.log("The Variable (Upper Camel Case) : " + StudentName);
console.log("The Variable (Lower Camel Case) : " + studentName);
console.log("The Variable (Underscore) : " + student_name);

//-------------Declare strings in terms of Single quotes // backtick !
singleQuoteString = 'Declared within single quotes';
backTickString = `Declared within back ticks`;

//--------------------You can substitute the value of the String using %s
console.log('The singleQuoteString : %s' , singleQuoteString);
//--------------------You can evaluate the expression of string using ${}
console.log(`The backTickString : ${backTickString}`);