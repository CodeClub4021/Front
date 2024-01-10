import React from "react";
import Card from "../../../components/UserPanel/card";
import ShowStar from "../../../components/rating/profile_rate.jsx";
import ShowStars from "../../../components/UserPanel/ShowStars/ShowStars";
import avatar from "../../../assets/img/profile/banner.png";
import { Button } from "@chakra-ui/react";
import GymSlideshow from "./components/GymSlideshow.jsx";
import { Link } from "react-router-dom";
const MyGyms = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful my-8 flex h-fit flex-col gap-8 lg:grid lg:grid-cols-12">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="col-span-12">
            <GymCard />
          </div>
        ))}
      </div>
    </div>
  );
};

const GymCard = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Gym Photos */}
      {/* <div className="mb-3 h-72 overflow-hidden rounded-2xl">
        <div
          className="relative h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div> */}
      <GymSlideshow />

      {/* Gym Information */}
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 lg:col-span-1">
          <Button>
            <Link
              to="/gympanel"
              className="text-lg font-bold text-gray-800 hover:text-gray-600 dark:text-white"
            >
              Gym Name
            </Link>
          </Button>
          <div className="mb-2 text-sm text-gray-600">
            <p className="mr-20 inline-block">Location: City, Country</p>
            <p className="inline-block">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1">
          <h4 className="pl-48 text-lg font-bold text-gray-800 dark:text-white">
            Rating
          </h4>
          <div className="ml-44 flex items-center">
            <div className="flex font-bold">
              <ShowStars />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <button className=" ml-36  rounded-full bg-custom px-6 py-4 font-medium tracking-wide text-black transition duration-700 ease-in-out hover:bg-amber-500 hover:text-white">
            show program
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MyGyms;
