import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import "./footer.css";

import MyImage from '../../assets/images/Logo.png';
{/* <img src={MyImage} alt="logo" /> */}


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
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-4">
              <img
                src={MyImage}
                alt="logo"
                className="w-[10rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive programs designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start ">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ffcd03] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-4 relative">
              <p className="text-[22px] font-bold footer-main text-[#efefef] ">Our Club</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ffcd03]"></span>

              <p className="text-[16px] hover:text-[#ffcd03] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Studios
              </p>
              <p className="text-[16px] hover:text-[#ffcd03] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Coaches
              </p>
              <p className="text-[16px] hover:text-[#ffcd03] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Shop
              </p>
              <p className="text-[16px] hover:text-[#ffcd03] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Tutorials
              </p>
              <p className="text-[16px] hover:text-[#ffcd03] cursor-pointer text-[#646464] font-medium hover:font-bold ">
                Contact Us 
              </p>
              <div className="flex flex-col w-1/2 md:p-0 py-1"></div>

            </div>

            {/* right div */}
            <div className="flex flex-col gap-4 relative">
              <p className="text-[22px] font-bold footer-main text-[#efefef]">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ffcd03]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Saturday - Wednesday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Tuesday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Friday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="http://ce.iust.ac.ir/" class="hover:underline">Privacy Policy | © {new Date().getFullYear()} Gyms™ <br />{" "} Design by{" "}Code Club Inc.</a> All Rights Reserved.</span>
      </footer>
    </>
  );
}

export default Footer;