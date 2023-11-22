import React from "react";

export default function Slider({imgAddress}) {
    return (
        <div className="absolute top-22 min-w-full max-h-screen h-screen">
            <div className="bg-cover bg-center w-full h-full"
                 style={{backgroundImage: "url(" + imgAddress + ")"}}>
            </div>
        </div>
    )
}
