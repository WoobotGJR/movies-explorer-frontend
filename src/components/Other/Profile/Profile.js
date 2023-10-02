import { NavLink } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <main>
      <section className="profile">
        <form className="profile__container">
          <h2 className="profile__title">Привет, Виталий!</h2>
          {/* <div className='profile__user-info-container'> */}
          <div className="profile__name-container">
            <label className="profile__name-span" for="name">
              Имя
            </label>
            <input
              className="profile__user-name-input"
              id="name"
              value="Виталий"
              placeholder="Введите имя..."
              maxLength="20"
              minLength="2"
              required
            />
          </div>
          <div className="profile__email-container">
            <label className="profile__email-span" for="email">
              E-mail
            </label>
            <input
              className="profile__user-email-input"
              id="email"
              value="pochta@yandex.ru"
              placeholder="Введите email..."
              maxLength="20"
              minLength="2"
              required
            />
          </div>
          {/* </div> */}
          <div className="profile__account-handle-container">
            <button className="profile__edit-info-btn" type="button">
              Редактировать
            </button>

            <button className="profile__logout-btn" type="button">
              <NavLink to="/" className="profile__logout-link">
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
