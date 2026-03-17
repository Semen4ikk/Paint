import {MainPage} from "../pages/MainPage.jsx";
import {HashRouter as Router, Routes, Route } from "react-router-dom";




export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </Router>
    );
}