import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import Card from 'components/Card';
import Rodape from 'components/Rodape';
import Titulo from 'components/Titulo';
import React from 'react';

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card id='1' titulo='gato bonifácio' capa="C:\Users\clebe\dev\alura\Cursos\React praticando React com js\cinetag\public\images\Imagem-Dunga.png"/>
      <Rodape />
    </>

  )
}

export default Inicio