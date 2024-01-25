import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "../../../layouts/user/index.jsx";
import Footer from "../../../components/footer/footer.jsx";

const UserPanel = () => {
  return (
    <div className="flex flex-col justify-start">
        <Routes>
          <Route path="/*" element={<User />} />
          <Route path="/" element={<Navigate to="/user/profile" replace />} />
        </Routes>
      <Footer />
    </div>
  );
};

export default UserPanel;
