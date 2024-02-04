// script.js

const colors = ['red', 'blue', 'green', 'yellow']; // Add more colors as needed

function createPalette() {
    const palette = document.getElementById('color-palette');
    colors.forEach(color => {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.addEventListener('click', () => setCurrentColor(color));
        palette.appendChild(button);
    });
}

function createGrid(rows, cols) {
    const gridContainer = document.getElementById('grid-container');
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mousedown', startDrawing);
        square.addEventListener('mouseup', stopDrawing);
        square.addEventListener('mouseover', draw);
        gridContainer.appendChild(square);
    }
}

function setCurrentColor(color) {
    // Set the current drawing color
}

function startDrawing(event) {
    // Start drawing on mouse down
}

function stopDrawing() {
    // Stop drawing on mouse up
}

function draw(event) {
    // Draw on mouse over
}

// Initialize the game
createPalette();
createGrid(10, 10);
