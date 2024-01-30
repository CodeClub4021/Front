import axios from 'axios';
import React, { useState } from 'react';

const EditProfile = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize form data if needed
    // For example: name: '', price: '', category: '', description: ''
    birthYear: '2001',
    birthMonth: '9',
    birthDay: '11',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("khaaaaaaaaaaaaaaaaaaaaaaaaat from manager");
    const UpdatedUser = {
      full_name: formData.name,
      sex: formData.Gender,
      birthday: `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`,
      location: formData.Location,
      work_experience: formData.experience,
      education: formData.Education,
      language: formData.Languages,
      more_description: formData.description,
    };
    console.log(UpdatedUser);
      try{
        const res = await axios.patch("https://gymlist.liara.run/manager/update/", UpdatedUser, 
        {
          headers: {
            Authorization: 'Token ' + localStorage.getItem('token')
          }
        });
        console.log(res);
      } catch(err){
        console.error(err);
      }
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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition sm:my-8 sm:align-middle sm:max-w-md sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-amber-400 px-4 py-5 sm:px-6 sm:flex ">
              <h3 className="text-3xl leading-6 font-medium text-gray-900" id="modal-headline">
                Edit Profile
              </h3>
          </div>
          <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            
            <div className="sm:flex sm:items-start">
              
              <div className="mt-3 mr-6 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
              
                {/* Form */}
                <form>
                  {/* Include your form input fields here */}

                  <div className="my-0 flex gap-10">
                    <span>
                      <label htmlFor="name" className="block text-lg font-medium text-amber-400">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full rounded-md"
                      />
                    </span>
                        
                    <span>
                      <label className="block text-lg font-medium text-amber-400">
                        Gender
                      </label>
                      <div className="mt-1">
                        <label className="inline-flex items-center ml-2">
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
                        <label className="inline-flex items-center ml-2 ">
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
                    <div className="flex gap-3 mt-1">
                      {/* Year dropdown */}
                      <select
                        name="birthYear"
                        value={formData.birthYear}
                        onChange={handleInputChange}
                        className="p-2 border rounded-md shadow-sm w-full"
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
                        className="p-2 border rounded-md shadow-sm w-full"
                      >
                        <option value="">Month</option>
                        {/* Generate Month options */}
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <option key={month} value={month}>
                             {new Date(0, month - 1).toLocaleString('default', {month: 'long'})}
                          </option>
                        ))}
                      </select>

                      {/* Day dropdown */}
                      <select
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleInputChange}
                        className="p-2 border rounded-md shadow-sm w-full"
                      >
                        <option value="">Day</option>
                        {/* Generate Day options */}
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                          <option key={day} value={day}>
                            {day.toString().padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>


                  <div className="my-5 flex gap-10">
                    <span>
                      <label className="block text-lg font-medium text-amber-400">
                      Location
                      </label>
                      
                        <input
                          type="text"
                          name="Location"
                          id="Location"
                          value={formData.Location}
                          onChange={handleInputChange}
                          className="mt-1 p-2 w-full rounded-md"
                        />
                    </span>
                      
                    <span>
                      <label htmlFor="experience" className="block text-lg font-medium text-amber-400">
                        Experience (years)
                      </label>
                        <input
                        type="number"
                        name="experience"
                        id="experience"
                        min="0"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md shadow-sm"
                        placeholder="0"
                      />
                    </span>   
                  </div>

                  <div className="my-5 flex gap-10">
                    <span>
                      <label className="block text-lg font-medium text-amber-400">
                      Education
                      </label>
                      <input
                        type="text"
                        name="Education"
                        id="Education"
                        value={formData.Education}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full rounded-md"
                      />
                    </span>
                      
                    <span>
                      <label className="block text-lg font-thin text-amber-400">
                      Languages
                      </label>
                      <input
                        type="text"
                        name="Languages"
                        id="Languages"
                        value={formData.Languages}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full rounded-md"
                      />
                    </span>   
                  </div>
                 
                  <div className="mb-0">
                    <label htmlFor="description" className="block text-lg font-medium text-amber-400">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      onChange={handleInputChange}
                      value={formData.description}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm resize-y
                                placeholder-gray-500"
                      placeholder="Enter a description..."
                    />
                  </div>

                  
                 
                  {/* Add more input fields as needed */}
                  
                  
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
          
          <div className="bg-amber-400 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex justify-center ml-5 px-4 py-2 text-xl font-medium text-amber-400 bg-gray-900 border border-transparent rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
              Close
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-xl font-medium text-amber-400 bg-gray-900 border border-transparent rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
