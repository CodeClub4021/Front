import React from "react";

const ModalInput = ({value, setValue, placeHolder, reauired}) => {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValue((prevData) => ({
            ...prevData, [name]: value,
        }));
    };
    return (
        <label className="block text-lg font-medium text-amber-400">
            {placeHolder}
            <input
                name={placeHolder}
                value={value}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                placeholder={placeHolder}
                type="text"
                required={reauired}
            />
        </label>
    )
}

export default ModalInput;