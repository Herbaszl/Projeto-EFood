import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ListaDeRestaurantes from '../../Containers/ListaDeRestaurante'
import { useEffect, useState } from 'react'
import { RestauranteType } from '../../types/types'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteType[]>([])
  const [carregando, setCarregando] = useState(true)
  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const response = await fetch(
          'https://fake-api-tau.vercel.app/api/efood/restaurantes'
        )
        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`)
        }
        const data: RestauranteType[] = await response.json()
        setRestaurantes(data)
      } catch (error) {
        console.error('Erro ao buscar restaurantes:', error)
      } finally {
        setCarregando(false)
      }
    }
    fetchRestaurantes()
  }, [])

  return (
    <>
      <Header variant="home" />
      {carregando ? (
        <p style={{ textAlign: 'center', padding: '20px' }}>
          Carregando restaurantes...
        </p>
      ) : (
        <ListaDeRestaurantes listaRestaurantes={restaurantes} />
      )}
      <Footer />
    </>
  )
}

export default Home
