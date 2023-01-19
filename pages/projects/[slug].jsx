import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { getProjectFromSlug, getSlugs } from "../../lib/project";
import { Navbar } from '../../components/common'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


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


            <div className='conatiner  bg-black mt-10 mx-16 rounded-md relative'>

                <Image

                    src={source.image}
                    alt="Picture of the author"
                    width={1920}
                    height={1080}
                    className='object-cover w-full lg:h-[30rem] opacity-50 rounded-md bg-center '
                />

                <div className='absolute inset-0 text-center flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-4xl font-bold text-white font-Prata'>{source.title}</h1>
                    <p className='text-xl italic text-white font-Poppins'>A photo Series by <span className='not-italic text-4xl pl-2 text-slate-300'>Pubarun Basu</span></p>
                </div>
                <div className='absolute bottom-1 p-10 flex justify-between items-center'>
                    <div className='flex justify-around items-end'>
                        <p className='text-Normal text-white font-Poppins'>{source.date}</p>
                        <p className='text-Normal text-white font-Poppins'>{source.location_Name}</p>
                    </div>
                </div>


            </div>

            <div className='container mx-auto -green-900 pt-10 text-white'>
                <PhotoProvider>
                    <div className="columns-3 gap-3 w-[1000px] mx-auto space-y-3 pb-28">
                        {source.images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <div className='break-inside-avoid'>
                                    <img src={item} alt="" width={1920} height={1808} />
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>

            </div>

        </div>
    )
}

export default EachProject