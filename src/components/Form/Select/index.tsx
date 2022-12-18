import React, { useCallback, useEffect } from 'react'
import { useField } from 'formik'
import { StyledSelect } from './styles'
import ErrorMessage from '../ErrorMessage'
import { FormGroup, Label } from '../styles'
import CircleLoading from '../../CircleLoading'
import { deepEqual } from '../../../utils/deepEqual'
import { Props as ReactSelectProps } from 'react-select'
import { FCC } from '../../../typings/global'

type OptionType = any | null | any[] | {
  label: string;
  value: string;
}

type OptionsHistory = {
  oldOptions?: OptionType;
  actualOptions?: OptionType;
}

type SelectProps = ReactSelectProps & {
  label?: string
  width?: string
  minWidth?: string
  display?: string
  optionLabel?: string
  optionValue?: string
  fontSizeLabel?: string
  hideErrorMessage?: boolean
}
const Select: FCC<SelectProps> = ({
  name,
  label,
  width,
  minWidth,
  display,
  onChange,
  optionLabel,
  optionValue,
  fontSizeLabel,
  options,
  isClearable,
  hideErrorMessage,
  ...rest
}) => {
  const [field, { error, touched }, helpers] = useField(name || '')
  const { setValue } = helpers
  const [loadingOptions, setLoadingOptions] = React.useState(true)
  const optionsHistory = React.useRef<OptionsHistory>({
    oldOptions: null,
    actualOptions: options
  })

  const handleChange: ReactSelectProps<OptionType>['onChange'] = (option, action) => {
    onChange?.(option, action)
    helpers.setValue(option)
  }

  // As the loadingOptions need to be true for the first render, simply setting it to false
  useEffect(() => {
    setLoadingOptions(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // If the prop options changes, the select will be resetted with a timeout
  useEffect(() => {
    if (options && !loadingOptions) {
      setLoadingOptions(true)
      setTimeout(() => {
        if (!field.value) {
          setValue(isClearable ? '' : options[0])
        }
        setLoadingOptions(false)
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deepEqual(optionsHistory.current.oldOptions, optionsHistory.current.actualOptions).isEqual
  ])

  const rightIcon = useCallback(() => {
    if (loadingOptions) {
      return <CircleLoading />
    }

    return null
  }, [loadingOptions])

  optionsHistory.current.oldOptions = optionsHistory.current.actualOptions
  optionsHistory.current.actualOptions = options

  return (
    <>
      <FormGroup width={width} minWidth={minWidth} display={display}>
        {label && <Label fontSizeLabel={fontSizeLabel}>{label}</Label>}
        {!loadingOptions ? (
          <StyledSelect
            {...field}
            borderColor={error && touched ? '#d33e3e' : undefined}
            onChange={handleChange}
            classNamePrefix="select"
            getOptionLabel={(option: any) => (optionLabel ? option[optionLabel] : option.label)}
            getOptionValue={(option: any) => (optionValue ? option[optionValue] : option)}
            options={options || undefined}
            isClearable={isClearable}
            {...rest}
          />
        ) : (
          <StyledSelect
            {...field}
            {...rest}
            isDisabled
            isOptionDisabled={() => true}
            classNamePrefix="select"
            components={{
              IndicatorSeparator: rightIcon
            }}
          />
        )}
        {!hideErrorMessage && error && touched && <ErrorMessage>{error}</ErrorMessage>}
      </FormGroup>
    </>
  )
}

export default Select
