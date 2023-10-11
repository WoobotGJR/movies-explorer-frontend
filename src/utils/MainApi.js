class MainApi {
  constructor() {
    this._baseUrl = 'http://localhost:3000';
  }

  _checkResponseStatus(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}${endpoint}`, options).then(
      this._checkResponseStatus
    );
  }

  getUserInfo() {
    return this._request('/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  setUserInfo(name, email) {
    return this._request('/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  register(name, password, email) {
    return this._request('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    });
  }

  authorize(email, password) {
    return this._request('/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  }

  logout() {
    return this._request('/logout', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  checkToken(token) {
    return this._request('/users/me', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  saveMovie(movieData) {
    return this._request('/movies', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    });
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getSavedMovies() {
    return this._request('/movies', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

const mainApi = new MainApi();

export default mainApi;
