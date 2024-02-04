// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// Look at this link for help

//     5 >= 1
//     0 === 1
//     4 <= 1
//     1 != 1
//     "A" > "B"
//     "B" < "C"
//     "a" > "A"
//     "b" < "A"
//     true === false
//     true != true

// Predictions:
5 >= 1 // true because 5 is greater than or equal to 1
0 === 1 // false because 0 is not equal to 1 and the strict equality operator is used
4 <= 1 // false because 4 is not less than or equal to 1
1 != 1 // false because 1 is equal to 1 and the inequality operator checks if values are not equal
"A" > "B" // false because "A" comes before "B" in alphabetical order
"B" < "C" // true because "B" comes before "C" in alphabetical order
"a" > "A" // true because lowercase letters come after uppercase letters in Unicode order
"b" < "A" // false because "b" comes after "A" in alphabetical order
true === false // false because true is not equal to false and the strict equality operator is used
true != true // false because true is equal to true and the inequality operator checks if values are not equal

// Actual outputs:
console.log(5 >= 1); // true
console.log(0 === 1); // false
console.log(4 <= 1); // false
console.log(1 != 1); // false
console.log("A" > "B"); // false
console.log("B" < "C"); // true
console.log("a" > "A"); // true
console.log("b" < "A"); // false
console.log(true === false); // false
console.log(true != true); // false


// Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Console.log the sum of the numbers.
// Hint: use some string methods
// Examples
// "2,3"➞ 5

let numbersString = prompt("Enter numbers separated by commas:");
let numbersArray = numbersString.split(",").map(Number);
let sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
// Some examples:

//     "I love the movie named Nemo" ➞ "I found Nemo at 5"
//     "Nemo is a cute fish" ➞ "I found Nemo at 0"
//     "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"

let sentence = prompt("Enter a sentence containing the word 'Nemo':");
let index = sentence.indexOf("Nemo");
if (index !== -1) {
  console.log(`I found Nemo at ${index}`);
} else {
  console.log("I can't find Nemo");
}

// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
// Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"



let number = parseInt(prompt("Enter a number:"));
let output = "";

if (number < 2) {
  output = "boom";
} else {
  output = "B" + "o".repeat(number);

  if (number % 2 === 0) {
    output += "!";
  }
  if (number % 5 === 0) {
    output = output.toUpperCase();
  }
  if (number % 2 === 0 && number % 5 === 0) {
    output += "!";
  }
}

console.log(output);
