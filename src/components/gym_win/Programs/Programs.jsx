import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Programs.css";
import { programsData } from "../../../assets/gym-win/data/programsData";
import RightArrow from "../../../assets/gym-win/rightArrow.png";
import { motion } from "framer-motion";
import { url } from "../../../axiosConfig/useHttp";

const Programs = ({ data, gymId }) => {
  return (
    <div className="Programs px-8 py-10">
      {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      {/* programs-categories */}
      <div className="prgoram-categories">
        {programsData.map((program, i) => (
          <motion.div
            whileHover={{ background: "var(--planCard)", cursor: "pointer" }}
            transition={{ type: "spring" }}
            className="category"
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
