import React from "react";
import coach1 from "../../../assets/img/avatars/avatar1.png";
import coach2 from "../../../assets/img/avatars/avatar2.png";
import coach3 from "../../../assets/img/avatars/avatar3.png";
import coach4 from "../../../assets/img/avatars/avatar4.png";
import CoachCard from "./coachCard.jsx";

const MyCoaches = () => {
    const coaches = [
        {name: "Coach 1", phone: "+123 456 7890", rating: 4.5, image: coach1, id: 1},
        {name: "Coach 2", phone: "+987 654 3210", rating: 4.2, image: coach2, id: 2},
        {name: "Coach 3", phone: "+111 222 3333", rating: 4.8, image: coach3, id: 3},
        {name: "Coach 4", phone: "+444 555 6666", rating: 4.0, image: coach4, id: 4},
    ];

    return (
        <div className="flex w-full flex-col gap-5">
            <div className="my-8 flex h-fit w-full flex-col gap-8 lg:grid lg:grid-cols-12">

                {coaches.map((coach, index) => (
                    <div key={index} className="col-span-6">
                        <CoachCard coach={coach}/>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default MyCoaches;