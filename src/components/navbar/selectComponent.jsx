import React from "react";

const SelectComponent = ({options, selectedOption, setSelectedOption}) => {
    const changeHandler = (e) => {
        setSelectedOption(e.target.value);
    }
    console.log(setSelectedOption);
    return(
        <select className="select select-bordered select-sm w-full max-w-xs transition-all duration-300" value={selectedOption} onChange={changeHandler}>
            <option selected={true} disabled={true}>---</option>
            {options.map((opt, index) => {
                return (<option key={index + opt} value={opt}>{opt}</option>)
            })}
        </select>
    )
}

export default SelectComponent;