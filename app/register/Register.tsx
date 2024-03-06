'use client'
import React, { useState } from 'react'
import background from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { logInFailure, logInSuccess } from '../redux/slices/authSlice'
function Register() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [errorMessage, setErrorMessage] = useState('Registruj se.')
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorMessage('Registrujem te...')
        if (user.username.length < 4 || user.password.length < 4) {
            return setErrorMessage('Kratak ti je username ili sifra')
        }
        try {

            const res = await axios.post('/api/register', {
                username: user.username,
                password: user.password
            })
            await dispatch(logInSuccess(res.data))
            if (res.data.id) {
                console.log(res.data, 'resdaads')

                setErrorMessage('Uspesno si se registrovao')
                setTimeout(() => {
                    router.push('/')
                }
                    , 1000)
            } else {
                setErrorMessage('Vec je zauzet taj username. Probaj drugi.')
            }
        } catch (err) {
            dispatch(logInFailure('nesto je poslo po zlu'));
        }


    }
    return (
        <>
            <div className='flex flex-col justify-center  items-center gap-8 max-h-screen  h-svh'>
                <h1 className='text-4xl text-gray-100 font-bold'>Vbg Fantasy</h1>
                <p className='text-gray-100 text-sm italic -mt-4'>{errorMessage}</p>
                <form className='pt-8 p-4 bg-gray-100 bg-opacity-50  rounded-md flex flex-col gap-4 items-center justify-center'
                    onSubmit={e => handleRegister(e)}>
                    <input type='text' onChange={e => setUser({
                        ...user,
                        username: e.target.value
                    })} placeholder='Username' className='bg-transparent  p-2  outline-none focus:border-orange-600 text-gray-800  placeholder-gray-600 rounded-md border-b-2'></input>
                    <input
                        onChange={e => setUser({
                            ...user,
                            password: e.target.value
                        })
                        }
                        type='password' placeholder='Password' className=' border-b-2 p-2 placeholder-gray-600 bg-transparent outline-none focus:border-orange-600 text-gray-800 rounded-md'></input>
                    <div className='flex justify-center items-center w-full relative'>
                        <button className=' p-2  rounded-md py-1 px-2  font-bold text-gray-100 w-fit bg-gradient-to-t from-orange-500 shadow-sm shadow-orange-600 focus:scale-95 duration-200   to-orange-400' type='submit'

                        >Registruj se.</button>
                    </div>
                </form>
                <p className='text-gray-200 -mt-4 '>
                    <Link href={'/login'} className='underline'>Uloguj se.</Link>
                </p>
            </div>
            <Image fill className='object-cover -z-10 bg-center blur-sm' src={background} alt=''></Image>
        </>
    )
}

export default Register