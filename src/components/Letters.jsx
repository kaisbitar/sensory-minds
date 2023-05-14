const Letters = ({ letter, color }) => {
  return (
    <span className={`bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-${color}`}>{letter}</span>

  )
}

export default Letters