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
                    <h1 className='text-8xl leading-[117px] font-black text-white font-Bodoni'>{source.title}</h1>
                    <p className='text-xl italic text-white font-Poppins'>A photo Series by <span className='not-italic text-4xl pl-2 text-slate-300'>Pubarun Basu</span></p>
                    <p className=' text-white font-Poppins'>{source.date}</p>
                </div>
                <div className='absolute bottom-1 p-10  w-full'>
                    <div className='flex flex-row justify-between gap-10'>
                        <div>
                            <p className='text-white font-Poppins'>Image goes here :)</p>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <svg width="18" height="14" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9993 16.9999C14.916 16.9999 15.701 16.6733 16.3543 16.0199C17.0066 15.3677 17.3327 14.5833 17.3327 13.6666C17.3327 12.7499 17.0066 11.9649 16.3543 11.3116C15.701 10.6594 14.916 10.3333 13.9993 10.3333C13.0827 10.3333 12.2982 10.6594 11.646 11.3116C10.9927 11.9649 10.666 12.7499 10.666 13.6666C10.666 14.5833 10.9927 15.3677 11.646 16.0199C12.2982 16.6733 13.0827 16.9999 13.9993 16.9999ZM13.9993 33.0416C13.7771 33.0416 13.5549 32.9999 13.3327 32.9166C13.1105 32.8332 12.916 32.7221 12.7493 32.5833C8.69379 28.9999 5.66602 25.6738 3.66602 22.6049C1.66602 19.5349 0.666016 16.6666 0.666016 13.9999C0.666016 9.83325 2.00657 6.51381 4.68768 4.04158C7.36768 1.56936 10.4716 0.333252 13.9993 0.333252C17.5271 0.333252 20.631 1.56936 23.311 4.04158C25.9921 6.51381 27.3327 9.83325 27.3327 13.9999C27.3327 16.6666 26.3327 19.5349 24.3327 22.6049C22.3327 25.6738 19.3049 28.9999 15.2493 32.5833C15.0827 32.7221 14.8882 32.8332 14.666 32.9166C14.4438 32.9999 14.2216 33.0416 13.9993 33.0416Z" fill="#FAFAFA" />
                            </svg>
                            <p onClick={
                                () => {
                                    window.open(source.location_link, '_blank')
                                }
                            } className='ml-1 text-white font-Poppins underline hover:underline-offset-4 underline-offset-2 cursor-pointer'>{source.location_Name}</p>
                        </div>
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
                    <div className='p-10 flex flex-col container mx-auto justify-center items-center' key={index}>
                        <h1 className='font-Bodoni text-6xl font-black leading-10'>{item.title}</h1>
                        <div className='border border-[#393939]  mt-12 w-[30vw] ml-[1rem] mb-16' />
                        <div>
                            <p className='text-2xl font-Poppins text-center px-10 font-normal'>{item.description}</p>
                        </div>
                        <div className='border border-[#393939]  mt-12 w-[30vw] ml-[1rem] mb-16' />

                        <PhotoProvider>
                            <div className="lg:columns-2 gap-3 lg:w-[1000px] mx-auto space-y-3 pb-20">
                                {item.image.map((item, index) => (
                                    <PhotoView key={index} src={item}>
                                        <div className='break-inside-avoid'>
                                            <img src={item} alt="featured_image" className='rounded-md drop-shadow-2xl' />
                                        </div>
                                    </PhotoView>
                                ))}
                            </div>
                        </PhotoProvider>

                    </div>
                ))
            }
            {/* <div className='p-10 flex flex-col container mx-auto justify-center items-center'>
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
            </div> */}
            {/* <div className='container mx-auto -green-900 pt-10 text-white'>
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
            </div> */}
            <PhotoProvider>
                <div className="columns-1 gap-3 lg:w-[1000px] mx-auto space-y-3 pb-20">
                    <PhotoView src={source.footerimage}>
                        <div className='break-inside-avoid'>
                            <img src={source.footerimage} alt="Footer Image" className='rounded-md drop-shadow-2xl' />
                        </div>
                    </PhotoView>
                </div>
            </PhotoProvider>
        </div>
    )
}

export default EachProject