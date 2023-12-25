import React from "react";
import { Link } from "react-router-dom";

const AboutUsLink = () => {
  return (
    <Link to="/about" className="flex">
      <span>About Us</span>
    </Link>
  );
};

export default AboutUsLink;
