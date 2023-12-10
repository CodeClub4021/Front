import { Card } from "@chakra-ui/react";
import Banner from "./components/Banner";
import General from "./components/General";
import EditInfo from "./components/Edit";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import CardMenu from "../../../components/UserPanel/card/CardMenu";

const ProfileOverview = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-5 flex h-fit flex-col gap-8 lg:grid lg:grid-cols-12">
        <div className="col-span-12 lg:!mb-0">
          <Banner />
        </div>{" "}
        {/* <div className="col-span-4 lg:!mb-0">
          <Storage />
        </div> */}
        {/* <div className="z-0 col-span-4 lg:!mb-0">
          <Upload />
        </div> */}
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div> */}
        <div className="3xl:col-span-2 col-span-5 lg:col-span-12 lg:mb-0">
          <General />
        </div>
        <button className="3xl:col-span-2 col-span-5 lg:col-span-12 lg:mb-0">
          <EditInfo />
        </button>

        {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileOverview;
