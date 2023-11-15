import React from "react";
import Profile from "./profile/profile.jsx";
import Login from "./login&signup/login.jsx";
import logo from "../../assets/images/images.jpeg"


const NavbarComponent = ({isLogin}) => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(13);
    }
    return (
        <nav className="bg-gray-800 text-white text-xl py-2 fixed top-0 w-full">
            <ul className="grid grid-cols-12">
                <li className="col-start-1 col-span-1">
                    <div className="">
                        {/*shouls stay in a router after defining routers*/}
                        <img
                            src={logo} // Placeholder for the logo, replace with your actual logo URL
                            alt="Logo"
                            className="w-full h-12"
                        />
                    </div>
                </li>
                {/*shouls stay in a router after defining routers*/}
                {/* Navigation Links */}
                <li className="col-span-3">
                    <ul className="flex justify-around place-items-center h-full px-3 gap-1">
                        <li className="w-15 flex justify-center place-items-center ">
                            <a href="#" className="">
                                خانه
                            </a>
                        </li>
                        <li className="w-15 flex justify-center place-items-center">
                            <a href="#" className="">
                                باشگاه ها
                            </a>
                        </li>

                        <li className="w-15 flex justify-center place-items-center">

                            <a href="#" className="">
                                مربیان
                            </a>
                        </li>
                        <li className="w-15 flex justify-center place-items-center">

                            <a href="#" className="">
                                تماس با ما
                            </a>
                        </li>
                        <li className="w-15 flex justify-center place-items-center">
                            <a href="#" className="">
                                درباره ما
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="col-start-9 col-span-2 flex ">
                    {/* Search Bar */}
                    <form className="search-bar nav-link-lg" onSubmit={submitHandler}>
                        <input
                            type="text"
                            placeholder="جستجو..."
                            className="bg-gray-700 p-2 rounded-lg placeholder-right text-right"
                            required={true}
                        />
                    </form>
                </li>
                <li className="col-end-13 col-span-1 flex justify-start">
                    {isLogin ?
                        <Profile/>
                        :
                        <Login/>
                    }
                </li>
            </ul>
        </nav>
    )

};

export default NavbarComponent;
