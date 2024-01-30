import React from "react";
import avatar from "../../../assets/img/avatars/default.jpg";
import Card from "../../../components/ManagerPanel/card";
import { FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa"; // Importing icons in one line

const iconsTab = [
    { icon: <FaTelegramPlane />, url: "https://t.me/Javadyes1381" },
    { icon: <FaGithub />, url: "https://github.com/javadfaraji99" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/javad-faraji-a02351220" },
];

const Armin = () => {
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div className="relative mt-1 flex h-40 w-full justify-center rounded-2xl bg-cover">
        <div className="absolute -bottom-12 flex h-[200px] w-[200px] items-center justify-center rounded-full border-[4px] border-gray-900 bg-gray-900 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-14 mb-4 flex flex-col items-center">
        <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
          Javad Faraji
        </h4>
        <p className="text-xl font-normal text-gray-900">frontend developer</p>
      </div>

      {/* Icons with proper links */}
      <div className="flex gap-7 text-[18px] text-gray-900 justify-center md:justify-start">
        {iconsTab.map(({ icon, url }, index) => {
          return (
            <a
              key={index}
              className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-gray-900 hover:text-white"
              style={{ transition: "all 0.3s" }}
              href={url} // Updated to use the URL from the iconsTab array
              target="_blank" // Opens the link in a new tab/window
              rel="noopener noreferrer" // Prevents security vulnerabilities
            >
              {icon}
            </a>
          );
        })}
      </div>

    </Card>
  );
};

export default Armin;