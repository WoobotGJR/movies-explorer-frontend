import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import Main from "../Main/main";
import Movies from "../Movies/Movies";
import Profile from "../Other/Profile/Profile";
import Login from "../Other/Login/Login";
import Register from "../Other/Register/Register";
import Footer from "../Footer/Footer";
import NotFoundPage from "../Other/NotFoundPage/NotFoundPage";
import SideMenu from "../Other/SideMenu/SideMenu";
// import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="saved-movies" element={<Movies />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </div>

      <SideMenu />
    </>
  );
}

export default App;
