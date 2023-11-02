function findSavedMovieId(moviesArray, movieId) {
  const movie = moviesArray.find((movie) => movie.movieId === movieId);
  return movie?._id;
}

export { findSavedMovieId };
