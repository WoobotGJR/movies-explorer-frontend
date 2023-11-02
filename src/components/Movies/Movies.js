import './Movies.css';

import SearchForm from './Search-form/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import { useState, useEffect } from 'react';
import {
  setLocalStorageItem,
  getLocalStorageItem,
} from '../../utils/localStorageHandlers';

import {
  filterMoviesByDuration,
  filterMoviesByString,
} from '../../utils/filterFuncs';

import {
  DESKTOP_ADDTIONAL_CARDS,
  DESKTOP_DISPLAY_WIDTH,
  DESKTOP_INITIAL_CARDS_COUNT,
  INTERNAL_SERVER_ERROR_MSG,
  MOBILE_ADDITIONAL_CARDS,
  MOBILE_DISPLAY_WIDTH,
  MOBILE_INITIAL_CARDS_COUNT,
  TABLET_ADDITIONAL_CARDS,
  TABLET_DISPLAY_WIDTH,
  TABLET_INITIAL_CARDS_COUNT,
  NOT_FOUND_MESSAGE,
} from '../../utils/constants';
import mainApi from '../../utils/MainApi';

function Movies({
  setSavedMovies,
  savedMovies,
  setFilteredMovies,
  filteredMovies,
  isLoggedIn,
  deviceWidth,
  setIsLoading,
  isLoading,
  setSearchFormSpan,
  searchFormSpan,
}) {
  // At moment of handleSearchFormSubmit moviesArray is empty, and setMovies in function do nothing at first call
  let requestedMovies = getLocalStorageItem('requestedMovies') || [];

  const [initialCardsCount, setInitialCardsCount] = useState(0);
  const [currentCardsCount, setCurrentCardsCount] = useState(0);
  const [additionalCards, setAdditionalCards] = useState(0);
  const checkboxState = getLocalStorageItem('formCheckboxState');

  const filteredMoviesLength = getLocalStorageItem('filteredMovies').length;

  const isMoreButtonVisible =
    currentCardsCount - additionalCards <= filteredMoviesLength;

  useEffect(() => {
    if (deviceWidth >= DESKTOP_DISPLAY_WIDTH) {
      setInitialCardsCount(DESKTOP_INITIAL_CARDS_COUNT);
      setCurrentCardsCount(
        DESKTOP_INITIAL_CARDS_COUNT + DESKTOP_ADDTIONAL_CARDS
      );
      setAdditionalCards(DESKTOP_ADDTIONAL_CARDS);
    } else if (deviceWidth >= TABLET_DISPLAY_WIDTH) {
      setInitialCardsCount(TABLET_INITIAL_CARDS_COUNT);
      setCurrentCardsCount(
        TABLET_INITIAL_CARDS_COUNT + TABLET_ADDITIONAL_CARDS
      );
      setAdditionalCards(TABLET_ADDITIONAL_CARDS);
    } else if (deviceWidth <= MOBILE_DISPLAY_WIDTH) {
      setInitialCardsCount(MOBILE_INITIAL_CARDS_COUNT);
      setCurrentCardsCount(
        MOBILE_INITIAL_CARDS_COUNT + MOBILE_ADDITIONAL_CARDS
      );
      setAdditionalCards(MOBILE_ADDITIONAL_CARDS);
    }
  }, [deviceWidth, checkboxState]);

  useEffect(() => {
    const storedFilteredMovies = getLocalStorageItem('filteredMovies');

    if (storedFilteredMovies.length !== 0) {
      setSearchFormSpan('');
      setFilteredMovies(storedFilteredMovies.slice(0, initialCardsCount));
    }
  }, [initialCardsCount, isLoggedIn]);

  async function handleSearchFormSubmit(formCheckboxState, searchString) {
    setIsLoading(true);
    try {
      setSearchFormSpan('');
      if (requestedMovies.length === 0) {
        const data = await moviesApi.getMovies();
        setLocalStorageItem('requestedMovies', data);
        requestedMovies = getLocalStorageItem('requestedMovies');
      }

      const filteredMoviesArray = filterMoviesByString(
        requestedMovies,
        searchString
      );
      const filteredShortFilmsArray =
        filterMoviesByDuration(filteredMoviesArray);

      setLocalStorageItem('searchString', searchString);

      if (formCheckboxState) {
        filteredShortFilmsArray.length === 0 &&
          setSearchFormSpan(NOT_FOUND_MESSAGE);
        setFilteredMovies(filteredShortFilmsArray.slice(0, initialCardsCount));
        setLocalStorageItem('filteredMovies', filteredShortFilmsArray);
      } else {
        filteredMoviesArray.length === 0 &&
          setSearchFormSpan(NOT_FOUND_MESSAGE);
        setFilteredMovies(filteredMoviesArray.slice(0, initialCardsCount));
        setLocalStorageItem('filteredMovies', filteredMoviesArray);
      }

      setLocalStorageItem('formCheckboxState', formCheckboxState);
      setIsLoading(false);
    } catch (err) {
      setSearchFormSpan(INTERNAL_SERVER_ERROR_MSG);
      console.log(err);
      setIsLoading(false);
    }
  }

  function handleMoreButtonClick() {
    const tempCardsCount = currentCardsCount;
    setCurrentCardsCount(tempCardsCount + additionalCards);

    const filteredMovies = getLocalStorageItem('filteredMovies');

    setFilteredMovies(filteredMovies.slice(0, tempCardsCount));
  }

  async function handleCheckboxClick(checkboxState, searchString) {
    await handleSearchFormSubmit(checkboxState, searchString);
  }

  function handleLikeMovie(options) {
    return mainApi
      .saveMovie({
        ...options,
      })
      .then((res) => {
        const updatedSavedMovies = [...savedMovies, res.data];
        setSavedMovies(updatedSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDislikeMovie(movieId) {
    return mainApi
      .deleteMovie(movieId)
      .then((res) => {
        const updatedSavedMovies = savedMovies.filter(
          (item) => item.id === movieId
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSearchFormSubmit}
        onCheckboxClick={handleCheckboxClick}
      />
      {searchFormSpan && (
        <span className="movies__span-text">{searchFormSpan}</span>
      )}
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          filteredMovies={filteredMovies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          onMoreButtonClick={handleMoreButtonClick}
          currentCardsCount={currentCardsCount}
          isMoreButtonVisible={isMoreButtonVisible}
          handleLikeMovie={handleLikeMovie}
          handleDislikeMovie={handleDislikeMovie}
        />
      )}
    </main>
  );
}

export default Movies;
