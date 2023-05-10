import { useState, useEffect } from 'react';

const Cell = ({ cellIndex, cellData, passStatusToBoard }) => {
  // Declare and initialize state variables
  const [cellClass, setCellClass] = useState('bg-white')
  const [selected, setSelected] = useState(false)

  // Use effect to set the cell class based on whether it's selected or not
  useEffect(() => {
    if (selected && cellIndex !== 12) {
      setCellClass('bg-sky-400 line-through ')
      return
    }
    if (cellIndex === 12) {
      setCellClass('bg-yellow-200 rounded-full')
      return
    }
    setCellClass('bg-white')
  }, [selected, cellIndex])

  return (
    <button
      className={`
        relative 
        cursor-pointer 
        transition ease-in 
        duration-200 
        text-center 
        text-sm 
        sm:text-base 
        border 
        border-black 
        h-32 
        hover:opacity-50 
        ${cellClass}`
      }
      onClick={() => {
        if (cellIndex === 12) return
        passStatusToBoard(cellIndex, !selected)
        setSelected(!selected)
      }}
    >
      <div className='absolute right-0 top-0 h-8 w-8'>{cellIndex}</div>
      {cellData}
    </button>
  )
}

export default Cell
