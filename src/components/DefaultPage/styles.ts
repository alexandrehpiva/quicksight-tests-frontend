import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
