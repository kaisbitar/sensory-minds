import { motion } from 'framer-motion'
import Letters from './Letters'
// Component for displaying a winning celebration
const Celebration = ({ celebrate }) => {

  const variants = {
    on: { scale: [1, 0, 1.3, 1] },
    off: {},
  }

  const bingo = 'BINGO'
  const letters = []
  const colors = ['yellow-600', 'blue-600', 'lime-600', 'indigo-600', 'red-500']
  for (let i = 0; i < bingo.split('').length; i++) {
    letters.push(
      <Letters key={i} letter={bingo[i]} color={colors[i]} />
    )
  }

  // Return the component with dynamic class and BINGO text in different colors
  return (
    <motion.div animate={celebrate ? 'on' : 'off'} variants={variants} className={`grid grid-cols-5 gap-1  text-center text-xl`}>
      {letters}
    </motion.div>
  )
}

export default Celebration
