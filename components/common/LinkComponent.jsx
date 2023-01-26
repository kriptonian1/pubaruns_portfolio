import Link from 'next/link'
import React from 'react'
import { LinkLogo } from '../home/assets'

const LinkComponent = ({ linkText, link }) => {
  return (

    <a className='flex text-sm underline items-center font-semibold hover:-translate-y-1 hover:scale-110 duration-700 transition ease-in-out delay-150' href={link} target="_blank" rel="noopener noreferrer">
      {linkText}<LinkLogo />
    </a>

  )
}

export default LinkComponent