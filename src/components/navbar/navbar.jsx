import React from "react";
import Profile from "./profile/profile.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import logo from "../../assets/images/Logo.png";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";
import Logout from "./logout.jsx";

<<<<<<< HEAD
const NavbarComponent = ({ isLogin }) => {
  return (
    <nav
      className="text-gray fixed top-0 z-50 h-fit w-full bg-gray-900 py-2 text-lg"
      id="navbar"
    >
      <ul className="md:text-md grid grid-cols-12">
        <li className="col-span-1 col-start-1">
          <div className="">
            {/*shouls stay in a router after defining routers*/}
            <img src={logo} alt="Logo" className="h-16 w-full" />
          </div>
        </li>
        {}
        {/* Navigation Links */}
=======
>>>>>>> 80af81fd6d04c1d264191ab14827891d2881ebcd

const NavbarComponent = ({isLogin, isInPanel}) => {
    const profile = isInPanel ? <Logout/> : <Profile/>;
    return (
        <nav
            className="text-gray min-w-full max-w-[100vh] text-[3vh]! fixed top-0 z-[49] h-fit bg-gradient-to-br from-gray-900 from-40% via-gray-600 via-85% to-gray-300 py-2 text-lg"
        >
            <ul className="md:text-md flex place-items-center justify-start">
                <li className="min-w-[150px]">
                    <Link to={"/home"}>
                        <img src={logo} alt="Logo" className="h-16 w-full"/>
                    </Link>
                </li>
                {}
                {/* Navigation Links */}
                <li className="whitespace-nowrap">
                    <ul className="flex h-full place-items-center justify-around lg:gap-4 px-3">
                        <li className="w-15 flex h-full place-items-center justify-center border-b-white ease-in-out duration-300 text-gray-100 hover:scale-110">
                            <div className="hidden lg:inline-block">
                                <Link to="/home" className="flex place-items-center gap-2 capitalize">
                                    <FontAwesomeIcon icon={faHome}/>
                                    <span>Home</span>
                                </Link>
                            </div>
                        </li>
                        <li className="w-15 flex h-full place-items-center justify-center border-b-white ease-in-out duration-300 text-gray-100 hover:scale-110">
                            <div className="hidden lg:inline-block">
                                <Link to="" className="flex place-items-center gap-2 capitalize">
                                    <FontAwesomeIcon icon={faPhone}/>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </li>
                        <li className="w-15 flex h-full place-items-center justify-center border-b-white ease-in-out duration-300 text-gray-100 hover:scale-110">
                            <div className="hidden lg:inline-block">
                                <Link to="/about" className="flex place-items-center gap-2 capitalize">
                                    <FontAwesomeIcon icon={faAddressCard}/>
                                    <span>About Us</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="basis-full flex place-items-center justify-end gap-24 ">
                    <SearchBar onSubmit={() => console.log("Search submitted")}/>
                    {isLogin ?
                        profile
                        :
                        <Link
                            to="/login"
                            className="flex place-items-center items-center whitespace-nowrap rounded-full bg-amber-400 p-5 px-10 py-3 text-black shadow-lg hover:bg-amber-300 hover:shadow-inner"
                        >
                            Login
                        </Link>
                    }
                </li>
            </ul>
        </nav>
    );
};

export default NavbarComponent;
