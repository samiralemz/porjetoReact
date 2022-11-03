import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import PlaylistItem from './PlaylistItem';

function PlaylistItemPromise(props) {
  const [musica, setMusica] = useState();

  useEffect(() => {
    loadMusica()
  }, [])

  async function loadMusica() {
    const result = (await axios.get("/musicas/"+props.musica.musica_id)).data;
    const playlist = (await axios.get("/playlist/"+result.playlist_id)).data;
    
    result.artista = playlist.artista;
    result.album = playlist.titulo_album;
    setMusica(result);
  }

  return (
    <>
    {musica !== undefined ?
      <PlaylistItem
      id={musica.musica_id}
      src={`/music/${musica.musica_link}`}
      user={props.user}
      titulo={musica?.titulo_musica}
      artista={musica?.artista}
      album={musica?.album}
      option={false}
      isEdit={true}
      handleDelete={props.handleDelete}
      />
      : 
      <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      }
    </>
  )
}

export default PlaylistItemPromise;