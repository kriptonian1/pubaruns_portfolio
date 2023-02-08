import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HeadLinesHome } from '../common'
import { BBC_logo, Forbes_Logo, Goethe_Logo, LinkLogo, NatGeo_Logo, SonyWPO_Logo, Thehindu_Logo } from './assets'

const WorkSeen = () => {

    const work = [
        Forbes_Logo,
        NatGeo_Logo,
        Thehindu_Logo,
        Goethe_Logo,
        BBC_logo,
        SonyWPO_Logo
    ]

    return (
        <div className='lg:pl-[5vw] lg:pr-[5vw] pt-[19vh]'>

            <div className='flex items-center justify-between'>
                <HeadLinesHome title={"WORKS SEEN & FEATURED ON"} />
                <Link className='lg:flex hidden text-sm underline items-center font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href="/work">
                    VIEW ALL<LinkLogo />
                </Link>
            </div>


            <div className='grid lg:gap-y-9 gap-2 grid-cols-3 grid-rows-2 m-5 mt-8 lg:mx-[12vw] lg:my-[7vh] items-center'>
                {work.map((item, index) => {
                    return (
                        <Image draggable={false} key={index} src={item} alt={`${item} Pubarun`} />
                    )
                })}

            </div>
        </div>
    )
}

export default WorkSeen