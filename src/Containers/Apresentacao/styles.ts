import styled from 'styled-components'
import banner from '../../assets/images/banner.png'

export const Container = styled.div`
  background-image: url(${banner});
  background-size: cover;
  color: #fff;
  background-repeat: no-repeat;
  margin-bottom: 57px;

  @media (max-width: 1024px) {
    padding: 24px 80px 32px 80px;
  }

  @media (max-width: 768px) {
    height: 220px;
    background-size: cover;
    max-width: 768px;
  }

  @media (max-width: 480px) {
    height: 180px;
    padding: 12px 16px 16px 16px;
  }
`

export const Titulo = styled.h1`
  font-weight: 900;
  font-size: 2.25em;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`
export const Categoria = styled.span`
  font-weight: 100;
  font-size: 2em;
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

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`
