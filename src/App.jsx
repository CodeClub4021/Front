import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Land from "./pages/landing/land.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import UserPanel from "./pages/panel/user/userpanel.jsx";
import Gym from "./pages/gym_win/gym_win";
import CoachRegister from "./pages/CoachRegister/CoachRegister.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import AdminPanel from "./pages/panel/manager/managePanel.jsx";
import CoachPanel from "./pages/panel/coach/coachPanel.jsx";
import CommentSection from "./pages/Comment/CommentSection.jsx";

import React from "react";
import { Toaster } from "react-hot-toast";
import {ToastContainer} from "react-toastify";
import NotFound from "./pages/notFound/notFound.jsx";
import Search from "./pages/search/search.jsx";

function App() {
    return (
        <div className="h-full w-full">
            <Routes>
                <Route path="/" element={<Land/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user*" element={<UserPanel/>}/>
                <Route path="/admin*" element={<AdminPanel/>}/>
                <Route path="/coach*" element={<CoachPanel/>}/>
                <Route path="/gympanel/:id" element={<Gym/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/gympanel" element={<Gym/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
