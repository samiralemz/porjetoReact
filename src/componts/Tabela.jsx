import React from "react";


function Tabela(props) {
  return (
    <div style={{ border: '1px' }} key={'Cabecalho'}>
      <table className="table table-sm table-hover caption-top">
        <caption className="fw-bold" style={{color: "#149f4a"}}>Top {props.musicas.length} mais ouvidas</caption>
        <thead>
          <tr>
            <th>Título</th>
            <th>Artista</th>
            <th>Visualizações</th>
          </tr>
        </thead>
        <tbody>
          {props.musicas.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.artista}</td>
                <td>{item.visualizacoes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;