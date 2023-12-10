import { useState } from "react";
import "./AdminPanel.css";
import ShowStars from "./ShowStars";

const AdminPanel = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold underline">
        <h1>Admin Panel</h1>
      </div>

      <div class="flex items-center">
        <ShowStars StarsNumbers="3" />
      </div>
    </>
  );
};

export default ManagerPanel;
