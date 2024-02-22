'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ChangeTr from './ChangeTr'
function Trener({ ime, avatar, nadimak }: { ime: string, avatar: StaticImageData, nadimak: string }) {
    const [isChanging, setIsChanging] = useState(false)
    return (
        <>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex bg-gray-100 border-gray-600 duration p-2 rounded-md z-30 gap-4 w-5/6  translate-y-1/2 justify-start items-center border-4 focus:border-orange-600 focus:scale-105 duration-200 ' tabIndex={1}>
                <Image src={avatar} alt='' className='w-12 ' />
                <div className='flex items-start justify-start flex-col  text-gray-800 text-sm'>
                    <p className='text-xs'><strong>{ime}</strong><br />
                        {nadimak}
                    </p>
                </div>
                <div className='ml-auto text-sm'>
                    <div className=' px-2 py-1 bg-orange-500 font-bold shadow-sm text-gray-100 rounded-md' onClick={() => setIsChanging(true)} >Change</div>
                </div>
            </div>
            <ChangeTr setIsChanging={setIsChanging} isChanging={isChanging} />

        </>
    )
}

export default Trener