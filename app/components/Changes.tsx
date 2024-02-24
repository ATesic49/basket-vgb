'use client'
import React from 'react'
import ChanglePl from './ChanglePl'
import { AnimatePresence, motion } from 'framer-motion'

function Changes({ isChanging, setIsChanging }: { isChanging: boolean, setIsChanging: (arg: boolean) => void }) {


    function handleChange() {
        setIsChanging(false)
    }
    return (
        <>
            {isChanging ? <><div className='bg-gray-100 border fixed top-1/2 left-1/2 -translate-x-1/2 flex gap-4 -translate-y-1/2 z-[100]  p-4 rounded-md flex-col justify-start items-start '
            >
                <h2 className='text-gray-600 font-bold'>Zameni Igraca:</h2>
                <div className=' px-4 py-2 border-b  rounded-md relative bg-gray-200 text-sm w-full  border text-gray-600 '>
                    <input placeholder='search...' className='outline-none bg-transparent caret-gray-600' type="text" />
                    <svg xmlns="http://www.w3.org/2000/svg" className=" absolute stroke-gray-600 w-6  top-1/2 -translate-y-1/2 right-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </div>
                <div className='border-gray-400 border-t flex flex-col w-full gap-2 divide-y divide-gray-200 overflow-y-auto md:max-h-[70vh] md:w-96  max-h-[40vh]'>
                    <ChanglePl slika='/imgs/avatar.jpeg' ime='Aleksa Maletic' nadimak='Kralj Trotoara' cena='9' setIsChanging={setIsChanging} />
                    <ChanglePl ime='Andrej Jovovic' nadimak='Otac Domentijan' cena='14' setIsChanging={setIsChanging} slika='/imgs/AndrejJovovic.jpg' />
                    <ChanglePl slika='/imgs/avatar.jpeg' ime='Aleksa Maletic' nadimak='Kralj Trotoara' cena='9' setIsChanging={setIsChanging} />
                    <ChanglePl ime='Andrej Jovovic' nadimak='Otac Domentijan' cena='14' setIsChanging={setIsChanging} slika='/imgs/AndrejJovovic.jpg' />
                    <ChanglePl slika='/imgs/avatar.jpeg' ime='Aleksa Maletic' nadimak='Kralj Trotoara' cena='9' setIsChanging={setIsChanging} />
                    <ChanglePl ime='Andrej Jovovic' nadimak='Otac Domentijan' cena='14' setIsChanging={setIsChanging} slika='/imgs/AndrejJovovic.jpg' />


                </div>
            </div >
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-950 z-50 bg-opacity-50 backdrop-blur-sm' onClick={() => setIsChanging(false)}></div></> : null}

        </>
    )
}



export default Changes