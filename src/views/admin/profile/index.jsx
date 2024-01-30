import Banner from "./components/Banner";
import General from "./components/General";
import Upload from "./components/Upload";
import {useContext, useEffect} from "react";
import axios from "axios";
import createToken from "../../../axiosConfig/createToken.js";
import {UserContext} from "../../../contexts.jsx";

const ProfileOverview = () => {
    const {gymIds} = useContext(UserContext);
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(import.meta.env.VITE_BASE_URL + "user/", {
                    headers: {
                        Authorization: createToken()
                    }
                });
                console.log(res);
            //     set gym Ids
            } catch (err){
                console.error(err);
            }
        })();
    }, []);
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-5 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-8 lg:!mb-0">
          <Banner />
        </div>

        {/* <div className="col-span-4 lg:!mb-0">
          <Storage />
        </div> */}

        <div className="z-0 col-span-4 lg:!mb-0">
          <Upload />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        {/* <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div> */}
        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-2">
          <General />
        </div>

        {/* <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div> */}
      </div>
    </div>
  );
};

export default ProfileOverview;
