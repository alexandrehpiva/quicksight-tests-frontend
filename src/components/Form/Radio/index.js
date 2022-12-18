import React, { useCallback } from 'react'
import { useField } from 'formik'
import { FormGroup, Label } from '../styles'
import { CheckMark, InputRadio, InputRadioLabelWrapper } from './styles'
import { useFirstRender } from '../../../hooks/useFirstRender'
import ErrorMessage from '../ErrorMessage'

const Radio = ({
  name,
  label,
  value,
  width,
  display,
  onChange,
  fontSizeLabel,
  isValueNumber,
  defaultChecked,
  overflow,
  hideErrorMessage,
  // fieldObjKey,
  ...rest
}) => {
  const [{ value: fieldValue, ...field }, { error, touched }, { setValue }] =
    useField(name)
  const isFirstRender = useFirstRender()

  const setCheckedValue = useCallback(
    (event) => {
      const inputChecked = event.target.checked

      if (inputChecked) {
        if (value) {
          setValue(isValueNumber ? Number(value) : value)
        } else {
          setValue(inputChecked)
        }
      } else {
        setValue(false)
      }

      if (onChange !== undefined) {
        onChange(event)
      }
    },
    [isValueNumber, onChange, setValue, value]
  )

  if (isFirstRender && defaultChecked) {
    setValue(defaultChecked)
  }

  return (
    <>
      <FormGroup width={width} display={display}>
        <InputRadioLabelWrapper>
          <InputRadio
            {...field}
            type="radio"
            name={name}
            onChange={setCheckedValue}
            checked={
              typeof fieldValue === 'boolean'
                ? fieldValue
                : value === fieldValue
            }
            {...rest}
          />
          <Label fontSizeLabel={fontSizeLabel} margin="0" overflow={overflow}>
            {label}
          </Label>
          <CheckMark />
        </InputRadioLabelWrapper>
        {!hideErrorMessage && error && touched && (
          <ErrorMessage>{error}</ErrorMessage>
        )}
      </FormGroup>
    </>
  )
}

export default Radio
