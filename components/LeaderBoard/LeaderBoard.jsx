import Image from 'next/image'
import React from 'react'

const LeaderBoard = () => {
    const boxesData = [
        {
            photo : '/images/Ellipse26.png',
            name : 'Joseph',
            win : '13 Win',
            color : 'brown-1',
            height : '10vh'
        },
        {
            photo : '/images/Ellipse27.png',
            name : 'Mark',
            win : '24 Win',
            color : 'yellow-2',
            height : '20vh'
        },
        {
            photo : '/images/Ellipse28.png',
            name : 'Simith',
            win : '17 Win',
            color : 'gray-1',
            height : '40vh'
        },
    ]
    return (
        <div className=''>
            <div className='flex justify-center items-center text-4xl drop-shadow-[2px_2px_rgba(0,0,0,1)] mb-20' >
                <h1 className='text-white font-bold font-lexend'>LeaderBoard</h1>
            </div>
            <div className='flex justify-around relative'>
                <div className='bg-white h-[70vh] flex flex-row items-center justify-center absolute w-2/3  border border-black border-b-4 border-r-4 rounded-[20px]'>
                    {boxesData.map((item, index) => (
                        <div className='flex flex-col  items-center justify-center mx-20'>
                            <div>
                                <Image 
                                src={item.photo}
                                height={120}
                                width={120}/>

                            </div>
                            <div className='font-bold font-lexend font-2xl text-black my-4'>{item.name}</div>
                            <div className={`bg-${item.color} w-40 h-[${item.height}] rounded-[20px] border border-black border-b-4 border-r-4 flex justify-center items-center `}>
                                <p className='text-white  text-2xl font-bold font-lexend'>{index +1 }</p>
                            </div>
                            <div className='bg-white border border-black border-b-4 border-r-4 w-40 h-12 text-black font-bold font-lexend rounded-[20px] flex justify-center items-center mt-5'>{item.win}</div>
                        </div>
                    ))}
                    
                </div>
                <div className='w-1/3 absolute -right-12 '>
                    <Image src='/images/Jumping.png' width={500} height={500} />
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard