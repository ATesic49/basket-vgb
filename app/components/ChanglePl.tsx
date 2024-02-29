import React from 'react'
import avatar from '@/public/imgs/avatar.jpeg'
import Image from 'next/image'
function ChanglePl({ slika, setIsChanging, ime, nadimak, cena }: { slika: string, ime: string, nadimak: string, cena: number, setIsChanging: (arg: boolean) => void }) {
    return (
        <div className='p-2 flex justify-start w-full  gap-4 text-gray-600 text-sm items-center relative pt-4'>
            <Image width={48} height={48} src={slika} alt='' className="w-12 aspect-square rounded-md object-cover object-center" ></Image>
            <p className=' text-xs'><strong className='text-sm'>{ime}</strong> <br /> {nadimak} </p>
            <div className='flex  ml-auto  text-orange-500 font-bold text-sm flex-col justify-center gap-2 items-center'>
                <div className='flex justify-center items-center  p-2 text-xs font-bold gap-2  text-gray-100 bg-orange-500 rounded-md shadow-sm cursor-pointer' onClick={() => setIsChanging(false)} >

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 stroke-gray-100 " viewBox="0 0 24 24" strokeWidth="2" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                    </svg>
                </div>
                <div className='rounded-md  p-1  flex justify-center items-center translate-y-1/4 absolute text-gray-100 text-xs font-bold bg-orange-500 top-0 left-8 translate-x-1/2'>{cena}</div>

            </div>
        </div>
    )
}

export default ChanglePl