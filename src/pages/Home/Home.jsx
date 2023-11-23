import {useEffect, useState} from "react";
import Slider from "../../components/slider/slider.jsx";
import {SLIDERS, CARD_LOGO} from "../../Constants.js";
import Button from "../../components/button/button.jsx";
import Card from "../../components/card/card.jsx";

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
            {/*<header className="h-screen relative">*/}
            {/*    <Navbar isLogin={false}/>*/}
            {/*    <Slider imgAddress={SLIDERS[sliderIndex]}/>*/}
            {/*</header>*/}
            <main>
                {/*<Card data={gyms[0]} />*/}
                {/*<Button label={"label"} onClick={() => console.log(1)} />*/}
            </main>
        </>

)
}