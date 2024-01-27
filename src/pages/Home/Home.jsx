import React, { useEffect, useState } from "react";
import Slider from "../../components/slider/slider.jsx";
import { SLIDERS, CARD_LOGO } from "../../Constants.js";
import Navbar from "../../components/navbar/navbar.jsx";
import HomeCardsGroup from "../../components/homeCardsQroup/homeCardsGroup.jsx";
import Footer from "../../components/footer/footer.jsx";

const coaches = [
  {
    imageAddress: CARD_LOGO[0],
    name: "coach1",
    rateNumber: 5,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach2",
    rateNumber: 4.5,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach3",
    rateNumber: 4,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach4",
    rateNumber: 3,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach5",
    rateNumber: 3.9,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach6",
    rateNumber: 3.9,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach6",
    rateNumber: 3.9,
  },
  {
    imageAddress: CARD_LOGO[0],
    name: "coach7",
    rateNumber: 3.9,
  },
];

const gyms = [
  {
    imageAddress: CARD_LOGO[1],
    name: "gym1",
    rateNumber: 5,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym2",
    rateNumber: 4.5,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym3",
    rateNumber: 4,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym4",
    rateNumber: 3,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym5",
    rateNumber: 3.9,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym6",
    rateNumber: 3.9,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym6",
    rateNumber: 3.9,
  },
  {
    imageAddress: CARD_LOGO[1],
    name: "gym7",
    rateNumber: 3.9,
  },
];

export default function Home() {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setSliderIndex((sliderIndex + 1) % 3),
      2000
    );
    return () => {
      clearInterval(interval);
    };
    
  });
  return (
    <>
      <header className="relative mb-20 h-screen">
        <Navbar isLogin={false} />
        <div className="top-22 absolute mt-20 h-full min-w-full">
          <Slider
            imgAddress={SLIDERS[sliderIndex]}
            subTitle={"Find your favorite Coach"}
            text={"Practice in your favorite Gym..."}
          />
          <div className="absolute bottom-1/4 z-20 flex h-full w-full flex-col justify-center gap-3 px-8 capitalize text-white text-opacity-70">
            <h1 className="text-6xl">{"Find your favorite Coach"}</h1>
            <span className="text-4xl">
              {"Practice in your favorite Gym..."}
            </span>
          </div>
        </div>
      </header>
      <main className="grid w-screen grid-cols-12">
        <div
          id="gyms-section"
          className="col-span-12 col-start-1 row-span-1 flex place-items-center justify-center"
        >
          <HomeCardsGroup data={gyms} subTitle={"Most popular Gyms"} />
        </div>
        <div className="relative col-start-1 col-end-13 row-span-2 h-screen">
          <Slider
            imgAddress={SLIDERS[3]}
            subTitle={"Don't you sign-up?"}
            text={"hurry up..."}
          />
          <div className=" absolute bottom-1 z-20 flex h-full w-full place-items-center justify-start gap-5 capitalize text-white text-opacity-70">
            <div className="relative z-20 h-full w-full px-8 capitalize text-white text-opacity-70">
              <h1 className="absolute left-20 top-1/3 text-6xl">
                {"Didn't you sign-up?"}
              </h1>
              <span className="absolute left-24 top-1/3 mt-20 text-4xl">
                {"hurry up..."}
              </span>
              <div className="absolute left-1/3 top-1/3 mt-20 flex place-items-center justify-end">
                <a
                  href="#"
                  className="flex place-items-center items-center rounded-full bg-amber-400 p-5 px-10 py-5 text-3xl font-bold capitalize text-black text-opacity-70 shadow-lg transition-all duration-500 hover:scale-110 hover:bg-amber-300 hover:shadow-inner"
                >
                  Sign-Up
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 col-start-1 row-span-1 flex place-items-center justify-center"
          id="coaches-section"
        >
          <HomeCardsGroup data={coaches} subTitle={"Most popular Coaches"} />
        </div>
      </main>
      <Footer />
    </>
  );
}
