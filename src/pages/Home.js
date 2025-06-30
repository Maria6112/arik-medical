import React from "react";
import "./Home.css";
import ConsultationForm from "../components/ConsultationForm";
import { FaPlane, FaCar, FaUserMd, FaFileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="background-section">
      <div className="home-wrapper">
        <div className="home-main-content">
          <section className="welcome">
            <h1>Добро пожаловать!</h1>
            <p>
              Мы помогаем организовать лечение в Израиле для русскоязычных
              пациентов в клинике Ассута.
            </p>
          </section>

          <section className="intro">
            <h1>Клиника Ассута (Израиль)</h1>
            <p>
              Ассута — один из ведущих медицинских центров Израиля, сочетающий
              передовые технологии и высокий уровень сервиса. Клиника находится
              в престижном районе Тель-Авива и включает в себя сеть из более чем
              10 филиалов по всей стране.
            </p>
          </section>
          <section className="about">
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

        <div className="home-sidebar">
          <div className="form-wrapper">
            <ConsultationForm />
          </div>
        </div>
      </div>

      <section className="specializations">
        <h2>Основные направления лечения</h2>
        <div className="specialties-grid">
          <div>
            <h3>Хирургия</h3>
            <p>Общая, пластическая, бариатрическая, малоинвазивная</p>
          </div>
          <div>
            <h3>Нейрохирургия</h3>
            <p>Щадящие методы лечения позвоночника, вертебропластика</p>
          </div>
          <div>
            <h3>Кардиология</h3>
            <p>Гибридные операционные, стентирование, шунтирование</p>
          </div>
          <div>
            <h3>Онкология</h3>
            <p>Иммунотерапия, фотодинамика, новейшие протоколы</p>
          </div>
          <div>
            <h3>Ортопедия</h3>
            <p>Замена суставов, лечение остеохондроза, грыж</p>
          </div>
          <div>
            <h3>Гастроэнтерология</h3>
            <p>Заболевания печени и поджелудочной</p>
          </div>
          <div>
            <h3>Неврология</h3>
            <p>Эпилепсия, рассеянный склероз и другое</p>
          </div>
          <div>
            <h3>Нефрология</h3>
            <p>Малоинвазивное лечение почек и камней</p>
          </div>
          <div>
            <h3>Гинекология и ЭКО</h3>
            <p>Более 7,000 процедур в год — 25% ЭКО по Израилю</p>
          </div>
        </div>
      </section>
      <section className="assistance">
        <h2>Сопровождение пациентов</h2>
        <p>
          Мы помогаем с переводами, записью на лечение и полным сопровождением
          от момента обращения до возвращения домой. Вы можете быть уверены —
          всё пройдёт комфортно и организованно.
        </p>
      </section>
      <section className="process-section">
        <h2>Как принимает пациентов клиника Ассута?</h2>
        <div className="process-grid">
          <div className="process-step">
            <div className="icon-box">
              <FaPlane />
            </div>
            <h3>Запись и приезд</h3>
            <p>
              Помощь в покупке авиабилетов по выгодным тарифам и бронирование
              жилья — отель или апартаменты.
            </p>
          </div>
          <div className="process-step">
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
    </div>
  );
};

export default Home;
