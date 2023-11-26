import React from "react";
import avatar from "../../../../assets/img/avatars/avatar12.png";
import banner from "../../../../assets/img/profile/banner.png";
import Card from "../../../../components/ManagerPanel/card";
import ShowStars from "../../../..//components/ManagerPanel/ShowStars/ShowStars";

const Banner = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-40 w-full justify-center rounded-2xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[150px] w-[150px] items-center justify-center rounded-full border-[4px] border-gray-800 bg-gray-800 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-14 flex flex-col items-center">
        <h4 className="text-3xl font-bold text-gray-800 dark:text-white">
        Mike Tyson
        </h4>
        <p className="text-xl font-normal text-gray-800">Gym Manager</p>
      </div>

      {/* Post followers */}
        {/* <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
            <p className="text-sm font-normal text-gray-600">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              9.7K
            </p>
            <p className="text-sm font-normal text-gray-600">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              434
            </p>
            <p className="text-sm font-normal text-gray-600">Following</p>
          </div>
        </div> */}
        {/* Rateing Stars */}
        <div className="mt-2 mb-2 flex gap-4 md:!gap-14">
          <ShowStars StarsNumbers='4'/>
        </div>
    </Card>
  );
};

export default Banner;
