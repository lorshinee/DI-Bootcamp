// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// Given the years two people were born
let year1 = 1990;
let year2 = 2000;

// Find the date when the younger one is exactly half the age of the older
let youngerAge = Math.min(year1, year2);
let olderAge = Math.max(year1, year2);
let date = olderAge - youngerAge;

console.log(date); // Output: 10 (if the younger person is exactly half the age of the older)




// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// Ask the client for their zip code
let zipcode = prompt("Enter your zip code:");

// Check if the zip code meets the specified conditions
if (!isNaN(zipCode) && zipCode.length === 5 && !zipCode.includes(" ")) {
  console.log("success");
} else {
  console.log("error");
}


// Ask the client for their zip code
let zipCode = prompt("Enter your zip code:");

// Check if the zip code meets the specified conditions using Regular Expressions
if (/^\d{5}$/.test(zipCode)) {
  console.log("success");
} else {
  console.log("error");
}



// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5


// Prompt the user for a word
let word = prompt("Enter a word:");

// Delete all the vowels of the word using Regular Expressions and console.log the result
let result = word.replace(/[aeiou]/gi, "");
console.log(result);

// Bonus: Replace the vowels with another character using Regular Expressions and console.log the result
result = word.replace(/a/gi, "1").replace(/e/gi, "2").replace(/i/gi, "3").replace(/o/gi, "4").replace(/u/gi, "5");
console.log(result);
