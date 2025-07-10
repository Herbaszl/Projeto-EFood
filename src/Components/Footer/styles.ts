import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${Cores.fundo};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 298px;
  font-family: Roboto, sans-serif;
  height: 298px;
`

export const LogoRed = styled.a`
  display: block;
  line-height: 0;

  img {
    display: block;
  }
`

export const LogoEf = styled.div`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RodaPe = styled.p`
  width: 480px;
  font-size: 10px;
  line-height: 16px;
  color: ${Cores.rosa};

  margin-top: 80px;
`

export const RedesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`
