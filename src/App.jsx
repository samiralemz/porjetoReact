import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import Cabecacalho from './componts/cabecalho';
import Footer from './componts/Footer';
import Home from './Pages/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faq from './Pages/faq';
import Register from './Pages/register';
import Playlist from './Pages/Playlist';
import UserEdit from './Pages/UserEdit';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cabecacalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq"   element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/user/edit" element={<UserEdit />} />
          <Route path="/playlist"  element={<Playlist />} />
          <Route path="/playlist/:id_playlist" element={<Playlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
