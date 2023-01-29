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

    const photoSectionRef = React.useRef(null);
    const scrollRef = React.useRef(null);

    return (
        <div className={`${poppins.variable} font-Poppins lg:pl-[5vw] lg:pr-[5vw] lg:pt-[19vh] pt-[9vh]  overflow-hidden`}>

            <div className='flex items-center justify-between'>
                <HeadLinesHome title={"PHOTO GALLERY"} />
                <Link className='lg:flex hidden text-sm underline items-center font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href="/gallery">
                    VIEW ALL<LinkLogo />
                </Link>
            </div>

            <div className='flex ml-12 pt-10 mb-9 flex-col relative '>
                <div className='flex basis-3/4 mb-[8vh]'>

                    <Image draggable={false} className='grayscale hover:grayscale-0 transition-all lg:w-[60vw]' width={2048} height={1268} src={photo1} alt="photo1" />
                    <div className={`  lg:translate-y-[-4rem] translate-y-[-2rem] z-[-1] lg:translate-x-[-1.8rem] translate-x-[-3.2rem] lg:text-[84px] text-[40px] font-black text-[#333333]`}>
                        01.
                    </div>
                </div>

            </div>

            <div className='flex mr-14 pt-10 mb-9 flex-col relative lg:items-end'>
                <div className='flex basis-3/4 mb-[8vh]'>
                    <div className={`lg:translate-y-[-5.4rem] translate-y-[-2rem] z-[-1] lg:translate-x-[7.3rem] translate-x-[1.2rem] lg:text-[84px] text-[40px] font-black text-[#333333]`}>
                        02.
                    </div>
                    <Image draggable={false} className='grayscale hover:grayscale-0 transition-all lg:w-[60vw]' width={2048} height={1268} src={photo1} alt="photo1" />

                </div>

            </div>

            <div className='flex ml-12 pt-10 mb-9 flex-col relative '>
                <div className='flex basis-3/4 mb-[8vh]'>

                    <Image draggable={false} className='grayscale hover:grayscale-0 transition-all lg:w-[60vw]' width={2048} height={1268} src={photo1} alt="photo1" />
                    <div className={`  lg:translate-y-[-4rem] translate-y-[-2rem] z-[-1] lg:translate-x-[-1.8rem] translate-x-[-1.2rem] lg:text-[84px] text-[40px] font-black text-[#333333]`}>
                        03.
                    </div>
                </div>

            </div>



        </div>
    )
}

export default PhotoSection