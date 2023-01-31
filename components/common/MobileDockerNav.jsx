import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

/**
 * @description MobileDockerNav is a component that is used to navigate between pages
 * @param {boolean} isVisible - This is a boolean that is used to show or hide the component 
 * @returns {JSX.Element} - Returns a JSX.Element
 */
const MobileDockerNav = ({ isVisible }) => {

    const route = useRouter()
    let currrentRoute = route.pathname;
    // if the current route is / make it Home
    if (currrentRoute === '/') {
        currrentRoute = 'Home'
    }
    // if the current route is /projects/[slug] get the slug from the path
    // else if (currrentRoute.includes('/projects/')) {
    //     currrentRoute = currrentRoute.split('/')[2]
    // }
    // // if the current route is /work get the # value from the route 
    // else if (currrentRoute.includes('/work')) {
    //     currrentRoute = currrentRoute.split('#')[1]
    // }
    else {
        currrentRoute = currrentRoute.slice(1)
    }
    const [ToggleMenu, setToggleMenu] = useState(false);

    const highlightOnRoute = (isRoute) => {
        if (isRoute) {
            return 'bg-[#DCDCDC] text-[#3D3D3D]'
        }
        else {
            return 'hover:bg-[#00000046]'
        }
    }

    return (
        <div className='flex lg:hidden justify-center '>
            <nav style={{ visibility: isVisible ? 'visible' : 'hidden' }} className={`fixed z-[999] flex justify-evenly items-center bottom-9 transition-all duration-200 ${isVisible ? 'opacity-100 visible' : 'hidden opacity-0'}  shadow-2xl flex gap-7 text-[#DCDCDC] bg-[#3e3e3ecc] border-[10px] backdrop-blur-sm md:px-[15px] px-2 md:py-[5px] border-[#0000001a] md:w-[40rem] w-[15rem] md:rounded-[20px] rounded-[20px]`}>
                <div>
                    <h1 className='capitalize py-[10px] transition-all rounded-md duration-500  font-semibold  px-[10px]'>{currrentRoute}</h1>
                </div>
                <div className='relative'>
                    <div className='cursor-pointer' onClick={
                        () => {
                            setToggleMenu(!ToggleMenu)
                        }
                    }>
                        <div className='flex justify-center items-center'>
                            <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.5" y1="1" x2="32.5" y2="1" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" />
                                <line x1="1.5" y1="10" x2="32.5" y2="10" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" />
                                <line x1="1.5" y1="19" x2="32.5" y2="19" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <div className={`absolute bottom-16 w-36 ${ToggleMenu ? 'visible' : 'hidden'} py-2 -left-11`}>
                        <div className='flex flex-col gap-2 justify-center items-center text-center text-white  bg-[#3e3e3ecc] border-[10px] rounded-md backdrop-blur-sm md:px-[15px] px-2 md:py-[5px] border-[#0000001a]'>
                            <Link href='/'>
                                <div className={`${highlightOnRoute(currrentRoute === "/")} py-[10px] transition-all rounded-md duration-500  font-semibold  px-[10px]`}>
                                    Home
                                </div>
                            </Link>

                            <Link href='/work'>
                                <div className={`${highlightOnRoute(currrentRoute === "/work")} py-[10px]  text-[] transition-all duration-500 font-semibold rounded-md  px-[10px]`}>
                                    Work & Feature
                                </div>
                            </Link>

                            <Link href='/gallery'>
                                <div className={`${highlightOnRoute(currrentRoute === "/gallery")}  py-[10px] transition-all duration-500  rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                                    Gallery
                                </div>
                            </Link>

                            <Link href='/projects'>
                                <div className={`${highlightOnRoute(currrentRoute === '/projects')} py-[10px] transition-all duration-500 rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                                    Projects
                                </div>
                            </Link>

                            <Link href='/about'>
                                <div className={`${highlightOnRoute(currrentRoute === '/about')} py-[10px] transition-all duration-500 rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                                    About Me
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <Link href='/'>
                    <div className={`${highlightOnRoute(currrentRoute === "/")} py-[10px] transition-all rounded-md duration-500  font-semibold  px-[10px]`}>
                        Home
                    </div>
                </Link>

                <Link href='/work'>
                    <div className={`${highlightOnRoute(currrentRoute === "/work")} py-[10px]  text-[] transition-all duration-500 font-semibold rounded-md  px-[10px]`}>
                        Work & Feature
                    </div>
                </Link>

                <Link href='/gallery'>
                    <div className={`${highlightOnRoute(currrentRoute === "/gallery")}  py-[10px] transition-all duration-500  rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                        Gallery
                    </div>
                </Link>

                <Link href='/projects'>
                    <div className={`${highlightOnRoute(currrentRoute === '/projects')} py-[10px] transition-all duration-500 rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                        Projects
                    </div>
                </Link>

                <Link href='/about'>
                    <div className={`${highlightOnRoute(currrentRoute === '/about')} py-[10px] transition-all duration-500 rounded-md text-[] font-semibold bg-[] px-[10px]`}>
                        About Me
                    </div>
                </Link> */}

            </nav >
        </div >
    )
}

export default MobileDockerNav