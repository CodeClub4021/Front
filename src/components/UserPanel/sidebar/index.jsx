/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "./routes.jsx";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex w-fit min-h-full flex-col bg-gray-800 pb-10 shadow-2xl shadow-white/5 transition-all dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`px-[70px] pt-[35px]`}>
        <span className="ml-1 mt-1 font-poppins text-[26px] whitespace-nowrap font-bold uppercase text-white h-fit dark:text-white">
          User panel
        </span>
      </div>
      <div class="mb-7 mt-[40px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="pt-1 text-xl">
        <Links routes={routes} />
      </ul>
      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
