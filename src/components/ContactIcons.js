import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaViber,
  FaEnvelope,
} from "react-icons/fa";
import "./ContactIcons.css";

const ContactIcons = ({ variant = "navbar" }) => {
  return (
    <div className={`contact-icons ${variant}`}>
      <div className="messenger-buttons">
        <div className="messenger-icons">
          <a
            href="https://wa.me/972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn whatsapp ${variant}`}
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://t.me/+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn telegram ${variant}`}
          >
            <FaTelegramPlane size={22} />
          </a>
          <a
            href="viber://chat?number=+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn viber ${variant}`}
          >
            <FaViber size={22} />
          </a>
        </div>
        <span className="phone-number">+972-54-3421852</span>
      </div>
    </div>
  );
};

export default ContactIcons;
