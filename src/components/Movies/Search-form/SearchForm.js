import "./SearchForm.css";

import findIcon from "../../../images/find-icon.svg";
import tumbIcon from "../../../images/tumb-icon.svg";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__form-container">
        <form className="search-form__form">
          {/* Начало формы */}
          <div className="search-form__input-container">
            <img
              className="search-form__find-img"
              src={findIcon}
              alt="Иконка поиска"
            ></img>
            <input
              className="search-form__input"
              placeholder="Фильм"
              required
            ></input>
            <div className="search-form__enter-btn-container">
              <button className="search-form__enter-btn">Найти</button>
            </div>
          </div>

          <div className="search-from__checkbox-container">
            <div className="search-form__tumb-container">
              <img
                className="search-form__tumb"
                src={tumbIcon}
                alt="Тумблер переключения"
              ></img>
            </div>
            <h2 className="search-form__tumb-paragraph">Короткометражки</h2>
          </div>
          {/* Конец формы */}
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
