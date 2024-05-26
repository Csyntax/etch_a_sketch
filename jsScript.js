/** 
Algorithm of the code:
1. Listen for the DOMContentLoaded event.
2. Select #gridContainer and #resetButton elements.
3. Create a restart button and append it to .button-container.
4. Implement createGrid(size):
    a. Clear container content.
    b. Calculate gridItemSize as container width divided by size.
    c. Loop from 0 to size*size:
        i. Create a grid item.
        ii. Set width and height of the grid item.
        iii. Add mouseover event to change the color.
        iv. Append the grid item to the container.
5. Implement changeColor(event):
    a. Get current opacity from the grid item.
    b. If opacity < 1:
        i. Increase opacity by 0.1.
        ii. Update grid item opacity.
        iii. Change background color based on new opacity.
6. Implement resetGrid():
    a. Prompt user for new grid size.
    b. If size is valid, call createGrid(newSize).
7. Implement restartSketch():
    a. Calculate current grid size.
    b. Call createGrid(currentSize).
8. Add click event listeners to resetButton and restartButton.
9. Call createGrid(16) for initial grid setup.
10. Create a footer element with text and style, then append to body.

Pseudocode:
1. Wait for the DOM to fully load.
2. Select the grid container and reset button elements.
3. Create and style a "Restart Sketch" button and append it to the button container.
4. Define a function to create a grid of a given size:
    a. Clear the current grid.
    b. Calculate the size of each grid item.
    c. Create grid items and set their size, style, and event listeners.
5. Define a function to change the color of a grid item on mouseover:
    a. Increase the opacity of the grid item progressively.
    b. Update the background color of the grid item based on the new opacity.
6. Define a function to reset the grid with a new size:
    a. Prompt the user for a new grid size.
    b. If the size is valid, create a new grid with the specified size.
7. Define a function to restart the sketch with the current grid size:
    a. Get the current grid size.
    b. Create a new grid with the current size.
8. Add event listeners to the reset and restart buttons.
9. Create an initial 16x16 grid.
10. Create and style a footer element and append it to the body.
**/

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#gridContainer'); // Select the grid container
    const resetButton = document.querySelector('#resetButton'); // Select the reset button

    // Create and style the "Restart Sketch" button
    const restartButton = document.createElement('button');
    restartButton.id = 'restartButton';
    restartButton.textContent = 'Restart Sketch';
    document.querySelector('.button-container').appendChild(restartButton);

    // Function to create the grid
    function createGrid(size) {
        container.textContent = ''; // Clear previous grid
        const gridItemSize = container.clientWidth / size; // Calculate the size of each grid item

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div'); // Create a new div element
            gridItem.classList.add('grid-item'); // Add the 'grid-item' class
            gridItem.dataset.opacity = 0; // Initialize opacity data attribute
            gridItem.style.width = `${gridItemSize}px`; // Set the width of the grid item
            gridItem.style.height = `${gridItemSize}px`; // Set the height of the grid item
            gridItem.style.boxSizing = 'border-box';
            gridItem.style.border = '1px solid #dddddd'; // Light grey border
            gridItem.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Initial background color with 0 opacity
            gridItem.style.transition = 'background-color 0.3s';
            gridItem.addEventListener('mouseover', changeColor); // Add event listener for mouseover
            container.appendChild(gridItem); // Append the grid item to the container
        }
    }

    // Function to change the color of grid items
    function changeColor(e) {
        let opacity = parseFloat(e.target.dataset.opacity); // Get current opacity
        if (opacity < 1) {
            opacity += 0.1; // Increase opacity by 0.1
            e.target.dataset.opacity = opacity; // Update opacity data attribute
            e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Set background color with new opacity
        }
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

    // Add event listeners to the buttons
    resetButton.addEventListener('click', resetGrid); // Reset grid on button click
    restartButton.addEventListener('click', restartSketch); // Restart sketch on button click

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
