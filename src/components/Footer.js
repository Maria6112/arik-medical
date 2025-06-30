import React from "react";
import "./Footer.css";
import ContactIcons from "./ContactIcons";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Навигация</h4>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Контакты</h4>
          <a href="mailto:mariastefanian@gmail.com" className="email-link">
            <FaEnvelope className="email-icon" /> ariktours@mail.ru
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
