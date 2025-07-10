import styled from 'styled-components'

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grit-template-columns: 1fr;
    gap: 32px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 0 16px;
  }
`
