'use client'
import React, { useState } from 'react'
import PlayerItem from './PlayerItem'
import { useAppSelector } from '@/app/redux/store'

function Stats() {
    const players = useAppSelector((state) => state.playerSlice.players)
    const [krug, setKrug] = useState<'krug1/8' | 'krug1/4' | 'krug1/2' | 'finale' | 'ukupno'>('krug1/8')
    const [input, setInput] = useState('')


    return (
        <div className='bg-gray-100 mt-16 w-4/5 p-6 px-8 box-content flex flex-col  rounded-md overflow-y-scroll max-h-[65vh] overflow-auto text-gray-800 gap-4 border-t '>
            <div className=' w-[175vw] flex justify-between  items-center md:w-full'>
                <div className=' text-xl mb-2 flex justify-center items-center font-bold text-gray-700'>Statistika:</div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='search...' className='shadow-sm p-2 rounded-md bg-gray-50 outline-none bg-transparent caret-gray-600' type="text" />
                <div className=' rounded-md overflow-hidden flex divide-x  justify-center items-center'>
                    <div className={`text-sm text-orange-500 flex justify-center to-gray-100 border-b border-gray-300 items-center bg-gradient-to-t from-gray-200 px-4 py-2 font-bold ${krug !== 'krug1/8' && 'opacity-75'} cursor-pointer`}
                        onClick={() => setKrug('krug1/8')}

                    >Osmina</div>
                    <div className={`text-sm text-orange-500 cursor-pointer flex justify-center to-gray-100 border-b border-gray-300 items-center bg-gradient-to-t from-gray-200 px-4 py-2 font-bold ${krug !== 'krug1/4' && 'opacity-75'}`}
                        onClick={() => setKrug('krug1/4')}

                    >Cetvetfinale</div>
                    <div className={`text-sm text-orange-500 cursor-pointer  flex justify-center to-gray-100 border-b border-gray-300 items-center bg-gradient-to-t ${krug !== 'krug1/2' && 'opacity-75'} from-gray-200 px-4 py-2 font-bold`}
                        onClick={() => setKrug('krug1/2')}

                    >Polufinale</div>

                </div>
            </div>
            <div className='grid text-sm font-bold items-center justify-center text-gray-800 grid-cols-9 w-[175vw]  gap-8'>
                <p className='col-span-2 w-full '>Igrac:</p>
                <div className=' flex justify-center items-center w-full font-bold'>Poeni</div>
                <div className=' flex justify-center items-center w-full font-bold'>Asistencije</div>
                <div className=' flex justify-center items-center w-full font-bold'>Skokovi</div>

                <div className=' flex justify-center items-center w-full font-bold'>Ukradene Lopte</div>
                <div className=' flex justify-center items-center w-full font-bold'>Blokovi</div>
                <div className='col-span-2 flex justify-center items-center w-full font-bold'>Ukupno</div>
            </div>
            {players.map((player, index) => {
                if (player.ime.toLowerCase().includes(input.toLowerCase()) || player.nadimak.toLowerCase().includes(input.toLowerCase()))
                    return <PlayerItem key={index} player={player} krug={krug} />
            })}
        </div>
    )
}

export default Stats