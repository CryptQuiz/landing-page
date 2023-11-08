import React from 'react'

const Slider = () => {
    const boxesData = [
    { color: "red-1", label: "SCALABLE" },
    { color: "blue-1", label: "EASY ADAPTATION FOR WEB2 USERS" },
    { color: "purple-1", label: "EASY ADAPTATION FOR WEB2 PLATFORMS" },
    { color: "pink-1", label: "EASY ADAPTATION FOR WEB2 PLATFORMS" },
    ]
  return (
    <div className='flex flex-row justify-center items-center '>
        {boxesData.map((box, index) => (    
            <div className={`bg-${box.color} flex justify-center items-center h-[50vh] w-[20vw] border border-black border-b-4 border-r-4 rounded-[20px] ml-5`}>
            <p className='text-center text-white text-shadow drop-shadow-[4px_4px_rgba(0,0,0,1) font-lexend font-bold leading-8'>{box.label}</p>
       </div>
        ))}
        
        
    </div>
  )
}

export default Slider