import React from 'react'
import tribine from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
import UserItem from './components/UserItem'
import prisma from '@/lib/prisma'
import { User } from '../types'
import { useAppSelector } from '../redux/store'
import Leaderboards from './components/Leaderboards'
interface user {
    isMe: boolean,
    username: string,
    score: number
}
async function page() {

    const user = await prisma.user.findMany({
    })



    return (
        <div className='h-svh max-h-screen justify-center items-center w-full flex relative flex-col '>
            <Image alt='' fill className='-z-10 blur-sm object-cover object-center' src={tribine} />
            <Leaderboards user={user} />
        </div>
    )
}

export default page