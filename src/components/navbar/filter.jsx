import {useState} from "react";
import SelectComponent from "./selectComponent.jsx";
import {FILTER_VALUES} from "../../Constants.js";

const Filter = ({props}) => {
    const {state, setState, city, setCity, rate, setRate} = props;
    return (
        <div className="w-full flex justify-around place-items-center bg-gray-950 p-2 transition-all duration-1000">
            <label className="flex gap-3">
                <span className="capitalize">
                    state:
                </span>
                <SelectComponent options={FILTER_VALUES.states} selectedOption={state} setSelectedOption={setState}/>
            </label>
            <label className="flex gap-3">
                <span className="capitalize">
                    city:
                </span>
                {state ?
                    <SelectComponent options={FILTER_VALUES.cities[state]} selectedOption={city}
                                     setSelectedOption={setCity}/>
                    :
                    <SelectComponent options={[]} selectedOption={city} setSelectedOption={setCity}/>
                }
            </label>
            <label className="flex gap-3">
                <span className="capitalize">
                    rate:
                </span>
                <SelectComponent options={FILTER_VALUES.rate} selectedOption={rate} setSelectedOption={setRate}/>
            </label>
        </div>
    )
}

export default Filter;