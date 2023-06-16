import Banner from 'components/Banner'
import styles from './Favoritos.module.css'

import React from 'react'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

function Favoritos() {
  return (
    <>
        <Banner imagem="favoritos"/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>

        <section className={styles.container} >
              <Card id='1' titulo='Gato Bonifacio' capa='cinetag\public\images\Imagem-Dunga.png' />
        </section>
    </>
  )
}

export default Favoritos