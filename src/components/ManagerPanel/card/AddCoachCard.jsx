import React from "react";
import { useState } from "react";
import Dropdown from "../dropdown";
import { BsThreeDots } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import AddCoach from "../../modal/AddCoachModal";

function AddCoachCard(props) {
  const { transparent } = props;
  const [open, setOpen] = React.useState(false);
  const [showAddCoach, setShowAddCoach] = useState(false);
  const handleEditClick = () => {
    // Open the ProductModal when Edit Info is clicked
    setShowAddCoach(true);
    setOpen(false); // Close the dropdown
  };

  return (
    <>
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          open={open}
          className={`flex items-center text-xl bg-gray-900 text-amber-300 hover:cursor-pointer ${
            transparent
              ? "bg-none text-white hover:bg-none active:bg-none"
              : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
      children={
        <div className="z-50 w-max rounded-xl bg-gray-900 py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p
            onClick={handleEditClick}
           className="hover:text-white text-lg flex cursor-pointer mb-2 items-center gap-2 text-amber-300 hover:font-medium">
            <span>
              <FaUserEdit/>
            </span>
            Edit Profile
          </p>

          {/* <p className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
            <span>
              <AiOutlineUser />
            </span>
            Panel 11111
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
            <span>
              <AiOutlineShop />
            </span>
            Panel 2
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
            <span>
              <TiLightbulb />
            </span>
            Panel 3
          </p>
          <p className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
            <span>
              <FiSettings />
            </span>
            Panel 4
          </p> */}
        </div>
      }
    />
    {showAddCoach &&  <AddCoach onClose={() => setShowAddCoach(false)} />}
    </>
  );
}

export default AddCoachCard;