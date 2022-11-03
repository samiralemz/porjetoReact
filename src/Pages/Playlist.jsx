import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../componts/playlist/PlaylistItem";

function Playlist(props) {
  const { user } = props;
  const [playlistSelecionada, setPlaylistSelecionada] = useState();
  let { id_playlist } = useParams();

  useEffect(() => {
    axios.get(`/playlist/${id_playlist}`).then(response => {
      let playlist = response.data;

      axios.get("/musicas", {params: {playlist_id: id_playlist}}).then(response => {
        playlist.musicas = response.data;
        setPlaylistSelecionada(playlist);
      });
    })

  }, [id_playlist]);

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex flex-column ml-3 mt-5" style={{ maxWidth: "15rem" }}>
          <img src={playlistSelecionada?.image} style={{ maxWidth: "15rem" }} />
          <span className="fs-4 text-wrap text-center">{playlistSelecionada?.titulo}</span>
        </div>

        <ul className="list-group mx-5 mt-5">
          {playlistSelecionada?.musicas?.map((item, index) => {
            return (
              <PlaylistItem
                id={item.id}
                key={item.id}
                user={user}
                src={`/music/${item?.musica_link}`}
                titulo={item?.titulo_musica}
                artista={playlistSelecionada?.artista}
                album={playlistSelecionada?.titulo_album}
                option={true}
                isEdit={false}
              />
            );
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Playlist;