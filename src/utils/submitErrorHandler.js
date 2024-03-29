const errors = {
  400: 'При регистрации пользователя произошла ошибка',
  401: 'Вы ввели неправильный логин или пароль',
  409: 'Пользователь с таким email уже существует',
  500: 'Во время запроса произошла ошибка. Попробуйте позже',
  0: '',
};

function errorHandler(err) {
  err = Number(err.split(' ')[1]) ?? err[0];

  return errors[err];
}

export default errorHandler;
