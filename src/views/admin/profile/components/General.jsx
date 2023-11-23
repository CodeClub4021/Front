import Card from "../../../../components/ManagerPanel/card/";
import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Edit Profile */}
      <div className="ml-auto">
        <CardMenu />
      </div>
      {/* Header */}
      <div className="mt-2 mb-5 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-800 dark:text-white">
          General Information
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 px-2">

        <div className="flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-600">Sex</p>
          <p className="text-lg font-medium text-white dark:text-white">
            Male
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-600">Birthday</p>
          <p className="text-lg font-medium text-white dark:text-white">
            20 July 1966
          </p>
        </div>
        
        <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-600">Education</p>
          <p className="text-lg font-medium text-white dark:text-white">
            Stanford University
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-600">Languages</p>
          <p className="text-lg font-medium text-white dark:text-white">
            English - Spanish - Italian
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-600">Location</p>
          <p className="text-lg font-medium text-white dark:text-white">
          USA - LA
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-base text-gray-600">Work Experience</p>
          <p className="text-lg font-medium text-white dark:text-white">
            10 years
          </p>
        </div>

      </div>

      <div className="mt-8 mb-8 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-800 dark:text-white">
        Achievements
        </h4>
        <ul className= "ml-12 mt-2 px-2  text-gray-800 text-xl list-disc ">
          <li>Ring magazine Prospect of the Year (1985)</li>
          <li>2× Ring magazine Fighter of the Year (1986, 1988)</li>
          <li>2× Sugar Ray Robinson Award winner (1987, 1989)</li>
          <li>BBC Sports Personality of the Year Overseas Personality (1989)</li>  
          <li>International Boxing Hall of Fame inductee (Class of 2011)</li>
        </ul>
      </div>
        
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-800 dark:text-white">
        More Description
        </h4>
        <p className="ml-5 mt-2 px-2 text-xl text-gray-800 text-gray-600">
        Michael Gerard Tyson is an American former 
        professional boxer who competed from 1985 to 2005.....
        </p>
      </div>
    </Card>
  );
};

export default General;
