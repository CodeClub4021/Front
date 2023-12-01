import React from "react";

// Coach Imports
import Profile from "../../../views/coach/profile";
import MyStudents from "../../../views/coach/myStudents";




// Icon Imports
import {
  MdBarChart,
  MdPerson,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";

const routes = [
  {
    name: "Profile",
    layout: "/coach",
    path: "profile",
    icon: <MdPerson className="h-9 w-9" />,
    component: <Profile />,
  },
  {
    name: "My Students",
    layout: "/coach",
    icon: <CgGym className="h-9 w-9" />,
    path: "my-students",
    component: <MyStudents />,
  },
  
  
];
export default routes;
