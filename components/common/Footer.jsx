import Link from 'next/link'
import React from 'react'
import { Logo } from './assets'

const Footer = () => {
    return (
        <footer className='px-[3vw] mb-16'>
            <div className='border border-[#828282]'></div>

            <div className='mt-[3vh] flex justify-evenly'>
                <Logo />
                <section>
                    <h2 className='font-semibold text-xl'>SOCIALS</h2>
                    <div className='grid'>
                        <a href="https://twitter.com/pubarun_b" target="_blank" rel="noopener noreferrer">TWITTER</a>
                        <a href="https://www.instagram.com/pubarun.basu/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
                        <a href="https://www.linkedin.com/in/pubarun/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                        <a href="https://www.facebook.com/pubarun/" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
                        <a href="mailto:basupubarun11@gmail.com" target="_blank" rel="noopener noreferrer">GMAIL</a>
                    </div>
                </section>

                <section>
                    <h2 className='font-semibold text-xl'>PAGES</h2>
                    <div className='grid'>
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