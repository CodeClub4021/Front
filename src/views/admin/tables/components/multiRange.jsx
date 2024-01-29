import React, { useCallback, useEffect, useState, useRef } from "react";
import "./style.css";

const MultiRangeSlider = ({ min, max, text, value, setValue, name}) => {
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(value.workTime[0]);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(value.workTime[1]);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [value, getPercent]);

    const changeHandler = (min, max) => {
        setValue(prevData => ({
            ...prevData, [name]: [min, max]
        }))
    }

    return (
        <div className="flex flex-col gap-5 pl-1 pb-10 text-lg font-medium text-amber-400 capitalize">
            {text}
            <div className="multi-range-container">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value.workTime[0]}
                    onChange={(event) => {
                        console.log(value)
                        const val = Math.min(Number(event.target.value), value.workTime[1] - 1);
                        changeHandler(val, value.workTime[1]);
                        minValRef.current = val;
                    }}
                    className="multi-range-thumb multi-range-thumb--left"
                    style={{zIndex: value.workTime[0] > max - 100 && "5"}}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value.workTime[1]}
                    onChange={(event) => {
                        const val = Math.max(Number(event.target.value), value.workTime[0] + 1);
                        changeHandler(value.workTime[0], val);
                        maxValRef.current = val;
                    }}
                    className="multi-range-thumb multi-range-thumb--right"
                />

                <div className="multi-range-slider">
                    <div className="multi-range-slider__track"/>
                    <div ref={range} className="multi-range-slider__range"/>
                    <div className="multi-range-slider__left-value">{value.workTime[0]}</div>
                    <div className="multi-range-slider__right-value">{value.workTime[1]}</div>
                </div>
            </div>
        </div>
    );
};
export default MultiRangeSlider;
