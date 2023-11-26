import Navbar from "./components/navbar/navbar.jsx";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./layouts/admin/index.jsx";
import Footer from "./components/footer/footer.jsx";
function App() {
    return (
        <div className="flex flex-col ">
            <div>
                <Routes>
                    <Route path="admin/*" element={<Admin/>}/>
                    <Route path="/" element={<Navigate to="/admin" replace/>}/>
                </Routes>
            </div>
            <Footer />
        </div>)
}
export default App;
