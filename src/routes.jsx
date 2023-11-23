import React from "react";

// Admin Imports
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/tables";




// Icon Imports
import {
  MdBarChart,
  MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "My gyms",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  
  
];
export default routes;
