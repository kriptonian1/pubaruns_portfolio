import React from "react";
import { DockerNav, Navbar } from "../components/common";
// import { getPaths } from "../lib/gallery";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from "next/image";


// export const getServerSideProps = async () => {
//   let source = getPaths();
//   // get only first 10 element 
//   // source = source.slice(0, 30);
//   console.log(source);
//   return {
//     props: {
//       source
//     }
//   };
// };

const Gallery = () => {

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
              GalleryData.map((item, index) => {
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
      <DockerNav isVisible={true} />
    </div >
  );
};

export default Gallery;
