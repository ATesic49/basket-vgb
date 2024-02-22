'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='z-[60] fixed w-full flex justify-between items-center border-b backdrop-blur-xl px-4 py-4 '>
                <h1 className='text-gray-100 italic font-bold'>Vbg Fanstasy</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className=" cursor-pointer stroke-gray-100"
                    onClick={() => setIsOpen(!isOpen)}
                    width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6h16" />
                    <path d="M7 12h13" />
                    <path d="M10 18h10" />
                </svg>
            </div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: isOpen ? 0 : 100, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className='fixed gap-2 px-8 backdrop-blur-xl bg-gray-800 bg-opacity-75 top-0 bottom-0 z-40 pt-24   right-0 flex flex-col  '>
                <div className='flex justify-start cursor-pointer  items-center text-gray-100 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">

                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14.384 14.38a22.877 22.877 0 0 1 1.056 4.863l.064 .644l.126 1.431a10 10 0 0 1 -9.15 -.98l2.08 -2.087l.246 -.24c1.793 -1.728 3.41 -2.875 5.387 -3.566l.191 -.065zm6.09 -.783l.414 .003l.981 .014a9.997 9.997 0 0 1 -4.319 6.704l-.054 -.605c-.18 -2.057 -.55 -3.958 -1.163 -5.814c1.044 -.182 2.203 -.278 3.529 -.298l.611 -.004zm-7.869 -3.181a24.91 24.91 0 0 1 1.052 2.098c-2.276 .77 -4.142 2.053 -6.144 3.967l-.355 .344l-2.236 2.24a10 10 0 0 1 -2.917 -6.741l-.005 -.324l.004 -.25h1.096l.467 -.002c3.547 -.026 6.356 -.367 8.938 -1.295l.1 -.037zm9.388 1.202l-1.515 -.02c-1.86 -.003 -3.45 .124 -4.865 .402a26.112 26.112 0 0 0 -1.163 -2.38c1.393 -.695 2.757 -1.597 4.179 -2.75l.428 -.354l.816 -.682a10 10 0 0 1 2.098 5.409l.022 .375zm-14.663 -8.46l1.266 1.522c1.145 1.398 2.121 2.713 2.949 3.985c-2.26 .766 -4.739 1.052 -7.883 1.081l-.562 .004h-.844a10 10 0 0 1 5.074 -6.593zm9.67 .182c.53 .306 1.026 .657 1.483 1.046l-1.025 .857c-1.379 1.128 -2.688 1.993 -4.034 2.649c-.89 -1.398 -1.943 -2.836 -3.182 -4.358l-.474 -.574l-.485 -.584a10 10 0 0 1 7.717 .964z" strokeWidth="0" fill="currentColor" />
                    </svg>
                    <p className='text'>Leadboards</p>


                </div>
                <div className='flex justify-start items-center cursor-pointer text-gray-100 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2.17a3 3 0 1 1 0 5.659v.171a6.002 6.002 0 0 1 -5 5.917v2.083h3a1 1 0 0 1 .117 1.993l-.117 .007h-8a1 1 0 0 1 -.117 -1.993l.117 -.007h3v-2.083a6.002 6.002 0 0 1 -4.996 -5.692l-.004 -.225v-.171a3 3 0 0 1 -3.996 -2.653l-.003 -.176l.005 -.176a3 3 0 0 1 3.995 -2.654l-.001 -2.17a1 1 0 0 1 1 -1h10zm-12 5a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm14 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" strokeWidth="0" fill="currentColor" />
                    </svg>
                    <p className='text'>Stats</p>


                </div>
                <div className='flex fixed bottom-8 justify-start items-center cursor-pointer text-gray-100 gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" />
                        <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" strokeWidth="0" fill="currentColor" />
                    </svg>
                    <p className='text'>Uloguj Se</p>


                </div>

            </motion.div>
        </>
    )
}

export default Navbar