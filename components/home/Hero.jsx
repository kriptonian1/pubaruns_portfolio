import React from 'react'
import { Montserrat, Poppins } from '@next/font/google'
import { ArrowLinkIcon, BirlaAww, ForbsLogo, ForbTag, heroCamera, IndicaAww, SonyAww, Thinstar } from './assets'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../common'

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
    <div>
      <Navbar />

      <a
        href="https://www.forbes.com/profile/pubarun-basu/"
        rel="noreferrer"
        target={"_blank"}
        className="lg:block hidden"
      >
        <ForbTag className="right-0 bottom-[10vh] fixed" />
      </a>

      {/* Sidebar social */}
      <div className="lg:flex hidden flex-col gap-5 items-center h-[1vh]  absolute top-[10rem] left-0 transform-gpu">
        <div className="border border-[#333333] absolute pr-[10rem] z-[-10rem] w-[12rem] h-0 transform -rotate-90"></div>
        <div className="flex items-center flex-col gap-[6rem] px-[3vw] py-[3vh]  bg-[#DCDCDC] z-[1]">
          <div className="transform -rotate-90 bg-[#DCDCDC] pr-5">FORBES</div>
          <div className="transform -rotate-90">FACEBOOK</div>
          <div className="transform -rotate-90">INSTAGRAM</div>
        </div>
        <div>
          <Thinstar />
        </div>
      </div>

      {/* content main desktop */}
      <div className="lg:flex hidden flex-col space-y-10">
        <div className="flex justify-center items-center">
          <div
            className={` ${montserrat.variable} text-[#333333] pl-[15vw] pr-[10vw] font-Montserrat  pt-[13vh] z-[50rem]`}
          >
            <div className="">
              <div className="xl:text-5xl md:text-4xl">Hello,</div>
              <div className=" md:text-7xl font-medium">I am Pubarun.</div>
            </div>

            <div
              className={`${poppins.variable} font-Poppins w-[30vw] text-xl font-medium text-black pt-7`}
            >
              I am a young photographer documenting the coexistence of people, culture, and environment.
            </div>
          </div>

          <Image
            src={heroCamera}
            alt="hero"
            priority
            className="sm:w-[10vm] md:w-[20rem] lg:w-[30vw] translate-y-[5rem]"
            draggable={false}
            quality={50}
          />
        </div>

        <div className="flex items-baseline m-9 gap-[5vw] pl-[18vw]">
          <SonyAww className="w-36" />
          <BirlaAww className="w-48" />
          <IndicaAww className="w-40" />

          <Link href="/about">
            <div className="flex space-x-2 text-sm font-semibold pb-9 hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150">
              <span className="border-b-2  border-[#222222]"> CHECK ALL</span>
              <ArrowLinkIcon />
            </div>
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className="flex lg:hidden flex-col space-y-10 px-2">
        <div className="flex flex-col justify-end  relative pb-12">
          <div className='basis-1 justify-end flex w-full items-end '>
            <Image
              src={heroCamera}
              alt="hero"
              priority
              className="w-48 sm:w-72 translate-y-8 translate-x-2"
              draggable={false}
            />
          </div>


          <div className={` ${montserrat.variable} w-full text-[#333333] absolute top-16  font-Montserrat  z-10`}>
            <div className="relative">
              <div className="text-3xl">Hello,</div>
              <div className="text-6xl font-medium text-[#333333]">I am <br /> Pubarun.</div>
            </div>
            <span class="absolute top-0 left-0 w-full h-full z-0"></span>
          </div>
        </div>
        <div
          className={`${poppins.variable} font-Poppins   text-[10px] font-medium text-black pt-7`}
        >
          I am a young photographer documenting the coexistence of people, culture, and environment.
        </div>

        <div className="flex items-center justify-center gap-5">
          <SonyAww />
          <BirlaAww />
          <IndicaAww />
        </div>
      </div>
    </div>
  );
}

export default Hero