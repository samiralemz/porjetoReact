import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../componts/playlist/PlaylistItem";

function PlaylistUser() {
  let { id_playlist } = useParams();
  const [playlist, setPlaylist] = useState();
  const [musicas, setMusicas] = useState([]);

  function onStartPage() {
    axios.get(`/playlistUser?id=${id_playlist}`).then(response => {
      setPlaylist(response.data[0]);
      axios.get(`/musicas?playlist_id=${id_playlist}`).then(response => {
        setMusicas(response.data);
      })
    })
  }

  function handleDelete(musica_id) {
    if (musica_id !== null) {
      axios.delete(`/musicas/${musica_id}`);
      axios.get(`/musicas?playlist_id=${id_playlist}`).then(response => {
        setMusicas(response.data);
      })
    }

  }

  useEffect(() => {
    onStartPage();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex flex-column ml-3 mt-5" style={{ maxWidth: "15rem" }}>
          {/* <img src={`/images/${playlist?.image}`} style={{ maxWidth: "15rem" }} /> */}
          <span className="fs-4 text-wrap text-center">{playlist?.titulo}</span>
        </div>

        <ul className="list-group mx-5 mt-5">

          {musicas.length > 0 ? musicas.map((item, index) => {
            return (
              <PlaylistItem
                id={item?.id}
                src={`/music/${item?.caminho_musica}`}
                caminho={item?.caminho_musica}
                titulo={item?.titulo}
                artista={item?.artista}
                album={item?.album}
                option={false}
                isEdit={true}
                handleDelete={handleDelete}
              />
            );
          }) : <h3>Playlist Sem Música</h3>}
        </ul>
      </div>
    </div>
  )
}

export default PlaylistUser;