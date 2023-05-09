import { useEffect, useState } from 'react';

const Celebration = ({ celebrate }) => {
  const [celebrateClass, setCelebrateClass] = useState('block')

  useEffect(() => {
    if (celebrate) {
      setCelebrateClass('animate-ping animate-spin z-10 relative')
      setTimeout(() => { setCelebrateClass('block') }, 1600)
      return
    }
  }, [celebrate])

  return (
    <div className={` ${celebrateClass} grid grid-cols-5 gap-1  text-center transition ease-in-out delay-150 text-xl	 `}>
      <span className={`  bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-blue-600`}>B</span>
      <span className={`  bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-green-600`}>I</span>
      <span className={`  bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-red-600`}>N</span>
      <span className={`  bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-yellow-600`}>G</span>
      <span className={`  bg-white border border-black p-2 w-12 m-auto font-bold rounded-full mb-5 text-purple-600`}>O</span>
    </div>
  )
}

export default Celebration