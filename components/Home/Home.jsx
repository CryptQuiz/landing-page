"use client"

import Image from 'next/image'
import React from 'react'

const Home = () => {
  const [size, setSize] = React.useState(
  {
    width: 300,
    height: 50,
  }
  
  );
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center text-white drop-shadow-[3px_3px_rgba(0,0,0,1)] font-lexend text-5xl mb-20'>Welcome On Board</h1>
      <div className='bg-white border border-black border-b-4 border-r-4 rounded-[40px] h-4/5 mt-20'>
        <div className='flex flex-col-2 justify-center items-center'>
          <div className='w-2/3  justify-center items-center'>
            <p className='text-black font-lexend leading-10 text-base font-bold p-14' >Q&R is a Blockchain-powered Game-Fi platform that enables players to earn speceific incomes according to their answers, activities and creative ideas at diffirent fictional functions. It is a new-generation quiz game, with a completely unique approach without any centralized resyrictions. </p>
          </div>
          <div className='w-1/2 relative'>
            <div className='absolute right-58 -top-60 z-20' >
              <Image
                src='/images/UserHomeMobile.png'
                width={size.width}
                height= {size.height}
              />
            </div>
            <div className='absolute right-20 -top-32 z-10'>
              <Image
                src='/images/QuizQuestionMobile.png'
                width={size.width}
                height={size.height}
                
              />
            </div>

          </div>
        </div>
        <div>
          <div className='relative w-1/3'>
            <Image
            className='absolute left-40 top-4'
              src='/images/Humans.png'
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home