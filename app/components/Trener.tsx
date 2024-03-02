'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ChangeTr from './ChangeTr'
function Trener({ cena, odeljenje, ime, avatar, nadimak }: { odeljenje: string, cena: number, ime: string, avatar: string, nadimak: string }) {
    const [isChanging, setIsChanging] = useState(false)

    return (
        <>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex bg-gray-100 border-gray-600 duration p-2 rounded-md z-30 gap-4 w-5/6  translate-y-1/2 justify-start items-center border-4 focus:border-orange-600 focus:scale-105 duration-200 group' tabIndex={1}>
                <div className='absolute top-0 left-0 text-xs duration-200 bg-gray-600 p-1 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-md flex justify-center items-center text-white group-focus:bg-orange-600 font-bold '>{cena}</div>
                <Image width={48} height={48} src={'/imgs/avatar.jpeg'} alt='' className=' w-12 rounded-md ' />
                <div className='p-1 rounded-md bg-gray-600 text-gray-100 font-bold group-focus:bg-orange-600 duration-200 absolute top-8 text-[10px]'>{odeljenje}</div>
                <div className='flex items-start justify-start flex-col  text-gray-800 text-sm'>
                    <p className='text-xs'><strong>{ime}</strong><br />
                        {nadimak}
                    </p>
                </div>
                <div className='ml-auto text-sm'>
                    <div className=' px-2 py-1 bg-orange-500 font-bold shadow-sm text-gray-100 rounded-md' onClick={() => setIsChanging(true)} >Change</div>
                </div>
            </div>
            <ChangeTr cena={cena} setIsChanging={setIsChanging} isChanging={isChanging} />

        </>
    )
}

export default Trener