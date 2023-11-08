<h1 align="center">Дипломный проект: "Movies Explorer" (frontend)</h1>

<a name="summary">
  <details>
    <summary>Оглавление</summary>
    <ol>
      <li><a href="#project-description">Описание проекта</a></li>
      <li><a href="#project-installation">Эксплуатация проекта</a></li>
      <li><a href="#project-functionality">Функциональность проекта</a></li>
      <li><a href="#project-enhancement">Планы по улучшению</a></li>
    </ol>
  </details>
</a>

<a name="project-description"><h2>1. Описание проекта</h2></a>
Дипломный проект "Movies-Explorer" - веб-приложение для поиска и ознакомления с трейлерами фильмов международного фестиваля документального кино. Проект выполнен в рамках обучения на курсе "Веб-разработчик" от "Яндекс.Практикум". Само приложение было написано в несколько этапов: адаптивная вёрстка (по макету в Figma) и написание кода на JS. Первый этап был выполнен при помощи CSS3. Второй был написан с использованием "React". Также предварительно был написан API для хранения пользователей, хранения сохранённых пользователями фильмов, авторизации (JWT).

Проект доступен по ссылке:
<br>
frontend - https://woobotgjr.movies.nomoredomainsrocks.ru/"
<br>
backend - https://api.woobotgjr.movies.nomoredomainsrocks.ru/"
<br>
Ссылка на макет - https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82?type=design&node-id=1-6015&mode=design&t=8bdI4LHLFlonhSoS-0
<br>
Чеклист проекта - https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/checklist_react_diplom.pdf
<br>

<i>Проект был проверен опытными ревьюерами согласно чеклисту</i>

<a name="project-installation"><h2>2. Эксплуатация проекта</h2></a>

1. git clone https://github.com/WoobotGJR/movies-explorer-frontend - клонировать репозиторий
2. npm i` - установить зависимости (dependencies)
3. npm run start` - запустить приложение
4. npm run build - создать build приложения

<a name="functionality"><h2>3. Функциональность проекта</h2></a>

- Регистрация и авторизация пользователя (JWT-token). Валидация данных введённых пользователем при помощи regex
- Поиск фильмов при помощи фильтрации массива по запросу пользователя и чекбокса. Добавление фильма в сохранённые / удаление из сохранённых
- Валидация данных пользователя и выведение ошибок в случае неверного ввода

<a name="enhancement"><h2>4. Планы по улучшению</h2></a>

- Уменьшение количества рендеров приложения
- Рефакторинг вёрстки при помощи SCSS или фреймворков для CSS
- Добавление строгой типизации кода при помощи TypeScript
