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
                        <p className=' text-white font-Poppins'>{source.date}</p>
                        <p className=' text-white font-Poppins'>{source.location_Name}</p>
                    </div>
                </div>
            </div>
            <div className='p-10 flex flex-row container mx-auto justify-between items-start'>
                <div className='basis-3/5   text-black p-10 pt-16 '>
                    <div className='border-l-4 border-black px-10' >
                        <p className=' font-Montserrat font-semibold text-6xl pr-40'>{source.quote}</p>
                        <p className=' font-Poppins font-normal mt-5 text-xl'>{source.subquote}</p>
                    </div>
                    <div className='pt-24'>
                        <h1 className='text-3xl font-Poppins font-semibold pb-5'>THEMES</h1>
                        <div className='ml-5'>
                            {
                                source.theme.map((item, index) => (
                                    <li className='font-Poppins font-normal text-2xl' key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                ))

                            }
                        </div>
                        <div className='border border-[#000000] h-1 bg-black mt-12 w-[10vw] ml-[1rem] mb-16' />

                        <p className='text-2xl italic font-Poppins '>Commissioned by  <span className='font-bold not-italic hover:underline-offset-2 underline cursor-pointer' onClick={
                            () => {
                                window.open(source.commissioned_link, '_blank')
                            }

                        }>{source.commissioned_by}</span></p>
                    </div>

                </div>

                <div className='basis-2/5'>
                    <img src={source.featuredimage} alt="featured_image" className='rounded-md drop-shadow-2xl' />

                </div>

            </div>
            {
                source.category.map((item, index) => (
                    <>
                    </>
                ))
            }
            <div className='p-10 flex flex-col container mx-auto justify-center items-center'>
                <h1>{source.category[0].title}</h1>
                <div className='border border-[#393939]  mt-12 w-[30vw] ml-[1rem] mb-16' />
                <div>
                    <p className='text-2xl font-Poppins text-center px-10 font-normal'>{source.category[0].description}</p>
                </div>
                <div className='border border-[#393939]  mt-12 w-[30vw] ml-[1rem] mb-16' />

                <PhotoProvider>
                    <div className="columns-2 gap-3 w-[1000px] mx-auto space-y-3 pb-28">
                        {source.category[0].image.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <div className='break-inside-avoid'>
                                    <img src={item} />
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>

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