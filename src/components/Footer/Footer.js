import "./Footer.css";

import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const isVisible =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  return (
    <footer className={isVisible ? "footer" : "footer footer_hidden"}>
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__copyright-container">
        <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        <nav className="footer__navigation-container">
          <a
            className="footer__navigation-link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__navigation-link"
            href="https://github.com/WoobotGJR"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
