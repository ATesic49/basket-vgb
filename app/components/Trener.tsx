import React from 'react'
import avatar from '@/public/imgs/avatar.jpeg'
import Image from 'next/image'
function Trener() {
    return (
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex bg-gray-100 border-gray-600 duration p-2 rounded-md z-40 gap-4 w-5/6  translate-y-1/2 justify-start items-center border-4'>
            <Image src={avatar} alt='' className='w-12 ' />
            <div className='flex items-start justify-start flex-col  text-gray-800 text-sm'>
                <h2 className='font-bold text-base'>Trener</h2>
                <p className='text-xs'>Nebojša Marjanović <br /> Konan</p>
            </div>
            <div className='ml-auto text-sm'>
                <div className=' px-2 py-1 bg-orange-500 font-bold shadow-sm '>Change</div>
            </div>
        </div>
    )
}

export default Trener