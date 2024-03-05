import Image from 'next/image'
import React from 'react'
import avatar from '@/public/imgs/avatar.jpeg'
function UserItem({ isMe, username, score, place }: { place: number, isMe: boolean, username: string, score: number }) {
    const fromItoColor = (i: number) => {
        switch (i) {
            case 1: return 'bg-orange-400'
            case 2: return 'bg-gray-400'
            case 3: return 'bg-yellow-700'
            default: return 'bg-neutral-500'
        }
    }
    return (
        <div className='w-full gap-4 p-4 z-20 bg-gradient-to-t relative  from-gray-300 rounded-md to gray-200 flex border overflow-hidden justify-start min-h-12 items-center '>
            {
                isMe ?
                    <div className='-z-10 absolute opacity-35  top-0 left-0  right-0 bottom-0 bg-green-200'></div> : null
            }

            <div className={` rounded-md z-10 ${fromItoColor(place)}  text-white  font-bold px-2 aspect-square flex justify-center items-center `}>{place}.</div>
            <h2 className='text-sm text-gray-600 font-bold'>{username}</h2>
            <div className='text-sm font-bold text-gray-600 ml-auto mr-2'>

                <span className='text-orange-400 mx-1'>&nbsp; {score}</span>
                pts</div>
        </div>
    )
}

export default UserItem