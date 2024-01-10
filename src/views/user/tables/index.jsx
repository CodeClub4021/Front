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
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2  lg:col-span-1">
          <Button>
            <Link
              to="/gympanel"
              className="text-lg font-bold text-gray-800 hover:text-gray-600 dark:text-white"
            >
              Gym Name
            </Link>
          </Button>
          <div className="mb-2 text-sm text-gray-600">
            <p className="mr-40 inline-block">Location: City, Country</p>
            <p className="inline-block">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="pl-4 text-lg font-bold text-gray-800 dark:text-white">
            Rating
          </h4>
          <div className="flex items-center">
            <div class="mx-2 flex font-bold">
              <ShowStars />
            </div>
            {/* <span className="ml-2 text-sm text-gray-600">123 reviews</span> */}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MyGyms;
