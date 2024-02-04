// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random number between 1 and 100: ${randomNumber}`);
console.log("Even numbers from 0 to the random number:");
for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function capitalize(str) {
    const evenIndexes = str.split('').map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char;
    }).join('');
    const oddIndexes = str.split('').map((char, index) => {
        return index % 2 !== 0 ? char.toUpperCase() : char;
    }).join('');
    return [evenIndexes, oddIndexes];
}
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
// palindrome

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0


function biggestNumberInArray(arrayNumber) {
    return arrayNumber.length > 0 ? Math.max(...arrayNumber) : 0;
}

const array = [-1, 0, 3, 100, 99, 2, 99];
console.log(biggestNumberInArray(array)); // 100

const array2 = ['a', 3, 4, 2];
console.log(biggestNumberInArray(array2)); // 4

const array3 = [];
console.log(biggestNumberInArray(array3)); // 0


// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]


function uniqueElements(arr) {
    return [...new Set(arr)];
}

const list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(uniqueElements(list)); // [1, 2, 3, 4, 5]
