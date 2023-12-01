import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Coach from "../../../layouts/coach/index.jsx";
import Admin from "../../../layouts/admin/index.jsx";
import Footer from "../../../components/footer/footer.jsx";
const CoachPanel = () => {
    return(
        <div className="flex flex-col ">
            <div>
                <Routes>
                    <Route path="coach/*" element={<Coach/>}/>
                    <Route path="admin/*" element={<Admin/>}/>
                    <Route path="/" element={<Navigate to="/coach" replace/>}/>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default CoachPanel;