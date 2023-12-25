import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Land from "./pages/landing/land.jsx";
import Home from "./pages/Home/Home.jsx";
import ManagePanel from "./pages/panel/manager/managePanel";
import CoachPanel from "./pages/panel/coach/coachPanel.jsx";
import UserPanel from "./pages/panel/user/userpanel";
import Gym from "./pages/gym_win/gym_win";
import Navbar from "./components/navbar/navbar.jsx";
// import CoachRegister from "./pages/CoachRegister/CoachRegister.jsx";
import React from "react";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<UserPanel />} />
        <Route path="/managerpanel" element={<ManagePanel />} />
        <Route path="/coachpanel" element={<CoachPanel />} />
        <Route path="/gympanel" element={<Gym />} />
      </Routes>
      {/* <Land/> */}
      {/* <Home /> */}
      {/* <ManagePanel /> */}
      {/* <CoachPanel /> */}
      {/* <UserPanel /> */}
      {/* <Gym /> */}
      {/* <Login /> */}
      {/* <CoachRegister/> */}
    </>
  );
}

export default App;
