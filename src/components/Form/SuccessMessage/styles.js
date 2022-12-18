import styled, { css } from 'styled-components'
import { Typography } from '../../index'

export const SuccessMessage = styled(Typography)`
  ${({ width }) => css`
    max-width: 240px;
    font-size: 0.85rem;
    margin: 4px 16px;
    /* break line when receive \n */
    white-space: pre-wrap;
    color: #0ba70b;
    font-style: italic;

    ${width &&
    css`
      width: ${width};
      max-width: ${width};
    `}
  `}
`
