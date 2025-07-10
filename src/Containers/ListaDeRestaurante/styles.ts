import styled from 'styled-components'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    grit-template-columns: 1fr;
    gap: 16px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 0 16px;
  }
`
