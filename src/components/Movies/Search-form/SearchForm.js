import './SearchForm.css';

import findIcon from '../../../images/find-icon.svg';
import tumbIcon from '../../../images/tumb-icon.svg';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormWithValidation } from '../../../hooks/useFormWithValidation';
import { getLocalStorageItem } from '../../../utils/localStorageHandlers';

function SearchForm({ onSubmit, onCheckboxClick }) {
  const { values, handleChange } = useFormWithValidation({});
  const [checkboxState, setCheckboxState] = useState(false);

  const location = useLocation();

  const checkboxClass = checkboxState
    ? 'search-form__tumb search-form__tumb_active'
    : 'search-form__tumb';

  useEffect(() => {
    if (location.pathname === '/movies') {
      const storedCheckboxState = getLocalStorageItem('formCheckboxState');
      values.searchBar = getLocalStorageItem('searchString');

      setCheckboxState(storedCheckboxState);
    } else {
      values.searchBar = '';
    }
  }, []);

  function handleInputSubmit(event) {
    event.preventDefault();
    onSubmit(checkboxState, values.searchBar);
  }

  function handleCheckboxClick() {
    const newCheckboxState = !checkboxState;
    setCheckboxState(newCheckboxState);
    onCheckboxClick(newCheckboxState, values.searchBar);
  }

  return (
    <section className="search-form">
      <div className="search-form__form-container">
        <form className="search-form__form" onSubmit={handleInputSubmit}>
          {/* Начало формы */}
          <div className="search-form__input-container">
            <img
              className="search-form__find-img"
              src={findIcon}
              alt="Иконка поиска"
            ></img>
            <input
              className="search-form__input"
              type=""
              placeholder="Фильм"
              name="searchBar"
              defaultValue={values.searchBar}
              onChange={handleChange}
              required
            ></input>
            <div className="search-form__enter-btn-container">
              <button className="search-form__enter-btn">Найти</button>
            </div>
          </div>

          <div
            className="search-from__checkbox-container"
            onClick={handleCheckboxClick}
          >
            <div className="search-form__tumb-container">
              <img
                className={checkboxClass}
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
