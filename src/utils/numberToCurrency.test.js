import { numberToCurrency } from './numberToCurrency'

describe('numberToCurrency', () => {
  it('should convert a number to a currency string', () => {
    expect(numberToCurrency(123456.7)).toBe('R$ 123.456,70')
  })

  it('should convert a number to a currency string with two digits', () => {
    expect(numberToCurrency(123.45)).toBe('R$ 123,45')
  })

  it('should convert null or undefined ou empty string to a currency string', () => {
    expect(numberToCurrency(null)).toBe('R$ 0,00')
    expect(numberToCurrency(undefined)).toBe('R$ 0,00')
    expect(numberToCurrency('')).toBe('R$ 0,00')
  })
})
