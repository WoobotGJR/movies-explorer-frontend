import { NavLink } from 'react-router-dom';
import './Profile.css';

import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import mainApi from '../../../utils/MainApi';
import { useContext, useEffect, useReducer } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { EMAIL_REGEX_PATTERN } from '../../../utils/constants';

function Profile({ setIsLoggedIn, setFilteredMovies }) {
  const { handleChange, values, setValues, errors, isValid } =
    useFormWithValidation({});
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const currentUser = useContext(CurrentUserContext);

  // Input values initialization
  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  function editUserData(event) {
    event.preventDefault();

    console.log(values);

    mainApi
      .setUserInfo(values.name, values.email)
      .then((res) => {
        // The next two lines are needed for profile__title update on successful sumbit
        currentUser.name = res.data.name;
        forceUpdate();
      })
      .catch((err) => {
        console.log(`Profile - ${err}`);
      });
  }

  function logoutUser() {
    mainApi
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('lastRequest');
        localStorage.removeItem('lastFilmsArray');
        setFilteredMovies([]);
      })
      .catch((err) => {
        console.log(`here - ${err}`);
      });
  }

  return (
    <main>
      <section className="profile">
        <form className="profile__container">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          {/* <div className='profile__user-info-container'> */}
          <div className="profile__name-container">
            <label className="profile__name-span" htmlFor="name">
              Имя
            </label>
            <input
              className="profile__user-name-input"
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name || ''}
              // defaultValue={currentUser.name}
              placeholder="Введите имя..."
              maxLength="20"
              minLength="2"
              required
            />
            <span className="profile__validation-error-text">
              {errors.name}
            </span>
          </div>
          <div className="profile__email-container">
            <label className="profile__email-span" htmlFor="email">
              E-mail
            </label>
            <input
              className="profile__user-email-input"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email || ''}
              pattern={EMAIL_REGEX_PATTERN}
              title="Введён некорректный email"
              placeholder="Введите email..."
              maxLength="35"
              minLength="2"
              required
            />
            <span className="profile__validation-error-text">
              {errors.email}
            </span>
          </div>
          <div className="profile__account-handle-container">
            <button
              className="profile__edit-info-btn"
              type="submit"
              onClick={editUserData}
              disabled={!isValid}
            >
              Редактировать
            </button>

            <button className="profile__logout-btn" type="button">
              <NavLink
                to="/"
                className="profile__logout-link"
                onClick={logoutUser}
              >
                Выйти из аккаунта
              </NavLink>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;
