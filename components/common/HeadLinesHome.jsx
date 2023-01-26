import React from 'react'
import { Montserrat } from '@next/font/google'
import { PlainStar } from './assets'


const montserrat = Montserrat({
  subsets: ['latin'],
  variants: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const HeadLinesHome = ({ title }) => {
  return (
    <div className={`${montserrat.variable} text-[#373737] font-Montserrat uppercase font-bold flex items-center`}>
      <PlainStar className="m-2" />
      {title}
      <div className='border border-[#000000] h-0 w-[10vw] ml-[1rem]'></div>
    </div>
  )
}

export default HeadLinesHome