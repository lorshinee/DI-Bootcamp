// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

// one
let pattern = '';
for (let i = 1; i <= 6; i++) {
  pattern += '* ';
  console.log(pattern);
}

// two
for (let i = 1; i <= 6; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
      pattern += '* ';
    }
    console.log(pattern);
  }
  
//   Instructions
//   const numbers = [5,0,9,1,7,4,2,6,3,8];
  
//   Using the .toString() method convert the array to a string.
//   Using the .join()method convert the array to a string. Try passing different values into the join.
//   Eg .join(“+”), .join(” “), .join(“”)
//   Bonus : To do this Bonus look up how to work with nested for loops
//   Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
//   The output should be: [9,8,7,6,5,4,3,2,1,0]
//   Hint: The algorithm is called “Bubble Sort”
//   Use a temporary variable to swap values in the array.
//   Use 2 “nested” for loops (Nested means one inside the other).
//   Add comments and console.log the result for each step, this will help you understand.
//   Requirement: Don’t copy paste solutions from Google
  

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Convert the array to a string using the toString() method
const toStringResult = numbers.toString();
console.log(toStringResult); // Output: "5,0,9,1,7,4,2,6,3,8"

// Convert the array to a string using the join() method with different separators
const joinPlusResult = numbers.join("+");
console.log(joinPlusResult); // Output: "5+0+9+1+7+4+2+6+3+8"

const joinSpaceResult = numbers.join(" ");
console.log(joinSpaceResult); // Output: "5 0 9 1 7 4 2 6 3 8"

const joinEmptyResult = numbers.join("");
console.log(joinEmptyResult); // Output: "5091742638"

// Sort the numbers array in descending order using Bubble Sort
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1 - i; j++) {
    // Swap adjacent elements if they are in the wrong order
    if (numbers[j] < numbers[j + 1]) {
      // Swap values using a temporary variable
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
  console.log(`After pass ${i + 1}: ${numbers}`);
}

console.log(numbers); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

