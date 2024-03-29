'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import ChangeTr from './ChangeTr'
import { useAppSelector } from '../redux/store'
function Trener({ slika, id, cena, odeljenje, ime, avatar, nadimak }: { slika: string, id: number, odeljenje: string, cena: number, ime: string, avatar: string, nadimak: string }) {
    const [isChanging, setIsChanging] = useState(false)
    const isLocked = useAppSelector(state => state.lockedSlice.locked)

    return (
        <>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex bg-gray-100 border-gray-600 duration p-2 rounded-md z-30 gap-4 w-5/6  translate-y-1/2 justify-start items-center border-4 focus:border-orange-600 focus:scale-105 duration-200 group' tabIndex={1}>
                {isLocked && <div className='absolute -top-1 h-full  -left-1  w-full border-gray-600 box-content border-4 rounded-md  z-50 bg-cyan-800 bg-opacity-50 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-white" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                </div>}
                <div className='absolute top-0 left-0 text-xs duration-200 bg-gray-600 p-1 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-md flex justify-center items-center text-white group-focus:bg-orange-600 font-bold '>{cena}</div>
                <Image width={48} height={48} src={slika} alt='' className=' w-12 h-12  object-cover rounded-md ' />
                <div className='p-1 rounded-md bg-gray-600 text-gray-100 font-bold group-focus:bg-orange-600 duration-200 absolute top-8 text-[10px]'>{odeljenje}</div>
                <div className='flex items-start justify-start flex-col  text-gray-800 text-sm'>
                    <p className='text-xs'><strong>{ime}</strong><br />
                        {nadimak}
                    </p>
                </div>
                <div className='ml-auto text-sm'>
                    <div className=' px-2 py-1 bg-orange-500 font-bold shadow-sm text-gray-100 rounded-md' onClick={() => {
                        if (isLocked) {
                            return
                        } else {


                            setIsChanging(true)
                        }
                    }

                    } >Change</div>
                </div>
            </div>
            <ChangeTr id={id} cena={cena} setIsChanging={setIsChanging} isChanging={isChanging} />

        </>
    )
}

export default Trener