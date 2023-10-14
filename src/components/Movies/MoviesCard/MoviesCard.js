import './MoviesCard.css';

import deleteBtnImg from '../../../images/delete-button.svg';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MoviesCard({
  movieAltText,
  filmCover,
  movieTitleTextRu,
  movieTitleTextEn,
  movieDuration,
  trailerLink,
  movieCountry,
  movieDescription,
  movieYear,
  movieThumbnail,
  movieId,
  savedMovieId,
  movieDirector,
  onLikeMovie,
  onDislikeMovie,
  onRemoveMovie,
  savedMovies,
}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const likeClassName = isLiked
    ? 'movies-card__like-btn movies-card__like-btn_active'
    : 'movies-card__like-btn';

  useEffect(() => {
    if (location.pathname === '/movies') {
      if (savedMovies.some((movie) => movie.movieId === movieId)) {
        setIsLiked(true);
      }
    }
  }, [savedMovies, savedMovieId]);

  function handleMovieLike() {
    if (isLiked) {
      onDislikeMovie(movieId).then(() => {
        setIsLiked(false);
      });
      return;
    }
    console.log('like');

    onLikeMovie({
      country: movieCountry,
      director: movieDirector,
      duration: movieDuration,
      year: movieYear,
      description: movieDescription,
      image: filmCover,
      trailerLink: trailerLink,
      nameRU: movieTitleTextRu,
      nameEN: movieTitleTextEn,
      thumbnail: movieThumbnail,
      movieId: movieId,
    })
      .then((res) => {
        setIsLiked(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDelete() {
    console.log(savedMovieId);
    onRemoveMovie(savedMovieId)
      .then(() => {
        setIsLiked(false);
        console.log('deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieDurationString(movieDuration) {
    const hours = Math.floor(movieDuration / 60);
    const minutes = movieDuration % 60;
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return hours ? `${hours}ч${paddedMinutes}м` : `${paddedMinutes}м`;
  }

  return (
    <article className="movies-card">
      <a
        className="movies-card__trailer-link"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          src={filmCover}
          alt={movieAltText}
        />
      </a>
      <div className="movies-card__container">
        <h2 className="movies-card__movie-title">{movieTitleTextRu}</h2>
        {location.pathname === '/movies' && (
          <button className={likeClassName} onClick={handleMovieLike}></button>
        )}
        {location.pathname === '/saved-movies' && (
          <img
            className="movies-card__delete-btn movies-card__delete-btn_hidden"
            src={deleteBtnImg}
            alt="Кнопка удаления карточки"
            onClick={handleMovieDelete}
          ></img>
        )}
      </div>
      <span className="movies-card__film-duration">
        {handleMovieDurationString(movieDuration)}
      </span>
    </article>
  );
}

export default MoviesCard;
