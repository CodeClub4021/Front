import React from "react";

const SelectComponent = ({options, selectedOption, setSelectedOption}) => {
    const changeHandler = (e) => {
        setSelectedOption(e.target.value);
    }
    return(
        <select className="select select-bordered w-full max-w-xs transition-all duration-300" value={selectedOption} onChange={changeHandler}>
            <option disabled value={""}>---</option>
            {options.map((opt, index) => {
                return (<option key={index + opt} value={opt}>{opt}</option>)
            })}
        </select>
    )
}

export default SelectComponent;