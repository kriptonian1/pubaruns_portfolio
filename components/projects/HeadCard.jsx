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
                        <h1 className={`${poppins.variable} font-Poppins text-3xl font-semibold my-3`}>The River and its People</h1>
                        <h2 className={`${poppins.variable} font-Poppins text-lg my-3`}>A Young Boy&#39;s Connection to the River of Life</h2>
                        <div>
                            <div className={`${poppins.variable} font-Poppins text-base mt-7 pl-[17px] font-semibold`}>
                                2016 - Present
                            </div>
                            <h2 className={`${poppins.variable} text-white font-Poppins flex items-center font-semibold`}>
                                <svg width="18" height="14" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9993 16.9999C14.916 16.9999 15.701 16.6733 16.3543 16.0199C17.0066 15.3677 17.3327 14.5833 17.3327 13.6666C17.3327 12.7499 17.0066 11.9649 16.3543 11.3116C15.701 10.6594 14.916 10.3333 13.9993 10.3333C13.0827 10.3333 12.2982 10.6594 11.646 11.3116C10.9927 11.9649 10.666 12.7499 10.666 13.6666C10.666 14.5833 10.9927 15.3677 11.646 16.0199C12.2982 16.6733 13.0827 16.9999 13.9993 16.9999ZM13.9993 33.0416C13.7771 33.0416 13.5549 32.9999 13.3327 32.9166C13.1105 32.8332 12.916 32.7221 12.7493 32.5833C8.69379 28.9999 5.66602 25.6738 3.66602 22.6049C1.66602 19.5349 0.666016 16.6666 0.666016 13.9999C0.666016 9.83325 2.00657 6.51381 4.68768 4.04158C7.36768 1.56936 10.4716 0.333252 13.9993 0.333252C17.5271 0.333252 20.631 1.56936 23.311 4.04158C25.9921 6.51381 27.3327 9.83325 27.3327 13.9999C27.3327 16.6666 26.3327 19.5349 24.3327 22.6049C22.3327 25.6738 19.3049 28.9999 15.2493 32.5833C15.0827 32.7221 14.8882 32.8332 14.666 32.9166C14.4438 32.9999 14.2216 33.0416 13.9993 33.0416Z" fill="#FAFAFA" />
                                </svg>
                                Kolkata, West Bengal
                            </h2>
                        </div>


                    </div>
                    <h2 className={`${poppins.variable} text-white font-Poppins flex items-center absolute bottom-4 left-4 text-base z-10`}>
                        <svg width="18" height="14" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9993 16.9999C14.916 16.9999 15.701 16.6733 16.3543 16.0199C17.0066 15.3677 17.3327 14.5833 17.3327 13.6666C17.3327 12.7499 17.0066 11.9649 16.3543 11.3116C15.701 10.6594 14.916 10.3333 13.9993 10.3333C13.0827 10.3333 12.2982 10.6594 11.646 11.3116C10.9927 11.9649 10.666 12.7499 10.666 13.6666C10.666 14.5833 10.9927 15.3677 11.646 16.0199C12.2982 16.6733 13.0827 16.9999 13.9993 16.9999ZM13.9993 33.0416C13.7771 33.0416 13.5549 32.9999 13.3327 32.9166C13.1105 32.8332 12.916 32.7221 12.7493 32.5833C8.69379 28.9999 5.66602 25.6738 3.66602 22.6049C1.66602 19.5349 0.666016 16.6666 0.666016 13.9999C0.666016 9.83325 2.00657 6.51381 4.68768 4.04158C7.36768 1.56936 10.4716 0.333252 13.9993 0.333252C17.5271 0.333252 20.631 1.56936 23.311 4.04158C25.9921 6.51381 27.3327 9.83325 27.3327 13.9999C27.3327 16.6666 26.3327 19.5349 24.3327 22.6049C22.3327 25.6738 19.3049 28.9999 15.2493 32.5833C15.0827 32.7221 14.8882 32.8332 14.666 32.9166C14.4438 32.9999 14.2216 33.0416 13.9993 33.0416Z" fill="#FAFAFA" />
                        </svg>
                        Kolkata, West Bengal
                    </h2>
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