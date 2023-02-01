import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { DockerNav, Navbar, MobileDockerNav } from "../components/common";
import pubarunImage from "../public/pubarun.png"



function About() {
    return (
        <>
            <Head>
                {/* metadata locale */}
                <meta property="og:locale" content="en_US" />
                <meta property="twitter:locale" content="en_US" />
                <title>About me | Pubarun Basu</title>
                {/* metadata title */}
                <meta property="og:title" content="About me | Pubarun Basu" />
                <meta property="twitter:title" content="About me | Pubarun Basu" />
                {/* metadat url */}
                <meta property="og:url" content="https://pubarunbasu.com/about" />
                <meta property="twitter:url" content="https://pubarunbasu.com/about" />
                {/* metadat image */}
                <meta
                    property="og:image"
                    content="https://i.postimg.cc/1tpLG6rw/Black-White-Modern-Photography-Tips-You-Tube-Thumbnail-1-1.png"
                ></meta>
                <meta
                    property="twitter:image"
                    content="https://i.postimg.cc/1tpLG6rw/Black-White-Modern-Photography-Tips-You-Tube-Thumbnail-1-1.png"
                ></meta>

                {/* metadat type */}
                <meta property="og:type" content="website" />
                <meta property="twitter:type" content="website" />

                {/* metadat site name */}
                <meta property="og:site_name" content="Pubarun Basu" />
                <meta property="twitter:site_name" content="Pubarun Basu" />

                {/* metadat twitter card */}
                <meta property="twitter:card" content="summary_large_image" />

                {/* Description meatadata */}
                <meta
                    name="description"
                    content="I'm Pubarun, a young photographer documenting stories of change through coexistence of people, culture, and environment. My work spans documentary, photojournalism and more. I focus on tribal communities, conservation and more. I capture the beauty and complexity of human experience and shed light on significant issues."
                />
                <meta
                    property="og:description"
                    content="I'm Pubarun, a young photographer documenting stories of change through coexistence of people, culture, and environment. My work spans documentary, photojournalism and more. I focus on tribal communities, conservation and more. I capture the beauty and complexity of human experience and shed light on significant issues."
                />
                <meta
                    property="twitter:description"
                    content="I'm Pubarun, a young photographer documenting stories of change through coexistence of people, culture, and environment. My work spans documentary, photojournalism and more. I focus on tribal communities, conservation and more. I capture the beauty and complexity of human experience and shed light on significant issues."
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
                    content="pubarun photography portfolio, pubarun photographer, pubarun photography portfolio, professional photography portfolio, first Indian photographer to be featured on Forbes 30 under 30, Forbes 30 under 30, Forbes 30 under 30 photographer, Forbes 30 under 30 2022, award-winning photography, documentary photography, photojournalism, street photography, portrait photography, lifestyle photography, travel photography, conceptual photography, monochrome photography, people and culture photography, society photography, interconnectedness of man and nature photography, human history photography, traditions and rituals photography, tribal communities photography, coexistence photography, conservation photography, environmental photography, spirituality photography, sustainability photography, mindfulness photography, inclusion photography, leadership photography, education photography, human experience photography, renowned professional photographer, documentary photography portfolio, photojournalism portfolio, street photography portfolio, portrait photography portfolio, lifestyle photography portfolio, travel photography portfolio, conceptual photography portfolio, monochrome photography portfolio, people and culture photography portfolio, society photography portfolio, interconnectedness of man and nature photography portfolio, human history photography portfolio, traditions and rituals photography portfolio, tribal communities photography portfolio, coexistence photography portfolio, conservation photography portfolio, environmental photography portfolio, spirituality photography portfolio, sustainability photography portfolio, mindfulness photography portfolio, inclusion photography portfolio, leadership photography portfolio, education photography portfolio, human experience photography portfolio, "
                />
            </Head>
            <Navbar isFixed={true} />
            <div className="flex flex-row justify-between px-10 items-center h-[100vh]">
                <p className="p-10 h-[100vh] lg:w-[50vw] mt-10 first-letter:text-5xl antialiased">
                    Art and life are one and the same to me. I have indulged in the world of creativity from a tender age, and ever since,
                    my days have been decorated with a myriad of artistic wonders. My explorations have paved the way towards a beautiful
                    journey where I have found my voice through my primary mode of expression - photography. Following the footsteps of my
                    father, I have ventured out in search of remarkable stories of people and places to portray through my lens. My adventures
                    have led me to believe that my identity as an artist is derived from the art of storytelling.
                    <br />
                    <br />
                    Growing up along the river Ganga, I have shared a deep cathartic connection to my natural environment. The river has shaped
                    the course of my life, and more so, my photographic journey. I have wandered around the river almost every day, looking to catch
                    a glimpse of the magic in the mundane – the extraordinary in the ordinary. In my daily explorations, I have come to witness how the
                    river and its inhabitants are intertwined in an impeccable bond of spiritual coexistence. Little did I know that this small discovery
                    would lay down the foundation for my artistic vision henceforth.
                    <br />
                    <br />
                    My work has been centred around the themes of cultural diversity, environmental conservation, and social inclusion. Currently working
                    with the National Geographic Society and The Nature Conservancy on a Freshwater Conservation Project, I have been highlighting the challenges
                    faced by the Ganga ecosystem, in an effort to inspire action amongst stakeholders and drive sustainable community-based solutions towards the
                    preservation of the river. Subsequently, I have been creating an archive of the rapidly vanishing ancient indigenous traditions in nature and
                    their relevance in the era of climate change. My narratives have been built around the shared experiences of the people whom I have photographed.
                    In the process, I have acted as a mere facilitator – bringing to light stories of change from marginalized tribal communities. As a result, my vision
                    as a leader has been a unique amalgamation of cross-cultural perspectives and values guiding me toward a brighter future.
                    <br />
                    <br />
                    I take great pride in the talent hosted by our generation, and ardently believe that leadership is facilitated through the catharsis of great minds.
                    With this in mind, I have created <a href="https://www.instagram.com/the.soil.society/" target={'_blank'} rel={"noreferrer"} className="text-green-800">The Soil Society</a>  – a global community of young changemakers working towards the protection of the planet and its people.
                    Through various immersive workshops and collaborative ventures, I have been working relentlessly to empower the youth to use their artistic vision towards
                    a greater cause. The world needs young activists, now more than ever. It is only through our shared efforts that we can create a society where nature and
                    mankind can thrive in eternal harmony.



                </p>
                <div className="lg:flex hidden justify-center items-center">
                    <Image src={pubarunImage} draggable={false} className={"fixed w-[35vw] drop-shadow-lg bottom-0 right-0"} alt="PUBARUN BASU" width={500} height={500} />
                </div>

            </div>
            <DockerNav isVisible={true} />
            <MobileDockerNav isVisible={true} />
        </>
    )
}

export default About