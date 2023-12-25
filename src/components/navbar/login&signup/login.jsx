import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Link
        to="/login"
        className="flex place-items-center items-center rounded-full bg-amber-400 p-5 px-10 py-3 text-black shadow-lg hover:bg-amber-300 hover:shadow-inner"
      >
        Login / Signup
      </Link>
    </>
  );
}
