import Link from 'next/link'
import React from 'react'
import { HeadLinesHome } from '../common'
import { LinkLogo } from './assets'

const PhotoSection = () => {
    return (
        <div className='pl-[5vw] pr-[5vw] pt-[19vh]'>

            <div className='flex items-center justify-between'>
                <HeadLinesHome title={"PHOTO GALLERY"} />
                <Link className='flex text-sm underline font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href="/work">
                    VIEW ALL<LinkLogo />
                </Link>
            </div>

        </div>
    )
}

export default PhotoSection