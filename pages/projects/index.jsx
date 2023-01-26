import React from 'react'
import { DockerNav, Navbar } from '../../components/common'
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
                {/* metadata locale */}
                <meta property="og:locale" content="en_US" />
                <meta property="twitter:locale" content="en_US" />

                {/* metadat title */}
                <title>Projects | Pubarun Basu</title>
                <meta property="og:title" content="Projects | Pubarun Basu" />
                <meta property="twitter:title" content="Projects | Pubarun Basu" />

                {/* metadat url */}
                <meta property="og:url" content="https://www.pubarunbasu.com/projects" />
                <meta property="twitter:url" content="https://www.pubarunbasu.com/projects" />

                {/* metadat image */}
                <meta
                    property="og:image"
                    content="https://i.postimg.cc/rwQLq4kx/try-6-1.png"
                ></meta>
                <meta
                    property="twitter:image"
                    content="https://i.postimg.cc/rwQLq4kx/try-6-1.png"
                ></meta>

                {/* metadat type */}
                <meta property="og:type" content="website" />
                <meta property="twitter:type" content="website" />

                {/* metadat site name */}
                <meta property="og:site_name" content="Projects | Pubarun Basu" />
                <meta property="twitter:site_name" content="Projects | Pubarun Basu" />

                {/* metadat twitter card */}
                <meta property="twitter:card" content="summary_large_image" />

                {/* Description meatadata */}
                <meta
                    name="description"
                    content="Explore the impactful projects of professional photographer Pubarun. Discover the diverse range of themes and subjects that Pubarun has dedicated his lens to, including people and culture, society, the interconnectedness of man and nature, human history, traditions and rituals, tribal communities, coexistence, conservation, environment, spirituality, sustainability, mindfulness, inclusion, leadership, and education. Gain insight into the important issues of our time through Pubarun's thought-provoking and visually stunning documentation of real-world issues and stories of change. Visit the projects page to learn more about Pubarun's ongoing and past projects and see the powerful impact of his photography."
                />
                <meta
                    property="og:description"
                    content="Explore the impactful projects of professional photographer Pubarun. Discover the diverse range of themes and subjects that Pubarun has dedicated his lens to, including people and culture, society, the interconnectedness of man and nature, human history, traditions and rituals, tribal communities, coexistence, conservation, environment, spirituality, sustainability, mindfulness, inclusion, leadership, and education. Gain insight into the important issues of our time through Pubarun's thought-provoking and visually stunning documentation of real-world issues and stories of change. Visit the projects page to learn more about Pubarun's ongoing and past projects and see the powerful impact of his photography."
                />
                <meta
                    property="twitter:description"
                    content="Explore the impactful projects of professional photographer Pubarun. Discover the diverse range of themes and subjects that Pubarun has dedicated his lens to, including people and culture, society, the interconnectedness of man and nature, human history, traditions and rituals, tribal communities, coexistence, conservation, environment, spirituality, sustainability, mindfulness, inclusion, leadership, and education. Gain insight into the important issues of our time through Pubarun's thought-provoking and visually stunning documentation of real-world issues and stories of change. Visit the projects page to learn more about Pubarun's ongoing and past projects and see the powerful impact of his photography."
                />

                {/* metadata twitter */}
                <meta name="twitter:creator" content="@pubarun_b" />
                <meta name="twitter:site" content="@pubarun_b" />
                <meta property="twitter:site:id" content="@pubarun_b"></meta>

                {/* metadata robots */}
                <meta name="robots" content="index, follow" />

                {/* metadata keywords */}
                <meta
                    property="og:keywords"
                    content="photography projects, professional photography projects, people and culture photography projects, society photography projects, interconnectedness of man and nature photography projects, human history photography projects, traditions and rituals photography projects, tribal communities photography projects, coexistence photography projects, conservation photography projects, environmental photography projects, spirituality photography projects, sustainability photography projects, mindfulness photography projects, inclusion photography projects, leadership photography projects, education photography projects, human experience photography projects, pubarun photographer projects, documentary photography projects, photojournalism projects, street photography projects, portrait photography projects, lifestyle photography projects, travel photography projects, conceptual photography projects, monochrome photography projects, real-world issues photography, stories of change photography, powerful impact photography"
                />
            </Head>
            <Navbar isFixed={true} />
            <div className={` ${poppins.variable} font-Poppins mx-[7.5vw]`}>
                <div className='text-6xl font-bold  text-[#181716] mt-9'>
                    Projects
                    <div className='w-[35vh] md:w-[80vh] border-[5px] border-[#181716] translate-y-[4vh] md:translate-y-[2.5vw]'></div>
                </div>

                <div className='flex flex-col  md:flex-row mt-[76px] mb-[76px] md:space-x-[10vh]'>
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
        </div>
    )
}

export default projects