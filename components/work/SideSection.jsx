import React, { useState } from 'react'

const SideSection = ({
    isactive,
    setisActive
}) => {

    const [isSelected, setIsSelected] = useState("featured");

    const scaleonSelect = (select) => {
        if (select) {
            return "transition ease-in-out delay-150 scale-150 duration-300";
        }

        return "transition ease-in-out delay-150 hover:translate-x-[2rem] hover:scale-110 duration-300";

    }

    const lineOnSelect = (select) => {
        if (select) {
            return "w-[200px]";
        }
        return "w-[100px]";
    }
    return (
        <div className="flex ">
            <div className='fixed mt-[13vh] gap-[8vw] flex flex-col left-0 text-[#373737]'>

                <div onClick={() => setisActive("awards")} className={`${scaleonSelect(isactive === "awards")} flex cursor-pointer items-center text-lg font-semibold`}>
                    <div className={`${lineOnSelect(isactive === "awards")} border border-[#000000] h-0 w-[200px] mr-[1rem]`}></div>
                    <button>
                        AWARDS
                    </button>

                </div>
                <div onClick={() => setisActive("featured")} className={`${scaleonSelect(isactive === "featured")} flex cursor-pointer items-center text-lg font-semibold`}>
                    <div className={`${lineOnSelect(isactive === "featured")} border border-[#000000] h-0 w-[200px] mr-[1rem]`}></div>
                    <button>
                        FEATURED ON
                    </button>

                </div>
                <div onClick={() => setisActive("worked")} className={`${scaleonSelect(isactive === "worked")} flex cursor-pointer items-center text-lg font-semibold`}>
                    <div className={` ${lineOnSelect(isactive === "worked")} border border-[#000000] h-0 w-[200px] mr-[1rem]`}></div>
                    <button>
                        WORKED WITH
                    </button>

                </div>
            </div>
            <div className="fixed   left-[40vw] border border-[#000000] w-0 h-[84vh] my-4 "></div>
        </div>

    )
}

export default SideSection