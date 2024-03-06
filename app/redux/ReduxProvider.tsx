'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { createStore } from './store'
import { User } from '../types'
import { logInSuccess } from './slices/authSlice'
import { player, setPlayers } from './slices/playerSlice'
import { setTrainers, trener } from './slices/trenerSlice'
import { lock, unlock } from './slices/lockedSlice'




function ReduxProvider({ locked, children, user, players, trainers }: { locked: boolean, trainers: trener[], players: player[], user: User | null, children: React.ReactNode }) {
    const storeRef = useRef<ReturnType<typeof createStore> | null>(null)

    if (!storeRef.current) {
        storeRef.current = createStore()
        if (user) {

            storeRef.current.dispatch(logInSuccess(user))
        }
        if (players) {
            storeRef.current.dispatch(setPlayers(players))
        }
        if (trainers) {
            storeRef.current.dispatch(setTrainers(trainers))
        }
        if (locked) {
            storeRef.current.dispatch(lock())
        } else {
            storeRef.current.dispatch(unlock())
        }

    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default ReduxProvider