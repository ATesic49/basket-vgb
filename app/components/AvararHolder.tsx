'use client'
import React, { use } from 'react'
import Avatar from './Avatar'
import Trener from './Trener'
import { useAppSelector } from '../redux/store'
function AvararHolder() {
    const players = useAppSelector(state => state.authSlice.user)
    console.log(players?.PlayerUser)
    const getPlayer = (index: number) => {
        if (!players?.PlayerUser) {

            return players?.PlayerUser[index].player
        } else {
            return
        }
    }
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

            <Trener cena={10} odeljenje={'II2'} ime={'Nanad Jovanovic'} avatar={'/trenrer.jpeg'} nadimak="Sone" />
        </>
    )
}

export default AvararHolder