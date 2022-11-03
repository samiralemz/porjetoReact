import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItemPromise from "../componts/playlist/PlaylistItemPromise";

function PlaylistUser(props) {
  let { id_playlist: id_playlist_user } = useParams();
  const [playlist, setPlaylist] = useState();
  const [musicas, setMusicas] = useState([]);

  async function renderSongs() {
    const playlistUser = (await axios.get("/playlistUser/" + id_playlist_user)).data;
    setPlaylist(playlistUser);

    const musicas = (await axios.get("/musicasPlaylistUser", {params: {playlist_id: id_playlist_user}})).data;
    setMusicas(musicas);
  }

  function handleDelete(musica_id) {
    if (musica_id !== null && musica_id !== undefined) {
      axios.delete("/musicasPlaylistUser/" + musica_id);
      renderSongs();
    }

  }

  useEffect(() => {
    renderSongs();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex flex-column ml-3 mt-5" style={{ maxWidth: "15rem" }}>
          <span className="fs-4 text-wrap text-center">{playlist?.titulo}</span>
        </div>

        <ul className="list-group mx-5 mt-5">

          {musicas.length > 0 ? musicas.map((musica, index) => {
            return (
              <PlaylistItemPromise 
                id={musica.id}
                musica={musica}
                user={props.user}
                key={musica.id}
                handleDelete={() => handleDelete(musica.id)} />
            );
          }) : <h3>Playlist Sem Música</h3>}
        </ul>
      </div>
    </div>
  )
}

export default PlaylistUser;