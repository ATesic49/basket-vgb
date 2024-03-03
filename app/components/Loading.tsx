'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAppSelector } from '../redux/store'
function Loading() {
    const isLoading = useAppSelector(state => state.loadingSlice.loading)
    return (<AnimatePresence>
        {isLoading &&
            <div className='fixed z-[999] top-0 left-0 right-0 bottom-0 bg-gray-950 bg-opacity-50 backdrop-blur-md flex justify-center items-center '>
                <motion.div className=''
                    animate={{
                        rotate: [0, 360, 360],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: 'backInOut'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-gray-200 w-16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 3a9 9 0 1 0 9 9" />
                    </svg>
                </motion.div>
            </div>
        }
    </AnimatePresence>
    )
}

export default Loading