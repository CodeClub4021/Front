import React from "react";
function Register() {
  return (
    <div className="content absolute top-0 flex h-full w-full flex-col items-center justify-center text-white">
      <div>
        <button
          className="bg-rgba-110-128-179 focus:shadow-outline-yellow mt-5 rounded-full border-transparent bg-custom px-6 py-4 text-base font-medium leading-5 tracking-wide text-black transition duration-700 ease-in-out hover:bg-amber-500 hover:text-white focus:outline-none active:bg-amber-400"
          target="_self"
          href="/map"
        >
          Coach Registeration
        </button>
      </div>
    </div>
  );
}

export default Register;
