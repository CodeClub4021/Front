import Navbar from "./components/navbar/navbar.jsx";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./layouts/admin/index.jsx";
function App() {
    const elem = [];
    for (let i = 0; i < 10; i++) {
        elem.push(<br/>);
    }

  return (
    <>
        {/* <Navbar isLogin={false} />
        {elem} */}
        <Routes >
          <Route path="admin/*" element={<Admin />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
        </Routes>
    </>
  )
}

export default App
