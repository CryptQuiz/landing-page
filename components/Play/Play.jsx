import Image from 'next/image'
import React from 'react'

const Play = () => {
  const box = [
    {
      color: 'bg-blue-1',
      text: 'Connect with your wallet or Google account.',
      image: '/images/image11.png'
    },
    {
      color: 'bg-green-1',
      text: 'Create your profile.',
      image: '/images/Rogue.png'
    },
    {
      color: 'bg-red-1',
      text: 'Find proper game.',
      image: '/images/Bueno.png'
    },
    {
      color: 'bg-purple-1',
      text: 'Join the events.',
      image: '/images/Class.png'
    },
    {
      color: 'bg-pink-1',
      text: 'Have fun and Earn Income.',
      image: '/images/Feliz.png'
    },
  ]
  return (
    <div className='flex justify-center items-center flex-col' >
      <h1 className='text-white text-6xl font-bold font-lexend drop-shadow-[2px_2px_rgba(0,0,0,1)] my-10'>How to play? </h1>
      <div className='flex flex-col justify-around items-center'>


        <div className='relative flex flex-row justify-center items-center my-14'>
          <div className={`bg-blue-1 rounded-full w-[5vw] h-[10vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10`}>
            <p className='text-white text-2xl font-bold font-lexend  '>1</p>
          </div>
          <div className='h-1 w-[20vw] bg-black'>c</div>
          <div className='bg-white border w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]'>
            <p className='font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10'>Connect with your wallet or Google account.</p>
          </div>
          <div className='absolute -right-24 -top-24'>
            <Image src='/images/image11.png' width={200} height={200} />
          </div>
        </div>

        <div className='relative flex flex-row justify-center items-center my-24'>
          <div className='bg-white border w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]'>
            <p className='font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10'>Create your profile.</p>
          </div>
          <div className='h-1 w-[20vw] bg-black'>c</div>
          <div className={`bg-green-1 rounded-full w-[5vw] h-[10vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10`}>
            <p className='text-white text-2xl font-bold font-lexend  '>2</p>
          </div>
          <div className='absolute left-24 -top-40'>
            <Image src='/images/Rogue.png' width={200} height={200} />
          </div>
        </div>


        <div className='relative flex flex-row justify-center items-center my-14'>
          <div className={`bg-red-1 rounded-full w-[5vw] h-[10vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10`}>
            <p className='text-white text-2xl font-bold font-lexend  '>3</p>
          </div>
          <div className='h-1 w-[20vw] bg-black'>c</div>
          <div className='bg-white border w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]'>
            <p className='font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10'>Create your profile.</p>
          </div>
          <div className='absolute -right-16 top-12'>
            <Image src='/images/Bueno.png' width={200} height={200} />
          </div>
        </div>


        <div className='relative flex flex-row justify-center items-center my-14'>
          <div className='bg-white border w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]'>
            <p className='font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10'>Join the events.</p>
          </div>
          <div className='h-1 w-[20vw] bg-black'>c</div>
          <div className={`bg-pink-1 rounded-full w-[5vw] h-[10vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10`}>
            <p className='text-white text-2xl font-bold font-lexend  '>4</p>
          </div>
          <div className='absolute left-0 top-12'>
            <Image src='/images/Class.png' width={200} height={200} />
          </div>
        </div>

        <div className='relative flex flex-row justify-center items-center my-14'>
          <div className={`bg-purple-1 rounded-full w-[5vw] h-[10vh] flex justify-center items-center border border-black border-b-4 border-r-4 my-10`}>
            <p className='text-white text-2xl font-bold font-lexend  '>5</p>
          </div>
          <div className='h-1 w-[20vw] bg-black'>c</div>
          <div className='bg-white border w-[30vw] h-[30vh] flex justify-center items-center border-black border-b-4 border-r-4 rounded-[20px]'>
            <p className='font-bold font-lexend text-black text-2xl leading-loose drop-shadow-[2px_2px_rgba(0,0,0,1) px-10'>Have fun and Earn Income.</p>
          </div>
          <div className='absolute -right-10 top-12'>
            <Image src='/images/Feliz.png' width={200} height={200} />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Play