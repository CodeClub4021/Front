import React from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
    const navigate = useNavigate();
    const clickHandler = () => {
        // check role
        navigate("/admin/profile");
    }
  return (
    <div className="h-fit pr-5 text-gray-200 hover:text-amber-500 ">
      <button onClick={clickHandler} type="button">
        <FontAwesomeIcon icon={faCircleUser} className="text-5xl" />
      </button>
    </div>
  );
}
