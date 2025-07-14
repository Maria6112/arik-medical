import React, { useRef } from "react";
import "./Home.css";
import ConsultationForm from "../components/ConsultationForm";
import { FaPlane, FaCar, FaUserMd, FaFileAlt } from "react-icons/fa";

const Home = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="background-section">
      <div className="home-wrapper">
        <div className="home-main-content">
          <section className="welcome" data-aos="fade-up">
            <h1>Добро пожаловать!</h1>
            <p>
              Мы помогаем организовать лечение в Израиле для русскоязычных
              пациентов в клинике Ассута.
            </p>
          </section>

          <section className="intro" data-aos="fade-up" data-aos-delay="100">
            <h1>Клиника Ассута (Израиль)</h1>
            <p>
              Ассута — один из ведущих медицинских центров Израиля, сочетающий
              передовые технологии и высокий уровень сервиса. Клиника находится
              в престижном районе Тель-Авива и включает в себя сеть из более чем
              10 филиалов по всей стране.
            </p>
          </section>
          <section className="about" data-aos="fade-up" data-aos-delay="200">
            <h2>Почему выбирают Ассуту</h2>
            <ul>
              <li>Современное оборудование и точная диагностика</li>
              <li>Врачи международного уровня</li>
              <li>Комфорт, сопоставимый с гостиничным</li>
              <li>Десятки тысяч успешных операций ежегодно</li>
              <li>Пациенты из США, Европы, СНГ</li>
            </ul>
          </section>
        </div>

        <div
          className="home-sidebar"
          data-aos="fade-left"
          data-aos-delay="400"
          ref={formRef}
        >
          <div className="form-wrapper">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <section
        className="specializations"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h2>Основные направления лечения</h2>
        <div className="specialties-grid">
          <div data-aos="zoom-in" data-aos-delay="100">
            <h3>Хирургия</h3>
            <p>Общая, пластическая, бариатрическая, малоинвазивная</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <h3>Нейрохирургия</h3>
            <p>Щадящие методы лечения позвоночника, вертебропластика</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <h3>Кардиология</h3>
            <p>Гибридные операционные, стентирование, шунтирование</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="400">
            <h3>Онкология</h3>
            <p>Иммунотерапия, фотодинамика, новейшие протоколы</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="500">
            <h3>Ортопедия</h3>
            <p>Замена суставов, лечение остеохондроза, грыж</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="600">
            <h3>Гастроэнтерология</h3>
            <p>Заболевания печени и поджелудочной</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="700">
            <h3>Неврология</h3>
            <p>Эпилепсия, рассеянный склероз и другое</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="800">
            <h3>Гинекология и ЭКО</h3>
            <p>Более 7,000 процедур в год — 25% ЭКО по Израилю</p>
          </div>
        </div>
      </section>
      <section className="assistance" data-aos="fade-up" data-aos-delay="400">
        <h2>Сопровождение пациентов</h2>
        <p>
          Мы помогаем с переводами, записью на лечение и полным сопровождением
          от момента обращения до возвращения домой. Вы можете быть уверены —
          всё пройдёт комфортно и организованно.
        </p>
      </section>
      <section
        className="process-section"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2>Как принимает пациентов клиника Ассута?</h2>
        <div className="process-grid">
          <div className="process-step" data-aos="flip-left">
            <div className="icon-box">
              <FaPlane />
            </div>
            <h3>Запись и приезд</h3>
            <p>Помощь и бронирование жилья — отель или апартаменты.</p>
          </div>
          <div
            className="process-step"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <FaCar />
            </div>
            <h3>Встреча и трансфер</h3>
            <p>
              Организация встречи в аэропорту и трансфер на комфортабельном
              автомобиле в клинику.
            </p>
          </div>
          <div className="process-step">
            <div className="icon-box">
              <FaUserMd />
            </div>
            <h3>Сопровождение</h3>
            <p>
              Сопровождающий переводчик с медицинским образованием будет рядом
              при каждом визите в клинику.
            </p>
          </div>
          <div className="process-step">
            <div className="icon-box">
              <FaFileAlt />
            </div>
            <h3>Документы</h3>
            <p>
              После лечения вы получите все документы, переведённые на русский
              или английский язык.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="button-wrapper">
          <button onClick={scrollToForm} className="consultation-button">
            Получить консультацию
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
