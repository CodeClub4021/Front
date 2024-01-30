import React, { useEffect, useState } from "react";
import Profile from "./profile/profile.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHome,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Logout from "./logout.jsx";

const NavbarComponent = ({ isLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollingDown = scrollTop > 50;

      setIsScrolled(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-gray fixed top-0 z-50 h-fit w-full bg-gray-900 py-2 text-lg ${
        isScrolled ? "opacity-0" : ""
      }`}
      id="navbar"
    >
      <ul className="md:text-md grid grid-cols-12">
        <li className="col-span-1 col-start-1">
          <Link className="">
            {/*shouls stay in a router after defining routers*/}
            <img src={logo} alt="Logo" className="h-16 w-full" />
          </Link>
        </li>
        {/* Navigation Links */}
        <li className="whitespace-nowrap">
          <ul className="flex h-full place-items-center justify-around px-3 lg:gap-4">
            <li className="w-15 flex h-full place-items-center justify-center border-b-white text-gray-100 duration-300 ease-in-out hover:scale-110">
              <div className="hidden lg:inline-block">
                <Link
                  to="/home"
                  className="flex place-items-center gap-2 capitalize"
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span>Home</span>
                </Link>
              </div>
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white text-gray-100 duration-300 ease-in-out hover:scale-110">
              <div className="hidden lg:inline-block">
                <Link
                  to=""
                  className="flex place-items-center gap-2 capitalize"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  <span>Contact Us</span>
                </Link>
              </div>
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white text-gray-100 duration-300 ease-in-out hover:scale-110">
              <div className="hidden lg:inline-block">
                <Link
                  to="/about"
                  className="flex place-items-center gap-2 capitalize"
                >
                  <FontAwesomeIcon icon={faAddressCard} />
                  <span>About Us</span>
                </Link>
              </div>
            </li>
          </ul>
        </li>
        <li className="flex basis-full place-items-center justify-end gap-24 ">
          <SearchBar onSubmit={() => console.log("Search submitted")} />
          {isLogin ? (
            profile
          ) : (
            <Link
              to="/login"
              className="flex place-items-center items-center whitespace-nowrap rounded-full bg-amber-400 p-5 px-10 py-3 text-black shadow-lg hover:bg-amber-300 hover:shadow-inner"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
