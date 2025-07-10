import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalCss = createGlobalStyle`
  *{
  margin: 0;
  padding 0;
  box-sizing: boder-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: #FFF8F2;
}

.container{
 max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
    @media(max-width: 768px){
    max-width: 768px;}
  }

`

export const Cores = {
  branca: '#fff',
  rosa: '#E66767',
  fundo: '#ffebd9'
}
