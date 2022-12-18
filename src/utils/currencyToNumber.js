/**
 * A function to convert a currency string to a number
 * @param {number} value - The value to be formatted
 * @returns {string} - The formatted value
 * @example
 * currencyToNumber('R$ 123.456,70')
 * // 1234567.0
 */
export const currencyToNumber = (value) =>
  Number(value?.replace?.(/[^\d|,]/g, '').replace(',', '.') || 0)
