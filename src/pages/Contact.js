import React from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaViber,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../components/ContactIcons.css";
import NotifyMake from "../components/NotifyMake";

const Contact = () => {
  const handleClick = async (serviceName) => {
    await NotifyMake({
      name: `Клик на ${serviceName}`,
      phone: "—",
      message: `Пользователь кликнул по иконке ${serviceName}`,
    });
  };

  return (
    <div>
      <section>
        <h1>Связаться с нами</h1>
        <p>Выберете удобный для вас способ связи:</p>
      </section>
      <div className="contact-us">
        <div>
          <a
            href="tel:+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={"icon-btn phone-icon navbar"}
            onClick={() => handleClick("Phone")}
          >
            <FaPhone size={60} />
          </a>
          <h5>Phone</h5>
        </div>
        <div>
          <a
            href="mailto:ariktours@mail.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={"icon-btn email-icon navbar"}
            onClick={() => handleClick("Email")}
          >
            <FaEnvelope size={60} />
          </a>
          <h5>Email</h5>
        </div>
        <div>
          <a
            href="https://wa.me/972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={"icon-btn whatsapp navbar"}
            onClick={() => handleClick("WhatsApp")}
          >
            <FaWhatsapp size={60} />
          </a>
          <h5>Whatsapp</h5>
        </div>
        <div>
          <a
            href="viber://chat?number=+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={"icon-btn viber navbar"}
            onClick={() => handleClick("Viber")}
          >
            <FaViber size={60} />
          </a>
          <h5>Viber</h5>
        </div>
        <div>
          <a
            href="https://t.me/+972543421852"
            target="_blank"
            rel="noopener noreferrer"
            className={"icon-btn telegram navbar"}
            onClick={() => handleClick("Telegram")}
          >
            <FaTelegramPlane size={60} />
          </a>
          <h5>Telegram</h5>
        </div>
      </div>

      <div className="contact-us">
        <p>Номер телефона: +972-543421852</p>
      </div>
      <div className="contact-us">
        <p>Рабочии часы: Вc - Пт с 09:00 до 20:00</p>
      </div>
    </div>
  );
};

export default Contact;
