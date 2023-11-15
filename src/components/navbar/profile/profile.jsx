import React from "react";
import logo from "../../../assets/images/Untitled5.jpg";


export default function Profile (){
    return(
        <div className="logo text-white flex flex-wrap items-center nav-link-sm">
            <img
                src={logo} // Placeholder for the logo, replace with your actual logo URL
                alt="Logo"
                className="w-8 h-8 mr-2 ml-2"
            />
        </div>
    )

}