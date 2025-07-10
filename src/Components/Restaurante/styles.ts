import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${Cores.branca};
  border: solid 2px ${Cores.rosa};
  color: ${Cores.rosa};
  position: relative;
  max-width: 472px;

  img {
    width: 100%;
    height: 217px;
    display: block;
  }

  ${TagContainer} {
    color: ${Cores.fundo};
    margin-right: 8px;
    margin-top: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  fnot-size: 18px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Conteudo = styled.div`
  padding: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-itens: center;
  margin-bottom: 8px;
`
export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
    font-size: 18px;
    color: ${Cores.rosa};
  }

  img {
    width: 21px;
    height: 21px;
  }
`
export const BotaoSaibaMais = styled(Link)`
  background-color: ${Cores.rosa};
  color: ${Cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  width: fit-content;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d15656;
  }
`
