import { useState } from "react";


function toggleAudio(stateAudioRunning, audioID) {
  let [flagAudioRunning, setFlagAudioRunning] = stateAudioRunning;
  let audio = document.querySelector(`audio[id='${audioID}']`);

  if(!audio)
    return;

  if (flagAudioRunning){
    audio.pause();
    setFlagAudioRunning(false);
  }else{
    audio.play();
    setFlagAudioRunning(true);
  }
}

function formataAudioTime(tempoTotalSegundos) {
  const minutos = parseInt(tempoTotalSegundos / 60);
  const segundos = parseInt(tempoTotalSegundos % 60);
  const fmtSegundos = segundos < 10 ? "0" + segundos : segundos;
  const fmtMinutos  =  minutos < 10 ? "0" + minutos  : minutos;

  return `${fmtMinutos}:${fmtSegundos}`;
}

function PlaylistItem(props) {
  const {id, titulo, artista, album, src} = props;
  const stateAudioRunning = useState(false);
  const [audioTime, setAudioTime] = useState("");

  const [isAudioRunning, ] = stateAudioRunning;

  return (
    <li className="list-group-item" style={{maxWidth: "40rem", minWidth: "30rem"}}>
      <div className="d-flex align-items-start justify-content-between">
        <div className="d-flex">
          <span 
          onClick={_ => toggleAudio(stateAudioRunning, id)}>
            {!isAudioRunning ? (
              <i className="bi bi-play-fill fs-3"></i>
            ):( 
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