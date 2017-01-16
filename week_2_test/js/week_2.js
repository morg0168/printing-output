/* global confirm, console, prompt*/

/*
// prompt() popup box and always returns a string
var name = prompt("Please enter your name");
console.log("Hello " + name); 

//confirm().. always returns true or false
var deleted = confirm("Do you want to delete this file");
console.log("deleted = " + deleted);

if (condition) {
   action
}*/


/*

//CONDITIONALS

var today = prompt("Enter a day");
var temperature = -20;

if (today === "Saturday" && temperature > -15) {
    console.log("I will go skiing!");
}

else if (today === "Saturday" && temperature < -15) {
    console.log("I will go hiking!");
}

else {
    console.log("I will watch a movie!");
}

*/

/*
//typical example
var a;
console.log("!a = " + !a); //true

//asign variable with value
if (!a) {
    a = prompt("Assign value to variable a");
}

console.log("!a = " + !a); //false

*/

/*
// example:
var product = prompt("Please Enter a fruit");

switch (true) {
  case "Oranges" == product:
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples" == product:
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas" == product:
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries" == product:
    console.log("Cherries are $3.00 a pound.");
    break;
  case ("Mangoes" == product) || ("Papayas" == product) :
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + product + ".");
}

*/

//TASK 1

var a = 3;
var b = 5;
var c;

alert("var a = 3;\nvar b = 5;\nvar c;\n----------\n" + 
      "a + b = " + (a + b) + "\n" + 
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "(a += b): " + (a += b) + "\n" +
      "(a -= b): " + (a -= b) + "\n" +
      "(a *= b): " + (a *= b) + "\n" +
      "(a /= b): " + (a /= b) + "\n" +
      "(a %= b): " + (a %= b) + "\n" +
      "(a == b): " + (a == b) + "\n" +
      "(a != b): " + (a != b) + "\n" +
      "(a > b): " + (a > b) + "\n" +
      "(a < b): " + (a < b) + "\n" +
      "(!a && !c): " + (!a && !c) + "\n" +
      "(!a || !c): " + (!a || !c) + "\n" 
     );
    
//TASK 2

var first_name = "Emily";
var last_name = "Morgan";
var email = "morg0168@algonquinlive.com";
var output = ("My name is " + first_name + " " + last_name + ". You can contact me at " +  email + ".");
alert(output);

      
//TASK 3
      
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

console.log(numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4]));

/*
//check if even or odd
5 % 2 = 1 //means number is odd
6 % 2 = 0 //means number is even*/

var arraySum = ((numbers[0] + numbers[4]) % 2);
if (arraySum == 1) {
    console.log("This is an odd number.");
}

else if (arraySum == 0) {
    console.log("This is an even number.");
}




      



