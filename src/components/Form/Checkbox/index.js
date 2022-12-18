import React, { useCallback } from 'react'
import { useField } from 'formik'
import { FormGroup, Label } from '../styles'
import { CheckMark, InputCheckbox, InputCheckboxLabelWrapper } from './styles'
import { useFirstRender } from '../../../hooks/useFirstRender'
import ErrorMessage from '../ErrorMessage'

const Checkbox = ({
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
        <InputCheckboxLabelWrapper>
          <InputCheckbox
            {...field}
            type="checkbox"
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
        </InputCheckboxLabelWrapper>
        {!hideErrorMessage && error && touched && (
          <ErrorMessage>{error}</ErrorMessage>
        )}
      </FormGroup>
    </>
  )
}

export default Checkbox
