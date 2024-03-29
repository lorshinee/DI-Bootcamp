// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function isBlank(str) {
    return str.trim() === '';
}

console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(name) {
    const nameArray = name.split(' ');
    return `${nameArray[0]} ${nameArray[1].charAt(0)}.`;
}

console.log(abbrevName("Robin Singh")); // "Robin S."


// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}
console.log(swapCase('The Quick Brown Fox')); // 'tHE qUICK bROWN fOX

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

function isOmnipresent(arr, val) {
    return arr.every(subarr => subarr.includes(val));
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false