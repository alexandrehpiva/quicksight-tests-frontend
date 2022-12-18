import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem 0;
  }

  > h1 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--fonts-primary);
  }
`
