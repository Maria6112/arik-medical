const collectUserMeta = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    const ip = data.ip;
    const city = data.city;
    const country = data.country_name;
    const userAgent = navigator.userAgent;
    const dateTime = new Date().toLocaleString();

    return {
      ip,
      city,
      country,
      userAgent,
      dateTime,
    };
  } catch (error) {
    console.error("Ошибка при сборе мета-данных:", error);
    return {
      ip: "неизвестно",
      city: "неизвестно",
      country: "неизвестно",
      userAgent: navigator.userAgent,
      dateTime: new Date().toLocaleString(),
    };
  }
};

export default collectUserMeta;
