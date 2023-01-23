import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { projectThumb } from './assets'

const ProjectCard = ({ title, description, date, image, location, slug }) => {
    return (
        <div className="bg-white  h-auto  rounded-2xl shadow-none drop-shadow-lg transition duration-500 hover:shadow-xl">
            <Link href={`/projects/${slug}`}>
                <Image className="rounded-t-2xl" draggable={false} src={image} alt="" width={1920} height={1080} />
                <div className="m-5">
                    <div className="font-bold text-2xl pb-4">{title}</div>
                    <div className=" mt-6">
                        {description}
                    </div>
                    <div className='text-sm mt-3 pb-6'>
                        {date}
                    </div>
                    <div className='flex items-center text-xs'>
                        <svg className='' width="18" height="14" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9993 16.9999C14.916 16.9999 15.701 16.6733 16.3543 16.0199C17.0066 15.3677 17.3327 14.5833 17.3327 13.6666C17.3327 12.7499 17.0066 11.9649 16.3543 11.3116C15.701 10.6594 14.916 10.3333 13.9993 10.3333C13.0827 10.3333 12.2982 10.6594 11.646 11.3116C10.9927 11.9649 10.666 12.7499 10.666 13.6666C10.666 14.5833 10.9927 15.3677 11.646 16.0199C12.2982 16.6733 13.0827 16.9999 13.9993 16.9999ZM13.9993 33.0416C13.7771 33.0416 13.5549 32.9999 13.3327 32.9166C13.1105 32.8332 12.916 32.7221 12.7493 32.5833C8.69379 28.9999 5.66602 25.6738 3.66602 22.6049C1.66602 19.5349 0.666016 16.6666 0.666016 13.9999C0.666016 9.83325 2.00657 6.51381 4.68768 4.04158C7.36768 1.56936 10.4716 0.333252 13.9993 0.333252C17.5271 0.333252 20.631 1.56936 23.311 4.04158C25.9921 6.51381 27.3327 9.83325 27.3327 13.9999C27.3327 16.6666 26.3327 19.5349 24.3327 22.6049C22.3327 25.6738 19.3049 28.9999 15.2493 32.5833C15.0827 32.7221 14.8882 32.8332 14.666 32.9166C14.4438 32.9999 14.2216 33.0416 13.9993 33.0416Z" fill="#333333" />
                        </svg>
                        {location}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard