import React from "react";
import Card from "../../../components/UserPanel/card";
import ShowStar from "../../../components/rating/profile_rate.jsx";
import ShowStars from "../../../components/UserPanel/ShowStars/ShowStars";
import avatar from "../../../assets/img/profile/banner.png";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import GymSlideshow from "./components/GymSlideshow.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const programData = [
  { day: "Monday", exercise: "Squat", time: "9:00 AM" },
  { day: "Tuesday", exercise: "Bench Press", time: "4:00 PM" },
  { day: "Wednesday", exercise: "Deadlift", time: "10:30 AM" },
  { day: "Thursday", exercise: "Shoulder Press", time: "6:00 PM" },
  { day: "Friday", exercise: "Pull-ups", time: "7:30 AM" },
  { day: "Saturday", exercise: "Bicep Curls", time: "3:00 PM" },
  { day: "Sunday", exercise: "Plank", time: "11:00 AM" },
];
const MyGyms = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful my-8 flex h-fit flex-col gap-8 lg:grid lg:grid-cols-12">
        {[...Array(7)].map((_, index) => (
          <div key={index} className="col-span-12">
            <GymCard />
          </div>
        ))}
      </div>
    </div>
  );
};

const GymCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Gym Photos */}
      <GymSlideshow />

      {/* Gym Information */}
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 lg:col-span-1">
          <Button>
            <Link
              to="/gympanel"
              className="text-lg font-bold text-gray-800 hover:text-gray-600 dark:text-white"
            >
              Gym Name
            </Link>
          </Button>
          <div className="mb-2 text-sm text-gray-600">
            <p className="mr-20 inline-block">Location: City, Country</p>
            <p className="inline-block">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-1">
          <h4 className="pl-48 text-lg font-bold text-gray-800 dark:text-white">
            Rating
          </h4>
          <div className="ml-44 flex items-center">
            <div className="flex font-bold">
              <ShowStars />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <button
            onClick={openModal}
            className=" ml-36  rounded-full bg-custom px-6 py-4 font-medium tracking-wide text-black transition duration-700 ease-in-out hover:bg-amber-500 hover:text-white"
          >
            show program
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent className="fixed inset-0 top-80 z-50 mx-80 h-fit overflow-y-auto rounded-md bg-amber-400">
          <ModalHeader>
            {" "}
            <div className="bg-amber-400 px-4 py-5 sm:flex sm:px-6 ">
              <h3
                className="text-3xl font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                Program
              </h3>
            </div>
          </ModalHeader>
          {/* <ModalCloseButton className="ml-96" /> */}
          <ModalBody className="bg-gray-900">
            <ModalBody>
              <Table className="w-full" colorScheme="gray">
                <Thead>
                  <Tr className="text-white">
                    <Th>Day</Th>
                    <Th>Exercise</Th>
                    <Th>Time</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {programData.map((item, index) => (
                    <Tr className="text-white" key={index}>
                      <Td>{item.day}</Td>
                      <Td>{item.exercise}</Td>
                      <Td>{item.time}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </ModalBody>
          </ModalBody>
          <ModalFooter className="bg-gray-900">
            <button
              onClick={closeModal}
              type="button"
              className="mb-2 mr-5 inline-flex w-20  justify-center rounded-md border border-transparent bg-amber-400 px-4 py-2 text-xl font-medium text-gray-900  hover:text-white "
            >
              Close
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default MyGyms;
