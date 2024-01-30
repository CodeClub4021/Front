/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "./routes.jsx";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-gray-800 pb-10 shadow-2xl shadow-white/5 transition-all dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[35px] mt-[35px] flex items-center`}>
        <div className="font-poppins ml-1 mt-1 h-2.5 text-[26px] font-bold uppercase text-white dark:text-white">
          Manager panel
        </div>
      </div>
      {/*<div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />*/}
      {/* Nav item */}

      <ul className="pt-16 text-xl">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
