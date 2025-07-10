import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { Cores } from '../../styles'

interface ContainerProps {
  variant?: 'default' | 'home'
}

export const Container = styled.header<ContainerProps>`
  background-image: url(${fundo});
  background-repeat: repeat;
  background-size: auto;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #f0e0e0;

  ${(props) =>
    props.variant === 'default' &&
    `
    padding: 16px 40px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      padding: 16px 24px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      text-align: center;
      padding: 16px;

      ${LinksNavegacao} {
        margin-bottom: 8px;
      }
    }
  `}

  ${(props) =>
    props.variant === 'home' &&
    `
    height: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (max-width: 768px) {
      height: 280px;
    }

    @media (max-width: 480px) {
      height: 200px;
    }
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 235, 217, 0.8);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

export const TextoPrincipal = styled.h1<ContainerProps>`
  color: ${Cores.rosa};
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  line-height: 42px;
  margin-top: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
    margin-top: 16px;
  }
`

export const LinksNavegacao = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`

export const LinkRestaurante = styled.a`
  color: ${Cores.rosa};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125em;
  padding: 8px 0;

  &:hover {
    text-decoration: underline;
  }
`

export const LogoContainer = styled.div<ContainerProps>`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => (props.variant === 'home' ? '0' : '0')};
`

export const ImagemLogo = styled.img`
  height: 40px;
  width: auto;
  display: block;

  @media (max-width: 480px) {
    height: 32px;
  }
`

export const CarrinhoInfo = styled.a`
  color: ${Cores.rosa};
  font-weight: bold;
  font-size: 1.125em;
  padding: 8px 0;
  cursor: pointer;
  text-decoration: none;
`
