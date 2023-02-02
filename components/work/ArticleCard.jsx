import Image from "next/image";
import React from "react";
import { LinkComponent } from "../common";

const ArticleCard = ({ title, description, link, logo, alt }) => {

    return (

        <div className="m-7 border-b border-black pb-7 border-dashed ">
            <div className="flex flex-col space-y-[2rem]">
                <div className="flex justify-between items-center gap-5">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <h1 className="text-lg font-medium underline max-w-sm">
                            {title}
                        </h1>
                    </a>
                    {logo && <Image draggable={false} src={logo} alt={alt} className='w-24 md:w-20 lg:w-20 h-auto' width={200} height={100} />}

                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-2">
                    <p className=" lg:max-w-[35vw]">
                        {description}
                    </p>

                    {link && <LinkComponent linkText="VIEW ARTICLE" link={link} />}
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;