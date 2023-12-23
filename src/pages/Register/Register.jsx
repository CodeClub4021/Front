import React, { useState } from "react";

function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content absolute top-0 flex h-full w-full flex-col items-center justify-center text-white">
      <div>
        <button
          className="bg-rgba-110-128-179 focus:shadow-outline-yellow mt-5 rounded-full border-transparent bg-custom px-6 py-4 text-base font-medium leading-5 tracking-wide text-black transition duration-700 ease-in-out hover:bg-amber-500 hover:text-white focus:outline-none active:bg-amber-400"
          onClick={openModal}
        >
          Coach Registration
        </button>
      </div>

      {isModalOpen && (
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
              {/* Your existing modal content goes here */}
              {/* ... */}

              <div className="bg-amber-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  onClick={closeModal}
                  type="button"
                  className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Close
                </button>
                {/* You might want to replace the onClick function below with your form submission logic */}
                <button
                  // onClick={handleSubmit}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-xl font-medium text-amber-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Add info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
