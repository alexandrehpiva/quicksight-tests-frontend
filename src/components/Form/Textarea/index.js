import React from 'react'
import { useField } from 'formik'

import { TextareaWrapper, StyledTextarea } from './styles'
import { FormGroup, Label } from '../styles'
import ErrorMessage from '../ErrorMessage'

const Textarea = ({ type, name, label, disabled, onChange, ...rest }) => {
  const [{ onBlur, value }, meta, { setValue }] = useField(name)

  // eslint-disable-next-line no-unused-vars
  const { error, touched } = meta

  return (
    <>
      <FormGroup>
        <Label>{label}</Label>
        <TextareaWrapper borderColor={error && touched && '#d33e3e'}>
          <StyledTextarea
            component={type}
            name={name}
            onBlur={onBlur}
            disabled={disabled ?? false}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              onChange?.(e.target.value)
            }}
            {...rest}
          />
        </TextareaWrapper>
        {error && touched && <ErrorMessage>{error}</ErrorMessage>}
      </FormGroup>
    </>
  )
}

export default Textarea
