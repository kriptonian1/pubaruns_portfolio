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
        <div className={`${poppins.variable} font-Poppins pl-[5vw] pr-[5vw] pt-[19vh]`}>

            <div className='flex items-center justify-between'>
                <HeadLinesHome title={"PHOTO GALLERY"} />
                <Link className='flex text-sm underline items-center font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href="/work">
                    VIEW ALL<LinkLogo />
                </Link>
            </div>

            <div className='flex ml-12 pt-10 mb-9'>
                <div className='flex'>

                    <Image className='grayscale hover:grayscale-0 transition-all w-[40rem] ' width={2048} height={1268} src={photo1} alt="photo1" />
                    <div className={`  translate-y-[-4rem] z-[-1] translate-x-[-1.8rem] text-[84px] font-black text-[#333333]`}>
                        01.
                    </div>
                </div>

                <div>
                    <div>
                        <div className='w-[50vw] pt-[10vh] translate-x-[-7vw] text-3xl font-medium '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu fermentum dui.
                        </div>
                        <div className='pl-[4rem] text-lg  w-[50vw] pt-6' >
                            Suspendisse potenti. Nulla facilisi. Praesent vestibulum eros dolor, ut maximus lacus pulvinar in. Nam at pellentesque erat, quis viverra erat. Praesent faucibus nibh a urna vulputate porta. Integer ut fermentum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                    </div>

                    <div className='border border-[#000000] w-[10rem] ml-[60%] mt-7'></div>
                </div>


            </div>



        </div>
    )
}

export default PhotoSection