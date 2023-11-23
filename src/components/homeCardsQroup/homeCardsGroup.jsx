import React from "react";
import Card from "../card/card.jsx";

const HomeCardsGroup = ({data, subTitle}) => {
    // needs to fetch data using api
    return(
        <div className="flex flex-col justify-center gap-5 text-white bg-gray-700 px-8 py-10 pt-4 w-full">
            <h1 className="font-bold text-3xl capitalize">{subTitle}</h1>
            <div className="grid grid-cols-3 gap-x-10 gap-y-10">
                {data.map((d, index) => {
                    return <div key={index} className="col-span-1 flex justify-center place-items-center"><Card data={d} /></div>;
                })}
            </div>
        </div>
    )
}

export default HomeCardsGroup;