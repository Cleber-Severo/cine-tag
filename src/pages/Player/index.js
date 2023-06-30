import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import React, { useEffect, useState } from 'react'
import Banner from 'components/Banner';
import Titulo from 'components/Titulo';
import NaoEncontrada from 'pages/NaoEncontrada';

function Player() {
  const[video, setVideo] = useState();
  const parametros = useParams();

  useEffect( () => {
    fetch(`https://my-json-server.typicode.com/Cleber-Severo/cinetag-api/videos?id=${parametros.id}`)
    .then(res=>res.json())
    .then(dados => setVideo(...dados));
  }, [] )

  console.log(parametros);
  console.log(video);

  if (!video) {
    return <NaoEncontrada/>
  }

  return (
    <>
        <Banner imagem='player' />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
          <section className={styles.container}>
            <iframe 
                width="100%" 
                height="100%" 
                src={video.link}
                title={video.titulo} 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        </section>
    </>
  )
}

export default Player