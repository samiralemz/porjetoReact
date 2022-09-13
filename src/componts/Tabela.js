import React from "react";


function Tabela(props) {

  return (
    <div style={{ border: '1px' }} key={'Cabecalho'}>
      <table>
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
              <div key={item.key}>
                <tr>
                  <td>{item.titulo}</td>
                  <td>{item.artista}</td>
                  <td>{item.visualizacoes}</td>
                </tr>
              </div>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;