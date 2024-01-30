import React, {useEffect, useState} from "react";
import Card from "../card/card.jsx";

const InternalGroup = ({data, subTitle}) => {
    const [cardsNumber, setCardsNumber] = useState(8);

    useEffect(() => {
        window.addEventListener("resize", ev => {
            if (768 < window.innerWidth && window.innerWidth < 1024){
                console.log(12)
                setCardsNumber(4);
            }
            else if (window.innerWidth < 768){
                setCardsNumber(2);
            }
        });
        if (768 < window.innerWidth && window.innerWidth < 1024)
            setCardsNumber(4);
        else if (window.innerWidth < 768)
            setCardsNumber(2);

        () => window.removeEventListener("resize");
    }, []);

    return(
        <div className="flex flex-col justify-center gap-5 text-white bg-gray-700 px-8 py-10 pt-4 w-full">
            <h1 className="font-bold text-3xl capitalize">{subTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
                {data.map((d, index) => {
                    if (index < cardsNumber){
                        return <div key={index} className="col-span-1 flex justify-center place-items-center"><Card data={d} /></div>;
                    }
                })}
            </div>
        </div>
    )
}

export default InternalGroup;