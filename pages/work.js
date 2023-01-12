import Head from 'next/head'
import React from 'react'
import { SideSection } from '../components'
import { DockerNav, Navbar } from '../components/common'

const work = () => {
  return (
    <>
        <Head>
            <title> Works and Featured on | Pubarun&lsquo;s Portfolio</title>
        </Head>
        <Navbar />
        <SideSection />
        <DockerNav isVisible={true}/>
    </>
  )
}

export default work