import React from "react";
import Card from "../../../components/UserPanel/card";
import ShowStars from "../../../components/UserPanel/ShowStars/ShowStars";
import coach1 from "../../../assets/img/avatars/avatar1.png";
import coach2 from "../../../assets/img/avatars/avatar2.png";
import coach3 from "../../../assets/img/avatars/avatar3.png";
import coach4 from "../../../assets/img/avatars/avatar4.png";
import { Button } from "@chakra-ui/react";
import { rating } from "@material-tailwind/react";

const MyCoaches = () => {
  const coaches = [
    {
      name: "Tracy Anderson",
      phone: "+123 456 7890",
      rating: 4.5,
      image: coach1,
    },
    {
      name: "Jillian Michaels",
      phone: "+987 654 3210",
      rating: 4.2,
      image: coach2,
    },
    { name: "Joe Wicks", phone: "+111 222 3333", rating: 4.8, image: coach3 },
    { name: "Shaun T", phone: "+444 555 6666", rating: 4.0, image: coach4 },
  ];

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="my-8 flex h-fit w-full flex-col gap-8 lg:grid lg:grid-cols-12">
        {coaches.map((coach, index) => (
          <div key={index} className="col-span-6">
            <CoachCard coach={coach} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CoachCard = ({ coach }) => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Coach Information */}
      <ul className="grid grid-cols-3 gap-4">
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
                <ShowStars />
              </div>
              {/* <span className="ml-2 inline-block px-4 text-sm text-gray-600">
                <span className="whitespace-nowrap">123 reviews</span>
              </span> */}
            </div>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default MyCoaches;

// const Coaches = () => {
//   const coaches = [
//     { name: "Coach 1", phone: "+123 456 7890", rating: 4.5, image: coach1 },
//     { name: "Coach 2", phone: "+987 654 3210", rating: 4.2, image: coach2 },
//     { name: "Coach 3", phone: "+111 222 3333", rating: 4.8, image: coach3 },
//     { name: "Coach 4", phone: "+444 555 6666", rating: 4.0, image: coach4 },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4">
//       {coaches.map((coach, index) => (
//         <div key={index} className="flex flex-col overflow-hidden rounded-lg">
//           {/* Coach Image */}
//           <img
//             className="h-40 w-full rounded-t-lg object-cover object-center"
//             src={coach.image}
//             alt={`Coach ${index + 1}`}
//           />

//           {/* Coach Details */}
//           <div className="flex h-full flex-col justify-between bg-gray-800 p-4 text-white">
//             {/* Rating */}
//             <div className="text-sm text-gray-400">
//               <span role="img" aria-label="Star">
//                 ⭐
//               </span>{" "}
//               {coach.rating}
//             </div>

//             {/* Coach Name */}
//             <div className="mb-2 text-xl font-bold">{coach.name}</div>

//             {/* Phone Number */}
//             <div className="text-sm">{coach.phone}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Coaches;
