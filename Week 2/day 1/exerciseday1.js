// Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate", 
// and your favorite meal of the day is "dinner", 
// you will console.log 
// I eat chocolate at every dinner


const favoriteFood = "pizza";

const favoriteMeal = "dinner";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);


// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

// Part I
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeriesLength = myWatchedSeries.length;

const myWatchedSeriesSentence = myWatchedSeries.join(", ");

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

// Part II
myWatchedSeries[2] = "friends"; 

myWatchedSeries.push("breaking bad"); 

myWatchedSeries.unshift("game of thrones"); 

myWatchedSeries.shift(); 

console.log(myWatchedSeries[1][2]);


console.log(myWatchedSeries);




// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsiusTemperature = 25;
const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);


// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5


// Using the code below:

    // let c;
    // let a = 34;
    // let b = 21;

    console.log(a+b) //first expression
    // Prediction:
    // Actual:

    a = 2;

    console.log(a+b) //second expression
    // Prediction:
    // Actual:
    let c;
    let a = 34;
    let b = 21;
    
    console.log(a + b); //first expression
    // Prediction: 55
    // Actual: 55
    
    a = 2;
    
    console.log(a + b); //second expression
    // Prediction: 23
    // Actual: 23
    
    // The value of c is undefined.
    
    console.log(3 + 4 + '5');
    // Prediction: "75" because addition is done before concatenation.
    // Actual: "75"
    


// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');


// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// For example

// typeof("potato")
// // Prediction: Vegetable
// // Actual: String


// What is the output of each of the expressions below?


// typeof(15)
// // Prediction:
// // Actual:

// typeof(5.5)
// // Prediction:
// // Actual:

// typeof(NaN)
// // Prediction:
// // Actual:

// typeof("hello")
// // Prediction:
// // Actual:

// typeof(true)
// // Prediction:
// // Actual:

// typeof(1 != 2)
// // Prediction:
// // Actual:

// "hamburger" + "s"
// // Prediction:
// // Actual:

// "hamburgers" - "s"
// // Prediction:
// // Actual:

// "1" + "3"
// // Prediction:
// // Actual:

// "1" - "3"
// // Prediction:
// // Actual:

// "johnny" + 5
// // Prediction:
// // Actual:

// "johnny" - 5
// // Prediction:
// // Actual:

// 99 * "hello"
// // Prediction:
// // Actual:

// 1 != 1
// // Prediction:
// // Actual:

// 1 == "1"
// // Prediction:
// // Actual:

// 1 === "1"
// // Prediction:
// // Actual:


// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.



// What is the output of each of the expressions below?


// 5 + "34"
// // Prediction:
// // Actual:

// 5 - "4"
// // Prediction:
// // Actual:

// 10 % 5
// // Prediction:
// // Actual:

// 5 % 10
// // Prediction:
// // Actual:

// "Java" + "Script"
// // Prediction:
// // Actual:

// " " + " "
// // Prediction:
// // Actual:

// " " + 0
// // Prediction:
// // Actual:

// true + true
// // Prediction:
// // Actual:

// true + false
// // Prediction:
// // Actual:

// false + true
// // Prediction:
// // Actual:

// false - true
// // Prediction:
// // Actual:

// !true
// // Prediction:
// // Actual:

// 3 - 4
// // Prediction:
// // Actual:

// "Bob" - "bill"
// // Prediction:
// // Actual: