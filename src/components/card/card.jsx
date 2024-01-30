import React from "react";
import Button from "../button/button.jsx";
import Rate from "../rating/rate.jsx";
import {useNavigate} from "react-router-dom";


export default function Card ({data}){
    const {imageAddress, name, rateNumber} = data;
    const navigate = useNavigate();
    const clickHandler = e => {
        e.preventDefault();
        const random = Math.floor(Math.random()* 1000000);
        navigate(`/gympanel/${random}`);
    }
    return(
        <div className="bg-gray-900 font-sans text-white font-bold w-fit h-fit py-4 px-3 flex flex-col place-items-center gap-5 border-solid border-yellow-5x`x`00 rounded-2xl transition-transform duration-300 transform hover:scale-105 ">
            <div className="flex flex-col place-items-center gap-3">
                <img src={imageAddress} className="rounded-xl" alt="picture" />
                <span className="capitalize"> {name} </span>
            </div>
            <div className="flex justify-between place-items-center gap-3">
                <div>
                    <Rate rateNumbeer={rateNumber} />
                </div>
                <div>
                    <Button label={"follow"} onClick={clickHandler} />
                </div>
            </div>
        </div>
    )
}