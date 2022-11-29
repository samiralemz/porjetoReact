import "../css/pagina1.css"
import "../css/css_menu_topo.css"
import PlaylistCard from "../componts/PlaylistCard"
import PlaylistGrid from "../componts/PlaylistGrid"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Home(name) {
    const [playlist, setPlaylist] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/playlist").then(response => {
            setPlaylist(response.data.filter(playlist => !playlist.isPrivate))
        })
    }, [])

    return (
        <div className="tela">
            <div className="container" style={{ "padding": "5rem", "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                <h3 className="text-center">Grandes playlists pra melhorar seu dia!</h3>
                <div>
                    <div className="grid-card-playlist">
                        {playlist?.map((item) => {
                            return (
                                <PlaylistGrid
                                    key={item.id}
                                    id={item.id}
                                    imagem={"images/" + item.thumbnail}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <div className="grid-card-home">
                        <PlaylistCard titulo={"Butter"} artista={"BTS"} image={"/images/bts_album.JPG"} />
                        <PlaylistCard titulo={"AM"} artista={"Arctic Monkeys"} image={"/images/imageCard3.jpg"} />
                        <PlaylistCard titulo={"Mais"} artista={"Os Arrais"} image={"/images/arrais.JPG"} />
                    </div>

                </div>
            </div>
              

        </div>

    );
}

export default Home;