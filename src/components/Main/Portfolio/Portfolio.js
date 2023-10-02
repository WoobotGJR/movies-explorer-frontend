import "./Portfolio.css";

import arrowButtonImage from "../../../images/arrow-button.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__container">
        <li className="portfolio__portfolio-item">
          <a
            className="portfolio__portfolio-link"
            href="https://github.com/WoobotGJR/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__portfolio-item-name">Статичный сайт</p>
            <img
              className="portfolio__portfolio-item-img"
              src={arrowButtonImage}
              alt="Кнопка перехода на соответствующее портфолио"
            />
          </a>
        </li>
        <li className="portfolio__portfolio-item">
          <a
            className="portfolio__portfolio-link"
            href="https://github.com/WoobotGJR/mesto"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__portfolio-item-name">Адаптивный сайт</p>
            <img
              className="portfolio__portfolio-item-img"
              src={arrowButtonImage}
              alt="Кнопка перехода на соответствующее портфолио"
            />
          </a>
        </li>
        <li className="portfolio__portfolio-item">
          <a
            className="portfolio__portfolio-link"
            href="https://github.com/WoobotGJR/express-mesto-gha"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__portfolio-item-name">
              Одностраничное приложение
            </p>
            <img
              className="portfolio__portfolio-item-img"
              src={arrowButtonImage}
              alt="Кнопка перехода на соответствующее портфолио"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
