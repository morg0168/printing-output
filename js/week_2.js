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
