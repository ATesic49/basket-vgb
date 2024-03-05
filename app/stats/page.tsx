import React from 'react'
import tribine from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
import PlayerItem from './components/PlayerItem'
import Stats from './components/Stats'

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
            <Stats />
        </div>
    )
}

export default page