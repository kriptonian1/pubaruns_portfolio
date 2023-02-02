import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ViewAll } from './assets'

const ShortsCard = ({ title, image, date, slug }) => {
    return (
        <div className='flex relative'>
            <Link href={`/projects/shorts/${slug}`} className='flex w-[400px] md:w-[30vw] p-3 h-[126px]  space-x-6 rounded shadow-none transition-all duration-300 hover:shadow-2xl'>
                <Image className='sm:min-w-[10rem] rounded-lg' draggable={false} width={106} height={110} src={image} alt='shorts' />
                <div className='flex flex-col mx-6 my-3'>
                    <div className='flex flex-col'>
                        <div className='text-lg  sm:text-xl  font-semibold'>
                            {title}
                        </div>
                        <div className='text-base'>
                            {date}
                        </div>
                    </div>
                    {/* <ViewAll className='absolute right-0 bottom-0 mt-4' /> */}
                </div>


            </Link>
        </div>

    )
}

export default ShortsCard