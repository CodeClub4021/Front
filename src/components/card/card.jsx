import React from "react";
import Button from "../button/button.jsx";
import Rate from "../rating/rate.jsx";


export default function Card ({data}){
    const {imageAddress, name, rateNumber, state, city} = data;
    return(
        <div className="bg-gray-900 font-sans text-white font-bold w-fit h-fit py-4 px-3 flex flex-col place-items-center gap-5 border-solid border-yellow-5x`x`00 rounded-2xl transition-transform duration-300 transform hover:scale-105 ">
            <div className="flex flex-col place-items-center gap-3">
                <img src={imageAddress} className="rounded-xl" alt="picture" />
                <span className="capitalize"> {name} </span>
            </div>
            {location && <div className="w-full capitalize flex gap-3">
                <span>
                    location:
                </span>
                <span>
                    {`${state}, ${city}`}
                </span>
            </div>}
            <div className="flex justify-between place-items-center gap-3">
                <div>
                    <Rate rateNumbeer={rateNumber} />
                </div>
                <div>
                    <Button label={"follow"} onClick={() => console.log("OK")} />
                </div>
            </div>
        </div>
    )
}