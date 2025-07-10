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

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    margin-bottom: 8px;
  }

  @media (max-width: 760px) {
    padding: 12px;
    height: 90%;
  }
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
`

export const ImagemProduto = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  margin-bottom: 8px;
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
