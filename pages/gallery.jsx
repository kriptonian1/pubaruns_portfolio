import React from "react";
import { DockerNav, Navbar } from "../components/common";
import { getPaths } from "../lib/gallery";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";


export const getStaticProps = async () => {
  let source = getPaths();
  // get only first 10 element 
  source = source.slice(0, 30);
  // console.log(source);
  return {
    props: {
      source
    }
  };
};

const Gallery = ({ source }) => {
  return (
    <div>
      <Navbar />
      <div className="text-center py-28">
        <h1 className="text-6xl font-Bodoni">Gallery</h1>
        <PhotoProvider
          speed={() => 800}
          easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
        >
          <div className="lg:columns-3 gap-5 lg:w-[1300px] mx-auto space-y-3 py-20">
            {
              source.map((item, index) => {
                return (
                  <PhotoView key={index} src={item}>
                    <div className='break-inside-avoid'>
                      <Image src={item}
                        alt="featured_image"
                        className='rounded-md drop-shadow-2xl cursor-grab !w-full !h-full'
                        width={500} height={500} />
                    </div>
                  </PhotoView>
                );
              })
            }
          </div>
        </PhotoProvider>

      </div>
      <DockerNav />
    </div >
  );
};

export default Gallery;
