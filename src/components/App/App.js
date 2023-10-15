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

import { getLocalStorageItem } from '../../utils/localStorageHandlers';
import { INITTIAL_MESSAGE, NOT_FOUND_MESSAGE } from '../../utils/constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuState, setMenuState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [searchFormSpan, setSearchFormSpan] = useState('');

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

  // Request for saved movies list on mount
  useEffect(() => {
    const handleWindowResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [deviceWidth]);

  async function getSavedMovies() {
    try {
      const res = await mainApi.getSavedMovies();
      setFilteredSavedMovies(res.data);
      setSavedMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  // On mount of component we get saved movies from API
  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (getLocalStorageItem('filteredMovies').length === 0) {
      setSearchFormSpan(NOT_FOUND_MESSAGE);
    }
    if (isLoggedIn) {
      setSearchFormSpan(INITTIAL_MESSAGE);
    }
  }, [isLoggedIn]);

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
                setMovies={setMovies}
                setFilteredMovies={setFilteredMovies}
                filteredMovies={filteredMovies}
                deviceWidth={deviceWidth}
                setIsLoading={setIsLoading}
                isLoading={isLoading}
                searchFormSpan={searchFormSpan}
                setSearchFormSpan={setSearchFormSpan}
                setSavedMovies={setSavedMovies}
                savedMovies={savedMovies}
              />
            }
          ></Route>
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isLoggedIn={isLoggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                filteredSavedMovies={filteredSavedMovies}
                setFilteredSavedMovies={setFilteredSavedMovies}
                getSavedMovies={getSavedMovies}
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
