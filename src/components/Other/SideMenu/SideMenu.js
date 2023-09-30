import "./SideMenu.css";

import closeBtn from "../../../images/close-button.svg";
import profilePic from "../../../images/profile-pic.svg";

function SideMenu() {
  return (
    <div className="side-menu">
      <button className="side-menu__close-btn">
        <img
          className="side-menu__close-btn-img"
          src={closeBtn}
          alt="Кнопка закрытия меню"
        ></img>
      </button>
      <div className="side-menu__navigation-container">
        <ul className="side-menu__navigation-list">
          <li className="side-menu__navigation-item">Главная</li>
          <li className="side-menu__navigation-item">Фильмы</li>
          <li className="side-menu__navigation-item">Сохранённые фильмы</li>
        </ul>
        <div className="side-menu__account-container">
          <p className="side-menu__account-paragraph">Аккаунт</p>
          <img
            className="side-menu__profile-pic"
            src={profilePic}
            alt="Кнопка профиля"
          />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
