/**
 * A function to remove all non-numeric characters from a string
 * @param {string} value - The value to be formatted
 * @returns {string} - The formatted value
 * @example
 * onlyNumbers('(11) 99999-9999')
 * // '11999999999'
 */
export const onlyNumbers = (value) => {
  if (typeof value === 'number') {
    return value.toString().replace(/[^\d]/g, '')
  }

  return value?.replace?.(/[^\d|,]/g, '') || ''
}
