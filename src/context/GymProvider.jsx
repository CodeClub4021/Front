import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllGyms } from "../functions/apiCalls";

const GymContext = createContext();

export const GymProvider = ({ children }) => {
  const [gyms, setGyms] = useState({ data: [], loading: false, error: null });

  useEffect(() => {
    getAllGyms(setGyms);
  }, []);

  return <GymContext.Provider value={{ gyms }}>{children}</GymContext.Provider>;
};

export const useGymContext = () => {
  const context = useContext(GymContext);

  // if (!context) {
  //   throw new Error("useGymContext must be used within a GymProvider");
  // }

  return context;
};
