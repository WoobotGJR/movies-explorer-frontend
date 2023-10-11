import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';

import siteLogo from '../../../images/logo.svg';

import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import mainApi from '../../../utils/MainApi';
import { useState } from 'react';
import errorHandler from '../../../utils/submitErrorHandler';
import {
  EMAIL_REGEX_PATTERN,
  PASSWORD_REGEX_PATTERN,
} from '../../../utils/constants';

function Register() {
  const { values, handleChange, errors, isValid } = useFormWithValidation({});
  const [submitErrorText, setSubmitErrorText] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const { name, email, password } = values;
    // console.log(name, email, password);

    mainApi
      .register(name, password, email)
      .then((res) => {
        console.log(res);
        navigate('/signin');
      })
      .catch((err) => {
        setSubmitErrorText(errorHandler(err));
        console.log(err);
      });
  }

  return (
    <main>
      <section className="register">
        <div className="register__container">
          <NavLink className="register__logo" to="/">
            <img src={siteLogo} alt="Логотип сайта" />
          </NavLink>
          <h1 className="register__title">Добро пожаловать!</h1>
          <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__input-field">
              <div className="register__input-container">
                <label className="register__input-label" htmlFor="name">
                  Имя
                </label>
                <input
                  type="text"
                  className="register__name-input register__input"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  placeholder="Введите имя..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="register__name-input-error register__input-error register__error-text">
                  {errors.name}
                </span>
              </div>
              <div className="register__input-container">
                <label className="register__input-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  className="register__email-input register__input"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  pattern={EMAIL_REGEX_PATTERN}
                  title="Введён некорректный email"
                  placeholder="Введите email..."
                  minLength="2"
                  maxLength="30"
                  required
                ></input>
                <span className="register__name-input-error register__input-error register__error-text">
                  {errors.email}
                </span>
              </div>
              <div className="register__input-container">
                <label className="register__input-label" htmlFor="password">
                  Пароль
                </label>
                <input
                  type="password"
                  className="register__password-input register__input"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  pattern={PASSWORD_REGEX_PATTERN}
                  title="Пароль должен содержать от 8 символов латиницей, из которых 1 цифра, 1 буква в верхнем регистре, 1 в нижнем"
                  placeholder="Введите пароль..."
                  minLength="2"
                  maxLength="20"
                  required
                ></input>
                <span className="register__name-input-error register__input-error register__error-text">
                  {errors.password}
                </span>
              </div>
            </div>
            <span className="register__sumbit-error-text register__error-text">
              {submitErrorText}
            </span>
            <button
              className="register__submit-btn"
              type="submit"
              disabled={!isValid}
            >
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
