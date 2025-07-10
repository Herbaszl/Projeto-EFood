import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ListaDeRestaurantes from '../../Containers/ListaDeRestaurante'
import { useEffect, useState } from 'react'
import { RestauranteType } from '../../types/types'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header variant="home" />
      {isLoading ? (
        <p style={{ textAlign: 'center', padding: '20px' }}>
          Carregando restaurantes...
        </p>
      ) : (
        <ListaDeRestaurantes listaRestaurantes={restaurantes!} />
      )}
      <Footer />
    </>
  )
}

export default Home
