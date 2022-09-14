import "../css/pagina1.css"
import "../css/css_menu_topo.css"
import Tabela from "../componts/Tabela";
import PlaylistCard from "../componts/PlaylistCard"

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
            artista:' Gustavo lima',
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
    
  return (
    <div className="tela">
        <h1 className="h1" style={{color: "#149f4a"}}>
            Olá, seja bem vindo
        </h1>
        <div className="container">
            <div className="row">
                <div className="card-home">
                    <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb1.JPG"}/>
                    <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb2.webp"}/>
                    <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb4.JPG"}/>
                </div>
                
            </div>  
        </div>
        <Tabela musicas={musicas} />
    </div>

  );
}

export default Home;