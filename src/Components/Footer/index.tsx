import * as S from './styles'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <S.Container>
      <S.LogoEf>
        <img src={logo} />
      </S.LogoEf>
      <S.RedesContainer>
        <S.LogoRed target="_blank" href="http://instagram.com/">
          <img src={instagram} />
        </S.LogoRed>
        <S.LogoRed target="_blank" href="http://facebook.com/">
          <img src={facebook} />
        </S.LogoRed>
        <S.LogoRed target="_blank" href="http://x.com/">
          <img src={twitter} />
        </S.LogoRed>
      </S.RedesContainer>

      <S.RodaPe>
        A eFood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.RodaPe>
    </S.Container>
  )
}

export default Footer
