
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Không cần import BrowserRouter nữa
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePage from "../HomePage";
import ServicesPage from "../ServicesPage";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import BookingPage from "../BookingPage";

const NormalPage = () => {
    const location = useLocation(); // Hook useLocation() để lấy đường dẫn hiện tại

    const props_nav = [
        { isGeneralNavigation: true, nav_name: "Trang chủ", path: "/"},
        { isGeneralNavigation: true, nav_name: "Giới thiệu", path: "/about"},
        { isGeneralNavigation: true, nav_name: "Liên hệ", path: "/contact"},
        { isGeneralNavigation: true, nav_name: "Đăng nhập", path: "/login"},
        { isGeneralNavigation: true, nav_name: "Đăng kí", path: "/register"},
        { isGeneralNavigation: true, nav_name: "Dịch vụ", path: "/services"},
        { isGeneralNavigation: true, nav_name: "Đặt Lịch", path: "/booking"},
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
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </main>
            {/* Chỉ hiển thị Footer khi không phải trang đăng nhập hoặc đăng ký */}
            {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
        </div>
    );
}

export default NormalPage;