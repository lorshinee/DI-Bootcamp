// Exercise 1 : Nested Functions

let landscape = () => {
    let result = "";
  
    let flat = (x) => {
      for (let count = 0; count < x; count++) {
        result = result + "_";
      }
    };
  
    let mountain = (x) => {
      result = result + "/";
      for (let counter = 0; counter < x; counter++) {
        result = result + "'";
      }
      result = result + "\\";
    };
  
    flat(4);
    mountain(4);
    flat(4);
  
    return result;
  };
  
  console.log(landscape());
  


// Exercise 2 : Closure

const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3)); // Output: 13


// Exercise 3 : Currying

const curriedSum = (a) => (b) => a + b;
console.log(curriedSum(30)(1)); // Output: 31


// Exercise 4 : Currying

const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
const result = add5(12);
console.log(result); // Output: 17



// Exercise 5 : Composing

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;

const result = compose(add1, add5)(10);
console.log(result); // Output: 16

