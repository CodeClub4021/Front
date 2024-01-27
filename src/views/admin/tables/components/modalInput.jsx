import React from "react";

const ModalInput = ({value, setValue, placeHolder, reauired, validate}) => {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (validate(value)){
            setValue((prevData) => ({
                ...prevData, [name]: value,
            }));
        }
    };
    return (
        <label className="block text-lg font-medium text-amber-400 capitalize">
            {placeHolder}
            <input
                name={placeHolder}
                value={value}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-md p-2 bg-neutral-800 placeholder-gray-500 text-white focus:border-2 focus:border-yellow-500 shadow-sm"
                placeholder={placeHolder}
                type="text"
                required={reauired}
            />
        </label>
    )
}

export default ModalInput;