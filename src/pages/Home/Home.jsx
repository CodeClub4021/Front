import {useEffect, useState} from "react";
import Slider from "../../components/slider/slider.jsx";
import {SLIDERS, CARD_LOGO} from "../../Constants.js";
import Navbar from "../../components/navbar/navbar.jsx";
import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";

const coaches = [
    {
        imageAddress:  CARD_LOGO[0],
        name: "coach1",
        rateNumber: 5
    },
    {
        imageAddress:  CARD_LOGO[0],
        name: "coach2",
        rateNumber: 4.5
    },
    {
        imageAddress:  CARD_LOGO[0],
        name: "coach3",
        rateNumber: 4
    },
    {
        imageAddress:  CARD_LOGO[0],
        name: "coach4",
        rateNumber: 3
    },
    {
        imageAddress:  CARD_LOGO[0],
        name: "coach5",
        rateNumber: 3.9
    },
    {
        imageAddress:  CARD_LOGO[0],
        name: "coach6",
        rateNumber: 3.9
    },
]

const gyms = [
    {
        imageAddress:  CARD_LOGO[1],
        name: "gym1",
        rateNumber: 5
    },
    {
        imageAddress:  CARD_LOGO[1],
        name: "gym2",
        rateNumber: 4.5
    },
    {
        imageAddress:  CARD_LOGO[1],
        name: "gym3",
        rateNumber: 4
    },
    {
        imageAddress:  CARD_LOGO[1],
        name: "gym4",
        rateNumber: 3
    },
    {
        imageAddress:  CARD_LOGO[1],
        name: "gym5",
        rateNumber: 3.9
    },
    {
        imageAddress:  CARD_LOGO[1],
        name: "gym6",
        rateNumber: 3.9
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
            <header className="h-screen relative">
                <Navbar isLogin={false}/>
                <Slider imgAddress={SLIDERS[sliderIndex]}/>
            </header>
            <main className="grid grid-cols-12 grid-rows-2 w-screen">
                <div className="col-start-3 col-span-8 row-span-1 flex justify-center place-items-center">
                    <HomeCardsGroup data={gyms} subTitle={"Most popular Gyms"}/>
                </div>
                <div className="col-start-3 col-span-8 row-span-1 flex justify-center place-items-center">
                    <HomeCardsGroup data={coaches} subTitle={"Most popular Coaches"}/>
                </div>
            </main>
        </>

)
}