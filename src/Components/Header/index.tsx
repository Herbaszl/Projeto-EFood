import * as S from './style'
import { Link } from 'react-router-dom'
import LogoEfood from '../../assets/images/logo.png'

export type Props = {
  variant?: 'default' | 'home'
}

const Header = ({ variant = 'default' }: Props) => {
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
        <S.CarrinhoInfo href="#">0 produto(s) no carrinho</S.CarrinhoInfo>
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
