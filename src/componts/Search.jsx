import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import PlaylistItem from './playlist/PlaylistItem';

export default function Search(props) {
  const { busca } = useParams();
  const [musicas, setMusicas] = useState();

  useEffect(() => {
    axios.get("/musicas", {params: {titulo_musica_like: busca}}).then(response => {
      setMusicas(response.data);
    })
  }, [busca])

  return (
    <div className="container p-0 mt-3">
      <h1 className='h1'>Resultados para pesquisa: "{busca}"</h1>
      <div className="d-flex justify-content-center align-items-center">
        <ul className="list-group mt-5" style={{maxWidth: "20rem"}}>
        {(musicas !== undefined) ?
          musicas.map((musica) => {
            return (
              <PlaylistItem
              id={musica.id}
              key={musica.id}
              user={props.user}
              src={`/music/${musica.musica_link}`}
              titulo={musica.titulo_musica}
              option={true}
              isEdit={false}
              />
              )})
              :
              <h1>Música não encontrada</h1>
            }
        </ul>
      </div>
    </div>
  )
}
