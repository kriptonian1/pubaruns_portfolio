import Head from "next/head";
import React from "react";
import { ArticleCard, SideSection } from "../components";
import { DockerNav, Navbar } from "../components/common";
import { featureData } from "../components/work/data";



const work = () => {
  return (
    <>
      <Head>
        <title> Works and Featured on | Pubarun&lsquo;s Portfolio</title>
      </Head>

      <Navbar isFixed={true}/>
      <div className="grid grid-cols-2 gap-0">
        <SideSection />
        <div className="flex flex-col overflow-y-scroll ">
          {featureData.map((item, index) => {
            return (
              <ArticleCard
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                logo={item.image}
                alt={item.alt}
              />
            );
          })}
        </div>
      </div>

      <DockerNav isVisible={true} />
    </>
  );
};

export default work;
