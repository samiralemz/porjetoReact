import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";


function formataAudioTime(tempoTotalSegundos) {
  const minutos = parseInt(tempoTotalSegundos / 60);
  const segundos = parseInt(tempoTotalSegundos % 60);
  const fmtSegundos = segundos < 10 ? "0" + segundos : segundos;
  const fmtMinutos = minutos < 10 ? "0" + minutos : minutos;

  return `${fmtMinutos}:${fmtSegundos}`;
}


function PlaylistItem(props) {
  const { id, user, titulo, artista, album, src, option, isEdit, handleDelete = null } = props;
  const [flagAudioRunning, setFlagAudioRunning] = useState(false);
  const [audioTime, setAudioTime] = useState("");
  const [show, setShow] = useState(false);
  const [playlistUser, setPlaylistUser] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [onSelect, setOnSelect] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const audioElement = useRef();

  useEffect(() => {
    loadPlaylists();
  }, []);

  function loadPlaylists() {
    axios.get("http://localhost:8080/usuario", {params: {email: user.email}})
    .then(response => {
      const playlists = response.data[0].lista_playlist;
      let result = [];
      for(let playlist of playlists) {
        result.push({
          titulo: playlist.nomePlaylist,
          id: playlist.id
        })
      }
      
      setPlaylistUser(result);
    })
  }

  function toggleAudio() {
    let audio = audioElement.current;
    if (!audio)
      return;

    if (flagAudioRunning) {
      audio.pause();
      setFlagAudioRunning(false);
    } else {
      audio.play();
      setFlagAudioRunning(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/playlist/${onSelect}/musica/${id}`)
    .then((response) => {
      handleClose();
    })

  }
  return (
    <li className="list-group-item" style={{ maxWidth: "40rem", minWidth: "30rem" }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Selecione a Playlist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {playlistUser !== null ? playlistUser.map((item) => {
            return (<Card className="mt-3">
              <Card.Body className="d-flex justify-content-between" key={item.id}>{item.titulo}  <div className="form-check-inline">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  value={item.nomePlaylist}
                  name="playlist"
                  required
                  onChange={e => setOnSelect(item.id)} />

              </div></Card.Body>
            </Card>)
          }) : null}
          {showErrorMessage ? (
            <div className="alert alert-danger mt-3" role="alert">
              {showErrorMessage}
            </div>
          ) : <></>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button type="submit" variant="success" onClick={handleSubmit}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex align-items-start justify-content-between">
        <div className="d-flex">
          <span
            onClick={_ => toggleAudio()}>
            {!flagAudioRunning ? (
              <i className="bi bi-play-fill fs-3"></i>
            ) : (
              <i className="bi bi-pause-fill fs-3"></i>
            )}
          </span>
          <div className="d-flex flex-column">
            {titulo}
            {(artista !== undefined || album !== undefined) ? 
              <span className="text-muted text-nowrap fs-6">
                {artista} - {album}
              </span>
              :<></>
            }
          </div>
        </div>
        <span className="fs-4">{audioTime}</span>
        {isEdit ? <div class="dropdown">
          <button class="btn border-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            ...
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <li><button class="dropdown-item" onClick={handleDelete !== null ? ()=>handleDelete(id) : null}>Excluir</button></li>
          </ul>
        </div> : null}
        {option ? <div class="dropdown">
          <button class="btn border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            ...
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="/#">Adicionar à fila</a></li>
            <li><button class="dropdown-item" onClick={handleShow}>Adicionar à Playlist</button></li>
            <li><a class="dropdown-item" href="/#">Curtir</a></li>
          </ul>
        </div> : null}
      </div>
      <audio
        id={id}
        ref={audioElement}
        onCanPlay={e => setAudioTime(formataAudioTime(e.target.duration))}
        onTimeUpdate={
          e => setAudioTime(formataAudioTime(e.target.duration - e.target.currentTime))
        }>
        <source src={src} type="audio/mpeg" />
      </audio>
    </li>
  )
}

export default PlaylistItem;