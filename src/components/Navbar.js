import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/arik-medical-logo1.JPG";
import ContactIcons from "../components/ContactIcons";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleContactIcons = () => setShowContacts(!showContacts);

  return (
    <nav className="navbar">
      <div className="navbar-logo navbar-left">
        <Link to="/">
          <img src={logo} alt="Арик Медикал" className="logo-img" />
        </Link>
      </div>
      {/* Кнопка связи по центру */}
      <div className="navbar-contact-toggle">
        <button
          onClick={toggleContactIcons}
          className="contact-toggle-btn"
          aria-label="Показать способы связи"
        >
          <FaPhone />
        </button>
        {showContacts && (
          <div className="mobile-contact-icons">
            <ContactIcons variant="navbar" />
          </div>
        )}
      </div>
      <div className={`navbar-center navbar-links ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          О нас
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Контакты
        </NavLink>
      </div>
      {/* Контакты справа */}
      <div className="navbar-right">
        <ContactIcons variant="navbar" />
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          О нас
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Контакты
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
