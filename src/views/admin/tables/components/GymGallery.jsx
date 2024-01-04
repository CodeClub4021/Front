import React from "react";
import { MdModeEditOutline } from "react-icons/md";
import image1 from "../../../../assets/img/profile/image1.png";
import image2 from "../../../../assets/img/profile/image2.png";
import image3 from "../../../../assets/img/profile/image3.png";
import Card from "../../../../components/ManagerPanel/card";

const GymGallery = () => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="my-8 w-full">
        <h4 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Gallery
        </h4>
        
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-3 gap-1 px-2 rounded-2xl  p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className=" items-center flex m-auto mb-6">
            <img className="h-[350px] w-[350px] rounded-2xl" src={image1} alt="" />
        </div>
        <div className=" items-center flex m-auto mb-6">
            <img className="h-[350px] w-[350px] rounded-2xl" src={image3} alt="" />
        </div>

        <div className=" items-center flex m-auto mb-6">
            <img className="h-[350px] w-[350px] rounded-2xl" src={image2} alt="" />
        </div>
        <div className=" items-center flex m-auto">
            <img className="h-[350px] w-[350px] rounded-2xl" src={image3} alt="" />
        </div>
        <div className=" items-center flex m-auto">
            <img className="h-[350px] w-[350px] rounded-2xl" src={image2} alt="" />
        </div>

        <div className=" items-center flex m-auto">
            <img className="h-[350px] w-[350px] rounded-2xl" src={image1} alt="" />
        </div>
        
      </div>
      {/* Project 1 */}
      {/* <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image3} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div> */}
      {/* Project 1 */}
      {/* <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src={image2} alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Technology behind the Blockchain
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Project #1 .
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                See product details
              </a>
            </p>
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          <MdModeEditOutline />
        </div>
      </div> */}
    </Card>
  );
};

export default GymGallery;
