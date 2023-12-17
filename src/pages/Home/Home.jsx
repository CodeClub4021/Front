import React from "react";
import ImageShower from "../../components/slider/imageShower.jsx";
import {COACHES, SLIDERS, GYM_MOCKS} from "../../Constants.js";
import Navbar from "../../components/navbar/navbar.jsx";
import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";
import Footer from "../../components/footer/footer.jsx";
import Slider from "../../components/slider/slider.jsx";
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <div>
            <Navbar isLogin={false}/>
            <div className="h-screen w-screen flex flex-col justify-startq">
                <header className="h-full w-full">
                    <Slider/>
                </header>
            </div>
            <main className="grid grid-cols-12 w-screen">
                <div className="col-start-1 col-span-12 row-span-1 flex justify-center place-items-center">
                    <HomeCardsGroup data={GYM_MOCKS} subTitle={"Most popular Gyms"}/>
                </div>
                <div className="col-start-1 col-end-13 row-span-2 h-screen relative">
                    <ImageShower imgAddress={SLIDERS[3]}/>
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
                                <Link
                                    to="/"
                                    className="flex items-center p-5 capitalize bg-amber-400 text-3xl shadow-lg place-items-center font-bold text-black text-opacity-70 px-10 py-5 rounded-full hover:bg-amber-300 hover:shadow-inner transition-all duration-500 hover:scale-110"
                                >
                                    Sign-Up
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-start-1 col-span-12 row-span-1 flex justify-center place-items-center">
                    <HomeCardsGroup data={COACHES} subTitle={"Most popular Coaches"}/>
                </div>
            </main>
            <Footer/>
        </div>

    )
}