import './MoviesCardList.css';

import { useState, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  filteredMoviesArray,
  moviesArray,
  isLoading,
  deviceWidth,
  removeMovie,
  likeMovie,
  searchFormError,
}) {
  const [cardsCount, setCardsCount] = useState(0);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const location = useLocation();

  useEffect(() => {
    handleInitFilmsCount();
  }, [deviceWidth, filteredMoviesArray]);

  function handleInitFilmsCount() {
    if (deviceWidth >= 1280) {
      setCardsCount(16);
    } else if (deviceWidth >= 768) {
      setCardsCount(8);
    } else {
      setCardsCount(5);
    }
  }

  function handleMoreFilms() {
    if (deviceWidth >= 1280) {
      setCardsCount(cardsCount + 16);
    } else {
      setCardsCount(cardsCount + 2);
    }
    forceUpdate();
  }

  return (
    <>
      {isLoading && <Preloader />}
      {moviesArray.length === 0 && searchFormError !== '' && (
        <div className="movies-list__not-found-message-container">
          <p className="movies-list__not-found-message">{searchFormError}</p>
        </div>
      )}
      {filteredMoviesArray.length === 0 && (
        <div className="movies-list__not-found-message-container">
          <p className="movies-list__not-found-message">
            По данному запросу ничего не найдено
          </p>
        </div>
      )}
      <ul className="movies-list">
        {filteredMoviesArray.map((movie, index) => {
          if (index < cardsCount) {
            if (location.pathname === '/movies') {
              return (
                <li className="movies-list__item" key={movie.id}>
                  <MoviesCard
                    movieTitleTextRu={movie.nameRU}
                    movieTitleTextEn={movie.nameEN}
                    movieDuration={movie.duration}
                    filmCover={
                      'https://api.nomoreparties.co/' + movie.image.url
                    }
                    movieAltText={movie.image.alternativeText}
                    trailerLink={movie.trailerLink}
                    movieCountry={movie.country}
                    movieDescription={movie.description}
                    movieYear={movie.year}
                    movieThumbnail={
                      'https://api.nomoreparties.co/' +
                      movie.image.formats.thumbnail.url
                    }
                    movieId={movie.id}
                    movieDirector={movie.director}
                    likeMovie={likeMovie}
                    removeMovie={removeMovie}
                  />
                </li>
              );
            }
            if (location.pathname === '/saved-movies') {
              return (
                <li className="movies-list__item" key={index}>
                  <MoviesCard
                    movieTitleTextRu={movie.nameRU}
                    movieTitleTextEn={movie.nameEN}
                    movieDuration={movie.duration}
                    filmCover={movie.image}
                    movieAltText={movie.nameRU}
                    trailerLink={movie.trailerLink}
                    movieCountry={movie.country}
                    movieDescription={movie.description}
                    movieYear={movie.year}
                    movieThumbnail={movie.thumbnail}
                    _movieId={movie._id}
                    movieDirector={movie.director}
                    removeMovie={removeMovie}
                  />
                </li>
              );
            }
          }
        })}
      </ul>
      {filteredMoviesArray.length <= cardsCount || (
        <div
          className="movies-list__more-button-container"
          onClick={handleMoreFilms}
        >
          <button className="movies-list__more-button">Ещё</button>
        </div>
      )}
    </>
  );
}

export default MoviesCardList;
