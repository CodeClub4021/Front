import React from "react";
import { Link as ScrollLink } from "react-scroll";

const CoachesLink = () => {
  return (
    <ScrollLink
      to="coaches-section" // the same value as the element's id
      spy={true}
      smooth={true}
      duration={500}
      offset={-79}
      className="cursor-pointer"
    >
      <span className="cursor-pointer">Coaches</span>
    </ScrollLink>
  );
};

export default CoachesLink;
