import React from "react";

// Admin Imports
import Profile from "../../../views/user/profile";
import My_Gym from "../../../views/user/tables";
import My_Coach from "../../../views/user/coaches";

// Icon Imports
import { MdBarChart, MdPerson } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import coachesIcon from "./coach.png";

const routes = [
  {
    name: "Profile",
    layout: "/user",
    path: "profile",
    icon: <MdPerson className="h-9 w-9" />,
    component: <Profile />,
  },
  {
    name: "My gyms",
    layout: "/user",
    icon: <CgGym className="h-9 w-9" />,
    path: "my-gyms",
    component: <My_Gym />,
  },
  {
    name: "My coaches",
    layout: "/user",
    icon: <img src={coachesIcon} className="h-9 w-9" alt="Coaches Icon" />,
    path: "my-coaches",
    component: <My_Coach />,
  },
];
export default routes;
