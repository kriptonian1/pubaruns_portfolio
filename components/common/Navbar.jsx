import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-[3vw]'>
      <Link href={"/"}>
        <div className='text-[#333333] text-2xl font-semibold py-6 px-[5vw]'>PUBARUN BASU</div>
      </Link>

      <div className='border border-[#828282]'></div>
    </div>
  )

}

export default Navbar