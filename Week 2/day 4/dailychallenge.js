// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.





const input = prompt("Enter several words separated by commas:");

// Split the input string into an array of words
const words = input.split(",").map(word => word.trim());

// Find the length of the longest word
const maxLength = Math.max(...words.map(word => word.length));

// Generate the top and bottom borders of the frame
const border = "*".repeat(maxLength + 4);

// Display the frame with words
console.log(border);
words.forEach(word => {
    console.log(`* ${word.padEnd(maxLength, " ")} *`);
});
console.log(border);

