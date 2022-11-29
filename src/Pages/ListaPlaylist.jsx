import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


function ListaPlaylist() {
  const [show, setShow] = useState(false);
  const userLocal = JSON.parse(localStorage.getItem("user_logged_in"));
  const [playlistUsuario, setPlaylistUsuario] = useState([]);
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    loadPlaylists();
  }, []);

  function loadPlaylists() {
    axios.get("http://localhost:8080/usuario", {params: {email: userLocal.email}})
    .then(response => {
      let playlists = response.data[0].lista_playlist;
      if(!playlists) return;

      let result = [];
      for(let playlist of playlists) {
        result.push({
          titulo: playlist.nomePlaylist,
          id: playlist.id
        })
      }
      
      setPlaylistUsuario(result);
    })
  }


  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost:8080/playlist", {
      nomePlaylist: titulo,
      thumbnail: null,
      isPrivate: true
    }).then((response) => {
      const {nomePlaylist, id} = response.data;

      let newPlaylist = playlistUsuario;
      newPlaylist.push({
        titulo: nomePlaylist,
        id
      });
      
      axios.post(`http://localhost:8080/usuario/${userLocal.id}/playlist/${id}`);
      setPlaylistUsuario(newPlaylist);
      handleClose();
    })
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">

      <h1>Minhas Playlists</h1>
      <div className="d-flex mt-5">
        <Button onClick={handleShow} style={{ "width": "40px", "height": "40px", "marginRight": "10px" }} variant="primary">+</Button>
        <h2>Criar Playlist</h2>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container-fluid">
            <input type="text" className="form-control mb-3"
              id="input_titulo"
              required
              placeholder="Titulo Playlist"
              value={titulo}
              name={'titulo'}
              onChange={e => setTitulo(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button type="submit" variant="success" onClick={handleSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      {playlistUsuario !== null ? playlistUsuario.map((item) => {
        return (<Card className="mt-3" key={item.id}>
          <Card.Body className="d-flex justify-content-between">
            {item.titulo}
            <Link to={`/playlistUsuario/${item.id}/`}>
            <Button variant="primary">Ver playlist</Button>
            </Link>
          </Card.Body>
        </Card>)
      }) : null}
    </div>
  )
}

export default ListaPlaylist;