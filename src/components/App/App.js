import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from '../header/Header';
import Main from '../Main/main';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Other/Profile/Profile';
import Login from '../Other/Login/Login';
import Register from '../Other/Register/Register';
import Footer from '../Footer/Footer';
import NotFoundPage from '../Other/NotFoundPage/NotFoundPage';
import SideMenu from '../Other/SideMenu/SideMenu';
import ProtectedRoute from '../Other/ProtectedRoute/ProtectedRoute';

import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import errorHandler from '../../utils/submitErrorHandler';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tumbState, setTumbState] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [searchFormError, setSearchFormError] = useState('');

  const navigate = useNavigate();

  // Auto-login by JWT token on cookie
  useEffect(() => {
    mainApi
      .checkToken()
      .then((val) => {
        if (val) {
          setIsLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Request for user data on login
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser(userData.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrentUser({});
    }
  }, [isLoggedIn]);

  // Request for movies list on mount
  useEffect(() => {
    if (isLoggedIn) {
      moviesApi
        .getMovies()
        .then((res) => {
          // Set movies from API
          setMovies(res);
          console.log(res);
          // Set movies from local storage (last request before reload)
          if (localStorage['lastFilmsArray']) {
            setFilteredMovies(JSON.parse(localStorage['lastFilmsArray']));
          }
          setSearchFormError('');
        })
        .catch((err) => {
          setSearchFormError(errorHandler(err));
          console.log(err);
        });
    } else {
      setMovies([]);
    }
  }, [isLoggedIn]);

  function getSavedMoviesArray() {
    if (isLoggedIn) {
      mainApi
        .getSavedMovies()
        .then((res) => {
          // Needed for sorting by input
          setSavedMovies(res.data);
          // Needed to display saved movies on component mount
          setFilteredSavedMovies(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSavedMovies([]);
    }
  }

  // Request for saved movies list on mount
  useEffect(() => {
    getSavedMoviesArray();
  }, [isLoggedIn]);

  useEffect(() => {
    const handleWindowResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function removeMovie(movieId) {
    return mainApi
      .deleteMovie(movieId)
      .then((res) => {
        getSavedMoviesArray();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function likeMovie(options) {
    return mainApi
      .saveMovie({
        country: options.country,
        director: options.director,
        duration: options.duration,
        year: options.year,
        description: options.description,
        image: options.image,
        trailerLink: options.trailerLink,
        nameRU: options.nameRU,
        nameEN: options.nameEN,
        thumbnail: options.thumbnail,
        movieId: options.movieId,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  function showMenu() {
    setMenuState(true);
  }

  function hideMenu() {
    setMenuState(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header isLoggedIn={isLoggedIn} showMenu={showMenu} />
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                moviesArray={movies}
                filteredMoviesArray={filteredMovies}
                setFilteredMovies={setFilteredMovies}
                setMovies={setMovies}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                tumbState={tumbState}
                setTumbState={setTumbState}
                deviceWidth={deviceWidth}
                likeMovie={likeMovie}
                removeMovie={removeMovie}
                searchFormError={searchFormError}
              />
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                moviesArray={savedMovies}
                filteredMoviesArray={filteredSavedMovies}
                setFilteredMovies={setFilteredSavedMovies}
                setMovies={setSavedMovies}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                tumbState={tumbState}
                setTumbState={setTumbState}
                deviceWidth={deviceWidth}
                removeMovie={removeMovie}
              />
            }
          ></Route>
          <Route
            path="profile"
            element={
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setFilteredMovies={setFilteredMovies}
              />
            }
          ></Route>
          <Route
            path="/signin"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </div>

      <SideMenu menuState={menuState} hideMenu={hideMenu} />
    </CurrentUserContext.Provider>
  );
}

export default App;
