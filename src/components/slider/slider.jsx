import React, {useEffect, useState} from "react";
import {SLIDERS} from "../../Constants.js";
import ImageShower from "./imageShower.jsx";

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setSliderIndex((sliderIndex + 1) % 3), 2000);
        return () => {
            clearInterval(interval);
        }
    });
    return (
        <div>
            <ImageShower imgAddress={SLIDERS[sliderIndex]}/>
            <div
                className="absolute bottom-1/4 z-20 w-full h-3/4 text-white text-opacity-70 capitalize flex flex-col justify-start py-28 gap-3 px-8">
                <h1 className="text-6xl">
                    {"Find your favorite Coach"}
                </h1>
                <span className="text-4xl">
                    {"Practice in your favorite Gym..."}
                        </span>
            </div>
        </div>
    )
}

export default Slider;