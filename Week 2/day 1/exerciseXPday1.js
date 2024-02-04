// Exercise 1 : Favorite Color
// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my", "favorite", "color", "is", "blue"];
let joinedSentence = sentence.join(" ");
console.log(joinedSentence);
// Output: my favorite color is blue

// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).


// 4. Finally console.log the new concatenated string.
let str1 = "mix";
let str2 = "pod";

// Swap the first 2 characters of the two strings
let newStr1 = str2.slice(0, 2) + str1.slice(2);
let newStr2 = str1.slice(0, 2) + str2.slice(2);

// Concatenate the two strings with a space in between
let newWord = newStr1 + " " + newStr2;
console.log(newWord);
// Output: pox mid



// Some Examples

// let str1 = "mix";
// let str2 = "pod";
// let newWord should be equal to 'pox mid'

// let firstWord = "Hello";
// let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'

let firstWord = "Hello";
let secondWord = "World";

// Swap the first 2 characters of the two strings
let newFirstWord = secondWord.slice(0, 2) + firstWord.slice(2);
let newSecondWord = firstWord.slice(0, 2) + secondWord.slice(2);

// Concatenate the two strings with a space in between
let thirdWord = newFirstWord + " " + newSecondWord;
console.log(thirdWord);
// Output: Wollo Herld



// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

// Prompt the user for the first number and store it in num1
let num1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number and store it in num2
let num2 = parseFloat(prompt("Enter the second number:"));

// Check if both inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  // Calculate the sum of num1 and num2
  let sum = num1 + num2;

  // Display the sum using an alert
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);

  // BONUS: Calculate and display subtraction, multiplication, and division
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;

  console.log(`Subtraction: ${subtraction}`);
  console.log(`Multiplication: ${multiplication}`);
  console.log(`Division: ${division}`);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

