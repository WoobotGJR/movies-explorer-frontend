import './Profile.css'

function Profile() {
    return (
        <section className='profile'>
            <div className='profile__container'>
                <h2 className='profile__title'>Привет, Виталий!</h2>
                {/* <div className='profile__user-info-container'> */}
                    <div className='profile__name-container'>
                        <span className='profile__name-span'>Имя</span>
                        <p className='profile__user-name'>Виталий</p>
                    </div>
                    <div className='profile__email-container'>
                        <span className='profile__email-span'>E-mail</span>
                        <p className='profile__user-email'>pochta@yandex.ru</p>
                    </div>
                {/* </div> */}
                <div className='profile__account-handle-container'>
                    <span className='profile__edit-info-btn'>Редактировать</span>
                    <span className='profile__logout-btn'>Выйти из аккаунта</span>
                </div>
            </div>
        </section>
    )
}

export default Profile;
