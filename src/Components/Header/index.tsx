import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LogoEfood from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  variant?: 'default' | 'home'
}

const Header = ({ variant = 'default' }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  const isHomeVariant = variant === 'home'

  return (
    <S.Container variant={variant}>
      {!isHomeVariant && (
        <S.LinksNavegacao>
          <S.LinkRestaurante as={Link} to="/">
            Restaurantes
          </S.LinkRestaurante>
        </S.LinksNavegacao>
      )}

      <S.LogoContainer variant={variant}>
        <S.ImagemLogo src={LogoEfood} alt="Logo Efood" />
      </S.LogoContainer>

      {!isHomeVariant && (
        <S.CarrinhoInfo onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CarrinhoInfo>
      )}

      {isHomeVariant && (
        <S.TextoPrincipal variant={variant}>
          Viva experiências gastronômicas <br />
          no conforto da sua casa
        </S.TextoPrincipal>
      )}
    </S.Container>
  )
}

export default Header
