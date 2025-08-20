import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./ConsultationForm.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import NotifyMake from "./NotifyMake";
import collectUserMeta from "../utils/collectUserMeta";

const ConsultationForm = () => {
  const form = useRef();
  const [phone, setPhone] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const sendToBot = async (e) => {
    e.preventDefault();

    const formEl = form.current;
    const name = formEl.user_name.value;
    const message = formEl.message.value;

    if (phone.length < 10) {
      setStatusMessage(
        "Ошибка. Пожалуйста, введите корректный номер телефона."
      );
      return;
    }

    try {
      // Получаем метаданные пользователя
      const meta = await collectUserMeta();

      // Записываем в скрытые input'ы
      formEl.user_ip.value = meta.ip;
      formEl.user_city.value = `${meta.city}, ${meta.country}`;
      formEl.user_time.value = meta.dateTime;
      formEl.user_browser.value = meta.userAgent;

      // const result = await emailjs.sendForm(
      //   "service_0bq0qff",
      //   "template_5d9cmq4",
      //   form.current,
      //   "Scuu1QvAY13jEqBtb"
      // );

      // console.log(result.text);

      await NotifyMake({
        name: name,
        phone: phone,
        message: message,
      });

      form.current.reset();
      setPhone("");
      setStatusMessage(
        "Сообщение успешно отправлено! Скоро наш консультает с вами свяжется"
      );
    } catch (error) {
      console.error(error.text || error);
      setStatusMessage("Ошибка при отправке формы. Попробуйте еще раз.");
    }
  };

  return (
    <div className="consultation-widget" id="consultation-form">
      <h3>Получить консультацию</h3>
      <form ref={form} onSubmit={sendToBot}>
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
        <input type="hidden" name="user_ip" />
        <input type="hidden" name="user_city" />
        <input type="hidden" name="user_time" />
        <input type="hidden" name="user_browser" />
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
