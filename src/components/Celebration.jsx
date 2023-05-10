import { useEffect, useState } from 'react';

// Component for displaying a winning celebration
const Celebration = ({ celebrate }) => {
  const [celebrateClass, setCelebrateClass] = useState('')

  useEffect(() => {
    // If celebrate is true, add animation class and then remove it after 1600ms
    if (celebrate) {
      setCelebrateClass('animate-spin z-10 relative')
      setTimeout(() => { setCelebrateClass('') }, 2000)
      return
    }
  }, [celebrate])

  // Return the component with dynamic class and BINGO text in different colors
  return (
    <div className={`${celebrateClass} grid grid-cols-5 gap-1  text-center transition ease-in-out delay-150 text-xl`}>
      <span className={`bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-blue-600`}>B</span>
      <span className={`bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-green-600`}>I</span>
      <span className={`bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-red-600`}>N</span>
      <span className={`bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-yellow-600`}>G</span>
      <span className={`bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-purple-600`}>O</span>
    </div>
  )
}

export default Celebration
