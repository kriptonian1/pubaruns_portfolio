import Link from 'next/link'
import React from 'react'
import { Logo } from './assets'

const Footer = () => {
    return (
        <footer className='px-[3vw] mb-36'>
            <div className='border border-[#828282]'></div>

            <div className='mt-[3vh] flex justify-evenly'>
                <Logo className={"hidden md:flex"}/>
                <section className='m-6'>
                    <h2 className='font-semibold md:text-xl'>SOCIALS</h2>
                    <div className='grid text-sm md:text-base'>
                        <a href="https://twitter.com/pubarun_b" target="_blank" rel="noopener noreferrer">TWITTER</a>
                        <a href="https://www.instagram.com/pubarun.basu/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        <a href="https://www.linkedin.com/in/pubarun/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                        <a href="https://www.facebook.com/pubarun/" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                        <a href="mailto:basupubarun11@gmail.com" target="_blank" rel="noopener noreferrer">GMAIL</a>
                    </div>
                </section>

                <section className='m-6'>
                    <h2 className='font-semibold md:text-xl'>PAGES</h2>
                    <div className='grid text-sm md:text-base'>
                        <Link href={"/"}>HOME</Link>
                        <Link href={"/projects"}>PROJECTS</Link>
                        <Link href={"/gallery"}>PHOTO-GALLERY</Link>
                        <Link href={"/work"}>FEATURES & WORK</Link>
                        <Link href={"/about"}>ABOUT</Link>
                    </div>
                </section>
            </div>


        </footer>
    )
}

export default Footer