import React, {useState} from "react";
import ModalInput from "./modalInput.jsx";
import axios from "axios";
import LoadingWhole from "../../../../components/loading/loadingWhole.jsx";
import createToken from "../../../../axiosConfig/createToken.js";

const AddGym = () => {
    const [formData, setFormData] = useState({
        name: "", address: "", city: "",
    });
    const [open, setOpen] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            ...formData
        });
        try {
            setIsFetching(true);
            const res = await axios.post(import.meta.env.VITE_BASE_URL + "gyms/", {
                ...formData
            }, {
                headers: {
                    Authorization: createToken()
                }
            });
            setIsFetching(false);
            console.log(res.data);
            window.location.reload();
        } catch (err) {
            console.error(err);
            setIsFetching(false);
        }
    };

    const close = () => {
        setOpen(false);
        setFormData({
            name: "",
            address: "",
            city: ""
        });
    }
    return (
        <div>
            <div className="w-full flex justify-center py-6 px-5">
                <button
                    className="capitalize daisybtn daisybtn-accent border-none bg-yellow-500 text-gray-900 text-xl font-extralight transition duration-300 hover:bg-yellow-500 hover:scale-105 "
                    onClick={() => setOpen(true)}
                >
                    add Gym
                </button>
            </div>
            {open &&
                <div>
                    <div className={`fixed inset-0 z-40 overflow-y-auto ${open ? "block" : "hidden"}`}>
                        <div
                            className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden={open}>
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden={open}>
                                &#8203;
                            </span>
                            <div
                                className="inline-block transform overflow-hidden rounded-2xl bg-white text-left align-bottom shadow-xl transition sm:my-8 sm:w-full sm:max-w-md sm:align-middle"
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="modal-headline">
                                {/*top headaer*/}
                                <div className="bg-amber-400 px-4 py-5 sm:flex sm:px-6 ">
                                    <h3
                                        className="text-3xl font-medium leading-6 text-gray-900"
                                        id="modal-headline">
                                        Gym Information
                                    </h3>
                                </div>
                                <div className="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mr-6 mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <form className="my-0 flex flex-col gap-5">
                                                <ModalInput value={formData.name} setValue={setFormData}
                                                            placeHolder="name"
                                                            reauired={true}
                                                            validate={(val) => true}/>
                                                <ModalInput value={formData.address} setValue={setFormData}
                                                            placeHolder="address"
                                                            reauired={true}
                                                            validate={(val) => true}/>
                                                <ModalInput value={formData.city} setValue={setFormData}
                                                            placeHolder="city"
                                                            reauired={false}
                                                            validate={(val) => true}/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-amber-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        type="button"
                                        onClick={close}
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        Add info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isFetching && <LoadingWhole/>}
                </div>
            }
        </div>
    );
};

export default AddGym;
