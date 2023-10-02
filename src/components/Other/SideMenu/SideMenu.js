import "./SideMenu.css";

import closeBtn from "../../../images/close-button.svg";
import profilePic from "../../../images/profile-pic.svg";
import { NavLink } from "react-router-dom";

function SideMenu({ menuState, hideMenu }) {
  return (
    <div className={menuState ? "side-menu side-menu_visible" : "side-menu"}>
      <button className="side-menu__close-btn" type="button">
        <img
          className="side-menu__close-btn-img"
          src={closeBtn}
          alt="Кнопка закрытия меню"
          onClick={hideMenu}
        ></img>
      </button>
      <div className="side-menu__navigation-container">
        <ul className="side-menu__navigation-list">
          <li className="side-menu__navigation-item">
            <NavLink
              onClick={hideMenu}
              to="/"
              className="side-menu__navigation-link"
            >
              Главная
            </NavLink>
          </li>
          <li className="side-menu__navigation-item">
            <NavLink
              onClick={hideMenu}
              to="/movies"
              className="side-menu__navigation-link"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="side-menu__navigation-item">
            <NavLink
              onClick={hideMenu}
              to="/saved-movies"
              className="side-menu__navigation-link"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="side-menu__account-container"
          to="/profile"
          onClick={hideMenu}
        >
          <p className="side-menu__account-paragraph">Аккаунт</p>
          <img
            className="side-menu__profile-pic"
            src={profilePic}
            alt="Кнопка профиля"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenu;
