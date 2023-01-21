import Image from 'next/image'
import React from 'react'
import { ExploreImg, headerPortfolioImg } from './assets'
import { Poppins } from '@next/font/google'
import Link from 'next/link'

const poppins = Poppins(
    {
        subsets: ['latin'],
        variants: ['400', '500', '600', '700', '800', '900'],
        weight: '400',
        variable: '--font-poppins',
    }
)

const HeadCard = () => {
    return (
        <div className=''>
            <Link href={"/projects/The River and its People"} className='relative flex'>
                <div className="relative transition duration-700 ease-in-out hover:translate-x-3 hover:translate-y-3">
                    <div className='absolute md:bottom-[7vh] z-10 text-white m-7'>
                        <h2 className={`${poppins.variable} font-Poppins text-lg`}>River, People, Culture</h2>
                        <h1 className={`${poppins.variable} font-Poppins text-3xl font-semibold my-3`}>The River and it’s People</h1>
                        <div className={`${poppins.variable} font-Poppins text-sm`}>
                            7th Aug, 2022
                        </div>
                    </div>
                    <ExploreImg className="absolute z-10 bottom-4 right-5" />
                    <Image className='max-w-[55vw]  w-[50rem] rounded-xl min-w-[20rem]' src={headerPortfolioImg} alt='head' />
                    <div className="absolute top-0 right-0 bottom-0 rounded-xl left-0 w-full h-full overflow-hidden transition duration-700 ease-in-out bg-gradient-to-t to-[#00000067] from-black opacity-90  hover:opacity-100"></div>

                </div>
                <div className="absolute top-0 right-0 bottom-0 rounded-xl left-0 w-full h-full min-w-[20rem] max-w-[60vw]  overflow-hidden bg-[#303030] -z-10 translate-x-3 translate-y-3"></div>
            </Link>
        </div>

    )
}

export default HeadCard