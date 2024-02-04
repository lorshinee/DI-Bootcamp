// Exercise 1:
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]


const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// Remove "Banana" from the array
fruits.shift();

// Sort the array in alphabetical order
fruits.sort();

// Add "Kiwi" to the end of the array
fruits.push("Kiwi");

// Remove "Apples" from the array without using the same method as in part 1
let applesIndex = fruits.indexOf("Apples");
if (applesIndex !== -1) {
  fruits.splice(applesIndex, 1);
}

// Sort the array in reverse order
fruits.reverse();

console.log(fruits); // Output: ["Kiwi", "Oranges", "Blueberries"]


// Exercise 2:
// Using this array :

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.
// Bonus: If you would like more array exercises take a look at the link below.

// Array Exercises


const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access and console.log "Oranges"
console.log(moreFruits[1][1][0]); // Output: "Oranges"
