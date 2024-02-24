import React from 'react'
import avatar from '@/public/imgs/avatar.jpeg'
import Image from 'next/image'
function PlayerItem() {
    return (

        <div className='py-2 grid text-sm font-bold items-center justify-center text-gray-800 grid-cols-9 w-[175vw] border-b gap-8 '>
            <div className='flex justify-start  items-center w-full col-span-2  gap-4 '>
                <Image alt='' className='w-8 aspect-square object-cover rounded-md' src={avatar}></Image>
                <div className='flex text-gray-800 font-bold   flex-col justify-center text-xs items-start '>
                    <h2 className='w-max'>Aleksa Maletic</h2>
                    <p className='font-normal'>Kralj Trotoara</p>
                </div>



            </div>
            <div className='col-start-3 flex justify-center items-center w-full font-bold'>6</div>
            <div className=' flex justify-center items-center w-full font-bold'>2</div>
            <div className=' flex justify-center items-center w-full font-bold'>2</div>
            <div className=' flex justify-center items-center w-full font-bold'>2</div>
            <div className=' flex justify-center items-center w-full font-bold'>12</div>
            <div className='flex justify-center items-center  font-bold col-span-2 text-orange-500'>20</div>
        </div>
    )
}

export default PlayerItem