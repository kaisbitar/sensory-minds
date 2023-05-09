
import Cell from './Cell'
import Celebration from './Celebration';
import checkWinningPattern from '../functions/winningCalculator'
import bingoBoard from '../constants/bingoBoard'
import { useState } from 'react';

const BingoBoard = () => {
  const [celebrate, setCelebrate] = useState(false)
  const [cellMapper, setCellMapper] = useState({ 12: true });
  const [winningArrays, setWinningArray] = useState([])


  const cellClickHandler = (index, status) => {

    setCelebrate(false)
    if (!status) {
      delete cellMapper[index]
      return
    }

    setCellMapper(() => {
      let tempCellMapper = cellMapper
      tempCellMapper[index] = true
      return tempCellMapper
    })

    let tempWinningArray = winningArrays
    setWinningArray(() => {
      tempWinningArray = (checkWinningPattern(cellMapper))
      return tempWinningArray
    })


    for (let i = 0; i < tempWinningArray.length; i++) {
      if (tempWinningArray[i].includes(index)) {
        setCelebrate(true)
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
          cellData={bingoBoard[index]}
          cellIndex={index}
          passStatusToBoard={cellClickHandler}
        />
      );
    }
  }

  return (
    <>
      <div className='top-0 absolute'>Bingo Count: {winningArrays.length}</div>
      <Celebration celebrate={celebrate} />
      <div className='
        grid 
        grid-cols-5 
        gap-1
        shadow-xl'
      >
        {boardCells}
      </div>
    </>
  );
};



export default BingoBoard