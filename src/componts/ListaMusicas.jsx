function ListaMusicas() {
  const musicasPopulares = [
    {titulo: "Arranhão"            , artista: "Henrique & Juliano", id: 1},
    {titulo: "Batom de Cereja"     , artista: "Israel & Rodolffo" , id: 2},
    {titulo: "Meu Pedaço de Pecado", artista: "João Gomes"        , id: 3},
    {titulo: "Baby Me Atende"      , artista: "Matheus Fernandes" , id: 4},
    {titulo: "Meu Abrigo"          , artista: "Melim"             , id: 5},
  ];

  return (
    <div style={{maxWidth: "fit-content", color: "#149f4a"}}>
      <span className="fw-bold">Aqui você encontra</span>
      <ul className="list-group">
        {musicasPopulares.map(musica => {
          const {id, titulo, artista} = musica;
          return (
            <li className="list-group-item d-flex" key={id}>
              <div className="ms-2 me-auto">
                  <div className="fw-bold">{titulo}</div>
                  {artista}
              </div>
            </li>
          )
        })}
      </ul>
  </div>
  )
}

export default ListaMusicas;