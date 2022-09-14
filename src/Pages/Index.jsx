import "../css/pagina1.css"
import "../css/css_menu_topo.css"
import Tabela from "../componts/Tabela";
import PlaylistCard from "../componts/PlaylistCard"

function Home(name) {
    let musicas = [
        {
            id: 1,
            artista: 'Gustavo lima',
            titulo: 'musica',
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
    <div>
        <h1 className="h1" style={{color: "#149f4a"}}>
            Olá, seja bem vindo
        </h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <PlaylistCard titulo={"Título Da Música"} artista={"Artista"} image={"/images/thmb2.webp"}/>
                </div>
            </div>  
        </div>
        <Tabela musicas={musicas} />
    </div>

  );
}

export default Home;