'use client'
import React from 'react'
import avatar from '@/public/imgs/avatar.jpeg'
import Image from 'next/image'
import { player } from '@/app/redux/slices/playerSlice'
function PlayerItem({ krug, player }: { player: player, krug: "krug1/8" | "krug1/4" | 'krug1/2' | 'finale' | "ukupno" }) {
    const fromKrugToIndex = (krug: "krug1/8" | "krug1/4" | 'krug1/2' | 'finale' | "ukupno") => {
        switch (krug) {
            case 'krug1/8':
                return 0
            case 'krug1/4':
                return 1
            case 'krug1/2':
                return 2
            case 'finale':
                return 3
            case 'ukupno':
                return 3
        }

    }

    return (

        <div className='py-2 grid text-sm font-bold items-center justify-center text-gray-800 grid-cols-9 w-[175vw] border-b gap-8 '>
            <div className='flex justify-start  items-center w-full col-span-2  gap-4 '>
                <Image alt='' className='w-8 aspect-square object-cover rounded-md' src={player.slika} width={50} height={50}></Image>
                <div className='flex text-gray-800 font-bold   flex-col justify-center text-xs items-start '>
                    <h2 className='w-max'>{player.ime}</h2>
                    <p className='font-normal'>{player.nadimak}</p>
                </div>



            </div>
            <div className='col-start-3 flex justify-center items-center w-full font-bold'>{
                player.playerKolo[fromKrugToIndex(krug)] ?
                    player.playerKolo[fromKrugToIndex(krug)].poeni : <>/</>

            }</div >
            <div className=' flex justify-center items-center w-full font-bold'>

                {
                    player.playerKolo[fromKrugToIndex(krug)] ?
                        player.playerKolo[fromKrugToIndex(krug)].asistencije : <>/</>

                }
            </div>
            <div className=' flex justify-center items-center w-full font-bold'>

                {
                    player.playerKolo[fromKrugToIndex(krug)] ?
                        player.playerKolo[fromKrugToIndex(krug)].skokovi : <>/</>

                }
            </div>
            <div className=' flex justify-center items-center w-full font-bold'>

                {
                    player.playerKolo[fromKrugToIndex(krug)] ?
                        player.playerKolo[fromKrugToIndex(krug)].ukradeneLopte : <>/</>

                }
            </div>
            <div className=' flex justify-center items-center w-full font-bold'>
                {
                    player.playerKolo[fromKrugToIndex(krug)] ?
                        player.playerKolo[fromKrugToIndex(krug)].blokovi : <>/</>

                }

            </div>
            <div className='flex justify-center items-center  font-bold col-span-2 text-orange-500'>
                {
                    player.playerKolo[fromKrugToIndex(krug)] ?
                        player.playerKolo[fromKrugToIndex(krug)].ukupno : <>/</>

                }
            </div>
        </div>
    )
}

export default PlayerItem