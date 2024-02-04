// Exercise 1: Sum Elements

// Array of numbers
const numbers = [10, 20, 30, 40, 50];

// Function to find the sum of elements in an array
const sumArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// Calculate the sum of elements in the numbers array
const totalSum = sumArray(numbers);

// Display the result
console.log("Sum of all elements in the array:", totalSum);


// Exercise 2 : Remove Duplicates

function removeDuplicates(array) {
    return Array.from(new Set(array));
}

// Example usage:
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


// Exercise 3 : Remove Certain Values

function removeFalsyValues(arr) {
    // Define an array of falsy values to be removed
    const falsyValues = [null, 0, "", false, undefined, NaN];

    // Use the filter() method to remove falsy values from the array
    const filteredArray = arr.filter(item => !falsyValues.includes(item));

    return filteredArray;
}

// Sample array
const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

// Call the removeFalsyValues function and store the result
const resultArray = removeFalsyValues(sampleArray);

// Display the result
console.log("Array with falsy values removed:", resultArray);


// Exercise 4 : Repeat Please !

function repeat(str, n = 1) {
    // Check if n is a positive integer
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "Invalid input for repetition count. Please provide a positive integer.";
    }

    // Initialize an empty string to store the repeated string
    let result = '';

    // Repeat the input string 'n' times
    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

// Test the repeat function
console.log(repeat('Ha!', 3)); // Output: "Ha!Ha!Ha!"
console.log(repeat('Hello', 5)); // Output: "HelloHelloHelloHelloHello"
console.log(repeat('ABC')); // Output: "ABC" (Default repetition is 1)
console.log(repeat('Hi!', -2)); // Output: "Invalid input for repetition count. Please provide a positive integer."



