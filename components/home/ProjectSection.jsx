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
                <ProjectHeroCard name={"The River and its People"} img={headerPortfolioImg} description={"A Young Boy's Connection to the River of Life"} date={"2016 - Present"} place={"Kolkata, West Bengal"}/>
                <ProjectHeroCard name={"Wangala : The Drummer's Offering to Saljong"} img={projectThumb} description={"Documenting the Garo tribe's Vibrant Tribute to their Sun Deity"} date={"November 2022"} place={"Garo Hills, Meghalaya, India"}/>
                <ProjectHeroCard name={"The River and its People"} img={projectThumb1} description={"A Young Boy's Connection to the River of Life"} date={"2016 - Present"} place={"Kolkata, West Bengal"}/>
                <ProjectHeroCard name={"The River and its People"} img={projectThumb2} description={"A Young Boy's Connection to the River of Life"} date={"2016 - Present"} place={"Kolkata, West Bengal"}/>
            </div>

        </div>
    )
}

export default ProjectSection