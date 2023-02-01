import React, { useState, useEffect } from "react";
import { DockerNav, Navbar, MobileDockerNav } from "../../components/common";
// import { getPaths } from "../lib/gallery";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";

import GalleryDatas from './data.json'
import Head from "next/head";


const Gallery = () => {

    const [mainData, setMainData] = useState(GalleryDatas)
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

    const GalleryData = [
        '/projects/assets/01_The Flow of Civilization.jpg',
        '/projects/In the Name of God/01_Marks of Resistance.jpg',
        '/projects/In the Name of God/02_Symbols.jpg',
        '/projects/In the Name of God/03_Reflections.jpg',
        '/projects/In the Name of God/04_The Upasak.jpg',
        '/projects/In the Name of God/05_Tales of Revolution.jpg',
        '/projects/In the Name of God/06_The Holy Scriptures.jpg',
        '/projects/In the Name of God/07_Vigour.jpg',
        '/projects/In the Name of God/08_People of the Sacred Land.jpg',
        '/projects/In the Name of God/09_The Veil of Resistance.jpg',
        '/projects/In the Name of God/10_The New Tomorrow.jpg',
        '/projects/In the Name of God/11_The Advent of Modernity.jpg',
        '/projects/In the Name of God/12_Omnipresence.jpg',
        '/projects/In the Name of God/Additional/13_The God in our Universe.jpg',
        '/projects/In the Name of God/Additional/Footer Image.jpg',
        '/projects/In the Name of God/Additional/Header Image.jpg',
        '/projects/In the Name of God/Additional/Main.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/_PB07985.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/_PB08195cc.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/_PB08431.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/Header Image.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/Main alternative_.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/Main.jpg',
        '/projects/Shekhawati - The Cradle of Life/Additional/PB0_5189.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/01_Of Valour and Pride.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/02_The Eyes of a Mother.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/03_Home is Where the Heart is.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/04_Unbound.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/05_Hereditary.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/06_Light and Darkness.jpg',
        '/projects/Shekhawati - The Cradle of Life/Chronicles of a Tale Foretold/07_Tale as Old as Time.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/01_The Imperial Symmetry.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/02_Window to the World_.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/03_Patterns Up Above.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/04_The Golden Point_.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/05_Inside Out.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/06_Duality.jpg',
        '/projects/Shekhawati - The Cradle of Life/Wrinkles in Time/07_At the Gates of Heaven.jpg',
        '/projects/The Great Pilgrimage/01_In the Blue Haze.jpg',
        '/projects/The Great Pilgrimage/02_Ceremonies and Contemplations.jpg',
        '/projects/The Great Pilgrimage/03_Conversations in Between.jpg',
        '/projects/The Great Pilgrimage/04_The Endless Journey.jpg',
        '/projects/The Great Pilgrimage/05_The Motif of a Floating Saree.jpg',
        '/projects/The Great Pilgrimage/06_In a Moment of Soliloquy.jpg',
        '/projects/The Great Pilgrimage/07_Faith.jpg',
        '/projects/The Great Pilgrimage/08_The One Above All.jpg',
        '/projects/The Great Pilgrimage/09_Songs of Devotion.jpg',
        '/projects/The Great Pilgrimage/10_Eyes of Wonder.jpg',
        '/projects/The Great Pilgrimage/11_The Joy of Life.jpg',
        '/projects/The Great Pilgrimage/12_Wind of Change.jpg',
        '/projects/The Great Pilgrimage/13_Unity.jpg',
        '/projects/The Great Pilgrimage/14_The Hero Among Us.jpg',
        '/projects/The Great Pilgrimage/15_The Mythological Horse of Ringan.jpg',
        '/projects/The Great Pilgrimage/16_Dancers of the Earth.jpg',
        '/projects/The Great Pilgrimage/17_The Gate to Infinity.jpg',
        '/projects/The Great Pilgrimage/Additional/Footer Image.jpg',
        '/projects/The Great Pilgrimage/Additional/Footer Image(1).jpg',
        '/projects/The Great Pilgrimage/Additional/Header Image.jpg',
        '/projects/The Great Pilgrimage/Additional/Header Image(1).jpg',
        '/projects/The Great Pilgrimage/Additional/Main.jpg',
        '/projects/The Great Pilgrimage/Additional/PBS07975.jpg',
        '/projects/The Great Pilgrimage/Additional/Preamble.jpg',
        '/projects/The Great Pilgrimage/Additional/Project Logo.jpg',
        '/projects/The River and its People/01_The Flow of Civilization.jpg',
        '/projects/The River and its People/02_Perspectives of Emotions.jpg',
        '/projects/The River and its People/03.jpg',
        '/projects/The River and its People/04.jpg',
        '/projects/The River and its People/05.jpg',
        '/projects/The River and its People/06.jpg',
        '/projects/The River and its People/07_Gently flows the river.jpg',
        '/projects/The River and its People/08_.jpg',
        '/projects/The River and its People/09_Loopholes in Time.jpg',
        '/projects/The River and its People/10_The Shape of Water.jpg',
        '/projects/The River and its People/11_Call of the River.jpg',
        '/projects/The River and its People/12_The Immortal Remains.jpg',
        '/projects/The River and its People/13.jpg',
        '/projects/The River and its People/14.jpg',
        '/projects/The River and its People/15_.jpg',
    ]

    const scaleonSelect = (select) => {
        if (select) {
            return "transition ease-in-out delay-150 scale-150 duration-300";
        }

        return "transition ease-in-out delay-150  hover:scale-110 duration-300";

    }

    const yearOnSelect = (select) => {
        if (select) {
            return "border-l-4 pl-2  border-black";
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

            <div className="mx-[7.5vw] grid grid-cols-5 gap-5">
                <div className="col-span-4 flex flex-col ">
                    {/* category */}
                    <div className="flex flex-row justify-start items-center gap-10 pt-6 overflow-y-hidden">
                        {
                            Category.map(
                                (item, index) => {
                                    return (
                                        <div key={index} className="flex flex-row justify-center items-center cursor-pointer">
                                            <div className={`${categoryOnSelect(category === item)} text-black capitalize font-Montserrat text-xl leading-[29.26px] `}
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

                    <div className="flex flex-row justify-center pt-10">
                        <div className="basis-1/4">
                            <div className="flex flex-col justify-start items-start gap-8 py-10 pl-10">
                                {
                                    Year.reverse().map((item, index) => {
                                        return (
                                            <div key={index} className={`${scaleonSelect(year === item)}flex flex-row justify-start items-start cursor-pointer`}>
                                                <div className={`${yearOnSelect(year === item)} text-black capitalize font-Poppins text-3xl leading-[29.26px] font-normal `}
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
                        <div className="basis-3/4 h-[500px]">
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
                                                        className='rounded-md drop-shadow-2xl cursor-grab !w-full !h-[50vh]'
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
                <div className="col-span-1  !overflow-y-scroll lg:h-[87vh] ">
                    <div className="flex flex-col justify-center items-center gap-5 px-5 snap-y ">
                        {sidestage &&
                            sidestage?.map((item, index) => {
                                return (
                                    <div key={index} className='break-inside-avoid snap-center'
                                        onClick={
                                            (e) => {
                                                setMainstage(item)
                                            }
                                        }
                                    >
                                        <Image src={item.path}
                                            draggable={false}
                                            alt="featured_image"
                                            className='rounded-md drop-shadow-2xl cursor-pointer !w-full !h-full hover:grayscale-0 transition-all grayscale'
                                            width={500} height={500} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div >
            <DockerNav isVisible={true} />
            <MobileDockerNav isVisible={true} />
        </div >
    );
};

export default Gallery;
