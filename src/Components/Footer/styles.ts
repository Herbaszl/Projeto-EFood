import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${Cores.fundo};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Roboto, sans-serif;
  height: auto;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 32px 0;
  }

  @media (max-width: 480px) {
    padding: 24px 0;
  }
`

export const LogoRed = styled.a`
  display: block;
  line-height: 0;

  img {
    display: block;
    width: 24px;
    height: 24px;

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }
`

export const LogoEf = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
    width: auto;

    @media (max-width: 480px) {
      height: 32px;
    }
  }
`

export const RodaPe = styled.p`
  width: 480px;
  font-size: 10px;
  line-height: 16px;
  color: ${Cores.rosa};
  margin-top: 80px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 48px;
    font-size: 9px;
    line-height: 14px;
  }

  @media (max-width: 480px) {
    width: 90%;
    margin-top: 32px;
    font-size: 8px;
    line-height: 12px;
  }
`

export const RedesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    margin-bottom: 32px;
    gap: 4px;
  }
`
