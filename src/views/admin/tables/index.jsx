import Coachs from "./components/Coachs";
import GymGallery from "./components/GymGallery";
import GymInfo from "./components/GymInfo";
import AddGym from "./components/addGym.jsx";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../contexts.jsx";
import axios from "axios";
import Loading from "../../../components/loading/loading.jsx";

import {
    columnsDataDevelopment,
    columnsDataCheck,
    columnsDataColumns,
    columnsDataComplex,
} from "./variables/columnsData";
import tableDataColumns from "./variables/tableDataColumns.json";
import ColumnsTable from "./components/ColumnsTable";
import tableDataCoachs from "./variables/tableDataCoachs.json"
import {tableColumnsCoachs} from "./variables/tableColumnsCoachs"
import {Bounce, toast} from "react-toastify";


const Tables = () => {
    const {gymIds} = useContext(UserContext);
    const [isFetching, setIsFetching] = useState(false);
    const [gymInfo, setGymInfo] = useState({});

    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get(import.meta.env.VITE_BASE_URL + `/gyms/${gymIds[0]}/`);
                setIsFetching(false);
                console.log(res.data);
                setGymInfo(res.data)
            } catch (err) {
                console.error(err);
                toast.error("oops!", {
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
                <Loading />
            }
            {!Object.keys(gymInfo).length ?
                    <AddGym username={"admin"}/>
                :
                <div>

                    <div className="mt-8 col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
                        <GymGallery/>
                    </div>

                    <div className="mt-5 col-span-5 lg:col-span-12 lg:mb-0 3xl:col-span-2">
                        <GymInfo/>
                    </div>

                    <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
                        <ColumnsTable
                            columnsData={columnsDataColumns}
                            tableData={tableDataColumns}
                        />
                        <Coachs
                            extra="mb-5"
                            tableData={tableDataCoachs}
                            columnsData={tableColumnsCoachs}
                        />
                    </div>
                </div>
            }

        </div>
    );
};

export default Tables;
