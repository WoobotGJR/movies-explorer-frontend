import './SearchForm.css';

import findIcon from '../../../images/find-icon.svg';
import tumbIcon from '../../../images/tumb-icon.svg';

import { useForm } from '../../../hooks/useForm';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({
  setFilteredMovies,
  moviesArray,
  filteredArray,
  tumbState,
  setTumbState,
  setIsLoading,
}) {
  const { values, handleChange } = useForm({});
  const location = useLocation();

  const tumbClass = tumbState
    ? 'search-form__tumb search-form__tumb_active'
    : 'search-form__tumb';

  useEffect(() => {
    if (location.pathname === '/movies') {
      values.searchBar = localStorage.getItem('lastRequest') ?? '';
      setTumbState(localStorage.getItem('tumbState') === 'true');
    } else {
      values.searchBar = '';
      setTumbState(false);
    }
    setFilteredMovies(moviesArray);
  }, []);

  function handleTumbFilter(event) {
    if (!tumbState) {
      localStorage.setItem('tumbState', 'true');
      setTumbState(true);
      const filteredTumbArray = filteredArray.filter((movie) => {
        return movie.duration <= 40;
      });
      if (location.pathname === '/movies') {
        localStorage.setItem(
          'lastFilmsArray',
          JSON.stringify(filteredTumbArray)
        );
      }
      setFilteredMovies(filteredTumbArray);
    } else {
      localStorage.setItem('tumbState', false);
      setTumbState(false);
      filterMoviesArray(event);
    }
  }

  function filterMoviesArray(event) {
    event.preventDefault();
    setIsLoading(true);

    // Save last input request, to display it on page reload
    if (location.pathname === '/movies') {
      localStorage.setItem('lastRequest', values.searchBar);
    }

    // Filter array with a string from input
    const filteredArray = moviesArray.filter((movie) => {
      console.log(values.searchBar);
      const searchStr = values.searchBar.trim().toLowerCase();
      const matchStr = movie.nameRU.toLowerCase().includes(searchStr);

      return matchStr;
    });

    // Save last filtered array, to display it on page reload
    if (location.pathname === '/movies') {
      localStorage.setItem('lastFilmsArray', JSON.stringify(filteredArray));
    }

    setIsLoading(false);
    setTumbState(false);

    setFilteredMovies(filteredArray);
  }

  return (
    <section className="search-form">
      <div className="search-form__form-container">
        <form className="search-form__form" onSubmit={filterMoviesArray}>
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
              name="searchBar"
              onChange={handleChange}
              defaultValue={localStorage?.lastRequest}
              // required
            ></input>
            <div className="search-form__enter-btn-container">
              <button className="search-form__enter-btn">Найти</button>
            </div>
          </div>

          <div className="search-from__checkbox-container">
            <div
              className="search-form__tumb-container"
              onClick={handleTumbFilter}
            >
              <img
                className={tumbClass}
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
