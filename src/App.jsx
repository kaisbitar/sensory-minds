import Board from "./components/Board";
import "./index.css";

function App() {
  return (
    <>
      <a
        className=" hidden sm:block absolute right-10 top-2 text-base  text-blue-600 underline z-10"
        target="_blank"
        href="https://github.com/kaisbitar/sensory-minds"
        rel="noreferrer"
      >
        Visit Github Source Code
      </a>
      <div className="initialAnimation sm:pl-[8%] sm:pr-[8%] md:pl-[15%] md:pr-[15%] lg:pl-[25%] lg:pr-[25%] p-2 sm:pt-14">
        <Board />
      </div>
    </>
  );
}

export default App;
