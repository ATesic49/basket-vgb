import React from 'react'
import tribine from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
import PlayerItem from './components/PlayerItem'

function page() {


    const sortPlayers = (users: any) => {
        // return users.sort((a, b) => {


        //     if (a.score > b.score) {
        //         return -1;
        //     }
        //     if (a.score < b.score) {
        //         return 1;
        //     }
        //     return 0;
        // })

    }
    return (
        <div className='h-svh max-h-screen justify-center items-center w-full flex relative flex-col '>
            <Image alt='' fill className='-z-10 blur-sm object-cover object-center' src={tribine} />
            <div className='bg-gray-100 mt-16 w-4/5 p-6 px-8 box-content flex flex-col  rounded-md overflow-y-scroll max-h-[65vh] overflow-auto text-gray-800 gap-4 border-t '>
                <div className=' w-[175vw] flex justify-between  items-center md:w-full'>
                    <div className=' text-xl mb-2 flex justify-center items-center font-bold text-gray-700'>Statistika:</div>
                    <input placeholder='search...' className='shadow-sm p-2 rounded-md bg-gray-50 outline-none bg-transparent caret-gray-600' type="text" />
                    <div className=' rounded-md overflow-hidden flex divide-x  justify-center items-center'>
                        <div className='text-sm text-orange-500 flex justify-center to-gray-100 border-b border-gray-300 items-center bg-gradient-to-t from-gray-200 px-4 py-2 font-bold cursor-pointer'>Krug 1</div>
                        <div className='text-sm text-orange-500 cursor-pointer flex justify-center to-gray-100 border-b border-gray-300 items-center bg-gradient-to-t from-gray-200 px-4 py-2 font-bold opacity-75'>Krug 2</div>
                        <div className='text-sm text-orange-500 cursor-pointer opacity-75 flex justify-center to-gray-100 border-b border-gray-300 items-center bg-gradient-to-t from-gray-200 px-4 py-2 font-bold'>Ukupno</div>
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
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
                <PlayerItem />
            </div>
        </div>
    )
}

export default page