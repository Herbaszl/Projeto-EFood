import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import {
  FormularioContainer,
  FormTitulo,
  DeliveryButtonsContainer
} from '../Checkout/styles'
import { BtnCarrinho } from '../Produto/styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { clearCheckoutData } from '../../store/checkout/checkout'
import Checkout from '../Checkout'
import Payment from '../Payment'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const { delivery: deliveryData } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const [currentView, setCurrentView] = useState('cart')
  const [orderId, setOrderId] = useState<string | null>(null)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    setCurrentView('cart')
    dispatch(clearCheckoutData())
    setOrderId(null)
  }

  const goToCheckout = () => {
    if (items.length === 0) {
      alert('Seu carrinho está vazio! Adicione itens antes de continuar.')
      return
    }
    setCurrentView('delivery')
  }

  const goToCart = () => {
    setCurrentView('cart')
  }

  const goToPayment = () => {
    setCurrentView('payment')
  }

  const goToSuccess = (id: string) => {
    setOrderId(id)
    setCurrentView('success')
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
        {currentView === 'cart' && (
          <>
            <ul>
              {items.length === 0 ? (
                <p
                  style={{
                    color: '#ffebd9',
                    textAlign: 'center',
                    marginTop: '24px',
                    fontSize: '16px'
                  }}
                >
                  Seu carrinho está vazio.
                </p>
              ) : (
                items.map((item) => (
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
                ))
              )}
            </ul>
            <S.Prices>
              Valor Total: {formatPriceToBRL(getTotalPrice())}
            </S.Prices>
            <BtnCarrinho onClick={goToCheckout}>
              Continuar com a Entrega
            </BtnCarrinho>
          </>
        )}

        {currentView === 'delivery' && (
          <Checkout
            onBackToCart={goToCart}
            onContinueToPayment={goToPayment}
            onCloseCart={closeCart}
          />
        )}

        {currentView === 'payment' && (
          <Payment
            onBackCheckout={goToCheckout}
            onFinishPayment={goToSuccess}
            onCloseCart={closeCart}
            deliveryData={deliveryData!}
          />
        )}

        {currentView === 'success' && (
          <FormularioContainer>
            <FormTitulo>Pedido Realizado!</FormTitulo>
            <FormTitulo>
              {' '}
              {orderId ? `(Pedido Nº: ${orderId})` : 'semID'}{' '}
            </FormTitulo>
            <p
              style={{
                color: '#ffebd9',
                marginBottom: '32px'
              }}
            >
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido
            </p>
            <p
              style={{
                color: '#ffebd9',
                marginBottom: '32px'
              }}
            >
              Gostariamos de ressaltar que nossos entregaores não estarão
              autorizados a realizar nenhum tipo de cobranças extras
            </p>
            <p
              style={{
                color: '#ffebd9',
                marginBottom: '32px'
              }}
            >
              Lembre-se de lavar as mãos após o recebimento do pedido,
              garantindo sua segurança e bem-estar durante a refeição
            </p>
            <p
              style={{
                color: '#ffebd9',
                marginBottom: '32px'
              }}
            >
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica com a E-Food! Bom apetite!
            </p>
            <DeliveryButtonsContainer>
              {' '}
              <BtnCarrinho onClick={closeCart}>Fechar</BtnCarrinho>
            </DeliveryButtonsContainer>
          </FormularioContainer>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
