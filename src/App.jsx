import Board from './components/Board'

function App() {
  return (
    <div className='pt-12 md:p-16'>
      <a className='
        hidden
        sm:block
        absolute
        right-16
        top-2
        text-2xl 
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
