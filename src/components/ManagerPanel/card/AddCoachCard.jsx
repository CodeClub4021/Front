import React from "react";
import { useState } from "react";
import Dropdown from "../dropdown";
import { BsThreeDots } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { IoKey } from "react-icons/io5";
import AddCoach from "../../modal/AddCoachModal";
import axios from "axios";

function AddCoachCard(props) {
  const { transparent } = props;
  const [open, setOpen] = React.useState(false);
  const [showAddCoach, setShowAddCoach] = useState(false);
  const handleEditClick = () => {
    // Open the ProductModal when Edit Info is clicked
    setShowAddCoach(true);
    setOpen(false); // Close the dropdown

    axios.post("http://127.0.0.1:8000/gyms/123/add-coach/", 
    {
      "coach_username": "test"
    })
  };

  return (
    <>
      <Dropdown
        button={
          <button
            onClick={() => setOpen(!open)}
            open={open}
            className={`flex items-center bg-gray-900 text-xl text-amber-300 hover:cursor-pointer ${
              transparent
                ? "bg-none text-white hover:bg-none active:bg-none"
                : "bg-lightPrimary text-brand-500 dark:bg-navy-700 p-2 hover:bg-gray-100 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
            } linear justify-center rounded-lg font-bold transition duration-200`}
          >
            <BsThreeDots className="h-6 w-6" />
          </button>
        }
        animation={"origin-top-right transition-all duration-300 ease-in-out"}
        classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
        children={
          <div className="shadow-shadow-500 dark:!bg-navy-700 z-50 w-max rounded-xl bg-gray-900 px-4 py-3 text-sm shadow-xl dark:shadow-none">
            <p
              onClick={handleEditClick}
              className="mb-2 flex cursor-pointer items-center gap-2 text-lg text-amber-300 hover:font-medium hover:text-white"
            >
              <span>
                <FaUserEdit />
              </span>
              Add Coach
            </p>
          </div>
        }
      />
      {showAddCoach && <AddCoach onClose={() => setShowAddCoach(false)} />}
    </>
  );
}

export default AddCoachCard;
