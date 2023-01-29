import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { ArticleCard, SideSection } from "../components";
import { DockerNav, Navbar, MobileDockerNav } from "../components/common";
import { featureData, awardData, workData } from "../components/work/data";


function about() {
    return (
        <>
            <Navbar isFixed={true} />
            <div className="flex flex-row justify-between px-10 items-center min-h-screen ">
                <div className="p-10 lg:basis-1/2 basis-1">
                    <h1 className="font-Montserrat font-bold text-[64px] leading-[78.02px]">PUBARUN BASU</h1>
                    <p className="pl-5 font-Poppins font-normal text-2xl leading-9">Suspendisse potenti. Nulla facilisi. Praesent vestibulum eros dolor, ut maximus lacus pulvinar in. Nam at pellentesque erat, quis viverra erat.</p>
                </div>
                <div className="lg:flex hidden justify-center items-center">
                    <Image src={'/PUBARUN BASU.png'} alt="PUBARUN BASU" width={500} height={500} />
                </div>

            </div>
            <DockerNav isVisible={true} />
            <MobileDockerNav isVisible={true} />
        </>
    )
}

export default about