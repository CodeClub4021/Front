import React from "react";
import Profile from "./profile/profile.jsx";
import Login from "./login&signup/login.jsx";
import logo from "../../assets/images/logo.png";

const NavbarComponent = ({ isLogin }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(13);
  };
  return (
    <nav
      className="bg-gray-900 text-gray text-lg py-2 fixed top-0 w-full h-fit z-50"
      id="navbar"
    >
      <ul className="grid grid-cols-12 md:text-md">
        <li className="col-start-1 col-span-1">
          <div className="">
            {/*shouls stay in a router after defining routers*/}
            <img src={logo} alt="Logo" className="w-full h-16" />
          </div>
        </li>
        {}
        {/* Navigation Links */}
        <li className="col-span-4">
          <ul className="flex justify-around place-items-center h-full px-3 gap-1">
            <li className="w-15 h-full flex justify-center place-items-center text-gray-100  hover:border-b-2 border-b-white">
              <a href="#" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block space-x-2 justify-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </a>
            </li>
            <li className="w-15 h-full flex justify-center place-items-center text-gray-100  hover:border-b-2 border-b-white">
              <a href="#" className="">
                Gyms
              </a>
            </li>

            <li className="w-15 h-full flex justify-center place-items-center text-gray-100  hover:border-b-2 border-b-white">
              <a href="#" className="">
                Coaches
              </a>
            </li>
            <li className="w-15 h-full flex justify-center place-items-center text-gray-100  hover:border-b-2 border-b-white">
              <a href="#" className="">
                Contact us
              </a>
            </li>
            <li className="w-15  h-full flex justify-center place-items-center text-gray-100  hover:border-b-2 border-b-white">
              <a href="#" className="">
                About us
              </a>
            </li>
          </ul>
        </li>
        <li className="col-start-8 col-span-3 flex justify-center place-items-center ">
          {/* Search Bar */}
          <form className="search-bar" onSubmit={submitHandler}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 text-gray-200 border border-gray-200 p-2 pl-11 pr-4 rounded-full placeholder-right placeholder:text-zinc-200 text-left hover:border border-gray-500"
                required={true}
              />
              <span className="absolute inset-y-0 left-3 flex items-center mr-3  w-7 text-white">
                <i className="fas fa-search text-white-400"></i>
              </span>
            </div>
          </form>
        </li>
        <li className="col-start-11 col-span-2 flex justify-start">
          {isLogin ? <Profile /> : <Login />}
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
