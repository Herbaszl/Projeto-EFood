import styled from 'styled-components'
import banner from '../../assets/images/banner.png'

export const Container = styled.div`
  background-image: url(${banner});

  background-size: cover;
  color: #fff;
  background-repeat: no-repeat;
  margin-bottom: 57px;
`

export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 32px;
`
// Quero pedir desculpas, não consegui centralizar os titulos de outra forma :( ass: João
export const Categoria = styled.span`
  font-weight: 100;
  font-size: 32px;
`

export const Conteudo = styled.div`
  width: 1024px;
  margin-left: 172px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 40px;
  height: 280px;
`
