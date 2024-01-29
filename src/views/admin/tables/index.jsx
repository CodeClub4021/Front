import Coachs from "./components/Coachs";
import GymGallery from "./components/GymGallery";
import GymInfo from "./components/GymInfo";
import AddGym from "./components/addGym.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../contexts.jsx";
import axios from "axios";

import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex,
} from "./variables/columnsData";
import ColumnsTable from "./components/ColumnsTable";
import tableDataCoachs from "./variables/tableDataCoachs.json"
import {Bounce, toast} from "react-toastify";
import createToken from "../../../axiosConfig/createToken.js";
import LoadingWhole from "../../../components/loading/loadingWhole.jsx";


const Tables = () => {
    const {gymIds} = useContext(UserContext);
    const [isFetching, setIsFetching] = useState(false);
    const [gymInfo, setGymInfo] = useState({});

    useEffect(() => {
        (async function () {
            // if (gymIds.length === 0) return
            try {
                const res = await axios.get(import.meta.env.VITE_BASE_URL + `gyms/${5}/`, {
                    headers: {
                        Authorization: createToken()
                    }
                });
                setIsFetching(false);
                console.log(res.data);
                setGymInfo(res.data)
            } catch (err) {
                console.error(err);
                toast.error("nothing found!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce
                });
                setIsFetching(false);
            }
        })();
    }, []);

    return (
        <div className="pt-5">
            {
                isFetching &&
                <LoadingWhole />
            }
            {!Object.keys(gymInfo).length ?
                    <AddGym/>
                :
                <div>

                    <div className="mt-8 col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
                        <GymGallery imageAddresses={[""]}/>
                    </div>

                    <div className="mt-5 col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-2">
                        <GymInfo info={gymInfo}/>
                    </div>

                    <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
                        <ColumnsTable
                            columnsData={columnsDataColumns}
                            tableData={[]}
                        />
                        <Coachs
                            extra="mb-5"
                            tableData={tableDataCoachs}
                            columnsData={[]}
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default Tables;
