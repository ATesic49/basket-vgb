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
    }, [user])
    const players = useAppSelector(state => state.authSlice.user)
    const topLeft = {
        center: {
            top: 'top-1/2',
            left: 'left-1/2',
            c: true

        },
        topLeft: {
            top: 'top-1/4',
            left: 'left-1/4',
            c: false
        },
        topRight: {
            top: 'top-1/4',
            left: 'left-3/4',
            c: false

        },
        bottomLeft: {
            top: 'top-3/4',
            left: 'left-1/4',
            c: false

        },
        bottomRight: {
            top: 'top-3/4',
            left: 'left-3/4',
            c: false

        }

    }
    return (
        <>
            {players?.PlayerUser.map((player, index) => {
                //@ts-ignore
                const playerStatus = player.status as 'topLeft' | 'topRight' | 'center' | 'bottomLeft' | 'bottomRight'
                return <Avatar index={index} naTerenuId={player.playerId} key={index} image={player.player.slika} c={topLeft[playerStatus].c} cena={player.player.cena} top={topLeft[playerStatus].top} left={topLeft[playerStatus].left} ime={player.player.ime}></Avatar>
            })}



            <Trener id={players?.trenerId || 0} slika={players?.trener.slika || '/imgs/avatar.jpeg'} cena={players?.trener.xena || 8} odeljenje={players?.trener.odeljenje || ''} ime={players?.trener.ime || ""} avatar={players?.trener.slika || '/trenrer.jpeg'} nadimak={players?.trener.nadimak || ''} />
        </>
    )
}

export default AvararHolder