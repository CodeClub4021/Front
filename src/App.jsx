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

function App() {
  return (
    <div className="main-routes-wrapper">
      <Routes>
        {/* <Route path="/" element={<Land />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user*" element={<UserPanel />} />
        <Route path="/admin*" element={<AdminPanel />} />
        <Route path="/coach*" element={<CoachPanel />} />
        <Route path="/gympanel" element={<Gym />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      {/* <Land/> */}
      {/* <Home /> */}
      {/* <ManagePanel /> */}
      {/* <CoachPanel /> */}
      {/* <UserPanel /> */}
      <Gym />
      {/* <Login /> */}
      {/* <CoachRegister/> */}
      {/* <AboutUs /> */}
      {/* <CommentSection/> */}
    </div>
  );
}

export default App;
