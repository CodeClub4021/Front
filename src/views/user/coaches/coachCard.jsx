import Card from "../../../components/UserPanel/card/index.jsx";
import {Button} from "@chakra-ui/react";
import ShowStars from "../../../components/UserPanel/ShowStars/ShowStars.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentDots} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


const CoachCard = ({coach}) => {
    return (
        <Card extra={"w-full h-full p-3"}>
            {/* Coach Information */}
            <ul className="grid grid-cols-4 gap-4">
                {/* Left Column */}
                <li className="col-span-1 lg:col-span-1">
                    <div className="flex flex-col items-center">
                        <div className="mb-3 h-20 w-20 overflow-hidden rounded-full">
                            <div
                                className="h-full w-full rounded-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${coach.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            ></div>
                        </div>
                        <Button>
                            <h4 className="text-lg font-bold text-gray-800 hover:text-gray-600 dark:text-white">
                                {coach.name}
                            </h4>
                        </Button>
                    </div>
                </li>

                {/* Right Column */}
                <li className="col-span-2 lg:col-span-2">
                    <div className="text-sm text-gray-600">
                        <p className="mb-2 inline-block">Phone: {coach.phone}</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className=" mb-2  pl-4 text-lg font-bold text-gray-800 dark:text-white">
                            Rating
                        </h4>
                        <div className="flex items-center pr-14">
                            <div className="mx-2 flex font-bold">
                                <ShowStars/>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="col-span-1 lg:col-span-1 relative">
                    <Link to={`chat/${Math.floor(Math.random() * 1000000)}`} state={{id: coach.id, name: coach.name}}
                          className="bg-amber-300 border-none bg-none absolute bottom-1 right-5 transition ease-in-outdelay-500 hover:scale-125">
                        < FontAwesomeIcon icon={faCommentDots} className="text-3xl text-purple-500"/>
                    </Link>
                </li>
            </ul>
        </Card>
    );
};

export default CoachCard;