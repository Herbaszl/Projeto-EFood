import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardProduto = styled.li`
  background-color: ${Cores.rosa};
  border: 1px solid ${Cores.fundo};
  padding: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const ImagemProduto = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  margin-bottom: 8px;
`

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.fundo};
  margin-top: 0;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${Cores.fundo};
  line-height: 22px;
  margin-bottom: 16px;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

export const BtnCarrinho = styled.button`
  display: block;
  width: 100%;
  background-color: ${Cores.fundo};
  font-weight: bold;
  font-size: 16px;
  padding: 8px 0;
  text-transform: capitalize;
  color: ${Cores.rosa};
  border: none;
  cursor: pointer;
  border-radius: 0;
  margin-bottom: 0;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${Cores.rosa};
    color: ${Cores.fundo};
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const ModalContent = styled.div`
  background-color: ${Cores.rosa};
  z-index: 2;
  max-width: 960px;
  width: 90%;
  padding: 32px;
  display: flex;
  color: ${Cores.fundo};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  margin-right: 24px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-right: 0;
    margin-bottom: 16px;
  }
`

export const ModalTextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;

  h4 {
    font-weight: bold;
    font-size: 24px;
    margin: 0;
    color: ${Cores.fundo};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BotaoFechar = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${Cores.fundo};
`

export const ModalAddToCartButton = styled.button`
  background-color: ${Cores.fundo};
  color: ${Cores.rosa};
  font-weight: bold;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: 14px;

  &:hover {
    background-color: ${Cores.rosa};
    color: ${Cores.fundo};
  }
`
