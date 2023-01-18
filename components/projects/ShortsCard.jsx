import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ViewAll } from './assets'

const ShortsCard = ({ title, image, date}) => {
    return (
        <div className='flex relative'>
            <Link href={"/"} className='flex w-[600px] sm:w-[500px] max-w-[500px] min-w-[300px] space-x-6 rounded shadow-none transition-all duration-300 hover:shadow-2xl'>
                <Image className='sm:min-w-[30%] ' src={image} alt='shorts' />
                <div className='flex relative flex-col mx-6 my-3'>
                    <div className='flex space-x-[8vw] sm:space-x-[4vw] items-baseline'>
                        <div className='text-xl sm:text-xl w-[60px] font-semibold'>
                            {title}
                        </div>
                        <div className='text-base'>
                            {date}
                        </div>
                    </div>
                    <ViewAll className='absolute right-0 bottom-0 mt-4' />
                </div>
                

            </Link>
        </div>

    )
}

export default ShortsCard