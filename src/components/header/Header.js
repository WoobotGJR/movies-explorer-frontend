import "./Header.css";

import { useLocation, NavLink } from "react-router-dom";

import siteLogo from "../../images/logo.svg";
import profilePic from "../../images/profile-pic.svg";
import menuButton from "../../images/menu-button.svg";

function Header({ isLoggedIn, showMenu }) {
  const location = useLocation();

  const isVisible =
    location.pathname === "/" ||
    location.pathname === "/profile" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  const headerClass =
    location.pathname === "/"
      ? "header header_background_blue"
      : "header header_background_grey";

  return (
    <header className={isVisible ? headerClass : "header header_hidden"}>
      <NavLink className="header__logo-link" to="/">
        <img className="header__logo-img" src={siteLogo} alt="Логотипа сайта" />
      </NavLink>
      {isLoggedIn && (
        <>
          <nav className="header__navigation">
            <NavLink className="header__films-link" to="/movies">
              Фильмы
            </NavLink>
            <NavLink className="header__saved-films-link" to="/saved-movies">
              Сохранённые фильмы
            </NavLink>
          </nav>
          <button className="header__menu-btn" type="button" onClick={showMenu}>
            <img
              className="header__menu-btn-img"
              src={menuButton}
              alt="Кнопка меню"
            ></img>
          </button>
          <NavLink className="header__profile" to="/profile">
            <p className="header__account-link">Аккаунт</p>
            <img
              className="header__profile-pic header__profile-pic_background_grey"
              src={profilePic}
              alt="Аватар пользователя"
            />
          </NavLink>
        </>
      )}
      {isLoggedIn || (
        <nav className="header__auth">
          <NavLink className="header__register-link" to="/signup">
            Регистрация
          </NavLink>
          <NavLink to="/signin">
            <button className="header__auth-btn" type="button">
              Войти
            </button>
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
