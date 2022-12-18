import styled, { css } from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 100%;
  padding: 2rem 1rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--fonts-primary-dark);
  margin-bottom: 1rem;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
`

type ItemProps = {
  isActive?: boolean
}

export const Item = styled.li<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: var(--background);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  color: var(--fonts-medium);

  &:hover {
    background-color: var(--background-dark);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
    color: var(--fonts-primary);
  }

  ${({ isActive: active }) =>
    active &&
    css`
      background-color: var(--background-dark);
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);
      color: var(--fonts-primary);
    `}
`
