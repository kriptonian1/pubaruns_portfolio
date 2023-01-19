import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getProjectFromSlug, getSlugs } from "../../lib/project";
import { Navbar } from '../../components/common'


export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const { source } = getProjectFromSlug(slug);
    return {
        props: {
            source
        }
    };
};

export const getStaticPaths = async () => {
    const paths = getSlugs().map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};



function EachProject({ source }) {
    console.log(source);
    return (
        <div>
            <Head>
                <title>{source.title} | Pubarun Basu</title>
            </Head>
            <Navbar isFixed={true} />

            <div className='container mx-auto bg-green-900 '>
                <div className='container mx-auto'>
                    <Image
                        src={source.image}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <div>
                        <h1 className='text-4xl font-bold'>{source.title}</h1>
                        <p className='text-2xl'>{source.date}</p>
                        <p className='text-2xl'>{source.description}</p>
                        <p className='text-2xl'>{source.image}</p>
                        <p className='text-2xl'>{source.slug}</p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default EachProject