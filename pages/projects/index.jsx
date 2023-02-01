import React from 'react'
import { DockerNav, Navbar, MobileDockerNav, Footer } from '../../components/common'
import { Poppins } from '@next/font/google'
import { HeadCard, ProjectCard, ShortsSection } from '../../components/projects'
import Head from 'next/head'
import Data from '../../data/Project/index.json'
import { projectThumb, projectThumb1, projectThumb2, projectThumb3 } from '../../components/projects/assets'

const poppins = Poppins(
    {
        subsets: ['latin'],
        variants: ['400', '500', '600', '700', '800', '900'],
        weight: '400',
        variable: '--font-poppins',
    }
)

const projects = () => {


    return (
        <div>
            <Head>
                <title>Projects | Pubarun Basu</title>
            </Head>
            <Navbar isFixed={true} />
            <div className={` ${poppins.variable} font-Poppins mx-[7.5vw]`}>
                <div className='text-6xl font-bold  text-[#181716] mt-9'>
                    Projects
                    <div className='w-[35vh] md:w-[80vh] border-[5px] border-[#181716] translate-y-[4vh] md:translate-y-[2.5vw]'></div>
                </div>

                <div className='flex flex-col md:flex-row mt-[76px] mb-[76px] md:space-x-[10vh]'>
                    <HeadCard />
                    <ShortsSection />
                </div>

                <div className='mb-20 grid md:flex columns-4 md:columns-4 gap-6'>
                    {
                        Data.map((item, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                    description={item.description}
                                    image={item.image}
                                    location={item.location}
                                    slug={item.slug}
                                />
                            )
                        })
                    }

                </div>


            </div>
            <DockerNav isVisible={true} />
            <MobileDockerNav isVisible={true} />
            <Footer />
        </div>
    )
}

export default projects