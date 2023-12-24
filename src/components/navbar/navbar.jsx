import React from "react";
import Profile from "./profile/profile.jsx";
import Login from "./login&signup/login.jsx";
import logo from "../../assets/images/Logo.png";

const NavbarComponent = ({ isLogin }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(13);
  };
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
              <a href="#" className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block h-6 w-6 justify-center space-x-2"
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
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <a href="#" className="">
                Gyms
              </a>
            </li>

            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <a href="#" className="">
                Coaches
              </a>
            </li>
            <li className="w-15 flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <a href="#" className="">
                Contact us
              </a>
            </li>
            <li className="w-15  flex h-full place-items-center justify-center border-b-white  text-gray-100 hover:border-b-2">
              <a href="#" className="">
                About us
              </a>
            </li>
          </ul>
        </li>
        <li className="col-span-3 col-start-8 flex place-items-center justify-center ">
          {/* Search Bar */}
          <form className="search-bar" onSubmit={submitHandler}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="placeholder-right rounded-full border border-gray-200 border-gray-500 bg-gray-900 p-2 pl-11 pr-4 text-left text-gray-200 placeholder:text-zinc-200 hover:border"
                required={true}
              />
              <span className="absolute inset-y-0 left-3 mr-3 flex w-7  items-center text-white">
                <i className="fas fa-search text-white-400"></i>
              </span>
            </div>
          </form>
        </li>
        <li className="col-span-2 col-start-11 flex justify-start">
          {isLogin ? <Profile /> : <Login />}
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
