import { currencyToNumber } from './currencyToNumber'

describe('currencyToNumber', () => {
  it('should convert a currency string to a number', () => {
    expect(currencyToNumber('R$ 123.456,70')).toBe(123456.7)
  })

  it('should return 0 if null or undefined or empty string', () => {
    expect(currencyToNumber(null)).toBe(0)
    expect(currencyToNumber(undefined)).toBe(0)
    expect(currencyToNumber('')).toBe(0)
  })
})
