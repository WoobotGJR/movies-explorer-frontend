import { SHORTFILM_MAX_DURATION } from './constants';

function filterMoviesByString(moviesArray, searchString) {
  const formattedString = searchString.trim().toLowerCase();
  const filteredArray = moviesArray.filter((movie) =>
    movie.nameRU.toLowerCase().includes(formattedString)
  );
  return filteredArray;
}

function filterMoviesByDuration(moviesArray) {
  const filteredArray = moviesArray.filter(
    (movie) => movie.duration <= SHORTFILM_MAX_DURATION
  );
  return filteredArray;
}

export { filterMoviesByString, filterMoviesByDuration };
