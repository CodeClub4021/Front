import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
