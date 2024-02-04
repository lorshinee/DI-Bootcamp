// Exercise 1 : Select A Kind Of Music
// Instructions
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>


// Display the value of the selected option.

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

// The newly added option should be selected by default.

let genresSelect = document.getElementById('genres');

genresSelect.addEventListener('change', function() {
    let selectedGenre = genresSelect.value;
    console.log(selectedGenre);
});


// Exercise 2: Delete Colors
// Instructions
// <form>
//     <select id="colorSelect">
//         <option>Red</option>
//         <option>Green</option>
//         <option>White</option>
//         <option>Black</option>
//     </select>
//     <input type="button" value="Select and Remove">
// </form>


// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

function removeColor() {
    let colorSelect = document.getElementById('colorSelect');
    let selectedIndex = colorSelect.selectedIndex;
    colorSelect.remove(selectedIndex);
}

let removeButton = document.querySelector('input[type="button"]');
removeButton.addEventListener('click', removeColor);

// Exercise 3 : Create A Shopping List
// Instructions
// For this exercise, you need to work on your js file.
// The one and only element on your HTML file should be:

// <div id="root"></div>
// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];

function addItem() {
    let inputField = document.getElementById('itemInput');
    let newItem = inputField.value.trim();
    
    if (newItem !== '') {
        shoppingList.push(newItem);
        inputField.value = '';
        displayShoppingList();
    }
}

function clearAll() {
    shoppingList = [];
    displayShoppingList();
}

function displayShoppingList() {
    let rootDiv = document.getElementById('root');
    rootDiv.innerHTML = '';
    
    let ul = document.createElement('ul');
    shoppingList.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    
    rootDiv.appendChild(ul);
}

let form = document.createElement('form');
let inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.setAttribute('id', 'itemInput');
let addButton = document.createElement('button');
addButton.textContent = 'Add Item';
addButton.addEventListener('click', addItem);
let clearButton = document.createElement('button');
clearButton.textContent = 'Clear All';
clearButton.addEventListener('click', clearAll);

form.appendChild(inputField);
form.appendChild(addButton);
form.appendChild(clearButton);

document.getElementById('root').appendChild(form);
