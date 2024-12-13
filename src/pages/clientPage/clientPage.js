
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Không cần import BrowserRouter nữa
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePage from "../HomePage";
import ServicesPage from "../ServicesPage";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import ClientSchedulePage from "./ClientSchedulePage";
import "../../styles/clientPage/clientPage.css"

const ClientPage = () => {
    const location = useLocation(); // Hook useLocation() để lấy đường dẫn hiện tại

    const [a, seta] = useState(()=>{return(<></>)});

    const props_nav = [
        { isGeneralNavigation: true, nav_name: "Trang chủ", path: "/"},
        { isGeneralNavigation: true, nav_name: "Giới thiệu", path: "/about"},
        { isGeneralNavigation: true, nav_name: "Liên hệ", path: "/contact"},
        { isGeneralNavigation: true,  nav_name: "Dịch vụ", path: "/services"},
        // { type: "",  nav_name: "Đặt Lịch", path: "/booking"},
        { isGeneralNavigation: false,  nav_name: "Lịch trình", path: "/ClientSchedulePage"},
        { isGeneralNavigation: false,  nav_name: "Dịch vụ đăng kí", path: "/Services"},
        { isGeneralNavigation: true,  nav_name: "Tài Khoản", path: ""},
    ];
    return (
        <div className="app">
            <Header props_nav={props_nav}/>
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/ClientSchedulePage" element={<ClientSchedulePage/>}/>
                </Routes>
            </main>
            {/* Chỉ hiển thị Footer khi không phải trang đăng nhập hoặc đăng ký */}
            {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
        </div>
    );
}

export default ClientPage;