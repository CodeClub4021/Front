import React from "react";
import NavbarJavad from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import Armin from "./components/Armin.jsx";
import AB from "./components/AB.jsx";
import Arash from "./components/Arash.jsx";
import Javad from "./components/Javad.jsx";
import Parnian from "./components/Parnian.jsx";
import AA from "./components/AA.jsx";
import Aylin from "./components/Aylin.jsx";
import Bahareh from "./components/Bahareh.jsx";
import Sayin from "./components/sayin.jsx";
import {checkLogin} from "../../functions/checkLogin.js";

export default function AboutUs() {
    const isLogin = checkLogin();
    return (
        <div className="flex min-h-screen w-full">
            {/* Navbar & Main Content */}
            <NavbarJavad isLogin={isLogin} isInPanel={false}/>
            <div className="h-full w-full bg-gray-800 dark:!bg-navy-900">
                {/* Main Content */}
                <main className={`mx-[12px] h-full flex-none transition-all mt-20 mb-10 md:pr-2 xl:ml-[30px]`}>
                    <div className="text-6xl font-bold text-amber-300">About Us</div>
                    <p className="ml-5 mt-2 px-3 text-2xl text-amber-300">

                        Community of code club is a group of students in IUST university. This website is a project of
                        system analysis and design course.

                    </p>
                    <div className="text-4xl mt-5 font-bold text-amber-300">Our Team :</div>
                    <div className="flex w-full flex-col gap-5">
                        <div className="w-ful mt-5 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <Armin/>
                            </div>
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <AB/>
                            </div>
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <Arash/>
                            </div>
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <Javad/>
                            </div>
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <Parnian/>
                            </div>
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <AA/>
                            </div>
                            <div className="col-span-3 m-4 lg:!mb-0">
                                <Sayin/>
                            </div>
                            
                        </div>
                        <div className="w-ful mt-10 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
                        <div className="col-span-6 m-4 lg:!mb-0">
                                <Aylin/>
                            </div>
                            <div className="col-span-6 m-4 lg:!mb-0">
                                <Bahareh/>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
}
