import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Không cần import BrowserRouter nữa
import NormalPage from "./pages/normalPage/normalPage";
import AdminPage from "./pages/adminPage/adminPage";

const App = () => {
    return(
        <>
        <AdminPage/>
        {/* <NormalPage/> */}
        </>
    )
};

export default App;
