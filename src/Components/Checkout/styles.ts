import styled from 'styled-components'
import { Cores } from '../../styles'

export const FormularioContainer = styled.div`
  padding: 0px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;

  small {
    font-size: 14px;
    font-weight: black;
    color: ${Cores.fundo};
  }
`

export const FormTitulo = styled.h3`
  font-size: 24px;
  color: ${Cores.fundo};
  font-weight: black;
`

export const InputDiv = styled.div<{ metade?: boolean }>`
  margin-top: 16px;
  label {
    display: flex;
    color: ${Cores.fundo};
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: bold;
  }
  ${(props) =>
    props.metade &&
    `
    width: calc(50% - 12px);

    @media(max-width: 768px){
      width: 100%;
    }
  `}
`

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  background-color: ${Cores.fundo};
  border: none;
  font-size: 14px;
  &::placeholder {
    color: ${Cores.rosa};
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px; /* Reduz o gap no mobile */
  }
`

export const DeliveryButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;

  & > button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
`

export const BackButton = styled.button`
  background-color: ${Cores.fundo};
  color: ${Cores.rosa};
  border: 1px solid ${Cores.rosa};
  padding: 8px 16px;
  font-weight: bold;
   font-size: 16px;
  cursor: pointer;
  width: 100%;

   &:hover {
      background-color: ${Cores.rosa};
      color: ${Cores.fundo};
`
