'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../redux/store'
function Credits() {
    const credits = useAppSelector(state => state.authSlice.user?.credits)
    const creditsBoja = (credits: number | undefined) => {
        if (credits) {
            if (credits < 10) {
                return 'text-red-300'
            } else if (credits < 35) {
                return 'text-yellow-200'
            } else {
                return 'text-green-400'
            }
        } else {
            return ''
        }
    }

    return (
        <div className=' font-bold text-xs  text-gray-200 absolute top-0 right-0 bg-ray-100 px-4 py-2 rounded-md bg-gray-800 z-20 backdrop-blur-sm bg-opacity-75'>Credit: &nbsp;  <span className={creditsBoja(credits)}>{credits}</span> / 50

        </div>
    )
}

export default Credits