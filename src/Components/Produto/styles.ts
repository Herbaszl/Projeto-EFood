import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardProduto = styled.li`
  background-color: ${Cores.rosa};
  border: 1px solid ${Cores.fundo};
  padding: 8px;
  position: relative;
  font-family: Roboto, sans-serif;
  margin-top: 57px;
  width: 320px;
  heigth: 338px;
`

export const Titulo = styled.h3`
  font-weight: black;
  font-size: 16px;
  color: ${Cores.fundo};
  margin-bottom: 8px;
`

export const Descricao = styled.p`
font-size: 14px;
color: ${Cores.fundo};
line-height: 22px;
margin-bottom: 16px;
flex-grow 1.

`

export const ImagemProduto = styled.img`
  display: block;
  height: 180px;
  object-fit: cover;
  margin-bottom: 8px;
`
export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 180px - 8px);
  padding-bottom: 8px;
`

export const BtnCarrinho = styled.button`
  display: block;
  padding: 4px 0;
  width: 100%;
  background-color: ${Cores.fundo};
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: ${Cores.rosa};
  border: none;
  cursor: pointer;
  border-radius: 0;
  border-radius: 4px;
  margin-bottom: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d15656;
    color:${Cores.fundo};
`
