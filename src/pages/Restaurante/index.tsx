import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Apresentacao from '../../Containers/Apresentacao'
import ListaDeProduto from '../../Containers/ListaDeProduto'
import { RestauranteType } from '../../types/types'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()

  const [restaurante, setRestaurante] = useState<RestauranteType | null>(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    if (id) {
      const fetchRestaurante = async () => {
        try {
          const response = await fetch(
            `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
          )
          if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`)
          }
          const data: RestauranteType = await response.json()
          setRestaurante(data)
        } catch (error) {
          console.error(`Erro ao buscar o restaurante ${id}:`, error)
        } finally {
          setCarregando(false)
        }
      }

      fetchRestaurante()
    }
  }, [id])

  if (carregando) {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>
        Carregando informações do restaurante e cardápio...
      </p>
    )
  }

  if (!restaurante) {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>
        Restaurante não encontrado.
      </p>
    )
  }

  return (
    <>
      <Header variant="default" />
      <Apresentacao
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <div className="container">
        <ListaDeProduto product={restaurante.cardapio} />
      </div>
      <Footer />
    </>
  )
}

export default Restaurante
