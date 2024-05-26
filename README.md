# etch_a_sketch
Etch A Sketch with Odin Project

# Csyntax Etch-a-Sketch Project

This project is a modern take on the classic Etch-a-Sketch toy, implemented using HTML, CSS, and JavaScript. Users can draw on a grid by hovering over the grid squares, which progressively darken with each interaction. Additionally, users can reset the grid size and restart the sketch with the current grid size using the provided buttons.

## How to Use

1. Open the `index.html` file in your web browser.
2. Hover over the grid squares to draw. Each interaction will darken the square progressively until it turns completely black.
3. Use the "Reset Grid" button to enter a new grid size (maximum 100).
4. Use the "Restart Sketch" button to clear the grid and restart with the current grid size.

## Technologies Used

- HTML
- CSS (Flexbox for layout)
- JavaScript (DOM manipulation)

## File Structure

- `index.html`: Main HTML file for the Etch-a-Sketch.
- `styles.css`: CSS file for styling the Etch-a-Sketch interface.
- `script.js`: JavaScript file containing the grid logic and event handling.
- `README.md`: This README file providing information about the Etch-a-Sketch project.

## Features

- Dynamic grid creation based on user input.
- Progressive darkening effect on grid squares.
- Responsive buttons to reset the grid size and restart the sketch.
- Styled footer with project information.

## Changing the Grid Size

The default grid size is 16x16. You can change the initial grid size by modifying the parameter in the `createGrid` function call in `script.js`.

For example, to set the initial grid size to 32x32, change:

```javascript
createGrid(16); // Initial 16x16 grid

createGrid(32); // Initial 32x32 grid

```

## Setting Up the Project

Clone the repository to your local machine.
Open the index.html file in your web browser to run the project.

## Author Page

- [Csyntax](https://github.com/csyntax)

## Acknowledgments

- This project is part of [The Odin Project](https://www.theodinproject.com/).
- This project is inspired by the classic Etch-a-Sketch toy. It was created as a practice project for learning HTML, CSS, and JavaScript DOM manuiplations. Feel free to fork, modify, and improve this project as you wish. Enjoy drawing with the Csyntax Etch-a-Sketch!
