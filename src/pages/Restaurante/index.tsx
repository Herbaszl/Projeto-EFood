import { useParams } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Apresentacao from '../../Containers/Apresentacao'
import ListaDeProduto from '../../Containers/ListaDeProduto'
import { useGetRestaurantByIdQuery } from '../../services/api'
import Cart from '../../Components/Cart'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()

  const {
    data: restaurante,
    isLoading,
    isError,
    error
  } = useGetRestaurantByIdQuery(id || '')

  if (isLoading) {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>
        Estamos carregando sua fome para longe!...
      </p>
    )
  }

  if (isError) {
    console.error('Erro ao carregar restaurante:', error)
    return (
      <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
        Ops, acho que escorreguei nos cabos sem querer.
      </p>
    )
  }

  if (!restaurante) {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>
        Infelizmente seu Restaurante não está aberto
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
      <Cart />
    </>
  )
}

export default Restaurante
