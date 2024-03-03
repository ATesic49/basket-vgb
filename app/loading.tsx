import Image from 'next/image'
import React from 'react'
import tribine from '@/public/imgs/tribine.jpeg'
function loading() {
    return (
        <div className='w-full h-svh'>
            <Image fill className='object-cover -z-10 bg-center blur-sm' src={tribine} priority alt=''></Image>
        </div>
    )
}

export default loading