import React from "react";
import gym from "../../assets/videos/gym.mp4";

function Land() {
  return (
    <div className="relative h-screen w-screen">
      <div className="after:to-gray-300[0] h-full w-full via-100% after:absolute after:inset-0 after:bg-gradient-to-r after:from-black after:from-0% after:via-black/[.5] after:via-75% ">
        <video
          src={gym}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
      </div>
      <div className="content absolute top-0 flex h-full w-full flex-col items-center justify-center text-white">
        <div>
          <div className="flex flex-col place-items-start justify-start gap-2 ">
            <div
              className="font-inter font-serif text-xl uppercase leading-4 tracking-wide"
              style={{
                textShadow:
                  "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
              }}
            >
              THE PATH TO BETTER LIFE
            </div>
            <br />
            <h2
              className="font-var(--cf-header-font-stack) text-6xl font-medium uppercase leading-6 text-amber-500 "
              style={{
                textShadow:
                  "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
              }}
            >
              Community of code club
            </h2>
            <br />
            <p
              className="font-dm-sans text-xl font-medium text-white"
              style={{
                textShadow:
                  "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
              }}
            >
              Welcome to the ultimate destination for fitness enthusiasts and
              sports lovers! <br />
              Dive into a world of cutting edge workouts, expert training advice
              and a community <br />
              that shares your passion for a healthier lifestyle.
            </p>
          </div>

          <div>
            <button
              className="bg-rgba-110-128-179 focus:shadow-outline-yellow mt-5 rounded-full border-transparent bg-gray-500 px-6 py-4 text-base font-medium leading-5 tracking-wide text-white transition duration-700 ease-in-out hover:bg-amber-500 hover:text-black focus:outline-none active:bg-amber-400"
              target="_self"
              href="/map"
            >
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Land;
