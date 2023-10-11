import SearchForm from '../Search-form/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
  moviesArray,
  filteredMoviesArray,
  setFilteredMovies,
  isLoading,
  setIsLoading,
  tumbState,
  setTumbState,
  deviceWidth,
  removeMovie,
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
        removeMovie={removeMovie}
      />
    </main>
  );
}

export default SavedMovies;
