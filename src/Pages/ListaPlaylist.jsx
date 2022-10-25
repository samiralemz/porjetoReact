import axios from "axios";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


function ListaPlaylist() {
  const [show, setShow] = useState(false);
  const userLocal = JSON.parse(localStorage.getItem("user_logged_in"));
  const playlistUser = JSON.parse(localStorage.getItem("playlists"));
  const [playlistUsuario, setPlaylistUsuario] = useState(playlistUser);
  const [newPlaylist, setNewPlaylist] = useState({
    titulo: null,
    usuario_id: userLocal.id
  });


  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/playlistUser", newPlaylist).then((response) => {
      axios.get(`/playlistUser?usuario_id=${userLocal.id}`).then(response => {
        localStorage.setItem(
          "playlists",
          JSON.stringify(response.data)
        );
        const playlistUser = JSON.parse(localStorage.getItem("playlists"));
        setPlaylistUsuario(playlistUser);
        setNewPlaylist({
          ...newPlaylist,
          titulo: null,
          usuario_id: userLocal.id
        });
      })
      handleClose();
    })
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onchange = (e) => {
    const { name, value } = e.target;
    setNewPlaylist({
      ...newPlaylist,
      [name]: value,
    });
  };

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
              value={newPlaylist.titulo}
              name={'titulo'}
              onChange={onchange} />
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
      {playlistUsuario.map((item) => {
        return (<Card className="mt-3">
          <Card.Body className="d-flex justify-content-between">{item.titulo} <Link to={`/playlistUsuario/${item.id}/`}>
            <Button variant="primary">Ver playlist</Button>
          </Link></Card.Body>
        </Card>)
      })}
    </div>
  )
}

export default ListaPlaylist;