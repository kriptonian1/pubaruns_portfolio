import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Poppins } from '@next/font/google'
import { HeadLinesHome } from '../common'
import { LinkLogo, photo1 } from './assets'

const poppins = Poppins(
    {
        subsets: ['latin'],
        variants: ['400', '500', '600', '700', '800', '900'],
        weight: ['400', '500', '600', '700', '800', '900'],
        variable: '--font-poppins',
    }
)

const PhotoSection = () => {
    return (
        <div className={`${poppins.variable} font-Poppins lg:pl-[5vw] lg:pr-[5vw] lg:pt-[19vh] pt-[9vh]`}>

            <div className='flex items-center justify-between'>
                <HeadLinesHome title={"PHOTO GALLERY"} />
                <Link className='lg:flex hidden text-sm underline items-center font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href="/gallery">
                    VIEW ALL<LinkLogo />
                </Link>
            </div>

            <div className='flex ml-12 pt-10 mb-9 relative '>
                <div className='flex basis-3/4'>

                    <Image draggable={false} className='grayscale hover:grayscale-0 transition-all lg:w-[40rem]' width={2048} height={1268} src={photo1} alt="photo1" />
                    <div className={`  lg:translate-y-[-4rem] translate-y-[-2rem] z-[-1] lg:translate-x-[-1.8rem] translate-x-[-1.2rem] lg:text-[84px] text-[40px] font-black text-[#333333]`}>
                        01.
                    </div>
                </div>

                <div className='md:flex flex-col hidden'>
                    <div>
                        <div className='lg:w-[50vw] pt-[10vh] pl-6 lg:text-3xl font-medium '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu fermentum dui.
                        </div>
                        <div className='pl-[4rem] text-lg  w-[50vw] pt-6' >
                            Suspendisse potenti. Nulla facilisi. Praesent vestibulum eros dolor, ut maximus lacus pulvinar in. Nam at pellentesque erat, quis viverra erat. Praesent faucibus nibh a urna vulputate porta. Integer ut fermentum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>
                    <div className='lg:flex hidden border border-[#000000] w-[10rem] ml-[60%] mt-7'></div>
                </div>


                <div className='md:hidden absolute left-5 top-7 z-10'>
                    <div>
                        <div className=' pt-[10vh] pl-[50px] lg:text-3xl font-semibold '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu fermentum dui.
                        </div>
                    </div>
                    <div className=' sm:pt-20 pt-16 text-black font-Poppins font-normal' >
                        Born along the shores of the river, I have stood witness to its majestic flow that transcends the boundaries of our material world. The river has rejuvenated my existence, allowing me to explore its depths and rediscover the histories of civilizations past. But I am not alone.
                    </div>
                </div>
            </div>



        </div>
    )
}

export default PhotoSection