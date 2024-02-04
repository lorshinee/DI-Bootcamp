// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`

// Define the printFullName function with object destructuring
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
  }
  
  // Test the function with an example object
  console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));
  // Output: Your full name is Elie Schoppik
  


//   Exercise 2 : Keys And Values
//   Instructions
//   Create a function that takes an object and returns the keys and values as separate arrays.
//   Return the keys sorted alphabetically, and their corresponding values in the same order.
//   Examples
//   keysAndValues({ a: 1, b: 2, c: 3 })
//   ➞ [["a", "b", "c"], [1, 2, 3]]
  
//   keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
//   ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
  
//   keysAndValues({ key1: true, key2: false, key3: undefined })
//   ➞ [["key1", "key2", "key3"], [true, false, undefined]]



function keysAndValues(obj) {
    // Get the keys and sort them alphabetically
    const keys = Object.keys(obj).sort();
    
    // Get the corresponding values
    const values = keys.map(key => obj[key]);
    
    // Return keys and values as separate arrays
    return [keys, values];
  }
  
  // Test cases
  console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
  // Output: [["a", "b", "c"], [1, 2, 3]]
  
  console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
  // Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
  
  console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
  // Output: [["key1", "key2", "key3"], [true, false, undefined]]
  


//   Exercise 3 : Counter Class
//   Instructions
//   Analyze the code below, what will be the output?
//   class Counter {
//     constructor() {
//       this.count = 0;
//     }
  
//     increment() {
//       this.count++;
//     }
//   }
  
//   const counterOne = new Counter();
//   counterOne.increment();
//   counterOne.increment();
  
//   const counterTwo = counterOne;
//   counterTwo.increment();
  
//   console.log(counterOne.count);




// ANSWER : The output will be 3.