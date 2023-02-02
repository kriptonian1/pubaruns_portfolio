import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useState } from "react";
import { ArticleCard, SideSection } from "../components";
import { DockerNav, Navbar, MobileDockerNav, Footer } from "../components/common";
import { featureData, awardData, workData } from "../components/work/data";



function Work() {


  const [ActiveArticle, SetActiveArticle] = useState("featured");


  return (
    <>
      <Head>
        <title> Works and Featured on | Pubarun&lsquo;s Portfolio</title>
      </Head>

      <Navbar isFixed={true} />
      <div className="grid grid-cols-2  gap-0">
        <div className="col-span-2 lg:hidden overflow-y-scroll">

          {/* mobile viewpoint for feeds */}
          <div className="flex flex-col">
            <div className="h-[400px]">
              {
                ActiveArticle === "featured" && featureData.map((item, index) => {
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
                }
                )
              }
              {
                ActiveArticle === "awards" && awardData.map((item, index) => {
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
                }
                )
              }
              {
                ActiveArticle === "worked" && workData.map((item, index) => {
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
                }
                )
              }
            </div>
          </div>
        </div>




        {/* large viewpoint for feeds */}
        <SideSection isactive={ActiveArticle} setisActive={
          (value) => {
            // taking the new value from the component and assigning to parent
            SetActiveArticle(value);
            // console.log(value);
          }
        } />
        <div className="lg:flex hidden lg:flex-col lg:overflow-y-scroll ">

          {
            ActiveArticle === "featured" && featureData.map((item, index) => {
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
            }
            )
          }
          {
            ActiveArticle === "awards" && awardData.map((item, index) => {
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
            }
            )
          }
          {
            ActiveArticle === "worked" && workData.map((item, index) => {
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
            }
            )
          }
        </div>
      </div>

      <DockerNav isVisible={true} />
      <MobileDockerNav isVisible={true} />
    </>
  );
};

export default Work;
