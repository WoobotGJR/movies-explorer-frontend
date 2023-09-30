import "./Portfolio.css";

import arrowButtonImage from "../../../images/arrow-button.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p4 className="portfolio__title">Портфолио</p4>
      <div className="portfolio__container">
        <a
          className="portfolio__portfolio-item"
          href="https://github.com/WoobotGJR/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <div className="portfolio__portfolio-item_name">Статичный сайт</div>
          <button className="portfolio__portfolio-item_btn">
            <img
              src={arrowButtonImage}
              alt="Кнопка перехода на соответствующее портфолио"
            />
          </button>
        </a>
        <a
          className="portfolio__portfolio-item"
          href="https://github.com/WoobotGJR/mesto"
          target="_blank"
          rel="noreferrer"
        >
          <div className="portfolio__portfolio-item_name">Адаптивный сайт</div>
          <button className="portfolio__portfolio-item_btn">
            <img
              src={arrowButtonImage}
              alt="Кнопка перехода на соответствующее портфолио"
            />
          </button>
        </a>
        <a
          className="portfolio__portfolio-item"
          href="https://github.com/WoobotGJR/express-mesto-gha"
          target="_blank"
          rel="noreferrer"
        >
          <div className="portfolio__portfolio-item_name">
            Одностраничное приложение
          </div>
          <button className="portfolio__portfolio-item_btn">
            <img
              src={arrowButtonImage}
              alt="Кнопка перехода на соответствующее портфолио"
            />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
