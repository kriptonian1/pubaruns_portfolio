import React from 'react'
import { Navbar } from '../components/common'
import { Poppins } from '@next/font/google'
import { HeadCard, ProjectCard, ShortsSection } from '../components/projects'
import Head from 'next/head'
import { projectThumb, projectThumb1, projectThumb2, projectThumb3 } from '../components/projects/assets'

const poppins = Poppins(
  {
    subsets: ['latin'],
    variants: ['400', '500', '600', '700', '800', '900'],
    weight: '400',
    variable: '--font-poppins',
  }
)

const projects = () => {

  const data = [
    {
      title: "Wangala : The Drummer's Offering to Saljong",
      date: "7th Aug, 2022",
      description: "The photo series portrays the journey to freedom for the Ramnamis, a lower caste tribe in India, and the permanent tattoos ....",
      image: projectThumb
    },
    {
      title: "In the Name of God",
      date: "7th Aug, 2022",
      description: "The photo series portrays the journey to freedom for the Ramnamis, a lower caste tribe in India, and the permanent tattoos ....",
      image: projectThumb1
    },
    {
      title: "The Great Pilgrimage",
      date: "7th Aug, 2022",
      description: "The photo series portrays the journey to freedom for the Ramnamis, a lower caste tribe in India, and the permanent tattoos ....",
      image: projectThumb2
    },{
      title: "Shekhawati - The Cradle of Life",
      date: "7th Aug, 2022",
      description: "The photo series portrays the journey to freedom for the Ramnamis, a lower caste tribe in India, and the permanent tattoos ....",
      image: projectThumb3
    },
  ]

  return (
    <div>
      <Head>
        <title>Projects | Pubarun Basu</title>
      </Head>
      <Navbar isFixed={true} />
      <div className={` ${poppins.variable} font-Poppins mx-[7.5vw]`}>
        <div className='text-6xl font-bold underline text-[#181716] mt-9'>
          Projects
        </div>

        <div className='flex flex-col md:flex-row mt-[76px] mb-[76px] md:space-x-[10vh]'>
          <HeadCard />
          <ShortsSection />
        </div>

        <div className='mb-20 grid md:flex columns-4 md:columns-4 gap-6'>
          {
            data.map((item, index) => {
              return (
                <ProjectCard key={index} title={item.title} date={item.date} description={item.description} image={item.image} />
              )
            })
          }

        </div>


      </div>
    </div>
  )
}

export default projects