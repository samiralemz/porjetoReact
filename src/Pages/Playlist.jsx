import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../componts/playlist/PlaylistItem";

function Playlist(props) {
  const { user } = props;
  const [playlistSelecionada, setPlaylistSelecionada] = useState();
  let { id_playlist } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/playlist/${id_playlist}`).then(response => {
      setPlaylistSelecionada(response.data);
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
          {playlistSelecionada?.lista_musicas?.map((item, index) => {
            return (
              <PlaylistItem
                id={item.id}
                key={item.id}
                user={user}
                src={`/music/${item.link}`}
                titulo={item.nome}
                album={playlistSelecionada.nomePlaylist}
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