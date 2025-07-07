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
        <Link to="/">
          <img src={logo} alt="Арик Медикал" className="logo-img" />
        </Link>
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
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {/* <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div> */}
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
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
    </nav>
  );
};

export default Navbar;
