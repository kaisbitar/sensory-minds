# Sensory Minds

# Bingo Board

This is a React application that simulates a Bingo Board. Users can click on cells to mark them, and the app will calculate if there's a winning pattern on the board.

## Getting started

To run the application, you need to have Node.js and npm installed on your computer. Clone this repository and run the following commands in your terminal:

`npm install`

`npm run dev` 

Then, open your browser and go to `http://localhost:3000` to see the app running.

## Vite

Vite was used as the bundler for this project due to its fast build times and hot module replacement feature, which enhances the development experience by providing a smooth, instant feedback loop.

## TailwindCSS

TailwindCSS was chosen for this project because it's light weight and it provides a fast and efficient way to style components without having to write custom CSS from scratch. It also offers a wide range of pre-built styles that make it easy to create a consistent and visually appealing design.

## Framer Motion

Framer Motion is a powerful library for adding animation and gesture support to React applications. It allows developers to easily create high-quality animations with minimal code, and provides a wide range of tools for customizing and fine-tuning animations.

In this project, Framer Motion was used to add intialization animations and celebration animations when the user achieves a winning pattern on the bingo board. The library's ease of use and flexibility made it the perfect choice for implementing these animations.

## Topic

The choice of a cheeky frontend development topic for the cells in the Bingo game was intentional to add an element of fun and humor to the application. It not only adds a playful tone to the game but also engages frontend developers who may recognize some of the popular frontend development references used in the cells.

## Randomized Winning Chances

To ensure that multiple players have an equal chance of winning, the application shuffles the bingo board on every page refresh. This guarantees that no player has an advantage over the others, as the position of the winning patterns is randomized for each player. By shuffling the cards, the application provides a fair and enjoyable experience for all players.


## How to use

The application displays a 5x5 grid of cells, each containing a cheeky frontend development reference. 
To mark a cell, simply click on it. The cell will turn blue to indicate that it has been marked. You can unmark a cell by clicking on it again.

The application keeps track of how many winning patterns you have achieved. A winning pattern can be a horizontal, vertical, or diagonal line of marked cells. Once you achieve a winning pattern, the app will display a celebration animation.

## About the code

The main component of the application is `Board`, which is responsible for rendering the cells and handling user clicks. The component uses the `Cell` component to render each individual cell, and the `Celebration` component to render the celebration animation.

The app also includes a `winningCalculator` function that checks if a set of marked cells contains a winning pattern.
