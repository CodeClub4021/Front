import ModalInput from "./modalInput.jsx";
import React, {useState} from "react";
import SelectNumber from "./selectNumber.jsx";
import MultiRangeSlider from "./multiRange.jsx";
import TextArea from "./textArea.jsx";
import RadioInput from "./radioInput.jsx";
import axios from "axios";

const EditGymInfo = ({open, setOpen}) => {
    const [formData, setFormData] = useState({
        name: "", address: "", city: "", phoneNumber: "", tuition: "", establishedYear: 1800, workTime: [0, 24], gender: ""
    });

    const createData = (formData) => {
        let result = {};
        for (let key in formData){
            if (formData[key]){
                if (!((key === "establishedYear" && formData[key] === 1800) || (key === "workTime" && formData[key][0] === 0 && formData[key][1] === 24)))
                    result[key] = formData[key];
            }
        }
        return result;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = createData(formData);
        console.log(data);
        try {
            const res = await axios.patch(import.meta.env.VITE_BASE_URL + `gyms/${1}`, data);
            console.log(res);
            // navigate
        } catch (err){
            console.error(err.message);
        }
    }

    const close = () => {
        setOpen(false);
        setFormData({
            name: "", address: "", city: "", phoneNumber: "", tuition: ""
        });
    }

    const validateNumber = (value) => {
        let result = true;
        if (isNaN(+value))
            result = false;
        return result;
    }

    return (
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
                                                    reauired={false}
                                                    validate={(value) => true}/>
                                        <ModalInput value={formData.city} setValue={setFormData}
                                                    placeHolder="city"
                                                    reauired={false}
                                                    validate={(value) => true}/>
                                        <ModalInput value={formData.phoneNumber} setValue={setFormData}
                                                    placeHolder={"phoneNumber"}
                                                    reauired={false}
                                                    validate={validateNumber}/>
                                        <ModalInput value={formData.tuition} setValue={setFormData}
                                                    placeHolder={"tuition"}
                                                    reauired={false}
                                                    validate={validateNumber}/>
                                        <SelectNumber value={formData.establishedYear} setValue={setFormData} begin={1800}
                                                      end={2024} label={"established year"} name={"establishedYear"}/>
                                        <MultiRangeSlider value={formData} setValue={setFormData} min={0}
                                                          max={24} text={"work time"} name={"workTime"}/>
                                        <TextArea value={formData.address} setValue={setFormData}
                                                  placeHolder={"Address"} name={"address"}/>
                                        <RadioInput value={formData.gender} setValue={setFormData} label={"Gender"}
                                                    values={["man", "woman", "both"]} name={"gender"}/>
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
        </div>
    )
}

export default EditGymInfo;