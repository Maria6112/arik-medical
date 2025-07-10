import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { Analytics } from "@vercel/analytics/react";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Продолжительность анимации в миллисекундах
      once: true, // Анимация происходит только один раз
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
      <Analytics />
    </Router>
  );
};

export default App;
