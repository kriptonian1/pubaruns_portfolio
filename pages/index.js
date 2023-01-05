import Head from "next/head";
import { useEffect, useState } from "react";
import { Hero, PhotoSection, WorkSeen } from "../components";
import { DockerNav } from "../components/common";

export default function Home() {
  


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain point
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Head>
        <title>Pubarun&lsquo;s Portfolio</title>
      </Head>

      <Hero />
      <WorkSeen />
      <PhotoSection />
      {isVisible ? <DockerNav isVisible={isVisible}/> : null}
    </div>
  );
}
