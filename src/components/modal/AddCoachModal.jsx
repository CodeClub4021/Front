import axios from "axios";
import React, { useState } from "react";

const AddCoach = ({ onClose, manager_id }) => {
  // const [formData, setFormData] = useState({
  //   // Initialize form data if needed For example: name: '', price: '', category: '', description: ''
  //   // birthYear: "",
  //   // birthMonth: "",
  //   // birthDay: "",
  // });
  const [formData, setFormData] = useState({});
  const [coachUsername, setCoachUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://codeclub-api.liara.run/gyms/${manager_id}/add-coach/`, {
        coach_username: coachUsername
      });
      console.log(res.data);
      onClose();
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        setErrorMessage("Invalid ID. Please check the provided information.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block transform overflow-hidden rounded-2xl bg-white text-left align-bottom shadow-xl transition sm:my-8 sm:w-full sm:max-w-md sm:align-middle"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-amber-400 px-4 py-5 sm:flex sm:px-6 ">
            <h3
              className="text-3xl font-medium leading-6 text-gray-900"
              id="modal-headline"
            >
              Coach Information
            </h3>
          </div>
          
          <div className="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mr-6 mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                <form>
                  <div className="my-0 flex gap-10">
                    <span>
                      <label
                        htmlFor="name"
                        className="block text-lg font-medium text-amber-400"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={coachUsername}
                        onChange={(e) => setCoachUsername(e.target.value)}
                        className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                        placeholder="Name"
                      />
                    </span>
                  </div>
                </form>

                {/* Display error message if present */}
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                
              </div>
            </div>
          </div>
          <div className="bg-amber-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onClick={onClose}
              type="button"
              className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoach;


          {/* <span>
                      <label className="block text-lg font-medium text-amber-400">
                        Gym
                      </label>

                      <input
                        type="text" //slectoption
                        name="Location"
                        id="Location"
                        value={formData.Location}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                        placeholder="Location"
                      />
                    </span> */}