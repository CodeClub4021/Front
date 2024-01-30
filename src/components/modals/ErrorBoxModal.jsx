import React, { useState } from 'react';
import { BiSolidMessageAltError } from "react-icons/bi";

const ErrorBoxModal = ({ onClose , message}) => {
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
              className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition sm:my-8 sm:align-middle sm:max-w-md sm:w-80"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-amber-400 px-4 py-3 sm:px-6 sm:flex ">
                <span>
                    <BiSolidMessageAltError className='h-9 w-9 text-gray-900'/>
                </span>
                <span>
                    <h3 className="text-3xl font-medium text-gray-900" id="modal-headline">
                    Error
                  </h3>
                </span>
                  
              </div>
              <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                
                <div className="sm:flex sm:items-start">
                  
                  <div className="mt-3 mr-6 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                  
                    {/* Form */}
                    <form>
                      {/* Include your form input fields here */}
    
                      <div className="my-0 flex gap-10">
                        
                        <p className="text-2xl font-medium text-amber-400">{message}</p>
                        
                      </div>                  
                      {/* Add more input fields as needed */}                 
                      
                    </form>
                    {/* End Form */}
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 px-4 pb-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={onClose}
                  type="button"
                  className="inline-flex justify-center ml-5 px-4 py-2 text-2xl font-medium bg-amber-400 text-gray-900 border border-transparent rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ErrorBoxModal;