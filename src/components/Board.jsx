import Cell from './Cell'
import Celebration from './Celebration';
import checkWinningPattern from '../functions/winningCalculator'
import cards from '../constants/cards'
import { useState } from 'react';

const BingoBoard = () => {
  // set initial states
  const [celebrate, setCelebrate] = useState(false)
  const [cellMapper, setCellMapper] = useState({ 12: true }); // mark center cell as true
  const [winningArrays, setWinningArray] = useState([])

  // function to handle cell click event
  const cellClickHandler = (index, status) => {
    setCelebrate(false) // reset celebration state
    if (!status) {
      delete cellMapper[index] // if cell is unchecked, remove it from mapper
      return
    }

    setCellMapper(() => {
      let tempCellMapper = cellMapper // create a copy of cell mapper
      tempCellMapper[index] = true // mark the cell as true
      return tempCellMapper // return the updated mapper
    })

    let tempWinningArray = winningArrays // create a copy of winning array
    setWinningArray(() => {
      tempWinningArray = (checkWinningPattern(cellMapper)) // check for winning patterns and update winning array
      return tempWinningArray // return the updated winning array
    })

    // check if current index is part of any winning pattern
    for (let i = 0; i < tempWinningArray.length; i++) {
      if (tempWinningArray[i].includes(index)) {
        setCelebrate(true) // set celebrate state to true for celebration animation
        break
      }
    }
  }

  // create board cells from constants
  const boardCells = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const index = row * 5 + col;
      boardCells.push(
        <Cell
          key={index}
          cellData={cards[index]} // set card data for cell
          cellIndex={index}
          passStatusToBoard={cellClickHandler} // pass click event handler to cell
        />
      );
    }
  }

  // render bingo board
  return (
    <>
      <div className='top-0 absolute bg-white p-2 mt-1 font-bold'>Bingo Count: {winningArrays.length}</div>
      <Celebration celebrate={celebrate} />
      <div className='
        grid 
        grid-cols-5 
        md:gap-1
        shadow-xl'
      >
        {boardCells}
      </div>
    </>
  );
};

export default BingoBoard
