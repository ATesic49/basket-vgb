'use client'
import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

import Image, { StaticImageData } from 'next/image'
function Avatar({ top, left, avatar, ime, c }: { ime: string, top: string, c: boolean, left: string, avatar: StaticImageData }) {
    return (
        <div
            className={`flex justify-center items-center  -translate-x-1/2 -translate-y-1/2 flex-col z-40 w-16 absolute ${top} ${left} z-10 group`}
            tabIndex={1}
        >
            <Image src={avatar} alt='' className='rounded-md w-full aspect-square object-cover object-center duration-200 border-4 focus:scale-105 focus:border-orange-600  shadow-lg border-gray-600 box-content'
                tabIndex={1}
            ></Image>
            <div className='absolute bg-gray-600 text-xs top-0 left-0 -translate-x-1/2 -translate-y-1/2 group-focus-within:bg-orange-600 duration-200 bg-orange p-1 rounded-md font-bold flex justify-center items-center'>10</div>
            {c ? <div className='absolute rounded top-1/2 -translate-y-1/2 right-2 z-10 px-1 aspect-square text-sm font-bold flex justify-center items-center bg-red-500 text-gray-100'>C</div> : null}

            <div className='  text-gray-100  scale-50 absolute  opacity-0 -translate-y-[calc(50%_+_16px)] group-focus-within:-translate-y-1/2   group-focus-within:opacity-100 duration-200 group-focus-within:scale-100 top-full  flex gap-1 flex-col font-bold '>
                <button className=' shadow-sm flex justify-center items-center px-2 py-1 bg-orange-500 text-sm'>Change</button>
                {c ? <button className=' shadow-sm flex justify-center items-center px-2 py-1 w-fit mx-auto bg-red-500  text-sm opacity-0'>sadasds</button> : <button className=' shadow-sm flex justify-center items-center px-2 py-1 w-fit mx-auto bg-red-500  text-sm'>C</button>}

            </div>
            <p className='group-focus-within:opacity-0 opacity-100 duration-200 group-focus-within:translate-y-4 text-sm font-bold text-center text-gray-700'>{ime}</p>
        </div>
    )
}

export default Avatar