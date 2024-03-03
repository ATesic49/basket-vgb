'use client'
import React, { useState } from 'react'
import ChanglePl from './ChanglePl'
import { useAppSelector } from '../redux/store'
import { player } from '../redux/slices/playerSlice'
import { get } from 'http'
import { getPlayerById } from '../api/getPlayers'

function Changes({ index, naTerenuId, isChanging, setIsChanging, cena }: { index: number, naTerenuId: number, cena: number, isChanging: boolean, setIsChanging: (arg: boolean) => void }) {



    const [input, setInput] = useState('')
    const credits = useAppSelector(state => state.authSlice.user?.credits) || 0
    const players = useAppSelector(state => state.playerSlice.players) as player[]
    const ourPlayer = useAppSelector(state => state.authSlice.user?.PlayerUser)
    const ourPlayerId = ourPlayer?.map(player => player.player.id)

    return (
        <>
            {isChanging ? <><div className='bg-gray-100 border fixed top-1/2 left-1/2 -translate-x-1/2 flex gap-4 -translate-y-1/2 z-[100]  p-4 rounded-md flex-col justify-start items-start '
            >
                <h2 className='text-gray-600 font-bold'>Zameni Igraca:</h2>
                <div className=' px-4 py-2 border-b  rounded-md relative bg-gray-200 text-sm w-full  border text-gray-600 '>
                    <input placeholder='search...' className='outline-none bg-transparent caret-gray-600' type="text" onChange={e => setInput(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" className=" absolute stroke-gray-600 w-6  top-1/2 -translate-y-1/2 right-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </div>
                <div className='border-gray-400 border-t flex flex-col w-full gap-2 divide-y divide-gray-200 overflow-y-auto md:max-h-[70vh] md:w-96  max-h-[40vh]'>
                    {players.map((player, index) => {
                        if (player.ime.toLowerCase().includes(input.toLowerCase()) || player.nadimak.toLowerCase().includes(input.toLowerCase()))

                            if (ourPlayerId?.includes(player.id)) return null
                        if (player.cena! <= credits + cena) {
                            return <ChanglePl trener={false} naTerenuId={naTerenuId} id={player.id} clickable={true} key={index} slika={player.slika} ime={player.ime} nadimak={player.nadimak} cena={player.cena} setIsChanging={setIsChanging} />
                        } else {
                            return <ChanglePl trener={false} naTerenuId={naTerenuId} id={player.id} clickable={false} key={index} slika={player.slika} ime={player.ime} nadimak={player.nadimak} cena={player.cena} setIsChanging={setIsChanging} />
                        }

                    })}



                </div>
            </div >
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-gray-950 z-50 bg-opacity-50 backdrop-blur-sm' onClick={() => setIsChanging(false)}></div></> : null}

        </>
    )
}



export default Changes