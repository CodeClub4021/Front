import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "../../../layouts/admin/index.jsx";
import Footer from "../../../components/footer/footer.jsx";

const ManagePanel = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <Routes>
          <Route path="/*" element={<Admin />} />
          <Route path="/*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default ManagePanel;
