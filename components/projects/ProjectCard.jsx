import Image from 'next/image'
import React from 'react'
import { projectThumb } from './assets'

const ProjectCard = ({title, description, date, image}) => {
    return (
        <div className="bg-white md:w-[25vw] h-auto  rounded-2xl shadow-none transition duration-500 hover:shadow-xl">
            <Image className="rounded-t-2xl" src={image} alt="" />
            <div className="m-6 ">
                <div className="font-bold text-2xl pb-4">{title}</div>
                <div className="font-semibold mt-6">
                    {description}
                </div>
                <div className='text-sm mt-3 pb-6'>
                   {date}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard