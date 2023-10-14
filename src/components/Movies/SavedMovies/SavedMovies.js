import SearchForm from '../Search-form/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { findSavedMovieId } from '../../../utils/findSavedMovieId';
import mainApi from '../../../utils/MainApi';

import { useReducer, useEffect } from 'react';

import {
  filterMoviesByDuration,
  filterMoviesByString,
} from '../../../utils/filterFuncs';

function SavedMovies({
  isLoggedIn,
  savedMovies,
  filteredSavedMovies,
  setFilteredSavedMovies,
  setSavedMovies,
  getSavedMovies,
}) {
  const [updateCounter, forceUpdate] = useReducer((x) => x + 1, 0);
  // On mount of component we get saved movies from API
  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn, updateCounter]);

  function handleRemoveMovie(movieId) {
    return mainApi
      .deleteMovie(movieId)
      .then((res) => {
        setSavedMovies(
          savedMovies.filter((item) => {
            return item._id !== res.data._id;
          })
        );
        forceUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSearchFormSubmit(formCheckboxState, searchString) {
    const filteredMoviesArray = filterMoviesByString(savedMovies, searchString);
    const filteredShortFilmsArray = filterMoviesByDuration(filteredMoviesArray);

    if (formCheckboxState) {
      setFilteredSavedMovies(filteredShortFilmsArray);
    } else {
      setFilteredSavedMovies(filteredMoviesArray);
    }
  }

  function handleCheckboxClick(checkboxState, searchString) {
    handleSearchFormSubmit(checkboxState, searchString);
  }
  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSearchFormSubmit}
        onCheckboxClick={handleCheckboxClick}
      />
      <MoviesCardList
        filteredMovies={filteredSavedMovies}
        isLoggedIn={isLoggedIn}
        handleRemoveMovie={handleRemoveMovie}
      />
    </main>
  );
}

export default SavedMovies;
