import "./Register.css";
import { NavLink } from "react-router-dom";

import siteLogo from "../../../images/logo.svg";

function Register() {
  return (
    <main>
      <section className="register">
        <div className="register__container">
          <NavLink className="register__logo" to="/">
            <img src={siteLogo} alt="Логотип сайта" />
          </NavLink>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form">
            <div className="register__input-field">
              <div className="register__input-container">
                <label className="register__input-label" for="name">
                  Имя
                </label>
                <input
                  type="text"
                  className="register__name-input register__input"
                  name="name"
                  id="name"
                  placeholder="Введите имя..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="register__name-input-error register__input-error">
                  Что-то пошло не так...
                </span>
              </div>
              <div className="register__input-container">
                <label className="register__input-label" for="email">
                  E-mail
                </label>
                <input
                  type="text"
                  className="register__email-input register__input"
                  name="email"
                  id="email"
                  placeholder="Введите email..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="register__name-input-error register__input-error">
                  Что-то пошло не так...
                </span>
              </div>
              <div className="register__input-container">
                <label className="register__input-label" for="password">
                  Пароль
                </label>
                <input
                  type="password"
                  className="register__password-input register__input"
                  name="password"
                  id="password"
                  placeholder="Введите пароль..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="register__name-input-error register__input-error">
                  Что-то пошло не так...
                </span>
              </div>
            </div>
            <button className="register__submit-btn" type="submit">
              Зарегистрироваться
            </button>
          </form>
          <div className="register__auth-field">
            <p className="register__auth-field-text">Уже зарегистрированы?</p>
            <NavLink className="register__auth-link" to="/signin">
              Войти
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Register;
