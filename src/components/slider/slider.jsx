import React from "react";

export default function Slider({imgAddress, subTitle}) {
    return (
        <>
            <div className="bg-cover bg-center w-full h-full absolute " id={"id" + subTitle.replaceAll(" ", "")}
                 style={{backgroundImage: "url(" + imgAddress + ")"}}>
            </div>
            <div className="absolute opacity-80 z-10 bg-gradient-to-r from-gray-800 w-full h-full text-white capitalize flex flex-col justify-center gap-3 px-8">

            </div>
        </>

    )
}
