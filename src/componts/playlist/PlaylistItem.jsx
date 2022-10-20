import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';


function formataAudioTime(tempoTotalSegundos) {
  const minutos = parseInt(tempoTotalSegundos / 60);
  const segundos = parseInt(tempoTotalSegundos % 60);
  const fmtSegundos = segundos < 10 ? "0" + segundos : segundos;
  const fmtMinutos = minutos < 10 ? "0" + minutos : minutos;

  return `${fmtMinutos}:${fmtSegundos}`;
}


function PlaylistItem(props) {
  const { id, titulo, artista, album, src } = props;
  const [flagAudioRunning, setFlagAudioRunning] = useState(false);
  const [audioTime, setAudioTime] = useState("");

  function toggleAudio() {
    let audio = document.querySelector(`audio[id='${id}']`);

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


  return (
    <li className="list-group-item" style={{ maxWidth: "40rem", minWidth: "30rem" }}>
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
            <span className="text-muted text-nowrap fs-6">
              {artista} - {album}
            </span>
          </div>
        </div>
        <span className="fs-4">{audioTime}</span>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            ...
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => console.log("adicionei a playlist o id: ",id )} href="#/action-1">Adicionar a Playlist</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Adicionar a Fila</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Curtir</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <audio
        id={id}
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