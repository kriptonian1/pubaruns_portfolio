import Image from "next/image";
import React from "react";
import { LinkComponent } from "../common";
import { BbcLogo } from "./assets";
import { BBC_Logo } from "./data/assets";

const ArticleCard = ({ title, description, link, logo, alt }) => {
    return (

        <div className="m-7">
            <div className="flex flex-col space-y-[2rem]">
                <div className="flex justify-between items-center">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <h1 className="text-lg font-medium underline max-w-sm">
                            {title}
                        </h1>
                    </a>
                    <img src={logo} alt={alt} className='max-w-xs w-auto h-20' width={100} height={100} />
                </div>
                <div className="flex justify-between items-end">
                    <p className=" max-w-[35vw]">
                        {description}
                    </p>

                    <LinkComponent linkText="VIEW ARTICLE" link={link} />
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;