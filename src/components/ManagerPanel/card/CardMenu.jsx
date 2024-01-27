import React, {useState} from "react";
import Dropdown from "../dropdown";
import {BsThreeDots} from "react-icons/bs";
import {FaUserEdit} from "react-icons/fa";
import EditGymInfo from "../../../views/admin/tables/components/editGymInfo.jsx";

function CardMenu(props) {
    const {transparent} = props;
    const [open, setOpen] = React.useState(false);
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <Dropdown
                button={
                    <button
                        onClick={() => setOpen(!open)}
                        open={open}
                        className={`flex items-center text-xl bg-gray-900 text-amber-300 hover:cursor-pointer ${
                            transparent
                                ? "bg-none text-white hover:bg-none active:bg-none"
                                : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                        } linear justify-center rounded-lg font-bold transition duration-200`}
                    >
                        <BsThreeDots className="h-6 w-6"/>
                    </button>
                }
                animation={"origin-top-right transition-all duration-300 ease-in-out"}
                classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
                children={
                    <button
                        className="z-50 w-max rounded-xl bg-gray-900 py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                        onClick={() => setOpenModal(true)}
                    >
                        <p className="hover:text-white flex cursor-pointer items-center gap-2 text-amber-300 hover:font-medium">
                            <span>
                              <FaUserEdit/>
                            </span>
                            Edit info
                        </p>
                    </button>
                }
            />
            <EditGymInfo open={openModal} setOpen={setOpenModal}/>
        </div>
    );
}

export default CardMenu;
