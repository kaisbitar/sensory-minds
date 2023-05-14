import Board from './components/Board'
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <a className='
        hidden
        sm:block
        absolute
        right-10
        top-2
        text-base 
        text-blue-600
        underline'
        target="_blank"
        href="https://github.com/kaisbitar/sensory-minds"
        rel="noreferrer"
      >
        Visit Github Source Code
      </a>
      <motion.div className='sm:pl-[8%] sm:pr-[8%] md:pl-[15%] md:pr-[15%] lg:pl-[25%] lg:pr-[25%] p-2 sm:pt-14'
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        animate={{
          scale: [.7, 1]
        }}
      >

        <Board />
      </motion.div>
    </>
  )
}

export default App
