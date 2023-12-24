import Card from "../../../../components/ManagerPanel/card/";
import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import React from "react";

const GymInfo = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Edit Profile */}
      <div className="ml-auto">
        <CardMenu />
      </div>
      {/* Header */}
      <div className=" mb-5 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-900 dark:text-white">
          Gym Information
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-4 gap-4 px-2">

        <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-500">Sex</p>
          <p className="text-lg font-medium text-white dark:text-white">
            Men and Women
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-500">Since</p>
          <p className="text-lg font-medium text-white dark:text-white">
            2002
          </p>
        </div>
        
        <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-500">Work Hours</p>
          <p className="text-lg font-medium text-white dark:text-white">
            8 A.M. - 10 P.M.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-500">Tuition</p>
          <p className="text-lg font-medium text-white dark:text-white">
            $50 per mounth
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-500">Address</p>
          <p className="text-lg font-medium text-white dark:text-white">
          1200 S Hill St, Los Angeles, CA, United States
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-500 ">Phone Number</p>
          <p className="text-lg font-medium text-white dark:text-white">
          +1 213-677-7100
          </p>
        </div>

      </div>

    
    </Card>
  );
};

export default GymInfo;
