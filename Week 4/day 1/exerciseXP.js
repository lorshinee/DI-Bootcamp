// 🌟 Exercise 1 : Scope

//#1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // Output: inside the funcOne function 3
}

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// The code will throw an error because const variables cannot be reassigned.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); // Output: inside the funcThree function 0 (initial value of a)
}

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// The code will throw an error because const variables cannot be reassigned.

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); // Output: inside the funcFive function hello (window-scoped a)
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let (a) = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`); // Output: inside the funcSix function test (local a)
}

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// The code will work the same way since a new variable a is created inside funcSix.

//#5
let (a) = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // Output: in the if block 5 (block-scoped a)
}
alert(`outside of the if block ${a}`); // Output: outside of the if block 2 (global a)

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// The code will work the same way since a new variable a is created inside the if block.


// 🌟 Exercise 2 : Ternary Operator


const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints); // Output: 10


// 🌟 Exercise 3 : Is It A String ?

const isString = value => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// 🌟 Exercise 4 : Colors

const colosrs = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display the colors in the specified order
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if at least one element of the array is equal to "Violet"
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}


// 🌟 Exercise 5 : Colors #2

const [colours] = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Display the colors in the specified order with ordinal suffixes
colors.forEach((color, index) => {
    const suffix = (index + 1 <= 3) ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

// Exercise 6 : Bank Details

// Global variable for bank amount
let bankAmount = 5000;

// VAT percentage
const vatPercentage = 17;

// Monthly expenses array
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

// Function to calculate VAT for an expense
const calculateVat = expense => {
    const amount = parseFloat(expense.slice(1)); // Remove the '+' or '-' sign and convert to number
    const vatAmount = amount * (vatPercentage / 100);
    return expense[0] === "+" ? `+${amount + vatAmount}` : `-${amount - vatAmount}`;
};

// Modify expenses to include taxes (VAT)
const modifiedExpenses = expenses.map(expense => calculateVat(expense));

// Update bank amount after expense
modifiedExpenses.forEach(expense => {
    bankAmount += parseFloat(expense);
});

// Display bank account standing at the end of the month
console.log(`Bank account standing at the end of the month: $${bankAmount}`);
