import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

import filmCover from "../../../images/moviesCover.png";

function MoviesCardList() {
  return (
    <ul className="movies-list">
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="33 слова о дизайне"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Киноальманах «100 лет дизайна»"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="В погоне за Бенкси"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Баския: Взрыв реальности"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Бег это свобода"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Книготорговцы"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Когда я думаю о Германии ночью"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Gimme Danger: История Игги и The Stooges"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Соберись перед прыжком"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Пи Джей Харви: A dog called money"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="По волнам: Искусство звука в кино"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Рудбой"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Скейт — кухня"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Война искусств"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Зона"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
      <li className="movies-list__item">
        <MoviesCard
          movieTitleText="Зона"
          movieDurationText="1ч42м"
          filmCover={filmCover}
          movieAltText="Обложка фильма"
        />
      </li>
    </ul>
  );
}

export default MoviesCardList;
