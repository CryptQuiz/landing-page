import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-pink-1 absolute top-0 left-0 w-full h-[60vh] px-10 pt-10 ' style={{
            zIndex: "-1",
        }} >

            <div className='flex justify-between '>
                <h1 className='text-white drop-shadow-[3px_3px_rgba(0,0,0,1)] text-shadow font-lexend text-2xl font-bold'>Q&R</h1>
                <button className='bg-white drop-shadow-[3px_3px_rgba(0,0,0,1)] rounded-[10px] font-lexend font-bold p-2'>Connect Wallet </button>
            </div>

            <div className='flex justify-around pt-20 pl-20'>
                <div className="w-full h-full flex justify-center items-center ">
                    <p className='text-[60px] text-white text-start drop-shadow-[3px_3px_rgba(0,0,0,1)] font-lexend '>New Generation GameFi for easy to learn, enjoy and earn</p>
                    </div>
                <div className="w-full h-full flex justify-center items-center">
                    <Image
                        style={{ zIndex: "1", }}
                        src={'/images/human.png'}
                        width={210}
                        height={210} />
                </div>
            </div>

            <div className='flex flex-row justify-center items-center '>
                <div className='bg-red-1 ml-48 font-lexend  drop-shadow-[3px_3px_rgba(0,0,0,1)] text-white rounded-[20px] p-5 px-14'><button className='font-lexend drop-shadow-[3px_3px_rgba(0,0,0,1)]'>Question</button></div>
                <div className='bg-blue-1 ml-48 font-lexend  drop-shadow-[3px_3px_rgba(0,0,0,1)] text-white rounded-[20px] p-5 px-14'><button className='font-lexend drop-shadow-[3px_3px_rgba(0,0,0,1)]'>Answer</button></div>
                <div className='bg-purple-1 ml-48 font-lexend  drop-shadow-[3px_3px_rgba(0,0,0,1)] text-white rounded-[20px] p-5 px-14'><button className='font-lexend drop-shadow-[3px_3px_rgba(0,0,0,1)]'>Rewards</button></div>
            </div>
        </div>
    )
}

export default Header