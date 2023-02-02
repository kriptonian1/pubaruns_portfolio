import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getShortsFromSlug, getSlugs } from "../../../lib/shorts";
import { Navbar, MobileDockerNav, Footer, DockerNav } from '../../../components/common'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const { source } = getShortsFromSlug(slug);
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



export default function Shorts({ source }) {
    return (
        <>
            <Head>
                <title>{source.title} | Pubarun Basu</title>
                {/* metadata locale */}
                <meta property="og:locale" content="en_US" />
                <meta property="twitter:locale" content="en_US" />

                {/* metadat title */}
                <meta property="og:title" content={`${source.title} | Pubarun Basu`} />
                <meta property="twitter:title" content={`${source.title} | Pubarun Basu`} />

                {/* metadat url */}
                <meta property="og:url" content={`https://pubarunbasu.com/projects/${source.title}`} />
                <meta property="twitter:url" content={`https://pubarunbasu.com/projects/${source.title}`} />

                {/* metadat image */}
                <meta property='og:image' content={source.thumbnail} />
                <meta
                    property="twitter:image"
                    content={source.thumbnail}
                ></meta>

                {/* metadat type */}
                <meta property="og:type" content="website" />
                <meta property="twitter:type" content="website" />

                {/* metadata article */}
                <meta property="article:author" content="Pubarun Basu" />
                <meta property="article:published_time" content={source.meta_date} />
                <meta property="article:section" content="Photography" />
                <meta property="article:tag" content={source.meta_tag} />

                {/* metadat site name */}
                <meta property="og:site_name" content={`${source.title} | Pubarun Basu`} />
                <meta property="twitter:site_name" content={`${source.title} | Pubarun Basu`} />

                {/* metadat twitter card */}
                <meta property="twitter:card" content="summary_large_image" />

                {/* Description meatadata */}
                <meta
                    name="description"
                    content={source.meta_description}
                />
                <meta
                    property="og:description"
                    content={source.meta_description} />
                <meta
                    property="twitter:description"
                    content={source.meta_description} />

                {/* metadata twitter */}
                <meta name="twitter:creator" content="@pubarun_b" />
                <meta name="twitter:site" content="@pubarun_b" />
                <meta property="twitter:site:id" content="@pubarun_b"></meta>

                {/* metadata robots */}
                <meta name="robots" content="index, follow" />

                {/* metadata keywords */}
                <meta
                    property="og:keywords"
                    content={source.meta_keywords}
                />
            </Head>
            <Navbar isFixed={true} />

            <div className='text-center'>

                <h1 className='lg:text-4xl font-bold  text-[#181716] mt-9 pb-5'>{source.title}</h1>
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <div className={` ${source.images.length === 1 ? "lg:columns-1" : "lg:columns-4"} gap-5 lg:w-[1300px] mx-auto space-y-3 pb-20 `}>
                        {source?.images?.map((item, index) => (
                            <PhotoView key={index} src={`/shorts/${source.title}/${item}`}>
                                <div className='break-inside-avoid'>
                                    <Image
                                        width={1500} height={500}
                                        src={`/shorts/${source.title}/${item}`} loading={'lazy'} alt="featured_image" className='rounded-md drop-shadow-2xl cursor-grab px-10 lg:px-0' />
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>

            <MobileDockerNav isVisible={true} />
            <DockerNav isVisible={true} />
            <Footer />

        </>
    )
}