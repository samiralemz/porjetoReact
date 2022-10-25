import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "../componts/playlist/PlaylistItem";

function Playlist() {
  const [playlistSelecionada, setPlaylistSelecionada] = useState();
  let { id_playlist } = useParams();

  let playlist = [
    {
      id: 1,
      titulo: "LeeHi",
      titulo_album: "Only",
      artista: "LeeHi",
      image: "LeeHi.jpg",
      musicas: [
        {
          id: 1,
          titulo_musica: "Only",
          musica_link: "leehi_only.mp3",
        },
        {
          id: 2,
          titulo_musica: "Breath",
          musica_link: "leehi_breath.mp3",
        },
      ]
    },
    {
      id: 2,
      titulo: "Olivia Rodrigo",
      titulo_album: "Sour",
      artista: "Olivia Rodrigo",
      image: "olivia.jpg",
      musicas: [
        {
          id: 3,
          titulo_musica: "Favorite Crime",
          musica_link: "oliviarodrigo_favoritecrime.mp3",
        },
        {
          id: 4,
          titulo_musica: "Happier",
          musica_link: "oliviarodrigo_happier.mp3",
        },
      ]
    },
    {
      id: 3,
      titulo: "Giveon",
      titulo_album: "Heartbreak Anniversary",
      artista: "Giveon",
      image: "giveon.jpg",
      musicas: [
        {
          id: 5,
          titulo_musica: "Heartbreak Anniversary",
          musica_link: "giveon_heartbreakanniversary.mp3",
        },
        {
          id: 6,
          titulo_musica: "If i ain't got ",
          musica_link: "giveon_if.mp3",
        },
      ]
    },
    {
      id: 4,
      titulo: "The Weeknd",
      titulo_album: "Sacrifice",
      artista: "Weeknd",
      image: "theweeknd.jpg",
      musicas: [
        {
          id: 7,
          titulo_musica: "Out Of Time",
          musica_link: "TheWeeknd _outoftime.mp3",
        },
        {
          id: 8,
          titulo_musica: "Sacrifice ",
          musica_link: "TheWeeknd_sacrifice.mp3",
        },
        {
          id: 9,
          titulo_musica: "Save Your Tears",
          musica_link: "TheWeeknd_saveyourtears.mp3",
        },
      ]
    },
    {
      id: 5,
      titulo: "Bruno Mars",
      titulo_album: "Silk Sonic",
      artista: "Bruno Mars",
      image: "bruno.jpg",
      musicas: [
        {
          id: 10,
          titulo_musica: "Talking To The Moon",
          musica_link: "brunomars_TalkingToTheMoon.mp3",
        },
        {
          id: 11,
          titulo_musica: "When I Was Your Man",
          musica_link: "brunomars _when.mp3",
        },
      ]
    },
    {
      id: 6,
      titulo: "Rock Nacional",
      titulo_album: "Rock MPB",
      artista: "Variados",
      image: "rock.jpg",
      musicas: [
        {
          id: 12,
          titulo_musica: "Tempos Modernos - Lulu",
          musica_link: "tempos-modernos-lulu-santos.mp3",
        },
        {
          id: 13,
          titulo_musica: "Aquarela - Toquinho",
          musica_link: "toquinho-aquarela.mp3",
        },
      ]
    },
  ];

  const getPlaylist = ($id_playlist) => {
    let playlistFilter = playlist.filter(item => {
      return item.id == $id_playlist;
    })[0];
    setPlaylistSelecionada(playlistFilter);
  }


  useEffect(() => {
    axios.get("/playlist/"+id_playlist).then(response => {
      const playlist = response.data;
      if (playlist !== undefined) {
        setPlaylistSelecionada(playlist)
      }
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
                src={`/music/${item?.musica_link}`}
                caminho={item?.musica_link}
                titulo={item?.titulo_musica}
                artista={playlistSelecionada?.artista}
                album={playlistSelecionada?.titulo_album}
                option={true}
                isEdit={false}
                handleDelete={console.log("***")}
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