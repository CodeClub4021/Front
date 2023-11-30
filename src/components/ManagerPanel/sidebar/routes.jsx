import React from "react";

// Admin Imports
import Profile from "../../../views/admin/profile";
import DataTables from "../../../views/admin/tables";




// Icon Imports
import {
  MdBarChart,
  MdPerson,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";

const routes = [
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-9 w-9" />,
    component: <Profile />,
  },
  {
    name: "My gym",
    layout: "/admin",
    icon: <CgGym className="h-9 w-9" />,
    path: "data-tables",
    component: <DataTables />,
  },
  
  
];
export default routes;
