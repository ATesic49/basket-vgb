'use client'
import React, { useEffect } from 'react'
import UserItem from './UserItem';
import { useAppSelector } from '@/app/redux/store';
import { User } from '@/app/types';
import axios from 'axios';

interface user {
    id: number;
    username: string;
    password: string;
    poeni: number;
    credits: number;
    trenerId: number;
}
function Leaderboards({ user }: { user: user[] }) {

    const myUser = useAppSelector(state => state.authSlice.user)
    const myPlayerIds = (myUser: User) => {
        return myUser.PlayerUser.map(player => player.playerId)
    }
    const sortUsers = (users: user[]) => {
        return users.sort((a, b) => {


            if (a.poeni > b.poeni) {
                return -1;
            }
            if (a.poeni < b.poeni) {
                return 1;
            }
            return 0;
        })

    }
    const points = async (user: user) => {
        if (myUser)
            await axios.post('/api/getUserPoints', { userId: user.id, playerIds: myPlayerIds(myUser) })
    }
    return (
        <div className='bg-gray-100 w-4/5 p-6 box-content flex flex-col justify-start  items-start rounded-md overflow-y-scroll max-h-[65vh] text-gray-800 gap-2 border-t '>
            <div className='w-full text-xl mb-2 font-bold text-gray-700'>Tabela:</div>
            {sortUsers(user).map((user, i) => {



                if (myUser)
                    return <UserItem key={i} isMe={user.id === myUser.id} place={i + 1} username={user.username} score={user.poeni} />
            })}

        </div>
    )
}

export default Leaderboards