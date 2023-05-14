import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cell = ({ cellIndex, cellData, passStatusToBoard }) => {
  // Declare and initialize state variables
  const [cellClass, setCellClass] = useState('bg-white')
  const [selected, setSelected] = useState(false)

  // Use effect to set the cell class based on whether it's selected or not
  useEffect(() => {
    if (selected && cellIndex !== 12) {
      setCellClass('bg-sky-400 line-through text-slate-500')
      return
    }
    if (cellIndex === 12) {
      setCellClass('bg-yellow-200 rounded-full')
      return
    }
    setCellClass('bg-white')
  }, [selected, cellIndex])

  return (
    <motion.button
      whileTap={selected ? { scale: [1, 0.5], zIndex: 100 } : { scale: [1, 1.7], zIndex: 100 }}
      whileHover={{ zIndex: 100 }}
      className={`
        relative 
        cursor-pointer 
        transition ease-in 
        duration-200 
        text-center 
        text-[11px] 
        sm:text-base 
        ring-inset
        ring-1
        h-full
        sm:p-2
        hover:opacity-80 
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
    </motion.button>
  )
}

export default Cell
