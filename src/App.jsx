import Board from './components/Board'

function App() {
  return (
    <div className='sm:p-20 p-2 sm:pt-10'>
      <a className='
        hidden
        sm:block
        absolute
        right-24
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
      <Board />
    </div>
  )
}

export default App
