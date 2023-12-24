import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "../../../layouts/user/index.jsx";
import Footer from "../../../components/footer/footer.jsx";

const UserPanel = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <Routes>
          <Route path="admin/*" element={<User />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default UserPanel;
