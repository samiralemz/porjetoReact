import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Cabecacalho from './componts/cabecalho';
import Footer from './componts/Footer';
import Home from './Pages/Index';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Faq from './Pages/faq';
import Register from './Pages/register';
import Playlist from './Pages/Playlist';
import UserEdit from './Pages/UserEdit';
import Login from './Pages/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import ListaPlaylist from './Pages/ListaPlaylist';
import PlaylistUser from './Pages/PlaylistUser';
import Search from './componts/Search';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user_logged_in"));
    if(!userLocal) { return ; }

    userLocal.nascimento = new Date(userLocal.nascimento);
    setUser(userLocal);
  }, [])

  function handleUserLogin(user) {
    setUser(user);
  }

  function handleUserLogout() {
    setUser(null);
    localStorage.removeItem("user_logged_in");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Cabecacalho user={user} onUserLogout={handleUserLogout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq"   element={<Faq />} />
          <Route path="/login" element={<Login onUserLogin={handleUserLogin} />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/user/edit" element={
            user ? <UserEdit user={user} /> 
            : <Navigate to="/" replace={true}/>}
            />

          <Route path="/buscar/:busca" element={<Search user={user} />} />
          <Route path="/playlist"  element={<ListaPlaylist />} />
          <Route path="/playlistUsuario/:id_playlist" element={<PlaylistUser user={user} />} />
          <Route path="/playlist/:id_playlist" element={<Playlist user={user} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
