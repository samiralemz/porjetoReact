import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../componts/playlist/PlaylistItem";

function PlaylistUser(props) {
  let { id_playlist } = useParams();
  const [playlist, setPlaylist] = useState();
  const [musicas, setMusicas] = useState([]);
  
  useEffect(() => {
    renderSongs();
  }, []);

  function renderSongs() {
    axios.get("http://localhost:8080/playlist/" + id_playlist)
    .then(response => {
      const playlistUser = response.data;
      if (!playlistUser) return;

      setPlaylist(playlistUser);
      setMusicas(playlistUser.lista_musicas)
    })
  }

  function handleDelete(musica_id) {
    if (musica_id !== null && musica_id !== undefined) {
      axios.delete(`http://localhost:8080/${id_playlist}/musica/${musica_id}`);
      renderSongs();
    }

  }

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex flex-column ml-3 mt-5" style={{ maxWidth: "15rem" }}>
          <span className="fs-4 text-wrap text-center">{playlist?.titulo}</span>
        </div>

        <ul className="list-group mx-5 mt-5">

          {musicas && musicas.length > 0 ? musicas.map((musica, index) => {
            return (
              <PlaylistItem  
                id={musica.id}
                src={`/music/${musica.link}`}
                user={props.user}
                titulo={musica.nome}
                album={playlist.nomePlaylist}
                option={false}
                isEdit={true}
                handleDelete={handleDelete} />
            );
          }) : <h3>Playlist Sem Música</h3>}
        </ul>
      </div>
    </div>
  )
}

export default PlaylistUser;