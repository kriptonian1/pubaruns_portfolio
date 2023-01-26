import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Humburger, Facebook, Instagram, Twitter } from './assets'
import { Prata } from '@next/font/google'

const prata = Prata({
  subsets: ['latin'],
  weight: ["400"],
  variants: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-prata',
})


const Navbar = ({ isFixed }) => {

  // get the current path name without the "/"
  let currentPath = (useRouter().pathname).split("/")[1]

  return (
    <div className={`${() => { return (isFixed ? "fixed" : "") }} px-[3vw] `}>
      <div className='flex text-[#333333] text-2xl font-semibold py-6 px-[5vw] justify-between items-center'>
        <Link href={"/"} >PUBARUN BASU</Link>
        <div className='lg:flex hidden flex-row justify-center items-center text-xl space-x-6'>
          <div className={`${prata.variable} font-Prata font-light`}>
            {/* making the First char Uppercase */}
            {currentPath === "" ? "Home" : (currentPath).charAt(0).toUpperCase() + currentPath.slice(1)}
          </div>
          <Humburger />
        </div>
        <div className='flex lg:hidden  flex-row justify-center items-center text-xl space-x-6'>
          <Facebook className="!w-5" />
          <Instagram />
          <Twitter />
        </div>

      </div>

      <div className='border border-[#828282]'></div>
    </div>
  )

}

export default Navbar