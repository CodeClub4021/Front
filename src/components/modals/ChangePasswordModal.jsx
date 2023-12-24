import React, { useState } from 'react';
import { IoEye , IoEyeOff } from "react-icons/io5";

const EyeIcon = ({ onClick, isShown }) => {
  const iconName = isShown ? <IoEyeOff className="h-5 w-5 text-amber-400"/> : <IoEye className="h-5 w-5 text-amber-400"/>;
  return (
    <button onClick={onClick} type="button" aria-label={iconName + " password"}>
      {iconName}
    </button>
  );
};

const ChangePassword = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const toggleShowPassword = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };


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
                Change Password
              </h3>
          </div>
          <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            
            <div className="sm:flex sm:items-start">
              
              <div className="mt-3 mr-6 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
              
                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  {/* Current Password */}
                  <div className="mb-4 relative">
                    <label htmlFor="currentPassword" className="block text-lg font-medium text-amber-400">Current Password</label>
                    <input
                      type={showPassword.current ? 'text' : 'password'}
                      name="currentPassword"
                      id="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md shadow-sm"
                      required
                    />
                    <EyeIcon
                      isShown={showPassword.current}
                      onClick={() => toggleShowPassword('current')}
                    />
                  </div>
                  
                  {/* New Password */}
                  <div className="mb-4 relative">
                    <label htmlFor="newPassword" className="block text-lg font-medium text-amber-400">New Password</label>
                    <input
                      type={showPassword.new ? 'text' : 'password'}
                      name="newPassword"
                      id="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md shadow-sm"
                      required
                    />
                    <EyeIcon
                      isShown={showPassword.new}
                      onClick={() => toggleShowPassword('new')}
                    />
                  </div>
                  
                  {/* Confirm New Password */}
                  <div className="mb-4 relative">
                    <label htmlFor="confirmPassword" className="block text-lg font-medium text-amber-400">Confirm New Password</label>
                    <input
                      type={showPassword.confirm ? 'text' : 'password'}
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md shadow-sm"
                      required
                    />
                    <EyeIcon
                      isShown={showPassword.confirm}
                      onClick={() => toggleShowPassword('confirm')}
                    />
                  </div>
                  
                  {/* Buttons */}
                  {/* ... */}

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

export default ChangePassword;
