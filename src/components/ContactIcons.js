import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaViber } from "react-icons/fa";
import "./ContactIcons.css";
import NotifyMake from "./NotifyMake";

const ContactIcons = ({ variant = "navbar" }) => {
  const handleClick = async (serviceName) => {
    await NotifyMake({
      name: `Клик на ${serviceName}`,
      phone: "—",
      message: `Пользователь кликнул по иконке ${serviceName}`,
    });
  };

  return (
    <div className={`contact-icons ${variant}`}>
      <div className="messenger-buttons">
        <div className="messenger-icons">
          <a
            href="https://wa.me/972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn whatsapp ${variant}`}
            onClick={() => handleClick("WhatsApp")}
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://t.me/+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn telegram ${variant}`}
            onClick={() => handleClick("Telegram")}
          >
            <FaTelegramPlane size={22} />
          </a>
          <a
            href="viber://chat?number=+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn viber ${variant}`}
            onClick={() => handleClick("Viber")}
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
