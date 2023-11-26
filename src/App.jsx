import Navbar from "./components/navbar/navbar.jsx";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./layouts/admin/index.jsx";
import Footer from "./components/footer/footer.jsx";
import ManagePanel from "./pages/panel/manager/managePanel.jsx";
function App() {
    return (
        <>
            <ManagePanel />
        </>
    )
}
export default App;
