import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Programs.css";
import { programsData } from "../../../assets/gym-win/data/programsData";
import RightArrow from "../../../assets/gym-win/rightArrow.png";
import { motion } from "framer-motion";
import { url } from "../../../axiosConfig/useHttp";
const Programs = () => {
  const [gyms, setGyms] = useState({ data: [], loading: false, error: null });
  // Api calls
  const getAllGyms = async () => {
    setGyms({ loading: true });
    try {
      const response = await axios.get(`${url}/gyms`);
      setGyms({ data: response.data, loading: false });
    } catch (error) {
      setGyms({ error: "Error fetching data", loading: false });
    }
  };
  useEffect(() => {
    // Fetch data when the component mounts
    getAllGyms();
  }, []); // Empty dependency array ensures the effect runs only once

  console.log(gyms.data);

  return (
    <div className="Programs" id="programs">
      {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">To shape you</span>
      </div>

      {/* programs-categories */}
      <div className="prgoram-categories">
        {programsData.map((program) => (
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
