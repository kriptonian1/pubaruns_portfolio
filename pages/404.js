import Image from 'next/image'
import { ErrorPic } from '../public/ErrorPic.svg'
import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#DCDCDC]">
      <h1 className="text-9xl font-extrabold text-[#333333] tracking-widest">
        Error
      </h1>
      <Image src={ErrorPic} alt="hero" className="md:w-[20rem] lg:w-[30vw]" />
      <Link href='/'>
        <div className='py-[10px]  text-[#ffffff] transition-all  font-semibold rounded-md bg-[#333333] hover:bg-[#00000046] px-[10px]'>
            Back to Home Page
        </div>
      </Link>
    </main>
  );
}

export default Custom404;