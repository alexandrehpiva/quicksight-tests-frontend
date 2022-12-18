import styled, { css } from 'styled-components'
import { Field } from 'formik'

export const TextareaWrapper = styled.div`
  ${({ borderColor, padding }) => css`
    background: #ffffff;
    border: 1px solid ${borderColor || '#f0f0f0'};

    border-radius: var(--border-radius-lg);
    display: flex;
    gap: 16px;
    padding: ${padding || '11px'};

    padding-inline: 16px;
    width: 100%;

    :focus-within {
      border: 1px solid ${borderColor || '#858585'};
    }
  `}
`

export const StyledTextarea = styled(Field)`
  ${({ textTransform, height }) => css`
    background: transparent;
    border: none;
    resize: none;
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
    font-weight: 400;
    width: 100%;
    height: ${height || '200px'};

    text-transform: ${textTransform || 'none'};

    ::placeholder {
      color: var(--bs-gray-500);
    }
  `}
`

export const InputIcon = styled.img`
  ${({ onClick, width }) => css`
    align-items: center;
    cursor: ${onClick ? 'pointer' : 'default'};
    display: flex;
    justify-content: center;
    width: ${width || 'auto'};
    min-width: ${width || 'auto'};
  `}
`
