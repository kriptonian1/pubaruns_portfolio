import Link from 'next/link'
import React from 'react'
import { HeadLinesHome } from '../common'
import { headerPortfolioImg, projectThumb, projectThumb1, projectThumb2 } from '../projects/assets'
import { LinkLogo } from './assets'
import ProjectHeroCard from './ProjectHeroCard'

const ProjectSection = () => {
    return (
        <div className='lg:px-[5vw]'>
            <div className='flex items-center justify-between'>
                <HeadLinesHome title={"PROJECTS"} />
                <Link className='lg:flex hidden text-sm underline items-center font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href="/projects">
                    VIEW ALL<LinkLogo />
                </Link>
            </div>

            <div className='flex space-x-8 m-3 mt-[76px] mb-[76px] w-[95vw] h-[70vw] lg:h-[40rem] md:space-x-[10vh] overflow-y-hidden overflow-x-scroll'>
                <ProjectHeroCard name={"The River and its People"} img={headerPortfolioImg} link={"/projects/The River and its People"} description={"A Young Boy's Connection to the River of Life"} date={"2016 - Present"} place={"Kolkata, West Bengal"}/>
                <ProjectHeroCard name={"Wangala : The Drummer's Offering to Saljong"} link={"/projects/Wangala _ The Drummer_s Offering to Saljong"} img={projectThumb} description={"Documenting the Garo tribe's Vibrant Tribute to their Sun Deity"} date={"November, 2022"} place={"Garo Hills, Meghalaya, India"}/>
                <ProjectHeroCard name={"In The Name Of God"} img={projectThumb1} link={"/projects/In the Name of God"} description={"Rediscovering the Road to Freedom of the Ramnamis"} date={"July, 2022"} place={"Chhattisgarh, India"}/>
                <ProjectHeroCard name={"The Great Pilgrimage"} img={projectThumb2} link={"/projects/The Great Pilgrimage"} description={"The Warkaris' Quest to Spiritual Enlightenment"} date={"July, 2022"} place={"Maharashtra, India"}/>
            </div>

        </div>
    )
}

export default ProjectSection