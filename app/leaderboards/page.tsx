import React from 'react'
import tribine from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
import UserItem from './components/UserItem'
interface user {
    isMe: boolean,
    username: string,
    score: number
}
function page() {
    const users = [{
        isMe: false,
        username: "Pavler",
        score: 90
    },
    {
        isMe: false,
        username: "Markeza",
        score: 87
    },
    {
        isMe: false,
        username: "Filio",
        score: 84
    },
    {
        isMe: true,
        username: "Aleksa",
        score: 54
    },
    {
        isMe: false,
        username: 'Aleksej',
        score: 154
    }]

    const sortUsers = (users: user[]) => {
        return users.sort((a, b) => {


            if (a.score > b.score) {
                return -1;
            }
            if (a.score < b.score) {
                return 1;
            }
            return 0;
        })

    }
    return (
        <div className='h-svh max-h-screen justify-center items-center w-full flex relative flex-col '>
            <Image alt='' fill className='-z-10 blur-sm object-cover object-center' src={tribine} />
            <div className='bg-gray-100 w-4/5 p-6 box-content flex flex-col justify-start  items-start rounded-md overflow-y-scroll max-h-[65vh] text-gray-800 gap-2 border-t '>
                <div className='w-full text-xl mb-2 font-bold text-gray-700'>Tabela:</div>
                {sortUsers(users).map((user, i) => {




                    return <UserItem key={i} isMe={user.isMe} place={i + 1} username={user.username} score={user.score} />
                })}

            </div>
        </div>
    )
}

export default page