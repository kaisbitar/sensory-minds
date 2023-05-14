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

    let tempCellMapper = { ...cellMapper }
    let tempWinningArray = { ...winningArrays };

    if (!status) {
      delete tempCellMapper[index]
      setCellMapper(tempCellMapper);

      tempWinningArray = checkWinningPattern(tempCellMapper)
      setWinningArray(tempWinningArray)

      return
    }

    tempCellMapper[index] = true;
    setCellMapper(tempCellMapper);

    tempWinningArray = checkWinningPattern(tempCellMapper)
    setWinningArray(tempWinningArray)

    // check if current index is part of any winning pattern
    for (let i = 0; i < tempWinningArray.length; i++) {
      if (tempWinningArray[i].includes(index)) {
        setCelebrate(true)
        setTimeout(() => {
          setCelebrate(false)
        }, 500)
        break
      }
    }
  }

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
      <div className='mb-3 ml-0 text-sm sm:text-base m-auto relative sm:block w-36 bg-white p-2 ring-2 font-bold'>
        Bingo Count: {winningArrays.length}
      </div>
      <Celebration celebrate={celebrate} />
      <div className='grid grid-cols-5 h-[70vh] shadow-sml'>
        {boardCells}
      </div>
    </>
  );
};

export default BingoBoard