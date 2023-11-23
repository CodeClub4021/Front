import React from "react";
import Button from "../button/button.jsx";
import Rate from "../rating/rate.jsx";


export default function Card ({data}){
    const {imageAddress, name, rateNumber} = data;
    console.log(imageAddress, name, rateNumber);
    return(
        <div className="bg-gray-600 hover:bg-gray-700 text-white font-bold w-fit h-fit py-4 px-3 flex flex-col place-items-center gap-5 border-solid border-yellow-5x`x`00 rounded-2xl transition-transform duration-300 transform hover:scale-105 ">
            <div className="flex flex-col place-items-center gap-3">
                <img src={imageAddress} className="rounded-xl" alt="picture" />
                <span> {name} </span>
            </div>
            <div className="flex justify-between place-items-center gap-3">
                <div>
                    <Rate rateNumbeer={3.4} />
                </div>
                <div>
                    <Button label={"follow"} onClick={() => console.log("OK")} />
                </div>
            </div>
        </div>
    )
}