import React, {useEffect, useState} from "react";
import Slider from "../../components/slider/slider.jsx";
import {SLIDERS, CARD_LOGO} from "../../Constants.js";
import Navbar from "../../components/navbar/navbar.jsx";
import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";
import Footer from "../../components/footer/footer.jsx";

const coaches = [
    {
        imageAddress: CARD_LOGO[0],
        name: "coach1",
        rateNumber: 5
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach2",
        rateNumber: 4.5
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach3",
        rateNumber: 4
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach4",
        rateNumber: 3
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach5",
        rateNumber: 3.9
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach6",
        rateNumber: 3.9
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach6",
        rateNumber: 3.9
    },
    {
        imageAddress: CARD_LOGO[0],
        name: "coach7",
        rateNumber: 3.9
    },
]

const gyms = [
    {
        imageAddress: CARD_LOGO[1],
        name: "gym1",
        rateNumber: 5,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym2",
        rateNumber: 4.5,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym3",
        rateNumber: 4,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym4",
        rateNumber: 3,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym5",
        rateNumber: 3.9,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym6",
        rateNumber: 3.9,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym6",
        rateNumber: 3.9,
        state: "isfahan",
        city: "khomeini shahr"
    },
    {
        imageAddress: CARD_LOGO[1],
        name: "gym7",
        rateNumber: 3.9,
        state: "isfahan",
        city: "khomeini shahr"
    },
]

export default function Home() {
    const [sliderIndex, setSliderIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setSliderIndex((sliderIndex + 1) % 3), 2000);
        return () => {
            clearInterval(interval);
        }
    });
    return (
        <>
            <Navbar isLogin={false}/>
            <header className="h-screen w-screen">
                <div className="relative w-full h-full">
                    <div className="relative w-full h-full">
                        <Slider imgAddress={SLIDERS[sliderIndex]} subTitle={"Find your favorite Coach"}/>
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
                </div>
            </header>
            <main className="grid grid-cols-12 w-screen">
                <div className="col-start-1 col-span-12 row-span-1 flex justify-center place-items-center">
                    <HomeCardsGroup data={gyms} subTitle={"Most popular Gyms"}/>
                </div>
                <div className="col-start-1 col-end-13 row-span-2 h-screen relative">
                    <Slider imgAddress={SLIDERS[3]} subTitle={"Don't you sign-up?"} text={"hurry up..."}/>
                    <div
                        className=" absolute bottom-1 z-20 w-full h-full text-white capitalize text-opacity-70 flex justify-start place-items-center gap-5">
                        <div className="relative px-8 z-20 text-white capitalize text-opacity-70 w-full h-full">
                            <h1 className="text-6xl absolute left-20 top-1/3">
                                {"Didn't you sign-up?"}
                            </h1>
                            <span className="text-4xl absolute left-24 top-1/3 mt-20">
                    {"hurry up..."}
                        </span>
                            <div className="flex justify-end place-items-center absolute mt-20 top-1/3 left-1/3">
                                <a
                                    href="#"
                                    className="flex items-center p-5 capitalize bg-amber-400 text-3xl shadow-lg place-items-center font-bold text-black text-opacity-70 px-10 py-5 rounded-full hover:bg-amber-300 hover:shadow-inner transition-all duration-500 hover:scale-110"
                                >
                                    Sign-Up
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-start-1 col-span-12 row-span-1 flex justify-center place-items-center">
                    <HomeCardsGroup data={coaches} subTitle={"Most popular Coaches"}/>
                </div>
            </main>
            <Footer/>
        </>

    )
}