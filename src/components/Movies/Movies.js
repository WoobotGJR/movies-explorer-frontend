import "./Movies.css";

import SearchForm from "./Search-form/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoreButton from "./MoreButton/MoreButton";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoreButton />
    </section>
  );
}

export default Movies;
