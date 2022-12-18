import styled, { css } from 'styled-components'

export const InputRadio = styled.input.attrs({
  type: 'radio'
})`
  display: none;
`

export const CheckMark = styled.span`
  position: absolute;
  top: 6px;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid var(--theme-primary);
  border-radius: 50%;

  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--theme-primary);
  }
`

export const InputRadioLabelWrapper = styled.label`
  ${({ disabled }) => css`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    font-size: var(--font-size-md);
    color: var(--text-tertiary);
    user-select: none;

    input[type='radio'] {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }

    input:checked ~ span:after {
      display: block;
    }
  `}
`
