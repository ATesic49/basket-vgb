'use client'
import React from 'react'
import { useAppSelector } from '../redux/store'
import { stat } from 'fs'
import { useDispatch } from 'react-redux'
import { lock, unlock } from '../redux/slices/lockedSlice'

function Moderating() {
    const dispatch = useDispatch()
    const userId = useAppSelector(state => state.authSlice.user?.id)


    return (<>
        {
            userId === 1 &&
            <div className=' font-bold text-xs  text-gray-200 absolute top-0 left-0 bg-ray-100 px-2 py-2 rounded-md bg-gray-800 z-20 gap-2 flex justify-center items-center backdrop-blur-sm bg-opacity-75' >
                <button onClick={() => dispatch(lock())}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 stroke-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                        <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                    </svg>
                </button>
                <button onClick={() => dispatch(unlock())} >


                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 stroke-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                        <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M8 11v-5a4 4 0 0 1 8 0" />
                    </svg>
                </button>
            </div>
        }
    </>
    )
}

export default Moderating