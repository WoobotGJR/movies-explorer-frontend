// https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute
const EMAIL_REGEX_PATTERN =
  '^([a-zA-Z0-9\\._%\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,})$';

//  https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
const PASSWORD_REGEX_PATTERN =
  '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'; // минимум 1 символ в нижнем регистре, минимум 1 в верхнем и минимум 1 цифра, более 8 символов

const PASSWORD_VALIDATION_TITLE =
  'Пароль должен содержать хотя бы одну цифру, одну заглавную и одну строчную букву. А также быть от 8 сиволов';

const EMAIL_VALIDATION_TITLE = 'Введён некорректный email';

const SERVER_URL = 'https://api.nomoreparties.co/';

const SHORTFILM_MAX_DURATION = 40;

const DESKTOP_DISPLAY_WIDTH = 1280;
const TABLET_DISPLAY_WIDTH = 768;
const MOBILE_DISPLAY_WIDTH = 320;

const DESKTOP_INITIAL_CARDS_COUNT = 16;
const TABLET_INITIAL_CARDS_COUNT = 8;
const MOBILE_INITIAL_CARDS_COUNT = 5;

const DESKTOP_ADDTIONAL_CARDS = 4;
const TABLET_ADDITIONAL_CARDS = 2;
const MOBILE_ADDITIONAL_CARDS = 2;

const INITTIAL_MESSAGE = 'Введите поисковой запрос, чтобы получить результат.';
const NOT_FOUND_MESSAGE = 'По Вашему запросу ничего не найдено.';

const INTERNAL_SERVER_ERROR_MSG =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export {
  EMAIL_REGEX_PATTERN,
  PASSWORD_REGEX_PATTERN,
  SHORTFILM_MAX_DURATION,
  SERVER_URL,
  DESKTOP_DISPLAY_WIDTH,
  TABLET_DISPLAY_WIDTH,
  MOBILE_DISPLAY_WIDTH,
  DESKTOP_INITIAL_CARDS_COUNT,
  TABLET_INITIAL_CARDS_COUNT,
  MOBILE_INITIAL_CARDS_COUNT,
  DESKTOP_ADDTIONAL_CARDS,
  TABLET_ADDITIONAL_CARDS,
  MOBILE_ADDITIONAL_CARDS,
  INTERNAL_SERVER_ERROR_MSG,
  EMAIL_VALIDATION_TITLE,
  PASSWORD_VALIDATION_TITLE,
  INITTIAL_MESSAGE,
  NOT_FOUND_MESSAGE,
};
