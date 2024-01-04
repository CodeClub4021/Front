import Card from "../../../../components/UserPanel/card/";
import CardMenu from "../../../../components/UserPanel/card/CardMenu";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mb-5 mt-2 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-800 dark:text-white">
          General Information
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 px-2">
        <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 dark:shadow-none">
          <p className="text-base text-gray-600">Sex</p>
          <p className="text-lg font-medium text-white dark:text-white">Male</p>
        </div>

        <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 dark:shadow-none">
          <p className="text-base text-gray-600">Birthday</p>
          <p className="text-lg font-medium text-white dark:text-white">
            20 July 1966
          </p>
        </div>

        <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 dark:shadow-none">
          <p className="text-base text-gray-600">Education</p>
          <p className="text-lg font-medium text-white dark:text-white">
            Stanford University
          </p>
        </div>

        <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 dark:shadow-none">
          <p className="text-base text-gray-600">Languages</p>
          <p className="text-lg font-medium text-white dark:text-white">
            English - Spanish - Italian
          </p>
        </div>

        <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col items-start justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 dark:shadow-none">
          <p className="text-base text-gray-600">Location</p>
          <p className="text-lg font-medium text-white dark:text-white">
            USA - LA
          </p>
        </div>

        <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-700 flex flex-col justify-center rounded-2xl bg-gray-800 bg-clip-border px-3 py-4 dark:shadow-none">
          <p className="text-base text-gray-600">Age</p>
          <p className="text-lg font-medium text-white dark:text-white">
            10 years old
          </p>
        </div>
      </div>
      {/* 
      <div className="mb-8 mt-8 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-800 dark:text-white">
          Achievements
        </h4>
        <ul className="ml-12 mt-2 list-disc  px-2 text-xl text-gray-800 ">
          <li>Ring magazine Prospect of the Year (1985)</li>
          <li>2× Ring magazine Fighter of the Year (1986, 1988)</li>
          <li>2× Sugar Ray Robinson Award winner (1987, 1989)</li>
          <li>
            BBC Sports Personality of the Year Overseas Personality (1989)
          </li>
          <li>International Boxing Hall of Fame inductee (Class of 2011)</li>
        </ul>
      </div> */}

      <div className="mb-8 mt-8 w-full">
        <h4 className="px-2 text-2xl font-bold text-gray-800 dark:text-white">
          A little about me
        </h4>
        <p className="ml-5 mt-2 px-2 text-xl text-gray-800">
          Michael Gerard Tyson is an American former professional boxer who
          competed from 1985 to 2005.....
        </p>
      </div>
    </Card>
  );
};

export default General;
