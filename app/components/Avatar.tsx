'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Changes from './Changes'
import { useAppSelector } from '../redux/store'
import { useDispatch } from 'react-redux'
import { lock, unlock } from '../redux/slices/lockedSlice'
function Avatar({ index, naTerenuId, cena, top, left, ime, c, image }: { index: number, naTerenuId: number, image: string, cena: number, ime: string, top: string, c: boolean, left: string }) {
    const [isChanging, setIsChanging] = useState(false)
    const isLocked = useAppSelector(state => state.lockedSlice.locked)

    return (

        <>
            <div

                className={`flex justify-center items-center  -translate-x-1/2 -translate-y-1/2 flex-col z-30 w-16 absolute ${top} ${left}  group`}
                tabIndex={1}
            >
                {isLocked && <div className='absolute top-0 -left-1  w-full aspect-square border-gray-600 box-content border-4 rounded-md  z-50 bg-cyan-800 bg-opacity-50 flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 stroke-white" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                </div>}

                <Image src={image} alt='' width={64} height={64} className='rounded-md w-full aspect-square object-cover object-center duration-200 border-4 focus:scale-105 focus:border-orange-600  shadow-lg border-gray-600 box-content'
                    tabIndex={1}
                ></Image>
                <div className='absolute bg-gray-600 text-xs top-0 left-0 -translate-x-1/2 -translate-y-1/2 group-focus-within:bg-orange-600 duration-200 group-focus-within:scale-105 bg-orange p-1 rounded-md font-bold flex justify-center 
           text-gray-100 items-center opacity-0'>{cena}</div>
                {c ? <div className='absolute rounded top-1/2 -translate-y-1/2 right-2 z-10 px-1 aspect-square text-sm font-bold flex justify-center items-center bg-red-500 text-gray-100 '>C</div> : null}

                {isLocked ? null : <div className='  text-gray-100  scale-50 absolute  opacity-0 -translate-y-[calc(50%_+_16px)] group-focus-within:-translate-y-1/2   group-focus-within:opacity-100 duration-200 group-focus-within:scale-100 top-full  flex gap-1 flex-col font-bold '>
                    <button className=' shadow-sm flex justify-center items-center px-2 py-1 bg-orange-500 text-sm rounded-md' onClick={() => setIsChanging(true)}>Change</button>
                    {c ? <button className=' shadow-sm flex justify-center items-center px-2 py-1 w-fit mx-auto bg-red-500 rounded-md text-sm opacity-0'>a</button> : <button className=' shadow-sm flex justify-center items-center px-2 py-1 w-fit mx-auto bg-red-500  text-sm rounded-md opacity-0'>C</button>}

                </div>}

                <p className='group-focus-within:opacity-0 opacity-100 duration-200 group-focus-within:translate-y-4 group-focus-within:-z-10 text-sm font-bold text-center text-gray-700'>{ime}</p>
            </div>
            <Changes index={index} naTerenuId={naTerenuId} cena={cena} isChanging={isChanging} setIsChanging={setIsChanging} />

        </>
    )
}

export default Avatar