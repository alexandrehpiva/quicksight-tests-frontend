import styled from 'styled-components'

export const InputCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  min-width: 18px;
  background-color: #fdfdff;
  margin-top: 3px;
  margin-top: 3px;
  border: 2px solid #be9137;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
`

export const InputCheckboxLabelWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #858585;
  max-width: 100%;

  ${InputCheckbox} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked ~ ${CheckMark} {
    background-color: #be9137;
  }

  input:checked ~ ${CheckMark}:after {
    content: '';
    position: absolute;
    display: block;
  }

  ${CheckMark}:after {
    left: 4px;
    top: 1px;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`
