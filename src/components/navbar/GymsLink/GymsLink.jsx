import React from "react";

import { Link as ScrollLink } from "react-scroll";
const GymsLink = () => {
  return (
    <ScrollLink
      to="gyms-section" // the same value as the element's id
      spy={true}
      smooth={true}
      duration={500}
      offset={-79}
      className="cursor-pointer"
    >
      <span className="cursor-pointer">Gyms</span>
    </ScrollLink>
  );
};

export default GymsLink;
