import Cell from './Cell'
import Celebration from './Celebration';
import checkWinningPattern from '../functions/winningCalculator'
import cards from '../constants/cards'
import { useState } from 'react';

const BingoBoard = () => {
  const [celebrate, setCelebrate] = useState(false)
  const [cellMapper, setCellMapper] = useState({ 12: true }); // mark center cell as true
  const [winningArrays, setWinningArray] = useState([])

  const cellClickHandler = (index, status) => {
    setCelebrate(false)

    if (!status) {
      let tempCellMapper = { ...cellMapper }
      delete tempCellMapper[index]

      setCellMapper(tempCellMapper); // if cell is unchecked, remove it from mapper
      return
    }

    let tempCellMapper = { ...cellMapper }
    tempCellMapper[index] = true;

    setCellMapper(tempCellMapper);

    let tempWinningArray = { ...winningArrays };
    tempWinningArray = checkWinningPattern(tempCellMapper) // check for winning patterns and update winning array

    setWinningArray(tempWinningArray)

    // check if current index is part of any winning pattern
    for (let i = 0; i < tempWinningArray.length; i++) {
      if (tempWinningArray[i].includes(index)) {
        setCelebrate(true)
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
          cellData={cards[index]}
          cellIndex={index}
          passStatusToBoard={cellClickHandler} // pass click event handler to cell
        />
      );
    }
  }

  // render bingo board
  return (
    <>
      <div className='top-0 hidden sm:block absolute bg-white p-2 mt-1 font-bold'>Bingo Count: {winningArrays.length}</div>
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