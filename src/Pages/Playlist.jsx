import { useParams } from "react-router-dom";
import PlaylistItem from "../componts/playlist/PlaylistItem";

function Playlist() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex flex-column ml-3 mt-5" style={{maxWidth: "15rem"}}>
          <img src="/images/album-rock-nacional.jpg" style={{maxWidth: "15rem"}}/>
          <span className="fs-4 text-wrap text-center">Rock Nacional</span>
        </div>

        <ul className="list-group mx-5 mt-5">
          <PlaylistItem id="1" src="/music/toquinho-aquarela.mp3" titulo="Aquarela" artista="Toquinho" album="Aquarela"/>
          <PlaylistItem id="2" src="/music/tempos-modernos-lulu-santos.mp3" titulo="Tempos Modernos" artista="Lulu Santos" album="Lulu Acústico"/>
        </ul>
      </div>
    </div>
  )
}

export default Playlist;