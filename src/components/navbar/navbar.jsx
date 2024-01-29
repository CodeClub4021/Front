import React from "react";
import Profile from "./profile/profile.jsx";
import Login from "./login&signup/login.jsx";
import HomeLink from "./HomeLink/HomeLink.jsx";
import GymsLink from "./GymsLink/GymsLink.jsx";
import CoachesLink from "./CoachesLink/CoachesLink.jsx";
import ContactUsLink from "./ContactUsLink/ContactUsLink.jsx";
import AboutUsLink from "./AboutUsLink/AboutUsLink.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
import logo from "../../assets/images/Logo.png";

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

        <li className="col-span-4">
          <ul className="flex h-full place-items-center justify-around gap-1 px-3">
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <HomeLink />
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <GymsLink />
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <CoachesLink />
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <ContactUsLink />
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <AboutUsLink />
            </li>
          </ul>
        </li>
        <li className="col-span-3 col-start-8 flex place-items-center justify-center ">
          <SearchBar onSubmit={() => console.log("Search submitted")} />
        </li>
        <li className="col-span-2 col-start-11 flex justify-start">
          {isLogin ? <Profile /> : <Login />}
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
