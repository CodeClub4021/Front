import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import "react-toastify/dist/ReactToastify.css";


if (!import.meta.env.VITE_BASE_URL)
    throw new Error("URL need to set...");
console.log(import.meta.env.VITE_BASE_URL)

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
