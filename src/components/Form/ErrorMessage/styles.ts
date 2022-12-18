import styled, { css } from 'styled-components'
import Typography from '../../Typography'

type ErrorMessageProps = {
  width?: string
}
export const ErrorMessage = styled(Typography)`
  ${({ width }) => css`
    max-width: 240px;
    font-size: 0.85rem;
    margin: 4px 16px;
    /* break line when receive \n */
    white-space: pre-wrap;

    ${width &&
    css`
      width: ${width};
      max-width: ${width};
    `}
  `}
`
