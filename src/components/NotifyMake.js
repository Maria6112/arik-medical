import React from "react";
import collectUserMeta from "../utils/collectUserMeta";

const NotifyMake = async ({ name, phone, message }) => {
  try {
    const meta = await collectUserMeta();
    const fullMessage = `
📨 Новая активность с Арик Медикал:
👤 Имя: ${name}
📱 Телефон: ${phone}
💬 Сообщение: ${message}

🌍 IP: ${meta.ip}
📍 Город: ${meta.city}, ${meta.country}
🖥 Браузер: ${meta.userAgent}
⏰ Время: ${meta.dateTime}
    `;

    await fetch("https://hook.eu2.make.com/whtv5yyjpf33zncp0t2ibhjmi5blrlyl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: fullMessage,
      }),
    });
  } catch (error) {
    console.log("Ошибка при отправке в Make:", error);
  }
};

export default NotifyMake;
