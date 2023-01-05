import React from 'react'
import Navbar from '../Navbar'
import { Montserrat, Poppins } from '@next/font/google'
import { ArrowLinkIcon, BirlaAww, ForbsLogo, ForbTag, heroCamera, IndicaAww, SonyAww, Thinstar } from './assets'
import Image from 'next/image'
import Link from 'next/link'

const montserrat = Montserrat({
  subsets: ['latin'],
  variants: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const poppins = Poppins(
  {
    subsets: ['latin'],
    variants: ['400', '500', '600', '700', '800', '900'],
    weight: '400',
    variable: '--font-poppins',
  }
)

const Hero = () => {

  return (
    <div >
      <Navbar />

      {/* Sidebar social */}
      <div className='flex flex-col gap-5 items-center h-[1vh]  absolute top-[10rem] left-0 transform-gpu'>
        <div className='border border-[#333333] absolute pr-[10rem] z-[-10rem] w-[12rem] h-0 transform -rotate-90'></div>
        <div className='flex items-center flex-col gap-[6rem] px-[3vw] py-[3vh]  bg-[#DCDCDC] z-[1]'>
          <div className='transform -rotate-90 bg-[#DCDCDC] pr-5'>FORBES</div>
          <div className='transform -rotate-90'>FACEBOOK</div>
          <div className='transform -rotate-90'>INSTAGRAM</div>

        </div>
        <div>
          <Thinstar />
        </div>
      </div>

      {/* content main */}
      <div className='flex flex-col space-y-10'>
        <div className='flex justify-center'>
          <div className={` ${montserrat.variable} text-[#333333] pl-[15vw] pr-[10vw] font-Montserrat  pt-[13vh] z-[50rem]`}>
            <div className=''>
              <div className='text-6xl'>
                Hello,
              </div>
              <div className='text-9xl font-medium'>
                I am Pubarun.
              </div>
            </div>

            <div className={`${poppins.variable} font-Poppins w-[30vw] text-xl font-medium text-black pt-7`}>
              I am a professional photographer dedicated to capturing the beauty and emotion of each moment.
            </div>
            

          </div>

          <Image src={heroCamera} alt='hero' className='md:w-[20rem] lg:w-[30vw]' />
        </div>

        <div className='flex items-baseline m-9 gap-[5vw] pl-[18vw]'>
          <SonyAww />
          <BirlaAww />
          <IndicaAww />

          <Link href='/about'>
            <div className='flex space-x-2 text-sm font-semibold pb-9 hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150'>
              <span className='border-b-2  border-[#222222]'> CHECK ALL</span>
              <ArrowLinkIcon />
            </div>
          </Link>


        </div>

      </div>



      <a href='https://www.forbes.com/profile/pubarun-basu/' rel="noreferrer" target={'_blank'} className='right-0 fixed translate-y-[-25vh]'>
        <ForbTag />
      </a>





    </div>
  )
}

export default Hero