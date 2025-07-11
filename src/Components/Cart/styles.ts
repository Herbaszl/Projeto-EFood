import styled from 'styled-components'
import { Cores } from '../../styles'
import remover from '../../assets/images/remover.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Cores.fundo};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  overflow-x: hidden;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${Cores.rosa};
  padding: 40px 16px 0px 16px;
  max-width: 380px;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 240px;
  }

  ul {
    padding-left: 0;
    margin: 0;
    flex-grow: 1;
    overflow-y: auto;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${Cores.fundo};
  margin-bottom: 24px;
  margin-top: 32px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${Cores.fundo};
  padding: 8px;
  width: 100%;
  height: 100px;
  margin-bottom: 16px;
  position: relative;
  box-sizing: border-box;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }

  h3 {
    color: ${Cores.rosa};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
    margin-left: 0;
  }

  span {
    color: ${Cores.rosa};
    font-size: 14px;
  }

  button {
    background-image: url(${remover});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`
