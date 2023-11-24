import React from "react";
import anime from 'animejs/lib/anime.es.js';

export default function Slider({imgAddress, subTitle, text}) {
    anime({
        targets: "id" + subTitle,
        translateX: 250,
        duration: 1000,

    });
    return (
        <div className="relative w-full h-full top-22">
            <div className="bg-cover bg-center w-full h-full absolute top-22 " id={"id" + subTitle}
                 style={{backgroundImage: "url(" + imgAddress + ")"}}>
            </div>
            <div className="absolute top-22 opacity-80 z-10 bg-gradient-to-r from-gray-800 w-full h-full text-white capitalize flex flex-col justify-center gap-3 px-8">

            </div>
        </div>

    )
}
