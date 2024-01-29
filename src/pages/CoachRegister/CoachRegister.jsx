import React, { useState } from "react";
import axios from "axios";

function CoachRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    // birthYear: "",
    // birthMonth: "",
    // birthDay: "",
    // gender: "",
    // phoneNumber: "",
    // emailAddress: "",
    // description: "",
    name: "",
    availability: [],
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAvailabilityChange = (e) => {
    const { value } = e.target;

    setFormData((prevData) => {
      const newAvailability = prevData.availability.includes(value)
        ? prevData.availability.filter((day) => day !== value)
        : [...prevData.availability, value];

      return {
        ...prevData,
        availability: newAvailability,
      };
    });
  };

  const handleSubmit = async () => {
    const gymobject = {
      gym_id: formData.name,
    };
    try {
      const response = await axios.post( "https://gymlist.liara.run/coach/join-gym/", gymobject,
        {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
          },
        }
      );
      console.log("the registration is complete", response.data);

      closeModal();
    } catch (error) {
      console.error("the informations are not correct", error);
    }
  };

  return (
    <div className="content relative top-0 flex h-full w-full flex-col items-center justify-center text-white">
      <div>
        <button
          className="bg-rgba-110-128-179 focus:shadow-outline-yellow mt-5 rounded-lg border-transparent bg-custom px-6 py-4 text-base font-medium leading-5 tracking-wide text-black transition duration-700 ease-in-out hover:bg-yellow-500 hover:text-white focus:outline-none active:bg-amber-300"
          onClick={openModal}
        >
          Coach Registration
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block transform overflow-hidden rounded-2xl bg-white text-left align-bottom shadow-xl transition sm:my-8 sm:w-full sm:max-w-md sm:align-middle" // Adjusted max-w-3xl
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-amber-400 px-4 py-5 sm:flex sm:px-6 ">
                <h3
                  className="text-3xl font-medium leading-6 text-gray-900"
                  id="modal-headline"
                >
                  Requirement
                </h3>
              </div>

              {/* Updated sections */}
              <div className="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <h3
                  className="text-lg font-medium leading-6 text-white"
                  id="modal-headline"
                >
                  Please Fill Out The Section
                </h3>

                {/* Name Section */}
                <div className="mt-4">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-amber-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md p-2 text-black placeholder-gray-500 shadow-sm"
                    placeholder="Gym ID"
                  />
                </div>
                {/* // */}
              </div>

              <div className="justify-center bg-amber-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={closeModal}
                  type="button"
                  className="ml-2 inline-flex w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Close Form
                </button>
                <button
                  onClick={() => handleSubmit()}
                  type="submit"
                  className="ml-2 inline-flex w-full justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoachRegister;

{
  /* Gender Section */
}
{
  /* <div className="mt-4">
                  <label className="block text-lg font-medium text-amber-400">
                    Gender
                  </label>
                  <div className="mt-1">
                    <label className="ml-2 inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-amber-400"
                      />
                      <span className="ml-2 text-amber-400">Male</span>
                    </label>
                    <label className="ml-2 inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-amber-400"
                      />
                      <span className="ml-2 text-amber-400">Female</span>
                    </label>
                  </div>
                </div> */
}

{
  /* Phone Number Section */
}
{
  /* <div className="mt-4">
                  <label className="block text-lg font-medium text-amber-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                    placeholder="Phone Number"
                  />
                </div> */
}

{
  /* Email Address Section */
}
{
  /* <div className="mt-4">
                  <label className="block text-lg font-medium text-amber-400">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="emailAddress"
                    id="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                    placeholder="Email Address"
                  />
                </div> */
}

{
  /* Availability Section */
}
{
  /*<div className="mt-4">
                  <label className="block text-lg font-medium text-amber-400">
                    Week Availability
                  </label>
                  <div className="mt-1">
                    {/* Adjust the options as needed */
}
{
  /* {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((day) => (
                      <label
                        key={day}
                        className="ml-2 inline-flex items-center"
                      >
                        <input
                          type="checkbox"
                          name="availability"
                          value={day}
                          checked={formData.availability.includes(day)}
                          onChange={handleAvailabilityChange}
                          className="form-checkbox h-5 w-5 text-amber-400"
                        />
                        <span className="ml-2 text-amber-400">{day}</span>
                      </label>
                    ))}
                  </div>
                </div> */
}

{
  /* Description Section */
}
{
  /*<div className="mt-4">
                  <label
                    htmlFor="description"
                    className="block text-lg font-medium text-amber-400"
                  >
                    Skills and Fields
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows="3"
                    onChange={handleInputChange}
                    value={formData.description}
                    className="mt-1 w-full resize-y rounded-md border border-gray-300 p-2 placeholder-gray-500
                          shadow-sm"
                    placeholder="Skills Information"
                  />
                    </div>*/
}
