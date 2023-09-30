import './MoviesCardList.css'

import MoviesCard from '../MoviesCard/MoviesCard'

import filmCover from '../../../images/moviesCover.png'

function MoviesCardList() {
    return (
        <section className='movies-list'>
            <MoviesCard movieTitleText='33 слова о дизайне' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Киноальманах «100 лет дизайна»' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='В погоне за Бенкси' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Баския: Взрыв реальности' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Бег это свобода' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Книготорговцы' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Когда я думаю о Германии ночью' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Gimme Danger: История Игги и The Stooges' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Соберись перед прыжком' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Пи Джей Харви: A dog called money' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='По волнам: Искусство звука в кино' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Рудбой' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Скейт — кухня' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Война искусств' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Зона' movieDurationText='1ч42м' filmCover={filmCover}/>
            <MoviesCard movieTitleText='Зона' movieDurationText='1ч42м' filmCover={filmCover}/>
        </section>
    )
}

export default MoviesCardList