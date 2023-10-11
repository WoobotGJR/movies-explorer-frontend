import './Movies.css';

import SearchForm from './Search-form/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({
  moviesArray,
  filteredMoviesArray,
  setFilteredMovies,
  isLoading,
  setIsLoading,
  tumbState,
  setTumbState,
  deviceWidth,
  likeMovie,
  removeMovie,
  searchFormError,
}) {
  return (
    <main className="movies">
      <SearchForm
        moviesArray={moviesArray}
        setFilteredMovies={setFilteredMovies}
        filteredArray={filteredMoviesArray}
        setIsLoading={setIsLoading}
        tumbState={tumbState}
        setTumbState={setTumbState}
      />
      <MoviesCardList
        moviesArray={moviesArray}
        filteredMoviesArray={filteredMoviesArray}
        isLoading={isLoading}
        deviceWidth={deviceWidth}
        likeMovie={likeMovie}
        removeMovie={removeMovie}
        searchFormError={searchFormError}
      />
    </main>
  );
}

export default Movies;
