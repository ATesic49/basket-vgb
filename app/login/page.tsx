'use client'
import React, { use, useState } from 'react'
import background from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
function page() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    const handleLogIn = async () => {
        if (user.username.length < 4 || user.password.length < 4) {
            return setErrorMessage('Kratak ti je username ili sifra')
        }
        const res = await axios.post('/api/login', {
            username: 'gregor',
            password: 'gregor'
        })


        console.log(res);
    }


    return (<>
        <div className='flex flex-col justify-center  items-center gap-8 max-h-screen  h-svh'>
            <h1 className='text-4xl text-gray-100 font-bold'>Vbg Fantasy</h1>
            <p className='text-gray-100 text-sm italic -mt-4'>{errorMessage}</p>
            <div className='pt-8 p-4 bg-gray-100 bg-opacity-50  rounded-md flex flex-col gap-4 items-center justify-center'>
                <input type='text' placeholder='Username' className='bg-transparent  p-2  outline-none focus:border-orange-600 text-gray-800  placeholder-gray-600 rounded-md border-b-2'></input>
                <input type='password' placeholder='Password' className=' border-b-2 p-2 placeholder-gray-600 bg-transparent outline-none focus:border-orange-600 text-gray-800 rounded-md'></input>
                <div className='flex justify-center items-center w-full relative'>
                    <button onClick={handleLogIn} className=' p-2  rounded-md py-1 px-2  font-bold text-gray-100 w-fit bg-gradient-to-t from-orange-500 shadow-sm shadow-orange-600 focus:scale-95 duration-200   to-orange-400'>Uloguj se.</button>
                </div>
            </div>
            <p className='text-gray-200 -mt-4 '>
                <Link href={'/register'} className='underline'>Registruj se.</Link>
            </p>
        </div>
        <Image fill className='object-cover -z-10 bg-center blur-sm' src={background} alt=''></Image>

    </>
    )
}

export default page