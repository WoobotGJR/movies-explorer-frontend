import './MoviesCard.css'

import likeBtnImg from '../../../images/like-button.svg'
import deleteBtnImg from '../../../images/delete-button.svg'

function MoviesCard({ filmCover,  movieTitleText, movieDurationText}) {
    return (
        <article className='movies-card'>
            <img className='movies-card__image' src={filmCover} alt='Обложка фильма' />
            <div className='movies-card__container'>
                <h2 className='movies-card__movie-title'>{movieTitleText}</h2>
                <img className='movies-card__like-btn' src={likeBtnImg} alt='Кнопка лайка'></img>
                <img className='movies-card__delete-btn movies-card__delete-btn_hidden' src={deleteBtnImg} alt='Кнопка удаления карточки'></img>
            </div>
            <span className='movies-card__film-duration'>{movieDurationText}</span>
        </article>
    )
}

export default MoviesCard;
