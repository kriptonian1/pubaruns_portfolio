import React, { useState, useEffect } from "react";
import { DockerNav, Navbar, MobileDockerNav } from "../../components/common";
// import { getPaths } from "../lib/gallery";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";

import GalleryDatas from './data.json'
import Head from "next/head";


const Gallery = () => {

    const [mainsatge, setMainstage] = useState()
    const [sidestage, setSidestage] = useState()
    const [year, setyear] = useState(2023)
    const [category, setcategory] = useState("Conceptual")


    const Year = [
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
    ]


    const Category = [
        "Conceptual",
        "Culture",
        "Daily Life",
        "Environment",
        "Monochrome",
        "Portraits"
    ]


    const scaleonSelect = (select) => {
        if (select) {
            return "transition ease-in-out delay-150 scale-150 duration-300";
        }

        return "transition ease-in-out delay-150  hover:scale-110 duration-300";

    }

    const yearOnSelect = (select) => {
        if (select) {
            return "lg:border-l-4 lg:border-b-0 border-b-2 lg:pl-2   border-black";
        }
        return "border-l-0";
    }
    const categoryOnSelect = (select) => {
        if (select) {
            return "font-bold";
        }
        return "no-underline";
    }

    useEffect(() => {
        // filter the main data with year and category and add them to mainstage

        const AllDATA = GalleryDatas.filter(
            (item) => {
                return item.year == year && item.category == category;
            }
        )
        setMainstage(AllDATA[0])
        setSidestage(AllDATA)

    }, [year, category,]);

    return (
        <div className="">
            <Head>
                {/* metadata locale */}
                <meta property="og:locale" content="en_US" />
                <meta property="twitter:locale" content="en_US" />

                {/* metadat title */}
                <title>Gallery | Pubarun Basu</title>
                <meta property="og:title" content="Gallery | Pubarun Basu" />
                <meta property="twitter:title" content="Gallery | Pubarun Basu" />

                {/* metadat url */}
                <meta property="og:url" content="https://www.pubarunbasu.com/gallery" />
                <meta property="twitter:url" content="https://www.pubarunbasu.com/gallery" />

                {/* metadat image */}
                <meta
                    property="og:image"
                    content="https://i.postimg.cc/Y9yzLMd5/Black-White-Modern-Photography-Tips-You-Tube-Thumbnail-4-1.png"
                ></meta>
                <meta
                    property="twitter:image"
                    content="https://i.postimg.cc/Y9yzLMd5/Black-White-Modern-Photography-Tips-You-Tube-Thumbnail-4-1.png"
                ></meta>

                {/* metadat type */}
                <meta property="og:type" content="website" />
                <meta property="twitter:type" content="website" />

                {/* metadat site name */}
                <meta property="og:site_name" content="Gallery | Pubarun Basu" />
                <meta property="twitter:site_name" content="Gallery | Pubarun Basu" />

                {/* metadat twitter card */}
                <meta property="twitter:card" content="summary_large_image" />

                {/* Description meatadata */}
                <meta
                    name="description"
                    content="Explore the breathtaking photography portfolio of Pubarun, a renowned professional photographer. View a diverse range of themes including documentary, photojournalism, street, portraits, lifestyle, travel, conceptual, and monochrome photography. Discover Pubarun's areas of focus including people and culture, society, the interconnectedness of man and nature, human history, traditions and rituals, tribal communities, coexistence, conservation, environment, spirituality, sustainability, mindfulness, inclusion, leadership, and education. Experience the beauty and complexity of the human experience through Pubarun's lens and gain insight into the important issues of our time. Visit the gallery now to see Pubarun's award-winning work."
                />
                <meta
                    property="og:description"
                    content="Explore the breathtaking photography portfolio of Pubarun, a renowned professional photographer. View a diverse range of themes including documentary, photojournalism, street, portraits, lifestyle, travel, conceptual, and monochrome photography. Discover Pubarun's areas of focus including people and culture, society, the interconnectedness of man and nature, human history, traditions and rituals, tribal communities, coexistence, conservation, environment, spirituality, sustainability, mindfulness, inclusion, leadership, and education. Experience the beauty and complexity of the human experience through Pubarun's lens and gain insight into the important issues of our time. Visit the gallery now to see Pubarun's award-winning work."
                />
                <meta
                    property="twitter:description"
                    content="Explore the breathtaking photography portfolio of Pubarun, a renowned professional photographer. View a diverse range of themes including documentary, photojournalism, street, portraits, lifestyle, travel, conceptual, and monochrome photography. Discover Pubarun's areas of focus including people and culture, society, the interconnectedness of man and nature, human history, traditions and rituals, tribal communities, coexistence, conservation, environment, spirituality, sustainability, mindfulness, inclusion, leadership, and education. Experience the beauty and complexity of the human experience through Pubarun's lens and gain insight into the important issues of our time. Visit the gallery now to see Pubarun's award-winning work."
                />

                {/* metadata twitter */}
                <meta name="twitter:creator" content="@pubarun_b" />
                <meta name="twitter:site" content="@pubarun_b" />
                <meta property="twitter:site:id" content="@pubarun_b"></meta>

                {/* metadata robots */}
                <meta name="robots" content="index, follow" />

                {/* metadata keywords */}
                <meta
                    property="og:keywords"
                    content="pubarun photographer gallery ,photography gallery, photo gallery, professional photography gallery, renowned photographer gallery, documentary photography gallery, photojournalism gallery, street photography gallery, portrait photography gallery, lifestyle photography gallery, travel photography gallery, conceptual photography gallery, monochrome photography gallery, people and culture photography gallery, society photography gallery, interconnectedness of man and nature photography gallery, human history photography gallery, traditions and rituals photography gallery, tribal communities photography gallery, coexistence photography gallery, conservation photography gallery, environmental photography gallery, spirituality photography gallery, sustainability photography gallery, mindfulness photography gallery, inclusion photography gallery, leadership photography gallery, education photography gallery, human experience photography gallery, award-winning photography gallery"
                />
            </Head>
            <Navbar />

            <div className="mx-[7.5vw] grid lg:grid-cols-5 grid-cols-1 gap-5">
                <div className="lg:col-span-4 col-span-5 flex flex-col ">
                    {/* category */}
                    <div className="flex flex-row justify-start items-center lg:gap-10 gap-5  pt-6 overflow-y-hidden !overflow-x-scroll">
                        {
                            Category.map(
                                (item, index) => {
                                    return (
                                        <div key={index} className="flex flex-row justify-center items-center cursor-pointer text-ellipsis min-w-fit">
                                            <div className={`${categoryOnSelect(category === item)} text-black text-ellipsis capitalize font-Montserrat lg:text-xl lg:leading-[29.26px] `}
                                                onClick={(e) => {
                                                    setcategory(
                                                        item
                                                    )
                                                }}
                                            >{item}</div>
                                        </div>
                                    )
                                }
                            )
                        }

                    </div>

                    <div className="flex flex-col lg:flex-row justify-center pt-10 ">
                        <div className="lg:basis-1/4 lg:!order-1 !order-2 overflow-x-scroll">
                            <div className="flex lg:flex-col justify-start items-start gap-8 py-10 pl-10">
                                {
                                    Year.reverse().map((item, index) => {
                                        return (
                                            <div key={index} className={`${scaleonSelect(year === item)}flex flex-row justify-start items-start cursor-pointer w-10`}>
                                                <div className={`${yearOnSelect(year === item)} text-black capitalize font-Poppins lg:text-3xl lg:leading-[29.26px] font-normal `}
                                                    onClick={(e) => {
                                                        setyear(
                                                            item
                                                        )
                                                    }}
                                                >{item}</div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                        {/* main picture */}
                        <div className="lg:basis-3/4 lg:h-[500px] min-h-[30vh] !order-1 lg:!order-2">
                            <div className="flex flex-col justify-center items-center">
                                {mainsatge &&
                                    <PhotoProvider
                                        speed={() => 800}
                                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                                    >
                                        {
                                            <PhotoView src={mainsatge?.path}>
                                                <div className='break-inside-avoid'>
                                                    <Image src={mainsatge?.path}
                                                        alt="featured_image"
                                                        draggable={false}
                                                        className='rounded-md drop-shadow-2xl cursor-zoom-in !w-full lg:h-[50vh] h-full'
                                                        width={500} height={500} />
                                                    <div className="flex justify-start items-start text-start w-full">
                                                        <p className="font-Poppins font-semibold text-base italic text-start">{mainsatge?.name}</p>
                                                    </div>
                                                </div>
                                            </PhotoView>
                                        }
                                    </PhotoProvider>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* gallery side bar */}
                <div className="lg:col-span-1 col-span-5 pb-28 lg:pb-0">
                    <div className="flex lg:flex-col overflow-scroll  lg:h-[87vh] ">
                        <div className="flex flex-row gap-5 lg:flex-col justify-center items-center lg:gap-5 lg:px-5">
                            {sidestage &&
                                sidestage?.map((item, index) => {
                                    return (
                                        <div key={index} className='break-inside-avoid snap-center w-40'
                                            onClick={
                                                (e) => {
                                                    setMainstage(item)
                                                }
                                            }
                                        >
                                            <Image src={item.path}
                                                draggable={false}
                                                alt="featured_image"
                                                className='rounded-md drop-shadow-2xl bg-cover cursor-pointer w-40 h-40 lg:w-full lg:h-auto hover:grayscale-0 transition-all grayscale'
                                                width={1000} height={1000} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >



            <DockerNav isVisible={true} />
            <MobileDockerNav isVisible={true} />
        </div >
    );
};

export default Gallery;
