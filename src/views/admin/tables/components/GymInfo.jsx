import Card from "../../../../components/ManagerPanel/card/";
import CardMenu from "../../../../components/ManagerPanel/card/CardMenu";
import React from "react";

const GymInfo = ({info}) => {
    return (
        <Card extra={"w-full h-full p-3"}>
            {/* Edit Profile */}
            <div className="ml-auto">
                <CardMenu/>
            </div>
            {/* Header */}
            <div className=" mb-5 w-full">
                <h4 className="px-2 text-2xl font-bold text-gray-900 dark:text-white">
                    Gym Information
                </h4>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-4 gap-4 px-2">
                {["name", "sex", "since", "work_hours", "tuition", "address", "phone_number"].map((value, index) => (
                    <div
                        className="flex flex-col justify-center rounded-2xl bg-gray-900 bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
                        key={index}>
                        <p className="text-base text-gray-500 capitalize">{value.replaceAll("_", " ")}</p>
                        <p className="text-lg font-medium text-white dark:text-white">
                            {info[value]}
                        </p>
                    </div>
                ))}
            </div>


        </Card>
    );
};

export default GymInfo;
