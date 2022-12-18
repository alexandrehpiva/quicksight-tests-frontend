import { normalizeMapper } from './normalizeMapper'

describe('normalizeMapper', () => {
  it('should normalize object', () => {
    const obj = {
      AVAILABLE: 'AVAILABLE',
      UNAVAILABLE: 'UNAVAILABLE',
      REVOKED: 'REVOKED'
    }

    const normalizedObj = normalizeMapper(obj)
    expect(normalizedObj).toEqual({
      available: 'available',
      unavailable: 'unavailable',
      revoked: 'revoked'
    })
  })

  it('should normalize object with options', () => {
    const obj = {
      AVAILABLE: 'AVAILABLE',
      UNAVAILABLE: 'UNAVAILABLE',
      REVOKED: 'REVOKED'
    }

    const normalizedObj = normalizeMapper(obj, {
      normalizeKey: false,
      normalizeValue: false
    })
    expect(normalizedObj).toEqual({
      AVAILABLE: 'AVAILABLE',
      UNAVAILABLE: 'UNAVAILABLE',
      REVOKED: 'REVOKED'
    })
  })
})
