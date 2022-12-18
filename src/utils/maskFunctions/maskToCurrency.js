import { numberToCurrency } from '../numberToCurrency'

/**
 * Mask function to convert a value to currency to use in react-input-mask
 * @param {object} state - The state to be formatted
 * @returns {{ value: string, selection: object }} - The state with the formatted value
 * @example
 * maskToCurrency({
 *  nextState: { value: '123456789' }
 * })
 * // { value: 'R$ 123.456.789,00', selection: { start: 17, end: 17 } }
 */
export const maskToCurrency = (state) => {
  const {
    // previousState,
    // currentState,
    nextState
  } = state
  const { value } = nextState || {}

  const formattedValue = numberToCurrency(value)

  return {
    ...nextState,
    value: formattedValue,
    selection: {
      ...nextState.selection,
      start: formattedValue.length,
      end: formattedValue.length
    }
  }
}
