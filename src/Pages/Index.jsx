import "../css/pagina1.css"
import "../css/css_menu_topo.css"
import Tabela from "../componts/Tabela";
import PlaylistCard from "../componts/PlaylistCard"
import PlaylistGrid from "../componts/PlaylistGrid"

function Home(name) {
    let musicas = [
        {
            id: 1,
            artista: 'Gustavo lima',
            titulo: 'Bloqueado',
            visualizacoes: '1000'
        },
        {
            id: 2,
            artista: ' Gustavo lima',
            titulo: 'musica',
            visualizacoes: '1000',
        },
        {
            id: 3,
            artista: 'Michel telo',
            titulo: 'musica',
            visualizacoes: '1000'
        },
        {
            id: 4,
            artista: 'Pitty',
            titulo: 'musica',
            visualizacoes: '2'
        }
    ];

    let playlist = [
        {
            id: 1,
            image_url: "/images/leeHi.jpg"
        },
        {
            id: 2,
            image_url: "/images/olivia.jpg",
        },
        {
            id: 3,
            image_url: "/images/giveon.jpg"
        },
        {
            id: 4,
            image_url: "/images/theweeknd.jpg"
        },
        {
            id: 5,
            image_url: "/images/bruno.jpg",
        },
        {
            id: 6,
            image_url: "/images/rock.jpg"
        }
    ];

    return (
        <div className="tela">
            <div className="container" style={{ "padding": "5rem", "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                <h3 className="text-center">Grandes playlists pra melhorar seu dia!</h3>
                <div>
                    <div className="grid-card-playlist">
                        {playlist.map((item, index) => {
                            return (
                                <PlaylistGrid
                                    key={index}
                                    id={item.id}
                                    imagem={item.image_url}
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
                <Tabela musicas={musicas} />  
            </div>
              

        </div>

    );
}

export default Home;