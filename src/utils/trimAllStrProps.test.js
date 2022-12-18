import { trimAllStrProps } from './trimAllStrProps'

describe('trimAllStrProps', () => {
  it('should trim all string props', () => {
    const value = {
      name: '   test   ',
      email: ' test@test.com',
      address: {
        street: '   test   ',
        number: '   test   ',
        complement: '   test   '
      }
    }

    const expected = {
      name: 'test',
      email: 'test@test.com',
      address: {
        street: 'test',
        number: 'test',
        complement: 'test'
      }
    }

    expect(trimAllStrProps(value)).toEqual(expected)
  })

  it('should do not change if it is not a string neither an object', () => {
    const value = {
      str: '   test   ',
      obj: {
        name: '   test   '
      },
      arr: ['   test   ']
    }

    const expected = {
      str: 'test',
      obj: {
        name: 'test'
      },
      arr: ['   test   ']
    }

    expect(trimAllStrProps(value)).toEqual(expected)
  })

  it('should act as a normal .trim() function if receive a string', () => {
    const value = '   test   '

    const expected = 'test'

    expect(trimAllStrProps(value)).toEqual(expected)
  })
})
