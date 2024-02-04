// 🌟 Exercise 1: Find The Sum

const sum = (a, b) => a + b;

// 🌟 Exercise 2: Kg And Grams

// Function declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(kgToGramsDeclaration(2)); // Output: 2000

// Function expression
const kgToGramsExpression = function(kg) {
    return kg * 1000;
};
console.log(kgToGramsExpression(2)); // Output: 2000

// Difference between function declaration and function expression:
// Function declarations are hoisted, meaning they can be called before they're declared in the code,
// while function expressions are not hoisted.

// Arrow function
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(2)); // Output: 2000

// 🌟 Exercise 3: Fortune Teller


(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    document.getElementById('fortune').innerText = fortune;
})(2, 'Emily', 'New York', 'Software Engineer');

// 🌟 Exercise 4: Welcome

(function(userName) {
    const navbar = document.querySelector('.navbar');
    const welcomeDiv = document.createElement('div');
    welcomeDiv.innerText = `Welcome, ${userName}!`;
    navbar.appendChild(welcomeDiv);
})('John');


// 🌟 Exercise 5: Juice Bar - Part I

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`);
    }
    addIngredients('apple', 'banana', 'orange');
}
makeJuice('large');

// 🌟 Exercise 5: Juice Bar - Part II

function makeJuice(size) {
    const ingredients = [];
    
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }
    
    function displayJuice() {
        console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}.`);
    }
    
    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'kiwi', 'pineapple');
    displayJuice();
}

makeJuice('large');