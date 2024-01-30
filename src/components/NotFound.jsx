// NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="z-90 fixed flex h-full w-full flex-col items-center justify-center gap-4 bg-transparent text-center text-white">
      <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link className="rounded-md bg-black p-4 hover:bg-custom" to="/">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
