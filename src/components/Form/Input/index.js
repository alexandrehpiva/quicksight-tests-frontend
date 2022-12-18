import React, { useMemo, useState } from 'react'
import InputMask from 'react-input-mask'

import { FormGroup, Label } from '../styles'
import { InputIcon, InputWrapper, StyledInput } from './styles'

import ErrorMessage from '../ErrorMessage'

import validIcon from '../../../assets/Icons/validIcon.svg'
import invalidIcon from '../../../assets/Icons/invalidIcon.svg'
import { EyeButton } from './EyeButton'
import { useField } from 'formik'
import CircleLoading from '../../CircleLoading'

const Input = ({
  name,
  label,
  type: defaultType,
  width,
  flexGrow,
  display,
  mask,
  maskPlaceholder,
  alwaysShowMask,
  beforeMaskedStateChange,
  showValidIcon,
  hideErrorMessage,
  onChange,
  disabled,
  padding,
  fontSizeLabel,
  isLoading,
  ...rest
}) => {
  const [type, setType] = useState(defaultType || 'text')
  const [{ onBlur, value }, meta, helpers] = useField(name)

  const { setValue } = helpers
  // eslint-disable-next-line no-unused-vars
  const { initialValue, error, touched } = meta

  // TODO: Verificar se vai ser necessário
  // Chama o onChange se o field vier com campo inicial definido:
  // useEffect(() => {
  //   if (initialValue) {
  //     console.log('useEffect', { initialValue })
  //     onChange?.(initialValue)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [initialValue, onChange?.toString()])

  const rightIcon = useMemo(() => {
    if (isLoading) {
      return <CircleLoading />
    }

    // EyeButton
    if (defaultType === 'password') {
      return (
        <EyeButton
          onClick={() => {
            setType(type === 'password' ? 'text' : 'password')
          }}
        />
      )
    }

    if (error && touched) {
      return <InputIcon src={invalidIcon} alt="" />
    }

    if (showValidIcon && touched && value) {
      return (
        <InputIcon src={!error ? validIcon : invalidIcon} width="18px" alt="" />
      )
    }

    return null
  }, [isLoading, defaultType, error, touched, showValidIcon, value, type])

  return (
    <>
      <FormGroup width={width} flexGrow={flexGrow} display={display}>
        {label && <Label fontSizeLabel={fontSizeLabel}>{label}</Label>}
        <InputWrapper
          borderColor={error && touched && '#d33e3e'}
          padding={padding}
        >
          {mask ? (
            <InputMask
              mask={mask}
              maskPlaceholder={maskPlaceholder}
              alwaysShowMask={alwaysShowMask}
              beforeMaskedStateChange={beforeMaskedStateChange}
              disabled={disabled ?? false}
              onBlur={onBlur}
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                onChange?.(e.target.value)
              }}
            >
              <StyledInput
                type={type ?? 'text'}
                name={name}
                disabled={disabled}
                {...rest}
              />
            </InputMask>
          ) : (
            <StyledInput
              type={type ?? 'text'}
              name={name}
              onBlur={onBlur}
              value={value}
              disabled={disabled}
              {...rest}
            />
          )}
          {rightIcon}
        </InputWrapper>
        {!hideErrorMessage && error && touched && (
          <ErrorMessage>{error}</ErrorMessage>
        )}
      </FormGroup>
    </>
  )
}

export default Input
