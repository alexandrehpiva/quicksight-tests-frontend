import { onlyNumbers } from './onlyNumbers'

describe('onlyNumbers', () => {
  it('should return a string with only numbers', () => {
    expect(onlyNumbers('(11) 99999-9999')).toBe('11999999999')
  })

  it('should return empty string if value is null or undefined or empty string', () => {
    expect(onlyNumbers(null)).toBe('')
    expect(onlyNumbers(undefined)).toBe('')
    expect(onlyNumbers('')).toBe('')
  })

  it('should return a string with only numbers if the input is of type number', () => {
    expect(onlyNumbers(123)).toBe('123')
  })
})
