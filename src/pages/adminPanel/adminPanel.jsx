import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import MyCoaches from "./MyCoaches";
import MyGyms from "./MyGyms";
import StarRating from "../../components/scoring_stars/Scoring_Stars";

function AdminPanel() {
  return (
    <Router>
      <div className="w-30 my-40 flex place-items-center">
        <div className="py-18 my-6 flex w-40 flex-col bg-gray-800 p-4 ">
          <ul className="grid h-full grid-rows-3">
            <li className="row-span-1 flex justify-start py-5">
              <Link to="/profile" className="text-white">
                profile
              </Link>
            </li>
            <li className="row-span-1  flex justify-start py-5">
              <Link to="/my-coaches" className="text-white">
                My Coaches
              </Link>
            </li>
            <li className=" row-span-1 flex justify-start py-5">
              <Link to="/my-gyms" className="text-white">
                My Gyms
              </Link>
            </li>
          </ul>
        </div>

        <main className="flex w-full justify-center p-4">
          <Routes>
            <Route path="/profile" />
            <Route
              path="/my-coaches"
              element={<StarRating title="Rate Your Coaches" />}
            />
            <Route
              path="/my-gyms"
              element={<StarRating title="Rate Your Gyms" />}
            />
          </Routes>
          <Outlet />
        </main>
      </div>
    </Router>
  );
}

export default AdminPanel;
