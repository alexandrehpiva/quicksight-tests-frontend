import { maskToCurrency } from './maskToCurrency'

describe('maskToCurrency', () => {
  it('should convert a currency string to a number', () => {
    const mockValue = 123456.7
    expect(
      maskToCurrency({
        nextState: { value: mockValue }
      })
    ).toEqual({
      value: 'R$ 123.456,70',
      selection: {
        start: 13,
        end: 13
      }
    })
  })
})
