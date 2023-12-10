import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import './index.css'
import { IconContext } from "react-icons";

ReactDOM.createRoot(document.getElementById('root')).render(
    <IconContext.Provider value={{ color: "#fcd34d", className: "global-class-name" }}>
        <App />
    </IconContext.Provider>
)