class MoviesApi {
  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
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

  getMovies() {
    return this._request('');
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
