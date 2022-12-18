import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  width: 100%;
`

type SendButtonProps = {
  disabled?: boolean
  loading?: boolean
}
export const SendButton = styled.button<SendButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #858585;
  border-radius: 4px;
  color: #858585;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  margin-bottom: 0.3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #858585;
    color: #fff;
  }

  :disabled {
    background-color: #f0f0f0;
    border-color: #f0f0f0;
    color: #858585;
    cursor: not-allowed;
  }

  ${({ loading }) =>
    loading &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-left: 0.5rem;
        border: 3px solid #858585;
        border-radius: 50%;
        border-top-color: transparent;
        animation: ${spin} 0.6s linear infinite;
      }
    `}
`
