import * as S from './styles'
import { BtnCarrinho } from '../Produto/styles'
import pizza from '../../assets/images/pizza.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return acumulador + (valorAtual.preco || 0)
    }, 0)
  }

  const formatPriceToBRL = (price: number | undefined) => {
    if (price === undefined) {
      return 'R$ 0,00'
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPriceToBRL(item.preco)}</span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
            </S.CartItem>
          ))}
        </ul>
        <S.Prices>Valor Total: {formatPriceToBRL(getTotalPrice())}</S.Prices>
        <BtnCarrinho>Continuar com a Entrega</BtnCarrinho>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
