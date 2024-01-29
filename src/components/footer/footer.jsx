import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import "./footer.css";

import MyImage from "../../assets/images/Logo.png";
{
  /* <img src={MyImage} alt="logo" /> */
}

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="w-full p-4 bg-stone-950 rounded-lg  border-t border-gray-200 shadow  md:items-center md:justify-between md:p-6 dark:bg-stone-950 dark:border-gray-600 z-30">
        <div className="container mx-auto  py-[0rem]">
          {/* footer div all */}
          <div className="flex flex-col items-center justify-between  text-left md:flex-row  md:items-start md:gap-[5rem]">
            {/* logo side */}
            <div className="flex w-1/2 flex-col gap-4 py-4 md:p-0">
              <img src={MyImage} alt="logo" className="w-[10rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive programs designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex justify-center gap-7 text-[18px] text-[#646464] md:justify-start ">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-full bg-[#efefef] p-2 text-2xl hover:bg-[#ffcd03] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* middle div */}
            <div className="relative flex flex-col gap-4">
              <p className="footer-main text-[22px] font-bold text-[#efefef] ">
                Our Club
              </p>

              <span className="absolute top-[33px] h-[4px] w-[7rem] bg-[#ffcd03]"></span>

              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#ffcd03]">
                Studios
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#ffcd03]">
                Coaches
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#ffcd03]">
                Shop
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#ffcd03]">
                Tutorials
              </p>
              <p className="cursor-pointer text-[16px] font-medium text-[#646464] hover:font-bold hover:text-[#ffcd03] ">
                Contact Us
              </p>
              <div className="flex w-1/2 flex-col py-1 md:p-0"></div>
            </div>

            {/* right div */}
            <div className="relative flex flex-col gap-4">
              <p className="footer-main text-[22px] font-bold text-[#efefef]">
                Working Hours
              </p>

              <span className="absolute top-[33px] h-[4px] w-[7rem] bg-[#ffcd03]"></span>

              <p className="text-[16px]  font-bold text-[#646464]">
                Saturday - Wednesday:
              </p>
              <p className="text-[16px] font-medium text-[#646464]">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] font-bold text-[#646464]">Tuesday:</p>
              <p className="text-[16px] font-medium text-[#646464]">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] font-bold text-[#646464] ">
                Friday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          <a href="http://ce.iust.ac.ir/" className="hover:underline">
            Privacy Policy | © {new Date().getFullYear()} Gyms™ <br /> Design by{" "}
            Code Club Inc.
          </a>{" "}
          All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
