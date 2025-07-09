import React, { useState } from "react";
import "./Footer.css";
import ContactIcons from "./ContactIcons";
import { NavLink, Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import NotifyMake from "./NotifyMake";

const Footer = () => {
  const handleClick = async () => {
    await NotifyMake({
      name: `Клик на footer`,
      phone: "—",
      message: `Пользователь кликнул на email`,
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Навигация</h4>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Контакты</h4>
          <a
            href="mailto:info@arik-medical.com"
            className="email-link"
            onClick={() => handleClick()}
          >
            <FaEnvelope className="email-icon" /> info@arik-medical.com
          </a>
          <ContactIcons variant="footer" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Арик Медикал. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
