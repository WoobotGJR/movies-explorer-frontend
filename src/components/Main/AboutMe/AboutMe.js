import "./AboutMe.css";

import studentImage from "../../../images/student-image.png";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__student-info-container">
        <div className="about-me__student-info">
          <h3 className="about-me__student-name">Виталий</h3>
          <p className="about-me__about-student">
            Фронтенд-разработчик, 30 лет
          </p>
          <p className="about-me__student-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__portfolio-link"
            href="https://github.com/WoobotGJR"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__student-image"
          src={studentImage}
          alt="Фотография студента"
        />
      </div>
    </section>
  );
}

export default AboutMe;
