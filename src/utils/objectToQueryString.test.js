import { objectToQueryString } from './objectToQueryString'

describe('objectToQueryString', () => {
  it('should return empty string when object is empty', () => {
    expect(objectToQueryString({})).toBe('')
  })

  it('should return query string when object is not empty', () => {
    expect(objectToQueryString({ a: 1, b: 2 })).toBe('?a=1&b=2')
  })

  it('should return all itens if a prop of the object is an array', () => {
    expect(objectToQueryString({ a: [1, 2, 3] })).toBe('?a=1&a=2&a=3')
  })
})
