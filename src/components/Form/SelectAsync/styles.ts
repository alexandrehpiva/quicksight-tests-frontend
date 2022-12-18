/* eslint-disable no-unused-vars */
import AsyncSelect from 'react-select/async'
import styled, { css } from 'styled-components'

type StyledSelectProps = {
  borderColor?: string
  height?: string
  width?: string
}
export const StyledSelect = styled(AsyncSelect)<StyledSelectProps>`
  ${({ borderColor, height, width }) => css`
    .select__indicator-separator {
      display: none;
    }

    .select__value-container,
    .select__input-container {
      font-size: var(--font-size-sm);
    }
    .select__control {
      border: 1px solid;
      border-color: ${borderColor || '#f0f0f0'};
      border-radius: var(--border-radius-lg);
      box-shadow: none;
      padding: 3px;
      height: ${height || '44px'};
      width: ${width || '100%'};

      :hover {
        border-color: ${borderColor || '#858585'};
      }
    }

    .select__single-value {
      color: #858585;
    }
  `}
`
