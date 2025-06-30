import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ConsultationForm.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const ConsultationForm = () => {
  const form = useRef();
  const [phone, setPhone] = useState("");

  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // if (!phone) {
    //   setStatusMessage("Пожалуйста, введите номер телефона.");
    //   return;
    // }

    if (phone.length < 10) {
      setStatusMessage(
        "Ошибка. Пожалуйста, введите корректный номер телефона."
      );
      return;
    }

    emailjs
      .sendForm(
        "service_0bq0qff", // Скопируй из EmailJS
        "template_5d9cmq4", // Скопируй из шаблона EmailJS
        form.current,
        "Scuu1QvAY13jEqBtb" // Скопируй из аккаунта EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage(
            "Сообщение успешно отправлено! Скоро наш консультает с вами свяжется"
          );
          form.current.reset();
          setPhone("");
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("Ошибка при отправке формы. Попробуйте еще раз.");
        }
      );
  };

  return (
    <div className="consultation-widget" id="consultation-form">
      <h3>Получить консультацию</h3>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Имя" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <PhoneInput
          country={"ru"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputProps={{
            name: "phone_full",
            required: true,
            autoFocus: false,
            placeholder: "Номер телефона",
          }}
          inputStyle={{ width: "100%" }}
        />
        <textarea name="message" placeholder="Ваше сообщение" required />
        {/* <input type="file" name="file" /> */}
        <button type="submit">Отправить</button>
        {/* Сообщение о статусе */}
        {statusMessage && (
          <p
            style={{
              marginTop: "10px",
              color: statusMessage.includes("Ошибка") ? "red" : "green",
            }}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ConsultationForm;
