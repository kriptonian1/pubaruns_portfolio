import Link from 'next/link'
import React from 'react'

const Navbar = ({isFixed}) => {
  return (
    <div className={`${() => { return (isFixed ? "fixed": "")}} px-[3vw] `}>
      <div className='text-[#333333] text-2xl font-semibold py-6 px-[5vw]'>
        <Link href={"/"} >PUBARUN BASU</Link>
      </div>

      <div className='border border-[#828282]'></div>
    </div>
  )

}

export default Navbar