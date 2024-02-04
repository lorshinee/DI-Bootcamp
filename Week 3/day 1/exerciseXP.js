// Retrieve the div and console.log it
// Exercise 1
const containerDiv = document.getElementById('container');
console.log(containerDiv);

// Change the name “Pete” to “Richard”
const peteElement = document.querySelector('ul.list:nth-child(1) li:nth-child(2)');
peteElement.textContent = 'Richard';

// Delete the <li> that contains the text node “Sarah”
const sarahElement = document.querySelector('ul.list:nth-child(2) li:nth-child(2)');
sarahElement.remove();

// Change each first name of the two <ul>'s to your name
const ulLists = document.querySelectorAll('.list');
ulLists.forEach(list => {
    list.firstElementChild.textContent = 'Your Name';
});

// Bonus - Add a class called student_list to both of the <ul>'s
// and add classes university and attendance to the first <ul>
ulLists.forEach(list => {
    list.classList.add('student_list');
});
ulLists[0].classList.add('university', 'attendance');



// Exercise 2 
// Add a “light blue” background color and some padding to the <div>
const divElement = document.querySelector('div');
divElement.style.backgroundColor = 'lightblue';
divElement.style.padding = '10px';

// Do not display the <li> that contains the text node “John”
const johnElement = document.querySelector('ul li:nth-child(1)');
johnElement.style.display = 'none';

// Add a border to the <li> that contains the text node “Pete”
const peteElement = document.querySelector('ul li:nth-child(2)');
peteElement.style.border = '1px solid black';

// Change the font size of the whole body
document.body.style.fontSize = '20px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
if (divElement.style.backgroundColor === 'lightblue') {
    alert('Hello x and y');
}


// Exercise 3 
// Change the value of the id attribute from navBar to socialNetworkNavigation
const navBarDiv = document.getElementById('navBar');
navBarDiv.setAttribute('id', 'socialNetworkNavigation');

// Add a new <li> to the <ul>
const ulElement = navBarDiv.firstElementChild;
const newLi = document.createElement('li');
const textNode = document.createTextNode('Logout');
newLi.appendChild(textNode);
ulElement.appendChild(newLi);

// Retrieve the first and last <li> elements and display the text of each link
const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;
console.log(firstLi.textContent);
console.log(lastLi.textContent);

// Exercise 4
// Create an array called allBooks
const allBooks = [
    {
        title: 'Book 1',
        author: 'Author 1',
        image: 'https://via.placeholder.com/100',
        alreadyRead: true
    },
    {
        title: 'Book 2',
        author: 'Author 2',
        image: 'https://via.placeholder.com/100',
        alreadyRead: false
    }
];

// Render the books inside an HTML table
const listBooksDiv = document.querySelector('.listBooks');
const table = document.createElement('table');
allBooks.forEach(book => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = `${book.title} by ${book.author}`;
    cell2.innerHTML = `<img src="${book.image}" width="100px">`;
    if (book.alreadyRead) {
        row.style.color = 'red';
    }
});
listBooksDiv.appendChild(table);


