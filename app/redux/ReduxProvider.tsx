'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { createStore } from './store'
import { User } from '../types'
import { logInSuccess } from './slices/authSlice'




function ReduxProvider({ children, user }: { user: User | null, children: React.ReactNode }) {
    const storeRef = useRef<ReturnType<typeof createStore> | null>(null)
    if (!storeRef.current) {
        storeRef.current = createStore()
        if (user)
            storeRef.current.dispatch(logInSuccess(user))
    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default ReduxProvider