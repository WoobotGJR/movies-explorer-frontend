// https://html.spec.whatwg.org/multipage/input.html#the-pattern-attribute
const EMAIL_REGEX_PATTERN =
  '^([a-zA-Z0-9\\._%\\-]+@[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,})$';

//  https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
const PASSWORD_REGEX_PATTERN =
  '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'; // минимум 1 символ в нижнем регистре, минимум 1 в верхнем и минимум 1 цифра, более 8 символов

export { EMAIL_REGEX_PATTERN, PASSWORD_REGEX_PATTERN };
