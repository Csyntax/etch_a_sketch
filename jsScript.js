/*
Algorithm:

1. Select the grid container and button container.
2. Define a function to remove an existing button by ID.
3. Remove existing buttons to avoid duplicates.
4. Create and style the "Reset Grid" button.
5. Create and style the "Restart Sketch" button.
6. Create and style the "Normal Color" button.
7. Create and style the "Random Color" button.
8. Create and style the "Eraser" button.
9. Define the color mode variable and set it to 'normal'.
10. Define a function to create the grid:
    - Clear the previous grid.
    - Set grid display properties.
    - Create grid items with event listeners and styling.
11. Define a function to change the color of grid items based on color mode.
12. Define a function to get a random color.
13. Define a function to reset the grid with a new size.
14. Define a function to restart the sketch with the current grid size.
15. Define functions to set normal color mode, random color mode, and eraser mode.
16. Add event listeners to the buttons to trigger the respective functions.
17. Create and style the footer and append it to the body.

Pseudocode:

1. Select gridContainer and buttonContainer elements.
2. Define removeButtonIfExists(buttonId) function:
   - Get the existing button by ID.
   - If the button exists, remove it from the button container.
3. Call removeButtonIfExists() for 'resetButton', 'restartButton', 'normalColorButton', 'randomColorButton', and 'eraserButton'.
4. Create resetButton element:
   - Set its ID and text content.
   - Append it to the button container.
5. Create restartButton element.
6. Create normalColorButton element.
7. Create randomColorButton element.
8. Create eraserButton element.
9. Set the colorMode variable to 'normal'.
10. Define createGrid(size) function:
    - Clear the grid container.
    - Set grid display properties and create grid items with event listeners and styling.
11. Define changeColor(e) function:
    - Check colorMode and change the color of grid items accordingly.
12. Define getRandomColor() function to return a random color.
13. Define resetGrid() function to reset the grid with a new size.
14. Define restartSketch() function to restart the sketch with the current grid size.
15. Define setNormalColor(), setRandomColor(), and setEraser() functions to set color modes.
16. Add event listeners to buttons for click events.
17. Create and style the footer element.
18. Append the footer to the body.
19. Initialize the grid with createGrid(16).
*/

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#gridContainer'); // Select the grid container
    const buttonContainer = document.querySelector('.button-container'); // Select the button container

    // Function to remove an existing button by ID
    function removeButtonIfExists(buttonId) {
        const existingButton = document.getElementById(buttonId);
        if (existingButton) {
            buttonContainer.removeChild(existingButton);
        }
    }

    // Remove existing buttons to avoid duplicates
    removeButtonIfExists('resetButton');
    removeButtonIfExists('restartButton');
    removeButtonIfExists('normalColorButton');
    removeButtonIfExists('randomColorButton');
    removeButtonIfExists('eraserButton');

    // Create and style the "Reset Grid" button
    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.textContent = 'Reset Grid';
    buttonContainer.appendChild(resetButton);

    // Create and style the "Restart Sketch" button
    const restartButton = document.createElement('button');
    restartButton.id = 'restartButton';
    restartButton.textContent = 'Restart Sketch';
    buttonContainer.appendChild(restartButton);

    // Create and style the "Normal Color" button
    const normalColorButton = document.createElement('button');
    normalColorButton.id = 'normalColorButton';
    normalColorButton.textContent = 'Normal Color';
    buttonContainer.appendChild(normalColorButton);

    // Create and style the "Random Color" button
    const randomColorButton = document.createElement('button');
    randomColorButton.id = 'randomColorButton';
    randomColorButton.textContent = 'Random Color';
    buttonContainer.appendChild(randomColorButton);

    // Create and style the "Eraser" button
    const eraserButton = document.createElement('button');
    eraserButton.id = 'eraserButton';
    eraserButton.textContent = 'Eraser';
    buttonContainer.appendChild(eraserButton);

    let colorMode = 'normal'; // Default color mode

    // Function to create the grid
    function createGrid(size) {
        container.textContent = ''; // Clear previous grid
        container.style.display = 'grid'; // Ensure the grid container displays as a grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Set grid columns
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Set grid rows

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div'); // Create a new div element
            gridItem.classList.add('grid-item'); // Add the 'grid-item' class
            gridItem.dataset.opacity = 0; // Initialize opacity data attribute
            gridItem.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Initial background color with 0 opacity
            gridItem.style.boxSizing = 'border-box';
            gridItem.style.border = '1px solid #dddddd'; // Light grey border
            gridItem.style.transition = 'background-color 0.3s';
            gridItem.addEventListener('mouseover', changeColor); // Add event listener for mouseover
            container.appendChild(gridItem); // Append the grid item to the container
        }
    }

    // Function to change the color of grid items
    function changeColor(e) {
        if (colorMode === 'eraser') {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Erase the color
            e.target.dataset.opacity = 0; // Reset opacity
        } else if (colorMode === 'random') {
            e.target.style.backgroundColor = getRandomColor();
        } else {
            let opacity = parseFloat(e.target.dataset.opacity); // Get current opacity
            if (opacity < 1) {
                opacity += 0.1; // Increase opacity by 0.1
                e.target.dataset.opacity = opacity; // Update opacity data attribute
                e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Set background color with new opacity
            }
        }
    }

    // Function to get a random color
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to reset the grid with a new size
    function resetGrid() {
        let newSize = parseInt(prompt("Enter new grid size (maximum 100):")); // Prompt for new grid size
        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize); // Create new grid with specified size
        } else {
            alert("Invalid size. Please enter a number between 1 and 100."); // Alert if size is invalid
        }
    }

    // Function to restart the sketch with the current grid size
    function restartSketch() {
        const currentSize = Math.sqrt(container.children.length); // Calculate current grid size
        createGrid(currentSize); // Create new grid with the current size
    }

    // Function to set normal color mode
    function setNormalColor() {
        colorMode = 'normal';
        normalColorButton.textContent = 'Normal Color (Active)';
        randomColorButton.textContent = 'Random Color';
        eraserButton.textContent = 'Eraser';
    }

    // Function to set random color mode
    function setRandomColor() {
        colorMode = 'random';
        normalColorButton.textContent = 'Normal Color';
        randomColorButton.textContent = 'Random Color (Active)';
        eraserButton.textContent = 'Eraser';
    }

    // Function to set eraser mode
    function setEraser() {
        colorMode = 'eraser';
        normalColorButton.textContent = 'Normal Color';
        randomColorButton.textContent = 'Random Color';
        eraserButton.textContent = 'Eraser (Active)';
    }

    // Add event listeners to the buttons
    resetButton.addEventListener('click', resetGrid); // Reset grid on button click
    restartButton.addEventListener('click', restartSketch); // Restart sketch on button click
    normalColorButton.addEventListener('click', setNormalColor); // Set normal color mode on button click
    randomColorButton.addEventListener('click', setRandomColor); // Set random color mode on button click
    eraserButton.addEventListener('click', setEraser); // Set eraser mode on button click

    createGrid(16); // Initial 16x16 grid

    // Create and style the footer
    const footer = document.createElement('footer');
    footer.textContent = '© Csyntax Etch-a-Sketch Project';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
    footer.style.backgroundColor = '#333333';
    footer.style.color = '#ffffff';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px 0';
    document.body.appendChild(footer); // Append the footer to the body
});