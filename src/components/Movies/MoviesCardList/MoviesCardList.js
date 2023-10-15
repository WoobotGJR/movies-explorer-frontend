import './MoviesCardList.css';

import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import { SERVER_URL } from '../../../utils/constants';

function MoviesCardList({
  filteredMovies,
  savedMovies,
  setSavedMovies,
  onMoreButtonClick,
  isMoreButtonVisible,
  handleLikeMovie,
  handleDislikeMovie,
  handleRemoveMovie,
}) {
  const location = useLocation();

  return (
    <>
      <ul className="movies-list">
        {filteredMovies.map((movie, index) => {
          if (location.pathname === '/movies') {
            return (
              <li className="movies-list__item" key={movie.id}>
                <MoviesCard
                  movieTitleTextRu={movie.nameRU}
                  movieTitleTextEn={movie.nameEN}
                  movieDuration={movie.duration}
                  filmCover={SERVER_URL + movie.image.url}
                  movieAltText={movie.image.alternativeText}
                  trailerLink={movie.trailerLink}
                  movieCountry={movie.country}
                  movieDescription={movie.description}
                  movieYear={movie.year}
                  movieThumbnail={
                    SERVER_URL + movie.image.formats.thumbnail.url
                  }
                  movieId={movie.id}
                  movieDirector={movie.director}
                  onDislikeMovie={handleDislikeMovie}
                  onLikeMovie={handleLikeMovie}
                  savedMovies={savedMovies}
                  setSavedMovies={setSavedMovies}
                />
              </li>
            );
          }
          if (location.pathname === '/saved-movies') {
            return (
              <li className="movies-list__item" key={movie._id}>
                <MoviesCard
                  movieTitleTextRu={movie.nameRU}
                  movieTitleTextEn={movie.nameEN}
                  movieDuration={movie.duration}
                  filmCover={movie.image}
                  movieAltText={movie.image.alternativeText}
                  trailerLink={movie.trailerLink}
                  movieCountry={movie.country}
                  movieDescription={movie.description}
                  movieYear={movie.year}
                  movieThumbnail={movie.thumbnail}
                  savedMovieId={movie._id}
                  movieDirector={movie.director}
                  onRemoveMovie={handleRemoveMovie}
                />
              </li>
            );
          }
        })}
      </ul>
      {isMoreButtonVisible && (
        <div
          className="movies-list__more-button-container"
          onClick={onMoreButtonClick}
        >
          <button className="movies-list__more-button">Ещё</button>
        </div>
      )}
    </>
  );
}

export default MoviesCardList;
