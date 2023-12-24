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
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[35px] mt-[35px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[30px] font-bold uppercase text-white dark:text-white">
          Coach panel
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="pt-1 text-xl">
        <Links routes={routes} />
      </ul>

      

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
