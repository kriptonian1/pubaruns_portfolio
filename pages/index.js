import Head from "next/head";
import { useEffect, useRef, useState } from "react";
// import Scrollbar from "smooth-scrollbar";
import { Hero, PhotoSection, ProjectSection, WorkSeen } from "../components";
import { DockerNav, Footer, MobileDockerNav } from "../components/common";
// import Scroll from "../lib/SmoothScroll";

export default function Home() {
  // const [isVisible, setIsVisible] = useState(false);

  let ref = useRef(null);

  // useEffect(() => {

  //   const handleScroll = () => {
  //     // Check if the user has scrolled past a certain point
  //     if (window.scrollY > 100) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }console.log(window.scrollY);
  //   };

  //   // Add the event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // let options = {
  //   damping: 0.07,
  // };

  // useEffect(() => {
  //   Scrollbar.init(ref, options);
  //   console.log(ref);
  // });

  return (
    <div className="overflow-x-hidden">
      {/* <Scroll /> */}
      <Head>
        {/* metadata locale */}
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:locale" content="en_US" />

        {/* metadat title */}
        <title>Pubarun Basu</title>
        <meta property="og:title" content="Pubarun Basu" />
        <meta property="twitter:title" content="Pubarun Basu" />

        {/* metadat url */}
        <meta property="og:url" content="https://pubarunbasu.com/" />
        <meta property="twitter:url" content="https://pubarunbasu.com/" />

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

      <div>
        <Hero />
        <WorkSeen />
        <PhotoSection />
        <ProjectSection />
      </div>
      <DockerNav isVisible={true} />
      <MobileDockerNav isVisible={true} />

      <Footer />
    </div>
  );
}
