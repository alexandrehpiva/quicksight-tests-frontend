import { useCallback } from 'react'
import { useField } from 'formik'
import { StyledSelect } from './styles'
import ErrorMessage from '../ErrorMessage'
import { FormGroup, Label } from '../styles'
import { AsyncProps } from 'react-select/async'
import { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select'
import { FCC } from '../../../typings/global'

type OptionType =
  | any
  | null
  | any[]
  | {
      label: string
      value: string
    }

type ReactSelectAsyncProps<Option> = AsyncProps<Option, boolean, GroupBase<Option>>

type SelectAsyncProps = ReactSelectAsyncProps<OptionType> & {
  label?: string
  width?: string
  minWidth?: string
  display?: string
  optionLabel?: string
  optionValue?: string
  fontSizeLabel?: string
  loadOptions?: (inputValue: string) => Promise<any>
  hideErrorMessage?: boolean
}
const SelectAsync: FCC<SelectAsyncProps> = ({
  name,
  label,
  width,
  minWidth,
  display,
  onChange,
  optionLabel,
  optionValue,
  fontSizeLabel,
  loadOptions,
  hideErrorMessage,
  ...rest
}) => {
  const [field, { error, touched }, helpers] = useField(name || '')

  const handleChange = useCallback(
    (option: OptionType, action: ActionMeta<OptionType>) => {
      onChange?.(option, action)
      helpers.setValue(option)
    },
    [onChange, helpers]
  )

  const handleLoadOptions = useCallback(
    (inputValue: string, callback: (options: OptionsOrGroups<any, GroupBase<any>>) => void): void => {
      setTimeout(async () => {
        callback(await loadOptions?.(inputValue))
      }, 1)
    },
    [loadOptions]
  )

  return (
    <>
      <FormGroup width={width} minWidth={minWidth} display={display}>
        {label && <Label fontSizeLabel={fontSizeLabel}>{label}</Label>}
        <StyledSelect
          {...field}
          borderColor={error && touched ? '#d33e3e' : undefined}
          classNamePrefix="select"
          onChange={handleChange}
          getOptionLabel={(option: any) => (optionLabel ? option[optionLabel] : option.label)}
          getOptionValue={(option: any) => (optionValue ? option[optionValue] : option)}
          loadOptions={handleLoadOptions}
          defaultOptions
          cacheOptions
          isClearable
          {...rest}
        />
        {!hideErrorMessage && error && touched && <ErrorMessage>{error}</ErrorMessage>}
      </FormGroup>
    </>
  )
}

export default SelectAsync
