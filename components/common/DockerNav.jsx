import Link from 'next/link'
import React from 'react'

const DockerNav = ({isVisible}) => {
    return (
        <div className='flex justify-center '>
            <nav style={{ visibility: isVisible ? 'visible' : 'hidden' }} className={`fixed items-center bottom-9 transition-all duration-200  ${isVisible?'opacity-100':'opacity-0'}  shadow-2xl flex gap-7 text-[#DCDCDC] bg-[#3e3e3ecc] border-[10px] backdrop-blur-sm px-[15px] py-[5px] border-[#0000001a] rounded-[20px]`}>
                <Link href='/'>
                    <div className='py-[10px] transition-all rounded-md text-[#3D3D3D] font-semibold bg-[#DCDCDC] px-[10px]'>
                        Home
                    </div>
                </Link>

                <Link href='/work'>
                    <div className='py-[10px]  text-[] transition-all  font-semibold rounded-md hover:bg-[#00000046] px-[10px]'>
                        Work & Feature
                    </div>
                </Link>

                <Link href='/gallery'>
                    <div className='py-[10px] transition-all hover:bg-[#00000046]  rounded-md text-[] font-semibold bg-[] px-[10px]'>
                        Gallery
                    </div>
                </Link>

                <Link href='/store'>
                    <div className='py-[10px] transition-all hover:bg-[#00000046] rounded-md text-[] font-semibold bg-[] px-[10px]'>
                        Store
                    </div>
                </Link>

                <Link href='/about'>
                    <div className='py-[10px] transition-all hover:bg-[#00000046] rounded-md text-[] font-semibold bg-[] px-[10px]'>
                        About Me
                    </div>
                </Link>

            </nav>
        </div>
    )
}

export default DockerNav