// import logo from './logo.svg';
// import './App.css';

import Tabela from "../../componts/Tabela";
import Cabecalho from "../../componts/cabecalho";

function Home(name) {
    let musicas = [
        {
            artista: 'Gustavo lima',
            titulo: 'musica',
            visualizacoes: '1000'
        },
        {
            artista:' Gustavo lima',
            titulo: 'musica',
            visualizacoes: '1000'
        },
        {
            artista: 'Michel telo',
            titulo: 'musica',
            visualizacoes: '1000'
        },
        {
            artista: 'Pitty',
            titulo: 'musica',
            visualizacoes: '2'
        }
    ];
    
  return (
    <div className="">
        <Cabecalho 
        />
        <Tabela
         musicas={musicas} 
         />

    </div>

  );
}

export default Home;