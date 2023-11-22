import {useEffect, useState} from "react";
import Slider from "../../components/slider/slider.jsx";
import {SLIDERS} from "../../Constants.js";
import Navbar from "../../components/navbar/navbar.jsx";

export default function Home() {
    const [sliderIndex, setSliderIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setSliderIndex((sliderIndex + 1) % 3), 2000);
        return () => {
            clearInterval(interval);
        }
    });
    return (
        <header className="h-screen relative">
            <Navbar isLogin={false}/>
            <Slider imgAddress={SLIDERS[sliderIndex]}/>
        </header>
    )
}