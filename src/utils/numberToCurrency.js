/**
 * A function to convert a number to a currency string
 * @param {number} value - The value to be formatted
 * @returns {string} - The formatted value
 * @example
 * numberToCurrency(1234567.0)
 * // R$ 123.456,70
 */
export const numberToCurrency = (value) => {
  let amount = value

  // Verify if value is a number
  if (typeof value === 'number' || !Number.isNaN(Number(value))) {
    // Add fixed two decimal to amount
    amount = Number(value).toFixed(2).toString()
  }

  let amountFormatted = amount?.replace?.(/\D/g, '')
  amountFormatted = amountFormatted?.replace?.(/^0+/g, '')

  // If amountFormatted has only two digits, return it
  if (amountFormatted?.length === 2) {
    return `R$ ${amountFormatted}`
  }

  // Replace every 3 digits with 3 digits and a dot plus a comma followed by 2 digits
  const amountFormattedWithComma = amountFormatted?.replace?.(
    /(?=\d{2})(\d{2})$/,
    ',$1'
  )
  const amountFormattedWithDot = amountFormattedWithComma?.replace?.(
    /(\d)(?=(\d{3})+(?!\d))/g,
    '$1.'
  )

  return `R$ ${amountFormattedWithDot || '0,00'}`
}
