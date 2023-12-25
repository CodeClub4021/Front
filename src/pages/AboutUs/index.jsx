import React from "react";
import NavbarJavad from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import Banner from "./components/AboutBanner.jsx";

export default function AboutUs() {

  return (
    <div className="flex h-full w-full">
      {/* Navbar & Main Content */}
      <NavbarJavad/>
      <div className="h-full w-full bg-gray-900 dark:!bg-navy-900">
        {/* Main Content */}
        <main className={`mx-[12px] h-full flex-none transition-all mt-20 mb-10 md:pr-2 xl:ml-[30px]`}>
            <div className="text-6xl font-bold text-amber-300">About Us </div>
            <p className="ml-5 mt-2 px-3 text-2xl text-amber-300">

                Community of code club is a group of students in IUST university. This website is a project of system analysis and design course.

            </p>
            <div className="text-4xl mt-5 font-bold text-amber-300">Our Team :</div>
            <div className="flex w-full flex-col gap-5">
                <div className="w-ful mt-5 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                    <div className="col-span-3 m-4 lg:!mb-0">
                    <Banner />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
