import React from "react";
import avatar from "../../../assets/img/avatars/avatar5.png";
import Card from "../../../components/ManagerPanel/card";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const iconsTab = [
    { icon: <FaTelegramPlane /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <FaInstagram   /> },
    { icon: <FaLinkedinIn /> },
  ];
const Banner = () => {
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
        Armin
        </h4>
        <p className="text-xl font-normal text-gray-900">frontend developer</p>
      </div>
      <div className="flex gap-7 text-[18px] text-gray-900 justify-center md:justify-start ">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-gray-900 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>

    </Card>
  );
};

export default Banner;
