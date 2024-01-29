import React from "react";
import Card from "../../../../components/ManagerPanel/card";

const GymGallery = ({imageAddresses}) => {
  return (
    <Card extra={"w-full p-4 h-full"}>
      <div className="my-8 w-full">
        <h4 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Gallery
        </h4>
        
      </div>
      {/* Project 1 */}
      <div className="grid grid-cols-3 gap-1 px-2 rounded-2xl  p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          {imageAddresses.map((addr, index) => (
              <div className=" items-center flex m-auto mb-6" key={index}>
                  <img className="h-[350px] w-[350px] rounded-2xl" src={addr} alt=""/>
              </div>
          ))}
      </div>
    </Card>
  );
};

export default GymGallery;
