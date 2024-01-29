import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../../assets/gym-win/hero_image.png";
import hero_image_back from "../../../assets/gym-win/hero_image_back.png";
import Heart from "../../../assets/gym-win/heart.png";
import Calories from "../../../assets/gym-win/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
const Hero = () => {
  const btn = `bg-white p-2 font-bold border-4 border-transparent transition-all duration-300 hover:cursor-pointer`;
  const transition = { duration: 3, type: "spring" };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero_custom">
      <div className="hero-blur blur"></div>

      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={4} preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={878} delay={4} preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} delay={2} preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className={"btn"}>Get Started</button>
          <button className={"btn"}>Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-h">
        <div className="absolute left-0 top-0 z-10 z-10 h-full w-full">
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            className="hero-image-back"
            src={hero_image_back}
            alt=""
          />
        </div>
        <div className=" custom-bg absolute left-0 top-0 z-10 z-20 h-full w-full">
          <button className={"btn absolute left-5 top-5"}>
            <Link to="join-us" smooth={true} spy={true}>
              Join Now
            </Link>
          </button>

          {/* heart rate */}
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero images */}
          <img className="hero-image" src={hero_image} alt="" />

          {/* calories */}
          <motion.div
            initial={{ left: "-250px" }}
            whileInView={{ left: "-150px" }}
            transition={transition}
            className="calories"
          >
            <img className="basis/1/2" src={Calories} alt="" />
            <div className="basis-1/2">
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
