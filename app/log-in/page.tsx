import React from 'react'
import background from '@/public/imgs/tribine.jpeg'
import Image from 'next/image'
function page() {
    return (<>
        <div className='flex flex-col justify-center  items-center gap-8 max-h-screen  h-svh'>
            <h1 className='text-4xl text-gray-100 font-bold'>Vbg Fantasy</h1>
            <p className='text-gray-100 text-sm italic -mt-4'>Gregor Picka</p>
            <div className='pt-8 p-4 bg-gray-100 bg-opacity-50  rounded-md flex flex-col gap-4 items-center justify-center'>

                <input type='text' placeholder='Username' className='bg-transparent  p-2  outline-orange-500 text-gray-600 rounded-md border-b'></input>
                <input type='password' placeholder='Password' className=' border-b p-2 bg-transparent outline-orange-500 text-gray-600 rounded-md'></input>
                <div className=' w-full relative'>
                    <button className=' p-2  rounded-md py-1 px-2 bg-orange-500 font-bold text-gray-100 w-fit '>Uloguj se.</button>
                    <button className='text-sm absolute top-1/2 right-2 -translate-y-1/2'>Registruj se</button>
                </div>
            </div>
        </div>
        <Image fill className='object-cover -z-10 bg-center blur-sm' src={background} alt=''></Image>

    </>
    )
}

export default page