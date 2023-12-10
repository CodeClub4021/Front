import React, { useState } from "react";

const AddCoach = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize form data if needed
    // For example: name: '', price: '', category: '', description: ''
    birthYear: "",
    birthMonth: "",
    birthDay: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use formData to access the form values
    // For example: console.log(formData);
    // Close the modal after submission
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    //change here
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
                {/* Form */}
                <form>
                  {/* Include your form input fields here */}

                  <div className="my-0 flex gap-10">
                    <span>
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
                        className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                        placeholder="Full name"
                      />
                    </span>

                    <span>
                      <label className="block text-lg font-medium text-amber-400">
                        Gender
                      </label>
                      <div className="mt-1">
                        <label className="ml-2 inline-flex items-center">
                          <input
                            type="radio"
                            name="Gender"
                            value="Male"
                            checked={formData.Gender === "Male"}
                            onChange={handleInputChange}
                            className="form-radio h-5 w-5 text-amber-400"
                          />
                          <span className="ml-2 text-amber-400">Male</span>
                        </label>
                      </div>
                      <div className="mt-1">
                        <label className="ml-2 inline-flex items-center ">
                          <input
                            type="radio"
                            name="Gender"
                            value="Female"
                            checked={formData.Gender === "Female"}
                            onChange={handleInputChange}
                            className="form-radio h-5 w-5 text-amber-400"
                          />
                          <span className="ml-2 text-amber-400">Female</span>
                        </label>
                      </div>
                    </span>
                  </div>

                  <div className="my-0">
                    <label className="block text-lg font-medium text-amber-400">
                      Birthday
                    </label>
                    <div className="mt-1 flex gap-3">
                      {/* Year dropdown */}
                      <select
                        name="birthYear"
                        value={formData.birthYear}
                        onChange={handleInputChange}
                        className="w-full rounded-md border p-2 shadow-sm"
                      >
                        <option value="">Year</option>
                        {/* Generate Year options */}
                        {[...Array(100).keys()].map((offset) => {
                          const year = new Date().getFullYear() - offset;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>

                      {/* Month dropdown */}
                      <select
                        name="birthMonth"
                        value={formData.birthMonth}
                        onChange={handleInputChange}
                        className="w-full rounded-md border p-2 shadow-sm"
                      >
                        <option value="">Month</option>
                        {/* Generate Month options */}
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(
                          (month) => (
                            <option key={month} value={month}>
                              {new Date(0, month - 1).toLocaleString(
                                "default",
                                { month: "long" }
                              )}
                            </option>
                          )
                        )}
                      </select>

                      {/* Day dropdown */}
                      <select
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleInputChange}
                        className="w-full rounded-md border p-2 shadow-sm"
                      >
                        <option value="">Day</option>
                        {/* Generate Day options */}
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(
                          (day) => (
                            <option key={day} value={day}>
                              {day.toString().padStart(2, "0")}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="my-5 flex gap-10">
                    <span>
                      <label className="block text-lg font-medium text-amber-400">
                        Gym
                      </label>

                      <input
                        type="text"
                        name="Location"
                        id="Location"
                        value={formData.Location}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md p-2 placeholder-gray-500 shadow-sm"
                        placeholder="Location"
                      />
                    </span>

                    <span>
                      <label
                        htmlFor="experience"
                        className="block text-lg font-medium text-amber-400"
                      >
                        Experience (years)
                      </label>
                      <input
                        type="number"
                        name="experience"
                        id="experience"
                        min="0"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md border p-2 shadow-sm placeholder-gray-500 shadow-sm"
                        placeholder="0"
                      />
                    </span>
                  </div>

                  <div className="my-5 flex gap-10">
                    {/* <span>
                      <label className="block text-lg font-medium text-amber-400">
                        Education
                      </label>
                      <input
                        type="text"
                        name="Education"
                        id="Education"
                        value={formData.Education}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md p-2"
                      />
                    </span> */}

                    {/* <span>
                      <label className="block text-lg font-thin text-amber-400">
                        Languages
                      </label>
                      <input
                        type="text"
                        name="Languages"
                        id="Languages"
                        value={formData.Languages}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md p-2"
                      />
                    </span> */}
                    {/* if it want to be next to each other have to be in same div */}
                  </div>

                  <div className="mb-0">
                    <label
                      htmlFor="description"
                      className="block text-lg font-medium text-amber-400"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      onChange={handleInputChange}
                      value={formData.description}
                      className="mt-1 w-full resize-y rounded-md border border-gray-300 p-2 placeholder-gray-500
                                shadow-sm"
                      placeholder="Additional Info"
                    />
                  </div>

                  {/* Add more input fields as needed */}
                </form>
                {/* End Form */}
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
              Add info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoach;
