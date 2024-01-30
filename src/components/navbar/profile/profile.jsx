import React from "react";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const clickHandler = () => {
    // check role
    let role = localStorage.getItem("role");
    if (role === "customer") role = "user";
    else if (role === "manager") role = "admin";
    navigate(`/${role}/profile/`);
  };
  return (
    <div className="h-fit pr-5 text-gray-200 hover:text-amber-500 ">
      <button onClick={clickHandler} type="button">
        <FaCircle className="text-5xl" />
      </button>
    </div>
  );
}
