import React, { useEffect } from 'react'
import { Montserrat, Poppins } from '@next/font/google'
import { ArrowLinkIcon, BirlaAww, ForbsLogo, ForbTag, heroCamera, IndicaAww, mobileAww, SonyAww, Thinstar } from './assets'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../common'
import gsap, { Back, Power3 } from 'gsap'
import SplitType from 'split-type'

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

  let heroImgRef = React.useRef(null);
  let heroTextRef1 = React.useRef(null);
  let heroTextRef2 = React.useRef(null);
  let heroTextRef3 = React.useRef(null);

  let awwRef = React.useRef(null);

  useEffect(
    () => {

      let textSplit1 = new SplitType(heroTextRef1)
      let chars1 = textSplit1.chars;

      let textSplit2 = new SplitType(heroTextRef2)
      let chars2 = textSplit2.chars;

      gsap.from(chars1, {
        stagger: 0.05,
        opacity: 1,
        duration: 0.7,
        y: 100,
        ease: Power3.easeInOut,
        delay: 0.5,
      })

      gsap.from(chars2, {
        stagger: 0.05,
        opacity: 1,
        duration: 0.7,
        y: 100,
        ease: Power3.easeInOut,
        delay: 0.5,
      })

      gsap.to(heroTextRef3,
        {
          opacity: 1,
          duration: 0.5,
          x: 0,
          ease: Power3.easeInOut,
          delay: 0.5,
        })


      gsap.to(heroImgRef,
        {
          opacity: 1,
          duration: 0.5,
          x: 0,
          ease: Power3.easeInOut,
          delay: 0.5,
        })

      gsap.to(awwRef,
        {
          opacity: 1,
          duration: 0.5,
          x: 0,
          ease: Power3.easeInOut,
          delay: 0.5,
        })
    },
    []
  )

  return (
    <div>
      <Navbar />

      <a
        href="https://www.forbes.com/profile/pubarun-basu/"
        rel="noreferrer"
        target={"_blank"}
        className="md:block hidden"
      >
        <ForbTag className="right-0 bottom-[10vh] absolute z-10" />
      </a>

      {/* Sidebar social */}
      <div className="md:flex hidden flex-col gap-5 items-center h-[1vh]  absolute top-[10rem] left-0 transform-gpu">
        <div className="border border-[#333333] absolute pr-[10rem] z-[-10rem] w-[12rem] h-0 transform -rotate-90"></div>
        <div className="flex items-center flex-col gap-[6rem] px-[3vw] py-[3vh]  bg-[#DCDCDC] z-[1]">
          <a href="https://twitter.com/pubarun_b" target="_blank" rel="noopener noreferrer">
            <div className="transform -rotate-90 bg-[#DCDCDC] pr-5">Twitter</div>
          </a>
          <a href="https://www.linkedin.com/in/pubarun/" target="_blank" rel="noopener noreferrer">
            <div className="transform -rotate-90">LinkedIn</div>
          </a>
          <a href="https://www.instagram.com/pubarun.basu/" target="_blank" rel="noopener noreferrer">
            <div className="transform -rotate-90">Instagram</div>
          </a>

        </div>
        <div>
          {/* <Thinstar /> */}
        </div>
      </div>

      {/* content main desktop */}
      <div className="lg:flex hidden flex-col space-y-10">
        <div className="flex justify-center items-center">
          <div
            className={` ${montserrat.variable} text-[#333333] pl-[15vw] pr-[10vw] font-Montserrat  pt-[13vh] z-[50rem]`}
          >
            <div className="">
              <div
                style={{ clipPath: 'polygon(0 0, 100% 1%, 100% 100%, 0% 100%)', }}
                ref={el => { heroTextRef1 = el }}
                className="xl:text-5xl md:text-4xl transition-all translate-y-[10px]">
                Hello,
              </div>
              <div
                style={{ clipPath: 'polygon(0 0, 100% 1%, 100% 100%, 0% 100%)', }}
                ref={el => { heroTextRef2 = el }}
                className=" md:text-7xl font-medium ">
                I am Pubarun.
              </div>
            </div>

            <div
              // style={{ clipPath: 'polygon(0 0, 100% 1%, 100% 100%, 0% 100%);', }}
              ref={el => { heroTextRef3 = el }}
              className={`${poppins.variable} font-Poppins w-[30vw] text-xl font-medium text-black pt-7 opacity-0`}
            >
              I am a young photographer documenting the coexistence of people, culture, and environment.
            </div>
          </div>

          <Image
            src={heroCamera}
            ref={el => { heroImgRef = el }}
            alt="hero"
            priority
            className="sm:w-[10vm] md:w-[20rem] lg:w-[30vw] translate-y-[5rem] opacity-0"
            draggable={false}
            quality={50}
          />
        </div>
        <div
          ref={el => { awwRef = el }}
          className="flex items-baseline m-9 gap-[5vw] pl-[18vw] opacity-0"
        >

          {/* <div className='lg:flex hidden gap-[5vw]'>
            <SonyAww />
            <BirlaAww />
            <IndicaAww />
          </div> */}



          <Image draggable={false} src={mobileAww} alt="mobile" className="" />

          <Link href="/work">
            <div className="flex space-x-2 text-sm font-semibold pb-9 hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150">
              <span className="border-b-2  border-[#222222]"> CHECK ALL</span>
              <ArrowLinkIcon />
            </div>
          </Link>
        </div>
      </div>

      {/* mobile */}
      <div className="flex lg:hidden flex-col space-y-10 px-2 md:px-[10vw]">
        <div className="flex flex-col justify-center  relative pb-12 md:pl-[15vw] md:pr-[10vw]">
          <div className='basis-1 justify-end flex w-full items-end '>
            <Image
              src={heroCamera}
              alt="hero"
              priority
              className="w-48 sm:w-72 translate-y-8 translate-x-2"
              draggable={false}
            />
          </div>


          <div className={` ${montserrat.variable} w-fit text-[#333333] absolute top-16  font-Montserrat  z-10`}>
            <div className="relative">
              <div className="text-3xl">Hello,</div>
              <div className="text-6xl font-medium text-[#333333]">I am <br /> Pubarun.</div>
            </div>
          </div>
        </div>
        <div
          className={`${poppins.variable} font-Poppins    text-base md:text-xl font-medium text-black pt-7`}
        >
          I am a young photographer documenting the coexistence of people, culture, and environment.
        </div>

        <div className="flex items-center justify-center gap-5">
          <SonyAww className="w-full" />
          <BirlaAww className="w-full" />
          <IndicaAww className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Hero