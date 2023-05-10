# sensory-minds
<<<<<<< HEAD
# sensory-minds
=======
>>>>>>> aeb3810bf58a17417f15715318ba8cc37cb029d9

# Bingo Board

This is a React application that simulates a Bingo Board. Users can click on cells to mark them, and the app will calculate if there's a winning pattern on the board.

## Getting started

To run the application, you need to have Node.js and npm installed on your computer. Clone this repository and run the following commands in your terminal:

`npm install`

`npm run dev` 

Then, open your browser and go to `http://localhost:3000` to see the app running.

## How to use

The application displays a 5x5 grid of cells, each containing a cheeky frontend development reference. 
To mark a cell, simply click on it. The cell will turn blue to indicate that it has been marked. You can unmark a cell by clicking on it again.

The application keeps track of how many winning patterns you have achieved. A winning pattern can be a horizontal, vertical, or diagonal line of marked cells. Once you achieve a winning pattern, the app will display a celebration animation.

## About the code

The main component of the application is `Board`, which is responsible for rendering the cells and handling user clicks. The component uses the `Cell` component to render each individual cell, and the `Celebration` component to render the celebration animation.

The app also includes a `winningCalculator` function that checks if a set of marked cells contains a winning pattern.
