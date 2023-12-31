import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Land from "./pages/landing/land.jsx";
import Home from "./pages/Home/Home.jsx";
import ManagePanel from "./pages/panel/manager/managePanel";
import AboutUs from "./pages/AboutUs/index.jsx";
import CoachPanel from "./pages/panel/coach/coachPanel.jsx";
import UserPanel from "./pages/panel/user/userpanel";
import Gym from "./pages/gym_win/gym_win";
import CoachRegister from "./pages/CoachRegister/CoachRegister.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import CommentSection from "./pages/Comment/CommentSection.jsx";

import React from "react";

function App() {
  return (
    <>
      {/* <Land/> */}
      {/* <Home /> */}
      {/* <ManagePanel /> */}
      {/* <CoachPanel/> */}
      {/* <Home /> */}
      {/* <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<UserPanel />} />
        <Route path="/managerpanel" element={<ManagePanel />} />
        <Route path="/coachpanel" element={<CoachPanel />} />
        <Route path="/gympanel" element={<Gym />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes> */}
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
    </>
  );
}

export default App;
