import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

/**
 * @description DockerNav is a component that is used to navigate between pages
 * @param {boolean} isVisible - This is a boolean that is used to show or hide the component 
 * @returns {JSX.Element} - Returns a JSX.Element
 */
const DockerNav = ({isVisible}) => {

    const route = useRouter()
    const currrentRoute = route.pathname;

    const highlightOnRoute = (isRoute) => {
        if(isRoute){
            return 'bg-[#DCDCDC] text-[#3D3D3D]'
        }
        else{
            return 'hover:bg-[#00000046]'
        }
    }

    return (
        <div className='flex justify-center '>
            <nav style={{ visibility: isVisible ? 'visible' : 'hidden' }} className={`fixed z-[999] items-center bottom-9 transition-all duration-200  ${isVisible?'opacity-100':'opacity-0'}  shadow-2xl flex gap-7 text-[#DCDCDC] bg-[#3e3e3ecc] border-[10px] backdrop-blur-sm px-[15px] py-[5px] border-[#0000001a] rounded-[20px]`}>
                <Link href='/'>
                    <div className={`${highlightOnRoute(currrentRoute === "/")} py-[10px] transition-all rounded-md  font-semibold  px-[10px]`}>
                        Home
                    </div>
                </Link>

                <Link href='/work'>
                    <div className={`${highlightOnRoute(currrentRoute === "/work")} py-[10px]  text-[] transition-all  font-semibold rounded-md  px-[10px]`}>
                        Work & Feature
                    </div>
                </Link>

                <Link href='/gallery'>
                    <div className={`${highlightOnRoute(currrentRoute === "/gallery")}  py-[10px] transition-all hover:bg-[#00000046]  rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                        Gallery
                    </div>
                </Link>

                <Link href='/store'>
                    <div className={`${highlightOnRoute(currrentRoute === '/store')} py-[10px] transition-all hover:bg-[#00000046] rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                        Store
                    </div>
                </Link>

                <Link href='/about'>
                    <div className={`${highlightOnRoute(currrentRoute === '/store')} py-[10px] transition-all hover:bg-[#00000046] rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                        About Me
                    </div>
                </Link>

            </nav>
        </div>
    )
}

export default DockerNav