import "./Login.css";
import { NavLink } from "react-router-dom";

import siteLogo from "../../../images/logo.svg";

function Login() {
  return (
    <main>
      <section className="login">
        <div className="login__container">
          <NavLink className="login__logo" to="/">
            <img src={siteLogo} alt="Логотип сайта" />
          </NavLink>
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form">
            <div className="login__input-field">
              <div className="login__input-container">
                <label className="login__input-label" for="email">
                  E-mail
                </label>
                <input
                  className="login__email-input login__input"
                  name="email"
                  id="email"
                  placeholder="Введите email..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="login__input-error login__email-input-error">
                  Что-то пошло не так...
                </span>
              </div>
              <div className="login__input-container">
                <label className="login__input-label" for="password">
                  Пароль
                </label>
                <input
                  className="login__password-input login__input"
                  name="password"
                  id="password"
                  placeholder="Введите пароль..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="login__input-error login__password-input-error">
                  Что-то пошло не так...
                </span>
              </div>
            </div>
            <button className="login__submit-btn" type="submit">
              Войти
            </button>
          </form>
          <div className="login__register-field">
            <p className="login__register-field-text">
              Ещё не зарегистрированы?
            </p>
            <NavLink className="login__register-link" to="/signup">
              Регистрация
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
