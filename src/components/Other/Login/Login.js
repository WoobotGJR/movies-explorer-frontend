import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';

import siteLogo from '../../../images/logo.svg';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import mainApi from '../../../utils/MainApi';
import { useState } from 'react';
import errorHandler from '../../../utils/submitErrorHandler';
import {
  EMAIL_REGEX_PATTERN,
  PASSWORD_REGEX_PATTERN,
  PASSWORD_VALIDATION_TITLE,
  EMAIL_VALIDATION_TITLE,
} from '../../../utils/constants';

function Login({ setIsLoggedIn }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});
  const [submitErrorText, setSubmitErrorText] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = values;

    mainApi
      .authorize(email, password)
      .then((val) => {
        console.log(val);
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setSubmitErrorText(errorHandler(err));
        console.log(err.split(' ')[1]);
      });
  }

  return (
    <main>
      <section className="login">
        <div className="login__container">
          <NavLink className="login__logo" to="/">
            <img src={siteLogo} alt="Логотип сайта" />
          </NavLink>
          <h1 className="login__title">Рады видеть!</h1>
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__input-field">
              <div className="login__input-container">
                <label className="login__input-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="login__email-input login__input"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  pattern={EMAIL_REGEX_PATTERN}
                  title={EMAIL_VALIDATION_TITLE}
                  placeholder="Введите email..."
                  minLength="2"
                  maxLength="30"
                  required
                  type="email"
                ></input>
                <span className="login__input-error login__email-input-error login__error-text">
                  {errors.email}
                </span>
              </div>
              <div className="login__input-container">
                <label className="login__input-label" htmlFor="password">
                  Пароль
                </label>
                <input
                  className="login__password-input login__input"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  pattern={PASSWORD_REGEX_PATTERN}
                  title={PASSWORD_VALIDATION_TITLE}
                  placeholder="Введите пароль..."
                  minLength="2"
                  maxLength="20"
                  required
                  type="password"
                ></input>
                <span className="login__input-error login__password-input-error login__error-text">
                  {errors.password}
                </span>
              </div>
            </div>
            <span className="login__sumbit-error-text login__error-text">
              {submitErrorText}
            </span>
            <button
              className="login__submit-btn"
              type="submit"
              disabled={!isValid}
            >
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
