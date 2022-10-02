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
            image_url: "/images/thmb4.jpg"
        },
        {
            id: 2,
            image_url: "/images/thmb1.jpg",
        },
        {
            id: 3,
            image_url: "/images/thmb2.webp"
        },
        {
            id: 4,
            image_url: "/images/imageCard1.jpg"
        },
        {
            id: 5,
            image_url: "/images/imageCard2.jpg",
        },
        {
            id: 6,
            image_url: "/images/imageCard3.jpg"
        }
    ];

    return (
        <div className="tela">
            <h1 className="h1" style={{ color: "#149f4a" }}>
                Olá, seja bem vindo
            </h1>
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
                    <div className="grid-card-playlist">
                        <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb1.JPG"} />
                        <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb2.webp"} />
                        <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb4.JPG"} />
                    </div>

                </div>
            </div>
            {/* <Tabela musicas={musicas} /> */}

        </div>

    );
}

export default Home;