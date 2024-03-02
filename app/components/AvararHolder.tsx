'use client'
import React, { use, useEffect } from 'react'
import Avatar from './Avatar'
import Trener from './Trener'
import { useAppSelector } from '../redux/store'
import { useRouter } from 'next/navigation'
function AvararHolder() {
    const router = useRouter()
    const user = useAppSelector(state => state.authSlice.user)
    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [])
    const players = useAppSelector(state => state.authSlice.user)
    console.log(players?.PlayerUser, 'platrsets')
    const topLeft = [{
        top: 'top-1/2',
        left: 'left-1/2'
    },
    {
        top: 'top-1/4',
        left: 'left-1/4'
    },
    {
        top: 'top-1/4',
        left: 'left-3/4'
    },
    {
        top: 'top-3/4',
        left: 'left-1/4'
    },
    {
        top: 'top-3/4',
        left: 'left-3/4'
    }

    ]
    return (
        <>
            {players?.PlayerUser.map((player, index) => {
                return <Avatar key={index} image={player.player.slika} c={false} cena={player.player.cena} top={topLeft[index].top} left={topLeft[index].left} ime={player.player.ime}></Avatar>
            })}

            <Trener cena={players?.trener.xena || 8} odeljenje={players?.trener.odeljenje || ''} ime={players?.trener.ime || ""} avatar={players?.trener.slika || '/trenrer.jpeg'} nadimak={players?.trener.nadimak || ''} />
        </>
    )
}

export default AvararHolder