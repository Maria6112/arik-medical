import React, { useContext, useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/arik-medical-logo1.JPG";
import ContactIcons from "../components/ContactIcons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo navbar-left">
        <img src={logo} alt="Арик Медикал" className="logo-img" />
      </div>

      <div className={`navbar-center navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Главная
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          О нас
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Контакты
        </Link>
      </div>
      {/* Контакты справа */}
      <div className="navbar-right">
        <ContactIcons variant="navbar" />
      </div>
      <div
        className={`burger ${menuOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
