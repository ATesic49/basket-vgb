'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { createStore } from './store'
import { User } from '../types'
import { logInSuccess } from './slices/authSlice'
import { player, setPlayers } from './slices/playerSlice'
import { setTrainers, trener } from './slices/trenerSlice'




function ReduxProvider({ children, user, players, trainers }: { trainers: trener[], players: player[], user: User | null, children: React.ReactNode }) {
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

    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default ReduxProvider